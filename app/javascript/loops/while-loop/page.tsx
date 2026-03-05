import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript while Loop - Condition-Based Iteration",
  description: "Learn JavaScript while loop with examples. Master condition-based iteration and indefinite loops in JavaScript.",
  keywords: [
    "javascript while loop",
    "while loop javascript",
    "condition based loop",
    "javascript loops",
    "indefinite iteration",
  ],
  openGraph: {
    title: "JavaScript while Loop - Condition-Based Iteration",
    description: "Learn JavaScript while loop with examples. Master condition-based iteration and indefinite loops.",
    url: "/javascript/loops/while-loop",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript while Loop",
    description: "Learn JavaScript while loop with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/loops/while-loop" },
};

const sections = [
  {
    heading: "What is a while Loop?",
    paragraphs: [
      "The while loop executes a block of code as long as a specified condition remains true. Unlike for loops, while loops don't have a built-in counter or initialization.",
      "They're perfect when you don't know how many iterations you'll need, or when the loop should continue based on a dynamic condition.",
    ],
    examples: [
      {
        title: "Basic while Loop",
        code: `let count = 0;

while (count < 5) {
  console.log("Count:", count);
  count++; // Don't forget to update the condition!
}

// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4`,
        explanation: "The loop continues as long as count < 5. We manually increment count each iteration.",
      },
    ],
  },
  {
    heading: "while Loop Syntax",
    paragraphs: [
      "The while loop is simpler than for loops - it only requires a condition. The loop body executes while the condition evaluates to true.",
      "Make sure the condition will eventually become false, or you'll create an infinite loop!",
    ],
    examples: [
      {
        title: "while Loop Structure",
        code: `while (condition) {
  // code to execute while condition is true
  // Don't forget to update variables that affect the condition!
}`,
        explanation: "The condition is checked before each iteration. If false initially, the loop never runs.",
      },
    ],
  },
  {
    heading: "Real-World Examples",
    paragraphs: [
      "while loops are commonly used for tasks where the number of iterations isn't known in advance.",
    ],
    examples: [
      {
        title: "User Input Validation",
        code: `let userInput;
let attempts = 0;

while (!userInput && attempts < 3) {
  userInput = prompt("Enter your name:");
  attempts++;

  if (!userInput) {
    console.log("Please enter a valid name.");
  }
}

if (userInput) {
  console.log("Hello, " + userInput + "!");
} else {
  console.log("Too many failed attempts.");
}`,
        explanation: "Continue prompting until valid input or maximum attempts reached.",
      },
      {
        title: "Game Loop",
        code: `let gameRunning = true;
let score = 0;

while (gameRunning) {
  // Game logic here
  let userAction = getUserInput();

  if (userAction === "quit") {
    gameRunning = false;
  } else if (userAction === "score") {
    score += 10;
    console.log("Score:", score);
  }

  // Check win/lose conditions
  if (score >= 100) {
    console.log("You win!");
    gameRunning = false;
  }
}`,
        explanation: "Game continues until player quits or reaches winning score.",
      },
      {
        title: "Reading Data Until End",
        code: `let data = [];
let input;

while ((input = getNextDataItem()) !== null) {
  data.push(input);
  console.log("Processed item:", input);
}

console.log("Total items processed:", data.length);`,
        explanation: "Process data items until no more data is available (null indicates end).",
      },
    ],
  },
  {
    heading: "while vs do...while",
    paragraphs: [
      "while and do...while are similar, but with one key difference: do...while always executes at least once.",
    ],
    examples: [
      {
        title: "while vs do...while Comparison",
        code: `let x = 10;

// while: condition checked first
while (x < 10) {
  console.log("This won't print - x is already 10");
}

// do...while: condition checked after
do {
  console.log("This prints once - x is 10");
} while (x < 10);`,
        explanation: "do...while guarantees at least one execution, while while might execute zero times.",
      },
    ],
  },
  {
    heading: "Common Patterns",
    paragraphs: [
      "while loops work well for certain iterative patterns that don't fit for loops naturally.",
    ],
    examples: [
      {
        title: "Waiting for Condition",
        code: `function waitForCondition(maxWaitTime = 5000) {
  let startTime = Date.now();

  while (!conditionMet()) {
    // Check timeout
    if (Date.now() - startTime > maxWaitTime) {
      throw new Error("Timeout waiting for condition");
    }

    // Small delay to prevent busy waiting
    // In real code, you'd use setTimeout or similar
  }

  console.log("Condition met!");
}`,
        explanation: "Wait for an external condition to become true, with timeout protection.",
      },
      {
        title: "Processing Queue",
        code: `let taskQueue = ["task1", "task2", "task3", "task4"];

while (taskQueue.length > 0) {
  let currentTask = taskQueue.shift(); // Remove first item
  console.log("Processing:", currentTask);

  // Simulate processing time
  // processTask(currentTask);
}

console.log("All tasks completed!");`,
        explanation: "Process items from a queue until the queue is empty.",
      },
    ],
  },
  {
    heading: "Infinite Loops and Safety",
    paragraphs: [
      "while loops can easily create infinite loops if the condition never becomes false. Always ensure your loop has an exit strategy.",
    ],
    examples: [
      {
        title: "Safe while Loop with Timeout",
        code: `function safeWaitForCondition(timeoutMs = 10000) {
  let startTime = Date.now();

  while (!conditionMet()) {
    // Safety check - prevent infinite loop
    if (Date.now() - startTime > timeoutMs) {
      console.log("Timeout reached, exiting loop");
      break; // or throw error
    }

    // Small pause to prevent busy waiting
    // (in browser, you might use setTimeout)
  }
}`,
        explanation: "Always include safety mechanisms to prevent infinite loops in production code.",
      },
      {
        title: "Manual Break Condition",
        code: `let attempts = 0;
let success = false;

while (!success && attempts < 5) {
  attempts++;
  console.log(\`Attempt \${attempts}\`);

  // Simulate operation that might succeed
  if (Math.random() > 0.7) { // 30% chance
    success = true;
    console.log("Operation succeeded!");
  }
}

if (!success) {
  console.log("Operation failed after 5 attempts");
}`,
        explanation: "Use multiple conditions to control loop termination safely.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "while loops require careful condition management to avoid infinite loops and ensure correct behavior.",
    ],
    bullets: [
      "Always ensure the condition will eventually become false",
      "Update loop variables inside the loop body",
      "Consider maximum iteration limits for safety",
      "Use meaningful variable names for conditions",
      "Prefer for loops when you know the number of iterations",
      "Add comments explaining the exit conditions",
    ],
    examples: [
      {
        title: "Clear Exit Strategy",
        code: `// Good: Clear exit conditions
let balance = 1000;
let withdrawalAmount = 100;

while (balance >= withdrawalAmount && withdrawalAmount > 0) {
  balance -= withdrawalAmount;
  console.log(\`Withdrew \${withdrawalAmount}, balance: \${balance}\`);

  // Update condition variable
  withdrawalAmount = getNextWithdrawalAmount();
}

// Bad: Unclear when loop ends
while (true) { // Infinite loop risk!
  // ... some code
  if (someCondition) break; // Hidden exit
}`,
        explanation: "Make loop exit conditions clear and explicit rather than hidden in the body.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Infinite loops",
    fix: "Ensure the condition will eventually become false by updating variables in the loop body.",
  },
  {
    title: "Forgetting to update condition variables",
    fix: "Always modify the variables that affect the condition inside the loop.",
  },
  {
    title: "Using while for known iterations",
    fix: "Use for loops when you know exactly how many times to iterate.",
  },
];

const faqs = [
  {
    q: "When should I use while instead of for?",
    a: "Use while when you don't know how many iterations you'll need, or when the condition is complex and doesn't fit the for loop structure.",
  },
  {
    q: "How do I prevent infinite loops?",
    a: "Ensure your condition will eventually become false, add timeout checks, and include maximum iteration limits.",
  },
  {
    q: "What's the difference between while and do...while?",
    a: "while checks the condition before executing, do...while executes once before checking the condition.",
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

export default function JavascriptWhileLoopPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript while Loop</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn condition-based iteration with while loops. Master indefinite loops and dynamic condition checking in JavaScript.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try while Loops
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          while loops handle situations where you don't know how many iterations you'll need. They're essential for user input validation, game loops, and processing data streams of unknown length.
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
              { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
              { label: "break Statement", href: "/javascript/loops/break-statement" },
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