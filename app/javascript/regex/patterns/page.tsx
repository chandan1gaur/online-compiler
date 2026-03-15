import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Regex Patterns & Flags - JavaScript",
  description:
    "Explore regex pattern building blocks like character classes, quantifiers, groups, lookarounds, and flags. Learn how to create reliable JavaScript regular expressions.",
  keywords: [
    "regex patterns",
    "regex flags",
    "javascript regex",
    "character classes",
    "lookahead",
    "lookbehind",
  ],
  openGraph: {
    title: "Regex Patterns & Flags",
    description:
      "Explore regex pattern building blocks like character classes, quantifiers, groups, lookarounds, and flags. Learn how to create reliable JavaScript regular expressions.",
    url: "/javascript/regex/patterns",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex Patterns & Flags",
    description:
      "Explore regex pattern building blocks like character classes, quantifiers, groups, lookarounds, and flags. Learn how to create reliable JavaScript regular expressions.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/regex/patterns" },
};

const patternsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Regex Patterns & Flags",
  description:
    "Explore regex pattern building blocks like character classes, quantifiers, groups, lookarounds, and flags. Learn how to create reliable JavaScript regular expressions.",
  author: {
    "@type": "Organization",
    name: "Online JavaScript Compiler",
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
};

export default function JavascriptRegexPatternsPage() {
  return (
    <>
      <Script id="patterns-schema" type="application/ld+json">
        {JSON.stringify(patternsSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          Regex Patterns &amp; Flags
        </h1>

        <p className="text-lg text-slate-700 mb-6">
          Regular expressions are built from small pieces that combine into powerful patterns. Understanding each building block
          gives you better control, fewer bugs, and more readable patterns.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Character Classes &amp; Shorthand Tokens</h2>
          <p className="text-slate-700 mb-4">
            Character classes let you match one character from a set. You can list characters inside square brackets <code>[]</code> or
            use shorthand tokens to cover common groups like digits and word characters.
          </p>

          <CodeExample
            title="Match digits and letters using character classes"
            code={`const digitRegex = /\\d+/g;
console.log('ID: 1234'.match(digitRegex)); // ['1234']

const wordRegex = /\\w+/g;
console.log('Hello world!'.match(wordRegex)); // ['Hello', 'world']

const vowelRegex = /[aeiou]/gi;
console.log('Regex'.match(vowelRegex)); // ['e']`}
            explanation="Use character classes and shorthand tokens to match ranges of characters without listing each one individually."
          />

          <ul className="list-disc pl-6 text-slate-700">
            <li><code>\\d</code> — any digit (0–9)</li>
            <li><code>\\w</code> — word character (letter, digit, underscore)</li>
            <li><code>\\s</code> — whitespace (space, tab, newline)</li>
            <li><code>[abc]</code> — match <code>a</code>, <code>b</code>, or <code>c</code></li>
            <li><code>[^abc]</code> — match anything except <code>a</code>, <code>b</code>, or <code>c</code></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Quantifiers (How Many Times)</h2>
          <p className="text-slate-700 mb-4">
            Quantifiers define how many times the previous token can repeat. By default, they are greedy (match as much as possible),
            but you can make them lazy to match as little as possible.
          </p>

          <CodeExample
            title="Use quantifiers to match repeated patterns"
            code={`const input = 'A1 B22 C333';
console.log(input.match(/\\d+/g)); // ['1', '22', '333']

// Match exactly 2 digits
console.log(input.match(/\\d{2}/g)); // ['22']

// Match at least 2 digits
console.log(input.match(/\\d{2,}/g)); // ['22', '333']`}
            explanation="Quantifiers like +, *, and {n,m} let you match repeated characters or groups. Use lazy quantifiers (e.g., *?) when you want the smallest match."
          />

          <ul className="list-disc pl-6 text-slate-700">
            <li><code>*</code> — 0 or more times</li>
            <li><code>+</code> — 1 or more times</li>
            <li><code>?</code> — 0 or 1 time</li>
            <li><code>{"{n}"}</code> — exactly n times</li>
            <li><code>{"{n,}"}</code> — at least n times</li>
            <li><code>{"{n,m}"}</code> — between n and m times</li>
            <li><code>*?</code>, <code>+?</code>, <code>??</code>, <code>{"{n,m}?"}</code> — lazy quantifiers</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Anchors &amp; Boundaries</h2>
          <p className="text-slate-700 mb-4">
            Anchors restrict where the pattern can match. They are particularly useful when validating that an entire string matches
            a pattern rather than just containing it.
          </p>

          <CodeExample
            title="Use anchors to validate full strings"
            code={`const idRegex = /^[A-Z]{2}-\\d{4}$/;
console.log(idRegex.test('AB-1234')); // true
console.log(idRegex.test('AB-12345')); // false
console.log(idRegex.test('xx AB-1234 yy')); // false`}
            explanation="^ and $ ensure that the entire string matches the pattern, not just a substring."
          />

          <ul className="list-disc pl-6 text-slate-700">
            <li><code>^</code> — start of string (or line with <code>m</code> flag)</li>
            <li><code>$</code> — end of string (or line with <code>m</code> flag)</li>
            <li><code>\\b</code> — word boundary (between word and non-word characters)</li>
            <li><code>\\B</code> — non-word boundary</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Groups &amp; Lookarounds</h2>
          <p className="text-slate-700 mb-4">
            Groups capture parts of a match and allow you to apply quantifiers to multiple tokens at once. Lookarounds let you assert the
            presence or absence of a pattern without consuming characters.
          </p>

          <CodeExample
            title="Capture groups and replacements"
            code={`const date = '2026-03-13';
const formatted = date.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$1/$2/$3');
console.log(formatted); // 2026/03/13`}
            explanation="Capture groups (parentheses) allow you to refer to matched subgroups in replacements using $1, $2, etc."
          />

          <CodeExample
            title="Validate rules with lookahead"
            code={`const password = /^(?=.*[A-Z])(?=.*\\d)(?=.{8,}).*$/;
console.log(password.test('Test1234')); // true
console.log(password.test('test1234')); // false`}
            explanation="Lookahead assertions let you require multiple conditions without consuming characters, which is useful for complex validation."
          />

          <ul className="list-disc pl-6 text-slate-700">
            <li><code>(...)</code> — capturing group</li>
            <li><code>(?:...)</code> — non-capturing group</li>
            <li><code>(?=...)</code> — positive lookahead</li>
            <li><code>(?!...)</code> — negative lookahead</li>
            <li><code>(?&lt;=...)</code> — positive lookbehind (modern engines)</li>
            <li><code>(?&lt;!...)</code> — negative lookbehind</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Escaping Special Characters</h2>
          <p className="text-slate-700 mb-4">
            Certain characters have special meaning in regex. Escape them with a backslash <code>\</code> to match them literally.
            For example, use <code>\.</code> to match a literal dot rather than any character.
          </p>

          <ul className="list-disc pl-6 text-slate-700">
            <li><code>. ^ $ * + ? ( ) [ ] { } | \</code> — escape to match literally</li>
            <li>
              Inside character classes, only <code>^</code>, <code>-</code>, <code>]</code>, and <code>\</code> are special, making it easier
              to include most symbols.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Next Steps</h2>
          <p className="text-slate-700">
            Ready to apply these patterns? Try the <a href="/regex/online-compiler">Regex Tester</a> for real-time feedback, and visit
            the <a href="/javascript/regex/methods">Regex Methods</a> page to see how to use regex with JavaScript string APIs.
          </p>
        </section>
      </main>
    </>
  );
}
