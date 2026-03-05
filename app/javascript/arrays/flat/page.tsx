import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript flat() Method - Flatten Nested Arrays | Online Compiler',
  description: 'Learn JavaScript flat() method to flatten nested arrays. Master multi-level flattening with depth parameter.',
  keywords: 'flat method, flatten arrays, nested arrays, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript flat() - Flatten Nested Arrays',
    description: 'Learn to flatten nested arrays with flat() method.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/flat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript flat() Method',
    description: 'Flatten nested arrays with flat().',
  },
};

export default function FlatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript flat() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Flatten nested arrays into a single-level array with the flat() method.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is flat()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The flat() method creates a new array with all sub-array elements concatenated into it. It flattens nested arrays up to a specified depth (default is 1).
          </p>
          <CodeExample
          title='Basic flat() Example'
            code={`const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat();
console.log(flat); // [1, 2, 3, 4, [5, 6]]
console.log(nested); // Original unchanged`}
            explanation="This example shows how the <code>flat()</code> method removes one level of nesting from an array and returns a new flattened array without modifying the original array."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax</h2>
          <CodeExample
          title='flat() Syntax'
            code={`array.flat(depth);`}
            explanation="he <code>flat()</code> method takes an optional depth parameter that defines how many nested levels should be flattened."
          />
          <div className="mt-4 text-slate-700 dark:text-slate-300">
            <p><strong>depth (optional):</strong> How many levels deep to flatten (default: 1)</p>
            <p><strong>Returns:</strong> New flattened array</p>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Flatten One Level (Default)</h3>
              <CodeExample
              title='Flatten One Level of Array'
                code={`const arr = [1, [2, 3], [4, 5]];
console.log(arr.flat()); // [1, 2, 3, 4, 5]

// Same as:
console.log(arr.flat(1)); // [1, 2, 3, 4, 5]`}
                explanation="By default, <code>flat()</code> removes only one level of nesting from an array. This example demonstrates flattening a simple nested array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Flatten Multiple Levels</h3>
              <CodeExample
              title='Flatten Deeply Nested Arrays'
                code={`const nested = [1, [2, [3, [4, 5]]]];
console.log(nested.flat(1)); // [1, 2, [3, [4, 5]]]
console.log(nested.flat(2)); // [1, 2, 3, [4, 5]]
console.log(nested.flat(3)); // [1, 2, 3, 4, 5]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5]`}
                explanation="You can pass a depth value to flatten multiple nested levels. Using <code>Infinity</code> completely flattens deeply nested arrays."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Flatten Arrays from API Response</h3>
              <CodeExample
              title='Flatten API Response Data'
                code={`const apiResponse = {
  users: [
    { name: 'Alice', items: [1, 2, 3] },
    { name: 'Bob', items: [4, 5] }
  ]
};

const allItems = apiResponse.users
  .map(user => user.items)
  .flat();
console.log(allItems); // [1, 2, 3, 4, 5]`}
                explanation="This example shows how <code>map()</code> and <code>flat()</code> can be combined to merge nested arrays returned from an API into a single array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Remove Empty Values</h3>
              <CodeExample
              title='Remove Empty Array Slots'
                code={`const arr = [1, [2, [3], 4], , 5]; // Note the empty element
console.log(arr.flat()); // [1, 2, [3], 4, 5] (empty removed)`}
                explanation="The <code>flat()</code> method automatically removes empty slots while flattening arrays, producing a clean array result."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">flat() vs flatMap()</h2>
          <CodeExample
          title='flat() vs flatMap() Example'
            code={`const arr = [1, 2, 3];

// flat() - just flattens
arr.flat().map(x => x * 2); // Two operations

// flatMap() - map and flatten in one
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]`}
            explanation="This example compares <code>flat()</code> and <code>flatMap()</code>. While <code>flat()</code> only flattens arrays, <code>flatMap()</code> performs mapping and flattening in a single operation."
          />
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using flat() Instead of flatMap()</h3>
              <CodeExample
              title='Using flatMap() for Better Performance'
                code={`const arr = [1, 2, 3];

// Inefficient
const result = arr.map(x => [x, x * 2]).flat();

// Better
const result = arr.flatMap(x => [x, x * 2]);`}
                explanation="Instead of using <code>map()</code> followed by <code>flat()</code>, you can use <code>flatMap()</code> to perform both operations in a single step."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting Depth Can Matter</h3>
              <CodeExample
              title='Depth Parameter Matters'
                code={`const deeply = [1, [2, [3, [4]]]];
console.log(deeply.flat()); // [1, 2, [3, [4]]] (only 1 level)
console.log(deeply.flat(Infinity)); // [1, 2, 3, 4] (fully flat)`}
                explanation="The default depth of <code>flat()</code> is 1. If your array contains deeper nesting, you must increase the depth or use <code>Infinity</code>."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Does flat() modify the original array?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, flat() returns a new array and leaves the original unchanged.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the best depth parameter?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use flat(Infinity) for complete flattening, or specify the exact depth needed for performance.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can flat() remove empty slots?</h3>
              <CodeExample
              title='Removing Empty Slots with flat()'
                code={`const arr = [1, , [2, , 3], 4];
console.log(arr.flat()); // [1, 2, 3, 4] (empties removed)`}
                explanation="The <code>flat()</code> method removes empty slots while flattening arrays, helping produce a clean and continuous array."
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
