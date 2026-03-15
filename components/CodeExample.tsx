"use client";

import Link from "next/link";
import { useState } from "react";

interface CodeExampleProps {
  index?: number;
  title: string;
  code: string;
  explanation?: string;
  maxLines?: number;
}

export default function CodeExample({ index, title, code, explanation, maxLines = 10 }: CodeExampleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const label = typeof index === "number" ? `${index}. ${title}` : title;
  const explanationText =
    explanation ??
    "This example shows how the code works. You can run it in the online compiler to see the output and experiment with variations.";

  const codeLines = code.split('\n');
  const shouldTruncate = codeLines.length > maxLines;
  const displayCode = shouldTruncate && !isExpanded
    ? codeLines.slice(0, maxLines).join('\n') + '\n...'
    : code;

  return (
    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50 sm:p-4">
      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{label}</h4>
      <pre className="mt-2 overflow-x-auto rounded bg-slate-800 p-3 text-xs text-slate-100 sm:text-sm">
        <code>{displayCode}</code>
      </pre>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
        >
          {isExpanded ? 'Show less' : `Show ${codeLines.length - maxLines} more lines`}
        </button>
      )}
      <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{explanationText}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          href={`/javascript/online-compiler?code=${encodeURIComponent(code)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-cyan-600 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-700 sm:w-auto"
        >
          Run Code
        </Link>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:w-auto"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
