import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Functions Tutorial",
  description:
    "Learn JavaScript functions deeply: declaration, expression, arrow functions, parameters, and common pitfalls.",
  alternates: { canonical: "/javascript/functions" },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are arrow functions always better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. They are concise, but not ideal where method-level this behavior is required."
      }
    },
    {
      "@type": "Question",
      "name": "What is a higher-order function?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A function that accepts another function or returns one."
      }
    },
    {
      "@type": "Question",
      "name": "Can function declarations be used before definition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, due to hoisting behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use default parameters often?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when sensible defaults prevent undefined edge-case bugs."
      }
    }
  ]
};

export default function JavascriptFunctionsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript Functions: Core to Advanced Patterns</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Functions are the foundation of reusable and testable JavaScript. Strong function design directly improves architecture quality.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Most business logic is implemented through functions. Understanding syntax and behavior prevents many runtime issues.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Function Declaration vs Expression vs Arrow</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            JavaScript provides multiple ways to define functions, each with different hoisting and binding behavior.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Function Declaration:</strong> Hoisted with implementation, can be called before definition, creates own scope.<br />
            <strong>Function Expression:</strong> Not hoisted, assigned to variable, depends on variable declaration rules.<br />
            <strong>Arrow Function:</strong> Concise syntax, lexical this binding, no arguments object, cannot be used as constructor.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Choose based on needs: declarations for top-level functions, expressions for conditional definition, arrows for callbacks.
          </p>
          <CodeExample
            title="Function Declaration and Expression"
            code={`// Declaration - hoisted
console.log(add(2, 3)); // 5
function add(a, b) {
  return a + b;
}

// Expression - not hoisted
// console.log(subtract(5, 2)); // ReferenceError
const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(5, 2)); // 3`}
            explanation="Declarations are hoisted, expressions follow variable rules."
          />
          <CodeExample
            title="Arrow Functions and this"
            code={`const obj = {
  name: "Alice",
  regular: function() {
    return this.name;
  },
  arrow: () => this?.name // undefined in global scope
};

console.log(obj.regular()); // "Alice"
console.log(obj.arrow());   // undefined`}
            explanation="Arrow functions inherit lexical this, not dynamic this."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Parameters: Default, Rest, and Destructuring</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Modern JavaScript provides powerful parameter handling features for flexible and safe function APIs.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Default Parameters:</strong> Provide fallback values for missing arguments, evaluated at call time.<br />
            <strong>Rest Parameters:</strong> Collect remaining arguments into an array, replaces arguments object.<br />
            <strong>Destructuring:</strong> Extract values from objects/arrays directly in parameter list.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            These features make functions more expressive and prevent undefined-related bugs.
          </p>
          <CodeExample
            title="Default and Rest Parameters"
            code={`// Default parameters
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet());              // "Hello, Guest!"
console.log(greet("Alice"));       // "Hello, Alice!"
console.log(greet("Bob", "Hi"));   // "Hi, Bob!"

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));         // 6
console.log(sum(10, 20, 30, 40));  // 100`}
            explanation="Default parameters prevent undefined, rest parameters handle variable arguments."
          />
          <CodeExample
            title="Parameter Destructuring"
            code={`// Object destructuring
function createUser({ name, age, email }) {
  return { name, age, email, created: new Date() };
}

const user = createUser({
  name: "Alice",
  age: 30,
  email: "alice@example.com"
});
console.log(user);

// Array destructuring
function processCoords([x, y, z = 0]) {
  return { x, y, z };
}

console.log(processCoords([10, 20]));     // {x: 10, y: 20, z: 0}
console.log(processCoords([5, 15, 25]));  // {x: 5, y: 15, z: 25}`}
            explanation="Destructuring extracts values directly in parameter list."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Return Values and Function Behavior</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Return statements control function output and execution flow. Understanding return behavior is crucial for correct function design.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Explicit Return:</strong> Functions return undefined by default, explicit return controls output value.<br />
            <strong>Early Return:</strong> Use return to exit function early, improving readability in conditional logic.<br />
            <strong>Implicit Return:</strong> Arrow functions can omit return keyword for single expressions.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Always return explicit values from utility functions to avoid undefined in method chains.
          </p>
          <CodeExample
            title="Return Patterns"
            code={`// Explicit vs implicit return
function explicitReturn(x) {
  if (x < 0) return "negative";
  if (x > 0) return "positive";
  return "zero"; // explicit return
}

const implicitReturn = x =>
  x < 0 ? "negative" :
  x > 0 ? "positive" :
  "zero"; // implicit return

console.log(explicitReturn(5));  // "positive"
console.log(implicitReturn(-3)); // "negative"

// Early return for validation
function processData(data) {
  if (!data) return null; // early exit
  if (!Array.isArray(data)) return null;

  // process data...
  return data.map(item => item * 2);
}`}
            explanation="Explicit returns control function output, early returns improve readability."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Higher-Order Functions and Callbacks</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Functions that accept other functions as parameters or return functions enable powerful programming patterns.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Higher-Order Function:</strong> Function that takes a function as argument or returns a function.<br />
            <strong>Callback Function:</strong> Function passed as argument to be executed later.<br />
            <strong>Anonymous Functions:</strong> Functions without names, often used as callbacks.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            These patterns enable composition, asynchronous programming, and reusable logic.
          </p>
          <CodeExample
            title="Higher-Order Functions"
            code={`// Function as parameter
function executeOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(executeOperation(5, 3, add));      // 8
console.log(executeOperation(5, 3, multiply)); // 15

// Function returning function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`}
            explanation="Higher-order functions enable flexible and reusable code patterns."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Best Practices</h2>
          <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Use arrow functions for callbacks</strong> when you don't need dynamic this binding.</p>
            <p><strong>Prefer function declarations</strong> for top-level functions that need hoisting.</p>
            <p><strong>Use default parameters</strong> to prevent undefined edge cases in function calls.</p>
            <p><strong>Return explicit values</strong> from utility functions to avoid undefined in chains.</p>
            <p><strong>Keep functions small and focused</strong> on single responsibilities.</p>
            <p><strong>Use descriptive parameter names</strong> that clearly indicate expected types and purposes.</p>
          </div>
        </article>
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes and Fixes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Using arrow functions for object methods</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Arrow functions don't bind their own this, causing issues in object methods.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Use method syntax or function expressions</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Large functions with multiple responsibilities</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Functions doing too many things become hard to test and maintain.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Split into smaller, focused functions</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Implicit undefined returns</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Functions return undefined by default, causing issues in method chains.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Return explicit values from utility functions</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related Topics</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/javascript/variables"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Variables
            </Link>
            <Link
              href="/javascript/closures"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Closures
            </Link>
            <Link
              href="/javascript/array-methods"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Array Methods
            </Link>
            <Link
              href="/javascript/online-compiler"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              JavaScript Compiler
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
