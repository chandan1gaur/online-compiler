import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Higher-Order Functions - Functional Programming",
  description: "Learn JavaScript higher-order functions. Master functions that work with other functions.",
  keywords: [
    "javascript higher-order functions",
    "higher-order functions",
    "functional programming",
    "javascript functions",
    "function composition",
  ],
  openGraph: {
    title: "JavaScript Higher-Order Functions",
    description: "Learn higher-order functions for functional programming patterns.",
    url: "/javascript/functions/higher-order-functions",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Higher-Order Functions",
    description: "Master higher-order functions and functional programming.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/higher-order-functions" },
};

const sections = [
  {
    heading: "What are Higher-Order Functions?",
    paragraphs: [
      "A higher-order function is a function that operates on other functions. It either takes one or more functions as arguments, returns a function, or both.",
      "Higher-order functions are a cornerstone of functional programming and enable powerful abstraction patterns.",
    ],
    examples: [
      {
        title: "Higher-Order Function Basics",
        code: `// Takes a function as argument
function execute(fn) {
  return fn();
}

const sayHello = () => "Hello!";
console.log(execute(sayHello)); // Hello!

// Returns a function
function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Both takes and returns functions
function compose(fn1, fn2) {
  return function(x) {
    return fn1(fn2(x));
  };
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const combined = compose(addTwo, multiplyByThree);
console.log(combined(5)); // 17 (5*3 = 15, 15+2 = 17)`,
        explanation: "Higher-order functions treat functions as first-class values.",
      },
    ],
  },
  {
    heading: "Built-in Higher-Order Functions",
    paragraphs: [
      "Many JavaScript methods are higher-order functions. Array methods like map, filter, reduce are perfect examples.",
    ],
    examples: [
      {
        title: "Array Methods",
        code: `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const squared = numbers.map((n) => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

// filter - select elements
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - combine all elements
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// find - return first match
const firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven); // 2

// findIndex - return index of first match
const idx = numbers.findIndex((n) => n > 3);
console.log(idx); // 3 (index of value 4)

// every - check if all match
const allPositive = numbers.every((n) => n > 0);
console.log(allPositive); // true

// some - check if any match
const hasNegative = numbers.some((n) => n < 0);
console.log(hasNegative); // false`,
        explanation: "Array methods accept callbacks and are higher-order functions.",
      },
    ],
  },
  {
    heading: "Function Returning Functions",
    paragraphs: [
      "Functions that return other functions enable powerful patterns like currying and partial application.",
    ],
    examples: [
      {
        title: "Returning Functions",
        code: `// Simple function factory
function createGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}

const hello = createGreeter("Hello");
const goodbye = createGreeter("Goodbye");

console.log(hello("Alice")); // Hello, Alice!
console.log(goodbye("Bob")); // Goodbye, Bob!

// Currying - converting a multi-argument function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

// Decorators - wrapping functions
function withLogging(fn) {
  return function(...args) {
    console.log("Calling with arguments:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
  };
}

const addLog = withLogging((a, b) => a + b);
addLog(5, 3);
// Calling with arguments: [5, 3]
// Result: 8
// 8`,
        explanation: "Returning functions enables currying, partial application, and decorators.",
      },
    ],
  },
  {
    heading: "Function Composition",
    paragraphs: [
      "Function composition combines multiple functions into a new function, enabling powerful abstraction.",
    ],
    examples: [
      {
        title: "Composing Functions",
        code: `// Helper functions
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

// Manual composition
const result1 = square(addTen(double(5)));
console.log(result1); // 400 ((5*2+10)^2 = 20^2 = 400)

// Compose function (right to left)
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const composed = compose(square, addTen, double);
console.log(composed(5)); // 400

// Pipe function (left to right)
function pipe(...fns) {
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

const piped = pipe(double, addTen, square);
console.log(piped(5)); // 400

// Using with promises
function fetchUser(id) {
  return Promise.resolve({ id, name: "Alice" });
}

function formatUser(user) {
  return "User: " + user.name;
}

fetchUser(1)
  .then(formatUser)
  .then(console.log);
// User: Alice`,
        explanation: "Composition creates new functions from existing ones.",
      },
    ],
  },
  {
    heading: "Practical Examples",
    paragraphs: [
      "Higher-order functions enable cleaner, more modular code for common programming patterns.",
    ],
    examples: [
      {
        title: "Real-World Uses",
        code: `// Memoization - cache function results
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Cache hit!");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Calculating...");
  return n * n;
});

console.log(expensiveCalc(5)); // Calculating... 25
console.log(expensiveCalc(5)); // Cache hit! 25

// Timing wrapper
function withTiming(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log("Execution time: " + (end - start).toFixed(2) + "ms");
    return result;
  };
}

const slowFunc = withTiming(() => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) sum += i;
  return sum;
});

slowFunc();
// Execution time: X.XXms`,
        explanation: "Higher-order functions create useful patterns like memoization and timing.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting to return a function",
    fix: "Higher-order functions that create functions must explicitly return the new function.",
  },
  {
    title: "Confusing function composition order",
    fix: "In compose (right-to-left), functions are applied from right to left. In pipe (left-to-right), functions are applied left to right.",
  },
  {
    title: "Not understanding closure",
    fix: "Higher-order functions rely heavily on closures. The returned function has access to parent function's variables.",
  },
];

const faqs = [
  {
    q: "What is a higher-order function?",
    a: "A higher-order function is a function that takes one or more functions as arguments and/or returns a function.",
  },
  {
    q: "Why use higher-order functions?",
    a: "They enable code reuse, abstraction, and functional programming patterns like composition, currying, and memoization.",
  },
  {
    q: "Is map() a higher-order function?",
    a: "Yes, map() is a higher-order function because it takes a callback function as an argument.",
  },
  {
    q: "What is function composition?",
    a: "Function composition combines multiple functions into a single function by passing the output of one function as input to the next.",
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

export default function HigherOrderFunctionsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Higher-Order Functions
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master higher-order functions for functional programming and powerful abstractions.
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
          Higher-order functions are central to functional programming in JavaScript. They enable powerful patterns and make code more modular, reusable, and expressive.
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
              { label: "Callback Functions", href: "/javascript/functions/callback-functions" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Pure Functions", href: "/javascript/functions/pure-functions" },
              { label: "Closures", href: "/javascript/closures" },
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