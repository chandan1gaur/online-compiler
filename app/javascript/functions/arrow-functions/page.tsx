import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Arrow Functions - Modern Function Syntax",
  description: "Learn JavaScript arrow functions. Master the concise arrow function syntax and understand binding behavior.",
  keywords: [
    "javascript arrow function",
    "arrow functions",
    "fat arrow",
    "es6 functions",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Arrow Functions",
    description: "Learn arrow functions, the modern and concise way to write functions in JavaScript.",
    url: "/javascript/functions/arrow-functions",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Arrow Functions",
    description: "Master arrow function syntax and this binding with practical examples.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/arrow-functions" },
};

const sections = [
  {
    heading: "What are Arrow Functions?",
    paragraphs: [
      "Arrow functions are a concise way to write functions in JavaScript, introduced in ES6 (2015). They use the '=>' (fat arrow) syntax and have a shorter, more readable syntax compared to function expressions.",
      "Arrow functions are particularly useful for short callbacks and have different this binding behavior than regular functions.",
    ],
    examples: [
      {
        title: "Arrow Function Syntax",
        code: `// Traditional function expression
const add1 = function(a, b) {
  return a + b;
};

// Arrow function - equivalent
const add2 = (a, b) => {
  return a + b;
};

// Concise arrow function (implicit return)
const add3 = (a, b) => a + b;

console.log(add1(5, 3)); // 8
console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8`,
        explanation: "Arrow functions can have an explicit return with braces or implicit return without braces.",
      },
    ],
  },
  {
    heading: "Arrow Function Syntax Variations",
    paragraphs: [
      "Arrow functions have several syntax variations depending on the number of parameters and complexity of the function body.",
    ],
    examples: [
      {
        title: "Different Syntax Variations",
        code: `// No parameters - must use parentheses
const greet = () => "Hello!";
console.log(greet()); // Hello!

// One parameter - parentheses optional
const square = x => x * x;
// OR
const square2 = (x) => x * x;
console.log(square(5)); // 25

// Multiple parameters - parentheses required
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 15

// Multiple statements - need braces and return
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return sum + product;
};
console.log(calculate(3, 4)); // 19 (7 + 12)`,
        explanation: "Use parentheses for zero or multiple parameters. Omit braces for single expression returns.",
      },
    ],
  },
  {
    heading: "Arrow Functions and 'this' Binding",
    paragraphs: [
      "A key difference between arrow functions and regular functions is how they handle the 'this' keyword. Arrow functions inherit 'this' from their surrounding context, while regular functions have their own 'this'.",
    ],
    examples: [
      {
        title: "this Binding Behavior",
        code: `const person = {
  name: "Alice",
  greet1: function() {
    console.log("Regular: " + this.name); // Bound to person
  },
  greet2: () => {
    console.log("Arrow: " + this.name); // Bound to global scope
  },
  delay1: function() {
    setTimeout(function() {
      console.log("Delayed regular: " + this.name); // undefined
    }, 1000);
  },
  delay2: function() {
    setTimeout(() => {
      console.log("Delayed arrow: " + this.name); // Alice
    }, 1000);
  }
};

person.greet1(); // Regular: Alice
person.greet2(); // Arrow: undefined
person.delay1(); // Delayed regular: undefined
person.delay2(); // Delayed arrow: Alice`,
        explanation: "Arrow functions inherit 'this' from the surrounding context, making them ideal for callbacks.",
      },
    ],
  },
  {
    heading: "When to Use Arrow Functions",
    paragraphs: [
      "Arrow functions are perfect for short callbacks, array methods, and when you need to preserve the 'this' context from the surrounding scope.",
    ],
    examples: [
      {
        title: "Array Methods with Arrow Functions",
        code: `const numbers = [1, 2, 3, 4, 5];

// map with arrow function
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter with arrow function
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce with arrow function
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// Event handler with arrow function
const button = document.querySelector("button");
button?.addEventListener("click", () => {
  console.log("Button clicked!");
});`,
        explanation: "Arrow functions are concise and clear when used with array methods and event handlers.",
      },
    ],
  },
  {
    heading: "Arrow Functions vs Regular Functions",
    paragraphs: [
      "While arrow functions are more concise, they have some key differences that affect when you should use them.",
    ],
    bullets: [
      "Arrow functions don't have their own 'this' binding - they inherit from context",
      "Arrow functions cannot be used as constructors (no 'new' keyword)",
      "Arrow functions don't have their own 'arguments' object",
      "Arrow functions cannot be used as generators (no function*)",
      "Regular functions are hoisted, arrow functions are not",
    ],
  },
];

const mistakes = [
  {
    title: "Using arrow functions as methods",
    fix: "If you need 'this' to refer to the object, use regular function expressions, not arrow functions.",
  },
  {
    title: "Trying to use as constructor",
    fix: "Arrow functions cannot be used with the 'new' keyword. Use regular functions if you need a constructor.",
  },
  {
    title: "Forgetting parentheses for zero parameters",
    fix: "Even with no parameters, you must use empty parentheses: () => value",
  },
  {
    title: "Returning object literals",
    fix: "If returning an object, wrap it in parentheses: () => ({ key: value })",
  },
];

const faqs = [
  {
    q: "What's the main difference between arrow functions and regular functions?",
    a: "Arrow functions inherit 'this' from their surrounding context, while regular functions have their own 'this'. Arrow functions also cannot be used as constructors.",
  },
  {
    q: "Can I use arrow functions as methods in objects?",
    a: "Technically yes, but it's not recommended if you need 'this' to refer to the object. Use regular function expressions for methods.",
  },
  {
    q: "When should I use arrow functions?",
    a: "Use arrow functions for callbacks, array methods (map, filter, reduce), and when you need to preserve 'this' from the surrounding scope.",
  },
  {
    q: "Do arrow functions need parentheses around parameters?",
    a: "For zero or multiple parameters, yes. For a single parameter, parentheses are optional but recommended for clarity.",
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

export default function ArrowFunctionsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Arrow Functions
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master the modern arrow function syntax. Learn when to use them and understand their unique behavior.
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
          Arrow functions are the modern standard for writing functions in JavaScript. Their concise syntax and predictable {'this'} binding make them essential for writing clean, functional code.
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
              { label: "Function Expression", href: "/javascript/functions/function-expression" },
              { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
              { label: "Callback Functions", href: "/javascript/functions/callback-functions" },
              { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
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