"use client";

import { useMemo, useState } from "react";

type MatchItem = {
  index: number;
  value: string;
  groups: string[];
};

export default function RegexPlayground() {
  const [pattern, setPattern] = useState("\\b\\w+@\\w+\\.\\w+\\b");
  const [flags, setFlags] = useState("g");
  const [input, setInput] = useState(
    "Contact us at help@example.com or admin@codecompileronline.com for support."
  );
  const analysis = useMemo(() => {
    try {
      const regex = new RegExp(pattern, flags);
      const matches: MatchItem[] = [];
      for (const match of input.matchAll(regex)) {
        matches.push({
          index: match.index ?? -1,
          value: match[0] ?? "",
          groups: match.slice(1).map((item) => item ?? ""),
        });
      }
      return { matches, error: "" };
    } catch (e) {
      const text = e instanceof Error ? e.message : "Invalid regex";
      return { matches: [] as MatchItem[], error: text };
    }
  }, [pattern, flags, input]);

  const parsedJson = useMemo(() => JSON.stringify(analysis.matches, null, 2), [analysis.matches]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 p-6 shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Regex Tester & Parser Playground</h1>
        <p className="mt-2 text-sm text-slate-600">
          Test regular expressions in real time with flags, match index details, and parsed group output.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-[2fr_1fr]">
          <label className="text-sm font-medium text-slate-700">
            Pattern
            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 outline-none ring-cyan-300 focus:ring"
              placeholder="Enter regex pattern"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Flags
            <input
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-slate-900 outline-none ring-cyan-300 focus:ring"
              placeholder="gim"
            />
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Test Text
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-1 h-40 w-full rounded-md border border-slate-300 bg-white p-3 font-mono text-sm text-slate-900 outline-none ring-cyan-300 focus:ring"
            spellCheck={false}
          />
        </label>

        {analysis.error ? (
          <p className="mt-3 text-sm font-medium text-red-600">Regex error: {analysis.error}</p>
        ) : (
          <p className="mt-3 text-sm font-medium text-emerald-700">Matches found: {analysis.matches.length}</p>
        )}

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">Match List</div>
            <div className="h-[320px] overflow-auto p-3 text-sm text-slate-700">
              {analysis.matches.length === 0 ? (
                <p>No matches found.</p>
              ) : (
                <ul className="space-y-3">
                  {analysis.matches.map((item, idx) => (
                    <li key={`${item.index}-${idx}`} className="rounded-md border border-slate-200 bg-slate-50 p-2">
                      <p>
                        <span className="font-semibold">Index:</span> {item.index}
                      </p>
                      <p>
                        <span className="font-semibold">Match:</span> <code>{item.value}</code>
                      </p>
                      <p>
                        <span className="font-semibold">Groups:</span>{" "}
                        {item.groups.length ? item.groups.join(", ") : "None"}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">Parsed JSON Output</div>
            <pre className="h-[320px] overflow-auto bg-slate-950 p-3 font-mono text-xs text-emerald-100">{parsedJson}</pre>
          </article>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-slate-900">How to use regex tester</h2>
            <p className="mt-2 text-sm text-slate-700">
              Enter pattern and flags, then paste text input. Review match index and group details to debug regular
              expression behavior quickly.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-slate-900">Common regex use cases</h2>
            <p className="mt-2 text-sm text-slate-700">
              Validate email-like strings, extract IDs from logs, parse URLs, and test capture groups before shipping
              production code.
            </p>
          </article>
        </section>
      </div>
    </section>
  );
}
