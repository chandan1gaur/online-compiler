import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Arrow Functions: Syntax and Examples",
  description: "Learn JavaScript arrow functions with syntax, examples, and this binding behavior.",
  keywords: ["arrow functions", "javascript arrow", "this binding"],
  openGraph: {
    title: "JavaScript Arrow Functions",
    description: "Learn JavaScript arrow functions with syntax, examples, and this binding behavior.",
    url: "/javascript/functions/arrow-functions",
    type: "article",
    images: ["/og-arrow-functions.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Arrow Functions",
    description: "Learn JavaScript arrow functions with syntax, examples, and this binding behavior.",
    images: ["/og-arrow-functions.svg"],
  },
  alternates: { canonical: "/javascript/functions/arrow-functions" },
};

const sections = [
  {
    heading: "Concise Syntax",
    paragraphs: [
      "Arrow functions are a shorter syntax for function expressions.",
      "They are great for small callbacks and inline logic.",
    ],
  },
  {
    heading: "Lexical this",
    paragraphs: [
      "Arrow functions do not have their own this.",
      "They inherit this from the surrounding scope, which is useful in callbacks.",
    ],
  },
  {
    heading: "Implicit Returns",
    paragraphs: [
      "Single-expression arrow functions can return without the return keyword.",
      "Use parentheses when returning an object literal.",
    ],
  },
];

const examples = [
  {
    title: "Basic arrow",
    code: `const add = (a, b) => a + b;\n\nconsole.log(add(2, 3));`,
    explanation: "Simple one-line function with implicit return.",
  },
  {
    title: "Single parameter",
    code: `const square = n => n * n;\n\nconsole.log(square(5));`,
    explanation: "Parentheses are optional for a single parameter.",
  },
  {
    title: "Returning objects",
    code: `const makeUser = (name) => ({ name });\n\nconsole.log(makeUser("Ava"));`,
    explanation: "Wrap object literals in parentheses.",
  },
  {
    title: "Lexical this",
    code: `const team = {\n  name: "Alpha",\n  members: ["A", "B"],\n  list() {\n    return this.members.map((m) => this.name + "-" + m);\n  }\n};\n\nconsole.log(team.list());`,
    explanation: "Arrow functions keep this from the outer scope.",
  },
];

const mistakes = [
  { title: "Using arrow as method", fix: "Arrow functions should not be used as object methods when you need this." },
  { title: "Forgetting parentheses for object return", fix: "Wrap object literals in parentheses." },
  { title: "Overusing arrows", fix: "Use regular functions when readability is better." },
];

const faqs = [
  { q: "Do arrow functions have their own this?", a: "No, they inherit this from the surrounding scope." },
  { q: "Can arrow functions be used as constructors?", a: "No, they cannot be used with new." },
  { q: "When should I use arrow functions?", a: "For short callbacks and when you want lexical this." },
];

const related = [
  { label: "Function Expression", href: "/javascript/functions/function-expression" },
  { label: "Callbacks", href: "/javascript/functions/callback-functions" },
  { label: "this Keyword", href: "/javascript/this" },
];

export default function JavascriptArrowFunctionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Arrow Functions"
      intro={[
        "Arrow functions provide a shorter syntax for function expressions.",
        "They are especially useful for callbacks and inline logic.",
      ]}
      why={[
        "Concise code improves readability, and lexical this avoids common bugs in callbacks.",
        "Knowing their limitations helps you choose the right function style.",
      ]}
      syntax={["(params) => expression", "(params) => { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const add = function(a, b) {\n  return a + b;\n};`,
        with: `const add = (a, b) => a + b;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is lexical this?", a: "Arrow functions inherit this from the outer scope." },
        { q: "Can arrow functions be constructors?", a: "No, they do not have a prototype and cannot be used with new." },
        { q: "When should you avoid arrow functions?", a: "When you need a method with its own this value." },
      ]}
      practice={{
        prompt: "Practice: Convert a function expression into an arrow function.",
        starterCode: `const multiply = function(a, b) {\n  return a * b;\n};\n// TODO: convert to arrow\n`,
        solution: `const multiply = (a, b) => a * b;\nconsole.log(multiply(3, 4));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Arrow Demo",
        description: "Try using arrow functions in different callbacks.",
      }}
    />
  );
}
