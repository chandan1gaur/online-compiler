import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Variables: var vs let vs const",
  description:
    "Deep tutorial on JavaScript variables, scope, hoisting, and temporal dead zone with practical examples and FAQs.",
  keywords: [
    "javascript variables",
    "var let const",
    "variable scope",
    "hoisting",
    "js tutorial",
  ],
  alternates: { canonical: "/javascript/variables" },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which keyword should I use by default?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use const by default and let when reassignment is required."
      }
    },
    {
      "@type": "Question",
      "name": "Why avoid var in modern JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "var has function scope and hoisting behavior that often causes confusing bugs."
      }
    },
    {
      "@type": "Question",
      "name": "What is temporal dead zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is the time before let/const declaration where the variable exists but cannot be accessed."
      }
    },
    {
      "@type": "Question",
      "name": "Can const arrays be changed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Array contents can be changed, but the variable cannot be reassigned to a new array."
      }
    }
  ]
};

export default function JavascriptVariablesPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript Variables: var, let, const</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Variable declarations control scope, mutation, and runtime behavior. Most beginner and intermediate bugs in JavaScript are caused by incorrect variable usage.
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
          Correct variable semantics reduce hidden bugs, avoid accidental global leaks, and make async behavior easier to reason about.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">var, let, const: Declaration Keywords</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            JavaScript provides three ways to declare variables, each with different scoping and mutation rules.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>var:</strong> Function-scoped, can be redeclared and reassigned, hoisted with undefined initialization.<br />
            <strong>let:</strong> Block-scoped, can be reassigned but not redeclared in same scope, hoisted but in temporal dead zone.<br />
            <strong>const:</strong> Block-scoped, cannot be reassigned or redeclared, hoisted in temporal dead zone.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Use const as default for immutable bindings. Use let when reassignment is needed. Avoid var in modern code.
          </p>
          <CodeExample
            title="Variable Declaration Differences"
            code={`// var - function scope, redeclarable
if (true) {
  var x = 10;
}
console.log(x); // 10 (leaks outside block)

// let - block scope
if (true) {
  let y = 20;
}
// console.log(y); // ReferenceError

// const - immutable binding
const z = 30;
// z = 40; // TypeError`}
            explanation="var escapes blocks, let and const respect block boundaries."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Scope and Lifetime</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Variable scope determines where a variable is accessible. Lifetime refers to when the variable exists in memory.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Function scope (var):</strong> Variables accessible within entire function, regardless of block boundaries.<br />
            <strong>Block scope (let/const):</strong> Variables only accessible within their declaring block and nested blocks.<br />
            <strong>Global scope:</strong> Variables declared outside any function or block, accessible everywhere.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Block scope prevents accidental variable leakage and makes code more predictable, especially in loops and conditionals.
          </p>
          <CodeExample
            title="Scope Differences"
            code={`function testScope() {
  if (true) {
    var functionScoped = "visible in function";
    let blockScoped = "only in this block";
    const alsoBlockScoped = "also only here";
  }

  console.log(functionScoped); // works
  // console.log(blockScoped); // ReferenceError
  // console.log(alsoBlockScoped); // ReferenceError
}

testScope();`}
            explanation="var variables are function-scoped, let and const are block-scoped."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Hoisting and Temporal Dead Zone</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Hoisting moves variable declarations to the top of their scope. However, let and const behave differently from var.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>var hoisting:</strong> Declaration and initialization to undefined happens at scope top.<br />
            <strong>let/const hoisting:</strong> Declaration is hoisted but not initialized, creating temporal dead zone.<br />
            <strong>Temporal dead zone:</strong> Period from scope start to declaration where variable exists but cannot be accessed.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Temporal dead zone prevents accessing variables before initialization, catching potential bugs early.
          </p>
          <CodeExample
            title="Hoisting Behavior"
            code={`// var hoisting
console.log(a); // undefined
var a = 10;

// let/const temporal dead zone
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;`}
            explanation="var is hoisted with undefined, let/const create temporal dead zone."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Reassignment and Mutation</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Reassignment changes the variable's binding. Mutation changes the content of referenced objects.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>let:</strong> Allows reassignment of primitive values and object references.<br />
            <strong>const:</strong> Prevents reassignment but allows mutation of object properties and array elements.<br />
            <strong>Object mutation:</strong> Changing properties of const objects is allowed since the reference doesn't change.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Use const for immutable bindings. For deep immutability, combine with Object.freeze or immutable patterns.
          </p>
          <CodeExample
            title="const with Objects"
            code={`// const prevents reassignment
const config = { theme: "light" };
// config = { theme: "dark" }; // TypeError

// But allows mutation
config.theme = "dark";
console.log(config.theme); // "dark"

// For immutability, use Object.freeze
const immutableConfig = Object.freeze({ theme: "light" });
// immutableConfig.theme = "dark"; // TypeError in strict mode`}
            explanation="const prevents reassignment but allows object property mutation."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Best Practices</h2>
          <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Use const by default</strong> for all variable declarations to prevent accidental reassignment.</p>
            <p><strong>Use let only when reassignment is necessary</strong> - prefer const for immutable values.</p>
            <p><strong>Avoid var in modern JavaScript</strong> due to function scope and hoisting issues.</p>
            <p><strong>Declare variables at the top of their scope</strong> to avoid temporal dead zone confusion.</p>
            <p><strong>Use meaningful variable names</strong> that clearly indicate their purpose and mutability.</p>
          </div>
        </article>
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes and Fixes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Using var in loops</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              var creates function-scoped variables that can cause closure bugs in loops.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Use let for loop variables</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Assuming const means immutable</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              const objects and arrays can still be mutated - only the reference is immutable.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Use Object.freeze for deep immutability</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Accessing variables in temporal dead zone</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Using let/const variables before declaration throws ReferenceError.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Move declarations to top of scope</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related Topics</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/javascript/functions"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Functions
            </Link>
            <Link
              href="/javascript/closures"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Closures
            </Link>
            <Link
              href="/javascript/interview-questions"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Interview Questions
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
