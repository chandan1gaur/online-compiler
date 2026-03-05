import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Functions Overview: Declarations, Expressions, Arrow & More",
  description:
    "Comprehensive overview of JavaScript functions: declarations, expressions, arrow syntax, parameters, callbacks, recursion, and best practices.",
  keywords: [
    "javascript functions",
    "function overview",
    "declaration expression arrow",
    "parameters arguments",
    "callbacks recursion",
  ],
  openGraph: {
    title: "JavaScript Functions Overview",
    description:
      "Learn everything about JavaScript functions from declarations to recursion in one place.",
    url: "/javascript/functions",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Functions Overview",
  },
  alternates: { canonical: "/javascript/functions" },
};

const sections = [
  {
    heading: "Why Functions Matter",
    paragraphs: [
      "Functions are the fundamental building blocks of JavaScript programs. They allow you to encapsulate logic, reuse code, and model behaviour in a modular way.",
      "Every value that can be passed or returned in JavaScript can be wrapped in a function, making them first-class citizens.",
    ],
  },
  {
    heading: "Function Declaration vs Expression",
    paragraphs: [
      "A function declaration begins with the `function` keyword and a name. It is hoisted, so you can call it before its definition.",
      "A function expression assigns a function (often anonymous) to a variable. Expressions are not hoisted and behave like any other value.",
    ],
    examples: [
      {
        title: "Declaration vs Expression",
        code: `// Declaration - hoisted
console.log(declared(2)); // 4
function declared(x) {
  return x * 2;
}

// Expression - not hoisted
// console.log(expr(2)); // ReferenceError
const expr = function(x) {
  return x * 2;
};
console.log(expr(2)); // 4`,
        explanation: "Declarations can be called earlier, expressions cannot. Use declarations for named utilities, expressions for callbacks or dynamic assignment.",
      },
    ],
  },
  {
    heading: "Arrow Functions",
    paragraphs: [
      "Arrow functions provide a concise syntax and lexical `this` binding. They're ideal for small callbacks and functional constructs.",
      "Remember they cannot be used as constructors and do not have their own `arguments` object.",
    ],
    examples: [
      {
        title: "Simple Arrow Function",
        code: `const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

[1,2,3].map(n => n * n);`,
        explanation: "One-liner syntax makes arrow functions perfect for array methods and inline callbacks.",
      },
    ],
  },
  {
    heading: "Parameters, Arguments & Default Values",
    paragraphs: [
      "Parameters are names listed in a function definition; arguments are values passed when calling it.",
      "JavaScript lets you set default parameter values to make functions more robust and clear.",
    ],
  },
  {
    heading: "Rest & Spread",
    paragraphs: [
      "Rest parameters (`...args`) gather multiple arguments into an array. Spread (`...array`) expands iterables into individual elements.",
      "Together they allow flexible APIs and clean data manipulation.",
    ],
  },
  {
    heading: "Callbacks & Higher-Order Functions",
    paragraphs: [
      "Passing functions as arguments (callbacks) is the backbone of asynchronous and event-driven code. Higher-order functions either take functions or return them.",
      "These patterns power array methods, composition, and functional programming in JavaScript.",
    ],
  },
  {
    heading: "Pure Functions",
    paragraphs: [
      "A pure function always returns the same output for the same input and causes no side effects. Pure functions are easier to test and reason about.",
    ],
  },
  {
    heading: "IIFE & Modules",
    paragraphs: [
      "Immediately Invoked Function Expressions run as soon as they are defined and create a private scope. They were a common pattern for modules before ES6 imports.",
    ],
  },
  {
    heading: "Recursion",
    paragraphs: [
      "Recursion is when a function calls itself to solve smaller instances of a problem. Every recursive function needs a base case to prevent infinite loops.",
    ],
  },
  {
    heading: "Learning Path",
    paragraphs: [
      "Start with function declarations and expressions, then explore arrow syntax. Practice parameter handling with defaults, rest and spread. Move on to callbacks and higher-order functions before tackling recursion and pure functions.",
      "Use the links below to dive into each topic in detail.",
    ],
  },
];

const cardLinks = [
  { label: "Declaration", href: "/javascript/functions/function-declaration" },
  { label: "Expression", href: "/javascript/functions/function-expression" },
  { label: "Arrow", href: "/javascript/functions/arrow-functions" },
  { label: "Params & Args", href: "/javascript/functions/parameters-arguments" },
  { label: "Default Params", href: "/javascript/functions/default-parameters" },
  { label: "Rest Params", href: "/javascript/functions/rest-parameters" },
  { label: "Spread Operator", href: "/javascript/functions/spread-operator" },
  { label: "Callbacks", href: "/javascript/functions/callback-functions" },
  { label: "Higher-Order", href: "/javascript/functions/higher-order-functions" },
  { label: "Pure Functions", href: "/javascript/functions/pure-functions" },
  { label: "IIFE", href: "/javascript/functions/iife" },
  { label: "Recursion", href: "/javascript/functions/recursion" },
];

const mistakes = [
  {
    title: "Calling a function before definition (expression)",
    fix: "Use function declarations or move the expression above the call.",
  },
  {
    title: "Forgetting to return from arrow functions",
    fix: "If you use a block body, add an explicit return statement.",
  },
  {
    title: "Infinite recursion",
    fix: "Always include a base case that stops further calls.",
  },
];

const faqs = [
  {
    q: "When should I choose a function declaration over an expression?",
    a: "Use declarations when you want hoisting or when defining named helper functions. Use expressions for callbacks or when you need to pass functions around.",
  },
  {
    q: "Can arrow functions replace all others?",
    a: "Not always. Arrow functions lack their own `this` and cannot be used as constructors. Use them for concise callbacks and non-method functions.",
  },
  {
    q: "What's the difference between rest and spread?",
    a: "Rest gathers multiple arguments into an array in function definitions. Spread expands an array (or iterable) into individual elements in function calls or literals.",
  },
  {
    q: "Why are pure functions recommended?",
    a: "They produce predictable output, are easier to test, and avoid side effects which simplifies reasoning about code.",
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

export default function FunctionsOverviewPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Functions Overview
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Start here to explore all aspects of functions in JavaScript – from basic declarations to advanced recursion and functional patterns.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {cardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {section.heading}
            </h2>
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
          <h2 className="text-xl font-semibold text-s late-900 dark:text-white">FAQ</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}