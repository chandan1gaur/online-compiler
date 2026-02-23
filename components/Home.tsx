"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

type CompilerMode = "html" | "js";

type HomeProps = {
  initialMode?: CompilerMode;
};

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function Home({ initialMode = "html" }: HomeProps) {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const defaultFiles: Record<string, string> = {
    "index.html":
      '<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>Preview</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <div id="app">Hello from index.html</div>\n  <script src="script.js"></script>\n</body>\n</html>',
    "styles.css":
      "/* styles.css */\nbody{font-family:Inter,system-ui;margin:20px;color:#111}#app{padding:12px;border:1px solid #eee;border-radius:8px}",
    "script.js": "// script.js\nconsole.log('hello from script.js')",
    "main.js":
      "// main.js (single-file JS mode)\nconsole.log('hello from main.js')",
  };

  const [mode, setMode] = useState<CompilerMode>(initialMode);
  const [activeFile, setActiveFile] = useState<string>(initialMode === "html" ? "index.html" : "main.js");
  const [isRunning, setIsRunning] = useState(false);
  const [files, setFiles] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return defaultFiles;

    try {
      const saved = localStorage.getItem("oc:snippet_files");
      if (!saved) return defaultFiles;
      return { ...defaultFiles, ...JSON.parse(saved) };
    } catch {
      return defaultFiles;
    }
  });

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem("oc:snippet_files", JSON.stringify(files));
      } catch {}
    }, 500);
    return () => clearTimeout(t);
  }, [files]);

  const extFor = (name: string) => {
    const ext = name.split(".").pop() || "";
    if (ext === "html") return "html";
    if (ext === "css") return "css";
    return "javascript";
  };

  const buildSrcDoc = useCallback(() => {
    if (mode === "js") {
      const js = files["main.js"] || "";
      const encodedJs = btoa(unescape(encodeURIComponent(js)));
      return `<!doctype html>\n<html>\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>body{font-family:monospace;margin:0;padding:8px;background:#f8fafc}#console{display:none;background:white;border:1px solid #ddd;padding:8px;border-radius:8px;max-height:45%;overflow-y:auto;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start;font-size:12px}#console span{display:inline-block;padding:6px 8px;border-radius:6px;background:transparent;margin:0}#console .log{color:#000;background:rgba(0,0,0,0.03)}#console .error{color:#d32f2f;background:rgba(211,47,47,0.06);font-weight:600}#console .warn{color:#f57c00;background:rgba(245,124,0,0.06)}#console .debug{color:#666;background:rgba(0,0,0,0.04)}#console .info{color:#1976d2;background:rgba(25,118,210,0.04)}#app{padding:8px;margin-top:8px;background:white;border:1px solid #ddd;border-radius:8px}</style></head>\n<body>\n<div id=\"console\"></div>\n<div id=\"app\"></div>\n<script>\n(function(){\n  const consoleDiv = document.getElementById('console');\n  function safeLogToSpan(className, args) {\n    if (!consoleDiv) return;\n    if (consoleDiv.style.display === 'none') consoleDiv.style.display = 'flex';\n    const msg = Array.from(args).map(a => {\n      try{\n        if (a === null) return 'null';\n        if (a === undefined) return 'undefined';\n        if (a instanceof Map) return 'Map(' + a.size + ') ' + JSON.stringify(Object.fromEntries(a), null, 2);\n        if (a instanceof Set) return 'Set(' + a.size + ') ' + JSON.stringify(Array.from(a), null, 2);\n        if (typeof a === 'object') return JSON.stringify(a, null, 2);\n        return String(a);\n      }catch(e){ return String(a); }\n    }).join(' ');\n    const span = document.createElement('span');\n    span.className = className;\n    span.textContent = msg;\n    consoleDiv.appendChild(span);\n    consoleDiv.scrollTop = consoleDiv.scrollHeight;\n  }\n  const origLog = console.log;\n  const origError = console.error;\n  const origWarn = console.warn;\n  const origDebug = console.debug;\n  const origInfo = console.info;\n  console.log = function(...a){ safeLogToSpan('log', a); origLog(...a); }\n  console.error = function(...a){ safeLogToSpan('error', a); origError(...a); }\n  console.warn = function(...a){ safeLogToSpan('warn', a); origWarn(...a); }\n  console.debug = function(...a){ safeLogToSpan('debug', a); origDebug(...a); }\n  console.info = function(...a){ safeLogToSpan('info', a); origInfo(...a); }\n  window.onerror = function(msg, url, line, col, err){ safeLogToSpan('error', [msg + ' at line ' + line]); return true; }\n  window.onunhandledrejection = function(e){ safeLogToSpan('error', ['Unhandled Promise Rejection: ' + (e.reason || e)]); }\n})();\n</script>\n<script>\ntry {\n  const userCode = atob('${encodedJs}');\n  if (!userCode || userCode.trim() === '') {\n    console.log('(empty code)');\n  } else {\n    eval(userCode);\n  }\n} catch (err) {\n  const errMsg = err && err.stack ? err.stack : (err && err.message ? err.message : String(err));\n  console.error('Runtime error: ' + errMsg);\n}\n</script>\n</body>\n</html>`;
    }

    let html = files["index.html"] || "";
    const css = files["styles.css"] || "";
    const js = files["script.js"] || "";

    try {
      html = html.replace(
        /<script\s+[^>]*src=["']script\.js["'][^>]*>\s<\/script>/gi,
        "",
      );
      html = html.replace(
        /<script\s+[^>]*src=["']script\.js["'][^>]*>\s*?/gi,
        "",
      );
    } catch {}

    const withCss = html.replace(
      "</head>",
      `<style>\n${css}\n</style>\n</head>`,
    );
    const injected = withCss.replace(
      "</body>",
      `<script>\ntry{\n${js}\n}catch(e){console.error(e)}\n</script>\n</body>`,
    );
    return injected;
  }, [files, mode]);

  const run = useCallback(() => {
    setIsRunning(true);
    const doc = buildSrcDoc();
    if (iframeRef.current) iframeRef.current.srcdoc = doc;
    setTimeout(() => setIsRunning(false), 500);
  }, [buildSrcDoc]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [run]);

  const download = () => {
    if (mode === "js") {
      const blob = new Blob([files["main.js"] || ""], {
        type: "text/javascript",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "main.js";
      a.click();
      URL.revokeObjectURL(url);
      return;
    }
    const combined = buildSrcDoc();
    const blob = new Blob([combined], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const changeMode = (m: CompilerMode) => {
    setMode(m);
    setActiveFile(m === "html" ? "index.html" : "main.js");
    router.push(m === "html" ? "/html" : "/javascript");
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-4 shadow-xl sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-blue-100 blur-3xl"></div>

      <div className="relative">
        <div className="mb-4 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Interactive Workspace</p>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Run code instantly in your browser</h2>
            <p className="text-sm text-slate-600">Use Ctrl/Cmd + Enter to run your code quickly.</p>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <button
              onClick={run}
              disabled={isRunning}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-70 sm:w-auto"
            >
              {isRunning && (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              )}
              {isRunning ? "Running" : "Run"}
            </button>

            <select
              value={mode}
              onChange={(e) => changeMode(e.target.value as CompilerMode)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 sm:w-auto"
              aria-label="Language mode"
            >
              <option value="html">HTML</option>
              <option value="js">JavaScript</option>
            </select>

            <button
              onClick={download}
              className="w-full rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 sm:w-auto"
            >
              Download
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">Editor</div>
            <div className="flex flex-wrap gap-2 border-b border-slate-200 p-2">
              {(mode === "html" ? ["index.html", "styles.css", "script.js"] : ["main.js"]).map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveFile(name)}
                  className={`rounded-md px-3 py-1 text-sm font-medium transition ${
                    activeFile === name
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <div style={{ minHeight: "55vh" }}>
                <MonacoEditor
                  height="55vh"
                  defaultLanguage={extFor(activeFile)}
                  language={extFor(activeFile)}
                value={files[activeFile]}
                onChange={(val) => setFiles((f) => ({ ...f, [activeFile]: val || "" }))}
                  options={{
                    automaticLayout: true,
                    fontSize: 14,
                    minimap: { enabled: false },
                    padding: { top: 12 },
                    smoothScrolling: true,
                    scrollBeyondLastLine: false,
                  }}
                  theme="vs"
                />
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">Live Preview</div>
            <div className="p-2">
              <iframe
                ref={iframeRef}
                title="preview"
                className="h-[55vh] w-full rounded-lg border border-slate-200 bg-white"
                sandbox="allow-scripts"
              ></iframe>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
