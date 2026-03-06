import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript filter() Method - Filter Array Elements | Online Compiler',
  description: 'Master the filter() method to select array elements that match conditions. Learn with practical examples and best practices.',
  keywords: 'filter method, array filtering, conditional filtering, JavaScript tutorials, ES6 filter, remove falsy values, functional programming',
  openGraph: {
    title: 'JavaScript filter() - Filter Array Elements',
    description: 'Learn to filter arrays based on conditions.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/filter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript filter() Method',
    description: 'Filter arrays with conditions.',
  },
};

export default function FilterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript filter() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Filter array elements based on conditions and create a new array containing only the elements that meet your criteria.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is filter()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The filter() method creates a new array containing only the elements that pass a test provided by a function. It returns elements for which the callback returns true.
          </p>
          <CodeExample
            title="filter() Method Example"
            code={`const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] - original unchanged`}
            explanation="Using filter() to create a new array with only even numbers"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax</h2>
          <CodeExample
            title="filter() Syntax"
            code={`array.filter((element, index, array) => {
  // Return true to keep element, false to remove
  return condition;
});`}
            explanation="The syntax for the filter() method with callback function"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Practical Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Filter by Number Range</h3>
              <CodeExample
                title="Filter by Number Range"
                code={`const scores = [45, 78, 92, 34, 88, 56, 100];
const passed = scores.filter(score => score >= 60);
console.log(passed); // [78, 92, 88, 100]`}
                explanation="Filtering scores to show only those above 60"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Filter Objects in Array</h3>
              <CodeExample
                title="Filter Objects in Array"
                code={`const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); 
// [{name: 'Alice', active: true}, {name: 'Charlie', active: true}]`}
                explanation="Filtering an array of objects to get only active users"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Remove Duplicates</h3>
              <CodeExample
                title="Remove Duplicates"
                code={`const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = numbers.filter((num, index, arr) => 
  arr.indexOf(num) === index
);
console.log(unique); // [1, 2, 3, 4]`}
                explanation="Using filter() to remove duplicate values from an array"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Chaining filter with map()</h3>
              <CodeExample
                title="Chaining filter with map()"
                code={`const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true }
];

const result = products
  .filter(p => p.inStock)
  .map(p => \`\${p.name}: $\${p.price}\`);
console.log(result); // ['Laptop: $1000', 'Keyboard: $75']`}
                explanation="Chaining filter() and map() methods together"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Remove Falsy Values</h3>
              <CodeExample
                title="Filter Out Falsy Values"
                code={`const mixed = [0, 1, false, 2, '', 3, null, undefined];
const truthy = mixed.filter(Boolean);
console.log(truthy); // [1, 2, 3]`}
                explanation="Using Boolean as a callback removes falsy values like 0, '', null, undefined, and false."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using ! (not) Instead of Returning Boolean</h3>
              <CodeExample
                title="Using ! (not) Instead of Returning Boolean"
                code={`// Wrong - modifying the condition
const numbers = [1, 2, 3, 4, 5];
const odd = numbers.filter(n => !n % 2); // Don't do this!

// Correct
const odd = numbers.filter(n => n % 2 !== 0);`}
                explanation="Incorrect use of logical NOT operator in filter condition"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting to Return a Value</h3>
              <CodeExample
                title="Forgetting to Return a Value"
                code={`const numbers = [1, 2, 3, 4];
const result = numbers.filter(n => {
  n > 2; // No return!
});
console.log(result); // [] - nothing returned

// Correct
const result = numbers.filter(n => n > 2);`}
                explanation="Forgetting to return a value from the filter callback function"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Does filter() modify the original array?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, filter() creates a new array and leaves the original unchanged.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">When would the result be empty?</h3>
              <CodeExample
                title="Empty Result Array"
                code={`const numbers = [1, 2, 3];
const result = numbers.filter(n => n > 10);
console.log(result); // [] - no elements match the condition`}
                explanation="When filter() returns an empty array because no elements match"
              />
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
