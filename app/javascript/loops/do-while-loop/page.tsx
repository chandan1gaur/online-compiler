import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript do...while Loop - Guaranteed Execution",
  description: "Learn JavaScript do...while loop with examples. Master loops that execute at least once before checking conditions.",
  keywords: [
    "javascript do while loop",
    "do while loop javascript",
    "guaranteed execution loop",
    "javascript loops",
    "post condition loop",
  ],
  openGraph: {
    title: "JavaScript do...while Loop - Guaranteed Execution",
    description: "Learn JavaScript do...while loop with examples. Master loops that execute at least once.",
    url: "/javascript/loops/do-while-loop",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript do...while Loop",
    description: "Learn JavaScript do...while loop with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/loops/do-while-loop" },
};

const sections = [
  {
    heading: "What is a do...while Loop?",
    paragraphs: [
      "The do...while loop is similar to while loop, but with one crucial difference: it executes the code block first, then checks the condition.",
      "This guarantees that the loop body will execute at least once, even if the condition is initially false.",
    ],
    examples: [
      {
        title: "Basic do...while Loop",
        code: `let count = 0;

do {
  console.log("Count:", count);
  count++;
} while (count < 5);

// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4`,
        explanation: "The loop executes once before checking the condition, ensuring at least one iteration.",
      },
    ],
  },
  {
    heading: "do...while vs while Loop",
    paragraphs: [
      "The key difference is when the condition is evaluated. do...while guarantees execution, while while might execute zero times.",
    ],
    examples: [
      {
        title: "Comparison: while vs do...while",
        code: `let x = 10;

// while: might not execute
while (x < 10) {
  console.log("while: This won't print");
}

// do...while: executes at least once
do {
  console.log("do...while: This prints once");
} while (x < 10);`,
        explanation: "do...while executes the body first, then checks the condition.",
      },
    ],
  },
  {
    heading: "Common Use Cases",
    paragraphs: [
      "do...while loops are perfect for scenarios where you need to perform an action before checking if it should continue.",
    ],
    examples: [
      {
        title: "Menu System",
        code: `let choice;

do {
  console.log("Menu:");
  console.log("1. Play Game");
  console.log("2. View Scores");
  console.log("3. Exit");

  choice = getUserChoice(); // Get user input

  switch (choice) {
    case 1:
      startGame();
      break;
    case 2:
      showScores();
      break;
    case 3:
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice");
  }
} while (choice !== 3);`,
        explanation: "Display menu at least once, then continue based on user choice.",
      },
      {
        title: "Input Validation",
        code: `let userInput;

do {
  userInput = prompt("Enter a number between 1-10:");

  if (isNaN(userInput)) {
    console.log("That's not a number!");
  } else if (userInput < 1 || userInput > 10) {
    console.log("Number must be between 1 and 10!");
    userInput = null; // Reset to continue loop
  }
} while (!userInput);

console.log("Valid input:", userInput);`,
        explanation: "Always prompt for input at least once, then validate and repeat if necessary.",
      },
      {
        title: "Game Loop",
        code: `let gameState = {
  running: true,
  level: 1,
  score: 0
};

do {
  // Render game
  renderGame(gameState);

  // Process user input
  let action = getUserInput();

  // Update game state
  if (action === "quit") {
    gameState.running = false;
  } else {
    updateGameState(gameState, action);
  }

  // Check win/lose conditions
  if (gameState.score >= 100) {
    console.log("You win!");
    gameState.running = false;
  }

} while (gameState.running);

console.log("Game over!");`,
        explanation: "Game renders and processes input at least once before checking if it should continue.",
      },
    ],
  },
  {
    heading: "Syntax and Structure",
    paragraphs: [
      "The do...while loop has a distinct structure where the condition comes after the code block.",
    ],
    examples: [
      {
        title: "do...while Structure",
        code: `do {
  // code to execute
  // this runs at least once
} while (condition); // condition checked after execution`,
        explanation: "The semicolon after the while condition is required and easy to forget.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use do...while when you need guaranteed execution. Otherwise, prefer while or for loops.",
    ],
    bullets: [
      "Use when you need at least one execution",
      "Perfect for menu systems and input validation",
      "Remember the semicolon after while condition",
      "Keep loop body focused and readable",
      "Ensure condition will eventually become false",
      "Consider while loops for most other cases",
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting the semicolon",
    fix: "Always include the semicolon after the while(condition) statement.",
  },
  {
    title: "Using do...while unnecessarily",
    fix: "Use do...while only when you need guaranteed execution. Prefer while for most cases.",
  },
  {
    title: "Infinite loops",
    fix: "Ensure the condition will eventually become false.",
  },
];

const faqs = [
  {
    q: "When should I use do...while instead of while?",
    a: "Use do...while when you need the code to execute at least once, regardless of the initial condition.",
  },
  {
    q: "Why is there a semicolon after do...while?",
    a: "The semicolon is required syntax. It's easy to forget since most JavaScript statements don't need semicolons there.",
  },
  {
    q: "Can do...while loops be nested?",
    a: "Yes, like any other loop construct, do...while can be nested inside other loops or contain nested loops.",
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

export default function JavascriptDoWhileLoopPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript do...while Loop</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn do...while loops that guarantee at least one execution. Master post-condition loops in JavaScript.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try do...while
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          do...while loops ensure your code runs at least once, making them perfect for menus, input validation, and initialization routines that need guaranteed execution.
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