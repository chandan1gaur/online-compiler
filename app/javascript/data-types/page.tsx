import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Data Types Tutorial",
  description:
    "Learn JavaScript primitive and reference data types with examples, type checks, and conversion rules.",
  alternates: { canonical: "/javascript/data-types" },
};

const CodeExample = ({ title, code, explanation }: { title: string; code: string; explanation: string }) => (
  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
    <h4 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h4>
    <pre className="mt-2 overflow-x-auto rounded bg-slate-800 p-3 text-sm text-slate-100">
      <code>{code}</code>
    </pre>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{explanation}</p>
    <div className="mt-3 flex gap-2">
      <Link
        href="/javascript/online-compiler"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-700"
      >
        Run Code
      </Link>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
      >
        Copy
      </button>
    </div>
  </div>
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many primitive types exist in JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seven: string, number, bigint, boolean, undefined, null, and symbol."
      }
    },
    {
      "@type": "Question",
      "name": "Why does typeof null return object?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a long-standing language quirk kept for backward compatibility."
      }
    },
    {
      "@type": "Question",
      "name": "How can I deep copy objects safely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use structuredClone where available, or robust deep-copy strategies based on data structure."
      }
    },
    {
      "@type": "Question",
      "name": "Is array a primitive or object?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Array is a reference type (object)."
      }
    }
  ]
};

export default function JavascriptDataTypesPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript Data Types: Primitives and Objects</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Data types define how values behave in memory and operations. Strong type awareness prevents runtime errors and logical bugs.
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
          Type confusion causes common issues like incorrect comparisons, unexpected coercion, and method errors.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Primitive Data Types</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            JavaScript has seven primitive data types. Primitives are immutable values that are stored directly in memory.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>string:</strong> Textual data, enclosed in quotes, immutable sequence of characters.<br />
            <strong>number:</strong> Numeric values including integers and floating-point numbers.<br />
            <strong>bigint:</strong> Arbitrary-precision integers for large numbers beyond Number.MAX_SAFE_INTEGER.<br />
            <strong>boolean:</strong> Logical values true or false.<br />
            <strong>undefined:</strong> Value assigned to variables that have been declared but not initialized.<br />
            <strong>null:</strong> Intentional absence of any object value.<br />
            <strong>symbol:</strong> Unique and immutable primitive values, often used as object property keys.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Primitives are compared by value, not reference. Operations on primitives create new values.
          </p>
          <CodeExample
            title="Primitive Type Examples"
            code={`// String
const name = "Alice";
console.log(typeof name); // "string"

// Number
const age = 25;
const price = 19.99;
console.log(typeof age); // "number"

// BigInt
const bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Boolean
const isActive = true;
console.log(typeof isActive); // "boolean"

// Undefined
let uninitialized;
console.log(typeof uninitialized); // "undefined"

// Null
const empty = null;
console.log(typeof empty); // "object" (quirk)

// Symbol
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"`}
            explanation="Each primitive type has distinct characteristics and use cases."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Reference Data Types</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Objects, arrays, and functions are reference types. They store references to memory locations containing the actual data.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Object:</strong> Collection of key-value pairs, most flexible data structure.<br />
            <strong>Array:</strong> Ordered collection of values, indexed by numbers.<br />
            <strong>Function:</strong> Callable objects that execute code when invoked.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Reference types are compared by reference, not value. Assignment copies the reference, not the data.
          </p>
          <CodeExample
            title="Reference Type Behavior"
            code={`// Object
const person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"

// Array
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // "object" (arrays are objects)

// Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"

// Reference comparison
const obj1 = { value: 10 };
const obj2 = { value: 10 };
const obj3 = obj1;

console.log(obj1 === obj2); // false (different references)
console.log(obj1 === obj3); // true (same reference)`}
            explanation="Reference types store references to data, not the data itself."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Type Checking and Conversion</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Understanding type checking and implicit/explicit conversion is crucial for writing robust JavaScript code.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>typeof operator:</strong> Returns string indicating the type of operand.<br />
            <strong>instanceof operator:</strong> Tests if object is instance of constructor.<br />
            <strong>Explicit conversion:</strong> Using Number(), String(), Boolean() constructors.<br />
            <strong>Implicit coercion:</strong> Automatic type conversion in operations (often problematic).
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Prefer explicit conversion and strict equality to avoid unexpected behavior.
          </p>
          <CodeExample
            title="Type Checking"
            code={`// typeof operator
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (quirk)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function"

// instanceof for objects
const arr = [1, 2, 3];
const obj = { name: "Alice" };

console.log(arr instanceof Array);   // true
console.log(obj instanceof Object);  // true
console.log(arr instanceof Object);  // true (arrays are objects)`}
            explanation="Use typeof for primitives, instanceof for objects."
          />
          <CodeExample
            title="Type Conversion"
            code={`// Explicit conversion
console.log(Number("42"));       // 42
console.log(String(123));        // "123"
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true

// Implicit coercion (avoid when possible)
console.log("5" + 3);            // "53" (string concatenation)
console.log("5" - 3);            // 2 (numeric subtraction)
console.log(5 + true);           // 6 (boolean to number)
console.log(0 == false);         // true (loose equality)
console.log(0 === false);        // false (strict equality)

// Safe conversion patterns
const safeNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};

console.log(safeNumber("123"));  // 123
console.log(safeNumber("abc"));  // 0`}
            explanation="Explicit conversion is predictable, implicit coercion can cause bugs."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Copying and Mutation</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Understanding how data is copied and mutated is essential for avoiding unintended side effects.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Primitive copying:</strong> Always creates independent copies (pass by value).<br />
            <strong>Reference copying:</strong> Copies the reference, not the data (pass by reference).<br />
            <strong>Shallow copy:</strong> Creates new object but nested references remain shared.<br />
            <strong>Deep copy:</strong> Creates completely independent copy of all nested data.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Use appropriate copying strategies based on data structure and mutation needs.
          </p>
          <CodeExample
            title="Shallow vs Deep Copy"
            code={`// Primitive copy (independent)
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10, 20

// Reference copy (shared)
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (mutated original)

// Shallow copy
const original = { user: { name: "Alice" }, age: 25 };
const shallow = { ...original };
shallow.age = 30;
shallow.user.name = "Bob";

console.log(original.age);     // 25 (not mutated)
console.log(original.user.name); // "Bob" (nested reference shared)

// Deep copy with structuredClone
const deep = structuredClone(original);
deep.user.name = "Charlie";
console.log(original.user.name); // "Bob" (unchanged)`}
            explanation="Primitives copy by value, objects copy by reference."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Best Practices</h2>
          <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Use strict equality (===)</strong> to avoid unexpected type coercion in comparisons.</p>
            <p><strong>Check for null and undefined explicitly</strong> rather than relying on truthiness.</p>
            <p><strong>Use typeof for primitive type checks</strong> and instanceof for object type checks.</p>
            <p><strong>Prefer explicit type conversion</strong> over implicit coercion for predictable behavior.</p>
            <p><strong>Use structuredClone for deep copying</strong> when available, or implement proper deep copy strategies.</p>
            <p><strong>Be aware of the typeof null quirk</strong> and handle null checks appropriately.</p>
          </div>
        </article>
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes and Fixes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Using == instead of ===</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Loose equality performs type coercion that can lead to unexpected results.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Always use strict equality (===)</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Treating null and undefined as equivalent</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              They represent different concepts and should be handled intentionally.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Check for both explicitly when needed</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="font-semibold text-red-800 dark:text-red-200">Assuming object assignment clones data</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Object assignment copies references, not values, leading to shared mutations.
            </p>
            <p className="mt-2 text-sm font-medium text-red-800 dark:text-red-200">Fix: Use copy patterns like spread or structuredClone</p>
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
              href="/javascript/operators"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Operators
            </Link>
            <Link
              href="/javascript/objects"
              className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Objects
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
