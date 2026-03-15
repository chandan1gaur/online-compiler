import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Optional Chaining (?.) Guide",
  description:
    "Learn JavaScript optional chaining (?.) with syntax, examples, safe property access, and best practices.",
  keywords: [
    "javascript optional chaining",
    "optional chaining operator",
    "?. operator",
    "safe property access",
  ],
  openGraph: {
    title: "JavaScript Optional Chaining (?.)",
    description:
      "Learn JavaScript optional chaining (?.) with syntax, examples, safe property access, and best practices.",
    url: "/javascript/operators/optional-chaining-operator",
    type: "article",
    images: ["/og-operators-optional.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Optional Chaining (?.)",
    description:
      "Learn JavaScript optional chaining (?.) with syntax, examples, safe property access, and best practices.",
    images: ["/og-operators-optional.svg"],
  },
  alternates: { canonical: "/javascript/operators/optional-chaining-operator" },
};

const sections = [
  {
    heading: "Safe Property Access",
    paragraphs: [
      "Optional chaining prevents errors when accessing nested data that may be missing.",
      "Instead of throwing a TypeError, it returns undefined and lets your code continue safely.",
    ],
  },
  {
    heading: "Functions and Arrays",
    paragraphs: [
      "Optional chaining works with function calls and array access too, not just objects.",
      "This is useful for optional callbacks and safely reading list items.",
    ],
  },
  {
    heading: "Pairing with ??",
    paragraphs: [
      "Combine optional chaining with nullish coalescing for resilient defaults: `user?.name ?? \"Guest\"`.",
      "It keeps your code concise and avoids long chains of if-statements.",
    ],
  },
  {
    heading: "Avoid Overuse",
    paragraphs: [
      "Optional chaining is not a replacement for validation. If a value must exist, check it explicitly.",
      "Use it when data can legitimately be missing, such as API responses or optional config.",
    ],
  },
];

const examples = [
  {
    title: "Basic Optional Chaining",
    code: `const user = { profile: { name: "Sam" } };\n\nconsole.log(user?.profile?.name); // "Sam"\nconsole.log(user?.profile?.email); // undefined`,
    explanation: "Missing properties return undefined instead of throwing errors.",
  },
  {
    title: "Optional Method Calls",
    code: `const logger = {};\n\nlogger.log?.("hello"); // no error if log is missing`,
    explanation: "Optional chaining safely calls a method only if it exists.",
  },
  {
    title: "Optional Array Access",
    code: `const list = ["a", "b"];\n\nconsole.log(list?.[0]); // "a"\nconsole.log(list?.[5]); // undefined`,
    explanation: "Safely access array items even if the array is missing or index is out of bounds.",
  },
  {
    title: "Combine with ??",
    code: `const user = {};\nconst name = user?.profile?.name ?? "Guest";\n\nconsole.log(name);`,
    explanation: "Pair optional chaining with ?? to supply defaults when data is missing.",
  },
];

const mistakes = [
  { title: "Using it on undeclared variables", fix: "Optional chaining only works on declared variables, not missing identifiers." },
  { title: "Replacing validation with optional chaining", fix: "Validate required fields instead of silently ignoring missing values." },
  { title: "Assuming it returns null", fix: "Optional chaining returns undefined when it short-circuits." },
  { title: "Overusing in tight loops", fix: "Optional chaining is fine, but avoid unnecessary checks in hot paths." },
];

const faqs = [
  {
    q: "What does optional chaining return if it fails?",
    a: "It returns undefined instead of throwing a TypeError.",
  },
  {
    q: "Can I use optional chaining on functions?",
    a: "Yes, you can do `obj.method?.()` to call only if it exists.",
  },
  {
    q: "Does optional chaining work with arrays?",
    a: "Yes, use `arr?.[index]` to safely access elements.",
  },
  {
    q: "When should I avoid optional chaining?",
    a: "When a value is required. It can hide bugs if you should validate instead.",
  },
];

const related = [
  { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Objects", href: "/javascript/objects" },
  { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
];

export default function JavascriptOptionalChainingPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Optional Chaining (?.)"
      intro={[
        "Optional chaining (?.) lets you safely access nested properties without crashing when something is null or undefined.",
        "It is especially useful when working with API data, optional config, or dynamic objects.",
      ]}
      why={[
        "Accessing missing properties throws runtime errors, which can break apps and confuse users.",
        "Optional chaining gives you safe, readable access while keeping your code short.",
      ]}
      syntax={["object?.property", "object?.[expression]", "object?.method?.()"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let city = "";\nif (user && user.profile && user.profile.address) {\n  city = user.profile.address.city;\n}`,
        with: `const city = user?.profile?.address?.city;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What problem does optional chaining solve?", a: "It prevents TypeErrors when accessing nested data that may be null or undefined." },
        { q: "What does optional chaining return when it fails?", a: "Undefined." },
        { q: "Can optional chaining call methods?", a: "Yes, with `obj.method?.()` syntax." },
      ]}
      practice={{
        prompt: "Practice: Safely read a user's email from a nested profile object using optional chaining.",
        starterCode: `const user = { profile: {} };\n// TODO: safely get user.profile.contact.email\n`,
        solution: `const user = { profile: {} };\nconst email = user?.profile?.contact?.email;\nconsole.log(email);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Optional Chaining Demo",
        description: "Try optional chaining on different objects and see how undefined is returned safely.",
      }}
    />
  );
}
