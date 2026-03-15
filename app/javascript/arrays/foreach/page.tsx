import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript forEach(): Loop Over Arrays",
  description: "Learn the JavaScript forEach() method with syntax, examples, and best practices.",
  keywords: ["forEach", "array forEach", "javascript arrays"],
  openGraph: {
    title: "JavaScript forEach()",
    description: "Learn the JavaScript forEach() method with syntax, examples, and best practices.",
    url: "/javascript/arrays/foreach",
    type: "article",
    images: ["/og-foreach.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript forEach()",
    description: "Learn the JavaScript forEach() method with syntax, examples, and best practices.",
    images: ["/og-foreach.svg"],
  },
  alternates: { canonical: "/javascript/arrays/foreach" },
};

const sections = [
  {
    heading: "Side Effects",
    paragraphs: [
      "forEach runs a callback for every element.",
      "It is best when you need side effects like logging or updating external state.",
    ],
  },
  {
    heading: "No Return",
    paragraphs: [
      "forEach always returns undefined.",
      "If you need a new array, use map instead.",
    ],
  },
  {
    heading: "Cannot Break",
    paragraphs: [
      "You cannot break out of forEach early.",
      "Use a for...of loop when you need break or continue.",
    ],
  },
];

const examples = [
  {
    title: "Basic forEach",
    code: `const nums = [1, 2, 3];\nnums.forEach((n) => console.log(n));`,
    explanation: "Run a callback for each item.",
  },
  {
    title: "Using index",
    code: `const items = ["a", "b"];\nitems.forEach((item, i) => console.log(i, item));`,
    explanation: "Access index and value.",
  },
  {
    title: "Update external state",
    code: `const nums = [1, 2, 3];\nlet total = 0;\nnums.forEach((n) => {\n  total += n;\n});\n\nconsole.log(total);`,
    explanation: "Use forEach for side effects.",
  },
  {
    title: "No early exit",
    code: `const nums = [1, 2, 3];\nnums.forEach((n) => {\n  if (n === 2) return;\n  console.log(n);\n});`,
    explanation: "return only skips the current callback.",
  },
];

const mistakes = [
  { title: "Using forEach to build arrays", fix: "Use map or filter to return new arrays." },
  { title: "Trying to break", fix: "Use for...of if you need break or continue." },
  { title: "Expecting a return value", fix: "forEach always returns undefined." },
];

const faqs = [
  { q: "Does forEach return a new array?", a: "No, it returns undefined." },
  { q: "Can I break out of forEach?", a: "No, use a loop if you need early exit." },
  { q: "When should I use forEach?", a: "For side effects like logging or updating external state." },
];

const related = [
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "for...of Loop", href: "/javascript/loops/for-of-loop" },
];

export default function JavascriptForEachPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript forEach()"
      intro={[
        "forEach runs a callback for each element in the array.",
        "It is best for side effects, not for building new arrays.",
      ]}
      why={[
        "Some tasks are about doing something for each item, like logging or updating totals.",
        "forEach expresses that intent clearly.",
      ]}
      syntax={["array.forEach((value, index, array) => { ... })"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const out = [];\nfor (const n of nums) {\n  out.push(n * 2);\n}`,
        with: `const out = nums.map((n) => n * 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Does forEach return anything?", a: "No, it returns undefined." },
        { q: "Can you break out of forEach?", a: "No, use a loop instead." },
        { q: "When is forEach appropriate?", a: "When you need side effects, not transformations." },
      ]}
      practice={{
        prompt: "Practice: Log each item with its index using forEach.",
        starterCode: `const items = ["x", "y", "z"];\n// TODO: log index and value\n`,
        solution: `const items = ["x", "y", "z"];\nitems.forEach((item, i) => console.log(i, item));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run forEach() Demo",
        description: "Try changing the array items and see the output.",
      }}
    />
  );
}
