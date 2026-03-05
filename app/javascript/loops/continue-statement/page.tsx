import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript continue Statement - Skip Loop Iterations",
  description: "Learn JavaScript continue statement with examples. Master skipping loop iterations and controlling flow.",
  keywords: [
    "javascript continue statement",
    "continue in javascript",
    "skip loop iteration",
    "javascript loops control",
    "loop flow control",
  ],
  openGraph: {
    title: "JavaScript continue Statement - Skip Loop Iterations",
    description: "Learn JavaScript continue statement with examples. Master skipping loop iterations.",
    url: "/javascript/loops/continue-statement",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript continue Statement",
    description: "Learn JavaScript continue statement with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/loops/continue-statement" },
};

const sections = [
  {
    heading: "What is the continue Statement?",
    paragraphs: [
      "The continue statement skips the current iteration of a loop and continues with the next iteration.",
      "It doesn't terminate the loop like break does - it just jumps to the next cycle.",
    ],
    examples: [
      {
        title: "Basic continue in for Loop",
        code: `for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip iteration when i is 5
  }
  console.log("Number:", i);
}

// Output:
// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 6
// Number: 7
// Number: 8
// Number: 9

// Notice: 5 is missing!`,
        explanation: "When i equals 5, continue skips the console.log and moves to the next iteration.",
      },
    ],
  },
  {
    heading: "continue in Different Loop Types",
    paragraphs: [
      "continue works with all loop types: for, while, do...while, and for...in/for...of loops.",
    ],
    examples: [
      {
        title: "continue in while Loop",
        code: `let i = 0;

while (i < 10) {
  i++;

  if (i % 2 === 0) {
    continue; // Skip even numbers
  }

  console.log("Odd number:", i);
}

// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9`,
        explanation: "continue skips processing for even numbers but the loop continues.",
      },
      {
        title: "continue in for...of Loop",
        code: `const items = ['apple', 'banana', '', 'orange', '', 'grape'];

for (const item of items) {
  if (item === '') {
    continue; // Skip empty strings
  }

  console.log("Processing:", item);
}

// Output:
// Processing: apple
// Processing: banana
// Processing: orange
// Processing: grape`,
        explanation: "Empty strings are skipped, but the loop processes all non-empty items.",
      },
    ],
  },
  {
    heading: "Common Use Cases",
    paragraphs: [
      "continue is useful for filtering, validation, and skipping unwanted iterations.",
    ],
    examples: [
      {
        title: "Filter Array Elements",
        code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (const num of numbers) {
  if (num % 2 !== 0) {
    continue; // Skip odd numbers
  }
  evenNumbers.push(num);
}

console.log(evenNumbers); // [2, 4, 6, 8, 10]`,
        explanation: "Use continue to filter out unwanted elements during iteration.",
      },
      {
        title: "Skip Invalid Data",
        code: `const userData = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: null },
  { name: 'Charlie', age: 30 },
  { name: '', age: 28 },
  { name: 'David', age: 35 }
];

for (const user of userData) {
  // Skip invalid entries
  if (!user.name || !user.age) {
    continue;
  }

  console.log(\`Processing user: \${user.name}, age: \${user.age}\`);
}

// Output:
// Processing user: Alice, age: 25
// Processing user: Charlie, age: 30
// Processing user: David, age: 35`,
        explanation: "continue helps skip invalid or incomplete data entries.",
      },
      {
        title: "Process with Conditions",
        code: `const files = ['document.txt', 'image.jpg', 'script.js', 'data.json'];

for (const file of files) {
  // Skip non-JavaScript files
  if (!file.endsWith('.js')) {
    continue;
  }

  console.log(\`Compiling: \${file}\`);
  // Compilation logic here...
}

// Output:
// Compiling: script.js`,
        explanation: "continue filters files by type before processing.",
      },
      {
        title: "Skip Weekends in Date Processing",
        code: `const dates = [
  new Date('2024-01-01'), // Monday
  new Date('2024-01-06'), // Saturday
  new Date('2024-01-08'), // Monday
  new Date('2024-01-13'), // Saturday
];

for (const date of dates) {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday

  if (day === 0 || day === 6) {
    continue; // Skip weekends
  }

  console.log(\`Processing business day: \${date.toDateString()}\`);
}`,
        explanation: "continue skips weekend dates in business logic processing.",
      },
    ],
  },
  {
    heading: "continue vs break",
    paragraphs: [
      "continue skips one iteration, while break terminates the entire loop.",
    ],
    examples: [
      {
        title: "continue vs break Comparison",
        code: `console.log("Using continue:");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip this iteration
  }
  console.log(i); // 0, 1, 3, 4
}

console.log("\\nUsing break:");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Exit entire loop
  }
  console.log(i); // 0, 1
}`,
        explanation: "continue skips iteration 2, break stops the loop completely at 2.",
      },
    ],
  },
  {
    heading: "Performance Considerations",
    paragraphs: [
      "continue can improve performance by avoiding unnecessary processing.",
    ],
    examples: [
      {
        title: "Early Skip for Performance",
        code: `const largeArray = Array.from({ length: 10000 }, (_, i) => i);

// Less efficient: process everything
let sum1 = 0;
for (const num of largeArray) {
  if (num % 2 === 0) { // Even check after loop overhead
    sum1 += num;
  }
}

// More efficient: skip early
let sum2 = 0;
for (const num of largeArray) {
  if (num % 2 !== 0) {
    continue; // Skip odd numbers immediately
  }
  sum2 += num;
}

console.log(sum1 === sum2); // true`,
        explanation: "continue can reduce unnecessary operations by skipping early.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use continue to improve code readability and performance when skipping iterations.",
    ],
    bullets: [
      "Use continue for filtering and validation logic",
      "Place continue early in loop body for better performance",
      "Consider if break or return might be more appropriate",
      "Avoid complex nested conditions before continue",
      "Document why you're skipping iterations",
      "Consider extracting skip logic into separate functions",
    ],
  },
];

const mistakes = [
  {
    title: "Using continue in switch statements",
    fix: "continue only works in loops, not in switch statements. Use break in switches.",
  },
  {
    title: "Placing continue too late",
    fix: "Put continue statements early to avoid unnecessary processing.",
  },
  {
    title: "Overusing continue",
    fix: "If you have many continue statements, consider restructuring your loop logic.",
  },
];

const faqs = [
  {
    q: "Does continue work in all types of loops?",
    a: "Yes, continue works in for, while, do...while, for...in, and for...of loops.",
  },
  {
    q: "What's the difference between continue and break?",
    a: "continue skips the current iteration and continues with the next, while break exits the entire loop.",
  },
  {
    q: "Can continue be used outside of loops?",
    a: "No, continue can only be used inside loop statements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function JavascriptContinueStatementPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript continue Statement</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn continue statements to skip loop iterations. Master flow control and filtering in loops.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try continue Statement
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          continue statements improve code efficiency by skipping unnecessary iterations, making your loops more performant and your code more readable when filtering or validating data.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.examples && section.examples.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.examples.map((ex) => (
                  <CodeExample
                    key={ex.title}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </article>
        ))}

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related Topics</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { label: "for Loop", href: "/javascript/loops/for-loop" },
              { label: "while Loop", href: "/javascript/loops/while-loop" },
              { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
              { label: "break Statement", href: "/javascript/loops/break-statement" },
              { label: "Nested Loops", href: "/javascript/loops/nested-loops" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex rounded-md border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}