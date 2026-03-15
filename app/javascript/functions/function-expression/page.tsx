import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Function Expression: Syntax and Examples",
  description: "Learn JavaScript function expressions with syntax, use cases, and differences from declarations.",
  keywords: ["function expression", "javascript functions", "anonymous functions"],
  openGraph: {
    title: "JavaScript Function Expression",
    description: "Learn JavaScript function expressions with syntax, use cases, and differences from declarations.",
    url: "/javascript/functions/function-expression",
    type: "article",
    images: ["/og-function-expression.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Function Expression",
    description: "Learn JavaScript function expressions with syntax, use cases, and differences from declarations.",
    images: ["/og-function-expression.svg"],
  },
  alternates: { canonical: "/javascript/functions/function-expression" },
};

const sections = [
  {
    heading: "Functions as Values",
    paragraphs: [
      "Function expressions assign a function to a variable.",
      "They are not hoisted like declarations, so you must define them before use.",
    ],
  },
  {
    heading: "Anonymous vs Named",
    paragraphs: [
      "Expressions can be anonymous or named for better stack traces.",
      "Named expressions help debugging without adding a new variable.",
    ],
  },
  {
    heading: "Use Cases",
    paragraphs: [
      "Use function expressions for callbacks, configuration, and conditional assignments.",
      "They are common in event handlers and functional patterns.",
    ],
  },
];

const examples = [
  {
    title: "Basic expression",
    code: `const greet = function(name) {\n  return "Hello " + name;\n};\n\nconsole.log(greet("Sam"));`,
    explanation: "Assign a function to a variable.",
  },
  {
    title: "Named expression",
    code: `const factorial = function fact(n) {\n  return n <= 1 ? 1 : n * fact(n - 1);\n};\n\nconsole.log(factorial(4));`,
    explanation: "Named expressions help recursion and debugging.",
  },
  {
    title: "Conditional assignment",
    code: `const mode = "compact";\nconst formatter = mode === "compact"\n  ? function(value) { return value.toFixed(0); }\n  : function(value) { return value.toFixed(2); };\n\nconsole.log(formatter(12.345));`,
    explanation: "Assign different functions based on conditions.",
  },
  {
    title: "Callback usage",
    code: `const nums = [1, 2, 3];\nconst doubled = nums.map(function(n) {\n  return n * 2;\n});\n\nconsole.log(doubled);`,
    explanation: "Function expressions are common in callbacks.",
  },
];

const mistakes = [
  { title: "Calling before definition", fix: "Function expressions are not hoisted like declarations." },
  { title: "Overusing anonymous functions", fix: "Name functions for better debugging when appropriate." },
  { title: "Mixing styles in one file", fix: "Pick a consistent style for readability." },
];

const faqs = [
  { q: "Are function expressions hoisted?", a: "The variable is hoisted, but the function value is not." },
  { q: "Why use function expressions?", a: "They are flexible and work well for callbacks and conditional assignments." },
  { q: "Can expressions be named?", a: "Yes, named expressions help debugging and recursion." },
];

const related = [
  { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
  { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
  { label: "Callbacks", href: "/javascript/functions/callback-functions" },
];

export default function JavascriptFunctionExpressionPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Function Expression"
      intro={[
        "A function expression assigns a function to a variable.",
        "Unlike declarations, expressions are not hoisted with their bodies.",
      ]}
      why={[
        "Function expressions give you flexibility to pass functions around and assign them conditionally.",
        "They are especially common in callbacks and higher-order patterns.",
      ]}
      syntax={["const name = function(params) { ... };"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `function add(a, b) {\n  return a + b;\n}`,
        with: `const add = function(a, b) {\n  return a + b;\n};`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the main difference from declarations?", a: "Function expressions are not hoisted with their bodies." },
        { q: "Why use named function expressions?", a: "They improve stack traces and allow recursion." },
        { q: "When are expressions useful?", a: "For callbacks, event handlers, and conditional assignments." },
      ]}
      practice={{
        prompt: "Practice: Create a function expression that returns the square of a number.",
        starterCode: `// TODO: const square = function(n) { ... }\n`,
        solution: `const square = function(n) {\n  return n * n;\n};\n\nconsole.log(square(6));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Expression Demo",
        description: "Try calling the function after definition with different inputs.",
      }}
    />
  );
}
