import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript map(): Transform Arrays",
  description: "Learn the JavaScript map() method with syntax, examples, and common mistakes.",
  keywords: ["map", "array map", "javascript arrays"],
  openGraph: {
    title: "JavaScript map()",
    description: "Learn the JavaScript map() method with syntax, examples, and common mistakes.",
    url: "/javascript/arrays/map",
    type: "article",
    images: ["/og-map.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript map()",
    description: "Learn the JavaScript map() method with syntax, examples, and common mistakes.",
    images: ["/og-map.svg"],
  },
  alternates: { canonical: "/javascript/arrays/map" },
};

const sections = [
  {
    heading: "Transform Values",
    paragraphs: [
      "map creates a new array by applying a function to each element.",
      "It never changes the original array.",
    ],
  },
  {
    heading: "Same Length Output",
    paragraphs: [
      "map always returns an array of the same length.",
      "If you need fewer items, use filter instead.",
    ],
  },
  {
    heading: "Index and Array",
    paragraphs: [
      "The callback receives value, index, and the original array.",
      "Use index when you need position-based logic.",
    ],
  },
];

const examples = [
  {
    title: "Basic map",
    code: `const nums = [1, 2, 3];\nconst squared = nums.map((n) => n * n);\n\nconsole.log(squared);`,
    explanation: "Transform each number into its square.",
  },
  {
    title: "Format strings",
    code: `const names = ["ada", "sam"];\nconst caps = names.map((n) => n.toUpperCase());\n\nconsole.log(caps);`,
    explanation: "Create a new array of formatted strings.",
  },
  {
    title: "Use index",
    code: `const items = ["a", "b"];\nconst labeled = items.map((item, i) => i + ":" + item);\n\nconsole.log(labeled);`,
    explanation: "Use the index parameter when needed.",
  },
  {
    title: "Map objects",
    code: `const users = [{ id: 1 }, { id: 2 }];\nconst ids = users.map((u) => u.id);\n\nconsole.log(ids);`,
    explanation: "Pick fields from objects into a new array.",
  },
];

const mistakes = [
  { title: "Using map for side effects", fix: "Use forEach when you are not returning a new array." },
  { title: "Mutating items in map", fix: "Return new objects instead of mutating existing ones." },
  { title: "Expecting map to filter", fix: "Use filter to remove items." },
];

const faqs = [
  { q: "Does map change the original array?", a: "No, it returns a new array." },
  { q: "Can map be chained?", a: "Yes, map can be chained with filter, reduce, and more." },
  { q: "What does map return?", a: "A new array with the same length as the original." },
];

const related = [
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "reduce()", href: "/javascript/arrays/reduce" },
  { label: "forEach()", href: "/javascript/arrays/foreach" },
];

export default function JavascriptMapPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript map()"
      intro={[
        "map transforms every element in an array and returns a new array.",
        "It is perfect for formatting data or converting shapes.",
      ]}
      why={[
        "map makes transformations declarative and readable.",
        "It avoids manual loops and keeps data pipelines clean.",
      ]}
      syntax={["array.map((value, index, array) => newValue)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const out = [];\nfor (const n of nums) {\n  out.push(n * 2);\n}`,
        with: `const out = nums.map((n) => n * 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does map return?", a: "A new array with transformed values." },
        { q: "When should you not use map?", a: "When you only need side effects; use forEach." },
        { q: "Does map mutate?", a: "No, map does not mutate the original array." },
      ]}
      practice={{
        prompt: "Practice: Convert an array of prices to include tax at 18 percent.",
        starterCode: `const prices = [10, 20, 30];\n// TODO: return prices with tax added\n`,
        solution: `const prices = [10, 20, 30];\nconst withTax = prices.map((p) => p * 1.18);\nconsole.log(withTax);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run map() Demo",
        description: "Try mapping different transformations.",
      }}
    />
  );
}
