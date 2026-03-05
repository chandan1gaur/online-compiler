import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript else if Ladder - Multiple Conditional Branches",
  description: "Learn JavaScript else if ladder with examples. Master multiple conditional branches for complex decision-making logic.",
  keywords: [
    "javascript else if",
    "else if ladder javascript",
    "multiple conditions javascript",
    "conditional statements",
    "javascript control flow",
  ],
  openGraph: {
    title: "JavaScript else if Ladder - Multiple Conditional Branches",
    description: "Learn JavaScript else if ladder with examples. Master multiple conditional branches for complex decision-making.",
    url: "/javascript/conditionals/else-if-ladder",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript else if Ladder",
    description: "Learn JavaScript else if ladder with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/else-if-ladder" },
};

const sections = [
  {
    heading: "What is an else if Ladder?",
    paragraphs: [
      "The else if ladder allows you to test multiple conditions in sequence. Each condition is checked only if all previous conditions were false.",
      "This is perfect for scenarios where you have more than two possible outcomes or need to categorize values into ranges.",
    ],
    examples: [
      {
        title: "Basic else if Ladder",
        code: `let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}`,
// Output: "Grade: B"`,
        explanation: "The conditions are checked from top to bottom. Only the first true condition executes.",
      },
    ],
  },
  {
    heading: "else if Ladder Syntax",
    paragraphs: [
      "You can chain multiple else if statements together. The final else block is optional and handles any remaining cases.",
      "Each condition is evaluated only if all previous conditions were false.",
    ],
    examples: [
      {
        title: "else if Ladder Structure",
        code: `if (condition1) {
  // executes if condition1 is true
} else if (condition2) {
  // executes if condition1 is false AND condition2 is true
} else if (condition3) {
  // executes if condition1 and condition2 are false AND condition3 is true
} else {
  // executes if all conditions above are false
}`,
        explanation: "The structure allows for multiple mutually exclusive code paths.",
      },
    ],
  },
  {
    heading: "Real-World Examples",
    paragraphs: [
      "else if ladders are commonly used for categorization, grading systems, and multi-level decision making.",
    ],
    examples: [
      {
        title: "Temperature Classification",
        code: `function getTemperatureCategory(temp) {
  if (temp < 0) {
    return "Freezing";
  } else if (temp < 10) {
    return "Very Cold";
  } else if (temp < 20) {
    return "Cold";
  } else if (temp < 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}

console.log(getTemperatureCategory(25)); // "Warm"
console.log(getTemperatureCategory(-5)); // "Freezing"`,
        explanation: "Categorize continuous values into discrete ranges.",
      },
      {
        title: "User Role Permissions",
        code: `function getUserPermissions(user) {
  if (user.role === 'admin') {
    return ['read', 'write', 'delete', 'manage_users'];
  } else if (user.role === 'moderator') {
    return ['read', 'write', 'delete'];
  } else if (user.role === 'editor') {
    return ['read', 'write'];
  } else if (user.role === 'viewer') {
    return ['read'];
  } else {
    return []; // guest user
  }
}

let user = { role: 'editor' };
console.log(getUserPermissions(user)); // ['read', 'write']`,
        explanation: "Different user roles get different permission levels.",
      },
      {
        title: "Age Group Classification",
        code: `function getAgeGroup(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 20) {
    return "Teenager";
  } else if (age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

console.log(getAgeGroup(25)); // "Adult"
console.log(getAgeGroup(70)); // "Senior"`,
        explanation: "Classify people into age groups based on their age.",
      },
    ],
  },
  {
    heading: "Order Matters",
    paragraphs: [
      "The order of conditions is crucial. More specific conditions should come before general ones.",
      "Wrong ordering can lead to unexpected behavior where the wrong branch executes.",
    ],
    examples: [
      {
        title: "Correct vs Incorrect Ordering",
        code: `let num = 15;

// Correct ordering (specific to general)
if (num === 15) {
  console.log("Exactly 15");
} else if (num > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}
// Output: "Exactly 15"

// Incorrect ordering (general before specific)
if (num > 10) {
  console.log("Greater than 10");
} else if (num === 15) {
  console.log("Exactly 15"); // This never executes!
} else {
  console.log("10 or less");
}
// Output: "Greater than 10"`,
        explanation: "Always put more specific conditions before general ones to avoid shadowing.",
      },
    ],
  },
  {
    heading: "When to Use else if vs switch",
    paragraphs: [
      "Both else if ladders and switch statements handle multiple conditions, but they serve different purposes.",
    ],
    bullets: [
      "Use else if for ranges, complex conditions, or different types of comparisons",
      "Use switch for exact value matching against a single variable",
      "else if is more flexible but switch can be more readable for many exact matches",
    ],
    examples: [
      {
        title: "else if for Ranges",
        code: `// Better with else if
let score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
// Ranges work naturally`,
        explanation: "else if handles ranges and complex conditions better than switch.",
      },
      {
        title: "switch for Exact Values",
        code: `// Better with switch
let day = "Monday";
switch (day) {
  case "Monday": console.log("Start of work week"); break;
  case "Friday": console.log("TGIF!"); break;
  case "Saturday":
  case "Sunday": console.log("Weekend!"); break;
}
// Exact value matching`,
        explanation: "switch is cleaner for exact value comparisons.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Well-structured else if ladders make your code more maintainable and easier to understand.",
    ],
    bullets: [
      "Order conditions from most specific to most general",
      "Keep each condition simple and readable",
      "Consider extracting complex conditions to variables",
      "Use early returns when possible",
      "Add comments for complex business logic",
      "Consider switch statement for many exact value matches",
    ],
    examples: [
      {
        title: "Extract Complex Conditions",
        code: `// Instead of complex inline conditions:
if (user.age >= 18 && user.country === 'US' && user.hasLicense) {
  // ...
}

// Extract to variables for clarity:
let isAdult = user.age >= 18;
let isInUS = user.country === 'US';
let hasLicense = user.hasLicense;

if (isAdult && isInUS && hasLicense) {
  // Much more readable
}`,
        explanation: "Extract complex conditions to descriptive variables for better readability.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Wrong condition ordering",
    fix: "Put more specific conditions before general ones to avoid unexpected behavior.",
  },
  {
    title: "Using else if when conditions overlap",
    fix: "Use separate if statements if multiple conditions could be true simultaneously.",
  },
  {
    title: "Too many else if branches",
    fix: "Consider switch statement, object lookup, or strategy pattern for many conditions.",
  },
];

const faqs = [
  {
    q: "How many else if statements can I chain?",
    a: "There's no technical limit, but consider readability. More than 5-7 might indicate a better approach.",
  },
  {
    q: "Can I use return statements in else if ladders?",
    a: "Yes, and it's often better than continuing execution. Early returns improve readability.",
  },
  {
    q: "What's the difference between else if and multiple if statements?",
    a: "else if creates mutually exclusive branches, while multiple if statements allow all true conditions to execute.",
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

export default function JavascriptElseIfLadderPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript else if Ladder</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master multiple conditional branches with else if ladders. Learn how to handle complex decision-making scenarios in JavaScript.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try else if Ladder
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Real applications often need to categorize data or make decisions based on multiple ranges or criteria. else if ladders provide the flexibility to handle these complex scenarios.
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
              { label: "switch Statement", href: "/javascript/conditionals/switch-statement" },
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