import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Syntax: Complete Guide from Basics to Advanced",
  description:
    "Master JavaScript syntax including statements, variables, data types, operators, control flow, functions, and best practices. Complete beginner to advanced guide.",
  keywords: [
    "javascript syntax",
    "javascript statements",
    "javascript keywords",
    "javascript syntax rules",
    "learn javascript syntax",
    "javascript best practices",
  ],
  openGraph: {
    title: "JavaScript Syntax: Complete Guide",
    description: "Master JavaScript syntax with comprehensive examples and best practices.",
    url: "/javascript/javascript-syntax",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Syntax Guide",
  },
  alternates: { canonical: "/javascript/javascript-syntax" },
};

const sections = [
  {
    heading: "What Is JavaScript Syntax?",
    paragraphs: [
      "JavaScript syntax defines the rules for writing valid JavaScript programs.",
      "It's similar to grammar in human language - if syntax is incorrect, the program won't execute.",
      "The JavaScript engine reads and parses your code according to these syntax rules before execution.",
      "Understanding syntax is the foundation for writing clean, error-free, and professional code.",
    ],
    examples: [
      {
        title: "Valid vs Invalid Syntax",
        code: `// Valid syntax
const name = "John";
console.log(name);

// Invalid syntax - missing quotation mark
const name = "John;  // SyntaxError!

// Invalid syntax - missing semicolon (but works due to ASI)
const name = "John"
console.log(name)

// Valid syntax - using let and proper structure
let age = 25;
if (age >= 18) {
  console.log("Adult");
}`,
        explanation:
          "Valid syntax follows JavaScript rules. Invalid syntax throws SyntaxError and prevents execution. Automatic Semicolon Insertion (ASI) helps sometimes but consistent formatting is better.",
      },
    ],
  },
  {
    heading: "Statements and Expressions",
    paragraphs: [
      "A statement is a complete instruction that performs an action.",
      "An expression is any code that produces a value.",
      "Statements end with semicolons (usually), while expressions produce results.",
      "Understanding the difference helps you write clearer code and avoid common mistakes.",
    ],
    examples: [
      {
        title: "Statements vs Expressions",
        code: `// Statements - perform actions
let name = "Alice";      // Variable declaration statement
console.log(name);       // Function call statement
if (age > 18) { }       // Conditional statement
for (let i = 0; i < 5; i++) { } // Loop statement
function greet() { }    // Function declaration

// Expressions - produce values
5 + 10                   // Arithmetic expression (returns 15)
age > 18                 // Comparison expression (returns boolean)
"Hello " + name          // String concatenation (returns combined string)
true ? "Yes" : "No"      // Ternary expression (returns "Yes" or "No")

// Expression statement - combines both
let result = 5 + 10;    // Assignment statement containing arithmetic expression`,
        explanation:
          "Statements are instructions (usually ending with ;). Expressions produce values and can be used within statements.",
      },
    ],
  },
  {
    heading: "Variables: let, const, and var",
    paragraphs: [
      "Variables are named containers that store values in memory.",
      "JavaScript has three keywords for declaring variables: const, let, and var.",
      "const declares a constant that cannot be reassigned after initialization.",
      "let declares a block-scoped variable that can be reassigned.",
      "var declares a function-scoped variable and should be avoided in modern code.",
    ],
    examples: [
      {
        title: "Variable Declaration Best Practices",
        code: `// Modern JavaScript - prefer const first
const PI = 3.14159;     // Won't change
const name = "John";    // Initial value assigned

// Use let when reassignment is needed
let counter = 0;
counter = counter + 1;  // Valid - let allows reassignment

let age = 25;
age = 26;               // Valid - updated value

// Avoid var in modern code (function-scoped, hoisting issues)
var oldStyle = "Don't use";  // Works, but has hoisting and scoping quirks

// Cannot reassign const
// PI = 3.14;            // Error! const prevents reassignment

// Missing initialization is allowed with let
let uninitialized;      // undefined initially
uninitialized = 42;     // Now has a value

// Const requires initialization
// const missing;        // SyntaxError - const needs an initial value
const initialized = "required";`,
        explanation:
          "Use const by default for immutability and clarity. Use let when you need to reassign. Avoid var in modern JavaScript.",
      },
    ],
  },
  {
    heading: "Data Types and Type Checking",
    paragraphs: [
      "JavaScript has seven primitive types and one complex type (object).",
      "Primitive types are immutable and stored directly in memory.",
      "Objects are reference types and stored as references in memory.",
      "Use typeof operator to check variable types.",
      "JavaScript is dynamically typed - the same variable can hold different types at different times.",
    ],
    examples: [
      {
        title: "All JavaScript Data Types",
        code: `// Primitive types
const str = "Hello";           // String
const num = 42;                // Number
const decimal = 3.14;          // Number (no separate float type)
const big = 9007199254740992n; // BigInt (n suffix)
const bool = true;             // Boolean
const nil = null;              // Null (intentional empty value)
let undef;                      // Undefined (uninitialized)
const sym = Symbol("id");      // Symbol (unique identifier)

// Non-primitive type
const obj = { name: "John" };  // Object
const arr = [1, 2, 3];         // Array (special object)
const func = function() { };   // Function (special object)

// Type checking
typeof str;        // "string"
typeof num;        // "number"
typeof bool;       // "boolean"
typeof nil;        // "object" (quirk of JavaScript!)
typeof undef;      // "undefined"
typeof sym;        // "symbol"
typeof obj;        // "object"
typeof func;       // "function"

// Type coercion (implicit conversion)
"5" + 5            // "55" (string concatenation, not addition)
"5" - 2            // 3 (numeric operation)
true + 1           // 2 (true becomes 1)`,
        explanation:
          "JavaScript has 7 primitive types and objects. Primitive types are immutable; objects are references. Type coercion can cause surprising results.",
      },
    ],
  },
  {
    heading: "Naming Conventions and Identifiers",
    paragraphs: [
      "Identifiers are names for variables, functions, classes, and objects.",
      "JavaScript has naming rules and conventions that improve code readability.",
      "Following conventions makes code more maintainable and professional.",
      "Clear naming reduces bugs and makes collaboration easier.",
    ],
    examples: [
      {
        title: "Naming Rules and Conventions",
        code: `// Rules for identifiers
const validName = "OK";        // Letters, numbers, underscore, dollar sign
const _private = "OK";         // Can start with underscore
const $jquery = "OK";          // Can start with $ (jQuery convention)
// const 2invalid = "Error";   // Cannot start with number
// const for = "Error";        // Cannot use reserved keywords
// const my-name = "Error";    // Cannot use hyphens (use camelCase)

// camelCase for variables and functions (most common)
const firstName = "John";
const lastName = "Doe";
const calculateTotal = () => { };
const isActive = true;
const userAge = 25;

// PascalCase for classes and components
class UserProfile { }
function CalculatePrice() { }
const MyComponent = () => { };

// UPPER_CASE for constants
const MAX_ATTEMPTS = 5;
const DEFAULT_TIMEOUT = 3000;
const API_KEY = "secret123";

// Meaningful names
const x = 10;              // Bad - unclear
const userCount = 10;      // Good - descriptive

const fn = (a, b) => a + b; // Bad - unclear parameters
const calculateSum = (firstNum, secondNum) => firstNum + secondNum; // Good`,
        explanation:
          "Follow camelCase for variables/functions, PascalCase for classes, and UPPER_CASE for constants. Use meaningful names that describe purpose.",
      },
    ],
  },
  {
    heading: "Operators and Operator Precedence",
    paragraphs: [
      "Operators perform operations on values and return results.",
      "JavaScript has arithmetic, comparison, logical, assignment, and other operators.",
      "Operator precedence determines the order operations execute.",
      "Understanding precedence prevents unexpected behavior.",
    ],
    examples: [
      {
        title: "Common Operators",
        code: `// Arithmetic operators
10 + 5      // 15 (addition)
10 - 5      // 5 (subtraction)
10 * 5      // 50 (multiplication)
10 / 5      // 2 (division)
10 % 3      // 1 (modulo/remainder)
2 ** 3      // 8 (exponentiation)

// Comparison operators
5 == "5"    // true (loose equality - type coercion)
5 === "5"   // false (strict equality - no type coercion)
5 != "5"    // false (loose inequality)
5 !== "5"   // true (strict inequality)
5 < 10      // true
5 > 10      // false

// Logical operators
true && false   // false (AND - both must be true)
true || false   // true (OR - at least one must be true)
!true           // false (NOT - negates value)

// Assignment operators
let x = 5;         // Simple assignment
x += 3;            // x = 8 (add and assign)
x -= 2;            // x = 6 (subtract and assign)
x *= 2;            // x = 12 (multiply and assign)
x /= 3;            // x = 4 (divide and assign)

// String operators
"Hello" + " " + "World"  // "Hello World"

// Conditional (ternary) operator
5 > 3 ? "Yes" : "No"     // "Yes"

// Operator precedence (multiplication before addition)
5 + 10 * 2  // 25 (not 30) because * has higher precedence
(5 + 10) * 2 // 30 (parentheses override precedence)`,
        explanation:
          "Different operators have different precedence. Use parentheses for clarity and to override default precedence.",
      },
    ],
  },
  {
    heading: "Code Blocks and Scope",
    paragraphs: [
      "Code blocks are sections enclosed in curly braces {}.",
      "Blocks define scope for variables declared with let and const.",
      "Block scope prevents variable pollution and accidental overwrites.",
      "Understanding scope is crucial for avoiding bugs and writing maintainable code.",
    ],
    examples: [
      {
        title: "Blocks and Scope",
        code: `// Function blocks
function myFunction() {
  const x = 10;    // Function scope
  console.log(x);  // 10
}
// console.log(x); // Error - x not accessible outside function

// If blocks (block scope with let/const)
if (true) {
  let y = 20;      // Block scope
  const z = 30;    // Block scope
  console.log(y, z); // 20 30
}
// console.log(y); // Error - y not accessible outside block
// console.log(z); // Error - z not accessible outside block

// Loop blocks
for (let i = 0; i < 3; i++) {
  let loopVar = i * 10;
  console.log(loopVar);
}
// console.log(i); // Error - i not accessible outside loop

// Nested scopes can access outer scope
const outer = "I'm outer";
{
  const inner = "I'm inner";
  console.log(outer); // "I'm outer" - can access outer
  console.log(inner); // "I'm inner" - can access own
}
// console.log(inner); // Error - cannot access block scope from outside

// Var has function scope, not block scope (avoid!)
if (true) {
  var oldStyle = "global scope";
}
console.log(oldStyle); // "global scope" - accessible! (unexpected)`,
        explanation:
          "let and const have block scope (safer). var has function scope (problematic). Always prefer let/const in modern code.",
      },
    ],
  },
  {
    heading: "Keywords and Reserved Words",
    paragraphs: [
      "Keywords are words that have special meaning in JavaScript.",
      "Reserved words cannot be used as variable names.",
      "Some words are reserved for future use.",
      "Using keywords as identifiers causes SyntaxError.",
    ],
    examples: [
      {
        title: "JavaScript Keywords and Reserved Words",
        code: `// Control flow keywords
if, else, else if
switch, case, break, default
for, while, do
return, break, continue

// Declarations and definitions
var, let, const
function, class
new, this, super
import, export

// Type and value keywords
true, false
null, undefined
typeof, instanceof

// Other keywords
async, await
try, catch, finally
throw
delete, in
void

// Cannot use keywords as variable names
// const if = 5;          // SyntaxError!
// let return = 10;       // SyntaxError!
// function class() { }   // SyntaxError!

// Valid alternatives
const ifCondition = 5;    // Rename to avoid keyword
let returnValue = 10;     // Rename to avoid keyword
class MyClass { }         // Use different name`,
        explanation:
          "Keywords have special meaning and cannot be used as identifiers. If a name is reserved, rename your variable.",
      },
    ],
  },
  {
    heading: "Strict Mode",
    paragraphs: [
      "Strict mode enforces stricter parsing and error handling.",
      "It prevents certain unsafe actions and throws errors early.",
      "Enable strict mode with 'use strict' directive.",
      "Modern frameworks like Next.js use strict mode by default.",
    ],
    examples: [
      {
        title: "Strict Mode Effects",
        code: `// Enable strict mode globally
"use strict";

// Variables must be declared
x = 5;              // Error in strict mode (would be global in non-strict)
let y = 5;          // OK

// Cannot delete variables
let z = 10;
// delete z;         // Error in strict mode

// Unsafe function properties
function myFunc() {
  // console.log(this); // undefined in strict mode (would be global object in non-strict)
}

// octal syntax not allowed
// const num = 010;    // Error in strict mode

// Duplicate parameter names not allowed
// function bad(a, a, b) { }  // Error in strict mode

// eval cannot create variables in local scope (stricter isolation)
// eval("let x = 5"); // x won't pollute outer scope

// arguments object is less helpful but still works
function example(a, b) {
  console.log(arguments.length); // 2
}

example(1, 2);

// Benefits: catch mistakes early, optimize better, prepare for future
// Recommended: Always use strict mode in modern projects`,
        explanation:
          "Strict mode catches common mistakes early and improves optimization. Use it consistently in modern code.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Relying too heavily on ASI (Automatic Semicolon Insertion)",
    fix: "Use semicolons consistently to avoid edge cases and improve code clarity.",
  },
  {
    title: "Using var instead of let/const",
    fix: "var has function scope and hoisting issues. Always use const first, then let. Avoid var.",
  },
  {
    title: "Confusing == (loose equality) with === (strict equality)",
    fix: "Always use === to avoid type coercion surprises. Use == only when explicitly needed.",
  },
  {
    title: "Using unclear variable names",
    fix: "Use descriptive names that explain the variable's purpose. Avoid single letters except in loops.",
  },
  {
    title: "Not understanding operator precedence",
    fix: "Use parentheses to make precedence explicit and avoid relying on implicit precedence rules.",
  },
];

const faqs = [
  {
    q: "Is semicolon mandatory in JavaScript?",
    a: "No, Automatic Semicolon Insertion handles missing semicolons in most cases. However, using semicolons consistently is a professional best practice.",
  },
  {
    q: "Should I use var, let, or const?",
    a: "Use const by default for immutability. Use let when you need to reassign. Avoid var entirely in modern code.",
  },
  {
    q: "What's the difference between == and ===?",
    a: "== performs type coercion and can cause unexpected results. === compares both value and type strictly. Always prefer ===.",
  },
  {
    q: "Why is typeof null returning 'object'?",
    a: "It's a quirk in JavaScript's design. null is actually a primitive type, but typeof has a bug treating it as 'object'.",
  },
  {
    q: "What's the scope difference between let and var?",
    a: "let has block scope (safer). var has function scope and exhibits unexpected hoisting behavior. Prefer let.",
  },
  {
    q: "Do I need to memorize operator precedence?",
    a: "No. Use parentheses to make intent explicit. Code readability is more important than relying on precedence memory.",
  },
  {
    q: "Is strict mode mandatory?",
    a: "Modern frameworks enable it by default. It's recommended to always enable it explicitly in your code.",
  },
  {
    q: "Can I declare variables without const/let/var?",
    a: "You can, but it creates a global variable (or error in strict mode). Always declare with const, let, or var.",
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

export default function JavascriptSyntaxPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Syntax: Complete Guide
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master JavaScript syntax including statements, expressions, variables, data types, operators, scope, and best practices. From fundamentals to advanced patterns.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Strong syntax fundamentals are the foundation for writing bug-free, professional code. Correct syntax ensures your programs execute as intended, helps you debug efficiently, and makes your code maintainable and scalable.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {section.examples && section.examples.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.examples.map((ex) => (
                  <CodeExample
                    key={ex.title}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </article>
        ))}

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
