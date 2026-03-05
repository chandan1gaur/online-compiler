"use client";

import Link from "next/link";

interface CodeExampleProps {
  title: string;
  code: string;
  explanation: string;
}

export default function CodeExample({ title, code, explanation }: CodeExampleProps) {
  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h4>
      <pre className="mt-2 overflow-x-auto rounded bg-slate-800 p-3 text-sm text-slate-100">
        <code>{code}</code>
      </pre>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{explanation}</p>
      <div className="mt-3 flex gap-2">
        <Link
          href="/javascript/online-compiler"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-700"
        >
          Run Code
        </Link>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
