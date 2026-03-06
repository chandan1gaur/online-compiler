import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Hoisting - Complete Guide to Variable and Function Hoisting",
  description: "Master JavaScript hoisting with comprehensive guide covering var, let, const, functions, temporal dead zone, and best practices for predictable code.",
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
    description: "Master JavaScript hoisting with comprehensive guide covering var, let, const, functions, temporal dead zone, and best practices.",
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
    heading: "What is JavaScript Hoisting?",
    paragraphs: [
      "JavaScript hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they're declared in your code.",
      "However, only the declarations are hoisted, not the initializations. This creates different behaviors for different types of declarations and is a common source of confusion for JavaScript developers.",
      "Understanding hoisting is crucial because it affects how your code executes and can lead to bugs if not properly understood. Modern JavaScript (ES6+) introduced let and const to provide more predictable hoisting behavior.",
    ],
    examples: [
      {
        title: "Basic Hoisting Concept",
        code:`// This works because of hoisting
console.log(message); // undefined
var message = "Hello World";

// The above code is interpreted as:
var message;
console.log(message); // undefined
message = "Hello World";`,
        explanation: "Variable declaration is hoisted to the top, but initialization stays in place.",
      },
    ],
  },
  {
    heading: "Variable Hoisting: var vs let vs const",
    paragraphs: [
      "Different variable declaration keywords behave differently with hoisting. var declarations are fully hoisted, let and const are hoisted but protected by the Temporal Dead Zone.",
    ],
    examples: [
      {
        title: "var Hoisting",
        code:`// var is fully hoisted
console.log(name); // undefined (no error)
var name = "Alice";

console.log(name); // "Alice"

// Multiple var declarations are allowed
var age = 25;
var age = 30; // No error, just reassigns
console.log(age); // 30`,
        explanation: "var declarations are hoisted to the top of their scope and initialized with undefined.",
      },
      {
        title: "let Hoisting (Temporal Dead Zone)",
        code:`// let is hoisted but in TDZ
console.log(city); // ReferenceError: Cannot access 'city' before initialization
let city = "New York";

// This is what happens conceptually:
// let city; // hoisted but in TDZ
// console.log(city); // Error!
// city = "New York"; // TDZ ends here`,
        explanation: "let variables are hoisted but cannot be accessed until declared - this is the Temporal Dead Zone.",
      },
      {
        title: "const Hoisting (Temporal Dead Zone)",
        code:`// const behaves like let
console.log(PI); // ReferenceError: Cannot access 'PI' before initialization
const PI = 3.14159;

// const must be initialized when declared
const MAX_SIZE; // SyntaxError: Missing initializer in const declaration`,
        explanation: "const variables are hoisted but must be initialized when declared, and cannot be reassigned.",
      },
    ],
  },
  {
    heading: "Function Hoisting",
    paragraphs: [
      "Function declarations are fully hoisted with their implementation, while function expressions follow variable hoisting rules.",
    ],
    examples: [
      {
        title: "Function Declaration Hoisting",
        code:`// Function declarations are fully hoisted
greet("World"); // "Hello, World!"

function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

// This works because the entire function is hoisted
greet("JavaScript"); // "Hello, JavaScript!"`,
        explanation: "Function declarations are hoisted with their complete implementation, allowing calls before definition.",
      },
      {
        title: "Function Expression Hoisting",
        code:`// Function expressions are NOT hoisted
sayHello(); // TypeError: sayHello is not a function

var sayHello = function(name) {
  console.log(\`Hello, \${name}!\`);
};

// Arrow functions behave the same way
greetUser(); // TypeError: greetUser is not a function

var greetUser = (name) => {
  console.log(\`Hi, \${name}!\`);
};`,
        explanation: "Function expressions and arrow functions follow variable hoisting rules - only the variable declaration is hoisted.",
      },
    ],
  },
  {
    heading: "Temporal Dead Zone (TDZ) Deep Dive",
    paragraphs: [
      "The Temporal Dead Zone is a state where variables exist but cannot be accessed. It applies to let and const declarations and helps prevent bugs associated with var hoisting.",
      "The TDZ starts at the beginning of the scope and ends when the variable is declared. Accessing a variable in TDZ throws a ReferenceError.",
    ],
    examples: [
      {
        title: "TDZ in Block Scope",
        code:`{
  // TDZ starts here
  console.log(temp); // ReferenceError

  let temp = "I'm declared now";
  console.log(temp); // "I'm declared now"
  // TDZ ends here
}

console.log(typeof temp); // undefined (temp not accessible outside block)`,
        explanation: "TDZ exists within the block scope where the variable is declared.",
      },
      {
        title: "TDZ with Function Parameters",
        code:`function test(param = x) {
  // TDZ for x starts here
  let x = 10;
  // TDZ for x ends here
  return param;
}

test(); // ReferenceError: Cannot access 'x' before initialization

// Fixed version
function testFixed(x = 5) {
  return x;
}

testFixed(); // 5`,
        explanation: "Default parameters create TDZ issues when referencing variables declared later in the parameter list.",
      },
    ],
  },
  {
    heading: "Hoisting in Different Scopes",
    paragraphs: [
      "Hoisting behavior varies depending on the scope: global, function, or block scope.",
    ],
    examples: [
      {
        title: "Global Scope Hoisting",
        code:`// Global scope
console.log(globalVar); // undefined
var globalVar = "I'm global";

console.log(window.globalVar); // "I'm global" (in browser)

// let/const in global scope don't create window properties
let globalLet = "I'm not on window";
console.log(window.globalLet); // undefined`,
        explanation: "var in global scope creates window properties, but let/const don't.",
      },
      {
        title: "Function Scope Hoisting",
        code:`function example() {
  console.log(localVar); // undefined
  var localVar = "I'm local";

  if (true) {
    var blockVar = "I'm hoisted to function scope";
  }

  console.log(blockVar); // "I'm hoisted to function scope"
}

example();`,
        explanation: "var is hoisted to function scope, not block scope, which can cause unexpected behavior.",
      },
      {
        title: "Block Scope Hoisting",
        code:`function blockScopeExample() {
  if (true) {
    console.log(blockLet); // ReferenceError: TDZ
    let blockLet = "I'm block scoped";
    console.log(blockLet); // "I'm block scoped"
  }

  console.log(typeof blockLet); // undefined (not accessible outside block)
}

blockScopeExample();`,
        explanation: "let and const are hoisted to block scope and protected by TDZ.",
      },
    ],
  },
  {
    heading: "Common Hoisting Pitfalls",
    paragraphs: [
      "Hoisting can lead to several common mistakes that developers make. Understanding these pitfalls helps write more robust code.",
    ],
    examples: [
      {
        title: "Loop Variable Hoisting Issues",
        code:`// Problem with var in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (all closures share the same i)

// Solution with let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0, 1, 2 (each iteration has its own j)`,
        explanation: "var hoisting in loops causes all closures to share the same variable, while let creates per-iteration bindings.",
      },
      {
        title: "Conditional Declaration Issues",
        code:`function conditionalHoisting() {
  if (false) {
    var hoistedVar = "never executed";
  }

  console.log(hoistedVar); // undefined (still hoisted!)

  if (false) {
    let blockVar = "never executed";
  }

  console.log(typeof blockVar); // undefined (not hoisted out of block)
}

conditionalHoisting();`,
        explanation: "var declarations are hoisted even from unreachable code, while let/const stay within their blocks.",
      },
      {
        title: "Function Declaration Override",
        code:`// Function declarations can be overridden
console.log(typeof func); // "function"

function func() {
  return "first";
}

console.log(func()); // "first"

function func() {
  return "second"; // overrides the first
}

console.log(func()); // "second"`,
        explanation: "Multiple function declarations with the same name override each other, with the last one taking precedence.",
      },
    ],
  },
  {
    heading: "Hoisting in Modern JavaScript",
    paragraphs: [
      "ES6+ features have changed how hoisting works and provided better alternatives to traditional var hoisting.",
    ],
    examples: [
      {
        title: "Class Hoisting",
        code:`// Classes are hoisted but in TDZ
const instance = new MyClass(); // ReferenceError: TDZ

class MyClass {
  constructor() {
    this.name = "MyClass";
  }
}

// Must declare class before using it
const validInstance = new MyClass();
console.log(validInstance.name); // "MyClass"`,
        explanation: "Class declarations are hoisted but protected by TDZ, preventing use before declaration.",
      },
      {
        title: "Module Hoisting",
        code:`// In modules, hoisting works differently
// All declarations are hoisted within the module scope
console.log(moduleVar); // ReferenceError (not hoisted to global)

export const moduleVar = "I'm in a module";

// Functions are hoisted within the module
export function moduleFunc() {
  return "Hello from module";
}

console.log(moduleFunc()); // Works because function is hoisted`,
        explanation: "Modules have their own scope and strict mode prevents global pollution from hoisting.",
      },
    ],
  },
  {
    heading: "Interview Questions about Hoisting",
    paragraphs: [
      "Hoisting is a frequent topic in JavaScript interviews. Here are some common questions and their solutions.",
    ],
    examples: [
      {
        title: "Classic Interview Question",
        code:`// What will this output?
var a = 1;

function test() {
  console.log(a); // What prints here?
  var a = 2;
  console.log(a); // What prints here?
}

test();

// Answer:
// undefined (local var a is hoisted)
// 2 (after assignment)`,
        explanation: "Local variable declarations shadow outer variables and are hoisted within their scope.",
      },
      {
        title: "Function vs Variable Hoisting",
        code:`// Which one takes precedence?
var func = "variable";

function func() {
  return "function";
}

console.log(typeof func); // "string" - variable assignment wins

// But function declarations are hoisted first
console.log(typeof anotherFunc); // "function"

var anotherFunc = "variable";
function anotherFunc() {
  return "function";
}`,
        explanation: "Variable assignments override function declarations, but function declarations are hoisted before variable declarations.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Using var in modern JavaScript",
    fix: "Use let and const instead of var to avoid confusing hoisting behavior and benefit from TDZ protection.",
  },
  {
    title: "Accessing variables before declaration",
    fix: "Always declare variables at the top of their scope or right before first use to make hoisting behavior explicit.",
  },
  {
    title: "Assuming function expressions are hoisted",
    fix: "Remember that only function declarations are fully hoisted - function expressions follow variable hoisting rules.",
  },
  {
    title: "Using var in loops with closures",
    fix: "Use let in for loops to create per-iteration bindings instead of sharing the hoisted variable.",
  },
  {
    title: "Relying on hoisted behavior for code organization",
    fix: "Declare variables and functions in logical order rather than depending on hoisting quirks.",
  },
  {
    title: "Mixing var and let/const in the same scope",
    fix: "Use consistent declaration keywords throughout your codebase to avoid confusion.",
  },
];

const faqs = [
  {
    q: "What is hoisting in JavaScript?",
    a: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation, allowing use before declaration.",
  },
  {
    q: "What's the Temporal Dead Zone?",
    a: "TDZ is the state where let and const variables exist but cannot be accessed until declared. It prevents the confusing behavior of var hoisting.",
  },
  {
    q: "Are function expressions hoisted?",
    a: "No, only function declarations are fully hoisted. Function expressions and arrow functions follow variable hoisting rules.",
  },
  {
    q: "Why was TDZ introduced?",
    a: "TDZ prevents bugs associated with var hoisting by throwing errors when accessing uninitialized variables, encouraging better coding practices.",
  },
  {
    q: "Does hoisting affect performance?",
    a: "Hoisting itself has minimal performance impact as it happens during compilation. Code clarity and proper scoping are more important.",
  },
  {
    q: "How does hoisting work in modules?",
    a: "Modules have strict mode and isolated scope. Hoisting works within the module but doesn't pollute the global scope.",
  },
  {
    q: "Can I disable hoisting?",
    a: "No, but you can control its effects by using let/const and declaring variables before use.",
  },
  {
    q: "What's the difference between var, let, and const hoisting?",
    a: "var is fully hoisted and initialized to undefined. let/const are hoisted but protected by TDZ until declaration.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HoistingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          JavaScript Hoisting - Complete Guide to Variable and Function Hoisting
        </h1>
        <p className="text-lg mb-8 text-center">
          Master JavaScript hoisting with comprehensive examples covering var, let, const, functions,
          temporal dead zone, and best practices for writing predictable code.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Understanding JavaScript Hoisting</h2>

          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{section.heading}</h3>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300">
                  {p}
                </p>
              ))}
              {section.examples && section.examples.length > 0 && (
                <div className="space-y-6">
                  {section.examples.map((ex, exIdx) => (
                    <CodeExample
                      key={exIdx}
                      title={ex.title}
                      code={ex.code}
                      explanation={ex.explanation}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Common Hoisting Mistakes</h2>
          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700 dark:text-red-400">
                  {mistake.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <strong>Solution:</strong> {mistake.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Hoisting FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Variables", href: "/javascript/variables" },
              { label: "var, let, const", href: "/javascript/variables/var-let-const" },
              { label: "Scope", href: "/javascript/variables/scope" },
              { label: "Data Types", href: "/javascript/variables/data-types" },
              { label: "Interview Questions", href: "/javascript/interview-questions" },
              { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Hoisting moves declarations to the top of their scope during compilation</li>
            <li>var is fully hoisted and initialized to undefined</li>
            <li>let and const are hoisted but protected by Temporal Dead Zone</li>
            <li>Only function declarations are fully hoisted with their implementation</li>
            <li>Use let/const and declare variables before use to avoid hoisting issues</li>
            <li>Understanding hoisting prevents bugs and improves code predictability</li>
          </ul>
        </div>
      </div>
    </>
  );
}
