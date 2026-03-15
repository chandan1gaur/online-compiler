import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object.assign(): Copy and Merge",
  description: "Learn Object.assign() with syntax, examples, and common pitfalls.",
  keywords: ["Object.assign", "javascript objects", "merge objects"],
  openGraph: {
    title: "JavaScript Object.assign()",
    description: "Learn Object.assign() with syntax, examples, and common pitfalls.",
    url: "/javascript/objects/assign",
    type: "article",
    images: ["/og-object-assign.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.assign()",
    description: "Learn Object.assign() with syntax, examples, and common pitfalls.",
    images: ["/og-object-assign.svg"],
  },
  alternates: { canonical: "/javascript/objects/assign" },
};

const sections = [
  {
    heading: "Shallow Copy",
    paragraphs: [
      "Object.assign copies properties from source objects into a target.",
      "It performs a shallow copy, not a deep clone.",
    ],
  },
  {
    heading: "Merge Objects",
    paragraphs: [
      "You can merge multiple sources into one target.",
      "Later sources overwrite earlier properties.",
    ],
  },
  {
    heading: "Alternatives",
    paragraphs: [
      "Spread syntax is often more readable for simple merges.",
      "Use structuredClone or libraries for deep copies.",
    ],
  },
];

const examples = [
  {
    title: "Copy object",
    code: `const user = { name: "Ava" };\nconst copy = Object.assign({}, user);\n\nconsole.log(copy);`,
    explanation: "Copy into a new object.",
  },
  {
    title: "Merge",
    code: `const a = { name: "Ava" };\nconst b = { role: "admin" };\nconst merged = Object.assign({}, a, b);\n\nconsole.log(merged);`,
    explanation: "Combine multiple sources.",
  },
  {
    title: "Overwrite",
    code: `const base = { role: "user" };\nconst next = Object.assign({}, base, { role: "admin" });\n\nconsole.log(next);`,
    explanation: "Later sources overwrite earlier ones.",
  },
  {
    title: "Shallow copy",
    code: `const user = { profile: { city: "Pune" } };\nconst copy = Object.assign({}, user);\ncopy.profile.city = "Delhi";\n\nconsole.log(user.profile.city); // Delhi`,
    explanation: "Nested objects are shared in shallow copies.",
  },
];

const mistakes = [
  { title: "Expecting deep copy", fix: "Object.assign is shallow; nested objects are shared." },
  { title: "Mutating target unintentionally", fix: "Use {} as the target for a fresh copy." },
  { title: "Overwriting properties", fix: "Be mindful of source order." },
];

const faqs = [
  { q: "Is Object.assign deep?", a: "No, it is a shallow copy." },
  { q: "Does it mutate the target?", a: "Yes, it writes into the target object." },
  { q: "What is a common alternative?", a: "Spread syntax: { ...a, ...b }." },
];

const related = [
  { label: "Spread in Objects", href: "/javascript/objects/spread" },
  { label: "Object.keys()", href: "/javascript/objects/keys" },
  { label: "Object Destructuring", href: "/javascript/objects/destructuring" },
];

export default function JavascriptObjectAssignPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object.assign()"
      intro={[
        "Object.assign copies properties from one or more sources into a target object.",
        "It is commonly used for shallow copies and merges.",
      ]}
      why={[
        "Merging objects is common when combining defaults with user options.",
        "Object.assign provides a simple built-in way to do that.",
      ]}
      syntax={["Object.assign(target, ...sources)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const merged = { ...a, ...b };`,
        with: `const merged = Object.assign({}, a, b);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Does Object.assign mutate?", a: "Yes, it mutates the target object." },
        { q: "Is it deep or shallow?", a: "It performs a shallow copy." },
        { q: "When should you avoid it?", a: "When you need deep cloning or immutability." },
      ]}
      practice={{
        prompt: "Practice: Merge a defaults object with a user settings object.",
        starterCode: `const defaults = { theme: "light", layout: "grid" };\nconst user = { theme: "dark" };\n// TODO: merge into a new object\n`,
        solution: `const defaults = { theme: "light", layout: "grid" };\nconst user = { theme: "dark" };\nconst merged = Object.assign({}, defaults, user);\nconsole.log(merged);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Object.assign Demo",
        description: "Try merging different objects and see results.",
      }}
    />
  );
}
