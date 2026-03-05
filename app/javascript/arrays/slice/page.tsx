import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript slice() and splice() Methods | Online Compiler',
  description: 'Learn slice() and splice() methods. Extract portions of arrays or modify them. Understand the differences and use cases.',
  keywords: 'slice method, splice method, array manipulation, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript slice() and splice() Methods',
    description: 'Extract and modify array portions.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/slice',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript slice() and splice()',
    description: 'Learn slice() and splice() methods.',
  },
};

export default function SlicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript slice() & splice()
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Learn to extract portions of arrays or modify them in place.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">slice() Method</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The slice() method returns a shallow copy of a portion of an array without modifying the original array. It takes a start and end index.
          </p>
          <CodeExample
            code={`const fruits = ['apple', 'banana', 'orange', 'grape'];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ['banana', 'orange']
console.log(fruits); // Original unchanged`}
            language="javascript"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">splice() Method</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The splice() method removes elements from an array and optionally inserts new elements at the same position. It modifies the original array.
          </p>
          <CodeExample
            code={`const fruits = ['apple', 'banana', 'orange', 'grape'];
const removed = fruits.splice(1, 2, 'mango', 'kiwi');
console.log(removed); // ['banana', 'orange']
console.log(fruits); // ['apple', 'mango', 'kiwi', 'grape']`}
            language="javascript"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">slice() Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Basic Slicing</h3>
              <CodeExample
                code={`const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2)); // [1, 2]
console.log(arr.slice(2)); // [3, 4, 5]
console.log(arr.slice(-2)); // [4, 5] (last 2)`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Copy an Array</h3>
              <CodeExample
                code={`const original = [1, 2, 3];
const copy = original.slice();
copy[0] = 99;
console.log(original); // [1, 2, 3] - unchanged
console.log(copy); // [99, 2, 3]`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">splice() Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Remove Elements</h3>
              <CodeExample
                code={`const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // Remove 2 elements starting at index 2
console.log(arr); // [1, 2, 5]`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Insert Elements</h3>
              <CodeExample
                code={`const arr = [1, 2, 5];
arr.splice(2, 0, 3, 4); // Insert at index 2 without removing
console.log(arr); // [1, 2, 3, 4, 5]`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Replace Elements</h3>
              <CodeExample
                code={`const arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y', 'z');
console.log(arr); // ['a', 'x', 'y', 'z', 'd']`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">slice() vs splice() Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Aspect</th>
                  <th className="px-4 py-3 font-bold">slice()</th>
                  <th className="px-4 py-3 font-bold">splice()</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Mutates array</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Returns</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Removed elements</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Use case</td>
                  <td className="px-4 py-3">Extract values</td>
                  <td className="px-4 py-3">Modify array</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Confusing slice() and splice()</h3>
              <CodeExample
                code={`// slice() - doesn't modify original
const arr = [1, 2, 3];
arr.slice(1); // Returns [2, 3]
console.log(arr); // [1, 2, 3] - unchanged

// splice() - modifies original
arr.splice(1); // Removes elements and modifies arr
console.log(arr); // [1]`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ splice() Second Parameter Confusion</h3>
              <CodeExample
                code={`const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // Removes 2 elements (2, 3)
console.log(arr); // [1, 4, 5]

// Without second parameter: removes everything from index onward
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(1); // Removes all from index 1
console.log(arr2); // [1]`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can slice() accept negative indices?</h3>
              <CodeExample
                code={`const arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(-2)); // ['c', 'd'] (last 2)
console.log(arr.slice(0, -1)); // ['a', 'b', 'c']`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference in syntax?</h3>
              <CodeExample
                code={`slice(start, end)     // end is NOT included
splice(start, deleteCount, item1, item2...)`}
                language="javascript"
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
