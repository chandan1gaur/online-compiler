import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Default Parameters - Function Defaults",
  description: "Learn JavaScript default parameters. Master setting default values for function parameters.",
  keywords: [
    "javascript default parameters",
    "default parameters",
    "function defaults",
    "es6 defaults",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Default Parameters",
    description: "Learn to set default values for function parameters in JavaScript ES6.",
    url: "/javascript/functions/default-parameters",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Default Parameters",
    description: "Master default parameters for cleaner, more robust JavaScript functions.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/default-parameters" },
};

const sections = [
  {
    heading: "What are Default Parameters?",
    paragraphs: [
      "Default parameters allow you to assign default values to function parameters. If an argument is not provided (or is undefined), the default value is used instead.",
      "This feature was introduced in ES6 (2015) and provides a clean way to handle missing arguments without verbose if-checks.",
    ],
    examples: [
      {
        title: "Basic Default Parameters",
        code: `// Without default parameters
function greet1(name) {
  if (name === undefined) {
    name = "Guest";
  }
  return "Hello, " + name;
}

// With default parameters (cleaner)
function greet2(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet2()); // Hello, Guest
console.log(greet2("Alice")); // Hello, Alice

// With arrow functions
const greet3 = (name = "Guest") => "Hello, " + name;

console.log(greet3()); // Hello, Guest
console.log(greet3("Bob")); // Hello, Bob`,
        explanation: "Default parameters eliminate the need for manual undefined checks and make code cleaner.",
      },
    ],
  },
  {
    heading: "Multiple Default Parameters",
    paragraphs: [
      "You can set default values for multiple parameters or just some of them. Only parameters without values passed will use defaults.",
    ],
    examples: [
      {
        title: "Multiple Parameters with Defaults",
        code: `// All parameters have defaults
function createProfile(name = "Unknown", age = 0, city = "Unspecified") {
  return {
    name: name,
    age: age,
    city: city
  };
}

console.log(createProfile());
// { name: "Unknown", age: 0, city: "Unspecified" }

console.log(createProfile("Alice"));
// { name: "Alice", age: 0, city: "Unspecified" }

console.log(createProfile("Bob", 25));
// { name: "Bob", age: 25, city: "Unspecified" }

console.log(createProfile("Charlie", 30, "NYC"));
// { name: "Charlie", age: 30, city: "NYC" }

// Mix required and default parameters
function sendEmail(email, subject, body = "No content") {
  return email + ": " + subject + " - " + body;
}

console.log(sendEmail("user@email.com", "Welcome"));
// user@email.com: Welcome - No content`,
        explanation: "Position matters - required parameters should come before default parameters. Parameters without defaults can't come after those with defaults.",
      },
    ],
  },
  {
    heading: "Dynamic Default Values",
    paragraphs: [
      "Default parameters aren't limited to literals. You can use expressions, function calls, and even values of previous parameters.",
    ],
    examples: [
      {
        title: "Dynamic and Computed Defaults",
        code: `// Function call as default
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

function createLog(message, date = getCurrentDate()) {
  return "[" + date + "] " + message;
}

console.log(createLog("User logged in"));
// [2024-01-15] User logged in

// Using previous parameters as defaults
function calculateDimensions(width, height = width) {
  return width + " x " + height;
}

console.log(calculateDimensions(10)); // 10 x 10
console.log(calculateDimensions(10, 20)); // 10 x 20

// Object as default
function configureAPI(options = {}) {
  const { url = "localhost", port = 3000, timeout = 5000 } = options;
  return "Server: " + url + ":" + port + " (timeout: " + timeout + "ms)";
}

console.log(configureAPI());
// Server: localhost:3000 (timeout: 5000ms)

console.log(configureAPI({ url: "api.example.com", port: 8080 }));
// Server: api.example.com:8080 (timeout: 5000ms)`,
        explanation: "Default parameters can be expressions that are evaluated when the function is called, making them flexible.",
      },
    ],
  },
  {
    heading: "Passing undefined vs Not Passing Arguments",
    paragraphs: [
      "There's an important distinction: passing undefined explicitly causes the default to activate, but not passing an argument also activates the default.",
    ],
    examples: [
      {
        title: "undefined Behavior",
        code: `function greet(name = "Guest") {
  return "Hello, " + name;
}

// Not passing an argument - uses default
console.log(greet()); // Hello, Guest

// Passing undefined explicitly - uses default
console.log(greet(undefined)); // Hello, Guest

// Passing null - does NOT use default
console.log(greet(null)); // Hello, null

// Passing empty string - does NOT use default
console.log(greet("")); // Hello, 

// Only undefined triggers the default
function test(value = "default") {
  console.log("Value: " + value);
}

test(); // Value: default
test(undefined); // Value: default
test(null); // Value: null
test(false); // Value: false
test(0); // Value: 0`,
        explanation: "Only undefined triggers default values. Other falsy values like null, false, or 0 do not.",
      },
    ],
  },
  {
    heading: "Default Parameters vs Arguments Object",
    paragraphs: [
      "Default parameters are cleaner than using the arguments object or manual checks. They're the modern, recommended approach.",
    ],
    bullets: [
      "Default parameters are evaluated with strict scope (don't have access to previous parameters)",
      "Default values are not included in arr.length for arrow/rest parameter functions",
      "The arguments object reflects actual arguments passed, not default values",
      "Default parameters work with destructuring assignment",
      "Parameters with defaults must come after those without defaults",
    ],
  },
];

const mistakes = [
  {
    title: "Putting required parameters after default parameters",
    fix: "Always put required parameters first, then parameters with defaults. This prevents 'function(x = 1, y)' issues.",
  },
  {
    title: "Expecting null to trigger defaults",
    fix: "Only undefined triggers default values. If you pass null explicitly, it uses null, not the default.",
  },
  {
    title: "Using complex logic in defaults excessively",
    fix: "Keep default parameters simple. For complex logic, use function body checks or use an options object.",
  },
];

const faqs = [
  {
    q: "What are default parameters?",
    a: "Default parameters allow you to set default values for function parameters. If an argument isn't provided (or is undefined), the default value is used.",
  },
  {
    q: "Does only undefined trigger defaults?",
    a: "Yes. Passing undefined explicitly or not passing an argument both trigger defaults. But null, false, 0, and other falsy values do not.",
  },
  {
    q: "Can I use a function call as a default?",
    a: "Yes, you can use any expression as a default value, including function calls. The expression is evaluated each time the function is called without that argument.",
  },
  {
    q: "What's the order rule for parameters with defaults?",
    a: "Parameters with defaults should come after parameters without defaults. You can't have a required parameter after an optional one.",
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

export default function DefaultParametersPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Default Parameters
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master setting default values for function parameters. Write cleaner, more robust functions.
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
          Default parameters make functions more flexible and reduce boilerplate code. They eliminate the need for manual undefined checks and make function calls cleaner.
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