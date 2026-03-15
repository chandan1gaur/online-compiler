import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object.entries(): Key-Value Pairs",
  description: "Learn Object.entries() with syntax, examples, and common use cases.",
  keywords: ["Object.entries", "javascript objects", "entries"],
  openGraph: {
    title: "JavaScript Object.entries()",
    description: "Learn Object.entries() with syntax, examples, and common use cases.",
    url: "/javascript/objects/entries",
    type: "article",
    images: ["/og-object-entries.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.entries()",
    description: "Learn Object.entries() with syntax, examples, and common use cases.",
    images: ["/og-object-entries.svg"],
  },
  alternates: { canonical: "/javascript/objects/entries" },
};

const sections = [
  {
    heading: "Key-Value Arrays",
    paragraphs: [
      "Object.entries returns an array of [key, value] pairs.",
      "It is great for looping and converting objects.",
    ],
  },
  {
    heading: "Transform Objects",
    paragraphs: [
      "Combine entries with map or filter to transform objects.",
      "Use Object.fromEntries to turn pairs back into an object.",
    ],
  },
  {
    heading: "Iteration",
    paragraphs: [
      "Use for...of to iterate entries cleanly.",
      "Destructure [key, value] in the loop.",
    ],
  },
];

const examples = [
  {
    title: "Basic entries",
    code: `const user = { name: "Ava", role: "admin" };\nconst entries = Object.entries(user);\n\nconsole.log(entries);`,
    explanation: "Returns [['name','Ava'], ['role','admin']].",
  },
  {
    title: "Loop entries",
    code: `const settings = { theme: "dark", layout: "grid" };\nfor (const [key, value] of Object.entries(settings)) {\n  console.log(key, value);\n}`,
    explanation: "Destructure key and value in a loop.",
  },
  {
    title: "Transform values",
    code: `const prices = { a: 10, b: 20 };\nconst doubled = Object.fromEntries(\n  Object.entries(prices).map(([k, v]) => [k, v * 2])\n);\n\nconsole.log(doubled);`,
    explanation: "Map over entries to transform an object.",
  },
  {
    title: "Filter entries",
    code: `const data = { a: 1, b: 0, c: 3 };\nconst filtered = Object.fromEntries(\n  Object.entries(data).filter(([, v]) => v > 0)\n);\n\nconsole.log(filtered);`,
    explanation: "Filter object properties by value.",
  },
];

const mistakes = [
  { title: "Expecting ordered keys", fix: "Do not rely on property order for logic." },
  { title: "Forgetting fromEntries", fix: "Use Object.fromEntries to rebuild objects." },
  { title: "Using entries for arrays", fix: "Arrays produce index-value pairs; use array methods instead." },
];

const faqs = [
  { q: "What does Object.entries return?", a: "An array of [key, value] pairs." },
  { q: "How do I convert back to object?", a: "Use Object.fromEntries." },
  { q: "Does entries include inherited properties?", a: "No, only own enumerable properties." },
];

const related = [
  { label: "Object.keys()", href: "/javascript/objects/keys" },
  { label: "Object.values()", href: "/javascript/objects/values" },
  { label: "Object.assign()", href: "/javascript/objects/assign" },
];

export default function JavascriptObjectEntriesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object.entries()"
      intro={[
        "Object.entries returns an array of key-value pairs for an object.",
        "It is useful for iteration, filtering, and transformations.",
      ]}
      why={[
        "Many object transformations are easier with entries and Object.fromEntries.",
        "This pattern keeps object logic readable and functional.",
      ]}
      syntax={["Object.entries(obj)", "Object.fromEntries(entries)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const result = {};\nfor (const key in obj) {\n  if (Object.hasOwn(obj, key)) {\n    result[key] = obj[key];\n  }\n}`,
        with: `const result = Object.fromEntries(Object.entries(obj));`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does Object.entries return?", a: "An array of [key, value] pairs." },
        { q: "How do you rebuild an object?", a: "Use Object.fromEntries." },
        { q: "Why use entries?", a: "It simplifies object iteration and transformation." },
      ]}
      practice={{
        prompt: "Practice: Convert an object to entries, double the values, and rebuild it.",
        starterCode: `const data = { a: 2, b: 3 };\n// TODO: double values using entries\n`,
        solution: `const data = { a: 2, b: 3 };\nconst doubled = Object.fromEntries(\n  Object.entries(data).map(([k, v]) => [k, v * 2])\n);\nconsole.log(doubled);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Object.entries Demo",
        description: "Try changing values and see how entries update.",
      }}
    />
  );
}
