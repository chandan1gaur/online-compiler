import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Hoisting — Variables and Functions",
  description:
    "Learn how JavaScript hoisting affects variable and function declarations. Understand temporal dead zone, initialization, and predictable patterns.",
  keywords: ["javascript hoisting", "temporal dead zone", "function hoisting", "var hoisting"],
  openGraph: {
    title: "JavaScript Hoisting — Variables and Functions",
    description:
      "Learn how JavaScript hoisting affects variable and function declarations. Understand temporal dead zone, initialization, and predictable patterns.",
    url: "/javascript/variables/hoisting",
    type: "article",
    images: ["/og-variables-hoisting.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Hoisting — Variables and Functions",
    description:
      "Learn how JavaScript hoisting affects variable and function declarations. Understand temporal dead zone, initialization, and predictable patterns.",
    images: ["/og-variables-hoisting.svg"],
  },
  alternates: { canonical: "/javascript/variables/hoisting" },
};

export default function HoistingPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Hoisting"
      intro="Hoisting is JavaScript's behavior of moving declarations to the top of their scope. It affects how and when variables or functions can be used. Understanding hoisting is essential for writing predictable JavaScript code and avoiding common pitfalls that can lead to bugs and confusion."
      why="Understanding hoisting avoids surprising runtime errors and helps you write clearer initialization logic. It explains why certain code patterns work and why others fail, enabling you to write more maintainable and predictable JavaScript applications."
      sections={[
        {
          heading: "What Hoisting Means",
          paragraphs: [
            "Declarations are conceptually moved to the top of their scope during compilation, but initializations are not. This means you can use variables and functions before they're declared in the code, but the behavior differs based on the declaration type.",
            "Function declarations are hoisted with their body; `var` declarations are hoisted but initialized to `undefined`. This creates different behaviors that developers need to understand to avoid bugs.",
            "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This allows functions to be called before they're defined and variables to be referenced before their declaration.",
            "The hoisting process happens during the creation phase of execution context. All declarations are processed before any code execution begins, which is why hoisting appears to 'move' declarations to the top.",
          ],
        },
        {
          heading: "Temporal Dead Zone (TDZ)",
          paragraphs: [
            "`let` and `const` are hoisted but cannot be accessed before initialization — this is the TDZ. The TDZ is a state where variables exist but cannot be accessed, throwing a ReferenceError if attempted.",
            "Accessing a `let`/`const` before initialization throws a ReferenceError. This is different from `var`, which would return `undefined`. The TDZ prevents the confusing behavior associated with `var` hoisting.",
            "The TDZ exists from the start of the block until the variable's declaration is encountered. This encourages better coding practices by forcing developers to declare variables before use.",
            "TDZ applies to `let`, `const`, and `class` declarations. Function parameters and function declarations don't have TDZ because they're initialized when the function is called.",
          ],
        },
        {
          heading: "Variable Hoisting Details",
          paragraphs: [
            "`var` declarations are hoisted to the top of their function or global scope. This means the variable is accessible throughout the entire scope, even before its declaration line.",
            "`let` and `const` are hoisted to the top of their block scope but remain in TDZ until declaration. This provides better scoping behavior and prevents accidental use of uninitialized variables.",
            "Multiple `var` declarations in the same scope are treated as a single declaration. This can lead to unexpected behavior when the same variable is declared multiple times.",
            "Variable hoisting can create confusion in loops and conditional blocks. Understanding the scoping rules helps write clearer, more predictable code.",
          ],
        },
        {
          heading: "Function Hoisting",
          paragraphs: [
            "Function declarations are fully hoisted, including their implementation. This allows calling functions before they're defined in the code, which is useful for organizing code structure.",
            "Function expressions are not hoisted. Only the variable declaration is hoisted, not the function assignment. This means function expressions behave like regular variables.",
            "Arrow functions follow the same hoisting rules as function expressions. They're not hoisted and must be declared before use.",
            "Function hoisting enables patterns like defining helper functions at the bottom of a file while calling them at the top, improving code readability.",
          ],
        },
        {
          heading: "Hoisting in Different Contexts",
          paragraphs: [
            "Global scope hoisting: Variables declared with `var` in global scope become properties of the global object. This can cause naming conflicts and security issues.",
            "Function scope hoisting: `var` variables are hoisted to the function level, creating potential for bugs in nested functions and closures.",
            "Block scope hoisting: `let` and `const` are hoisted to the block level, providing better isolation and preventing variable leakage.",
            "Module hoisting: In ES6 modules, hoisting behaves differently due to the module's strict mode and isolated scope.",
          ],
        },
        {
          heading: "Hoisting Edge Cases",
          paragraphs: [
            "Redeclaration of `var` in the same scope is allowed and doesn't throw errors. This can mask bugs and create confusion.",
            "`let` and `const` cannot be redeclared in the same scope. Attempting to do so throws a SyntaxError, preventing accidental redeclarations.",
            "Function declarations vs function expressions: Understanding the difference is crucial for predicting hoisting behavior.",
            "Hoisting with default parameters: Function parameters are initialized when the function is called, not during hoisting.",
          ],
        },
        {
          heading: "Hoisting and Performance",
          paragraphs: [
            "Hoisting itself has minimal performance impact since it happens during compilation. The main performance considerations relate to scope chain traversal.",
            "Accessing variables in outer scopes is slower than local variables. Understanding hoisting helps optimize variable placement.",
            "Modern JavaScript engines optimize hoisting behavior, but code clarity should be the primary concern over micro-optimizations.",
            "TDZ enforcement by `let`/`const` can help catch performance issues early by preventing use of uninitialized variables.",
          ],
        },
        {
          heading: "Best Practices for Hoisting",
          paragraphs: [
            "Always declare variables at the top of their scope to make hoisting behavior explicit and clear.",
            "Use `let` and `const` instead of `var` to avoid confusing hoisting behavior and benefit from TDZ protection.",
            "Declare functions before calling them when possible, even though function declarations are hoisted.",
            "Use function expressions or arrow functions when you want to control the hoisting behavior precisely.",
            "Enable strict mode to catch more hoisting-related errors and enforce better coding practices.",
            "Test your understanding of hoisting by writing small test cases and observing the behavior.",
          ],
        },
      ]}
      examples={[
        {
          title: "Var Hoisting",
          code: `console.log(a); // undefined
var a = 5;
console.log(a); // 5`,
          explanation: "Declaration is hoisted; initialization remains at assignment.",
        },
        {
          title: "TDZ with let/const",
          code: `console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;`,
          explanation: "`let` is in TDZ until the line that initializes it.",
        },
        {
          title: "Function Declaration Hoisting",
          code: `greet(); // "Hello, World!"

function greet() {
  console.log("Hello, World!");
}`,
          explanation: "Function declarations are fully hoisted, allowing calls before definition.",
        },
        {
          title: "Function Expression Hoisting",
          code: `sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};`,
          explanation: "Only the variable declaration is hoisted, not the function assignment.",
        },
        {
          title: "Multiple Var Declarations",
          code: `var x = 1;
console.log(x); // 1

var x = 2; // No error
console.log(x); // 2`,
          explanation: "Multiple `var` declarations are allowed; later ones override earlier values.",
        },
        {
          title: "Let Redeclaration Error",
          code: `let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared`,
          explanation: "`let` prevents redeclaration in the same scope.",
        },
        {
          title: "Hoisting in Loops",
          code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (all closures share the same i)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0, 1, 2 (each iteration has its own j)`,
          explanation: "`var` hoisting causes loop variable sharing; `let` creates per-iteration bindings.",
        },
        {
          title: "Hoisting with Conditionals",
          code: `if (false) {
  var conditionVar = 'never set';
}

console.log(conditionVar); // undefined (hoisted but not initialized)

if (false) {
  let blockVar = 'never set';
}

console.log(typeof blockVar); // undefined (not accessible outside block)`,
          explanation: "`var` is hoisted out of blocks; `let` stays within block scope.",
        },
      ]}
      mistakes={[
        { title: "Using variables before initialization", fix: "Declare and initialize near first use to avoid TDZ or undefined values." },
        { title: "Relying on hoisted behavior", fix: "Write clear, sequential code rather than depending on hoisting quirks." },
        { title: "Mixing var and let/const", fix: "Use consistent declaration keywords throughout your codebase." },
        { title: "Assuming function expressions hoist", fix: "Remember only function declarations are fully hoisted." },
        { title: "Ignoring TDZ errors", fix: "Learn to recognize and fix temporal dead zone issues." },
        { title: "Redeclaring variables unintentionally", fix: "Use `let`/`const` to prevent accidental redeclarations." },
      ]}
      faqs={[
        { q: "Are function expressions hoisted?", a: "No — only function declarations are hoisted with their body. Function expressions behave like regular variable assignments." },
        { q: "Does hoisting change performance?", a: "No — it's a compile-time model; code clarity matters more than hoisting micro-effects. Focus on readable code." },
        { q: "Why was TDZ introduced?", a: "TDZ prevents the confusing behavior of `var` hoisting and encourages better coding practices by catching use of uninitialized variables." },
        { q: "Can I disable hoisting?", a: "No, but you can control its effects by using `let`/`const` and declaring variables before use." },
        { q: "How does hoisting work in modules?", a: "Modules have their own scope and hoisting behaves similarly, but strict mode prevents global pollution." },
        { q: "Is hoisting the same in all JavaScript environments?", a: "Yes, hoisting is part of the JavaScript specification and works consistently across browsers and Node.js." },
        { q: "Does TypeScript change hoisting?", a: "TypeScript follows the same hoisting rules as JavaScript but can catch more errors at compile time." },
        { q: "How to avoid hoisting-related bugs?", a: "Use `let`/`const`, declare variables at scope top, and test edge cases thoroughly." },
      ]}
      related={[{ label: "Variables", href: "/javascript/variables" }, { label: "var, let, const", href: "/javascript/variables/var-let-const" }, { label: "Scope", href: "/javascript/variables/scope" }]}
    />
  );
}
