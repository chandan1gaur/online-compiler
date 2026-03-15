import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript for...in Loop: Iterating Object Keys",
  description: "Learn JavaScript for...in loops for iterating object keys and properties with examples and best practices.",
  keywords: ["javascript for in", "for...in loop", "object keys"],
  openGraph: {
    title: "JavaScript for...in Loop",
    description: "Learn JavaScript for...in loops for iterating object keys and properties with examples and best practices.",
    url: "/javascript/loops/for-in-loop",
    type: "article",
    images: ["/og-for-in.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript for...in Loop",
    description: "Learn JavaScript for...in loops for iterating object keys and properties with examples and best practices.",
    images: ["/og-for-in.svg"],
  },
  alternates: { canonical: "/javascript/loops/for-in-loop" },
};

const sections = [
  {
    heading: "Iterate Keys",
    paragraphs: [
      "for...in iterates over enumerable keys of an object.",
      "It is best suited for objects, not arrays.",
    ],
  },
  {
    heading: "Own vs Inherited",
    paragraphs: [
      "for...in also iterates over inherited properties unless filtered.",
      "Use Object.hasOwn() or Object.prototype.hasOwnProperty.call() to filter.",
    ],
  },
  {
    heading: "Order Is Not Guaranteed",
    paragraphs: [
      "Do not rely on key order when using for...in.",
      "If you need order, use Object.keys and sort explicitly.",
    ],
  },
];

const examples = [
  {
    title: "Basic for...in",
    code: `const user = { id: 1, name: "Ava" };\n\nfor (const key in user) {\n  console.log(key, user[key]);\n}`,
    explanation: "Iterate keys and access values by bracket notation.",
  },
  {
    title: "Filter own properties",
    code: `const obj = Object.create({ inherited: true });\nobj.own = "yes";\n\nfor (const key in obj) {\n  if (Object.hasOwn(obj, key)) {\n    console.log(key);\n  }\n}`,
    explanation: "Filter out inherited keys with Object.hasOwn.",
  },
  {
    title: "Object.keys alternative",
    code: `const settings = { theme: "dark", compact: true };\n\nObject.keys(settings).forEach((key) => {\n  console.log(key, settings[key]);\n});`,
    explanation: "Use Object.keys for more explicit control.",
  },
  {
    title: "Avoid with arrays",
    code: `const list = ["a", "b"];\n\nfor (const key in list) {\n  console.log(key); // indexes as strings\n}`,
    explanation: "Use for...of for array values instead.",
  },
];

const mistakes = [
  { title: "Using for...in on arrays", fix: "Use for...of or array methods for values." },
  { title: "Forgetting inherited keys", fix: "Filter with Object.hasOwn when needed." },
  { title: "Assuming key order", fix: "Do not rely on key order unless you sort explicitly." },
];

const faqs = [
  { q: "What does for...in iterate?", a: "Enumerable keys of an object, including inherited ones unless filtered." },
  { q: "Why not use for...in on arrays?", a: "It iterates keys as strings and can include unexpected properties." },
  { q: "How do I filter own properties?", a: "Use Object.hasOwn(obj, key)." },
];

const related = [
  { label: "for...of Loop", href: "/javascript/loops/for-of-loop" },
  { label: "Objects", href: "/javascript/objects" },
  { label: "Loops Overview", href: "/javascript/loops" },
];

export default function JavascriptForInLoopPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript for...in Loop"
      intro={[
        "The for...in loop iterates over the keys of an object.",
        "It is useful for inspecting properties or building key-based logic.",
      ]}
      why={[
        "Object iteration is common for configuration, settings, and dynamic data shapes.",
        "Knowing how for...in behaves helps you avoid inherited keys and ordering surprises.",
      ]}
      syntax={["for (const key in object) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const obj = { a: 1, b: 2 };\nfor (let i = 0; i < Object.keys(obj).length; i++) {\n  const key = Object.keys(obj)[i];\n  console.log(key, obj[key]);\n}`,
        with: `const obj = { a: 1, b: 2 };\nfor (const key in obj) {\n  console.log(key, obj[key]);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does for...in return?", a: "It iterates over enumerable keys of an object." },
        { q: "How do you avoid inherited properties?", a: "Filter with Object.hasOwn." },
        { q: "Why prefer for...of for arrays?", a: "for...of gives values directly and avoids key surprises." },
      ]}
      practice={{
        prompt: "Practice: Iterate over a settings object and log key=value pairs.",
        starterCode: `const settings = { theme: "light", layout: "grid" };\n// TODO: log each key and value\n`,
        solution: `const settings = { theme: "light", layout: "grid" };\nfor (const key in settings) {\n  console.log(key, settings[key]);\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run for...in Demo",
        description: "Try adding more keys and see how for...in iterates them.",
      }}
    />
  );
}
