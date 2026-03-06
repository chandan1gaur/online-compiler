import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript map() Method - Transform Array Elements | Online Compiler',
  description: 'Learn the JavaScript map() method with practical examples. Transform array elements and create new arrays with mapped values.',
  keywords: 'map method, array transformation, array methods, JavaScript tutorials, ES6 map, functional programming, javascript map example, array mapping',
  openGraph: {
    title: 'JavaScript map() - Transform Array Elements',
    description: 'Master array transformation with the map() method. Learn with practical examples.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/map',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript map() Method',
    description: 'Learn to transform arrays with map().',
  },
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript map() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Transform array elements and create new arrays with the powerful map() method without modifying the original array.
          </p>
        </div>

        {/* What is map? */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is map()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The map() method creates a new array by calling a function for each element in the original array. It doesn't modify the original array and always returns a new array with the same length.
          </p>
          <CodeExample
          title='Basic Example: Double Array Values Using map()'
            code={`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - original unchanged`}
            explanation="Use map() to transform each element in an array and return a new array without modifying the original."
          />
        </section>

        {/* Syntax */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax</h2>
          <CodeExample
          title='JavaScript map() Syntax'
            code={`array.map((element, index, array) => {
  // Return the transformed element
  return newElement;
});`}
            explanation="The map() method executes a callback for every element and returns a new array containing the transformed results."
          />
          <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <p><strong>element:</strong> The current element being processed</p>
            <p><strong>index (optional):</strong> The index of the current element</p>
            <p><strong>array (optional):</strong> The entire array being mapped</p>
            <p><strong>Returns:</strong> A new array with transformed elements</p>
          </div>
        </section>

        {/* Common Examples */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Common Use Cases</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Transform Numbers</h3>
              <CodeExample
              title='Transform Numbers with map()'
                code={`const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]`}
                explanation="map() can perform mathematical operations on array elements and return a new transformed array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Extract Properties from Objects</h3>
              <CodeExample
              title='Extract Object Properties Using map()'
                code={`const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']`}
                explanation="map() is commonly used to extract specific properties from objects and create a new array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Convert Strings to Numbers</h3>
              <CodeExample
              title='Convert String Array to Numbers'
                code={`const strings = ['1', '2', '3', '4'];
const numbers = strings.map(Number);
console.log(numbers); // [1, 2, 3, 4]`}
                explanation="You can use map() with the Number function to quickly convert string values into numeric values."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Using Index Parameter</h3>
              <CodeExample
              title='Using Index in map() Callback'
                code={`const letters = ['a', 'b', 'c'];
const indexed = letters.map((letter, index) => 
  \`\${index}: \${letter}\`
);
console.log(indexed); // ['0: a', '1: b', '2: c']`}
                explanation="The map() callback receives the element and its index, allowing you to generate indexed or formatted results."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Create JSX Elements (React)</h3>
              <CodeExample
              title='Render Lists in React Using map()'
                code={`const items = ['Apple', 'Banana', 'Orange'];
const listItems = items.map((item, index) => (
  <li key={index}>{item}</li>
));`}
                explanation="In React, map() is commonly used to render lists of JSX elements from an array of data."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Asynchronous Mapping</h3>
              <CodeExample
              title='Use map() with async calls and Promise.all'
                code={`const urls = ['https://api.example.com/1', 'https://api.example.com/2'];

async function fetchAll() {
  const results = await Promise.all(
    urls.map(url => fetch(url).then(res => res.json()))
  );
  console.log(results);
}

fetchAll();`}
                explanation="map() works with promises when combined with Promise.all, allowing you to fetch multiple resources in parallel."
              />
            </div>
          </div>
        </section>

        {/* map vs forEach */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">map() vs forEach()</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Aspect</th>
                  <th className="px-4 py-3 font-bold">map()</th>
                  <th className="px-4 py-3 font-bold">forEach()</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Returns</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">undefined</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Use When</td>
                  <td className="px-4 py-3">Need transformed data</td>
                  <td className="px-4 py-3">Need side effects only</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-bold">Chainable</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Chaining */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Chaining map() with Other Methods</h2>
          <CodeExample
          title='Method Chaining with map(), filter(), and reduce()'
            code={`const numbers = [1, 2, 3, 4, 5];

// Chain map with filter
const result = numbers
  .map(n => n * 2)        // [2, 4, 6, 8, 10]
  .filter(n => n > 5)     // [6, 8, 10]
  .reduce((a, b) => a + b, 0); // 24

console.log(result); // 24`}
            explanation="map() can be chained with other array methods like filter() and reduce() to perform powerful data transformations."
          />
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes to Avoid</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting map() Returns a New Array</h3>
              <CodeExample
              title='Mistake: Ignoring map() Return Value'
                code={`const numbers = [1, 2, 3];
numbers.map(n => n * 2); // Doesn't save result!
console.log(numbers); // [1, 2, 3] - unchanged

// Correct:
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`}
                explanation="map() returns a new array. If you don't store the result, the transformation will be lost."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Not Returning a Value from Callback</h3>
              <CodeExample
              title='Mistake: Not Returning a Value in map()'
                code={`const numbers = [1, 2, 3];
const result = numbers.map(n => {
  n * 2; // Forgot return!
});
console.log(result); // [undefined, undefined, undefined]

// Correct:
const result = numbers.map(n => n * 2);
// or
const result = numbers.map(n => {
  return n * 2;
});`}
                explanation="The callback function must return a value. Otherwise, the new array will contain undefined."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using map() for Side Effects Only</h3>
              <CodeExample
              title='Mistake: Using map() for Side Effects'
                code={`// Don't use map() just for side effects
const numbers = [1, 2, 3];
numbers.map(n => console.log(n)); // Wasteful

// Use forEach() instead:
numbers.forEach(n => console.log(n));`}
                explanation="Use forEach() when you only need side effects like logging. map() should be used for data transformation."
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Does map() modify the original array?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, map() is non-mutating. It creates and returns a new array while leaving the original untouched.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I use map() on strings?</h3>
              <CodeExample
              title='Mapping Characters from a String'
                code={`const str = 'hello';
const chars = Array.from(str).map(char => char.toUpperCase());
console.log(chars); // ['H', 'E', 'L', 'L', 'O']`}
                explanation="Convert a string into an array using Array.from() and apply map() to transform each character."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's better: map() or a for loop?</h3>
              <p className="text-slate-700 dark:text-slate-300">map() is more concise and chainable. Use it when you need to transform data. Use loops when you need complex logic or early exit.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can map() return different types?</h3>
              <CodeExample
              title='Returning Different Data Types with map()'
                code={`const values = [1, 'two', true];
const mixed = values.map(v => typeof v);
console.log(mixed); // ['number', 'string', 'boolean']`}
                explanation="map() can return any type of value, allowing flexible transformations of array elements."
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">Best Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use map() when you need to transform array elements</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Chain map() with filter() and reduce() for powerful transformations</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Always return a value from the callback function</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use forEach() if you only need side effects, not data transformation</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Save the result of map() to a variable if you need to use it</span>
            </li>
          </ul>
        </section>

        {/* Back to Overview */}
        <div className="mb-12">
          <a href="/javascript/arrays" className="inline-block bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
            ← Back to Arrays Overview
          </a>
        </div>
      </article>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Does map() modify the original array?',
                acceptedAnswer: { '@type': 'Answer', text: 'No, map() is non-mutating. It creates and returns a new array while leaving the original untouched.' },
              },
              {
                '@type': 'Question',
                name: 'Can I use map() on strings?',
                acceptedAnswer: { '@type': 'Answer', text: 'You can convert a string to an array first using Array.from() or spread operator, then use map().' },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
