import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Function Expression - Dynamic Function Assignment",
  description: "Learn JavaScript function expressions. Master assigning functions to variables and using them as values.",
  keywords: [
    "javascript function expression",
    "function expression",
    "function as value",
    "anonymous function",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Function Expression",
    description: "Learn function expressions and how to assign functions to variables.",
    url: "/javascript/functions/function-expression",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Function Expression",
    description: "Learn JavaScript function expressions with examples.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/function-expression" },
};

const sections = [
  {
    heading: "What is Function Expression?",
    paragraphs: [
      "A function expression assigns a function to a variable. The function can be named or anonymous (without a name). Unlike function declarations, function expressions are not hoisted.",
      "Function expressions allow functions to be treated as values - you can assign them to variables, pass them as arguments, and return them from other functions.",
    ],
    examples: [
      {
        title: "Basic Function Expression",
        code: `// Anonymous function expression
const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Alice")); // Hello, Alice

// Named function expression
const add = function sum(a, b) {
  return a + b;
};

console.log(add(5, 3)); // 8`,
        explanation: "Function expressions use the function keyword but assign to a variable. The function name is optional.",
      },
    ],
  },
  {
    heading: "Function Expression vs Function Declaration",
    paragraphs: [
      "The main differences are hoisting behavior and how they're defined. Function declarations are hoisted and can be called before they're written, while function expressions cannot.",
    ],
    examples: [
      {
        title: "Hoisting Differences",
        code: `// Function Declaration - HOISTED (works)
console.log(declare(5));  // Works: 10

function declare(x) {
  return x * 2;
}

// Function Expression - NOT hoisted (error)
console.log(express(5)); // ReferenceError: express is not defined

const express = function(x) {
  return x * 2;
};`,
        explanation: "Function declarations are hoisted to the top of their scope. Function expressions are not.",
      },
    ],
  },
  {
    heading: "Why Use Function Expressions?",
    paragraphs: [
      "Function expressions are useful when you need to pass functions as arguments, store them in data structures, or return them from other functions.",
    ],
    examples: [
      {
        title: "Functions as Arguments",
        code: `// Function expression passed as argument
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

// Function expression as callback
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);`,
        explanation: "Function expressions let you pass functions directly to other functions like callbacks.",
      },
      {
        title: "Storing Functions in Variables",
        code: `const operations = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log(operations.add(10, 5));      // 15
console.log(operations.subtract(10, 5)); // 5
console.log(operations.multiply(10, 5)); // 50`,
        explanation: "You can store function expressions in object properties to create methods.",
      },
    ],
  },
  {
    heading: "Anonymous vs Named Function Expressions",
    paragraphs: [
      "Function expressions can be anonymous (no name) or named. Named function expressions can reference themselves, which is useful for recursion.",
    ],
    examples: [
      {
        title: "Named Function Expression",
        code: `// Anonymous - can't refer to itself
const factorial1 = function(n) {
  if (n <= 1) return 1;
  // Can't call 'factorial1' easily here
  return n * factorial1(n - 1); // Works but relies on variable name
};

// Named - can refer to itself by function name
const factorial2 = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Uses the function name 'fact'
};

console.log(factorial1(5)); // 120
console.log(factorial2(5)); // 120`,
        explanation: "Named function expressions can reference themselves using their function name.",
      },
    ],
  },
  {
    heading: "Immediately Invoked Function Expression (IIFE)",
    paragraphs: [
      "An IIFE is a function expression that runs immediately after it's defined. It's useful for creating private scopes.",
    ],
    examples: [
      {
        title: "IIFE Example",
        code: `// IIFE - the function runs immediately
(function() {
  console.log("This runs immediately");
  const secret = "hidden";
})();

// Can't access 'secret' from outside
console.log(secret); // ReferenceError

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name);
})("World");

// IIFE returning a value
const result = (function() {
  return 5 + 3;
})();

console.log(result); // 8`,
        explanation: "IIFE creates a private scope and runs immediately. Useful for avoiding global variable pollution.",
      },
    ],
  },
  {
    heading: "When to Use Function Expressions",
    paragraphs: [
      "Use function expressions when you need functions as values, when you want to avoid hoisting issues, or when you need to pass functions around.",
    ],
    bullets: [
      "Use when passing functions as arguments to other functions",
      "Use for callback functions in event handlers or timers",
      "Use when storing functions in objects or arrays",
      "Use when you want to create private scopes with IIFE",
      "Use when you need to ensure functions are defined before use",
    ],
  },
];

const mistakes = [
  {
    title: "Calling before definition",
    fix: "Function expressions are not hoisted. Always define them before calling.",
  },
  {
    title: "Missing semicolon",
    fix: "Always end function expressions with a semicolon, even though it's technically optional.",
  },
  {
    title: "Confusing named and anonymous expressions",
    fix: "The function name in a named expression is only available inside the function, not outside.",
  },
];

const faqs = [
  {
    q: "What's the difference between function expression and declaration?",
    a: "Function declarations are hoisted and can be called before definition. Function expressions are not hoisted and must be defined before use.",
  },
  {
    q: "Can I use a named function expression?",
    a: "Yes, named function expressions let the function refer to itself, which is useful for recursion or debugging.",
  },
  {
    q: "What is an IIFE?",
    a: "IIFE (Immediately Invoked Function Expression) is a function expression that runs immediately after being defined. It creates a private scope.",
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

export default function FunctionExpressionPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Function Expression
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn to use function expressions. Master assigning functions to variables, callbacks, and IIFE patterns.
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
          Function expressions treat functions as values. This enables powerful patterns like passing functions as arguments, creating callbacks, and building functional programming patterns essential to modern JavaScript.
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
              { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Callback Functions", href: "/javascript/functions/callback-functions" },
              { label: "IIFE", href: "/javascript/functions/iife" },
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