import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Functions: Complete Beginner Guide",
  description:
    "Learn JavaScript functions: declarations, expressions, arrow functions, parameters, callbacks, higher-order functions, and more with examples.",
  keywords: [
    "javascript functions",
    "function declaration",
    "function expression",
    "arrow functions",
    "parameters",
    "callbacks",
    "higher order functions",
  ],
  openGraph: {
    title: "JavaScript Functions",
    description:
      "Learn JavaScript functions: declarations, expressions, arrow functions, parameters, callbacks, and more with examples.",
    url: "/javascript/functions",
    type: "article",
    images: ["/og-functions.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Functions",
    description:
      "Learn JavaScript functions: declarations, expressions, arrow functions, parameters, callbacks, and more with examples.",
    images: ["/og-functions.svg"],
  },
  alternates: { canonical: "/javascript/functions" },
};

const sections = [
  {
    heading: "Reusable Logic",
    paragraphs: [
      "Functions let you package logic into reusable blocks. You can call them whenever you need the same behavior.",
      "This keeps code DRY and easier to maintain.",
    ],
    bullets: [
      "Use functions for repeated tasks.",
      "Name functions clearly to express intent.",
      "Keep functions small and focused.",
    ],
  },
  {
    heading: "Inputs and Outputs",
    paragraphs: [
      "Parameters are inputs to a function. Return values are outputs.",
      "Clear inputs and outputs make functions predictable and testable.",
    ],
  },
  {
    heading: "Function Styles",
    paragraphs: [
      "JavaScript supports declarations, expressions, arrow functions, and IIFEs.",
      "Each style has different use cases for readability and context binding.",
    ],
  },
  {
    heading: "Callbacks and Higher-Order Functions",
    paragraphs: [
      "Callbacks let functions accept other functions as arguments.",
      "Higher-order functions return functions or accept them, enabling powerful patterns.",
    ],
  },
];

const examples = [
  {
    title: "Basic function",
    code: `function greet(name) {\n  return "Hello " + name;\n}\n\nconsole.log(greet("Ava"));`,
    explanation: "Define a function once and reuse it.",
  },
  {
    title: "Arrow function",
    code: `const add = (a, b) => a + b;\n\nconsole.log(add(2, 3));`,
    explanation: "Arrow functions are concise for small logic.",
  },
  {
    title: "Callback",
    code: `function run(task) {\n  task();\n}\n\nrun(() => console.log("Done"));`,
    explanation: "Pass functions as arguments for flexible behavior.",
  },
  {
    title: "Higher-order",
    code: `function makeMultiplier(factor) {\n  return (value) => value * factor;\n}\n\nconst double = makeMultiplier(2);\nconsole.log(double(5));`,
    explanation: "Return functions to create reusable behaviors.",
  },
];

const mistakes = [
  { title: "Doing too much in one function", fix: "Split logic into smaller, focused functions." },
  { title: "Ignoring return values", fix: "Return values make functions easier to compose." },
  { title: "Overusing global variables", fix: "Pass data via parameters instead of globals." },
  { title: "Confusing function styles", fix: "Choose the style that matches your use case and stick to it." },
];

const faqs = [
  { q: "What is a function?", a: "A reusable block of code that can take inputs and return outputs." },
  { q: "When should I use arrow functions?", a: "When you need short functions or lexical this binding." },
  { q: "What is a callback?", a: "A function passed as an argument to be called later." },
];

const related = [
  { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
  { label: "Function Expression", href: "/javascript/functions/function-expression" },
  { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
  { label: "Parameters and Arguments", href: "/javascript/functions/parameters-arguments" },
  { label: "Callbacks", href: "/javascript/functions/callback-functions" },
  { label: "Recursion", href: "/javascript/functions/recursion" },
];

export default function JavascriptFunctionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Functions"
      intro={[
        "Functions are the building blocks of JavaScript programs.",
        "They let you organize logic, reuse behavior, and write cleaner code.",
      ]}
      why={[
        "Without functions, code becomes repetitive and difficult to maintain.",
        "Functions help you structure programs and make your logic reusable.",
      ]}
      syntax={[
        "function name(params) { ... }",
        "const name = function(params) { ... }",
        "const name = (params) => { ... }",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const price1 = 10 * 1.18;\nconst price2 = 20 * 1.18;`,
        with: `function addTax(amount) {\n  return amount * 1.18;\n}\n\nconst price1 = addTax(10);\nconst price2 = addTax(20);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the difference between parameters and arguments?", a: "Parameters are named inputs; arguments are actual values passed in." },
        { q: "What is a higher-order function?", a: "A function that takes or returns another function." },
        { q: "What is recursion?", a: "A function calling itself to solve a smaller version of a problem." },
      ]}
      practice={{
        prompt: "Practice: Write a function that takes a price and a tax rate and returns the total.",
        starterCode: `// TODO: implement addTax\n`,
        solution: `function addTax(price, rate) {\n  return price + price * rate;\n}\n\nconsole.log(addTax(100, 0.18));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Function Demo",
        description: "Try calling the function with different names and see the output.",
      }}
    />
  );
}
