import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Recursion: Functions Calling Themselves",
  description: "Learn recursion in JavaScript with base cases, examples, and best practices.",
  keywords: ["recursion", "javascript functions", "base case"],
  openGraph: {
    title: "JavaScript Recursion",
    description: "Learn recursion in JavaScript with base cases, examples, and best practices.",
    url: "/javascript/functions/recursion",
    type: "article",
    images: ["/og-recursion.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Recursion",
    description: "Learn recursion in JavaScript with base cases, examples, and best practices.",
    images: ["/og-recursion.svg"],
  },
  alternates: { canonical: "/javascript/functions/recursion" },
};

const sections = [
  {
    heading: "Base Case",
    paragraphs: [
      "Recursion is when a function calls itself.",
      "A base case stops the recursion to prevent infinite calls.",
    ],
  },
  {
    heading: "Divide and Conquer",
    paragraphs: [
      "Recursion solves problems by reducing them into smaller versions.",
      "Tree traversal, factorial, and Fibonacci are classic examples.",
    ],
  },
  {
    heading: "Performance Considerations",
    paragraphs: [
      "Recursion can be less efficient due to call stack overhead.",
      "Use iteration for simple loops, recursion for hierarchical structures.",
    ],
  },
];

const examples = [
  {
    title: "Factorial",
    code: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5));`,
    explanation: "Base case stops at n <= 1.",
  },
  {
    title: "Sum array",
    code: `function sum(arr, i = 0) {\n  if (i === arr.length) return 0;\n  return arr[i] + sum(arr, i + 1);\n}\n\nconsole.log(sum([1, 2, 3]));`,
    explanation: "Recursively accumulate array values.",
  },
  {
    title: "Countdown",
    code: `function countdown(n) {\n  if (n === 0) return;\n  console.log(n);\n  countdown(n - 1);\n}\n\ncountdown(3);`,
    explanation: "Reduce the input until the base case.",
  },
  {
    title: "Tree traversal",
    code: `const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };\n\nfunction walk(node) {\n  console.log(node.value);\n  if (!node.children) return;\n  node.children.forEach(walk);\n}\n\nwalk(tree);`,
    explanation: "Recursion fits nested structures naturally.",
  },
];

const mistakes = [
  { title: "Missing base case", fix: "Always define a clear stopping condition." },
  { title: "Stack overflow", fix: "Avoid deep recursion or use iteration where possible." },
  { title: "Mutating shared state", fix: "Prefer passing data through parameters." },
];

const faqs = [
  { q: "What is recursion?", a: "A function calling itself to solve smaller subproblems." },
  { q: "Why is a base case important?", a: "It stops recursion and prevents infinite calls." },
  { q: "When should I avoid recursion?", a: "For very deep loops or performance-critical paths." },
];

const related = [
  { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
  { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
  { label: "Data Structures", href: "/javascript/data-structures" },
];

export default function JavascriptRecursionPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Recursion"
      intro={[
        "Recursion is a technique where a function calls itself to solve a smaller version of a problem.",
        "It is powerful for nested structures and divide-and-conquer problems.",
      ]}
      why={[
        "Some problems are naturally recursive, such as tree traversal and hierarchical data.",
        "Understanding recursion helps you choose the right approach for complex tasks.",
      ]}
      syntax={["function fn(n) {", "  if (base) return value;", "  return fn(n - 1);", "}"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let total = 0;\nfor (let i = 1; i <= 5; i++) {\n  total *= i;\n}`,
        with: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is a base case?", a: "The condition that stops recursion." },
        { q: "Why can recursion be slow?", a: "Each call adds stack overhead." },
        { q: "When is recursion useful?", a: "For trees, graphs, and divide-and-conquer problems." },
      ]}
      practice={{
        prompt: "Practice: Write a recursive function to compute the sum of numbers from 1 to n.",
        starterCode: `// TODO: sumTo(n)\n`,
        solution: `function sumTo(n) {\n  if (n <= 1) return 1;\n  return n + sumTo(n - 1);\n}\n\nconsole.log(sumTo(4));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Recursion Demo",
        description: "Try different values to see recursive calls in action.",
      }}
    />
  );
}
