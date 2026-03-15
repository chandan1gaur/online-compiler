import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Variables: var vs let vs const",
  description:
    "Deep tutorial on JavaScript variables, scope, hoisting, and temporal dead zone with practical examples and FAQs.",
  keywords: [
    "javascript variables",
    "var let const",
    "variable scope",
    "hoisting",
    "js tutorial",
  ],
  alternates: { canonical: "/javascript/variables" },
};

const sections = [
  {
    heading: "var, let, const: Declaration Keywords",
    paragraphs: [
      "JavaScript provides three ways to declare variables, each with different scoping and mutation rules.",
      "var is function-scoped and can be redeclared; let is block-scoped and reassignable; const is block-scoped and cannot be reassigned.",
      "Use const by default for immutable bindings, let when reassignment is needed, and avoid var in modern code.",
    ],
  },
  {
    heading: "Scope and Lifetime",
    paragraphs: [
      "Scope defines where a variable is accessible; lifetime describes how long it exists in memory.",
      "var is function-scoped and can leak out of blocks. let and const are block-scoped and stay inside their braces.",
      "Block scope prevents accidental leaks and improves predictability, especially in loops and conditionals.",
    ],
  },
  {
    heading: "Hoisting and Temporal Dead Zone",
    paragraphs: [
      "Hoisting moves declarations to the top of their scope, but not initializations.",
      "var is hoisted and initialized to undefined, while let/const are hoisted but inaccessible until declared (TDZ).",
      "TDZ prevents early access errors and helps catch bugs.",
    ],
  },
  {
    heading: "Reassignment and Mutation",
    paragraphs: [
      "Reassignment changes the binding; mutation changes the contents of an object or array.",
      "const prevents reassignment but still allows mutation of object properties and array items.",
      "For deep immutability, use Object.freeze or immutable update patterns.",
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use const by default, let only when reassignment is necessary, and avoid var.",
      "Declare variables close to usage and use clear, descriptive names.",
      "Keep scopes small to reduce unexpected interactions.",
    ],
  },
];

const examples = [
  {
    title: "Variable Declaration Differences",
    code: `// var - function scope, redeclarable
if (true) {
  var x = 10;
}
console.log(x); // 10 (leaks outside block)

// let - block scope
if (true) {
  let y = 20;
}
// console.log(y); // ReferenceError

// const - immutable binding
const z = 30;
// z = 40; // TypeError`,
    explanation: "var escapes blocks; let and const respect block boundaries.",
  },
  {
    title: "Scope Differences",
    code: `function testScope() {
  if (true) {
    var functionScoped = "visible in function";
    let blockScoped = "only in this block";
    const alsoBlockScoped = "also only here";
  }

  console.log(functionScoped); // works
  // console.log(blockScoped); // ReferenceError
  // console.log(alsoBlockScoped); // ReferenceError
}

testScope();`,
    explanation: "var is function-scoped; let and const are block-scoped.",
  },
  {
    title: "Hoisting Behavior",
    code: `// var hoisting
console.log(a); // undefined
var a = 10;

// let/const temporal dead zone
// console.log(b); // ReferenceError
let b = 20;

// console.log(c); // ReferenceError
const c = 30;`,
    explanation: "var is hoisted with undefined; let/const create a temporal dead zone.",
  },
  {
    title: "const with Objects",
    code: `const config = { theme: "light" };
// config = { theme: "dark" }; // TypeError

config.theme = "dark"; // allowed
console.log(config.theme);`,
    explanation: "const prevents reassignment but allows object mutation.",
  },
];

const mistakes = [
  {
    title: "Using var in loops",
    fix: "Use let for loop variables to avoid closure bugs.",
  },
  {
    title: "Assuming const means immutable",
    fix: "const prevents reassignment, not mutation. Use Object.freeze for immutability.",
  },
  {
    title: "Accessing variables in TDZ",
    fix: "Declare variables before use to avoid ReferenceError.",
  },
];

const faqs = [
  {
    q: "Which keyword should I use by default?",
    a: "Use const by default and let when reassignment is required.",
  },
  {
    q: "Why avoid var in modern JavaScript?",
    a: "var has function scope and hoisting behavior that can cause confusing bugs.",
  },
  {
    q: "What is the temporal dead zone?",
    a: "It is the time before let/const declaration where the variable exists but cannot be accessed.",
  },
  {
    q: "Can const arrays be changed?",
    a: "Array contents can be changed, but the variable cannot be reassigned to a new array.",
  },
];

export default function JavascriptVariablesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Variables: var, let, const"
      intro={[
        "Variable declarations control scope, mutation, and runtime behavior.",
        "Most beginner and intermediate bugs in JavaScript come from incorrect variable usage.",
      ]}
      why={[
        "Correct variable semantics reduce hidden bugs and prevent accidental global leaks.",
        "They also make async behavior easier to reason about and debug.",
      ]}
      syntax={[
        "var name = 'Asha';",
        "let count = 0;",
        "const MAX = 10;",
      ]}
      sections={sections}
      examples={examples}
      mistakes={mistakes}
      faqs={faqs}
      interviewQuestions={[
        { q: "What is the difference between var and let?", a: "var is function-scoped; let is block-scoped." },
        { q: "What is TDZ?", a: "The temporal dead zone prevents access to let/const before declaration." },
        { q: "Does const make objects immutable?", a: "No. It prevents reassignment, not mutation." },
      ]}
      comparison={{
        without: `// var leaks out of blocks\nif (true) {\n  var x = 1;\n}\nconsole.log(x); // 1`,
        with: `// let respects block scope\nif (true) {\n  let x = 1;\n}\n// console.log(x); // ReferenceError`,
      }}
      practice={{
        prompt: "Practice: Declare a const name and a let counter, then increment the counter.",
        starterCode: `const name = "Riya";\nlet count = 0;\n\n// TODO: increment count and log name + count\n`,
        solution: `const name = "Riya";\nlet count = 0;\n\ncount += 1;\nconsole.log(name, count);`,
      }}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Variable Demo",
        description: "Try the variable declaration example and tweak the values.",
      }}
      related={[
        { label: "var, let, const", href: "/javascript/variables/var-let-const" },
        { label: "Scope", href: "/javascript/variables/scope" },
        { label: "Hoisting", href: "/javascript/variables/hoisting" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
