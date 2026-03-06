import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript reduce() Method - Combine & Transform Arrays | Online Compiler',
  description: 'Master the reduce() method to combine array elements into a single value. Learn with practical examples involving sums, products, objects.',
  keywords: 'reduce method, array aggregation, accumulator, JavaScript tutorials, ES6 reduce, functional programming, array folding',
  openGraph: {
    title: 'JavaScript reduce() - Combine Array Elements',
    description: 'Learn to use reduce() for powerful array transformations.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/reduce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript reduce() Method',
    description: 'Combine array elements with reduce().',
  },
};

export default function ReducePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="w-full px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript reduce() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Combine array elements into a single value. Master this powerful method for calculations, transformations, and aggregations.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is reduce()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The reduce() method processes each element in an array sequentially and returns a single accumulated value. It's perfect for calculating sums, products, or combining array elements into a new data structure.
          </p>
          <CodeExample
          title='Calculate Sum Using reduce()'
            code={`const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15`}
            explanation="This example shows how the reduce() method iterates through an array and accumulates values to calculate the total sum."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax</h2>
          <CodeExample
          title='JavaScript reduce() Syntax Explained'
            code={`array.reduce((accumulator, currentValue, index, array) => {
  // Return the updated accumulator
  return accumulator;
}, initialValue);`}
            explanation="The reduce() method takes a callback function and an optional initial value. The callback updates the accumulator for each element in the array."
          />
          <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <p><strong>accumulator:</strong> The accumulated result carried through iterations</p>
            <p><strong>currentValue:</strong> The current element being processed</p>
            <p><strong>initialValue:</strong> The starting value for the accumulator (optional)</p>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Common Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sum an Array</h3>
              <CodeExample
              title='Sum All Numbers in an Array with reduce()'
                code={`const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 100`}
                explanation="Use reduce() to combine all numbers in an array and return the total sum."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Find Maximum Value</h3>
              <CodeExample
              title='Find the Maximum Number Using reduce()'
                code={`const numbers = [5, 2, 8, 1, 9, 3];
const max = numbers.reduce((acc, num) => 
  num > acc ? num : acc
);
console.log(max); // 9`}
                explanation="This example compares each element and keeps the largest value in the accumulator."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Convert Array to Object</h3>
              <CodeExample
              title='Convert an Array into an Object with reduce()'
                code={`const arr = ['a', 'b', 'c'];
const obj = arr.reduce((acc, val, idx) => {
  acc[idx] = val;
  return acc;
}, {});
console.log(obj); // {0: 'a', 1: 'b', 2: 'c'}`}
                explanation="reduce() can transform arrays into objects by building key-value pairs during iteration."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Group Objects by Property</h3>
              <CodeExample
              title='Group Array Objects by Property Using reduce()'
                code={`const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

const grouped = users.reduce((acc, user) => {
  if (!acc[user.role]) acc[user.role] = [];
  acc[user.role].push(user.name);
  return acc;
}, {});

console.log(grouped);
// { admin: ['Alice', 'Charlie'], user: ['Bob'] }`}
                explanation="This example groups users based on their role by dynamically creating keys in the accumulator object."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Flatten an Array</h3>
              <CodeExample
              title='Flatten Nested Arrays Using reduce()'
                code={`const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => 
  acc.concat(arr), []
);
console.log(flat); // [1, 2, 3, 4, 5]`}
                explanation="reduce() can flatten arrays by concatenating each inner array into a single accumulator array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Using reduceRight</h3>
              <CodeExample
              title='Iterate from Right to Left with reduceRight()'
                code={`const words = ['world', 'hello'];
const sentence = words.reduceRight((acc, word) => acc + ' ' + word);
console.log(sentence); // "hello world"`}
                explanation="reduceRight() works like reduce() but processes elements from right to left, useful when order matters."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting Initial Value</h3>
              <CodeExample
              title='Avoid Missing Initial Value in reduce()'
                code={`const arr = [1, 2, 3];
const sum = arr.reduce((acc, num) => acc + num);
// If first element is not a number, you'll get an error!

// Better:
const sum = arr.reduce((acc, num) => acc + num, 0);`}
                explanation="If the initial value is not provided, reduce() uses the first array element as the accumulator, which can lead to unexpected errors."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting to Return Accumulator</h3>
              <CodeExample
              title='Always Return the Accumulator in reduce()'
                code={`const arr = [1, 2, 3];
const sum = arr.reduce((acc, num) => {
  acc + num; // Forgot return!
}, 0);
console.log(sum); // undefined

// Correct:
const sum = arr.reduce((acc, num) => acc + num, 0);`}
                explanation="The callback must return the updated accumulator; otherwise, the result becomes undefined."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What happens if the array is empty?</h3>
              <CodeExample
              title='reduce() Behavior with Empty Arrays'
                code={`const empty = [];
console.log(empty.reduce((a, b) => a + b, 0)); // 0
console.log(empty.reduce((a, b) => a + b)); // TypeError!`}
                explanation="Calling reduce() on an empty array without an initial value throws a TypeError. Always provide a default value to avoid errors."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">When to use reduce()?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use reduce() when you need to combine multiple array elements into a single value or data structure.</p>
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
