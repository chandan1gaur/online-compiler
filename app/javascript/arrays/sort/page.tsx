import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript sort() Method - Sort Arrays | Online Compiler',
  description: 'Learn to sort arrays in JavaScript. Master numeric, alphabetic, and custom sorting. Understand sort() pitfalls and best practices.',
  keywords: 'sort method, array sorting, JavaScript tutorials, comparison function',
  openGraph: {
    title: 'JavaScript sort() - Sort Array Elements',
    description: 'Master sorting arrays in JavaScript.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/sort',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript sort() Method',
    description: 'Learn array sorting in JavaScript.',
  },
};

export default function SortPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript sort() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Sort arrays in ascending or descending order with custom comparison logic.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is sort()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The sort() method sorts array elements in place and returns the sorted array. By default, it sorts elements as strings in ascending order. Use a comparison function for custom sorting.
          </p>
          <CodeExample
            title="Basic sort() Usage"
            code={`const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

// IMPORTANT: sort() mutates the original array!
console.log(fruits === fruits); // true (same reference)`}
            explanation="This example demonstrates how the JavaScript sort() method arranges string elements in alphabetical order. It also highlights that sort() modifies the original array instead of creating a new one."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Comparison Function</h2>
          <CodeExample
            title="Comparison Function Syntax"
            code={`// Compare function syntax
array.sort((a, b) => {
  if (a < b) return -1; // a comes first
  if (a > b) return 1;  // b comes first
  return 0;             // equal
});`}
            explanation="This example explains how the comparison function works inside sort(). Returning a negative value places 'a' before 'b', returning a positive value places 'b' before 'a', and returning 0 keeps their order unchanged."
          />
          <div className="mt-4 text-slate-700 dark:text-slate-300">
            <p><strong>Return -1:</strong> a comes before b</p>
            <p><strong>Return 0:</strong> keep original order</p>
            <p><strong>Return 1:</strong> b comes before a</p>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sort Numbers</h3>
              <CodeExample
              title='Sort Numbers'
                code={`// Wrong - sorts as strings
const numbers = [10, 5, 40, 25];
numbers.sort();
console.log(numbers); // [10, 25, 40, 5] (wrong!)

// Correct - use comparison function
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 25, 40]`}
                explanation="By default, JavaScript sorts numbers as strings which leads to incorrect results. This example shows how to use a comparison function (a - b) to correctly sort numbers in ascending order."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sort in Descending Order</h3>
              <CodeExample
              title='Sort in Descending Order'
                code={`const numbers = [10, 5, 40, 25];
numbers.sort((a, b) => b - a);
console.log(numbers); // [40, 25, 10, 5]`}
                explanation="This example demonstrates how to sort numeric arrays in descending order by reversing the comparison logic using (b - a)."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sort Objects by Property</h3>
              <CodeExample
              title='Sort Objects by Property'
                code={`const users = [
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);
// [Alice(25), Charlie(30), Bob(35)]`}
                explanation="This example sorts an array of objects based on the 'age' property using a comparison function."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sort Strings Alphabetically</h3>
              <CodeExample
              title='Sort Strings Alphabetically'
                code={`const names = ['Charlie', 'Alice', 'Bob'];
names.sort((a, b) => a.localeCompare(b));
console.log(names); // ['Alice', 'Bob', 'Charlie']`}
                explanation="This example uses localeCompare() to sort strings alphabetically in a more reliable and locale-aware way."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Preserve Original Array</h3>
              <CodeExample
              title='Preserve Original Array'
                code={`const original = [3, 1, 2];
const sorted = [...original].sort((a, b) => a - b);
console.log(original); // [3, 1, 2] (unchanged)
console.log(sorted); // [1, 2, 3]`}
                explanation="Because sort() mutates the original array, this example shows how to create a copy using the spread operator before sorting."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Sorting Numbers Without Comparison Function</h3>
              <CodeExample
              title='Sorting Numbers Without Comparison Function'
                code={`const nums = [10, 5, 100];
nums.sort(); // [10, 100, 5] - WRONG!

// Always use comparison function for numbers
nums.sort((a, b) => a - b); // [5, 10, 100]`}
                explanation="This example highlights a common mistake where numbers are sorted as strings, leading to incorrect order."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting sort() Mutates the Original</h3>
              <CodeExample
              title='Forgetting sort() Mutates the Original'
                code={`const arr = [3, 1, 2];
const sorted = arr.sort();
console.log(arr); // [1, 2, 3] - CHANGED!

// If you need original:
const arr = [3, 1, 2];
const sorted = [...arr].sort();`}
                explanation="This example shows how the sort() method directly modifies the original array and demonstrates how to prevent that by copying the array first."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Complex Comparison Without Testing</h3>
              <CodeExample
              title='Complex Comparison Without Testing'
                code={`// Test your comparison function!
const arr = [3, 1, 2];
console.log(arr.sort((a, b) => a - b)); // [1, 2, 3]
console.log(arr.sort((a, b) => b - a)); // [3, 2, 1]`}
                explanation="This example emphasizes the importance of testing comparison functions to ensure they produce the expected sorting order."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Does sort() modify the original array?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes! sort() mutates the original array. Create a copy first if you need to preserve the original.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I sort case-insensitively?</h3>
              <CodeExample
              title='How do I sort case-insensitively?'
                code={`const names = ['charlie', 'Alice', 'BOB'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ['Alice', 'BOB', 'charlie']`}
                explanation="This example demonstrates how to perform case-insensitive string sorting by converting values to lowercase before comparing them."
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
