import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JavaScript Scope Chain - Variable Resolution | Online Compiler',
  description: 'Master the scope chain in JavaScript. Learn how variables are resolved through nested scopes and how this mechanism enables closures.',
  keywords: 'scope chain, variable resolution, lookup, scope levels, nested functions, JavaScript',
  openGraph: {
    title: 'JavaScript Scope Chain Guide',
    description: 'Understand how scope chain resolves variables and enables closures.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/closures/scope-chain',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Scope Chain',
    description: 'Learn how scope chain works for variable resolution.',
  },
};

export default function ScopeChainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="w-full px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Scope Fundamentals
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            The Scope Chain: How Variables Are Resolved
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            The scope chain is JavaScript's mechanism for resolving variable references. It determines where and how variables are found by traversing nested scopes from innermost to outermost until the variable is located or an error is thrown.
          </p>
        </div>

        {/* What is Scope Chain */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the Scope Chain?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The scope chain is a hierarchy of scopes created by nested functions. When JavaScript needs to access a variable, it searches through this chain from the current scope outward until it finds the variable or reaches the global scope. This process ensures variables are accessed from their correct context.
          </p>
          <CodeExample
            title='Basic Scope Chain'
            code={`let globalVar = 'global';

function outer() {
  let outerVar = 'outer';
  
  function inner() {
    let innerVar = 'inner';
    
    console.log(innerVar);   // Found immediately in local scope
    console.log(outerVar);   // Found in outer function scope
    console.log(globalVar);  // Found in global scope
  }
  
  inner();
}

outer();`}
            explanation="The scope chain allows inner() to search for variables: local → outer function → global scopes."
          />
        </section>

        {/* How Lookup Works */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Variable Lookup Process</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            JavaScript follows a specific order when resolving variables:
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4">Variable Resolution Order:</h3>
            <ol className="space-y-2 text-blue-900 dark:text-blue-200">
              <li>1. <strong>Local Scope</strong> - Variables declared in the current function</li>
              <li>2. <strong>Outer Function Scope</strong> - Variables in parent function(s)</li>
              <li>3. <strong>Global Scope</strong> - Variables declared globally</li>
              <li>4. <strong>Built-ins</strong> - Built-in objects like Object, Array, etc.</li>
            </ol>
          </div>

          <CodeExample
            title='Scope Chain Resolution'
            code={`let level0 = 'global';

function level1() {
  let level1Var = 'level 1';
  
  function level2() {
    let level2Var = 'level 2';
    
    function level3() {
      let level3Var = 'level 3';
      
      // Search: level3 → level2 → level1 → global
      console.log(level3Var);  // ✓ Found in level3
      console.log(level2Var);  // ✓ Found in level2
      console.log(level1Var);  // ✓ Found in level1
      console.log(level0);     // ✓ Found in global
    }
    
    level3();
  }
  
  level2();
}

level1();`}
            explanation="Variable lookup traverses the scope chain until finding a match. Deeper nesting creates longer chains."
          />
        </section>

        {/* Variable Shadowing */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Variable Shadowing</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            When inner scopes declare variables with the same name as outer scopes, the inner variable shadows (hides) the outer one.
          </p>

          <CodeExample
            title='Shadowing Example'
            code={`let name = 'global';

function parent() {
  let name = 'parent';
  
  function child() {
    let name = 'child';
    console.log(name); // 'child' - innermost always wins
  }
  
  child();
  console.log(name); // 'parent' - still accessible at this level
}

parent();
console.log(name); // 'global' - global still intact`}
            explanation="Name collisions in inner scopes shadow outer variables. The lookup stops at the first match."
          />
        </section>

        {/* Scope Chain with Closures */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Scope Chain and Closures</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Closures benefit from the scope chain. A closure "remembers" its entire scope chain, allowing it to access variables from the context where it was created.
          </p>

          <CodeExample
            title='Closures Capture the Scope Chain'
            code={`function createCounter() {
  let count = 0; // Captured in scope chain
  
  return function increment() {
    count++; // Searches scope chain, finds count
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 1 - uses counter1's scope chain
counter1(); // 2 - same closure, same count variable
counter2(); // 1 - different scope chain, different count`}
            explanation="Each closure maintains its own scope chain. counter1 and counter2 access separate count variables."
          />

          <CodeExample
            title='Loop Closure Problem'
            code={`// WRONG - All closures share same scope chain
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 - same scope chain, i=3 by the time they run

// CORRECT - let creates new scope per iteration
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0, 1, 2 - each iteration gets its own scope chain`}
            explanation="let creates a new scope per iteration, giving each closure its own scope chain with the correct value."
          />
        </section>

        {/* Scope Chain vs This */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Important: Scope Chain vs 'this'</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            A common misconception is that 'this' is resolved through the scope chain. It isn't. 'this' is determined by how a function is called, not by the scope chain.
          </p>

          <CodeExample
            title='this is NOT in the Scope Chain'
            code={`const obj = {
  name: 'Object',
  method() {
    console.log(this.name); // 'Object' - this is obj
    
    function inner() {
      console.log(this.name); // undefined - this is globalThis/undefined
    }
    
    inner();
  }
};

obj.method();`}
            explanation="'this' binding is separate from scope chain. Inner functions get their own 'this' based on how they're called."
          />

          <CodeExample
            title='Using Arrow Functions (Scope Chain for this)'
            code={`const obj = {
  name: 'Object',
  method() {
    // Arrow function captures 'this' from lexical scope
    const arrowFunc = () => {
      console.log(this.name); // 'Object' - inherits this from method
    };
    
    arrowFunc();
  }
};

obj.method(); // Output: 'Object'`}
            explanation="Arrow functions inherit 'this' from their lexical scope (scope chain). Regular functions don't."
          />
        </section>

        {/* Performance */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Scope Chain Performance</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Variable access through deep scope chains can be slower than local access, but modern engines optimize this significantly.
          </p>

          <CodeExample
            title='Performance Comparison'
            code={`let global = 0;

function outer() {
  let outerVar = 0;
  
  return function inner() {
    // Fastest - local variables
    // Medium - outer scope variables (scope chain lookup)
    // Slowest - global variables (longest chain)
    
    // In tight loops, cache outer variables locally:
    const cached = outerVar;
    for (let i = 0; i < 1000000; i++) {
      let sum = cached + i; // Uses local cache, not scope chain
    }
  };
}

const func = outer();
func();`}
            explanation="Deep scope chain lookups can impact performance. Cache outer variables in local scope for tight loops."
          />
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Scope Chain Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Wrong Lookup Order</h3>
              <CodeExample
                title='Mistake: Assuming Global is Checked First'
                code={`let x = 'global';

function func() {
  // Search order: local → outer → global
  // NOT global first, even if global x is defined
  console.log(x); // 'global' - found at step 3
  
  let x = 'local'; // If defined here, would shadow global
}

func();
console.log(x); // 'global' - function scope doesn't affect outer`}
                explanation="Variable lookup always follows: local → outer → global. The first match stops the search."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Unintended Shadowing</h3>
              <CodeExample
                title='Mistake: Shadowing Makes Variables Inaccessible'
                code={`let value = 'outer';

function process() {
  let value = 'inner'; // Shadows outer value
  
  return function compute() {
    // No way to access the shadowed 'outer' value now!
    console.log(value); // 'inner' only
  };
}

// FIX: Use different variable names
let outerValue = 'outer';
function processFix() {
  let innerValue = 'inner'; // No shadowing
  return () => console.log(outerValue, innerValue);
}`}
                explanation="Shadowing makes outer variables inaccessible. Use different names to maintain access to both."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting Closure Scope Capture</h3>
              <CodeExample
                title='Mistake: Closure Captures Entire Scope'
                code={`// Closures capture everything in scope chain, not just used vars
function createClosure() {
  let largeArray = new Array(1000000).fill('data');
  
  return function() {
    return 42; // Doesn't use largeArray, but still captures it!
  };
}

// FIX: Move unused variables out or return null from outer
function createClosureOptimized() {
  return function() {
    return 42; // Can garbage collect scope if no closures
  };
}`}
                explanation="Closures capture their entire scope chain. Even unused variables prevent garbage collection."
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">Scope Chain Best Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Minimize scope chain depth - keep functions reasonably nested</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use unique variable names to avoid confusing shadowing</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Cache frequently accessed outer variables in local scope</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Be aware of what closures capture - optimize memory usage</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use let/const with proper block scope to control scope boundaries</span>
            </li>
          </ul>
        </section>

        {/* Related Topics */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/javascript/closures" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Closures</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Functions that capture their scope chain</p>
            </Link>
            <Link href="/javascript/closures/lexical-scope" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Lexical Scope</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Scope determined by code structure</p>
            </Link>
            <Link href="/javascript/this-keyword" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">This Keyword</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">How 'this' binding works (separate from scope)</p>
            </Link>
            <Link href="/javascript/variables" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Variables</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn let, const, var declarations</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How long can the scope chain be?</h3>
              <p className="text-slate-700 dark:text-slate-300">Theoretically unlimited, but practical limit is your nesting depth. Deep chains can impact performance and readability.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I access outer scope variables from inner functions?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes, inner functions can access all variables in their scope chain - local, parent function, and global scopes.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can outer functions access inner scope variables?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, scope chain only goes outward. Outer functions cannot access inner function variables. The chain is directional.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How does the scope chain affect garbage collection?</h3>
              <p className="text-slate-700 dark:text-slate-300">Variables in outer scopes cannot be garbage collected while closures reference them, even if unused. This can cause memory leaks.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Is the scope chain the same as the call stack?</h3>
              <p className="text-slate-700 dark:text-slate-300">No. The scope chain is determined by code structure (lexical). The call stack is determined by function calls (runtime).</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}