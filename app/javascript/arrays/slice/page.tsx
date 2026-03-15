import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript slice() and splice(): Copy vs Edit",
  description: "Learn the difference between slice() and splice() with examples and best practices.",
  keywords: ["slice", "splice", "array methods", "javascript arrays"],
  openGraph: {
    title: "JavaScript slice() and splice()",
    description: "Learn the difference between slice() and splice() with examples and best practices.",
    url: "/javascript/arrays/slice",
    type: "article",
    images: ["/og-slice-splice.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript slice() and splice()",
    description: "Learn the difference between slice() and splice() with examples and best practices.",
    images: ["/og-slice-splice.svg"],
  },
  alternates: { canonical: "/javascript/arrays/slice" },
};

const sections = [
  {
    heading: "slice = copy",
    paragraphs: [
      "slice returns a shallow copy of a portion of the array.",
      "It does not modify the original array.",
    ],
  },
  {
    heading: "splice = edit",
    paragraphs: [
      "splice removes or inserts items in place.",
      "It mutates the original array.",
    ],
  },
  {
    heading: "When to Use",
    paragraphs: [
      "Use slice when you want immutability.",
      "Use splice when you must update the array itself.",
    ],
  },
];

const examples = [
  {
    title: "slice",
    code: `const items = ["a", "b", "c", "d"];\nconst part = items.slice(1, 3);\n\nconsole.log(part); // ["b", "c"]\nconsole.log(items); // unchanged`,
    explanation: "slice copies without mutation.",
  },
  {
    title: "splice remove",
    code: `const items = ["a", "b", "c", "d"];\nitems.splice(1, 2);\n\nconsole.log(items); // ["a", "d"]`,
    explanation: "splice removes items in place.",
  },
  {
    title: "splice insert",
    code: `const items = ["a", "d"];\nitems.splice(1, 0, "b", "c");\n\nconsole.log(items); // ["a", "b", "c", "d"]`,
    explanation: "splice can insert items.",
  },
  {
    title: "slice with negative",
    code: `const items = ["a", "b", "c", "d"];\nconst lastTwo = items.slice(-2);\n\nconsole.log(lastTwo); // ["c", "d"]`,
    explanation: "Negative indexes count from the end.",
  },
];

const mistakes = [
  { title: "Using slice when you need mutation", fix: "Use splice to change the original array." },
  { title: "Using splice when you need immutability", fix: "Use slice to copy instead of mutate." },
  { title: "Forgetting splice returns removed items", fix: "splice returns the removed elements, not the array." },
];

const faqs = [
  { q: "Does slice mutate?", a: "No, slice returns a new array." },
  { q: "Does splice mutate?", a: "Yes, splice changes the original array." },
  { q: "Can splice insert and remove?", a: "Yes, it can do both in one call." },
];

const related = [
  { label: "sort()", href: "/javascript/arrays/sort" },
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "filter()", href: "/javascript/arrays/filter" },
];

export default function JavascriptSliceSplicePage() {
  return (
    <JsTutorialTemplate
      title="JavaScript slice() and splice()"
      intro={[
        "slice copies part of an array without changing it, while splice edits the array in place.",
        "Knowing the difference prevents mutation bugs.",
      ]}
      why={[
        "Many bugs come from unintentional array mutation.",
        "Choosing the right method keeps your data flow predictable.",
      ]}
      syntax={["array.slice(start, end)", "array.splice(start, deleteCount, ...items)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const items = [1, 2, 3];\nitems.splice(1, 1); // mutates`,
        with: `const items = [1, 2, 3];\nconst copy = items.slice(1, 2); // no mutation`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the main difference?", a: "slice copies, splice mutates." },
        { q: "What does splice return?", a: "An array of removed elements." },
        { q: "When should you use slice?", a: "When you want immutability." },
      ]}
      practice={{
        prompt: "Practice: Remove the middle element from an array using splice.",
        starterCode: `const nums = [1, 2, 3, 4, 5];\n// TODO: remove 3\n`,
        solution: `const nums = [1, 2, 3, 4, 5];\nnums.splice(2, 1);\nconsole.log(nums);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run slice/splice Demo",
        description: "Try editing the indexes to see how results change.",
      }}
    />
  );
}
