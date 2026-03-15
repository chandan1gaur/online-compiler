import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Function Declaration: Syntax and Examples",
  description: "Learn JavaScript function declarations with syntax, hoisting behavior, and examples.",
  keywords: ["function declaration", "javascript functions", "hoisting"],
  openGraph: {
    title: "JavaScript Function Declaration",
    description: "Learn JavaScript function declarations with syntax, hoisting behavior, and examples.",
    url: "/javascript/functions/function-declaration",
    type: "article",
    images: ["/og-function-declaration.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Function Declaration",
    description: "Learn JavaScript function declarations with syntax, hoisting behavior, and examples.",
    images: ["/og-function-declaration.svg"],
  },
  alternates: { canonical: "/javascript/functions/function-declaration" },
};

const sections = [
  {
    heading: "Named Functions",
    paragraphs: [
      "Function declarations define a named function using the function keyword.",
      "They are hoisted, so you can call them before the declaration.",
    ],
  },
  {
    heading: "Hoisting",
    paragraphs: [
      "Function declarations are hoisted with their bodies.",
      "This means the function is available anywhere in its scope.",
    ],
  },
  {
    heading: "Best Uses",
    paragraphs: [
      "Use declarations for core, reusable logic and public APIs.",
      "They are easier to debug because they have stable names.",
    ],
  },
];

const examples = [
  {
    title: "Basic declaration",
    code: `function greet(name) {\n  return "Hello " + name;\n}\n\nconsole.log(greet("Riya"));`,
    explanation: "Declare a function with a name and call it later.",
  },
  {
    title: "Hoisting example",
    code: `console.log(add(2, 3));\n\nfunction add(a, b) {\n  return a + b;\n}`,
    explanation: "Function declarations can be used before they appear in code.",
  },
  {
    title: "Reuse logic",
    code: `function formatPrice(amount) {\n  return "$" + amount.toFixed(2);\n}\n\nconsole.log(formatPrice(99));`,
    explanation: "Use declarations for reusable formatting logic.",
  },
  {
    title: "Return early",
    code: `function isAdult(age) {\n  if (age < 18) return false;\n  return true;\n}\n\nconsole.log(isAdult(20));`,
    explanation: "Return early to keep logic simple.",
  },
];

const mistakes = [
  { title: "Assuming all functions are hoisted", fix: "Only function declarations are hoisted, not expressions." },
  { title: "Using too many globals", fix: "Pass data as parameters instead of relying on globals." },
  { title: "Long functions", fix: "Keep functions small and focused." },
];

const faqs = [
  { q: "Are function declarations hoisted?", a: "Yes, the entire declaration is hoisted." },
  { q: "Can I redeclare a function?", a: "Yes, later declarations overwrite earlier ones in the same scope." },
  { q: "When should I use declarations?", a: "For reusable or core functions that you want available throughout a scope." },
];

const related = [
  { label: "Function Expression", href: "/javascript/functions/function-expression" },
  { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
  { label: "Hoisting", href: "/javascript/variables/hoisting" },
];

export default function JavascriptFunctionDeclarationPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Function Declaration"
      intro={[
        "Function declarations define named functions with the function keyword.",
        "They are hoisted, which means you can call them before they are defined.",
      ]}
      why={[
        "Hoisted functions are convenient for organizing code and separating logic from usage.",
        "They also produce clearer stack traces because the function has a name.",
      ]}
      syntax={["function name(params) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const add = function(a, b) {\n  return a + b;\n};`,
        with: `function add(a, b) {\n  return a + b;\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is hoisting?", a: "JavaScript moves declarations to the top of their scope before execution." },
        { q: "Are function declarations hoisted?", a: "Yes, both the name and body are hoisted." },
        { q: "Why use function declarations?", a: "They provide named, reusable functions that can be called anywhere in scope." },
      ]}
      practice={{
        prompt: "Practice: Write a function declaration that calculates the area of a rectangle.",
        starterCode: `// TODO: function area(width, height)\n`,
        solution: `function area(width, height) {\n  return width * height;\n}\n\nconsole.log(area(5, 3));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Declaration Demo",
        description: "Try calling the function before and after the declaration.",
      }}
    />
  );
}
