import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Hoisting - Complete Guide to Variable and Function Hoisting",
  description:
    "Master JavaScript hoisting with comprehensive guide covering var, let, const, functions, temporal dead zone, and best practices for predictable code.",
  keywords: [
    "javascript hoisting",
    "temporal dead zone",
    "javascript var hoisting",
    "let const hoisting",
    "function hoisting",
    "javascript scope",
    "hoisting explained",
    "javascript variables",
    "tdz javascript",
    "hoisting interview questions",
  ],
  openGraph: {
    title: "JavaScript Hoisting - Complete Guide to Variable and Function Hoisting",
    description:
      "Master JavaScript hoisting with comprehensive guide covering var, let, const, functions, temporal dead zone, and best practices.",
    url: "/javascript/variables/hoisting",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Hoisting Tutorial",
    description: "Complete guide to understanding JavaScript hoisting - variables, functions, and temporal dead zone.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/variables/hoisting" },
};

const sections = [
  {
    heading: "What is Hoisting?",
    paragraphs: [
      "Hoisting moves declarations to the top of their scope during compilation.",
      "Only declarations are hoisted, not assignments, which explains many surprises.",
      "Modern JavaScript uses let/const and TDZ to make hoisting safer and more predictable.",
    ],
  },
  {
    heading: "var vs let vs const",
    paragraphs: [
      "var is hoisted and initialized to undefined, so it can be read before assignment.",
      "let and const are hoisted but inaccessible until declared (temporal dead zone).",
      "const must be initialized immediately and cannot be reassigned.",
    ],
  },
  {
    heading: "Function Hoisting",
    paragraphs: [
      "Function declarations are fully hoisted, so you can call them before definition.",
      "Function expressions follow variable hoisting rules and are not callable before assignment.",
    ],
  },
  {
    heading: "Common Pitfalls",
    paragraphs: [
      "Using var in loops causes closure bugs; let fixes this by creating per-iteration bindings.",
      "Accessing let/const before declaration throws ReferenceError because of TDZ.",
      "Multiple function declarations with the same name overwrite earlier ones.",
    ],
  },
];

const examples = [
  {
    title: "Basic Hoisting Concept",
    code: `console.log(message); // undefined\nvar message = "Hello World";`,
    explanation: "Declarations are hoisted, but assignments are not.",
  },
  {
    title: "var vs let (TDZ)",
    code: `console.log(a); // undefined\nvar a = 1;\n\n// console.log(b); // ReferenceError\nlet b = 2;`,
    explanation: "var is initialized to undefined; let is in TDZ until declared.",
  },
  {
    title: "Function Declaration Hoisting",
    code: `greet("World");\n\nfunction greet(name) {\n  console.log("Hello, " + name + "!");\n}`,
    explanation: "Function declarations are fully hoisted.",
  },
  {
    title: "Loop Pitfall",
    code: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 100);\n}`,
    explanation: "var shares one binding; let creates per-iteration bindings.",
  },
  {
    title: "Function Expression Hoisting",
    code: `// sayHi(); // TypeError\nvar sayHi = function() {\n  console.log("Hi!");\n};`,
    explanation: "Function expressions are not hoisted with their implementation.",
  },
];

const mistakes = [
  { title: "Using var in modern code", fix: "Prefer let/const to avoid hoisting confusion." },
  { title: "Accessing let/const early", fix: "Declare variables before use to avoid TDZ errors." },
  { title: "Assuming function expressions hoist", fix: "Only function declarations are fully hoisted." },
];

const faqs = [
  {
    q: "What is hoisting in JavaScript?",
    a: "Hoisting moves declarations to the top of their scope during compilation.",
  },
  {
    q: "What is the temporal dead zone?",
    a: "It is the time before let/const declaration when the variable exists but cannot be accessed.",
  },
  {
    q: "Are function expressions hoisted?",
    a: "No. Only function declarations are hoisted with their body.",
  },
  {
    q: "Why avoid var?",
    a: "var is function-scoped and hoisted to undefined, which can cause bugs.",
  },
];

export default function HoistingPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Hoisting — Complete Guide to Variables and Functions"
      intro={[
        "Hoisting moves declarations to the top of their scope during compilation.",
        "Understanding how var, let, const, and functions behave prevents confusing runtime bugs.",
      ]}
      why={[
        "Hoisting explains many interview questions and surprising behaviors in JavaScript.",
        "Knowing TDZ and function hoisting leads to safer, more predictable code.",
      ]}
      syntax={[
        "console.log(name); // undefined",
        "var name = \"Asha\";",
        "// let/const throw before declaration",
      ]}
      sections={sections}
      examples={examples}
      mistakes={mistakes}
      faqs={faqs}
      interviewQuestions={[
        { q: "What is hoisting?", a: "Hoisting moves declarations to the top of scope during compilation." },
        { q: "How do let and const differ from var?", a: "let/const are in TDZ until declared; var is initialized to undefined." },
        { q: "Are function expressions hoisted?", a: "No. Only function declarations are fully hoisted." },
      ]}
      comparison={{
        without: `// var hoisted\nconsole.log(a);\nvar a = 1;`,
        with: `// let in TDZ\n// console.log(b);\nlet b = 1;`,
      }}
      practice={{
        prompt: "Practice: Predict the output and then run the code.",
        starterCode: `console.log(x);\nvar x = 10;\n\n// console.log(y);\nlet y = 20;`,
        solution: `// Output:\n// undefined\n// ReferenceError for y if uncommented`,
      }}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Hoisting Demo",
        description: "Run the basic hoisting example and observe the output.",
      }}
      related={[
        { label: "Variables", href: "/javascript/variables" },
        { label: "var, let, const", href: "/javascript/variables/var-let-const" },
        { label: "Scope", href: "/javascript/variables/scope" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
      ]}
    />
  );
}
