import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript Array Destructuring - Extract Values | Online Compiler',
  description: 'Master array destructuring to extract values into variables. Learn with practical examples and ES6 syntax.',
  keywords: 'array destructuring, ES6, spread operator, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript Array Destructuring',
    description: 'Learn to destructure arrays with modern JavaScript.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/destructuring',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Array Destructuring',
    description: 'Extract array values easily.',
  },
};

export default function DestructuringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="w-full px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Concepts
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Array Destructuring
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Extract values from arrays into variables using the concise destructuring syntax.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is Destructuring?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Array destructuring is a JavaScript feature that allows you to extract values from an array and assign them to variables in a single statement. It's a concise way to unpack values.
          </p>
          <CodeExample
            title="Basic Array Destructuring"
            code={`// Without destructuring
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];

// With destructuring
const [first, second, third] = colors;
console.log(first); // 'red'
console.log(second); // 'green'
console.log(third); // 'blue'`}
            explanation="Extracting values from arrays into individual variables"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Basic Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Extract First Few Elements</h3>
              <CodeExample
                title="Extract First Few Elements"
                code={`const [a, b] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2`}
                explanation="Extracting the first two elements from an array"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Skip Elements</h3>
              <CodeExample
                title="Skip Elements"
                code={`const [first, , third] = ['a', 'b', 'c'];
console.log(first); // 'a'
console.log(third); // 'c' (b is skipped)`}
                explanation="Using commas to skip elements during destructuring"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Collect Remaining Elements</h3>
              <CodeExample
                title="Collect Remaining Elements"
                code={`const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]`}
                explanation="Using rest operator to collect remaining elements"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Default Values</h3>
              <CodeExample
                title="Default Values"
                code={`const [x = 10, y = 20] = [5];
console.log(x); // 5
console.log(y); // 20 (uses default)

const [a, b, c = 30] = [1, 2];
console.log(c); // 30`}
                explanation="Providing default values for missing elements"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Swap Variables</h3>
              <CodeExample
                title="Swap Variables"
                code={`let a = 1, b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1`}
                explanation="Swapping variable values using array destructuring"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Destructure Function Return</h3>
              <CodeExample
                title="Destructure Function Return"
                code={`function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(x, y); // 10, 20`}
                explanation="Destructuring values returned from a function"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Nested Destructuring</h3>
              <CodeExample
                title="Nested Destructuring"
                code={`const [a, [b, c]] = [1, [2, 3]];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3`}
                explanation="Destructuring nested arrays"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Real-World Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">React Hooks</h3>
              <CodeExample
                title="React Hooks"
                code={`import { useState } from 'react';

// useState returns an array
const [count, setCount] = useState(0);
const [name, setName] = useState('');`}
                explanation="Using destructuring with React useState hook"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Parse API Response</h3>
              <CodeExample
                title="Parse API Response"
                code={`const response = [200, { data: 'success', id: 123 }];
const [status, { data, id }] = response;
console.log(status); // 200
console.log(data); // 'success'`}
                explanation="Destructuring API response arrays"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Function Parameters</h3>
              <CodeExample
                title="Function Parameters"
                code={`function displayPoint([x, y]) {
  console.log(\`Point: (\${x}, \${y})\`);
}

displayPoint([10, 20]); // Point: (10, 20)`}
                explanation="Using destructuring in function parameters"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting Brackets</h3>
              <CodeExample
                title="Forgetting Brackets"
                code={`// Wrong - will throw error
const a, b = [1, 2];

// Correct
const [a, b] = [1, 2];`}
                explanation="Always use brackets for array destructuring"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Confusing Rest Operator with Spread</h3>
              <CodeExample
                title="Rest vs Spread Operator"
                code={`// Rest operator (...) in destructuring collects remaining
const [first, ...rest] = [1, 2, 3];

// Spread operator (...) in array/function call spreads elements
const arr = [...[1, 2, 3]];`}
                explanation="Understanding the difference between rest and spread operators"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I destructure strings?</h3>
              <CodeExample
                title="Destructuring Strings"
                code={`const [a, b, c] = 'hello';
console.log(a, b, c); // 'h' 'e' 'l'`}
                explanation="Strings can be destructured like arrays since they're iterable"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What if array is shorter than variables?</h3>
              <CodeExample
                title="Handling Shorter Arrays"
                code={`const [a, b, c] = [1, 2];
console.log(c); // undefined

// Use defaults to prevent this:
const [a, b, c = 3] = [1, 2];
console.log(c); // 3`}
                explanation="Using default values when array is shorter than variables"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can rest operator be used multiple times?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, you can only have one rest element, and it must be last.</p>
            </div>
          </div>
        </section>

        <div className="mb-12">
          <a href="/javascript/arrays" className="inline-block bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
            ← Back to Arrays Overview
          </a>
        </div>
      </article>
    </div>
  );
}
