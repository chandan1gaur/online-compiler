import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Arrays: Complete Beginner Guide",
  description:
    "Learn JavaScript arrays with syntax, common operations, and essential methods like map, filter, reduce, and more.",
  keywords: [
    "javascript arrays",
    "array methods",
    "map",
    "filter",
    "reduce",
    "array basics",
  ],
  openGraph: {
    title: "JavaScript Arrays",
    description:
      "Learn JavaScript arrays with syntax, common operations, and essential methods like map, filter, reduce, and more.",
    url: "/javascript/arrays",
    type: "article",
    images: ["/og-arrays.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Arrays",
    description:
      "Learn JavaScript arrays with syntax, common operations, and essential methods like map, filter, reduce, and more.",
    images: ["/og-arrays.svg"],
  },
  alternates: { canonical: "/javascript/arrays" },
};

const sections = [
  {
    heading: "Store Ordered Data",
    paragraphs: [
      "Arrays hold ordered collections of values. Indexes start at 0 and go up from there.",
      "They are perfect for lists of items, records, or any sequence you need to process.",
    ],
    bullets: [
      "Use arrays for ordered data.",
      "Access items by index.",
      "Arrays can hold mixed types.",
    ],
  },
  {
    heading: "Common Operations",
    paragraphs: [
      "You can add, remove, and update items using push, pop, shift, and splice.",
      "You can also create new arrays with map, filter, and slice.",
    ],
  },
  {
    heading: "Iteration",
    paragraphs: [
      "Loop through arrays using for, for...of, or array methods like forEach.",
      "Choose the style that is most readable for your use case.",
    ],
  },
  {
    heading: "Immutability vs Mutation",
    paragraphs: [
      "Some methods mutate the original array (push, pop, splice, sort).",
      "Others return new arrays (map, filter, slice). Know which behavior you need.",
    ],
  },
];

const examples = [
  {
    title: "Create and access",
    code: `const fruits = ["apple", "banana", "mango"];\n\nconsole.log(fruits[0]); // apple\nconsole.log(fruits.length); // 3`,
    explanation: "Arrays are zero-indexed and have a length property.",
  },
  {
    title: "Add and remove",
    code: `const list = [1, 2];\nlist.push(3);\nlist.pop();\n\nconsole.log(list); // [1, 2]`,
    explanation: "push and pop modify the array.",
  },
  {
    title: "Map and filter",
    code: `const nums = [1, 2, 3, 4];\nconst doubled = nums.map((n) => n * 2);\nconst evens = nums.filter((n) => n % 2 === 0);\n\nconsole.log(doubled, evens);`,
    explanation: "map and filter return new arrays.",
  },
  {
    title: "Reduce",
    code: `const prices = [10, 20, 30];\nconst total = prices.reduce((sum, p) => sum + p, 0);\n\nconsole.log(total);`,
    explanation: "reduce collapses an array into a single value.",
  },
];

const mistakes = [
  { title: "Off-by-one indexing", fix: "Remember arrays start at index 0." },
  { title: "Mutating when you need immutability", fix: "Use map, filter, or slice to create new arrays." },
  { title: "Using for...in on arrays", fix: "Prefer for...of or array methods for values." },
  { title: "Forgetting that sort mutates", fix: "Copy the array first if you need to preserve the original." },
];

const faqs = [
  { q: "Are arrays objects in JavaScript?", a: "Yes, arrays are a special kind of object with indexed elements." },
  { q: "What is the fastest way to loop?", a: "Performance is similar; choose the most readable approach." },
  { q: "How do I copy an array?", a: "Use slice() or spread: const copy = [...arr]." },
];

const related = [
  { label: "Array Methods", href: "/javascript/arrays/array-methods" },
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "reduce()", href: "/javascript/arrays/reduce" },
  { label: "Array Destructuring", href: "/javascript/arrays/destructuring" },
];

export default function JavascriptArraysPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Arrays"
      intro={[
        "Arrays store ordered lists of values and are one of the most used data structures in JavaScript.",
        "Once you know the basics, methods like map, filter, and reduce become powerful tools.",
      ]}
      why={[
        "Most apps work with lists: products, users, messages, and more.",
        "Arrays give you efficient ways to store, transform, and search that data.",
      ]}
      syntax={["const items = [value1, value2, value3]", "items[index]", "items.length"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const total = prices[0] + prices[1] + prices[2];`,
        with: `const total = prices.reduce((sum, p) => sum + p, 0);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is an array?", a: "An ordered list of values accessed by index." },
        { q: "How do you add items to an array?", a: "Use push, unshift, or spread to create a new array." },
        { q: "Which methods do not mutate?", a: "map, filter, and slice return new arrays." },
      ]}
      practice={{
        prompt: "Practice: Given an array of numbers, return a new array with only odd numbers.",
        starterCode: `const nums = [1, 2, 3, 4, 5];\n// TODO: filter odd numbers\n`,
        solution: `const nums = [1, 2, 3, 4, 5];\nconst odds = nums.filter((n) => n % 2 === 1);\nconsole.log(odds);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Arrays Demo",
        description: "Try changing the array values and indexes.",
      }}
    />
  );
}
