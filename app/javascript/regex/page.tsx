import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Regular Expressions - Overview",
  description:
    "Learn the basics of regular expressions in JavaScript. Understand regex syntax, flags, and how to apply patterns for validation, parsing, and text processing.",
  keywords: [
    "javascript regex",
    "regular expressions",
    "regex tutorial",
    "regex syntax",
    "pattern matching",
  ],
  alternates: { canonical: "/javascript/regex" },
};

export default function JavascriptRegexOverviewPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Script
        id="json-ld-regex-overview"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript Regular Expressions - Overview',
            description:
              'Learn the basics of regular expressions in JavaScript. Understand regex syntax, flags, and how to apply patterns for validation, parsing, and text processing.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />

      <article className="prose prose-slate mx-auto dark:prose-invert">
        <h1>JavaScript Regular Expressions (Regex) Overview</h1>
        <p>
          Regular expressions (regex) are a compact, expressive way to describe patterns in text. In JavaScript,
          regex is used for searching, validating, replacing, and extracting strings without writing large amounts of
          manual parsing code. Good regex skills let you handle everything from simple validations to complex data extraction.
          This page walks through key concepts, practical examples, and common gotchas so you can write regex confidently.
        </p>

        <h2>What is a Regular Expression?</h2>
        <p>
          A regular expression is a sequence of symbols that defines a search pattern. Instead of checking each character
          manually, a regex engine reads the pattern and determines whether a string matches. Patterns can match exact text
          (e.g., <code>hello</code>), character sets (e.g., <code>[a-z]</code>), or even nested structures using groups.
          Regex is widely supported across languages, and in JavaScript it is built into the language via the
          <code>RegExp</code> object and literal syntax.
        </p>
        <p>
          While regex is powerful, it can also be hard to read if overused. Learning how to structure patterns clearly, comment
          complex expressions (by splitting them into named parts), and validate their behavior with test cases will save you
          time and avoid bugs.
        </p>

        <h2>Regex Syntax Quick Tour</h2>
        <p>
          Regex syntax combines literal characters with special meta-characters. For example, <code>\d</code> matches digits,
          <code>\w</code> matches word characters, and quantifiers like <code>+</code> or <code>*</code> define how many times a
          match can repeat. You can group patterns using parentheses to capture parts of the match for later reuse.
        </p>
        <p>
          Flags modify how a pattern is applied. Common flags include <code>g</code> (global), <code>i</code> (ignore case),
          and <code>m</code> (multiline). Understanding how flags affect match behavior is critical — especially when you use
          the same regex multiple times, because some flags change internal state.
        </p>

        <h2>Regex in JavaScript: Literals vs RegExp</h2>
        <p>
          JavaScript supports two ways to create regex patterns. The difference matters when patterns are static versus
          when they are built at runtime (for example, from user input).
        </p>
        <ul>
          <li>
            <strong>Regex literal</strong> (e.g., <code>/pattern/i</code>) — evaluated once at parse time and is easy to read.
          </li>
          <li>
            <strong>RegExp constructor</strong> (e.g., <code>new RegExp('pattern', 'gi')</code>) — useful when the pattern is
            generated dynamically or comes from external input.
          </li>
        </ul>
        <p>
          When using the constructor, escape backslashes properly (e.g., <code>new RegExp('\\d+')</code>). Literal syntax is
          usually preferred for static patterns because it is shorter and easier to maintain.
        </p>

        <h2>Common Real-World Uses</h2>
        <p>
          Regex is especially useful in user input validation and text transformation. Instead of writing complex conditional logic
          to check whether an email address is valid or to parse a log entry, a well-crafted regex can do the job with a single
          expression. That said, keep patterns maintainable: comment complicated parts, break patterns into smaller pieces if needed,
          and prefer readability when possible.
        </p>
        <p>
          Some common tasks where regex shines:
        </p>
        <ul>
          <li>Validating form input like email addresses, phone numbers, and postal codes</li>
          <li>Extracting structured information from raw text (logs, CSV, HTML snippets)</li>
          <li>Replacing or sanitizing text (e.g., masking sensitive data)</li>
          <li>Parsing custom mini-languages (e.g., markup, command syntax)</li>
        </ul>

        <h2>Try These Examples</h2>
        <p>
          The best way to learn regex is by experimenting with real patterns and seeing what they match. Use the examples below
          as a starting point, and adjust them in the online regex tester to see how they behave.
        </p>

        <CodeExample
          title="Match digits in a string"
          code={`const pattern = /\\d+/g;
const text = 'Order 123, Order 456';
console.log(text.match(pattern)); // ['123', '456']`}
          explanation="The \`g\` flag makes the regex return all matches. Without it, the regex matches only the first number."
        />

        <CodeExample
          title="Validate a simple email address"
          code={`const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
console.log(emailRegex.test('user@example.com')); // true
console.log(emailRegex.test('user@invalid')); // false`}
          explanation="This regex checks for a local part, an @ symbol, a domain, and a top-level domain. Real-world email validation often requires more rules, but this is a strong baseline."
        />

        <CodeExample
          title="Use capture groups to reformat text"
          code={`const input = '2026-03-13';
const output = input.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$1/$2/$3');
console.log(output); // '2026/03/13'`}
          explanation="Capture groups (parentheses) let you reuse pieces of the matched text in the replacement. The placeholders $1, $2, etc., refer to each group."
        />

        <h2>Debugging and Best Practices</h2>
        <p>
          Regex can become hard to read, especially when using many special characters. When your patterns grow beyond a few dozen
          characters, consider using a regex builder tool or adding comments. Some developers split patterns into smaller named
          pieces using string concatenation (when using the RegExp constructor), which lets you document the intent for each part.
        </p>
        <p>
          Also be mindful of performance. Complex patterns with nested quantifiers can cause catastrophic backtracking, which slows
          execution dramatically for certain inputs. If you notice a regex running slowly, try simplifying the pattern or using a
          different approach (like parsing with string methods or a parser library).
        </p>

        <h2>Where to Next?</h2>
        <p>
          Once you're comfortable with the basics, explore the dedicated pages on this site for more depth:
        </p>
        <ul>
          <li>
            <a href="/javascript/regex/patterns">Regex Patterns &amp; Flags</a> — dive deeper into character classes, quantifiers, and lookarounds.
          </li>
          <li>
            <a href="/javascript/regex/methods">Regex Methods</a> — learn about <code>match</code>, <code>replace</code>, <code>test</code>, and how different methods behave with global patterns.
          </li>
          <li>
            <a href="/regex/online-compiler">Regex Tester</a> — use the interactive tool to debug patterns and visualize matches.
          </li>
        </ul>
      </article>
    </main>
  );
}
