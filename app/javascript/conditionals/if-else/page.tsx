import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript if...else Statement - Conditional Logic",
  description: "Learn JavaScript if...else statements with examples. Master conditional logic with alternative code paths for different conditions.",
  keywords: [
    "javascript if else",
    "if else statement javascript",
    "conditional statements",
    "javascript control flow",
    "decision making javascript",
  ],
  openGraph: {
    title: "JavaScript if...else Statement - Conditional Logic",
    description: "Learn JavaScript if...else statements with examples. Master conditional logic with alternative code paths.",
    url: "/javascript/conditionals/if-else",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript if...else Statement",
    description: "Learn JavaScript if...else statements with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/if-else" },
};

const sections = [
  {
    heading: "What is an if...else Statement?",
    paragraphs: [
      "The if...else statement extends the basic if statement by providing an alternative code path to execute when the condition is false.",
      "This allows you to handle both possible outcomes of a condition, making your code more robust and complete.",
    ],
    examples: [
      {
        title: "Basic if...else Statement",
        code: `let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are not old enough to vote.");
}`,
        explanation: "If the condition is true, the first block executes. If false, the else block executes.",
      },
    ],
  },
  {
    heading: "if...else Syntax",
    paragraphs: [
      "The syntax combines the if statement with an else clause. Only one of the two code blocks will execute.",
      "This is perfect for binary decisions where you have exactly two possible outcomes.",
    ],
    examples: [
      {
        title: "if...else Structure",
        code: `if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}`,
        explanation: "The else block executes only when the if condition evaluates to false.",
      },
    ],
  },
  {
    heading: "Real-World Examples",
    paragraphs: [
      "if...else statements are commonly used for validation, authentication, and decision-making scenarios.",
    ],
    examples: [
      {
        title: "User Authentication",
        code: `function checkAccess(user) {
  if (user.isLoggedIn && user.role === 'admin') {
    return "Access granted to admin panel";
  } else {
    return "Access denied";
  }
}

let currentUser = { isLoggedIn: false, role: 'user' };
console.log(checkAccess(currentUser)); // "Access denied"`,
        explanation: "Check user permissions and provide appropriate access control.",
      },
      {
        title: "Form Validation",
        code: `function validatePassword(password) {
  if (password.length >= 8) {
    return "Password is strong";
  } else {
    return "Password must be at least 8 characters";
  }
}

console.log(validatePassword("pass123"));     // "Password must be at least 8 characters"
console.log(validatePassword("password123")); // "Password is strong"`,
        explanation: "Validate input and provide feedback based on the validation result.",
      },
      {
        title: "Even/Odd Number Check",
        code: `function checkNumber(num) {
  if (num % 2 === 0) {
    return num + " is even";
  } else {
    return num + " is odd";
  }
}

console.log(checkNumber(4)); // "4 is even"
console.log(checkNumber(7)); // "7 is odd"`,
        explanation: "Simple mathematical decision based on number properties.",
      },
    ],
  },
  {
    heading: "Comparison with if Statement Alone",
    paragraphs: [
      "While if statements handle one case, if...else handles both possible outcomes explicitly.",
      "This makes your code more predictable and easier to understand.",
    ],
    examples: [
      {
        title: "if vs if...else",
        code: `// Using only if (incomplete logic)
let temperature = 15;
if (temperature > 20) {
  console.log("It's warm outside");
}
// What happens when temperature <= 20? Nothing!

// Using if...else (complete logic)
if (temperature > 20) {
  console.log("It's warm outside");
} else {
  console.log("It's cool outside");
}`,
        explanation: "if...else ensures you handle both possible outcomes of the condition.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use if...else when you have exactly two mutually exclusive outcomes to handle.",
    ],
    bullets: [
      "Keep both code blocks simple and focused",
      "Use early returns when possible to avoid else blocks",
      "Consider ternary operator for simple assignments",
      "Add comments for complex business logic",
      "Test both true and false conditions",
    ],
    examples: [
      {
        title: "Ternary Operator Alternative",
        code: `// Instead of:
let message;
if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

// You can use:
let message = age >= 18 ? "Adult" : "Minor";`,
        explanation: "For simple assignments, the ternary operator provides a more concise alternative.",
      },
      {
        title: "Early Return Pattern",
        code: `function getUserStatus(user) {
  if (!user) {
    return "User not found";
  }

  // No else needed - function already returned
  return user.isActive ? "Active" : "Inactive";
}`,
        explanation: "Early returns can eliminate the need for else blocks entirely.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting the else block",
    fix: "Ensure you handle both true and false cases, or use early returns.",
  },
  {
    title: "Deep nesting of if...else",
    fix: "Consider else if chains or switch statements for multiple conditions.",
  },
  {
    title: "Using else when conditions aren't mutually exclusive",
    fix: "Use separate if statements if both conditions could be true.",
  },
];

const faqs = [
  {
    q: "When should I use if...else vs just if?",
    a: "Use if...else when you need to handle both possible outcomes. Use just if when you only care about one case.",
  },
  {
    q: "Can I have multiple statements in else block?",
    a: "Yes, you can have as many statements as needed in both if and else blocks.",
  },
  {
    q: "What's the difference between else if and multiple if statements?",
    a: "else if creates mutually exclusive conditions, while multiple if statements can all execute if conditions overlap.",
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

export default function JavascriptIfElsePage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript if...else Statement</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn how to handle both true and false conditions with if...else statements. Master binary decision-making in JavaScript.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try if...else
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Real-world applications rarely have simple yes/no decisions. if...else statements allow you to handle both outcomes gracefully.
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
              { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
              { label: "switch Statement", href: "/javascript/conditionals/switch-statement" },
              { label: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
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