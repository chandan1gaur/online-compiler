import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Rest Parameters - Function Arguments",
  description: "Learn JavaScript rest parameters. Master collecting multiple arguments into an array.",
  keywords: [
    "javascript rest parameters",
    "rest parameters",
    "variadic functions",
    "gathering arguments",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Rest Parameters",
    description: "Learn rest parameters to collect multiple function arguments into an array.",
    url: "/javascript/functions/rest-parameters",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Rest Parameters",
    description: "Master rest parameters for flexible function arguments.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/rest-parameters" },
};

const sections = [
  {
    heading: "What are Rest Parameters?",
    paragraphs: [
      "Rest parameters allow a function to accept an indefinite number of arguments as an array. They'redenoted by three dots (...) followed by a parameter name.",
      "Rest parameters are useful when you want a function to work with any number of arguments, replacing the need for the 'arguments' object.",
    ],
    examples: [
      {
        title: "Basic Rest Parameters",
        code: `// Function accepts any number of arguments
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum()); // 0
console.log(sum(5)); // 5
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest parameters create an actual array
function printArgs(...args) {
  console.log(args);
  console.log(Array.isArray(args)); // true
  console.log(args.length);
}

printArgs(1, 2, 3);
// [1, 2, 3]
// true
// 3`,
        explanation: "Rest parameters collect arguments into an array, making it easy to work with variable argument counts.",
      },
    ],
  },
  {
    heading: "Rest Parameters with Regular Parameters",
    paragraphs: [
      "You can combine regular parameters with rest parameters. Regular parameters come first, and rest parameters must come last.",
    ],
    examples: [
      {
        title: "Mixing Regular and Rest Parameters",
        code: `// First parameter is required, rest are optional
function greet(greeting, ...names) {
  let result = greeting + ": ";
  for (let name of names) {
    result += name + " ";
  }
  return result;
}

console.log(greet("Hello")); // Hello: 
console.log(greet("Hello", "Alice")); // Hello: Alice 
console.log(greet("Hello", "Alice", "Bob", "Charlie"));
// Hello: Alice Bob Charlie 

// Multiple regular parameters before rest
function createRecord(id, name, ...tags) {
  return {
    id: id,
    name: name,
    tags: tags
  };
}

console.log(createRecord(1, "Product", "new", "sale", "featured"));
// { id: 1, name: "Product", tags: ["new", "sale", "featured"] }

// Rest must be last
// function test(a, ...b, c) {} // SyntaxError!
// function test(...a, ...b) {} // SyntaxError!`,
        explanation: "Rest parameters must be the last parameter in a function. Only one rest parameter per function.",
      },
    ],
  },
  {
    heading: "Rest Parameters vs Arguments Object",
    paragraphs: [
      "Rest parameters are cleaner and more flexible than the 'arguments' object. Rest parameters create a real array and work with arrow functions.",
    ],
    examples: [
      {
        title: "Rest vs Arguments",
        code: `// Using arguments object (old way)
function sumOld() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Using rest parameters (modern way)
function sumNew(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(sumOld(1, 2, 3)); // 6
console.log(sumNew(1, 2, 3)); // 6

// Rest parameters work with arrow functions
const multiplyAll = (...numbers) => {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
};

console.log(multiplyAll(2, 3, 4)); // 24

// arguments doesn't exist in arrow functions
// const add = (...) => console.log(arguments); // ReferenceError`,
        explanation: "Rest parameters are the modern standard. They work with arrow functions and provide cleaner code.",
      },
    ],
  },
  {
    heading: "Practical Uses of Rest Parameters",
    paragraphs: [
      "Rest parameters enable flexible function design for logging, concatenation, array methods, and more.",
    ],
    examples: [
      {
        title: "Real-World Examples",
        code: `// Logging with variable arguments
function log(level, ...messages) {
  console.log("[" + level + "]", ...messages);
}

log("INFO", "User logged in", "ID: 123");
// [INFO] User logged in ID: 123

// Concatenating arrays
function concatArrays(...arrays) {
  return arrays.reduce((result, arr) => result.concat(arr), []);
}

console.log(concatArrays([1, 2], [3, 4], [5]));
// [1, 2, 3, 4, 5]

// Creating flexible constructors
function Person(...data) {
  if (data.length === 1) {
    this.name = data[0];
  } else if (data.length === 2) {
    this.firstName = data[0];
    this.lastName = data[1];
  }
}

// Function composition
function compose(...fns) {
  return (x) => fns.reduce((result, fn) => fn(result), x);
}

const double = x => x * 2;
const addTen = x => x + 10;
const result = compose(double, addTen)(5);
console.log(result); // (5 * 2) + 10 = 20`,
        explanation: "Rest parameters enable powerful patterns for flexible, composable functions.",
      },
    ],
  },
  {
    heading: "Rest Parameters in Arrow Functions",
    paragraphs: [
      "Rest parameters work perfectly with arrow functions, unlike the 'arguments' object.",
    ],
    bullets: [
      "Arrow functions can use rest parameters (...args)",
      "Arrow functions do NOT have access to the 'arguments' object",
      "Rest parameters are the preferred way to handle variable arguments in modern JavaScript",
      "Rest parameters create a real array with all array methods available",
      "Use rest parameters instead of 'arguments' for cleaner, more maintainable code",
    ],
  },
];

const mistakes = [
  {
    title: "Putting rest parameters before regular parameters",
    fix: "Rest parameters must come LAST in the parameter list. Use: (a, b, ...rest), not (...rest, a, b)",
  },
  {
    title: "Using multiple rest parameters",
    fix: "A function can only have ONE rest parameter. (...a, ...b) is invalid.",
  },
  {
    title: "Trying to use arguments in arrow functions",
    fix: "Arrow functions don't have 'arguments'. Use rest parameters (...args) instead.",
  },
];

const faqs = [
  {
    q: "What are rest parameters?",
    a: "Rest parameters (...args) allow a function to accept any number of arguments and collect them into an array.",
  },
  {
    q: "What's the difference between rest parameters and the arguments object?",
    a: "Rest parameters create a real array and work with arrow functions. The arguments object is array-like and doesn't work in arrow functions.",
  },
  {
    q: "Can I have multiple rest parameters?",
    a: "No, a function can only have one rest parameter, and it must be the last parameter.",
  },
  {
    q: "Can I use rest parameters with named parameters?",
    a: "Yes, you can mix regular parameters with rest parameters. Named parameters must come first: (a, b, ...rest)",
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

export default function RestParametersPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Rest Parameters
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master rest parameters to collect multiple arguments into arrays. Write flexible functions.
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
          Rest parameters enable variadic functions that work with any number of arguments. They're essential for building flexible APIs and are the modern replacement for the 'arguments' object.
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
              { label: "Parameters and Arguments", href: "/javascript/functions/parameters-arguments" },
              { label: "Default Parameters", href: "/javascript/functions/default-parameters" },
              { label: "Spread Operator", href: "/javascript/functions/spread-operator" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
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