"use client";

import { useMemo, useState } from "react";

type MatchItem = {
  index: number;
  value: string;
  groups: string[];
};

type Topic = {
  title: string;
  description: string;
  code: string;
  takeaway: string;
};

const basicTopics: Topic[] = [
  {
    title: "Character Classes",
    description:
      "Character classes let you match groups like digits, words, and whitespace. They are the first step in practical regex building.",
    code: `\\d+        // one or more digits\n\\w+        // one or more word characters\n[a-zA-Z]+  // only letters`,
    takeaway: "Use character classes to narrow matches before adding complexity.",
  },
  {
    title: "Quantifiers",
    description:
      "Quantifiers define how many times a token appears. They make patterns flexible for varying input lengths.",
    code: `a*   // zero or more\na+   // one or more\na?   // optional\na{2,4} // between 2 and 4`,
    takeaway: "Pick strict quantifiers to reduce false-positive matches.",
  },
  {
    title: "Anchors",
    description:
      "Anchors match positions instead of characters. Start and end anchors help validate entire strings.",
    code: `^hello   // starts with hello\nworld$   // ends with world\n^\\d{10}$ // exactly 10 digits`,
    takeaway: "Use anchors for strong validation patterns like IDs and phone numbers.",
  },
  {
    title: "Simple Email Pattern",
    description:
      "A practical starter pattern can validate common email-like strings for frontend checks.",
    code: `\\b\\w+@\\w+\\.\\w+\\b`,
    takeaway: "Keep email regex practical; avoid over-complicated patterns unless required.",
  },
];

const advancedTopics: Topic[] = [
  {
    title: "Capturing vs Non-capturing Groups",
    description:
      "Capturing groups store matched segments while non-capturing groups help grouping without adding unnecessary captures.",
    code: `(https?)://(\\w+\\.\\w+)   // capturing groups\n(?:https?)://(\\w+\\.\\w+) // first group non-capturing`,
    takeaway: "Use non-capturing groups when group data is not needed.",
  },
  {
    title: "Lookaheads",
    description:
      "Lookaheads validate future context without consuming characters. Useful for password and token rules.",
    code: `^(?=.*[A-Z])(?=.*\\d).{8,}$\n// at least one uppercase, one digit, min length 8`,
    takeaway: "Lookaheads are strong for multi-rule validation in one pattern.",
  },
  {
    title: "Global and Multiline Flags",
    description:
      "Flags alter regex behavior. g finds all matches, i makes case-insensitive, and m changes line boundary behavior.",
    code: `/error/gi\n/^todo:/gm`,
    takeaway: "Always verify flags because they change result count and matching positions.",
  },
  {
    title: "Log Parsing Example",
    description:
      "Regex is effective for extracting IDs, levels, and timestamps from logs before analysis or monitoring.",
    code: `const line = \"[ERROR] 2026-02-23 userId=42\";\nconst match = line.match(/\\[(\\w+)\\]\\s(\\d{4}-\\d{2}-\\d{2}).*userId=(\\d+)/);\nconsole.log(match?.slice(1));`,
    takeaway: "Use grouped extraction for operational logs and analytics pipelines.",
  },
];

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
    <section className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-4">
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
            <pre className="h-[320px] overflow-auto code-paper bg-white border border-slate-200 p-3 font-mono text-xs text-slate-800">{parsedJson}</pre>
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

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">Common Regex Errors</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">Invalid regular expression</h3>
              <p className="mt-2 text-sm text-slate-700">Check unmatched parentheses, brackets, or escape sequences.</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">No matches found</h3>
              <p className="mt-2 text-sm text-slate-700">Verify flags like g, i, or m and confirm your pattern fits input text.</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">Unexpected capture groups</h3>
              <p className="mt-2 text-sm text-slate-700">Use non-capturing groups (?:...) where you do not need group outputs.</p>
            </article>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Basic Regex Topics with Examples</h2>
          <p className="mt-2 text-sm text-slate-600">
            Learn character classes, quantifiers, and anchors before writing advanced production patterns.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {basicTopics.map((topic) => (
              <article key={topic.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{topic.description}</p>
                <pre className="mt-3 overflow-x-auto rounded-md code-paper bg-white border border-slate-200 p-3 text-xs text-slate-800">
                  <code>{topic.code}</code>
                </pre>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Key takeaway:</span> {topic.takeaway}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Advanced Regex Topics with Examples</h2>
          <p className="mt-2 text-sm text-slate-600">
            Move to grouped extraction, lookaheads, and flag-driven parsing for real-world text processing.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {advancedTopics.map((topic) => (
              <article key={topic.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{topic.description}</p>
                <pre className="mt-3 overflow-x-auto rounded-md code-paper bg-white border border-slate-200 p-3 text-xs text-slate-800">
                  <code>{topic.code}</code>
                </pre>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Key takeaway:</span> {topic.takeaway}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
