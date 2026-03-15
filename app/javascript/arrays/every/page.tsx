import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript every(): Check All Items",
  description: "Learn the JavaScript every() method with syntax, examples, and common mistakes.",
  keywords: ["every", "array every", "javascript arrays"],
  openGraph: {
    title: "JavaScript every()",
    description: "Learn the JavaScript every() method with syntax, examples, and common mistakes.",
    url: "/javascript/arrays/every",
    type: "article",
    images: ["/og-every.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript every()",
    description: "Learn the JavaScript every() method with syntax, examples, and common mistakes.",
    images: ["/og-every.svg"],
  },
  alternates: { canonical: "/javascript/arrays/every" },
};

const sections = [
  {
    heading: "All Must Match",
    paragraphs: [
      "every returns true only if all elements pass the test.",
      "It stops early when it finds a failing element.",
    ],
  },
  {
    heading: "Validation",
    paragraphs: [
      "every is great for validation rules like all fields filled.",
      "If you need any match, use some instead.",
    ],
  },
  {
    heading: "Empty Arrays",
    paragraphs: [
      "every on an empty array returns true by definition.",
      "Handle this case if it matters.",
    ],
  },
];

const examples = [
  {
    title: "All even",
    code: `const nums = [2, 4, 6];\nconst allEven = nums.every((n) => n % 2 === 0);\n\nconsole.log(allEven);`,
    explanation: "All items match, so result is true.",
  },
  {
    title: "Not all match",
    code: `const nums = [2, 3, 4];\nconst allEven = nums.every((n) => n % 2 === 0);\n\nconsole.log(allEven);`,
    explanation: "One item fails, so result is false.",
  },
  {
    title: "Validation",
    code: `const fields = ["name", "email"];\nconst valid = fields.every((f) => f.length > 0);\n\nconsole.log(valid);`,
    explanation: "Use every to validate all fields.",
  },
  {
    title: "Objects",
    code: `const users = [{ active: true }, { active: true }];\nconst allActive = users.every((u) => u.active);\n\nconsole.log(allActive);`,
    explanation: "Works with arrays of objects too.",
  },
];

const mistakes = [
  { title: "Using every for any match", fix: "Use some when you need at least one match." },
  { title: "Forgetting empty arrays return true", fix: "Check array length when needed." },
  { title: "Expecting every to return items", fix: "every returns a boolean, not items." },
];

const faqs = [
  { q: "What does every return?", a: "A boolean indicating if all items pass the test." },
  { q: "Does every stop early?", a: "Yes, it stops when a failure is found." },
  { q: "What about empty arrays?", a: "every returns true for empty arrays." },
];

const related = [
  { label: "filter()", href: "/javascript/arrays/filter" },
  { label: "find()", href: "/javascript/arrays/find" },
  { label: "map()", href: "/javascript/arrays/map" },
];

export default function JavascriptEveryPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript every()"
      intro={[
        "every checks whether all elements in an array satisfy a condition.",
        "It returns true only if every item passes.",
      ]}
      why={[
        "Many validation tasks require confirming all items are valid.",
        "every expresses this clearly and stops early for efficiency.",
      ]}
      syntax={["array.every((value, index, array) => condition)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let allValid = true;\nfor (const n of nums) {\n  if (n <= 0) {\n    allValid = false;\n    break;\n  }\n}`,
        with: `const allValid = nums.every((n) => n > 0);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does every return on empty arrays?", a: "True." },
        { q: "When should you use every?", a: "When all elements must satisfy a condition." },
        { q: "How is every different from some?", a: "every requires all; some requires any." },
      ]}
      practice={{
        prompt: "Practice: Check if all scores are 50 or above.",
        starterCode: `const scores = [70, 55, 40];\n// TODO: check all >= 50\n`,
        solution: `const scores = [70, 55, 40];\nconst ok = scores.every((s) => s >= 50);\nconsole.log(ok);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run every() Demo",
        description: "Try arrays with mixed values to see results.",
      }}
    />
  );
}
