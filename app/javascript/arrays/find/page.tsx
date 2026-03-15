import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript find(): First Match",
  description: "Learn the JavaScript find() method with syntax, examples, and common mistakes.",
  keywords: ["find", "array find", "javascript arrays"],
  openGraph: {
    title: "JavaScript find()",
    description: "Learn the JavaScript find() method with syntax, examples, and common mistakes.",
    url: "/javascript/arrays/find",
    type: "article",
    images: ["/og-find.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript find()",
    description: "Learn the JavaScript find() method with syntax, examples, and common mistakes.",
    images: ["/og-find.svg"],
  },
  alternates: { canonical: "/javascript/arrays/find" },
};

const sections = [
  {
    heading: "First Matching Item",
    paragraphs: [
      "find returns the first element that matches the condition.",
      "If nothing matches, it returns undefined.",
    ],
  },
  {
    heading: "Stops Early",
    paragraphs: [
      "find stops searching after the first match.",
      "It is more efficient than filter when you only need one item.",
    ],
  },
  {
    heading: "Use Cases",
    paragraphs: [
      "find is great for looking up items by id or key.",
      "Combine with optional chaining for safe access.",
    ],
  },
];

const examples = [
  {
    title: "Find by id",
    code: `const users = [{ id: 1 }, { id: 2 }];\nconst user = users.find((u) => u.id === 2);\n\nconsole.log(user);`,
    explanation: "Returns the first user with id 2.",
  },
  {
    title: "Not found",
    code: `const nums = [1, 2, 3];\nconst result = nums.find((n) => n > 10);\n\nconsole.log(result); // undefined`,
    explanation: "If nothing matches, you get undefined.",
  },
  {
    title: "Safe access",
    code: `const products = [{ sku: "A", price: 10 }];\nconst item = products.find((p) => p.sku === "B");\nconst price = item?.price ?? 0;\n\nconsole.log(price);`,
    explanation: "Use optional chaining to avoid errors.",
  },
  {
    title: "Find in strings",
    code: `const names = ["ava", "noah", "liam"];\nconst result = names.find((n) => n.startsWith("n"));\n\nconsole.log(result);`,
    explanation: "find works on any array of values.",
  },
];

const mistakes = [
  { title: "Using find for multiple results", fix: "Use filter when you need all matches." },
  { title: "Not handling undefined", fix: "Check the result or use optional chaining." },
  { title: "Expecting index", fix: "Use findIndex if you need the position." },
];

const faqs = [
  { q: "What does find return?", a: "The first matching element or undefined." },
  { q: "Does find mutate the array?", a: "No, it does not change the array." },
  { q: "When should I use find?", a: "When you need only the first matching item." },
];

const related = [
  { label: "findIndex()", href: "/javascript/arrays/findindex" },
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "every()", href: "/javascript/arrays/every" },
];

export default function JavascriptFindPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript find()"
      intro={[
        "find returns the first item that matches a condition.",
        "It is useful for lookups and searches by id.",
      ]}
      why={[
        "Searching lists is common in apps. find makes it simple and efficient.",
        "It stops early, which is faster than filtering everything.",
      ]}
      syntax={["array.find((value, index, array) => condition)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let found;\nfor (const u of users) {\n  if (u.id === 2) {\n    found = u;\n    break;\n  }\n}`,
        with: `const found = users.find((u) => u.id === 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does find return when nothing matches?", a: "Undefined." },
        { q: "When is find better than filter?", a: "When you only need the first match." },
        { q: "How do you avoid errors when find returns undefined?", a: "Check the result or use optional chaining." },
      ]}
      practice={{
        prompt: "Practice: Find the first number greater than 50 in an array.",
        starterCode: `const nums = [10, 60, 40];\n// TODO: find first > 50\n`,
        solution: `const nums = [10, 60, 40];\nconst result = nums.find((n) => n > 50);\nconsole.log(result);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run find() Demo",
        description: "Try searching for different ids.",
      }}
    />
  );
}
