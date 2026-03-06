import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JavaScript Lexical Scope - Understanding Variable Access | Online Compiler',
  description: 'Master lexical scope in JavaScript. Learn how scope is determined at compile time and how it enables closures and proper variable management.',
  keywords: 'lexical scope, static scope, variable scope, scope rules, JavaScript fundamentals, closures',
  openGraph: {
    title: 'JavaScript Lexical Scope Guide',
    description: 'Understand lexical scoping and how it determines variable accessibility in JavaScript.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/closures/lexical-scope',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Lexical Scope',
    description: 'Learn how lexical scope works and enables closures.',
  },
};

export default function LexicalScopePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Scope Fundamentals
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Lexical Scope: Understanding Variable Access
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Lexical scope is the foundation of JavaScript's scoping system. It determines where variables can be accessed based on their position in the code, not where they are called. This is what makes closures possible.
          </p>
        </div>

        {/* What is Lexical Scope */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is Lexical Scope?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Lexical scope means that the accessibility of variables is determined by the position of the variables in the nested function scopes at write-time (or parse-time). A function can access variables that were available at the point where that function was defined.
          </p>
          <CodeExample
            title='Basic Lexical Scope'
            code={`let globalVar = 'global';

function outer() {
  let outerVar = 'outer';
  
  function inner() {
    let innerVar = 'inner';
    
    console.log(innerVar);     // 'inner' - local scope
    console.log(outerVar);     // 'outer' - outer scope (lexically)
    console.log(globalVar);    // 'global' - global scope
  }
  
  inner();
}

outer();`}
            explanation="Inner functions can access variables from their lexical (definition-time) environment, including outer function and global scopes."
          />
        </section>

        {/* Lexical vs Dynamic Scope */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Lexical Scope vs Dynamic Scope</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            JavaScript uses lexical scope, not dynamic scope. This means scope is determined by code structure, not by the call stack at runtime.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Aspect</th>
                  <th className="px-4 py-3 font-bold">Lexical Scope</th>
                  <th className="px-4 py-3 font-bold">Dynamic Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Determined By</td>
                  <td className="px-4 py-3">Code structure (write-time)</td>
                  <td className="px-4 py-3">Call stack (runtime)</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Uses</td>
                  <td className="px-4 py-3">JavaScript, Python, Java</td>
                  <td className="px-4 py-3">Some languages (Bash, older Lisp)</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Predictability</td>
                  <td className="px-4 py-3">Predictable - can read code</td>
                  <td className="px-4 py-3">Unpredictable - depends on calls</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeExample
            title='Why Lexical Scope Matters'
            code={`let name = 'global';

function greet() {
  console.log(name); // Will always use lexical 'name'
}

function wrapper() {
  let name = 'wrapper scope';
  greet(); // Calls greet from different context
}

greet();    // Output: 'global'
wrapper();  // Output: 'global' (NOT 'wrapper scope')

// With dynamic scope (hypothetical):
// wrapper() would output: 'wrapper scope' - wrong!`}
            explanation="Lexical scope ensures predictable variable resolution regardless of how functions are called."
          />
        </section>

        {/* Scope Levels */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Scope Levels in JavaScript</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Global Scope</h3>
              <CodeExample
                title='Global Scope - Accessible Everywhere'
                code={`let globalVar = 'accessible everywhere';

function func1() {
  console.log(globalVar); // Can access
}

function func2() {
  console.log(globalVar); // Can access
}

func1(); // 'accessible everywhere'
func2(); // 'accessible everywhere'`}
                explanation="Variables in global scope are accessible from anywhere in the code."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Function Scope</h3>
              <CodeExample
                title='Function Scope - Local to Function'
                code={`function outer() {
  let functionVar = 'local to outer';
  
  function inner() {
    console.log(functionVar); // Can access parent function scope
  }
  
  inner(); // 'local to outer'
}

// console.log(functionVar); // ReferenceError - not accessible`}
                explanation="Variables in function scope are only accessible within that function and its nested functions."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Block Scope (let/const)</h3>
              <CodeExample
                title='Block Scope with let and const'
                code={`if (true) {
  let blockVar = 'block scoped';
  const blockConst = 'also block scoped';
  var functionVar = 'function scoped'; // var ignores block scope!
  
  console.log(blockVar);       // Works
  console.log(blockConst);     // Works
}

// console.log(blockVar);      // ReferenceError
// console.log(blockConst);    // ReferenceError
console.log(functionVar);      // Works - var is function scoped`}
                explanation="let and const create block scope. var creates function scope (older behavior). Always use let/const."
              />
            </div>
          </div>
        </section>

        {/* Scope Chain */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Scope Chain</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            When JavaScript looks for a variable, it searches through nested scopes from innermost to outermost until it finds the variable or reaches global scope.
          </p>

          <CodeExample
            title='Scope Chain Resolution'
            code={`let level0 = 'global';

function level1() {
  let level1Var = 'level 1';
  
  function level2() {
    let level2Var = 'level 2';
    
    function level3() {
      let level3Var = 'level 3';
      
      // Searches: level3 → level2 → level1 → global
      console.log(level3Var);  // Found in local
      console.log(level2Var);  // Found in parent function
      console.log(level1Var);  // Found in grandparent function
      console.log(level0);     // Found in global
    }
    
    level3();
  }
  
  level2();
}

level1();`}
            explanation="Variable lookup follows the scope chain from innermost to outermost, stopping at the first match."
          />
        </section>

        {/* Variable Shadowing */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Variable Shadowing</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            When a variable in an inner scope has the same name as a variable in an outer scope, the inner variable "shadows" the outer one.
          </p>

          <CodeExample
            title='Variable Shadowing Example'
            code={`let name = 'global';

function outer() {
  let name = 'outer';
  
  function inner() {
    let name = 'inner';
    console.log(name); // 'inner' - innermost scope wins
  }
  
  inner();
  console.log(name); // 'outer'
}

outer();
console.log(name); // 'global'`}
            explanation="Inner scope variables shadow (hide) outer scope variables with the same name. The closest match is always used."
          />
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Lexical Scope Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Confusing Dynamic and Lexical Scope</h3>
              <CodeExample
                title='Wrong: Dynamic Scope Thinking'
                code={`let result = 'global';

function func1() {
  console.log(result); // Uses LEXICAL scope, not call time
}

function func2() {
  let result = 'local';
  func1(); // Output: 'global' (NOT 'local')
}

func2();`}
                explanation="Remember: scope is determined by code structure, not by where functions are called."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using var in Loops</h3>
              <CodeExample
                title='Mistake: Block Scope with var'
                code={`// WRONG - var creates function scope
for (var i = 0; i < 3; i++) {
  // i is accessible everywhere in function
}
console.log(i); // 3 - still accessible!

// CORRECT - let creates block scope
for (let j = 0; j < 3; j++) {
  // j is only accessible in loop
}
// console.log(j); // ReferenceError`}
                explanation="Always use let/const for block scope. var creates function scope which often causes bugs."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Creating Global Variables Accidentally</h3>
              <CodeExample
                title='Mistake: Accidental Globals'
                code={`function createGlobal() {
  x = 'accidentally global'; // Creates global variable!
}

createGlobal();
console.log(x); // 'accidentally global'
console.log(window.x); // Also exists globally!

// CORRECT - Always declare variables
function correct() {
  let x = 'properly scoped';
}

// Use strict mode to catch this
'use strict';
function strictMode() {
  y = 'throws ReferenceError'; // Error in strict mode
}`}
                explanation="Always declare variables. Use 'use strict' mode to catch accidental globals."
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">Best Practices for Lexical Scope</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Always use let/const, avoid var for predictable block scoping</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Declare variables in the innermost scope where they're needed</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Be aware of variable shadowing - avoid confusing variable names</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use 'use strict' mode to catch accidental globals</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Keep scopes small and focused for better code readability</span>
            </li>
          </ul>
        </section>

        {/* Related Topics */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/javascript/closures" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Closures</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn how lexical scope enables closures</p>
            </Link>
            <Link href="/javascript/closures/scope-chain" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Scope Chain</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Understand variable resolution order</p>
            </Link>
            <Link href="/javascript/variables" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Variables</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn let, const, and var declaration</p>
            </Link>
            <Link href="/javascript/functions" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Functions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Understand function fundamentals</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Is lexical scope the same as static scope?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes, the terms are used interchangeably. Both refer to scope being determined at compile/parse time based on code structure.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can lexical scope be changed at runtime?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, lexical scope is fixed at parse time. You cannot modify which variables a function can access based on runtime conditions.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How does lexical scope relate to closures?</h3>
              <p className="text-slate-700 dark:text-slate-300">Closures exist exactly because of lexical scope. Lexical scope allows functions to remember and access the variables from where they were defined, even after those outer functions have completed.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference between lexical scope and execution context?</h3>
              <p className="text-slate-700 dark:text-slate-300">Lexical scope determines which variables a function CAN access. Execution context determines the environment when code is actually executed, including 'this' binding.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}