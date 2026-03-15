import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Regex Methods in JavaScript",
  description:
    "Learn how to use string and RegExp methods with regular expressions in JavaScript. Includes match, replace, test, matchAll, exec, and best practices.",
  keywords: [
    "regex methods",
    "javascript regex",
    "match",
    "replace",
    "test",
    "exec",
    "matchAll",
  ],
  openGraph: {
    title: "Regex Methods in JavaScript",
    description:
      "Learn how to use string and RegExp methods with regular expressions in JavaScript. Includes match, replace, test, matchAll, exec, and best practices.",
    url: "/javascript/regex/methods",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex Methods in JavaScript",
    description:
      "Learn how to use string and RegExp methods with regular expressions in JavaScript. Includes match, replace, test, matchAll, exec, and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/regex/methods" },
};

const methodsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Regex Methods in JavaScript",
  description:
    "Learn how to use string and RegExp methods with regular expressions in JavaScript. Includes match, replace, test, matchAll, exec, and best practices.",
  author: {
    "@type": "Organization",
    name: "Online JavaScript Compiler",
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
};

export default function JavascriptRegexMethodsPage() {
  return (
    <>
      <Script id="methods-schema" type="application/ld+json">
        {JSON.stringify(methodsSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          Regex Methods in JavaScript
        </h1>

        <p className="text-lg text-slate-700 mb-6">
          Regular expressions are powerful, but you need the right methods to run them, extract matches, and transform text. This page
          covers the most common String and RegExp APIs for working with regex patterns in JavaScript.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">String Methods that Accept Regex</h2>
          <p className="text-slate-700 mb-4">
            Several string methods accept a regular expression as the first argument. Use them when you need to search, verify, or replace
            parts of a string without manually iterating over matches.
          </p>

          <CodeExample
            title="Find matches with string.match()"
            code={`const msg = 'Hello 123, hello 456';
const digits = msg.match(/\d+/g);
console.log(digits); // ['123', '456']

const noMatch = msg.match(/xyz/);
console.log(noMatch); // null`}
            explanation="String.match() returns an array of matches, or null when there is no match. With the global flag (g) it returns all matches."
          />

          <CodeExample
            title="Split a string using a regex"
            code={`const csv = 'one,two,,three';
console.log(csv.split(/,/)); // ['one', 'two', '', 'three']

// Split on one or more spaces
console.log('a  b   c'.split(/\s+/)); // ['a', 'b', 'c']`}
            explanation="split() works with regex patterns, which can be especially useful when you need to split on variable whitespace or delimiters."
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">RegExp Methods: test() and exec()</h2>
          <p className="text-slate-700 mb-4">
            RegExp instances have their own methods that offer fine-grained control. test() is great for boolean checks, while exec()
            returns rich match information including capture groups and match indexes.
          </p>

          <CodeExample
            title="Validate input with test()"
            code={`const hasUppercase = /[A-Z]/;
console.log(hasUppercase.test('hello')); // false
console.log(hasUppercase.test('Hello')); // true`}
            explanation="test() returns true or false depending on whether the pattern matches. It’s fast and easy for simple validations."
          />

          <CodeExample
            title="Use exec() to inspect matches"
            code={`const regex = /(\w+)@(\w+)\.(\w+)/;
const match = regex.exec('test@example.com');
console.log(match[0]); // 'test@example.com'
console.log(match[1]); // 'test'
console.log(match[2]); // 'example'
console.log(match[3]); // 'com'`}
            explanation="exec() returns an array with the full match at index 0 and captured groups in subsequent indexes. It also includes the match index and input string."
          />

          <p className="text-slate-700 mb-4">
            When the regex has the <code>g</code> flag, <code>exec()</code> and <code>test()</code> advance <code>lastIndex</code> on each call.
            That can be used to iterate matches, but it means you should reset <code>lastIndex</code> if you reuse the regex.
          </p>

          <CodeExample
            title="Iterate matches with exec() and lastIndex"
            code={`const regex = /\d+/g;
let match;
while ((match = regex.exec('1 2 3')) !== null) {
  console.log('Found', match[0], 'at', match.index);
}

// Resetting lastIndex to reuse the regex
regex.lastIndex = 0;
console.log(regex.test('4')); // true`}
            explanation="Exec can be used in a loop to walk through all matches. Remember to reset lastIndex when you need the regex for another operation."
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Replacing Matches</h2>
          <p className="text-slate-700 mb-4">
            replace() works with both strings and regex patterns. When using regex, you can refer to capture groups in the replacement string
            or provide a callback for more complex transformations.
          </p>

          <CodeExample
            title="Replace using capture groups"
            code={`const date = '2024-03-13';
console.log(date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1')); // 03/13/2024`}
            explanation="Use $1, $2, etc. in the replacement string to reuse capture group values from the match."
          />

          <CodeExample
            title="Dynamic replacements with a callback"
            code={`const csv = 'apple,banana,cherry';
const titleized = csv.replace(/\b(\w)/g, (match) => match.toUpperCase());
console.log(titleized); // Apple,Banana,Cherry`}
            explanation="When you need custom logic per match, provide a function to replace(). It receives the match, groups, index, and original string."
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Common Gotchas</h2>
          <ul className="list-disc pl-6 text-slate-700">
            <li>
              <strong>test() and global regex:</strong> With the <code>g</code> flag, <code>test()</code> advances the regex’ <code>lastIndex</code> each time it runs.
              Reset <code>lastIndex</code> if you need repeatable results.
            </li>
            <li>
              <strong>match() can return null:</strong> Always check for null before accessing match results.
            </li>
            <li>
              <strong>replace() replacement tokens:</strong> <code>$&</code> is the full match, <code>$1</code>.. are capture groups, and <code>$$</code> inserts a literal <code>$</code>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Next Steps</h2>
          <p className="text-slate-700">
            Want to explore regex patterns more? Head to the <a href="/javascript/regex/patterns">Regex Patterns</a> page.
            If you'd like to test your own expressions, try the <a href="/regex/online-compiler">Regex Tester</a>.
          </p>
        </section>
      </main>
    </>
  );
}
