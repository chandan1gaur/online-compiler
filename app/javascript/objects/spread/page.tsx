import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Spread in Objects",
  description: "Learn how to use the spread operator with objects for copying and merging.",
  keywords: ["object spread", "javascript objects", "spread operator"],
  openGraph: {
    title: "JavaScript Spread in Objects",
    description: "Learn how to use the spread operator with objects for copying and merging.",
    url: "/javascript/objects/spread",
    type: "article",
    images: ["/og-object-spread.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Spread in Objects",
    description: "Learn how to use the spread operator with objects for copying and merging.",
    images: ["/og-object-spread.svg"],
  },
  alternates: { canonical: "/javascript/objects/spread" },
};

const sections = [
  {
    heading: "Copy Objects",
    paragraphs: [
      "Spread creates a shallow copy of an object.",
      "It is a clean way to clone without mutation.",
    ],
  },
  {
    heading: "Merge Objects",
    paragraphs: [
      "Use spread to merge multiple objects into one.",
      "Later properties overwrite earlier ones.",
    ],
  },
  {
    heading: "Nested Objects",
    paragraphs: [
      "Spread is shallow, so nested objects are still shared.",
      "Use deep clone methods when necessary.",
    ],
  },
];

const examples = [
  {
    title: "Clone",
    code: `const user = { name: "Ava" };\nconst copy = { ...user };\n\nconsole.log(copy);`,
    explanation: "Spread clones object properties.",
  },
  {
    title: "Merge",
    code: `const a = { name: "Ava" };\nconst b = { role: "admin" };\nconst merged = { ...a, ...b };\n\nconsole.log(merged);`,
    explanation: "Combine multiple objects.",
  },
  {
    title: "Overwrite",
    code: `const base = { role: "user" };\nconst next = { ...base, role: "admin" };\n\nconsole.log(next);`,
    explanation: "Later keys overwrite earlier ones.",
  },
  {
    title: "Shallow copy",
    code: `const user = { profile: { city: "Pune" } };\nconst copy = { ...user };\ncopy.profile.city = "Delhi";\n\nconsole.log(user.profile.city);`,
    explanation: "Nested objects are shared in shallow copies.",
  },
];

const mistakes = [
  { title: "Expecting deep copy", fix: "Spread is shallow; nested objects are shared." },
  { title: "Overwriting keys unintentionally", fix: "Be mindful of property order when merging." },
  { title: "Mutating shared nested data", fix: "Clone nested objects when you need immutability." },
];

const faqs = [
  { q: "Is spread deep?", a: "No, it creates a shallow copy." },
  { q: "How do I merge objects?", a: "Use { ...a, ...b }." },
  { q: "Does spread mutate?", a: "No, it creates a new object." },
];

const related = [
  { label: "Object.assign()", href: "/javascript/objects/assign" },
  { label: "Object Destructuring", href: "/javascript/objects/destructuring" },
  { label: "Spread in Functions", href: "/javascript/functions/spread-operator" },
];

export default function JavascriptObjectSpreadPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Spread in Objects"
      intro={[
        "The object spread operator lets you copy and merge objects quickly.",
        "It is a modern alternative to Object.assign for simple cases.",
      ]}
      why={[
        "Copying objects is common in state updates and configuration merges.",
        "Spread keeps the syntax short and readable.",
      ]}
      syntax={["const copy = { ...obj }", "const merged = { ...a, ...b }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const copy = Object.assign({}, obj);`,
        with: `const copy = { ...obj };`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Is object spread deep?", a: "No, it is shallow." },
        { q: "How do you merge two objects?", a: "Use { ...a, ...b }." },
        { q: "When should you avoid spread?", a: "When you need deep cloning or strict immutability for nested objects." },
      ]}
      practice={{
        prompt: "Practice: Merge user settings with defaults using spread.",
        starterCode: `const defaults = { theme: "light", layout: "grid" };\nconst user = { layout: "list" };\n// TODO: merge into new object\n`,
        solution: `const defaults = { theme: "light", layout: "grid" };\nconst user = { layout: "list" };\nconst merged = { ...defaults, ...user };\nconsole.log(merged);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Spread Demo",
        description: "Try merging objects with overlapping keys.",
      }}
    />
  );
}
