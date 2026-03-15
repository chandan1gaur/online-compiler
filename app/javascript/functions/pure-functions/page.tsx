import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Pure Functions",
  description: "Learn what pure functions are, why they matter, and how to write them in JavaScript.",
  keywords: ["pure functions", "side effects", "javascript functions"],
  openGraph: {
    title: "JavaScript Pure Functions",
    description: "Learn what pure functions are, why they matter, and how to write them in JavaScript.",
    url: "/javascript/functions/pure-functions",
    type: "article",
    images: ["/og-pure-functions.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Pure Functions",
    description: "Learn what pure functions are, why they matter, and how to write them in JavaScript.",
    images: ["/og-pure-functions.svg"],
  },
  alternates: { canonical: "/javascript/functions/pure-functions" },
};

const sections = [
  {
    heading: "Deterministic Output",
    paragraphs: [
      "A pure function always returns the same output for the same input.",
      "It does not rely on or change external state.",
    ],
  },
  {
    heading: "No Side Effects",
    paragraphs: [
      "Pure functions do not modify global variables, DOM, or external data.",
      "This makes them easy to test and reason about.",
    ],
  },
  {
    heading: "Why It Matters",
    paragraphs: [
      "Pure functions are predictable and safe to reuse.",
      "They are ideal for calculations, transformations, and utilities.",
    ],
  },
];

const examples = [
  {
    title: "Pure function",
    code: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(2, 3));`,
    explanation: "No external state, same output for same inputs.",
  },
  {
    title: "Impure function",
    code: `let total = 0;\nfunction addToTotal(amount) {\n  total += amount;\n  return total;\n}`,
    explanation: "This function changes external state, so it is impure.",
  },
  {
    title: "Pure transformation",
    code: `function toUpper(words) {\n  return words.map((w) => w.toUpperCase());\n}\n\nconsole.log(toUpper(["a", "b"]));`,
    explanation: "Input array is not modified, output is new.",
  },
  {
    title: "Avoid side effects",
    code: `function formatPrice(amount) {\n  return "$" + amount.toFixed(2);\n}\n\nconsole.log(formatPrice(99));`,
    explanation: "Pure utility functions are easy to reuse.",
  },
];

const mistakes = [
  { title: "Mutating inputs", fix: "Return new values instead of modifying parameters." },
  { title: "Using global state", fix: "Pass all required data via parameters." },
  { title: "Hidden side effects", fix: "Avoid logging or IO in functions meant to be pure." },
];

const faqs = [
  { q: "What makes a function pure?", a: "Same inputs produce same output and no side effects." },
  { q: "Are pure functions always better?", a: "Not always, but they are easier to test and reuse." },
  { q: "Is console.log a side effect?", a: "Yes, it interacts with external state." },
];

const related = [
  { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
  { label: "Immutability", href: "/javascript/immutability" },
  { label: "Array Methods", href: "/javascript/arrays" },
];

export default function JavascriptPureFunctionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Pure Functions"
      intro={[
        "Pure functions are predictable: same input, same output, no side effects.",
        "They are the foundation of reliable and testable code.",
      ]}
      why={[
        "When functions are pure, debugging becomes easier because behavior is consistent.",
        "They are also safer to reuse and refactor.",
      ]}
      syntax={["function fn(input) { return output; }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let total = 0;\nfunction add(amount) {\n  total += amount;\n  return total;\n}`,
        with: `function add(total, amount) {\n  return total + amount;\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is a pure function?", a: "It returns the same result for the same input and has no side effects." },
        { q: "Why are pure functions easier to test?", a: "They do not depend on external state." },
        { q: "Give an example of a side effect.", a: "Modifying a global variable or logging to the console." },
      ]}
      practice={{
        prompt: "Practice: Write a pure function that converts Celsius to Fahrenheit.",
        starterCode: `// TODO: function toF(c)\n`,
        solution: `function toF(c) {\n  return (c * 9) / 5 + 32;\n}\n\nconsole.log(toF(0));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Pure Demo",
        description: "Try calling the function multiple times with the same input.",
      }}
    />
  );
}
