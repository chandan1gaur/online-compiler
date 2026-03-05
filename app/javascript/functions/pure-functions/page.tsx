import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Pure Functions - Functional Programming",
  description: "Learn JavaScript pure functions. Master writing predictable, side-effect-free functions.",
  keywords: [
    "javascript pure functions",
    "pure functions",
    "functional programming",
    "no side effects",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Pure Functions",
    description: "Learn pure functions for predictable, maintainable JavaScript code.",
    url: "/javascript/functions/pure-functions",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Pure Functions",
    description: "Master pure functions and functional programming principles.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/pure-functions" },
};

const sections = [
  {
    heading: "What are Pure Functions?",
    paragraphs: [
      "A pure function is a function where the return value is determined only by its input values, without observable side effects.",
      "Pure functions have two key characteristics: 1) Given the same input, they always return the same output, and 2) They don't modify anything outside their scope.",
    ],
    examples: [
      {
        title: "Pure vs Impure Functions",
        code: `// PURE FUNCTION - same input always gives same output
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 - always the same

// IMPURE FUNCTION - depends on external state
let globalMultiplier = 2;

function multiplyImpure(x) {
  return x * globalMultiplier; // depends on global variable
}

console.log(multiplyImpure(5)); // 10
globalMultiplier = 3;
console.log(multiplyImpure(5)); // 15 - different output!

// PURE FUNCTION - takes multiplier as parameter
function multiplyPure(x, multiplier) {
  return x * multiplier;
}

console.log(multiplyPure(5, 2)); // 10
console.log(multiplyPure(5, 2)); // 10 - always the same`,
        explanation: "Pure functions are predictable and testable because their output depends only on their inputs.",
      },
    ],
  },
  {
    heading: "Pure Functions vs Impure Functions",
    paragraphs: [
      "Impure functions have side effects like modifying global variables, making API calls, logging, or mutating input parameters.",
    ],
    examples: [
      {
        title: "Side Effects Examples",
        code: `// IMPURE - modifies global state
let count = 0;
function incrementImpure() {
  count++;
  return count;
}

// PURE - returns new value without modifying state
function incrementPure(num) {
  return num + 1;
}

// IMPURE - mutates input object
function addPropertyImpure(obj) {
  obj.newProp = "added";
  return obj;
}

const person = { name: "Alice" };
addPropertyImpure(person);
console.log(person); // { name: "Alice", newProp: "added" } - mutated!

// PURE - creates new object
function addPropertyPure(obj) {
  return { ...obj, newProp: "added" };
}

const person2 = { name: "Bob" };
const person3 = addPropertyPure(person2);
console.log(person2); // { name: "Bob" } - unchanged
console.log(person3); // { name: "Bob", newProp: "added" } - new object

// IMPURE - side effects (logging, API calls)
function fetchUserImpure(id) {
  console.log("Fetching user..."); // side effect
  // make API call
  return { id, name: "User" };
}

// PURE - no side effects
function formatUser(user) {
  return {
    ...user,
    displayName: user.name.toUpperCase()
  };
}`,
        explanation: "Pure functions avoid modifying external state and side effects.",
      },
    ],
  },
  {
    heading: "Benefits of Pure Functions",
    paragraphs: [
      "Pure functions are easier to test, debug, reuse, and parallelize. They're fundamental to functional programming.",
    ],
    examples: [
      {
        title: "Testing Pure Functions",
        code: `// PURE function - easy to test
function calculateDiscount(price, discountPercent) {
  return price * (1 - discountPercent / 100);
}

// Simple to test - no setup needed
console.log(calculateDiscount(100, 10)); // 90
console.log(calculateDiscount(100, 10)); // 90 (always same)
console.log(calculateDiscount(50, 20)); // 40

// IMPURE function - harder to test
let taxRate = 0.1;

function calculateTotalImpure(price) {
  return price * (1 + taxRate); // depends on global state
}

// Hard to test - need to manage global state
console.log(calculateTotalImpure(100)); // 110
taxRate = 0.2;
console.log(calculateTotalImpure(100)); // 120

// PURE version - easy to test
function calculateTotalPure(price, taxRate) {
  return price * (1 + taxRate);
}

console.log(calculateTotalPure(100, 0.1)); // 110
console.log(calculateTotalPure(100, 0.2)); // 120`,
        explanation: "Pure functions are testable without mocking or setup.",
      },
    ],
  },
  {
    heading: "Working with Arrays and Objects Immutably",
    paragraphs: [
      "When working with data structures, pure functions create new arrays/objects rather than modifying existing ones.",
    ],
    examples: [
      {
        title: "Immutable Operations",
        code: `// IMPURE - mutates original array
function addItemImpure(arr, item) {
  arr.push(item);
  return arr;
}

const list = [1, 2, 3];
const result = addItemImpure(list, 4);
console.log(list); // [1, 2, 3, 4] - mutated!

// PURE - creates new array
function addItemPure(arr, item) {
  return [...arr, item];
}

const list2 = [1, 2, 3];
const result2 = addItemPure(list2, 4);
console.log(list2); // [1, 2, 3] - unchanged
console.log(result2); // [1, 2, 3, 4]

// IMPURE - sorts original array
const numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3] - mutated!

// PURE - creates sorted copy
function sortPure(arr) {
  return [...arr].sort();
}

const numbers2 = [3, 1, 2];
const sorted = sortPure(numbers2);
console.log(numbers2); // [3, 1, 2] - unchanged
console.log(sorted); // [1, 2, 3]

// IMPURE - modifies object properties
const user = { name: "Alice", age: 25 };
user.age = 26;

// PURE - creates new object with updates
function updateAge(user, newAge) {
  return { ...user, age: newAge };
}

const user2 = { name: "Bob", age: 25 };
const user3 = updateAge(user2, 26);
console.log(user2); // { name: "Bob", age: 25 } - unchanged
console.log(user3); // { name: "Bob", age: 26 }`,
        explanation: "Pure functions preserve original data by creating new structures instead of mutating.",
      },
    ],
  },
  {
    heading: "When to Use Pure Functions",
    paragraphs: [
      "Pure functions should be your default choice. Use impure functions only when necessary, like for I/O operations.",
    ],
    bullets: [
      "Calculations and transformations should be pure",
      "Data validation should be pure",
      "Formatting and parsing should be pure",
      "API calls and logging are necessarily impure",
      "Side effects should be isolated from pure logic",
    ],
  },
];

const mistakes = [
  {
    title: "Modifying input objects/arrays",
    fix: "Always create new objects/arrays using spread operator or methods like map/filter instead of mutating inputs.",
  },
  {
    title: "Depending on external variables",
    fix: "Pass all needed data as parameters. Avoid relying on global variables or closure variables that change.",
  },
  {
    title: "Not realizing some methods are impure",
    fix: "Be aware that sort(), reverse(), push(), pop() mutate arrays. Use map(), filter(), slice() for pure operations.",
  },
];

const faqs = [
  {
    q: "What is a pure function?",
    a: "A pure function always returns the same output for the same input and has no side effects or external dependencies.",
  },
  {
    q: "Why are pure functions important?",
    a: "Pure functions are predictable, testable, and easier to debug. They're fundamental to functional programming.",
  },
  {
    q: "What are side effects?",
    a: "Side effects are any observable changes outside the function, like modifying global variables, making API calls, logging, or mutating parameters.",
  },
  {
    q: "Can I use API calls in pure functions?",
    a: "No, API calls are side effects. Separate pure logic from side effects by handling I/O in a separate layer.",
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

export default function PureFunctionsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Pure Functions
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master pure functions for predictable, testable, and maintainable code.
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
          Pure functions are a cornerstone of functional programming and modern JavaScript. They make code easier to test, reason about, and maintain.
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
              { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
              { label: "Closures", href: "/javascript/closures" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
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