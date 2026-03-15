import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript reduce(): Aggregate Arrays",
  description: "Learn the JavaScript reduce() method with syntax, examples, and common pitfalls.",
  keywords: ["reduce", "array reduce", "javascript arrays"],
  openGraph: {
    title: "JavaScript reduce()",
    description: "Learn the JavaScript reduce() method with syntax, examples, and common pitfalls.",
    url: "/javascript/arrays/reduce",
    type: "article",
    images: ["/og-reduce.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript reduce()",
    description: "Learn the JavaScript reduce() method with syntax, examples, and common pitfalls.",
    images: ["/og-reduce.svg"],
  },
  alternates: { canonical: "/javascript/arrays/reduce" },
};

const sections = [
  {
    heading: "Collapse to One Value",
    paragraphs: [
      "reduce combines all elements into a single result.",
      "You control the accumulator and how it updates each step.",
    ],
  },
  {
    heading: "Initial Value",
    paragraphs: [
      "Always provide an initial value to avoid edge cases on empty arrays.",
      "The initial value sets the type of your accumulator.",
    ],
  },
  {
    heading: "More Than Numbers",
    paragraphs: [
      "reduce can build objects, group data, or flatten arrays.",
      "It is powerful but should stay readable.",
    ],
  },
];

const examples = [
  {
    title: "Sum numbers",
    code: `const nums = [1, 2, 3];\nconst total = nums.reduce((sum, n) => sum + n, 0);\n\nconsole.log(total);`,
    explanation: "Accumulate a sum with an initial value.",
  },
  {
    title: "Build an object",
    code: `const items = ["a", "b"];\nconst counts = items.reduce((acc, item) => {\n  acc[item] = (acc[item] || 0) + 1;\n  return acc;\n}, {});\n\nconsole.log(counts);`,
    explanation: "Use reduce to build objects from arrays.",
  },
  {
    title: "Group by key",
    code: `const users = [{ role: "admin" }, { role: "user" }];\nconst grouped = users.reduce((acc, u) => {\n  (acc[u.role] ||= []).push(u);\n  return acc;\n}, {});\n\nconsole.log(grouped);`,
    explanation: "Group array items into buckets.",
  },
  {
    title: "Flatten once",
    code: `const nested = [[1, 2], [3]];\nconst flat = nested.reduce((acc, arr) => acc.concat(arr), []);\n\nconsole.log(flat);`,
    explanation: "Reduce can flatten one level.",
  },
];

const mistakes = [
  { title: "No initial value", fix: "Provide an initial value to avoid surprises on empty arrays." },
  { title: "Overcomplicated reducer", fix: "Keep reducer logic readable or split into helpers." },
  { title: "Mutating external state", fix: "Work with the accumulator instead of globals." },
];

const faqs = [
  { q: "What does reduce return?", a: "A single value produced by the reducer." },
  { q: "Why use an initial value?", a: "It prevents errors and controls accumulator type." },
  { q: "Can reduce replace map and filter?", a: "Yes, but it may reduce readability." },
];

const related = [
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "flat()", href: "/javascript/arrays/flat" },
];

export default function JavascriptReducePage() {
  return (
    <JsTutorialTemplate
      title="JavaScript reduce()"
      intro={[
        "reduce turns an array into a single value like a sum, object, or combined list.",
        "It is powerful but should be used with care for readability.",
      ]}
      why={[
        "Many tasks require aggregating data. reduce handles those in one pass.",
        "It is a key tool for data transformation pipelines.",
      ]}
      syntax={["array.reduce((acc, value, index, array) => newAcc, initialValue)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let total = 0;\nfor (const n of nums) {\n  total += n;\n}`,
        with: `const total = nums.reduce((sum, n) => sum + n, 0);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the accumulator?", a: "The running result that reduce updates each iteration." },
        { q: "Why is initial value important?", a: "It defines the accumulator type and handles empty arrays." },
        { q: "When should you avoid reduce?", a: "When map or filter is clearer." },
      ]}
      practice={{
        prompt: "Practice: Use reduce to calculate the total price of a cart.",
        starterCode: `const cart = [10, 15, 5];\n// TODO: total price\n`,
        solution: `const cart = [10, 15, 5];\nconst total = cart.reduce((sum, n) => sum + n, 0);\nconsole.log(total);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run reduce() Demo",
        description: "Try changing the array to see the accumulator update.",
      }}
    />
  );
}
