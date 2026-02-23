"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const [mode, setMode] = useState<"html" | "js">("html");
  const [activeFile, setActiveFile] = useState<string>("index.html");
  const [isRunning, setIsRunning] = useState(false);

  const [files, setFiles] = useState<Record<string, string>>({
    "index.html":
      '<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>Preview</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <div id="app">Hello from index.html</div>\n  <script src="script.js"></script>\n</body>\n</html>',
    "styles.css":
      "/* styles.css */\nbody{font-family:Inter,system-ui;margin:20px;color:#111}#app{padding:12px;border:1px solid #eee}",
    "script.js": "// script.js\nconsole.log('hello from script.js')",
    "main.js":
      "// main.js (single-file JS mode)\nconsole.log('hello from main.js')",
  });

  useEffect(() => {
    try {
      const s = localStorage.getItem("oc:snippet_files");
      if (s) setFiles((f) => ({ ...f, ...JSON.parse(s) }));
    } catch (e) {}
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem("oc:snippet_files", JSON.stringify(files));
      } catch (e) {}
    }, 500);
    return () => clearTimeout(t);
  }, [files]);

  const extFor = (name: string) => {
    const ext = name.split(".").pop() || "";
    if (ext === "html") return "html";
    if (ext === "css") return "css";
    return "javascript";
  };

  const buildSrcDoc = () => {
    if (mode === "js") {
      const js = files["main.js"] || "";
      const encodedJs = btoa(unescape(encodeURIComponent(js)));
      return `<!doctype html>\n<html>\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>body{font-family:monospace;margin:0;padding:8px;background:#f5f5f5}#console{display:none;background:white;border:1px solid #ddd;padding:8px;border-radius:4px;max-height:45%;overflow-y:auto;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start;font-size:12px}#console span{display:inline-block;padding:6px 8px;border-radius:4px;background:transparent;margin:0}#console .log{color:#000;background:rgba(0,0,0,0.03)}#console .error{color:#d32f2f;background:rgba(211,47,47,0.06);font-weight:600}#console .warn{color:#f57c00;background:rgba(245,124,0,0.06)}#console .debug{color:#666;background:rgba(0,0,0,0.04)}#console .info{color:#1976d2;background:rgba(25,118,210,0.04)}#app{padding:8px;margin-top:8px;background:white;border:1px solid #ddd;border-radius:4px}</style></head>\n<body>\n<div id=\"console\"></div>\n<div id=\"app\"></div>\n<script>\n(function(){\n  const consoleDiv = document.getElementById('console');\n  function safeLogToSpan(className, args) {\n    if (!consoleDiv) return;\n    if (consoleDiv.style.display === 'none') consoleDiv.style.display = 'flex';\n    const msg = Array.from(args).map(a => {\n      try{\n        if (a === null) return 'null';\n        if (a === undefined) return 'undefined';\n        if (typeof a === 'object') return JSON.stringify(a, null, 2);\n        return String(a);\n      }catch(e){ return String(a); }\n    }).join(' ');\n    const span = document.createElement('span');\n    span.className = className;\n    span.textContent = msg;\n    consoleDiv.appendChild(span);\n    consoleDiv.scrollTop = consoleDiv.scrollHeight;\n  }\n  const origLog = console.log;\n  const origError = console.error;\n  const origWarn = console.warn;\n  const origDebug = console.debug;\n  const origInfo = console.info;\n  console.log = function(...a){ safeLogToSpan('log', a); origLog(...a); }\n  console.error = function(...a){ safeLogToSpan('error', a); origError(...a); }\n  console.warn = function(...a){ safeLogToSpan('warn', a); origWarn(...a); }\n  console.debug = function(...a){ safeLogToSpan('debug', a); origDebug(...a); }\n  console.info = function(...a){ safeLogToSpan('info', a); origInfo(...a); }\n  window.onerror = function(msg, url, line, col, err){ safeLogToSpan('error', [msg + ' at line ' + line]); return true; }\n  window.onunhandledrejection = function(e){ safeLogToSpan('error', ['Unhandled Promise Rejection: ' + (e.reason || e)]); }\n})();\n</script>\n<script>\nconst userCode = atob('${encodedJs}');\neval(userCode);\n</script>\n</body>\n</html>`;
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
    } catch (e) {}

    const withCss = html.replace(
      "</head>",
      `<style>\n${css}\n</style>\n</head>`,
    );
    const injected = withCss.replace(
      "</body>",
      `<script>\ntry{\n${js}\n}catch(e){console.error(e)}\n</script>\n</body>`,
    );
    return injected;
  };

  const run = () => {
    setIsRunning(true);
    const doc = buildSrcDoc();
    if (iframeRef.current) iframeRef.current.srcdoc = doc;
    // Keep loader visible for at least 500ms
    setTimeout(() => setIsRunning(false), 500);
  };

  // keyboard shortcut: Ctrl/Cmd + Enter to run
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [files, mode, activeFile]);

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

  return (
    <div className="bg-gray-50 p-4 subpixel-antialiased">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4">
          <div className="flex items-center gap-3 mt-4 sm:mt-6">
            <div className="flex items-center">
              <img src="/logo-icon.svg" alt="Online Compiler" className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Online Compiler
            </h1>
          </div>

          <div className="flex items-center gap-3 mt-4 sm:mt-0 flex-wrap sm:flex-nowrap">
            <button
              onClick={run}
              disabled={isRunning}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white text-sm font-medium rounded-md cursor-pointer transition duration-200 shadow-sm hover:shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
            >
              {isRunning && (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {isRunning ? "" : "Run"}
            </button>

            <select
              value={mode}
              onChange={(e) => {
                const m = e.target.value as any;
                setMode(m);
                setActiveFile(m === "html" ? "index.html" : "main.js");
              }}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm rounded-md border border-gray-300 cursor-pointer transition duration-200 w-full sm:w-auto"
              aria-label="Mode"
            >
              <option value="html">HTML</option>
              <option value="js">JavaScript</option>
            </select>

            <button
              onClick={download}
              className="px-4 py-1.5 bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition duration-200 cursor-pointer shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Download
            </button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 bg-white rounded shadow p-2 flex flex-col">
              <div className="flex gap-2 border-b pb-2 mb-2 flex-wrap">
                {(mode === "html" ? ["index.html", "styles.css", "script.js"] : ["main.js"]).map((name) => (
                  <button
                    key={name}
                    onClick={() => setActiveFile(name)}
                    className={`subpixel-antialiased px-3 py-1 rounded ${
                      activeFile === name ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    } cursor-pointer text-sm`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-auto subpixel-antialiased" style={{ minHeight: '50vh' }}>
                <MonacoEditor
                  height="100%"
                  defaultLanguage={extFor(activeFile)}
                  language={extFor(activeFile)}
                  value={files[activeFile]}
                  onChange={(val) => setFiles((f) => ({ ...f, [activeFile]: val || "" }))}
                  options={{ automaticLayout: true, fontSize: 14 }}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white rounded shadow p-2 flex flex-col subpixel-antialiased">
              <div className="font-medium mb-2 px-2 py-1 bg-blue-100 text-blue-900 rounded text-sm">📺 Preview</div>
              <div className="mt-1 border rounded overflow-hidden">
                <iframe ref={iframeRef} title="preview" className="w-full border-0" style={{ height: '50vh' }} sandbox="allow-scripts"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
