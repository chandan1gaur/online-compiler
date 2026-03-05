import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript break Statement - Exit Loops Early",
  description: "Learn JavaScript break statement with examples. Master early loop termination and switch case exits.",
  keywords: [
    "javascript break statement",
    "break in javascript",
    "exit loop early",
    "javascript loops control",
    "loop termination",
  ],
  openGraph: {
    title: "JavaScript break Statement - Exit Loops Early",
    description: "Learn JavaScript break statement with examples. Master early loop termination.",
    url: "/javascript/loops/break-statement",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript break Statement",
    description: "Learn JavaScript break statement with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/loops/break-statement" },
};

const sections = [
  {
    heading: "What is the break Statement?",
    paragraphs: [
      "The break statement immediately terminates the current loop or switch statement and transfers control to the statement following the terminated statement.",
      "It's used to exit loops early when a certain condition is met, or to exit switch cases.",
    ],
    examples: [
      {
        title: "Basic break in for Loop",
        code: `for (let i = 0; i < 10; i++) {
  console.log("Number:", i);

  if (i === 5) {
    console.log("Found 5, stopping!");
    break; // Exit the loop
  }
}

// Output:
// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5
// Found 5, stopping!`,
        explanation: "The loop stops when i equals 5, even though the condition allows up to 9.",
      },
    ],
  },
  {
    heading: "break in Different Loop Types",
    paragraphs: [
      "break works with all loop types: for, while, do...while, and for...in/for...of loops.",
    ],
    examples: [
      {
        title: "break in while Loop",
        code: `let count = 0;

while (count < 100) {
  console.log("Count:", count);
  count++;

  if (count === 10) {
    console.log("Reached 10, breaking!");
    break;
  }
}`,
        explanation: "while loop exits early when count reaches 10.",
      },
      {
        title: "break in for...of Loop",
        code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numbers) {
  console.log("Processing:", num);

  if (num === 7) {
    console.log("Found 7, stopping search!");
    break;
  }
}`,
        explanation: "for...of loop stops when the target value is found.",
      },
    ],
  },
  {
    heading: "break in switch Statements",
    paragraphs: [
      "break is essential in switch statements to prevent fall-through behavior.",
    ],
    examples: [
      {
        title: "switch with break",
        code: `const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break; // Exit switch

  case "Tuesday":
    console.log("Second day");
    break;

  case "Friday":
    console.log("TGIF!");
    break;

  default:
    console.log("Weekend!");
}

// Output: Start of work week`,
        explanation: "break prevents execution of subsequent cases after a match.",
      },
      {
        title: "Intentional Fall-through",
        code: `const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;

  case "B":
  case "C":
    console.log("Good job!");
    break; // Only one break needed for multiple cases

  case "D":
  case "F":
    console.log("Needs improvement");
    break;
}`,
        explanation: "Multiple cases can share the same break for intentional fall-through.",
      },
    ],
  },
  {
    heading: "Common Use Cases",
    paragraphs: [
      "break is commonly used for early termination when a condition is met or when searching for specific values.",
    ],
    examples: [
      {
        title: "Search Array for Value",
        code: `function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Found it, exit early
    }
  }
  return -1; // Not found
}

const numbers = [10, 20, 30, 40, 50];
console.log(findIndex(numbers, 30)); // Output: 2
console.log(findIndex(numbers, 100)); // Output: -1`,
        explanation: "Return immediately when target is found, no need to continue searching.",
      },
      {
        title: "Validate Input with Early Exit",
        code: `function validatePassword(password) {
  // Check minimum length
  if (password.length < 8) {
    return "Password too short";
  }

  // Check for uppercase
  let hasUpper = false;
  for (let char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUpper = true;
      break; // Found uppercase, no need to check more
    }
  }

  if (!hasUpper) {
    return "Password needs uppercase letter";
  }

  return "Password is valid";
}`,
        explanation: "Use break to stop checking once the required condition is met.",
      },
      {
        title: "Game Loop Exit",
        code: `let gameRunning = true;
let score = 0;

while (gameRunning) {
  // Game logic here
  score += 10;

  // Check win condition
  if (score >= 100) {
    console.log("You win!");
    break; // Exit game loop
  }

  // Check quit condition
  if (userWantsToQuit()) {
    console.log("Game ended by user");
    break;
  }
}`,
        explanation: "break provides clean exit from game loops when conditions are met.",
      },
    ],
  },
  {
    heading: "break vs return",
    paragraphs: [
      "break exits the current loop, while return exits the entire function.",
    ],
    examples: [
      {
        title: "break vs return",
        code: `function processNumbers(numbers) {
  for (let num of numbers) {
    if (num < 0) {
      console.log("Found negative number");
      break; // Exit loop only
    }
    console.log("Processing:", num);
  }
  console.log("Loop finished");
}

function findFirstNegative(numbers) {
  for (let num of numbers) {
    if (num < 0) {
      return num; // Exit entire function
    }
  }
  return null;
}`,
        explanation: "break continues execution after the loop, return exits the function immediately.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use break judiciously to maintain readable and predictable code flow.",
    ],
    bullets: [
      "Use break for early loop termination when condition is met",
      "Always use break in switch cases (except intentional fall-through)",
      "Consider if continue or return might be more appropriate",
      "Avoid excessive break statements that make code hard to follow",
      "Document why you're breaking out of a loop",
      "Consider extracting complex loop logic into separate functions",
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting break in switch",
    fix: "Always include break in switch cases unless you intentionally want fall-through behavior.",
  },
  {
    title: "Using break in nested loops",
    fix: "break only exits the innermost loop. Use labeled breaks or other control flow for outer loops.",
  },
  {
    title: "Overusing break",
    fix: "Consider restructuring code to avoid excessive break statements.",
  },
];

const faqs = [
  {
    q: "Does break work in all types of loops?",
    a: "Yes, break works in for, while, do...while, for...in, and for...of loops.",
  },
  {
    q: "What's the difference between break and continue?",
    a: "break exits the entire loop, while continue skips to the next iteration.",
  },
  {
    q: "Can break be used outside of loops and switches?",
    a: "No, break can only be used inside loops or switch statements.",
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

export default function JavascriptBreakStatementPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript break Statement</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn break statements to exit loops early. Master loop termination and switch case control.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try break Statement
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          break statements provide efficient early termination of loops and switches, improving performance and code readability when you need to stop processing once a condition is met.
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
              { label: "for Loop", href: "/javascript/loops/for-loop" },
              { label: "while Loop", href: "/javascript/loops/while-loop" },
              { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
              { label: "continue Statement", href: "/javascript/loops/continue-statement" },
              { label: "Nested Loops", href: "/javascript/loops/nested-loops" },
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