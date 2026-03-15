import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript findIndex(): Find Position",
  description: "Learn the JavaScript findIndex() method with syntax, examples, and common mistakes.",
  keywords: ["findIndex", "array findIndex", "javascript arrays"],
  openGraph: {
    title: "JavaScript findIndex()",
    description: "Learn the JavaScript findIndex() method with syntax, examples, and common mistakes.",
    url: "/javascript/arrays/findindex",
    type: "article",
    images: ["/og-findindex.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript findIndex()",
    description: "Learn the JavaScript findIndex() method with syntax, examples, and common mistakes.",
    images: ["/og-findindex.svg"],
  },
  alternates: { canonical: "/javascript/arrays/findindex" },
};

const sections = [
  {
    heading: "Find the Index",
    paragraphs: [
      "findIndex returns the index of the first item that matches.",
      "If nothing matches, it returns -1.",
    ],
  },
  {
    heading: "Use for Updates",
    paragraphs: [
      "Once you have the index, you can update or remove the item.",
      "This is useful in state updates and list editing.",
    ],
  },
  {
    heading: "Stop Early",
    paragraphs: [
      "Like find, it stops after the first match.",
      "That makes it efficient for lookups.",
    ],
  },
];

const examples = [
  {
    title: "Find index",
    code: `const users = [{ id: 1 }, { id: 2 }];\nconst idx = users.findIndex((u) => u.id === 2);\n\nconsole.log(idx);`,
    explanation: "Returns 1 for the item with id 2.",
  },
  {
    title: "Not found",
    code: `const nums = [1, 2, 3];\nconst idx = nums.findIndex((n) => n > 10);\n\nconsole.log(idx); // -1`,
    explanation: "-1 indicates no match.",
  },
  {
    title: "Update by index",
    code: `const items = [{ id: 1, done: false }];\nconst idx = items.findIndex((i) => i.id === 1);\nif (idx !== -1) items[idx].done = true;\n\nconsole.log(items);`,
    explanation: "Use the index to update a specific item.",
  },
  {
    title: "Remove item",
    code: `const list = ["a", "b", "c"];\nconst idx = list.findIndex((v) => v === "b");\nif (idx !== -1) list.splice(idx, 1);\n\nconsole.log(list);`,
    explanation: "Remove an item by index.",
  },
];

const mistakes = [
  { title: "Forgetting -1 case", fix: "Always check if index is -1 before using it." },
  { title: "Expecting the value", fix: "findIndex returns the position, not the item." },
  { title: "Using findIndex for multiple matches", fix: "Use filter or a loop to collect all matches." },
];

const faqs = [
  { q: "What does findIndex return?", a: "The index of the first match or -1." },
  { q: "When should I use find instead?", a: "Use find when you need the element, not the index." },
  { q: "Does findIndex mutate the array?", a: "No, it does not." },
];

const related = [
  { label: "find()", href: "/javascript/arrays/find" },
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "slice() & splice()", href: "/javascript/arrays/slice" },
];

export default function JavascriptFindIndexPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript findIndex()"
      intro={[
        "findIndex returns the position of the first item that matches a condition.",
        "It is useful when you need to update or remove items by index.",
      ]}
      why={[
        "Many updates require the index of an item. findIndex gives you that quickly.",
        "It stops early, so it is efficient for lookups.",
      ]}
      syntax={["array.findIndex((value, index, array) => condition)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let idx = -1;\nfor (let i = 0; i < users.length; i++) {\n  if (users[i].id === 2) {\n    idx = i;\n    break;\n  }\n}`,
        with: `const idx = users.findIndex((u) => u.id === 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does findIndex return if no match?", a: "-1." },
        { q: "When should you use findIndex?", a: "When you need the position to update or remove." },
        { q: "Does findIndex stop after first match?", a: "Yes, it stops early." },
      ]}
      practice={{
        prompt: "Practice: Find the index of the first negative number.",
        starterCode: `const nums = [3, -1, 4];\n// TODO: find index of first negative\n`,
        solution: `const nums = [3, -1, 4];\nconst idx = nums.findIndex((n) => n < 0);\nconsole.log(idx);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run findIndex() Demo",
        description: "Try changing the array to see different indexes.",
      }}
    />
  );
}
