import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript findIndex() Method - Find Element Index | Online Compiler',
  description: 'Learn findIndex() to locate the index of the first element matching a condition. Master with practical examples.',
  keywords: 'findIndex method, array search, find index, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript findIndex() - Find Element Index',
    description: 'Learn to find element indices in arrays.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/findindex',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript findIndex() Method',
    description: 'Find element indices with findIndex().',
  },
};

export default function FindIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript findIndex() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Find the index of the first element that matches your condition.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is findIndex()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The findIndex() method returns the index of the first element in the array that satisfies the testing function. If no element is found, it returns -1.
          </p>
          <CodeExample
          title='Find Index of Object by Property'
            code={`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1 (Bob is at index 1)`}
            explanation="Use findIndex() to locate the position of an object in an array based on a specific property value."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax</h2>
          <CodeExample
          title='findIndex() Syntax in JavaScript'
            code={`array.findIndex((element, index, array) => {
  // Return true for the element you're looking for
  return condition;
});`}
            explanation="The findIndex() method accepts a callback function and returns the index of the first element that satisfies the condition."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Practical Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find Index of First Match</h3>
              <CodeExample
              title='Find Index Using a Condition'
                code={`const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex(n => n > 25);
console.log(index); // 2 (30 is first number > 25)`}
                explanation="This example finds the index of the first number greater than 25 in an array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find and Update Element</h3>
              <CodeExample
              title='Update Array Item Using findIndex()'
                code={`const items = ['apple', 'banana', 'orange', 'apple'];
const index = items.findIndex(item => item === 'banana');

if (index !== -1) {
  items[index] = 'blueberry';
}

console.log(items); // ['apple', 'blueberry', 'orange', 'apple']`}
                explanation="Use findIndex() to locate an element and update its value safely using the returned index."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find and Remove Element</h3>
              <CodeExample
              title='Remove Element by Index'
                code={`const todos = [
  { id: 1, text: 'Learn JavaScript' },
  { id: 2, text: 'Build a project' },
  { id: 3, text: 'Deploy' }
];

const index = todos.findIndex(todo => todo.id === 2);
if (index !== -1) {
  todos.splice(index, 1); // Remove at that index
}

console.log(todos);
// [{id: 1, ...}, {id: 3, ...}]`}
                explanation="Combine findIndex() with splice() to remove an object from an array based on a condition."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find Index with Complex Condition</h3>
              <CodeExample
              title='Find Index with Multiple Conditions'
                code={`const products = [
  { name: 'Laptop', price: 1000, inStock: false },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: true }
];

const index = products.findIndex(p => 
  p.inStock && p.price < 100
);

console.log(index); // 1 (Mouse matches the criteria)`}
                explanation="findIndex() can evaluate multiple conditions like price and stock availability to locate an element."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">findIndex() vs Alternatives</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Method</th>
                  <th className="px-4 py-3 font-bold">Returns</th>
                  <th className="px-4 py-3 font-bold">When to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">findIndex()</td>
                  <td className="px-4 py-3">Index or -1</td>
                  <td className="px-4 py-3">Need the position to modify/delete</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">indexOf()</td>
                  <td className="px-4 py-3">Index or -1</td>
                  <td className="px-4 py-3">Simple value search (no function)</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">find()</td>
                  <td className="px-4 py-3">Element or undefined</td>
                  <td className="px-4 py-3">Need the element itself</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting to Check for -1</h3>
              <CodeExample
              title='Difference Between find() and findIndex()'
                code={`const arr = [1, 2, 3];
const index = arr.findIndex(n => n > 10);
arr[index] = 99; // index is -1, modifies arr[-1]!

// Better:
if (index !== -1) {
  arr[index] = 99;
}`}
                explanation="find() returns the matching element, while findIndex() returns the position of that element in the array."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using indexOf() for Objects</h3>
              <CodeExample
              title='Using indexOf() for Objects'
                code={`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Wrong - indexOf() looks for exact match, not properties
users.indexOf({ id: 1 }); // -1

// Correct
users.findIndex(u => u.id === 1); // 0`}
                explanation="Using indexOf() for Objects"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference between find() and findIndex()?</h3>
              <CodeExample
              title='find() vs findIndex() Example'
                code={`const arr = [{id: 1}, {id: 2}, {id: 3}];

// find() returns the element
const element = arr.find(x => x.id === 2); // {id: 2}

// findIndex() returns the index
const index = arr.findIndex(x => x.id === 2); // 1`}
                explanation="This example demonstrates the difference between <code>find()</code> and <code>findIndex()</code>. "
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Does findIndex() stop early?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes, findIndex() stops and returns as soon as it finds the first matching element, making it efficient.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I use findIndex() on non-array objects?</h3>
              <CodeExample
              title='Using findIndex() on Array-Like Objects'
                code={`const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const index = Array.prototype.findIndex.call(arrayLike, x => x === 'b');
console.log(index); // 1`}
                explanation="This example shows how <code>findIndex()</code> can be used on array-like objects 
using <code>Array.prototype.findIndex.call()</code>. It works when the object has 
numeric keys and a <code>length</code> property."
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
