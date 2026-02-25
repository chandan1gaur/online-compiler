"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

type CompilerMode = "html" | "js";

type HomeProps = {
  initialMode?: CompilerMode;
  initialCode?: string;
  autoRun?: boolean;
};

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const FILES_STORAGE_KEY = "oc:snippet_files";
const STDIN_STORAGE_KEY = "oc:stdin";
const SPLIT_STORAGE_KEY = "oc:split";

export default function Home({ initialMode = "html", initialCode, autoRun = false }: HomeProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const desktopLayoutRef = useRef<HTMLDivElement | null>(null);
  const resizingRef = useRef(false);

  const defaultFiles: Record<string, string> = {
    "index.html":
      '<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>Preview</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <div id="app">Hello from index.html</div>\n  <script src="script.js"></script>\n</body>\n</html>',
    "styles.css":
      "/* styles.css */\nbody{font-family:Inter,system-ui;margin:20px;color:#111}#app{padding:12px;border:1px solid #eee;border-radius:8px}",
    "script.js": "// script.js\nconsole.log('hello from script.js')",
    "main.js": "// main.js\nconsole.log('hello from main.js')",
  };

  const startingMode: CompilerMode = initialCode ? "js" : initialMode;
  const [mode, setMode] = useState<CompilerMode>(startingMode);
  const [activeFile, setActiveFile] = useState<string>(startingMode === "html" ? "index.html" : "main.js");
  const [mobilePanel, setMobilePanel] = useState<"editor" | "output">("editor");
  const [showMobileInput, setShowMobileInput] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [splitPercent, setSplitPercent] = useState<number>(() => {
    if (typeof window === "undefined") return 54;
    const saved = Number(localStorage.getItem(SPLIT_STORAGE_KEY));
    return Number.isFinite(saved) && saved >= 35 && saved <= 70 ? saved : 54;
  });
  const [stdinInput, setStdinInput] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(STDIN_STORAGE_KEY) || "";
  });
  const [files, setFiles] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return defaultFiles;
    try {
      const saved = localStorage.getItem(FILES_STORAGE_KEY);
      const merged = saved ? { ...defaultFiles, ...JSON.parse(saved) } : defaultFiles;
      if (initialCode) {
        return { ...merged, "main.js": initialCode };
      }
      return merged;
    } catch {
      if (initialCode) {
        return { ...defaultFiles, "main.js": initialCode };
      }
      return defaultFiles;
    }
  });
  const hasAutoRun = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(FILES_STORAGE_KEY, JSON.stringify(files));
      } catch {}
    }, 400);
    return () => clearTimeout(t);
  }, [files]);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STDIN_STORAGE_KEY, stdinInput);
      } catch {}
    }, 200);
    return () => clearTimeout(t);
  }, [stdinInput]);

  useEffect(() => {
    try {
      localStorage.setItem(SPLIT_STORAGE_KEY, String(splitPercent));
    } catch {}
  }, [splitPercent]);

  const extFor = (name: string) => {
    const ext = name.split(".").pop() || "";
    if (ext === "html") return "html";
    if (ext === "css") return "css";
    return "javascript";
  };

  const runtimeBootstrap = (encodedInput: string) => `\n<script>\n(function(){\n  try {\n    const decoded = atob('${encodedInput}');\n    const lines = decoded ? decoded.replace(/\\r\\n/g, '\\n').split('\\n') : [];\n    window.__stdin = lines;\n    window.prompt = function(message, defaultValue){\n      if (!window.__stdin || window.__stdin.length === 0) return defaultValue || '';\n      return window.__stdin.shift();\n    };\n  } catch(e) {}\n})();\n</script>\n`;

  const buildSrcDoc = useCallback(() => {
    const encodedInput = btoa(unescape(encodeURIComponent(stdinInput || "")));

    if (mode === "js") {
      const js = files["main.js"] || "";
      const encodedJs = btoa(unescape(encodeURIComponent(js)));

      return `<!doctype html>\n<html>\n<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>body{font-family:ui-monospace,Menlo,Monaco,Consolas;margin:0;padding:8px;background:#f8fafc}#console{display:none;background:white;border:1px solid #dbe3ef;padding:8px;border-radius:8px;max-height:48%;overflow-y:auto;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start;font-size:12px}#console span{display:inline-block;padding:6px 8px;border-radius:6px;background:transparent;margin:0;white-space:pre-wrap}#console .log{color:#0f172a;background:rgba(15,23,42,0.04)}#console .error{color:#b91c1c;background:rgba(185,28,28,0.08);font-weight:600}#console .warn{color:#b45309;background:rgba(180,83,9,0.1)}#console .debug{color:#334155;background:rgba(51,65,85,0.08)}#console .info{color:#0369a1;background:rgba(3,105,161,0.08)}#app{padding:8px;margin-top:8px;background:white;border:1px solid #dbe3ef;border-radius:8px}</style></head>\n<body>\n<div id=\"console\"></div>\n<div id=\"app\"></div>${runtimeBootstrap(encodedInput)}\n<script>\n(function(){\n  const consoleDiv = document.getElementById('console');\n  const promiseStates = new WeakMap();\n\n  function trackPromise(promise) {\n    if (!promiseStates.has(promise)) {\n      promiseStates.set(promise, { state: 'pending' });\n      promise.then(\n        (value) => promiseStates.set(promise, { state: 'fulfilled', value: value }),\n        (reason) => promiseStates.set(promise, { state: 'rejected', reason: reason })\n      );\n    }\n\n    return promiseStates.get(promise);\n  }\n\n  function formatValue(value, seen, inCollection) {\n    if (value === null) return 'null';\n    if (value === undefined) return 'undefined';\n\n    const t = typeof value;\n    if (t === 'string') return inCollection ? JSON.stringify(value) : value;\n    if (t === 'number') {\n      if (Number.isNaN(value)) return 'NaN';\n      if (!Number.isFinite(value)) return value > 0 ? 'Infinity' : '-Infinity';\n      return String(value);\n    }\n    if (t === 'boolean' || t === 'bigint' || t === 'symbol') return String(value);\n    if (t === 'function') return '[Function ' + (value.name || 'anonymous') + ']';\n\n    if (value instanceof Error) return value.stack || value.message || String(value);\n    if (value instanceof Date) return value.toISOString();\n    if (value instanceof RegExp) return String(value);\n    if (value instanceof Promise) {\n      const state = trackPromise(value);\n      if (!state || state.state === 'pending') return 'Promise { <pending> }';\n      if (state.state === 'fulfilled') return 'Promise { ' + formatValue(state.value, seen, true) + ' }';\n      return 'Promise { <rejected> ' + formatValue(state.reason, seen, true) + ' }';\n    }\n\n    if (!seen) seen = new WeakSet();\n    if (t === 'object') {\n      if (seen.has(value)) return '[Circular]';\n      seen.add(value);\n    }\n\n    if (Array.isArray(value)) {\n      return '[' + value.map((item) => formatValue(item, seen, true)).join(', ') + ']';\n    }\n\n    if (value instanceof Set) {\n      return 'Set(' + value.size + ') {' + Array.from(value).map((item) => formatValue(item, seen, true)).join(', ') + '}';\n    }\n\n    if (value instanceof Map) {\n      return 'Map(' + value.size + ') {' + Array.from(value.entries()).map(([k, v]) => formatValue(k, seen, true) + ' => ' + formatValue(v, seen, true)).join(', ') + '}';\n    }\n\n    if (ArrayBuffer.isView(value) && !(value instanceof DataView)) {\n      return value.constructor.name + '(' + value.length + ') [' + Array.from(value).join(', ') + ']';\n    }\n\n    try {\n      return JSON.stringify(value, function(key, val){\n        if (typeof val === 'bigint') return String(val) + 'n';\n        return val;\n      }, 2);\n    } catch (_err) {\n      return String(value);\n    }\n  }\n\n  function safeLogToSpan(className, args) {\n    if (!consoleDiv) return;\n    if (consoleDiv.style.display === 'none') consoleDiv.style.display = 'flex';\n    const msg = Array.from(args).map((a) => formatValue(a)).join(' ');\n    const span = document.createElement('span');\n    span.className = className;\n    span.textContent = msg;\n    consoleDiv.appendChild(span);\n    consoleDiv.scrollTop = consoleDiv.scrollHeight;\n  }\n\n  const l = console.log; const e = console.error; const w = console.warn; const d = console.debug; const i = console.info;\n  console.log = (...a) => { safeLogToSpan('log', a); l(...a); };\n  console.error = (...a) => { safeLogToSpan('error', a); e(...a); };\n  console.warn = (...a) => { safeLogToSpan('warn', a); w(...a); };\n  console.debug = (...a) => { safeLogToSpan('debug', a); d(...a); };\n  console.info = (...a) => { safeLogToSpan('info', a); i(...a); };\n  window.onerror = (msg, url, line, col, err) => {\n    const details = err && err.stack ? err.stack : (msg + ' at line ' + line + ':' + col);\n    safeLogToSpan('error', [details]);\n    return true;\n  };\n  window.onunhandledrejection = (ev) => {\n    const reason = ev && ev.reason ? ev.reason : 'Unknown rejection';\n    safeLogToSpan('error', ['Unhandled Promise Rejection: ' + formatValue(reason)]);\n  };\n})();\n</script>\n<script>\n(async function(){\n  try {\n    const userCode = atob('${encodedJs}');\n    if (!userCode || userCode.trim() === '') {\n      console.log('(empty code)');\n      return;\n    }\n\n    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;\n    const runner = new AsyncFunction(userCode + '\\n//# sourceURL=main.js');\n    await runner();\n  } catch (err) {\n    const errMsg = err && err.stack ? err.stack : (err && err.message ? err.message : String(err));\n    console.error('Runtime error: ' + errMsg);\n  }\n})();\n</script>\n</body>\n</html>`;
    }

    let html = files["index.html"] || "";
    const css = files["styles.css"] || "";
    const js = files["script.js"] || "";

    try {
      html = html.replace(/<script\s+[^>]*src=["']script\.js["'][^>]*>\s<\/script>/gi, "");
      html = html.replace(/<script\s+[^>]*src=["']script\.js["'][^>]*>\s*?/gi, "");
    } catch {}

    const withCss = html.replace("</head>", `<style>\n${css}\n</style>\n</head>`);
    const injected = withCss.replace(
      "</body>",
      `${runtimeBootstrap(encodedInput)}<script>\ntry{\n${js}\n}catch(e){console.error(e)}\n</script>\n</body>`
    );

    return injected;
  }, [files, mode, stdinInput]);

  const run = useCallback(() => {
    setIsRunning(true);
    const doc = buildSrcDoc();
    if (iframeRef.current) iframeRef.current.srcdoc = doc;
    setTimeout(() => setIsRunning(false), 350);
  }, [buildSrcDoc]);

  useEffect(() => {
    if (!autoRun || hasAutoRun.current) return;
    hasAutoRun.current = true;
    const timer = setTimeout(() => run(), 180);
    return () => clearTimeout(timer);
  }, [autoRun, run, files]);

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
      const blob = new Blob([files["main.js"] || ""], { type: "text/javascript" });
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
    router.push(m === "html" ? "/html/online-compiler" : "/javascript/online-compiler");
  };

  const startResize = () => {
    resizingRef.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!resizingRef.current || !desktopLayoutRef.current) return;
      const rect = desktopLayoutRef.current.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(70, Math.max(35, pct));
      setSplitPercent(clamped);
    };

    const onUp = () => {
      if (!resizingRef.current) return;
      resizingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const editorPanel = (compact = false) => (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        Editor
      </div>
      <div className="flex flex-wrap gap-2 border-b border-slate-200 p-2 dark:border-slate-700">
        {(mode === "html" ? ["index.html", "styles.css", "script.js"] : ["main.js"]).map((name) => (
          <button
            key={name}
            onClick={() => setActiveFile(name)}
            className={`rounded-md px-3 py-1 text-sm font-medium transition ${
              activeFile === name
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div style={{ minHeight: compact ? "38vh" : "56vh" }}>
        <MonacoEditor
          height={compact ? "38vh" : "56vh"}
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
          theme={theme === "dark" ? "vs-dark" : "vs"}
        />
      </div>
    </article>
  );

  const outputPanel = (compact = false) => (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {mode === "html" ? "Live Preview" : "Output"}
      </div>
      <div className="space-y-2 p-2">
        <iframe
          ref={iframeRef}
          title="preview"
          className={`${compact ? "h-[34vh]" : "h-[42vh]"} w-full rounded-lg border border-slate-200 bg-white`}
          sandbox="allow-scripts"
        ></iframe>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Program Input (stdin)</p>
            <div className="flex items-center gap-2">
              {compact ? (
                <button
                  onClick={() => setShowMobileInput((prev) => !prev)}
                  className="rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {showMobileInput ? "Hide" : "Show"}
                </button>
              ) : null}
              <button
                onClick={() => setStdinInput("")}
                className="rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Clear
              </button>
            </div>
          </div>
          {!compact || showMobileInput ? (
            <textarea
              value={stdinInput}
              onChange={(e) => setStdinInput(e.target.value)}
              placeholder="Each line is consumed by prompt() in order"
              className={`${compact ? "h-20" : "h-24"} w-full resize-y rounded border border-slate-300 bg-white p-2 font-mono text-xs text-slate-900 outline-none`}
              spellCheck={false}
            />
          ) : null}
          {/* <div className="mt-2 rounded border border-slate-200 bg-white p-2 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <p className="font-semibold text-slate-700 dark:text-slate-200">Example (JavaScript mode)</p>
            <pre className="mt-1 overflow-x-auto rounded code-paper bg-white border border-slate-200 p-2 text-[11px] text-slate-800">{`const name = prompt("Enter your name:");
const age = prompt("Enter your age:");
console.log("Name:", name, "Age:", age);`}</pre>
            <p className="mt-1">Input lines example:</p>
            <pre className="overflow-x-auto rounded code-paper bg-white border border-slate-200 p-2 text-[11px] text-slate-800">{`Chandan
26`}</pre>
          </div> */}
        </div>
      </div>
    </article>
  );

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-3 shadow-xl dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 sm:p-4">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100 blur-3xl dark:bg-cyan-900/30"></div>
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/30"></div>

      <div className="relative">
        <div className="mb-4 flex flex-col items-start justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-700 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Interactive Workspace</p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">Run code instantly in your browser</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">Ctrl/Cmd + Enter to run. Resize editor/output panes on desktop.</p>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
            <button
              onClick={run}
              disabled={isRunning}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-70 md:w-auto"
            >
              {isRunning && <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>}
              {isRunning ? "Running" : "Run"}
            </button>

            <select
              value={mode}
              onChange={(e) => changeMode(e.target.value as CompilerMode)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 md:w-auto"
              aria-label="Language mode"
            >
              <option value="html">HTML</option>
              <option value="js">JavaScript</option>
            </select>

            <button
              onClick={download}
              className="w-full rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 md:w-auto"
            >
              Download
            </button>
          </div>
        </div>

        <div className="hidden lg:block" ref={desktopLayoutRef}>
          <div className="flex items-stretch">
            <div style={{ width: `${splitPercent}%` }} className="pr-1.5">
              {editorPanel()}
            </div>

            <button
              onMouseDown={startResize}
              aria-label="Resize panels"
              className="mx-0.5 w-2 cursor-col-resize rounded bg-slate-200 transition hover:bg-cyan-300 dark:bg-slate-700 dark:hover:bg-cyan-700"
            />

            <div className="flex-1 pl-1.5">{outputPanel()}</div>
          </div>
        </div>

        <div className="grid gap-4 lg:hidden">
          <div className="flex rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setMobilePanel("editor")}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                mobilePanel === "editor"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Editor
            </button>
            <button
              type="button"
              onClick={() => setMobilePanel("output")}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
                mobilePanel === "output"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {mode === "html" ? "Preview" : "Output"}
            </button>
          </div>
          {mobilePanel === "editor" ? editorPanel(true) : outputPanel(true)}
        </div>
      </div>
    </section>
  );
}


