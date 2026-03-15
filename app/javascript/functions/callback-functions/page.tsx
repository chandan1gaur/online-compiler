import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Callback Functions",
  description: "Learn callback functions in JavaScript with examples, async use cases, and best practices.",
  keywords: ["callback functions", "javascript callbacks", "async"],
  openGraph: {
    title: "JavaScript Callback Functions",
    description: "Learn callback functions in JavaScript with examples, async use cases, and best practices.",
    url: "/javascript/functions/callback-functions",
    type: "article",
    images: ["/og-callbacks.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Callback Functions",
    description: "Learn callback functions in JavaScript with examples, async use cases, and best practices.",
    images: ["/og-callbacks.svg"],
  },
  alternates: { canonical: "/javascript/functions/callback-functions" },
};

const sections = [
  {
    heading: "Functions as Arguments",
    paragraphs: [
      "A callback is a function passed into another function.",
      "The receiver decides when to call it.",
    ],
  },
  {
    heading: "Async Patterns",
    paragraphs: [
      "Callbacks are common in asynchronous code like timers and event handlers.",
      "They allow you to run logic after an async operation completes.",
    ],
  },
  {
    heading: "Avoid Callback Hell",
    paragraphs: [
      "Deeply nested callbacks can hurt readability.",
      "Consider promises or async/await for complex flows.",
    ],
  },
];

const examples = [
  {
    title: "Simple callback",
    code: `function run(task) {\n  task();\n}\n\nrun(() => console.log("Done"));`,
    explanation: "Pass a function to be called later.",
  },
  {
    title: "Array callbacks",
    code: `const nums = [1, 2, 3];\nconst doubled = nums.map((n) => n * 2);\n\nconsole.log(doubled);`,
    explanation: "Array methods rely heavily on callbacks.",
  },
  {
    title: "setTimeout callback",
    code: `setTimeout(() => {\n  console.log("Later");\n}, 500);`,
    explanation: "Callbacks run after async timers.",
  },
  {
    title: "Callback with data",
    code: `function fetchData(done) {\n  const data = { id: 1 };\n  done(data);\n}\n\nfetchData((data) => console.log(data.id));`,
    explanation: "Callbacks can receive data from the caller.",
  },
];

const mistakes = [
  { title: "Too many nested callbacks", fix: "Refactor into named functions or use async/await." },
  { title: "Forgetting error handling", fix: "Use error-first callbacks or try/catch where appropriate." },
  { title: "Calling callback multiple times", fix: "Ensure the callback is called once per operation." },
];

const faqs = [
  { q: "What is a callback?", a: "A function passed to another function to be executed later." },
  { q: "Are callbacks only for async?", a: "No, they are also used for sync patterns like array methods." },
  { q: "What is callback hell?", a: "Nested callbacks that are hard to read and maintain." },
];

const related = [
  { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
  { label: "Promises", href: "/javascript/promises" },
  { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
];

export default function JavascriptCallbackFunctionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Callback Functions"
      intro={[
        "A callback is a function passed into another function to be called later.",
        "They are essential for async operations and array methods.",
      ]}
      why={[
        "Callbacks let you control when code runs, which is vital for events and async tasks.",
        "Understanding callbacks is a foundation for promises and async/await.",
      ]}
      syntax={["function doWork(callback) { ... }", "doWork(() => { ... })"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const nums = [1, 2, 3];\nconst doubled = [];\nfor (const n of nums) {\n  doubled.push(n * 2);\n}`,
        with: `const nums = [1, 2, 3];\nconst doubled = nums.map((n) => n * 2);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is a callback function?", a: "A function passed to another function to be executed later." },
        { q: "Why are callbacks used in async code?", a: "They allow logic to run after an async task completes." },
        { q: "How do you avoid callback hell?", a: "Use named functions or switch to promises and async/await." },
      ]}
      practice={{
        prompt: "Practice: Write a function that accepts a callback and runs it twice.",
        starterCode: `// TODO: function repeat(fn)\n`,
        solution: `function repeat(fn) {\n  fn();\n  fn();\n}\n\nrepeat(() => console.log("Hi"));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Callback Demo",
        description: "Try passing different callbacks to the function.",
      }}
    />
  );
}
