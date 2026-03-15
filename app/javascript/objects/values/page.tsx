import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object.values(): Get Property Values",
  description: "Learn Object.values() with syntax, examples, and common use cases.",
  keywords: ["Object.values", "javascript objects", "values"],
  openGraph: {
    title: "JavaScript Object.values()",
    description: "Learn Object.values() with syntax, examples, and common use cases.",
    url: "/javascript/objects/values",
    type: "article",
    images: ["/og-object-values.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.values()",
    description: "Learn Object.values() with syntax, examples, and common use cases.",
    images: ["/og-object-values.svg"],
  },
  alternates: { canonical: "/javascript/objects/values" },
};

const sections = [
  {
    heading: "List Values",
    paragraphs: [
      "Object.values returns an array of an object's own enumerable values.",
      "It is useful when you only care about values, not keys.",
    ],
  },
  {
    heading: "Pairs with keys and entries",
    paragraphs: [
      "Use Object.keys for keys and Object.entries for key-value pairs.",
      "Together they provide full object inspection.",
    ],
  },
  {
    heading: "Arrays",
    paragraphs: [
      "Object.values on arrays returns the values in order.",
      "This is similar to using the array directly.",
    ],
  },
];

const examples = [
  {
    title: "Basic values",
    code: `const user = { name: "Ava", role: "admin" };\nconst values = Object.values(user);\n\nconsole.log(values);`,
    explanation: "Returns ['Ava', 'admin'].",
  },
  {
    title: "Sum numeric values",
    code: `const scores = { a: 10, b: 20, c: 5 };\nconst total = Object.values(scores).reduce((sum, n) => sum + n, 0);\n\nconsole.log(total);`,
    explanation: "Combine Object.values with reduce.",
  },
  {
    title: "Array values",
    code: `const items = ["a", "b"];\nconsole.log(Object.values(items));`,
    explanation: "Values match array elements.",
  },
  {
    title: "Filter values",
    code: `const data = { a: 1, b: 0, c: 3 };\nconst nonZero = Object.values(data).filter((n) => n > 0);\n\nconsole.log(nonZero);`,
    explanation: "Filter values directly.",
  },
];

const mistakes = [
  { title: "Expecting keys", fix: "Use Object.keys when you need keys." },
  { title: "Assuming order matters", fix: "Do not rely on property order for logic." },
  { title: "Using values for nested objects", fix: "Values may be objects; handle them appropriately." },
];

const faqs = [
  { q: "What does Object.values return?", a: "An array of own enumerable values." },
  { q: "Does it include inherited values?", a: "No, only own properties." },
  { q: "Can I use it with arrays?", a: "Yes, it returns array values." },
];

const related = [
  { label: "Object.keys()", href: "/javascript/objects/keys" },
  { label: "Object.entries()", href: "/javascript/objects/entries" },
  { label: "Array Methods", href: "/javascript/arrays/array-methods" },
];

export default function JavascriptObjectValuesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object.values()"
      intro={[
        "Object.values returns an array of an object's own enumerable values.",
        "It is useful for totals, filters, and aggregations.",
      ]}
      why={[
        "Sometimes you do not need keys, only the data itself.",
        "Object.values makes it easy to work with those values.",
      ]}
      syntax={["Object.values(obj)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const values = [];\nfor (const key in obj) {\n  if (Object.hasOwn(obj, key)) values.push(obj[key]);\n}`,
        with: `const values = Object.values(obj);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does Object.values return?", a: "An array of own enumerable values." },
        { q: "Does it include inherited values?", a: "No." },
        { q: "When would you use it?", a: "When you only need the values, not keys." },
      ]}
      practice={{
        prompt: "Practice: Sum the values of an object using Object.values.",
        starterCode: `const scores = { a: 5, b: 7, c: 3 };\n// TODO: sum values\n`,
        solution: `const scores = { a: 5, b: 7, c: 3 };\nconst total = Object.values(scores).reduce((s, n) => s + n, 0);\nconsole.log(total);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Object.values Demo",
        description: "Try adding values and see how the array changes.",
      }}
    />
  );
}
