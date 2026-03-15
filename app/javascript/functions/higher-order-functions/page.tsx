import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Higher-Order Functions",
  description: "Learn higher-order functions in JavaScript with examples and common patterns.",
  keywords: ["higher order functions", "javascript functions", "functional programming"],
  openGraph: {
    title: "JavaScript Higher-Order Functions",
    description: "Learn higher-order functions in JavaScript with examples and common patterns.",
    url: "/javascript/functions/higher-order-functions",
    type: "article",
    images: ["/og-hof.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Higher-Order Functions",
    description: "Learn higher-order functions in JavaScript with examples and common patterns.",
    images: ["/og-hof.svg"],
  },
  alternates: { canonical: "/javascript/functions/higher-order-functions" },
};

const sections = [
  {
    heading: "Functions that Use Functions",
    paragraphs: [
      "A higher-order function takes another function as an argument or returns a function.",
      "This enables reusable, composable logic.",
    ],
  },
  {
    heading: "Array Methods",
    paragraphs: [
      "Common higher-order functions include map, filter, and reduce.",
      "They are expressive and reduce boilerplate loops.",
    ],
  },
  {
    heading: "Function Factories",
    paragraphs: [
      "Returning a function lets you create specialized behavior.",
      "This is useful for configuration and reuse.",
    ],
  },
];

const examples = [
  {
    title: "Passing a function",
    code: `function apply(value, fn) {\n  return fn(value);\n}\n\nconsole.log(apply(5, (n) => n * 2));`,
    explanation: "A function can receive another function as input.",
  },
  {
    title: "Returning a function",
    code: `function makeMultiplier(factor) {\n  return (n) => n * factor;\n}\n\nconst triple = makeMultiplier(3);\nconsole.log(triple(4));`,
    explanation: "Return a function configured with a value.",
  },
  {
    title: "Array map",
    code: `const nums = [1, 2, 3];\nconst squared = nums.map((n) => n * n);\n\nconsole.log(squared);`,
    explanation: "map is a higher-order function.",
  },
  {
    title: "Filter",
    code: `const nums = [1, 2, 3, 4];\nconst evens = nums.filter((n) => n % 2 === 0);\n\nconsole.log(evens);`,
    explanation: "filter uses a callback to decide what to keep.",
  },
];

const mistakes = [
  { title: "Overcomplicating simple logic", fix: "Use higher-order functions when they improve clarity, not by default." },
  { title: "Ignoring performance on large arrays", fix: "Be mindful of extra iterations in tight loops." },
  { title: "Anonymous callback confusion", fix: "Name functions if callbacks get complex." },
];

const faqs = [
  { q: "What is a higher-order function?", a: "A function that takes or returns another function." },
  { q: "Are array methods higher-order?", a: "Yes, map, filter, and reduce all take callbacks." },
  { q: "Why use higher-order functions?", a: "They help write reusable and composable logic." },
];

const related = [
  { label: "Callback Functions", href: "/javascript/functions/callback-functions" },
  { label: "Array Methods", href: "/javascript/arrays" },
  { label: "Pure Functions", href: "/javascript/functions/pure-functions" },
];

export default function JavascriptHigherOrderFunctionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Higher-Order Functions"
      intro={[
        "Higher-order functions work with other functions as inputs or outputs.",
        "They are central to functional programming and modern JavaScript style.",
      ]}
      why={[
        "They let you build reusable behaviors and avoid repetitive loops.",
        "Understanding them makes callbacks, array methods, and composition easier.",
      ]}
      syntax={["function apply(value, fn) { ... }", "const factory = () => (value) => value;"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const nums = [1, 2, 3];\nconst doubled = [];\nfor (const n of nums) {\n  doubled.push(n * 2);\n}`,
        with: `const nums = [1, 2, 3];\nconst doubled = nums.map((n) => n * 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What defines a higher-order function?", a: "Taking a function or returning one." },
        { q: "Give an example of HOF in JS.", a: "Array methods like map or filter." },
        { q: "Why use function factories?", a: "To create specialized functions with shared configuration." },
      ]}
      practice={{
        prompt: "Practice: Write a function that accepts a number and a formatter callback.",
        starterCode: `// TODO: function formatNumber(n, formatter)\n`,
        solution: `function formatNumber(n, formatter) {\n  return formatter(n);\n}\n\nconsole.log(formatNumber(12.3, (v) => v.toFixed(1)));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run HOF Demo",
        description: "Try passing different callbacks to see how results change.",
      }}
    />
  );
}
