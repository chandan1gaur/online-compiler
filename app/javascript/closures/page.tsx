import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'JavaScript Closures - Master Functions & Scoping | Online Compiler',
  description: 'Learn JavaScript closures deeply. Understand how functions capture variables, data privacy, scope chains, and closure patterns with interactive examples.',
  keywords: 'closures, javascript closures, scope, function scope, variable scope, encapsulation, closure tutorial, interview questions',
  openGraph: {
    title: 'JavaScript Closures - Complete Guide',
    description: 'Master closures with practical examples and advanced patterns. Learn data privacy and scope management.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/closures',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Closures Tutorial',
    description: 'Deep dive into closures with code examples and real-world applications.',
  },
};

export default function ClosuresPage() {
  return (
    <>
      <Script
        id="json-ld-closures"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript Closures - Master Functions & Scoping',
            description: 'Learn JavaScript closures deeply. Understand how functions capture variables, data privacy, scope chains, and closure patterns with interactive examples.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />
      <article className="max-w-4xl mx-auto px-4 pt-0 pb-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Intermediate Concept
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Closures - Complete Guide
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Master the most powerful feature of JavaScript. Learn how closures work, capture variables, create private state, and enable advanced patterns like modules and data encapsulation.
          </p>
        </div>

        {/* What is a Closure */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is a Closure?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            A closure is a function that has access to variables from its outer (lexical) scope, even after that function has finished executing. In JavaScript, closures are created every time a function is created. They "close over" the variables they reference, allowing those variables to persist in memory.
          </p>
          <CodeExample
            title='Basic Closure Example'
            code={`function outerFunction() {
  const outerVariable = 'I am from outer scope';

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: "I am from outer scope"`}
            explanation="The innerFunction is a closure because it has access to outerVariable even after outerFunction has returned. The variable remains in memory."
          />
        </section>

        {/* How Closures Work */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">How Closures Work Internally</h2>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            When a function is created, it maintains a reference to its lexical environment (the scope in which it was defined). This creates a closure that captures all variables it needs.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">Scope Chain Resolution</h3>
            <ol className="space-y-2 text-blue-900 dark:text-blue-200">
              <li><strong>1. Local Scope:</strong> Variables defined inside the function</li>
              <li><strong>2. Outer Function Scope:</strong> Variables in parent functions (closures)</li>
              <li><strong>3. Global Scope:</strong> Variables in global context</li>
            </ol>
          </div>

          <CodeExample
            title='Scope Chain with Multiple Levels'
            code={`let globalVar = 'global';

function grandparent() {
  let grandparentVar = 'grandparent';
  
  function parent() {
    let parentVar = 'parent';
    
    function child() {
      let childVar = 'child';
      
      console.log(childVar);         // from local
      console.log(parentVar);        // from parent scope
      console.log(grandparentVar);   // from grandparent scope
      console.log(globalVar);        // from global scope
    }
    
    return child;
  }
  
  return parent;
}

const myChild = grandparent()();
myChild(); // Accesses all three closure scopes`}
            explanation="Closures create a chain allowing access to all outer scopes. Variable lookup happens from innermost to outermost."
          />
        </section>

        {/* Practical Examples */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Practical Closure Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Creating Private Variables</h3>
              <CodeExample
                title='Data Encapsulation with Closures'
                code={`function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.count);       // undefined - cannot access directly`}
                explanation="The count variable is private and can only be modified through the returned methods. This prevents direct external access."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Function Factories</h3>
              <CodeExample
                title='Creating Specialized Functions with Closures'
                code={`function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20`}
                explanation="Each closure remembers its multiplier value. This pattern allows creating specialized functions from a general template."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Module Pattern</h3>
              <CodeExample
                title='Module Pattern for Encapsulation'
                code={`const Calculator = (function() {
  let result = 0;

  return {
    add: function(x) {
      result += x;
      return result;
    },
    subtract: function(x) {
      result -= x;
      return result;
    },
    multiply: function(x) {
      result *= x;
      return result;
    },
    getResult: function() {
      return result;
    },
    reset: function() {
      result = 0;
      return result;
    }
  };
})();

console.log(Calculator.add(10));      // 10
console.log(Calculator.multiply(2));  // 20
console.log(Calculator.subtract(5));  // 15`}
                explanation="The Module Pattern uses closures to create private state with a public interface, enabling data privacy and method chaining."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Closures with Event Handlers</h3>
              <CodeExample
                title='Maintaining State in Event Listeners'
                code={`function setupButton(buttonId) {
  let clickCount = 0; // Private state

  document.getElementById(buttonId).addEventListener('click', function() {
    clickCount++;
    console.log(\`Button clicked \${clickCount} times\`);
  });
}

setupButton('myButton');
// Each click increments the closure's clickCount`}
                explanation="Closures preserve state in event listeners, allowing count persistence across multiple invocations."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Currying with Closures</h3>
              <CodeExample
                title='Currying - Functions Returning Functions'
                code={`function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24

// Or with arrow functions for conciseness
const add = a => b => c => a + b + c;
console.log(add(5)(10)(15)); // 30`}
                explanation="Currying breaks functions into sequences of single-argument functions, each returning another function via closures."
              />
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Closure Pitfalls</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Loop Variable Capture Problem</h3>
              <CodeExample
                title='Incorrect: All Closures Reference Same Variable'
                code={`// WRONG - All functions reference the same 'i'
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(function() {
    console.log(i);
  });
}

functions[0](); // Output: 3
functions[1](); // Output: 3
functions[2](); // Output: 3

// CORRECT - Use let
const functions = [];
for (let i = 0; i < 3; i++) {
  functions.push(function() {
    console.log(i);
  });
}

functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2`}
                explanation="var creates function scope, so all iterations share 'i'. Using let creates block scope, giving each iteration its own 'i'."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Memory Leaks from Closures</h3>
              <CodeExample
                title='Closure Holding Large Objects'
                code={`// PROBLEMATIC - Closure holds entire array in memory
function createLeak() {
  const largeArray = new Array(1000000).fill('data');
  
  return function() {
    console.log('Function still holds array in memory');
  };
}

const leaked = createLeak();
// largeArray remains in memory as long as leaked exists

// BETTER - Only capture what you need
function createNoleak() {
  const largeArray = new Array(1000000).fill('data');
  const firstElement = largeArray[0];
  
  return function() {
    console.log(firstElement);
  };
}`}
                explanation="Closures capture entire scopes. Be mindful of what variables closures reference to avoid unnecessary memory usage."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Unexpected 'this' Context</h3>
              <CodeExample
                title="Issues with 'this' in Closures"
                code={`const obj = {
  name: 'Alice',
  createMethod: function() {
    return function() {
      console.log(this.name); // 'this' is window/global, not obj
    };
  }
};

// Solution 1: Use arrow function
const obj = {
  name: 'Alice',
  createMethod: function() {
    return () => console.log(this.name); // 'this' is obj
  }
};

// Solution 2: Bind 'this'
const obj = {
  name: 'Alice',
  createMethod: function() {
    return function() {
      console.log(this.name);
    }.bind(this);
  }
};`}
                explanation="Regular functions in closures lose 'this' context. Use arrow functions or bind() to preserve 'this'."
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference between closure and scope?</h3>
              <p className="text-slate-700 dark:text-slate-300">Scope defines where variables are accessible. A closure is a function that uses variables from its lexical scope. Every function has access to scope, but not every function is called a closure unless it actively references outer variables.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Do closures hurt performance?</h3>
              <p className="text-slate-700 dark:text-slate-300">Modern JavaScript engines optimize closures very well. The performance impact is negligible for most use cases. However, deeply nested closures or large captured scopes in performance-critical code may have minor overhead.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I modify closure variables?</h3>
              <CodeExample
                title='Modifying Closure Variables'
                code={`function createState() {
  let state = { count: 0 };
  
  return {
    increment: () => { state.count++; return state.count; },
    decrement: () => { state.count--; return state.count; },
    getState: () => state
  };
}

const myState = createState();
console.log(myState.increment()); // 1
const current = myState.getState();
current.count = 100; // Modifies the closure's state
console.log(myState.getState()); // { count: 100 }`}
                explanation="Yes, closures capture references to variables, so modifications affect the closure's state."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do closures relate to modern JavaScript?</h3>
              <p className="text-slate-700 dark:text-slate-300">Closures form the foundation for ES6 modules, React hooks, callbacks, and async/await. Understanding closures is essential even when using modern features, as they work through closure mechanisms.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Are closures created with every function?</h3>
              <p className="text-slate-700 dark:text-slate-300">Technically yes - every function is a closure with access to its lexical environment. However, we typically use the term "closure" when a function actively uses variables from its outer scope.</p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">Best Practices with Closures</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use closures for data privacy and encapsulation</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Be mindful of what variables closures capture to avoid memory leaks</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use let/const in loops to create block scope instead of function scope</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Remember that closures capture by reference, not by value</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Clean up event listeners and references in long-lived closures</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use arrow functions in closures when you need to preserve 'this' context</span>
            </li>
          </ul>
        </section>

        {/* Related Topics */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/javascript/closures/lexical-scope" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Lexical Scope</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn how lexical scoping determines what variables closures can access</p>
            </Link>
            <Link href="/javascript/closures/scope-chain" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Scope Chain</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Understand how variable resolution works through nested scopes</p>
            </Link>
            <Link href="/javascript/closures/module-pattern" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Module Pattern</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Master the Module Pattern for creating encapsulated, reusable code</p>
            </Link>
            <Link href="/javascript/functions" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Functions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Review function fundamentals to better understand closures</p>
            </Link>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-200 mb-4">Summary</h2>
          <ul className="space-y-2 text-indigo-900 dark:text-indigo-200">
            <li>✓ Closures are functions that have access to outer scope variables even after the outer function returns</li>
            <li>✓ They enable data privacy, function factories, and the module pattern</li>
            <li>✓ Closures capture by reference, not value</li>
            <li>✓ Watch out for loop variable capture (use let instead of var)</li>
            <li>✓ Be mindful of memory usage in long-lived closures</li>
            <li>✓ Closures are the foundation of modern JavaScript patterns and frameworks</li>
          </ul>
        </section>
      </article>

    </>
  );
}
