import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript switch Statement - Multiple Choice Decisions",
  description: "Learn JavaScript switch statement with examples. Master efficient multiple-choice decision making with case and break statements.",
  keywords: [
    "javascript switch statement",
    "switch case javascript",
    "multiple conditions javascript",
    "javascript control flow",
    "case break javascript",
  ],
  openGraph: {
    title: "JavaScript switch Statement - Multiple Choice Decisions",
    description: "Learn JavaScript switch statement with examples. Master efficient multiple-choice decision making.",
    url: "/javascript/conditionals/switch-statement",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript switch Statement",
    description: "Learn JavaScript switch statement with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/switch-statement" },
};

const sections = [
  {
    heading: "What is a switch Statement?",
    paragraphs: [
      "The switch statement provides an efficient way to handle multiple conditions that compare against the same value.",
      "It's particularly useful when you have many possible values to check against a single variable, offering better readability than long else if chains.",
    ],
    examples: [
      {
        title: "Basic switch Statement",
        code: `let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Regular workday");
}`,
        explanation: "The switch compares the value of 'day' against each case. Multiple cases can share the same code block.",
      },
    ],
  },
  {
    heading: "switch Statement Syntax",
    paragraphs: [
      "The switch statement consists of a switch expression, case labels, and an optional default case.",
      "Each case represents a possible value to match against the switch expression.",
    ],
    examples: [
      {
        title: "switch Statement Structure",
        code: `switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if no cases match
}`,
        explanation: "The break statement prevents fall-through to the next case. The default case handles unmatched values.",
      },
    ],
  },
  {
    heading: "The break Statement",
    paragraphs: [
      "The break statement is crucial in switch statements. Without it, execution continues to the next case (fall-through).",
      "This can be intentional for grouping cases, but is usually a bug if unintended.",
    ],
    examples: [
      {
        title: "break Prevents Fall-through",
        code: `let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break; // Stops here
  case "B":
    console.log("Good job!");
    break; // Stops here
  case "C":
    console.log("Satisfactory");
    break;
  default:
    console.log("Needs improvement");
}`,
        explanation: "Each break statement exits the switch block, preventing execution of subsequent cases.",
      },
      {
        title: "Intentional Fall-through",
        code: `let month = 1;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter season");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring season");
    break;
  // ... more cases
}`,
        explanation: "Multiple cases can share the same code block by omitting break statements between them.",
      },
    ],
  },
  {
    heading: "Real-World Examples",
    paragraphs: [
      "switch statements are commonly used for menu handling, state management, and categorization based on exact values.",
    ],
    examples: [
      {
        title: "Menu Selection Handler",
        code: `function handleMenuSelection(choice) {
  switch (choice) {
    case "save":
      saveDocument();
      break;
    case "open":
      openFileDialog();
      break;
    case "print":
      printDocument();
      break;
    case "exit":
      confirmExit();
      break;
    default:
      showError("Unknown menu option");
  }
}

handleMenuSelection("save"); // Calls saveDocument()`,
        explanation: "Handle different menu options with clean, readable code.",
      },
      {
        title: "HTTP Status Code Handler",
        code: `function getStatusMessage(statusCode) {
  switch (statusCode) {
    case 200:
      return "OK - Request successful";
    case 201:
      return "Created - Resource created";
    case 400:
      return "Bad Request - Invalid input";
    case 401:
      return "Unauthorized - Authentication required";
    case 404:
      return "Not Found - Resource doesn't exist";
    case 500:
      return "Internal Server Error";
    default:
      return "Unknown status code";
  }
}

console.log(getStatusMessage(404)); // "Not Found - Resource doesn't exist"`,
        explanation: "Map status codes to human-readable messages efficiently.",
      },
      {
        title: "Calculator Operations",
        code: `function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Division by zero!";
    default:
      return "Invalid operation";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 0, "/")); // "Division by zero!"`,
        explanation: "Implement calculator logic with different operations based on operator symbols.",
      },
    ],
  },
  {
    heading: "switch vs if...else Comparison",
    paragraphs: [
      "Both switch and else if can handle multiple conditions, but they serve different purposes.",
    ],
    bullets: [
      "Use switch for exact value matching against a single variable",
      "Use else if for ranges, complex conditions, or different variables",
      "switch is more readable for many exact value comparisons",
      "else if is more flexible for complex logic",
    ],
    examples: [
      {
        title: "When to Use switch",
        code: `// Better with switch - exact value matching
let day = "Monday";
switch (day) {
  case "Monday": console.log("Blue"); break;
  case "Tuesday": console.log("Red"); break;
  case "Wednesday": console.log("Green"); break;
  // ... more exact matches
}`,
        explanation: "switch excels when comparing one variable against many exact values.",
      },
      {
        title: "When to Use else if",
        code: `// Better with else if - ranges and complex conditions
let score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
// Ranges work better with else if`,
        explanation: "else if handles ranges and complex boolean expressions more naturally.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Following best practices makes switch statements more maintainable and less error-prone.",
    ],
    bullets: [
      "Always use break statements unless intentional fall-through",
      "Include a default case to handle unexpected values",
      "Keep case blocks simple - extract complex logic to functions",
      "Use consistent formatting and indentation",
      "Consider object lookup for simple value mapping",
      "Add comments for fall-through cases",
    ],
    examples: [
      {
        title: "Object Lookup Alternative",
        code: `// For simple value mapping, consider objects:
const statusMessages = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  404: "Not Found",
  500: "Internal Server Error"
};

function getStatusMessage(code) {
  return statusMessages[code] || "Unknown status";
}

// Instead of a long switch statement`,
        explanation: "For simple key-value mappings, object lookup can be more concise than switch.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting break statements",
    fix: "Always add break after each case unless you intentionally want fall-through behavior.",
  },
  {
    title: "No default case",
    fix: "Include a default case to handle unexpected values gracefully.",
  },
  {
    title: "Using switch for ranges",
    fix: "Use else if statements for range comparisons instead of switch.",
  },
];

const faqs = [
  {
    q: "When should I use switch instead of else if?",
    a: "Use switch when comparing one variable against many exact values. Use else if for ranges or complex conditions.",
  },
  {
    q: "What happens if I forget the break statement?",
    a: "Execution continues to the next case (fall-through), which is usually unintended and causes bugs.",
  },
  {
    q: "Can switch work with strings?",
    a: "Yes, switch works with strings, numbers, and other primitive types that can be compared with ===.",
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

export default function JavascriptSwitchStatementPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript switch Statement</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn how to handle multiple exact value matches efficiently with switch statements. Master case and break for clean decision-making.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try switch Statement
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          switch statements provide cleaner, more readable code when you need to compare one value against many possible exact matches. They're essential for menu systems, state machines, and value-based routing.
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
              { label: "if Statement", href: "/javascript/conditionals/if-statement" },
              { label: "if...else Statement", href: "/javascript/conditionals/if-else" },
              { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
              { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
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