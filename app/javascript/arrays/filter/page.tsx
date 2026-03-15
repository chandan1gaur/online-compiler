import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript filter(): Select Items",
  description: "Learn the JavaScript filter() method with syntax, examples, and common mistakes.",
  keywords: ["filter", "array filter", "javascript arrays"],
  openGraph: {
    title: "JavaScript filter()",
    description: "Learn the JavaScript filter() method with syntax, examples, and common mistakes.",
    url: "/javascript/arrays/filter",
    type: "article",
    images: ["/og-filter.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript filter()",
    description: "Learn the JavaScript filter() method with syntax, examples, and common mistakes.",
    images: ["/og-filter.svg"],
  },
  alternates: { canonical: "/javascript/arrays/filter" },
};

const sections = [
  {
    heading: "Keep What Matches",
    paragraphs: [
      "filter returns a new array with only the items that pass the test.",
      "It never mutates the original array.",
    ],
  },
  {
    heading: "Short and Clear",
    paragraphs: [
      "Use filter to express selection rules clearly.",
      "Combine it with map for powerful data pipelines.",
    ],
  },
  {
    heading: "Empty Results",
    paragraphs: [
      "If nothing matches, filter returns an empty array.",
      "Always handle that case if needed.",
    ],
  },
];

const examples = [
  {
    title: "Basic filter",
    code: `const nums = [1, 2, 3, 4];\nconst evens = nums.filter((n) => n % 2 === 0);\n\nconsole.log(evens);`,
    explanation: "Keep only even numbers.",
  },
  {
    title: "Filter objects",
    code: `const users = [{ active: true }, { active: false }];\nconst active = users.filter((u) => u.active);\n\nconsole.log(active);`,
    explanation: "Filter arrays of objects by a field.",
  },
  {
    title: "Filter by search",
    code: `const names = ["ava", "liam", "noah"];\nconst result = names.filter((n) => n.includes("a"));\n\nconsole.log(result);`,
    explanation: "Use string checks inside filter.",
  },
  {
    title: "Chain with map",
    code: `const nums = [1, 2, 3, 4];\nconst doubledEvens = nums.filter((n) => n % 2 === 0).map((n) => n * 2);\n\nconsole.log(doubledEvens);`,
    explanation: "Filter first, then transform.",
  },
];

const mistakes = [
  { title: "Mutating in filter", fix: "Avoid modifying items while filtering." },
  { title: "Expecting one item", fix: "Use find when you need the first match." },
  { title: "Forgetting empty array", fix: "Handle no matches gracefully." },
];

const faqs = [
  { q: "Does filter mutate the array?", a: "No, it returns a new array." },
  { q: "What does filter return if no items match?", a: "An empty array." },
  { q: "Can filter be chained?", a: "Yes, often with map or reduce." },
];

const related = [
  { label: "map()", href: "/javascript/arrays/map" },
  { label: "find()", href: "/javascript/arrays/find" },
  { label: "reduce()", href: "/javascript/arrays/reduce" },
];

export default function JavascriptFilterPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript filter()"
      intro={[
        "filter selects items that match a condition and returns a new array.",
        "It is the go-to method for searching and selecting data.",
      ]}
      why={[
        "Filtering is common in UI lists, search results, and data validation.",
        "filter makes the intent clear and the code concise.",
      ]}
      syntax={["array.filter((value, index, array) => condition)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const out = [];\nfor (const n of nums) {\n  if (n % 2 === 0) out.push(n);\n}`,
        with: `const out = nums.filter((n) => n % 2 === 0);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does filter return?", a: "A new array with items that pass the test." },
        { q: "How do you get the first match?", a: "Use find instead of filter." },
        { q: "Does filter mutate?", a: "No, it returns a new array." },
      ]}
      practice={{
        prompt: "Practice: Filter a list of numbers to keep only values greater than 10.",
        starterCode: `const nums = [4, 12, 9, 18];\n// TODO: filter > 10\n`,
        solution: `const nums = [4, 12, 9, 18];\nconst result = nums.filter((n) => n > 10);\nconsole.log(result);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run filter() Demo",
        description: "Try filtering with different conditions.",
      }}
    />
  );
}
