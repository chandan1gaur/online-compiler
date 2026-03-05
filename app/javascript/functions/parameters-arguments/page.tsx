import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Parameters and Arguments - Function Inputs",
  description: "Learn the difference between parameters and arguments in JavaScript. Master passing data to functions.",
  keywords: [
    "javascript parameters",
    "javascript arguments",
    "function parameters",
    "function arguments",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Parameters and Arguments",
    description: "Understand the difference between parameters and arguments, and learn how to pass data to functions.",
    url: "/javascript/functions/parameters-arguments",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Parameters and Arguments",
    description: "Master function inputs with parameters and arguments explained.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/parameters-arguments" },
};

const sections = [
  {
    heading: "Parameters vs Arguments",
    paragraphs: [
      "Parameters and arguments are often confused, but they're different concepts. Parameters are the names listed in a function definition, while arguments are the actual values passed when calling the function.",
      "Think of parameters as placeholders and arguments as the actual data being passed in.",
    ],
    examples: [
      {
        title: "Parameters vs Arguments",
        code: `// 'name' and 'age' are PARAMETERS
function createProfile(name, age) {
  console.log("Name: " + name + ", Age: " + age);
}

// "Alice" and 25 are ARGUMENTS
createProfile("Alice", 25); // Output: Name: Alice, Age: 25

// "Bob" and 30 are different ARGUMENTS
createProfile("Bob", 30);   // Output: Name: Bob, Age: 30`,
        explanation: "Parameters are defined in the function signature. Arguments are the actual values passed to the function.",
      },
    ],
  },
  {
    heading: "Using Parameters",
    paragraphs: [
      "Parameters give your function the ability to accept input values. You define them in the function signature and use them in the function body.",
    ],
    examples: [
      {
        title: "Multiple Parameters",
        code: `// Function with multiple parameters
function calculateArea(width, height) {
  const area = width * height;
  return area;
}

console.log(calculateArea(5, 10)); // 50
console.log(calculateArea(20, 15)); // 300

// Parameters can be used multiple times
function greet(firstName, lastName) {
  return "Hello, " + firstName + " " + lastName;
}

console.log(greet("John", "Doe")); // Hello, John Doe`,
        explanation: "You can use parameters multiple times within the function body.",
      },
    ],
  },
  {
    heading: "Arguments Object",
    paragraphs: [
      "Inside a function (not arrow functions), you can access the 'arguments' object, which contains all arguments passed to the function, even if they exceed the number of parameters.",
    ],
    examples: [
      {
        title: "Using the arguments Object",
        code: `// Regular function has access to 'arguments'
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50

// Arrow functions don't have 'arguments'
const sum2 = () => {
  console.log(arguments); // ReferenceError
};

// Use rest parameters instead with arrow functions
const sum3 = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
};

console.log(sum3(1, 2, 3)); // 6`,
        explanation: "The 'arguments' object is only available in regular functions. Use rest parameters with arrow functions.",
      },
    ],
  },
  {
    heading: "Passing More or Fewer Arguments",
    paragraphs: [
      "JavaScript allows you to pass more or fewer arguments than the function has parameters. Extra arguments are ignored, and missing arguments become undefined.",
    ],
    examples: [
      {
        title: "Flexible Argument Count",
        code: `function introduce(name, age) {
  console.log("Name: " + name);
  console.log("Age: " + age);
}

// Passing correct number of arguments
introduce("Alice", 25);
// Output: Name: Alice
//         Age: 25

// Passing fewer arguments
introduce("Bob");
// Output: Name: Bob
//         Age: undefined

// Passing more arguments (extras ignored)
introduce("Charlie", 30, "Engineer", "New York");
// Output: Name: Charlie
//         Age: 30
// The extra arguments are ignored`,
        explanation: "JavaScript is flexible with argument count, but this can lead to bugs. Use default parameters or rest parameters for better control.",
      },
    ],
  },
  {
    heading: "Named Parameters Pattern",
    paragraphs: [
      "When functions have many parameters, it's helpful to use an object pattern to pass named parameters. This makes function calls clearer and more maintainable.",
    ],
    examples: [
      {
        title: "Object as Parameter",
        code: `// Multiple parameters (hard to remember order)
function createUser(name, email, age, city) {
  // ...
}

createUser("Alice", "alice@email.com", 25, "NYC");

// Named parameters (clearer)
function createUser(options) {
  const { name, email, age, city } = options;
  console.log(name, email, age, city);
}

createUser({
  name: "Bob",
  email: "bob@email.com",
  age: 30,
  city: "LA"
});

// Even cleaner with destructuring in parameters
function createUser({ name, email, age, city }) {
  console.log(name, email, age, city);
}

createUser({
  name: "Charlie",
  email: "charlie@email.com",
  age: 35,
  city: "SF"
});`,
        explanation: "Using object parameters makes function signatures clearer and easier to use.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Confusing parameters and arguments",
    fix: "Parameters are defined in the function signature. Arguments are the actual values passed when calling the function.",
  },
  {
    title: "Not handling undefined arguments",
    fix: "Use default parameters or check for undefined values if a function might be called with fewer arguments than expected.",
  },
  {
    title: "Using 'arguments' in arrow functions",
    fix: "Arrow functions don't have 'arguments'. Use rest parameters (...args) instead.",
  },
];

const faqs = [
  {
    q: "What's the difference between a parameter and an argument?",
    a: "A parameter is the variable name listed in a function definition. An argument is the actual value passed to the function when it's called.",
  },
  {
    q: "Can I pass more arguments than parameters?",
    a: "Yes, JavaScript allows this. Extra arguments are ignored unless you use the 'arguments' object or rest parameters.",
  },
  {
    q: "What is the 'arguments' object?",
    a: "The 'arguments' object is a special object available inside regular functions that contains all arguments passed to the function. It's not available in arrow functions.",
  },
  {
    q: "What should I use instead of 'arguments' in arrow functions?",
    a: "Use rest parameters (...args) to collect all arguments into an array. This works with both regular and arrow functions.",
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

export default function ParametersArgumentsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Parameters and Arguments
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn the difference between parameters and arguments, and master passing data to functions effectively.
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
          Understanding parameters and arguments is fundamental to writing functions. They allow you to create reusable, flexible functions that work with different input values.
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
              { label: "Default Parameters", href: "/javascript/functions/default-parameters" },
              { label: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
              { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
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