import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Optional Chaining Operator (?.) - Safe Property Access",
  description:
    "Master the optional chaining operator (?.) in JavaScript. Learn safe property access, method calls, array access, and shortcut evaluation with practical examples.",
  keywords: [
    "javascript optional chaining",
    "safe property access",
    "optional chaining operator",
    "?. operator",
    "undefined handling",
    "method calls",
    "array access",
  ],
  openGraph: {
    title: "JavaScript Optional Chaining Operator",
    description:
      "Master the optional chaining operator (?.) for safe nested property access, method calls, and array indexing.",
    url: "/javascript/operators/optional-chaining-operator",
    type: "article",
    images: ["/og-operators-optional.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Optional Chaining Operator",
    description:
      "Master the optional chaining operator (?.) for safe nested property access, method calls, and array indexing.",
    images: ["/og-operators-optional.svg"],
  },
  alternates: { canonical: "/javascript/operators/optional-chaining-operator" },
};

const sections = [
  {
    heading: "Optional Chaining Operator (?.)",
    paragraphs: [
      "The optional chaining operator (?.) safely accesses nested properties even if an intermediate value is null/undefined.",
      "Returns undefined immediately if any intermediate value is nullish, preventing errors.",
      "Combines with property access, method calls, and array indexing.",
      "Introduced in ES2020, browser support is widespread but may need transpilation.",
      "Essential for defensive programming when structure of nested objects is uncertain.",
    ],
    examples: [
      {
        title: "Optional Chaining Operator",
        code: `// Without optional chaining - throws error if intermediate is null/undefined
const user = null;
// const name = user.profile.name; // TypeError: Cannot read property 'profile' of null

// With optional chaining - returns undefined safely
const name = user?.profile?.name;
console.log(name); // undefined

// With actual data
const user2 = {
  profile: {
    name: "Alice",
    settings: {
      theme: "dark"
    }
  }
};

const theme = user2?.profile?.settings?.theme;
console.log(theme); // "dark"

// Intermediate null/undefined - stops and returns undefined
const user3 = {
  profile: null
};

const email = user3?.profile?.email; // Returns undefined, doesn't error
console.log(email); // undefined`,
        explanation: "Optional chaining prevents errors by returning undefined if any intermediate property is null/undefined.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Mixing optional chaining with required property access",
    fix: "Don't use ?. when you know the property must exist. Use . and let errors surface.",
  },
  {
    title: "Not combining with nullish coalescing",
    fix: "Use obj?.prop ?? defaultValue to provide defaults when optional chaining returns undefined.",
  },
  {
    title: "Using optional chaining for validation",
    fix: "Optional chaining returns undefined silently. Use explicit checks for validation logic.",
  },
];

const faqs = [
  {
    q: "What does optional chaining return?",
    a: "Returns undefined if any part of the chain is null/undefined, otherwise returns the final value.",
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

export default function OptionalChainingPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Optional Chaining Operator (?.): Safe Property Access
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          The optional chaining operator (?.) safely accesses nested properties, methods, and array elements even when
          intermediate values are null or undefined.
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
          Optional chaining is essential for modern JavaScript development, especially when working with APIs and uncertain data structures.
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
