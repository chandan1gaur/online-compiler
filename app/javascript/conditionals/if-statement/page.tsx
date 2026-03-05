import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript if Statement - Conditional Control Flow",
  description: "Learn JavaScript if statement with examples, syntax, and best practices. Master conditional logic for decision making in your code.",
  keywords: [
    "javascript if statement",
    "conditional statements javascript",
    "if condition javascript",
    "javascript control flow",
    "decision making javascript",
  ],
  openGraph: {
    title: "JavaScript if Statement - Conditional Control Flow",
    description: "Learn JavaScript if statement with examples, syntax, and best practices. Master conditional logic for decision making in your code.",
    url: "/javascript/conditionals/if-statement",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript if Statement",
    description: "Learn JavaScript if statement with examples, syntax, and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/if-statement" },
};

const sections = [
  {
    heading: "What is an if Statement?",
    paragraphs: [
      "The if statement is the most basic form of conditional control flow in JavaScript. It allows you to execute a block of code only if a specified condition evaluates to true.",
      "This is fundamental to programming as it enables decision-making based on different conditions or states in your application.",
    ],
    examples: [
      {
        title: "Basic if Statement",
        code: `let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote!");
}`,
        explanation: "This code checks if age is 18 or older, and only prints the message if the condition is true.",
      },
    ],
  },
  {
    heading: "if Statement Syntax",
    paragraphs: [
      "The syntax is simple: the keyword 'if' followed by parentheses containing the condition, then curly braces containing the code to execute.",
      "The condition can be any expression that evaluates to true or false (truthy or falsy values).",
    ],
    examples: [
      {
        title: "if Statement Structure",
        code: `if (condition) {
  // code to execute if condition is true
}`,
        explanation: "The basic structure of an if statement. The code block only runs when the condition is truthy.",
      },
      {
        title: "Multiple Conditions",
        code: `let temperature = 25;
let isRaining = false;

if (temperature > 20 && !isRaining) {
  console.log("Perfect weather for a walk!");
}`,
        explanation: "You can combine multiple conditions using logical operators like && (AND) and || (OR).",
      },
    ],
  },
  {
    heading: "Truthy and Falsy Values",
    paragraphs: [
      "JavaScript has specific rules about which values are considered true or false in conditional statements.",
      "Understanding these is crucial for writing correct if statements.",
    ],
    examples: [
      {
        title: "Truthy Values",
        code: `// These are all considered true:
if (true) { console.log("true"); }
if (1) { console.log("1"); }
if ("hello") { console.log("hello"); }
if ([]) { console.log("array"); }
if ({}) { console.log("object"); }`,
        explanation: "All non-zero numbers, non-empty strings, arrays, and objects are truthy.",
      },
      {
        title: "Falsy Values",
        code: `// These are considered false:
if (false) { console.log("false"); }      // false
if (0) { console.log("0"); }              // 0
if ("") { console.log("empty"); }         // empty string
if (null) { console.log("null"); }        // null
if (undefined) { console.log("undefined"); } // undefined
if (NaN) { console.log("NaN"); }          // NaN`,
        explanation: "Only these specific values are falsy. Everything else is truthy.",
      },
    ],
  },
  {
    heading: "Common Use Cases",
    paragraphs: [
      "if statements are used in many real-world scenarios to make decisions based on data or user input.",
    ],
    examples: [
      {
        title: "User Authentication",
        code: `let isLoggedIn = checkUserLogin();

if (isLoggedIn) {
  showDashboard();
  loadUserData();
} else {
  showLoginForm();
}`,
        explanation: "Check if user is logged in before showing protected content.",
      },
      {
        title: "Form Validation",
        code: `function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

let userEmail = "user@example.com";
if (validateEmail(userEmail)) {
  submitForm();
} else {
  showError("Invalid email address");
}`,
        explanation: "Validate user input before processing forms.",
      },
      {
        title: "Error Handling",
        code: `let result = performCalculation();

if (result !== null) {
  displayResult(result);
} else {
  showError("Calculation failed");
}`,
        explanation: "Check for errors or null values before proceeding.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Writing clean, readable if statements makes your code more maintainable and less prone to bugs.",
    ],
    bullets: [
      "Use descriptive variable names that make the condition self-explanatory",
      "Keep conditions simple - break complex conditions into multiple statements",
      "Use early returns to avoid deep nesting",
      "Add comments for complex business logic",
      "Consider using guard clauses for error conditions",
    ],
    examples: [
      {
        title: "Good Practice - Early Return",
        code: `function processUser(user) {
  if (!user) {
    console.log("No user provided");
    return;
  }

  if (!user.isActive) {
    console.log("User is not active");
    return;
  }

  // Process active user
  console.log("Processing user:", user.name);
}`,
        explanation: "Handle error conditions early to avoid deep nesting and improve readability.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Using = instead of ==",
    fix: "Use == or === for comparison, not = (assignment operator).",
  },
  {
    title: "Confusing truthy/falsy values",
    fix: "Explicitly check for the values you expect rather than relying on truthy/falsy behavior.",
  },
  {
    title: "Deep nesting of if statements",
    fix: "Use early returns or consider switch statements for multiple conditions.",
  },
];

const faqs = [
  {
    q: "What's the difference between == and === in if statements?",
    a: "== performs type coercion (converts types), === checks both value and type strictly.",
  },
  {
    q: "Can I use if without curly braces?",
    a: "Yes, but it's not recommended. Always use curly braces for clarity and to avoid bugs.",
  },
  {
    q: "What happens if I don't provide an else clause?",
    a: "The code simply continues executing normally if the condition is false.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function JavascriptIfStatementPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript if Statement</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master the fundamental building block of conditional logic in JavaScript. Learn how to make decisions in your code with if statements.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try if Statements
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          if statements are the foundation of decision-making in programming. Without them, your code would execute the same way every time, regardless of input or conditions.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
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
              { label: "if...else Statement", href: "/javascript/conditionals/if-else" },
              { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
              { label: "switch Statement", href: "/javascript/conditionals/switch-statement" },
              { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
              { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
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