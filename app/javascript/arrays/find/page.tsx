import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript find() and findIndex() Methods | Online Compiler',
  description: 'Learn to find elements in arrays using find() and findIndex(). Get the first matching element or its index with practical examples.',
  keywords: 'find method, findIndex, array search, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript find() and findIndex() Methods',
    description: 'Search arrays for elements efficiently.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/find',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript find() and findIndex()',
    description: 'Search for elements in arrays.',
  },
};

export default function FindPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript find() & findIndex()
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Search for specific elements in arrays and get the element itself or its index.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">find() Method</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The find() method returns the first element in the array that satisfies the testing function. If no element is found, it returns undefined.
          </p>
          <CodeExample
          title='Find Object in Array by Property'
            code={`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }`}
            explanation="Use the JavaScript find() method to return the first object that matches a condition."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">findIndex() Method</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The findIndex() method returns the index of the first element that satisfies the testing function. If no element is found, it returns -1.
          </p>
          <CodeExample
          title='Find Index of Object in Array'
            code={`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1`}
            explanation="The findIndex() method returns the index of the first element that satisfies a condition."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find Number by Condition</h3>
              <CodeExample
              title='Find First Number Greater Than Value'
                code={`const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(n => n > 10);
console.log(found); // 12 (first match)`}
                explanation="Use find() to return the first number in an array that matches a condition."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find Product by ID</h3>
              <CodeExample
              title='Find Product by ID in Array'
                code={`const products = [
  { id: 101, name: 'Laptop', price: 999 },
  { id: 102, name: 'Mouse', price: 25 },
  { id: 103, name: 'Keyboard', price: 75 }
];

const product = products.find(p => p.id === 102);
console.log(product); 
// { id: 102, name: 'Mouse', price: 25 }`}
                explanation="Use find() to search an array of objects and return the matching item by ID."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Get Index to Modify Element</h3>
              <CodeExample
              title='Modify Array Element Using findIndex()'
                code={`const items = ['apple', 'banana', 'orange'];
const index = items.findIndex(item => item === 'banana');
if (index !== -1) {
  items[index] = 'blueberry';
}
console.log(items); // ['apple', 'blueberry', 'orange']`}
                explanation="Use findIndex() to locate an element's index and update the value in the array."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">find() vs filter() vs indexOf()</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Method</th>
                  <th className="px-4 py-3 font-bold">Returns</th>
                  <th className="px-4 py-3 font-bold">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">find()</td>
                  <td className="px-4 py-3">First element</td>
                  <td className="px-4 py-3">Get matching object</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">findIndex()</td>
                  <td className="px-4 py-3">Index (or -1)</td>
                  <td className="px-4 py-3">Get position to modify</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">filter()</td>
                  <td className="px-4 py-3">All matching elements</td>
                  <td className="px-4 py-3">Get multiple matches</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Not Checking for undefined</h3>
              <CodeExample
              title='Handle Undefined Result from find()'
                code={`const arr = [1, 2, 3];
const found = arr.find(n => n > 10);
console.log(found.something); // TypeError: Cannot read property

// Better:
if (found) {
  console.log(found.something);
}`}
                explanation="Always check if find() returns undefined before accessing properties."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting -1 Check for findIndex()</h3>
              <CodeExample
              title='Check -1 Result from findIndex()'
                code={`const arr = ['a', 'b', 'c'];
const idx = arr.findIndex(item => item === 'z');
arr[idx] = 'new'; // This modifies arr[-1]!

// Better:
if (idx !== -1) {
  arr[idx] = 'new';
}`}
                explanation="findIndex() returns -1 if no match is found, so always validate the index before modifying the array."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the performance difference with filter()?</h3>
              <p className="text-slate-700 dark:text-slate-300">find() stops at the first match (faster), while filter() checks all elements. Use find() when you only need one element.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can find() return multiple elements?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, find() returns only the first matching element. Use filter() to get multiple matches.</p>
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
