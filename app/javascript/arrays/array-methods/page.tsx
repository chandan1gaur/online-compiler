import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Array Methods: Quick Reference",
  description:
    "Learn the most useful JavaScript array methods with examples, including map, filter, reduce, find, sort, slice, and more.",
  keywords: ["array methods", "map", "filter", "reduce", "find", "sort", "slice"],
  openGraph: {
    title: "JavaScript Array Methods",
    description:
      "Learn the most useful JavaScript array methods with examples, including map, filter, reduce, find, sort, slice, and more.",
    url: "/javascript/arrays/array-methods",
    type: "article",
    images: ["/og-array-methods.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Array Methods",
    description:
      "Learn the most useful JavaScript array methods with examples, including map, filter, reduce, find, sort, slice, and more.",
    images: ["/og-array-methods.svg"],
  },
  alternates: { canonical: "/javascript/arrays/array-methods" },
};

const sections = [
  {
    heading: "Transformation",
    paragraphs: [
      "Use map to transform each element and return a new array.",
      "Use filter to keep items that match a condition.",
    ],
  },
  {
    heading: "Searching",
    paragraphs: [
      "Use find to return the first match, and findIndex for its index.",
      "Use every to confirm all items match a condition.",
    ],
  },
  {
    heading: "Aggregation",
    paragraphs: [
      "Use reduce to turn an array into a single value like a sum or object.",
      "Use sort to order values, but remember it mutates the array.",
    ],
  },
  {
    heading: "Slicing and Flattening",
    paragraphs: [
      "Use slice to copy parts of an array without mutation.",
      "Use splice for in-place changes and flat to reduce nested arrays.",
    ],
  },
];

const examples = [
  {
    title: "map and filter",
    code: `const nums = [1, 2, 3, 4];\nconst doubled = nums.map((n) => n * 2);\nconst evens = nums.filter((n) => n % 2 === 0);\n\nconsole.log(doubled, evens);`,
    explanation: "map transforms, filter selects.",
  },
  {
    title: "reduce",
    code: `const prices = [10, 20, 30];\nconst total = prices.reduce((sum, p) => sum + p, 0);\n\nconsole.log(total);`,
    explanation: "reduce collapses to a single value.",
  },
  {
    title: "find and findIndex",
    code: `const users = [{ id: 1 }, { id: 2 }];\nconst user = users.find((u) => u.id === 2);\nconst idx = users.findIndex((u) => u.id === 2);\n\nconsole.log(user, idx);`,
    explanation: "find returns the item, findIndex returns its position.",
  },
  {
    title: "slice vs splice",
    code: `const items = ["a", "b", "c", "d"];\nconst part = items.slice(1, 3);\nitems.splice(1, 1);\n\nconsole.log(part, items);`,
    explanation: "slice does not mutate; splice does.",
  },
];

const mistakes = [
  { title: "Forgetting sort mutates", fix: "Clone the array first if you need the original." },
  { title: "Using map for side effects", fix: "Use forEach when you are not returning a new array." },
  { title: "Confusing slice and splice", fix: "slice copies, splice edits in place." },
];

const faqs = [
  { q: "Which methods are non-mutating?", a: "map, filter, slice, and reduce return new values." },
  { q: "Which methods mutate?", a: "push, pop, splice, and sort mutate the original array." },
  { q: "When should I use forEach?", a: "When you need side effects like logging." },
];

const related = [
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "reduce()", href: "/javascript/arrays/reduce" },
  { label: "find()", href: "/javascript/arrays/find" },
  { label: "sort()", href: "/javascript/arrays/sort" },
];

export default function JavascriptArrayMethodsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Array Methods"
      intro={[
        "Array methods help you transform, filter, search, and aggregate data without manual loops.",
        "Knowing the common methods makes your code shorter and easier to read.",
      ]}
      why={[
        "Most real-world data is list-based. Array methods are built for that.",
        "They can replace long loops with clear, expressive logic.",
      ]}
      syntax={["arr.map(fn)", "arr.filter(fn)", "arr.reduce(fn, initial)", "arr.find(fn)", "arr.sort(fn)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const result = [];\nfor (const n of nums) {\n  if (n % 2 === 0) result.push(n * 2);\n}`,
        with: `const result = nums.filter((n) => n % 2 === 0).map((n) => n * 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does map return?", a: "A new array with transformed values." },
        { q: "What is reduce used for?", a: "It combines elements into a single value." },
        { q: "Does sort mutate?", a: "Yes, sort changes the original array." },
      ]}
      practice={{
        prompt: "Practice: Use map and filter to double only the even numbers in an array.",
        starterCode: `const nums = [1, 2, 3, 4];\n// TODO: return [4, 8]\n`,
        solution: `const nums = [1, 2, 3, 4];\nconst result = nums.filter((n) => n % 2 === 0).map((n) => n * 2);\nconsole.log(result);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Array Methods Demo",
        description: "Try combining methods to see how arrays transform.",
      }}
    />
  );
}
