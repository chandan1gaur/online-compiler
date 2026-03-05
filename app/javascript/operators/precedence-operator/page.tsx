import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Operator Precedence: Order of Operations - Complete Guide",
  description:
    "Master JavaScript operator precedence and associativity. Learn the order of operations, how operators are grouped, and how to use parentheses to control evaluation order.",
  keywords: [
    "javascript operator precedence",
    "order of operations",
    "operator associativity",
    "expression evaluation",
    "parentheses operator",
  ],
  openGraph: {
    title: "JavaScript Operator Precedence",
    description:
      "Master operator precedence and associativity to write predictable JavaScript expressions.",
    url: "/javascript/operators/precedence-operator",
    type: "article",
    images: ["/og-operators-precedence.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Operator Precedence",
    description:
      "Master operator precedence and associativity to write predictable JavaScript expressions.",
    images: ["/og-operators-precedence.svg"],
  },
  alternates: { canonical: "/javascript/operators/precedence-operator" },
};

const sections = [
  {
    heading: "Operator Precedence Fundamentals",
    paragraphs: [
      "Operator precedence determines which operators are evaluated first in expressions.",
      "Higher precedence operators execute before lower precedence ones.",
      "Without explicit precedence rules, expressions would be ambiguous.",
      "JavaScript follows a well-defined precedence hierarchy.",
      "Understanding precedence prevents bugs from unexpected evaluation order.",
    ],
    examples: [
      {
        title: "Operator Precedence Examples",
        code: `// Multiplication has higher precedence than addition
console.log(2 + 3 * 4);      // 14 (not 20)
console.log((2 + 3) * 4);    // 20 (parentheses override)

// Exponentiation before multiplication
console.log(2 * 3 ** 2);     // 18 (3^2=9, then 2*9)
console.log((2 * 3) ** 2);   // 36 (6^2)

// Comparison before logical AND
console.log(5 > 3 && 2 < 4); // true
console.log(5 > 3 && 2 > 4); // false

// Assignment last (lowest precedence)
let x = 5 + 3;
let y = x * 2;
console.log(x, y); // 8, 16

// Chained comparisons need careful precedence
console.log(3 < 5 < 7);      // true (but not what you might think)
// Evaluates as: (3 < 5) < 7 -> true < 7 -> 1 < 7 -> true`,
        explanation: "Higher precedence operators execute first, but parentheses can override precedence.",
      },
    ],
  },
  {
    heading: "Precedence Level Hierarchy",
    paragraphs: [
      "Highest to lowest: Member access → Exponentiation → Multiply/Divide → Add/Subtract → Comparison → Logical",
      "Member access (.), indexing ([]), and calls have highest precedence.",
      "Exponentiation (**) higher than arithmetic operators.",
      "Arithmetic operators: *, /, % before +, -.",
      "Comparison operators: <, >, <=, >=, ==, ===, !==, !=.",
      "Logical: ! (NOT) before && (AND) before || (OR).",
      "Assignment operators have lowest precedence.",
    ],
  },
  {
    heading: "Associativity: Left vs Right",
    paragraphs: [
      "Associativity determines evaluation order when operators have same precedence.",
      "Left-associative: evaluates left to right (most operators).",
      "Right-associative: evaluates right to left (assignment, exponentiation, NOT).",
      "Critical for chains of same-precedence operators.",
      "Unexpected associativity causes subtle bugs.",
    ],
    examples: [
      {
        title: "Associativity Examples",
        code: `// Left-associative (most operators)
console.log(10 - 5 - 2);     // 3 (not 7)
// Evaluates as: (10 - 5) - 2 = 5 - 2 = 3

console.log(20 / 4 / 2);     // 2.5 (not 10)
// Evaluates as: (20 / 4) / 2 = 5 / 2 = 2.5

// Right-associative: Assignment
let a, b, c;
a = b = c = 5;
console.log(a, b, c);        // 5, 5, 5

// Right-associative: Exponentiation
console.log(2 ** 3 ** 2);    // 512 (not 64)
// Evaluates as: 2 ** (3 ** 2) = 2 ** 9 = 512
console.log((2 ** 3) ** 2);  // 64`,
        explanation: "Associativity determines evaluation direction for same-precedence operators.",
      },
    ],
  },
  {
    heading: "Using Parentheses to Override Precedence",
    paragraphs: [
      "Parentheses have highest precedence and force specific evaluation order.",
      "Always use parentheses for clarity even when not required.",
      "Prevents colleague confusion and future maintenance issues.",
      "Makes expressions more readable and predictable.",
      "Essential defensive programming practice.",
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting multiplication/division precedence",
    fix: "Remember * and / have same precedence and evaluate left-to-right, before + and -.",
  },
  {
    title: "Confusing && and || precedence",
    fix: "AND (&&) has higher precedence than OR (||). Use parentheses to clarify.",
  },
  {
    title: "Relying on exponentiation left-associativity",
    fix: "Exponentiation is RIGHT-associative: 2**3**2 = 2**(3**2) = 512, not 64.",
  },
  {
    title: "Not using parentheses in complex expressions",
    fix: "Always use parentheses for clarity. Code is read more than written.",
  },
  {
    title: "Assuming all operators are left-associative",
    fix: "Assignment, exponentiation, and NOT are right-associative.",
  },
];

const faqs = [
  {
    q: "What has highest precedence in JavaScript?",
    a: "Member access (.), array indexing ([]), and function calls () have the highest precedence.",
  },
  {
    q: "Why does 2 + 3 * 4 equal 14 and not 20?",
    a: "Multiplication has higher precedence than addition, so 3 * 4 is evaluated first, then 2 + 12 = 14.",
  },
  {
    q: "What's the difference between left and right associativity?",
    a: "Left-associative operators evaluate left-to-right (10 - 5 - 2 = 3). Right-associative evaluate right-to-left (2 ** 3 ** 2 = 512).",
  },
  {
    q: "Is AND (&&) higher precedence than OR (||)?",
    a: "Yes, AND has higher precedence. true || false && false evaluates as true || (false && false).",
  },
  {
    q: "Why does 2 ** 3 ** 2 equal 512?",
    a: "Exponentiation is right-associative, so it evaluates as 2 ** (3 ** 2) = 2 ** 9 = 512.",
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

export default function PrecedencePage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Operator Precedence: Order of Operations
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Operator precedence determines the order in which operators are evaluated in expressions. Understanding precedence and associativity is essential for writing predictable code and understanding JavaScript behavior.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Operator precedence affects how expressions are evaluated. Without understanding it, you might assume 2 + 3 * 4 equals 20 when it actually equals 14. Using parentheses explicitly prevents confusion and makes code more maintainable.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Pitfalls</h2>
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
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
