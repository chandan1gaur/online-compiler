import type { Metadata } from "next";
import Script from "next/script";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Scope — var, let, const & Lexical Scope",
  description:
    "Understand JavaScript scope: global, function, block scope, and lexical scope. Learn best practices for var, let, and const to avoid bugs.",
  keywords: ["javascript scope", "lexical scope", "var vs let vs const", "function scope", "block scope"],
  openGraph: {
    title: "JavaScript Scope — var, let, const & Lexical Scope",
    description:
      "Understand JavaScript scope: global, function, block scope, and lexical scope. Learn best practices for var, let, and const to avoid bugs.",
    url: "/javascript/variables/scope",
    type: "article",
    images: ["/og-variables-scope.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Scope — var, let, const & Lexical Scope",
    description:
      "Understand JavaScript scope: global, function, block scope, and lexical scope. Learn best practices for var, let, and const to avoid bugs.",
    images: ["/og-variables-scope.svg"],
  },
  alternates: { canonical: "/javascript/variables/scope" },
};

export default function ScopePage() {
  return (
    <>
      <Script
        id="json-ld-scope"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript Scope — var, let, const & Lexical Scope',
            description: 'Understand JavaScript scope: global, function, block scope, and lexical scope. Learn best practices for var, let, and const to avoid bugs.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />
      <JsTutorialTemplate
      title="JavaScript Scope"
      intro="Scope controls where variables are accessible. Mastering scope prevents common bugs and improves code clarity. In JavaScript, scope determines the visibility and lifetime of variables, functions, and objects. Understanding scope is crucial for writing maintainable code and avoiding issues like variable hoisting, unintended global variables, and closure-related memory leaks."
      why="Knowing scope helps you choose `let`, `const`, or `var` and reason about closures, modules, and component state. Proper scope management leads to cleaner code architecture, better performance, and fewer runtime errors. It also helps in understanding how JavaScript's execution context works and how variables are resolved in nested functions."
      sections={[
        {
          heading: "Types of Scope",
          paragraphs: [
            "Global scope: variables accessible everywhere (avoid polluting global). Global scope is the outermost scope in JavaScript. Variables declared in global scope are accessible from anywhere in the code, including inside functions and blocks. However, overusing global variables can lead to naming conflicts, security issues, and harder-to-debug code. In browser environments, global variables become properties of the window object.",
            "Function scope: `var` is function-scoped — available across the containing function. Function scope means that variables declared with `var` inside a function are only accessible within that function and any nested functions. This creates a boundary that prevents external code from accessing internal variables. Function scope is created whenever a function is declared or invoked.",
            "Block scope: `let` and `const` are limited to the nearest `{}` block. Block scope was introduced with ES6 and applies to variables declared with `let` and `const`. A block is any code enclosed in curly braces, such as if statements, loops, or standalone blocks. Variables in block scope are only accessible within that block and any nested blocks.",
            "Module scope: In ES6 modules, variables are scoped to the module. Module scope provides encapsulation similar to function scope but at the file level. Variables declared in a module are not accessible from other modules unless explicitly exported. This helps in building modular, maintainable applications.",
          ],
        },
        {
          heading: "Lexical Scope and Closures",
          paragraphs: [
            "Lexical scope means a function's accessible variables are determined where it was defined, not where it is called. This is also known as static scope. When a function is defined, it captures the scope in which it was created, allowing it to access variables from its defining scope even when called from different locations.",
            "Closures allow inner functions to retain access to outer variables after the outer function returns. A closure is created when a function is defined inside another function and the inner function references variables from the outer function. Closures are powerful for creating private variables, implementing data hiding, and building function factories.",
            "The scope chain is how JavaScript resolves variable lookups. When accessing a variable, JavaScript first checks the current scope, then moves up the chain to outer scopes until it finds the variable or reaches the global scope. Understanding the scope chain helps predict variable resolution behavior.",
            "Execution context includes variable environment and scope chain. Each time a function is called, a new execution context is created with its own variable environment. The scope chain connects these contexts, allowing nested functions to access variables from their containing scopes.",
          ],
        },
        {
          heading: "Global Scope in Detail",
          paragraphs: [
            "Global scope is the top-level scope in JavaScript. Variables declared here are accessible throughout the entire program. In browsers, global variables become properties of the window object, while in Node.js they become properties of the global object.",
            "Avoid polluting the global scope whenever possible. Global variables can cause naming conflicts, make code harder to test, and increase the risk of bugs. Use modules, IIFEs (Immediately Invoked Function Expressions), or block-scoped variables to encapsulate code.",
            "Implicit globals are created when assigning to undeclared variables. This is a common source of bugs and should be avoided by always using 'use strict' mode, which throws errors for implicit globals.",
            "Global scope performance considerations: Accessing global variables is slower than accessing local variables because JavaScript must traverse the scope chain. Minimize global variable usage for better performance.",
          ],
        },
        {
          heading: "Function Scope Deep Dive",
          paragraphs: [
            "Function scope creates a private environment for variables. Variables declared with `var` inside a function are only accessible within that function. This provides encapsulation and prevents variable conflicts.",
            "Nested functions can access variables from their containing scopes. This creates a hierarchy of scopes that JavaScript uses to resolve variable lookups. Understanding this hierarchy is crucial for working with closures.",
            "Function scope vs block scope: `var` declarations are hoisted to the function level, while `let` and `const` are hoisted to the block level. This fundamental difference affects how variables behave in loops and conditional statements.",
            "Arguments object and function parameters: Function parameters create their own scope and can shadow outer variables. The arguments object provides access to all function arguments, even those not explicitly declared as parameters.",
          ],
        },
        {
          heading: "Block Scope Essentials",
          paragraphs: [
            "Block scope was introduced with ES6 to solve problems with `var`. Variables declared with `let` and `const` are scoped to the nearest enclosing block, providing better control over variable lifetime.",
            "Temporal Dead Zone (TDZ): `let` and `const` variables cannot be accessed before their declaration. This prevents the confusing behavior of `var` hoisting and encourages better coding practices.",
            "Block scope in loops: Each iteration of a `for` loop creates a new block scope, allowing `let` and `const` to work correctly in loop closures. This fixes the classic `var` loop variable problem.",
            "Block scope with `if` statements and other control structures: Variables declared inside `if` blocks are scoped to that block, preventing accidental pollution of outer scopes.",
          ],
        },
        {
          heading: "Lexical Scope Patterns",
          paragraphs: [
            "Closure patterns for data privacy: Closures can create private variables that are only accessible through specific functions. This is useful for implementing the module pattern and creating encapsulated APIs.",
            "Function factories: Functions that return other functions can use lexical scope to customize the returned function's behavior. This is common in event handlers and configuration functions.",
            "Scope chain resolution: Understanding how JavaScript walks up the scope chain helps debug variable resolution issues and optimize code performance.",
            "Lexical vs dynamic scope: JavaScript uses lexical scope, meaning scope is determined at compile time. This differs from dynamic scoping used in some other languages.",
          ],
        },
        {
          heading: "Common Scope Issues and Solutions",
          paragraphs: [
            "Variable hoisting confusion: `var` declarations are hoisted, which can lead to undefined values. Solution: Use `let` and `const` for block-scoped, non-hoisted variables.",
            "Closure in loops: Using `var` in loop closures captures the same variable. Solution: Use `let` in loops or IIFEs to create separate scopes per iteration.",
            "Global variable conflicts: Multiple scripts can overwrite global variables. Solution: Use modules or namespaces to isolate code.",
            "Scope pollution: Declaring variables in outer scopes when they should be local. Solution: Declare variables in the narrowest scope possible.",
          ],
        },
        {
          heading: "Module Scope and Modern JavaScript",
          paragraphs: [
            "ES6 modules provide file-level scope: Variables in modules are private by default and must be explicitly exported. This prevents accidental global pollution and enables tree-shaking.",
            "Import/export syntax: `import` and `export` statements work with module scope to share code between files while maintaining encapsulation.",
            "Module vs script scope: Modules run in strict mode by default and have their own scope separate from the global scope.",
            "Bundlers and module resolution: Modern build tools handle module scope across multiple files, creating efficient bundles for production.",
          ],
        },
        {
          heading: "Best Practices",
          paragraphs: [
            "Prefer `const` for values that don't change, `let` for reassignments, avoid `var`. This modern approach prevents many scope-related bugs.",
            "Declare variables at the top of their scope: While not required with `let`/`const`, it improves code readability and prevents TDZ issues.",
            "Use descriptive variable names: Clear naming reduces the need to rely on scope for understanding variable purpose.",
            "Minimize global variables: Use modules, classes, or closures to encapsulate functionality and reduce global namespace pollution.",
            "Understand closure implications: Be aware of memory implications when creating long-lived closures, and clean up references when no longer needed.",
            "Use strict mode: Enables better error checking for scope-related issues like implicit globals.",
            "Test scope behavior: Write unit tests that verify variable accessibility and closure behavior in different scenarios.",
          ],
        },
      ]}
      examples={[
        {
          title: "Block vs Function Scope",
          code: `function test() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // 1
  console.log(typeof b); // undefined
}`,
          explanation: "`var` escapes the block to function scope; `let` stays inside the block.",
        },
        {
          title: "Closure Example",
          code: `function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2`,
          explanation: "Returned function closes over `count`, preserving state across calls.",
        },
        {
          title: "Global Scope Pollution",
          code: `// Avoid this
function badPractice() {
  globalVar = 'pollutes global scope';
}

// Better
function goodPractice() {
  const localVar = 'stays local';
  return localVar;
}`,
          explanation: "Implicit globals create hard-to-debug issues; always declare variables properly.",
        },
        {
          title: "Block Scope in Loops",
          code: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 3, 3, 3`,
          explanation: "`let` creates a new binding per iteration; `var` shares the same variable.",
        },
        {
          title: "Lexical Scope Resolution",
          code: `const x = 'global';

function outer() {
  const x = 'outer';
  
  function inner() {
    const x = 'inner';
    console.log(x); // 'inner'
  }
  
  inner();
}

outer();`,
          explanation: "JavaScript resolves variables by walking up the scope chain from inner to outer.",
        },
        {
          title: "Closure for Data Privacy",
          code: `function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
console.log(account.deposit(50)); // 150`,
          explanation: "Closure keeps `balance` private while exposing controlled access methods.",
        },
        {
          title: "Module Pattern with Closures",
          code: `const Calculator = (function() {
  let memory = 0;
  
  function add(x, y) {
    return x + y;
  }
  
  function store(value) {
    memory = value;
  }
  
  function recall() {
    return memory;
  }
  
  return { add, store, recall };
})();

Calculator.store(42);
console.log(Calculator.recall()); // 42`,
          explanation: "IIFE creates module scope, exposing only public methods while keeping state private.",
        },
      ]}
      mistakes={[
        { title: "Using `var` unintentionally", fix: "`var` can leak out of blocks — switch to `let`/`const`." },
        { title: "Assuming globals are safe", fix: "Avoid implicit globals; always declare with `let`/`const`." },
        { title: "Misunderstanding closure scope", fix: "Remember closures capture variables by reference, not value." },
        { title: "Overusing global scope", fix: "Use modules or closures to encapsulate functionality." },
        { title: "Ignoring TDZ errors", fix: "Declare variables before use to avoid ReferenceError." },
        { title: "Variable name conflicts", fix: "Use unique names or block scope to prevent shadowing." },
      ]}
      faqs={[
        { q: "When should I use `const`?", a: "Use `const` by default unless you need to reassign the variable. It prevents accidental mutations and makes code more predictable." },
        { q: "Do closures cause memory leaks?", a: "Closures keep referenced variables alive; manage references and avoid long-lived closures when not needed. Modern garbage collectors handle most cases well." },
        { q: "What's the difference between scope and context?", a: "Scope is about variable accessibility; context (this) is about the object a function is called on. They work together but are different concepts." },
        { q: "Can I change a const variable?", a: "No, `const` prevents reassignment but doesn't make objects immutable. Object properties can still be changed." },
        { q: "How does strict mode affect scope?", a: "Strict mode prevents implicit globals and throws errors for undeclared variables, making scope issues more visible." },
        { q: "Are arrow functions scoped differently?", a: "Arrow functions don't have their own `this` context but inherit lexical scope for variables, just like regular functions." },
        { q: "What's the performance impact of closures?", a: "Closures can retain more memory but modern JS engines optimize well. The main cost is in code clarity and potential memory retention." },
        { q: "How do modules relate to scope?", a: "Modules create their own scope, preventing global pollution and enabling better code organization and tree-shaking." },
      ]}
      related={[{ label: "Variables", href: "/javascript/variables" }, { label: "var, let, const", href: "/javascript/variables/var-let-const" }, { label: "Hoisting", href: "/javascript/variables/hoisting" }, { label: "Closures", href: "/javascript/closures" }]}
    />
    </>
  );
}
