import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Scope & Scope Chain - Complete Guide | Online Compiler",
  description:
    "Master JavaScript scope and scope chain. Learn global scope, local scope, function scope, block scope, lexical scope, and how variable lookup works in depth with practical examples.",
  keywords: [
    "javascript scope",
    "scope chain",
    "global scope",
    "local scope",
    "function scope",
    "block scope",
    "lexical scope",
    "variable lookup",
    "javascript tutorial",
  ],
  openGraph: {
    title: "JavaScript Scope & Scope Chain - Complete Guide",
    description:
      "Master JavaScript scope and scope chain with comprehensive explanations and real-world examples.",
    url: "/javascript/scope",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Scope & Scope Chain",
    description:
      "Learn JavaScript scope, scope chain, and variable accessibility in depth.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/scope" },
};

export default function JavaScriptScopePage() {
  return (
    <main className="w-full px-4 py-12">
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">JavaScript Scope & Scope Chain: Complete Guide</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-semibold mb-2">What You'll Learn:</p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ What is scope and why it matters in JavaScript</li>
            <li>✅ Types of scope: global, function, block, and lexical scope</li>
            <li>✅ How the scope chain works internally</li>
            <li>✅ Variable lookup process step-by-step</li>
            <li>✅ Common scope pitfalls and how to avoid them</li>
            <li>✅ Interview questions about scope</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">What is Scope?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Scope determines where variables are accessible in your code. Every variable has a scope – a specific region of code where that variable exists and can be used. Variables declared in one scope are not accessible outside that scope, which prevents naming conflicts and improves code organization.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Think of scope like a house with rooms. Variables declared in one room (scope) aren't automatically accessible in other rooms. However, you can look into the parent room (parent scope) from your current room, creating a chain of accessibility.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Types of Scope in JavaScript</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">1. Global Scope</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Variables declared outside any function or block have global scope. They are accessible everywhere in your code – in functions, blocks, and nested functions. In browsers, global variables become properties of the `window` object. In Node.js, they become properties of the `global` object.
        </p>
        <CodeExample
          title="Global Scope Example"
          code={`// Global scope - accessible everywhere
var globalVar = "I'm global";
let globalLet = "Also global";
const globalConst = "Also global";

function myFunction() {
  console.log(globalVar); // "I'm global" ✓
  console.log(globalLet); // "Also global" ✓
}

myFunction();
console.log(globalVar); // "I'm global" ✓

// In browser:
console.log(window.globalVar); // "I'm global" ✓

// In Node.js:
console.log(global.globalVar); // undefined (var at top level acts differently)
`}
          explanation="Variables declared at the top level are in global scope and accessible from any function or block."
        />

        <h3 className="text-2xl font-bold mt-8 mb-4">2. Function Scope (Local Scope)</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Variables declared inside a function are only accessible inside that function. Each function creates its own scope. Variables in function scope are created when the function is called and destroyed when it finishes executing. This is the foundation of data encapsulation in JavaScript.
        </p>
        <CodeExample
          title="Function Scope Example"
          code={`function outer() {
  var functionVar = "I'm in function scope";
  
  function inner() {
    console.log(functionVar); // "I'm in function scope" ✓
    // Can access parent function's variables
  }
  
  inner();
}

outer();
// console.log(functionVar); // ReferenceError! Not accessible here

function test() {
  var x = 10;
  let y = 20;
  const z = 30;
  
  console.log(x, y, z); // 10 20 30 ✓
}

test();
// console.log(x); // ReferenceError!
// console.log(y); // ReferenceError!
// console.log(z); // ReferenceError!
`}
          explanation="Variables inside functions are scoped to that function and not accessible outside."
        />

        <h3 className="text-2xl font-bold mt-8 mb-4">3. Block Scope (Introduced in ES6)</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Block scope refers to variables declared with `let` and `const` inside a block (anything within curly braces). This includes if statements, loops, switches, and try-catch blocks. Variables declared with `var` do NOT have block scope – they are function-scoped instead. This is a major difference between `var` and `let`/`const`.
        </p>
        <CodeExample
          title="Block Scope Example"
          code={`// if block scope
if (true) {
  let blockLet = "I'm block scoped";
  const blockConst = "Also block scoped";
  var blockVar = "I'm function scoped!";
  
  console.log(blockLet); // "I'm block scoped" ✓
}

// console.log(blockLet); // ReferenceError! Block scope
// console.log(blockConst); // ReferenceError! Block scope
console.log(blockVar); // "I'm function scoped!" ✓ (var ignores blocks)

// for loop block scope
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2 ✓
  // i is block-scoped to this iteration
}
// console.log(i); // ReferenceError! (let has block scope)

for (var j = 0; j < 3; j++) {
  // j is function-scoped
}
console.log(j); // 3 ✓ (var leaks out of loop)
`}
          explanation="let and const respect block scope, but var is function-scoped and ignores block boundaries."
        />

        <h3 className="text-2xl font-bold mt-8 mb-4">4. Lexical Scope (Static Scope)</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Lexical scope means that the accessible variables are determined by the function's position in the source code, not where it's called from. A function can access variables from its parent scope (the scope it was defined in), not from where it's executed. This is the most important concept for understanding closures.
        </p>
        <CodeExample
          title="Lexical Scope Example"
          code={`let globalValue = "Global";

function outer() {
  let outerValue = "Outer";
  
  function inner() {
    let innerValue = "Inner";
    
    // inner can access:
    console.log(innerValue);   // "Inner" ✓ (own scope)
    console.log(outerValue);   // "Outer" ✓ (parent scope - lexical)
    console.log(globalValue);  // "Global" ✓ (grandparent scope)
  }
  
  inner();
  // console.log(innerValue); // ReferenceError! Can't access child scope
}

outer();

// The chain is determined by WHERE functions are DEFINED,
// not WHERE they are CALLED

function callOuter() {
  let callOuterValue = "Call Outer";
  outer(); // outer still accesses outerValue from its definition spot
           // NOT from the callOuterValue here
}

callOuter();
`}
          explanation="Lexical scope means functions inherit variables from where they're defined, not where they're called."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">The Scope Chain Explained</h2>
        <p className="text-lg leading-relaxed mb-4">
          The scope chain is the mechanism JavaScript uses to look up variables. When you reference a variable, JavaScript searches for it in this order:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Current Scope:</strong> Is the variable declared in the current scope?</li>
          <li><strong>Parent Scope:</strong> If not found, check the parent scope (the scope where the function was defined)</li>
          <li><strong>Up the Chain:</strong> Keep moving up the scope chain until finding the variable</li>
          <li><strong>Global Scope:</strong> If not found anywhere, check global scope</li>
          <li><strong>ReferenceError:</strong> If not found anywhere, throw a ReferenceError</li>
        </ol>

        <CodeExample
          title="Scope Chain Lookup"
          code={`let globalVar = "Global";

function level1() {
  let level1Var = "Level 1";
  
  function level2() {
    let level2Var = "Level 2";
    
    function level3() {
      let level3Var = "Level 3";
      
      // Variable lookup order:
      console.log(level3Var);  // ✓ Found in current scope (Level 3)
      console.log(level2Var);  // ✓ Found in parent scope (Level 2)
      console.log(level1Var);  // ✓ Found in grandparent scope (Level 1)
      console.log(globalVar);  // ✓ Found in global scope (Global)
      // console.log(unknown); // ✗ ReferenceError! Not found anywhere
    }
    
    level3();
  }
  
  level2();
}

level1();

// Visualization of scope chain:
// Global Scope
//   └── level1() scope
//         └── level2() scope
//               └── level3() scope (searches here first, then up)
`}
          explanation="JavaScript searches for variables starting from the current scope and moving up through parent scopes."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">var vs let vs const Scope Behavior</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Understanding scope differences between var, let, and const is crucial for writing correct JavaScript.
        </p>

        <CodeExample
          title="var vs let vs const Scoping"
          code={`// VAR: Function-scoped (not block-scoped)
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 ✓ (var leaks out of block)
}

// LET: Block-scoped (respects block boundaries)
function letExample() {
  if (true) {
    let y = 20;
  }
  // console.log(y); // ReferenceError! (let respects blocks)
}

// CONST: Block-scoped (like let)
function constExample() {
  if (true) {
    const z = 30;
  }
  // console.log(z); // ReferenceError! (const respects blocks)
}

// In loops - major difference
function loopVar() {
  for (var i = 0; i < 3; i++) { }
  console.log(i); // 3 ✓ (var loops leak)
}

function loopLet() {
  for (let j = 0; j < 3; j++) { }
  // console.log(j); // ReferenceError! (let is block-scoped)
}

// Rule: Use const by default, let when you need to reassign, avoid var
`}
          explanation="var is function-scoped, while let and const are block-scoped. This difference matters significantly in loops and conditionals."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Closures and Scope</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Closures are created by the scope chain. When a function is returned or passed as a callback, it carries its scope chain with it, "closing over" the variables it references. This is one of JavaScript's most powerful features.
        </p>

        <CodeExample
          title="Closures Demonstrate Scope"
          code={`function createCounter() {
  let count = 0; // This variable is captured in the closure
  
  return function increment() {
    count += 1; // Accesses 'count' from parent scope
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 'count' is not accessible here:
// console.log(count); // ReferenceError!

// But the returned function can still access it through closure
// This demonstrates lexical scope and closures working together

// Another closure example:
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier; // Closes over 'multiplier'
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Each closure has its own 'multiplier' variable
`}
          explanation="Functions retain access to their parent scope even after returning, creating closures that capture variables."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Common Scope Pitfalls</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">❌ Pitfall 1: Using var in Loops</h3>
        <CodeExample
          title="The Classic Loop Closure Bug"
          code={`// WRONG: Using var in loop
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(function() {
    console.log(i);
  });
}

functions[0](); // 3 (Oops! Expected 0, got 3)
functions[1](); // 3 (Oops! Expected 1, got 3)
functions[2](); // 3 (Oops! Expected 2, got 3)

// WHY: var is function-scoped, so there's only ONE i variable
// By the time functions are called, i = 3

// CORRECT: Use let (block-scoped)
const functions2 = [];
for (let i = 0; i < 3; i++) {
  functions2.push(function() {
    console.log(i);
  });
}

functions2[0](); // 0 ✓
functions2[1](); // 1 ✓
functions2[2](); // 2 ✓

// WHY: let creates a NEW i for each iteration
`}
          explanation="Using var in loops is a classic bug. Use let instead to get a new variable for each iteration."
        />

        <h3 className="text-2xl font-bold mt-8 mb-4">❌ Pitfall 2: Accessing Variables Before Declaration</h3>
        <CodeExample
          title="Hoisting and Temporal Dead Zone"
          code={`// With var (hoisted, initialized to undefined):
console.log(x); // undefined (not ReferenceError)
var x = 10;

// With let/const (hoisted but not initialized - Temporal Dead Zone):
// console.log(y); // ReferenceError! (Temporal Dead Zone)
let y = 10; // y is only accessible from here

// Better practice: Always declare before using
let z = 10;
console.log(z); // 10 ✓

// If you need to check existence, use typeof for var:
console.log(typeof undeclared); // "undefined" (safe check)
// But better to declare everything you use
`}
          explanation="Variables with let/const are in a 'Temporal Dead Zone' until their declaration is reached."
        />

        <h3 className="text-2xl font-bold mt-8 mb-4">❌ Pitfall 3: Global Scope Pollution</h3>
        <CodeExample
          title="Accidentally Creating Global Variables"
          code={`// WRONG: Missing var/let/const creates global variable
function process() {
  result = calculateSomething(); // Oops! No var/let/const
  return result;
}

function process2() {
  result = calculateSomethingElse(); // Same global variable!
  return result; // Overwrites previous result
}

// CORRECT: Always declare with var/let/const
function processRight() {
  const result = calculateSomething(); // Block-scoped
  return result;
}

function process2Right() {
  const result = calculateSomethingElse(); // Different variable
  return result;
}

// Enable strict mode to prevent accidental globals:
"use strict";

function strictTest() {
  unknownVar = 5; // ReferenceError in strict mode ✓ (catches the bug)
}
`}
          explanation="Always declare variables with var, let, or const to avoid polluting global scope and creating bugs."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Scope Best Practices</h2>
        <ul className="space-y-4 mb-8">
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Use const by default:</strong> const prevents reassignment and makes intentions clear
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Use let when reassignment is needed:</strong> let has proper block scope
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Avoid var:</strong> var's function scoping causes confusion and bugs
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Minimize global scope:</strong> Wrap code in functions or modules
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Use modules:</strong> Import/export to control what's visible
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Use strict mode:</strong> "use strict"; at the top prevents many scope bugs
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Understand closures:</strong> They demonstrate scope working perfectly
            </div>
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Interview Q&A About Scope</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: What's the difference between let and var?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: var is function-scoped, while let is block-scoped. var is hoisted and initialized to undefined, while let is hoisted but not initialized (Temporal Dead Zone). Use let by default – it prevents many common bugs.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: Explain the scope chain.</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: When accessing a variable, JavaScript looks in the current scope first, then the parent scope, up through all parent scopes, and finally global scope. If not found anywhere, it throws a ReferenceError. This creates a chain of accessible scopes based on lexical (static) position in code.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: What is lexical scope?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Lexical (or static) scope means that accessible variables are determined by the function's position in the source code at definition time, not where it's called from. A function always has access to variables from the scope where it was defined.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: Why does this loop code fail?</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
             <code>
              for (var i = 0; i &lt; 3; i++) {'{'} callbacks.push(() =&gt; console.log(i)); {'}'}
            </code>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              A: var is function-scoped, so there's only one i variable for the entire loop. By the time the callbacks execute, i is 3. Fix: use let instead, which creates a new i for each iteration.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Summary</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>🎯 Scope determines where variables are accessible</li>
            <li>🎯 JavaScript has global, function, block, and lexical scope</li>
            <li>🎯 The scope chain determines variable lookup</li>
            <li>🎯 Lexical scope means access is determined by definition, not execution</li>
            <li>🎯 Use const, then let – avoid var entirely</li>
            <li>🎯 Closures work because of scope and the scope chain</li>
            <li>🎯 Understanding scope is essential for writing correct JavaScript</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
