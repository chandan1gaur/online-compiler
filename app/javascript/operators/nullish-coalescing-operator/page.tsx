import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Nullish Coalescing Operator (??) Guide",
  description:
    "Learn the JavaScript nullish coalescing operator (??) with syntax, examples, comparisons with ||, and common mistakes.",
  keywords: [
    "javascript nullish coalescing",
    "?? operator",
    "nullish",
    "default values",
  ],
  openGraph: {
    title: "JavaScript Nullish Coalescing Operator",
    description:
      "Learn the JavaScript nullish coalescing operator (??) with syntax, examples, comparisons with ||, and common mistakes.",
    url: "/javascript/operators/nullish-coalescing-operator",
    type: "article",
    images: ["/og-operators-nullish.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Nullish Coalescing Operator",
    description:
      "Learn the JavaScript nullish coalescing operator (??) with syntax, examples, comparisons with ||, and common mistakes.",
    images: ["/og-operators-nullish.svg"],
  },
  alternates: { canonical: "/javascript/operators/nullish-coalescing-operator" },
};

const sections = [
  {
    heading: "Safe Defaults",
    paragraphs: [
      "Nullish coalescing returns the right-hand value only when the left side is `null` or `undefined`.",
      "This makes it perfect for defaults where 0, false, or empty strings are valid inputs.",
    ],
  },
  {
    heading: "Difference from ||",
    paragraphs: [
      "Logical OR treats many values as falsy, including 0 and \"\". That can overwrite real data.",
      "`??` only handles nullish values, so it is safer for numeric or boolean inputs.",
    ],
  },
  {
    heading: "Config and API Data",
    paragraphs: [
      "Use `??` when you read from APIs or config files that may omit fields.",
      "It keeps your code robust without hiding valid falsy values.",
    ],
  },
  {
    heading: "Combine with Optional Chaining",
    paragraphs: [
      "`?.` and `??` pair well: safely access deep data and provide a fallback in one expression.",
      "This reduces verbose null checks and keeps code readable.",
    ],
  },
];

const examples = [
  {
    title: "Basic Default",
    code: `const name = null;\nconst label = name ?? "Guest";\n\nconsole.log(label); // "Guest"`,
    explanation: "Nullish coalescing provides defaults only for null or undefined.",
  },
  {
    title: "Preserve Falsy Values",
    code: `const count = 0;\nconsole.log(count || 10); // 10\nconsole.log(count ?? 10); // 0`,
    explanation: "Use ?? to keep 0, false, and empty strings intact.",
  },
  {
    title: "API Response",
    code: `const response = { retries: 0 };\nconst retries = response.retries ?? 3;\n\nconsole.log(retries); // 0`,
    explanation: "Avoid overwriting meaningful falsy values from APIs.",
  },
  {
    title: "Optional Chaining Combo",
    code: `const user = {};\nconst city = user.profile?.city ?? "Unknown";\n\nconsole.log(city);`,
    explanation: "Combine optional chaining with ?? for safe access and defaults.",
  },
];

const mistakes = [
  { title: "Using || when 0 is valid", fix: "Switch to ?? for numeric or boolean defaults." },
  { title: "Assuming ?? works for all falsy values", fix: "It only checks null and undefined." },
  { title: "Overusing fallbacks", fix: "Only apply defaults when a missing value is actually expected." },
  { title: "Mixing ?? with || without parentheses", fix: "Wrap expressions to avoid precedence confusion." },
];

const faqs = [
  {
    q: "What does ?? do?",
    a: "It returns the right-hand value only when the left-hand value is null or undefined.",
  },
  {
    q: "How is ?? different from ||?",
    a: "|| treats 0, false, and \"\" as false and will replace them. ?? will not.",
  },
  {
    q: "Can I combine ?? with && or ||?",
    a: "Yes, but use parentheses because ?? has its own precedence rules.",
  },
  {
    q: "Is ?? supported in modern browsers?",
    a: "Yes, it is supported in modern environments and can be transpiled for older ones.",
  },
];

const related = [
  { label: "Optional Chaining", href: "/javascript/operators/optional-chaining-operator" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Assignment Operators", href: "/javascript/operators/assignment-operator" },
  { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
];

export default function JavascriptNullishCoalescingPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Nullish Coalescing Operator (??)"
      intro={[
        "The nullish coalescing operator (??) provides safe defaults without overwriting valid falsy values like 0 or \"\".",
        "It is perfect when data might be missing but falsy values still carry meaning.",
      ]}
      why={[
        "Using `||` for defaults can accidentally replace legitimate values. That leads to subtle bugs in UI and data logic.",
        "`??` solves this by defaulting only when the value is truly missing.",
      ]}
      syntax={["value ?? fallback"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const count = 0;\nconst display = count || 10; // 10 (wrong for zero)`,
        with: `const count = 0;\nconst display = count ?? 10; // 0 (correct)`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "When should you use ?? instead of ||?", a: "Use ?? when 0, false, or \"\" are valid values that should be kept." },
        { q: "What does ?? check for?", a: "Only null and undefined." },
        { q: "Can ?? be combined with optional chaining?", a: "Yes. `user?.name ?? \"Guest\"` is a common pattern." },
      ]}
      practice={{
        prompt: "Practice: Read a config value and default to 3000 only if it is null or undefined.",
        starterCode: `const config = { port: 0 };\n// TODO: use ?? to keep 0 if provided\n`,
        solution: `const config = { port: 0 };\nconst port = config.port ?? 3000;\nconsole.log(port);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[1].code,
        label: "Run ?? Demo",
        description: "Try the ?? examples and compare them with || to see the difference.",
      }}
    />
  );
}
