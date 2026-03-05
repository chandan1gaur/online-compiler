"use client";

import Link from "next/link";

interface OperatorsCodeExampleProps {
  title: string;
  code: string;
  explanation: string;
}

export default function OperatorsCodeExample({ title, code, explanation }: OperatorsCodeExampleProps) {
  const compilerBaseHref = "/javascript/online-compiler";
  const getRunInCompilerHref = (code: string) => `${compilerBaseHref}?run=1&code=${encodeURIComponent(code)}`;

  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/50">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h4>
        <div className="flex gap-2">
          <Link
            href={compilerBaseHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Open
          </Link>
          <Link
            href={getRunInCompilerHref(code)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-emerald-600/60 bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-200 dark:border-emerald-500/60 dark:bg-emerald-500/20 dark:text-emerald-200 dark:hover:bg-emerald-500/30"
          >
            Run
          </Link>
        </div>
      </div>
      <pre className="overflow-x-auto rounded border border-slate-200 bg-slate-950 p-3 text-xs text-slate-100 dark:border-slate-700">
        <code>{code}</code>
      </pre>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{explanation}</p>
    </div>
  );
}
