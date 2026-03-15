import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript sort(): Order Arrays",
  description: "Learn the JavaScript sort() method with compare functions, examples, and pitfalls.",
  keywords: ["sort", "array sort", "javascript arrays"],
  openGraph: {
    title: "JavaScript sort()",
    description: "Learn the JavaScript sort() method with compare functions, examples, and pitfalls.",
    url: "/javascript/arrays/sort",
    type: "article",
    images: ["/og-sort.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript sort()",
    description: "Learn the JavaScript sort() method with compare functions, examples, and pitfalls.",
    images: ["/og-sort.svg"],
  },
  alternates: { canonical: "/javascript/arrays/sort" },
};

const sections = [
  {
    heading: "Default Sort",
    paragraphs: [
      "sort converts items to strings and sorts lexicographically by default.",
      "This can surprise you with numbers like 10 coming before 2.",
    ],
  },
  {
    heading: "Compare Function",
    paragraphs: [
      "Provide a compare function for numeric or custom sorting.",
      "Return a negative number for a before b, positive for a after b, and 0 for equal.",
    ],
  },
  {
    heading: "Mutation",
    paragraphs: [
      "sort mutates the original array.",
      "Clone the array first if you need to keep the original.",
    ],
  },
];

const examples = [
  {
    title: "Default sort",
    code: `const nums = [10, 2, 5];\nnums.sort();\n\nconsole.log(nums); // [10, 2, 5] as strings`,
    explanation: "Default sort is lexicographic, not numeric.",
  },
  {
    title: "Numeric sort",
    code: `const nums = [10, 2, 5];\nnums.sort((a, b) => a - b);\n\nconsole.log(nums); // [2, 5, 10]`,
    explanation: "Use a compare function for numeric order.",
  },
  {
    title: "Sort objects",
    code: `const users = [{ age: 30 }, { age: 20 }];\nusers.sort((a, b) => a.age - b.age);\n\nconsole.log(users);`,
    explanation: "Compare object fields for custom sorting.",
  },
  {
    title: "Clone before sort",
    code: `const nums = [3, 1, 2];\nconst sorted = [...nums].sort((a, b) => a - b);\n\nconsole.log(nums, sorted);`,
    explanation: "Clone to avoid mutating the original.",
  },
];

const mistakes = [
  { title: "Assuming numeric sort", fix: "Provide a compare function for numbers." },
  { title: "Mutating original array", fix: "Clone before sorting if needed." },
  { title: "Returning boolean in compare", fix: "Return negative, zero, or positive numbers." },
];

const faqs = [
  { q: "Does sort mutate the array?", a: "Yes, sort changes the original array." },
  { q: "Why does sort put 10 before 2?", a: "Default sort compares strings, not numbers." },
  { q: "How do I sort descending?", a: "Use (a, b) => b - a." },
];

const related = [
  { label: "slice() & splice()", href: "/javascript/arrays/slice" },
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "reduce()", href: "/javascript/arrays/reduce" },
];

export default function JavascriptSortPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript sort()"
      intro={[
        "sort orders array elements in place. Without a compare function it sorts as strings.",
        "For numeric and custom ordering, you should pass a compare function.",
      ]}
      why={[
        "Sorting is common for lists, leaderboards, and UI tables.",
        "Knowing how sort behaves avoids subtle bugs.",
      ]}
      syntax={["array.sort()", "array.sort((a, b) => a - b)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const nums = [10, 2, 5];\nnums.sort();`,
        with: `const nums = [10, 2, 5];\nnums.sort((a, b) => a - b);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Does sort mutate?", a: "Yes, it sorts in place." },
        { q: "How do you sort numbers?", a: "Provide a compare function like (a, b) => a - b." },
        { q: "How do you sort descending?", a: "Use (a, b) => b - a." },
      ]}
      practice={{
        prompt: "Practice: Sort an array of scores in descending order.",
        starterCode: `const scores = [20, 5, 30];\n// TODO: sort descending\n`,
        solution: `const scores = [20, 5, 30];\nscores.sort((a, b) => b - a);\nconsole.log(scores);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[1].code,
        label: "Run sort() Demo",
        description: "Try sorting numbers and strings to see differences.",
      }}
    />
  );
}
