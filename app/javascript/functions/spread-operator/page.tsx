import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Spread Operator - Array and Object Spreading",
  description: "Learn JavaScript spread operator. Master spreading arrays, objects, and function arguments.",
  keywords: [
    "javascript spread operator",
    "spread operator",
    "spreading arrays",
    "spreading objects",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Spread Operator",
    description: "Learn the spread operator to spread arrays and objects in JavaScript.",
    url: "/javascript/functions/spread-operator",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Spread Operator",
    description: "Master the spread operator for arrays, objects, and function calls.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/spread-operator" },
};

const sections = [
  {
    heading: "What is the Spread Operator?",
    paragraphs: [
      "The spread operator (...) allows an iterable (array, string, etc.) to be expanded in places where zero or more elements are expected. It's the opposite of rest parameters.",
      "Spread operators are useful for copying arrays, merging arrays, passing arguments, and spreading object properties.",
    ],
    examples: [
      {
        title: "Basic Spread Operator",
        code: `// Spreading an array into function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Same as Math.max(1, 2, 3)
// Output: 3

// Copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a new array
console.log(arr2); // [1, 2, 3]

// Merging arrays
const arr3 = [1, 2];
const arr4 = [3, 4];
const merged = [...arr3, ...arr4];
console.log(merged); // [1, 2, 3, 4]

// Spreading strings
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']`,
        explanation: "Spread operator expands iterables into individual elements.",
      },
    ],
  },
  {
    heading: "Spread Operator with Arrays",
    paragraphs: [
      "The spread operator is powerful for array operations like copying, merging, and adding elements.",
    ],
    examples: [
      {
        title: "Array Operations with Spread",
        code: `// Copying arrays (shallow copy)
const original = [1, 2, 3];
const copy = [...original];
copy[0] = 99;
console.log(original[0]); // 1 (not affected)

// Merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const merged = [...arr1, ...arr2, ...arr3];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Adding elements to arrays
const baseArray = [2, 3];
const newArray = [1, ...baseArray, 4];
console.log(newArray); // [1, 2, 3, 4]

// Creating array with duplicates removed (using Set)
const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]

// Reversing arrays without mutating
const original2 = [1, 2, 3];
const reversed = [...original2].reverse();
console.log(original2); // [1, 2, 3] (unchanged)
console.log(reversed); // [3, 2, 1]`,
        explanation: "Spread operator enables non-destructive array operations.",
      },
    ],
  },
  {
    heading: "Spread Operator with Objects",
    paragraphs: [
      "The spread operator can also spread object properties, useful for copying and merging objects.",
    ],
    examples: [
      {
        title: "Object Operations with Spread",
        code: `// Copying objects (shallow copy)
const original = { a: 1, b: 2, c: 3 };
const copy = { ...original };
copy.a = 99;
console.log(original.a); // 1 (not affected)

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Overriding properties
const defaults = { color: "blue", size: "large" };
const userOptions = { color: "red" };
const final = { ...defaults, ...userOptions };
console.log(final); // { color: "red", size: "large" }

// Adding new properties
const person = { name: "Alice", age: 25 };
const updated = { ...person, city: "NYC", age: 26 };
console.log(updated);
// { name: "Alice", age: 26, city: "NYC" }`,
        explanation: "Spread operator simplifies object manipulation and merging.",
      },
    ],
  },
  {
    heading: "Spread in Function Calls",
    paragraphs: [
      "Use the spread operator to pass array elements as individual arguments to functions.",
    ],
    examples: [
      {
        title: "Function Arguments with Spread",
        code: `// Spreading array as function arguments
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6 (same as sum(1, 2, 3))

// Applying Math functions
console.log(Math.min(...[5, 2, 8, 1])); // 1
console.log(Math.max(...[5, 2, 8, 1])); // 8

// Spreading in method calls
const arr = [1, 2, 3];
arr.push(...[4, 5, 6]);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Practical example: logger
function log(level, ...messages) {
  console.log("[" + level + "]", ...messages);
}

const prefix = "[INFO]";
const data = ["User logged in", { id: 123 }];
log("INFO", ...data);
// [INFO] User logged in { id: 123 }`,
        explanation: "Spread operator converts arrays into function arguments seamlessly.",
      },
    ],
  },
  {
    heading: "Spread vs Rest Parameters",
    paragraphs: [
      "While spread and rest both use '...', they work in opposite directions. Spread expands arrays, rest collects arguments.",
    ],
    examples: [
      {
        title: "Spread vs Rest",
        code: `// REST - collects arguments into array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// SPREAD - expands array into arguments
const arr = [1, 2, 3];
console.log(sum(...arr)); // 6

// REST in function definition (gathers)
function concat(...strings) {
  return strings.join(" ");
}

// SPREAD in function call (spreads)
const words = ["hello", "world"];
console.log(concat(...words)); // "hello world"

// Both can be used together
function combine(first, ...rest) {
  return [first, ...rest];
}
const input = [2, 3, 4];
const result = combine(1, ...input);
console.log(result); // [1, 2, 3, 4]`,
        explanation: "Rest collects items into arrays, spread expands arrays into items.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Confusing spread with rest",
    fix: "Rest parameters (...args) collect arguments in function definitions. Spread operator (...array) expands arrays in calls.",
  },
  {
    title: "Using spread with non-iterable objects",
    fix: "Spread only works with iterables (arrays, strings, Sets, Maps). For objects, use { ...obj }.",
  },
  {
    title: "Not realizing shallow copy limitations",
    fix: "Spread operator creates shallow copies. Nested objects/arrays are still referenced, not deeply cloned.",
  },
];

const faqs = [
  {
    q: "What is the spread operator?",
    a: "The spread operator (...) expands iterables (arrays, strings, etc.) into individual elements. It's useful for copying, merging, and spreading values.",
  },
  {
    q: "What's the difference between spread and rest?",
    a: "Rest parameters (...args) collect multiple values into an array in function definitions. Spread operator expands an array into individual elements in function calls or literals.",
  },
  {
    q: "Does spread make a deep copy?",
    a: "No, spread makes a shallow copy. If the array/object contains nested structures, those nested items are still referenced, not cloned.",
  },
  {
    q: "Can I use spread with objects?",
    a: "Yes, you can spread object properties: { ...obj }. This creates a new object with copied properties.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function SpreadOperatorPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Spread Operator
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master the spread operator. Learn to spread arrays, objects, and function arguments.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try in Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          The spread operator is essential for modern JavaScript. It simplifies array and object operations, makes code more readable, and enables functional programming patterns.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">FAQ</h2>
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
              { label: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Function Expression", href: "/javascript/functions/function-expression" },
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