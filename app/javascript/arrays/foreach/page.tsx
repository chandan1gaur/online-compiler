import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript forEach() Method - Iterate Arrays | Online Compiler',
  description: 'Master the forEach() method to iterate through array elements. Learn when to use forEach vs map and other loop constructs.',
  keywords: 'forEach method, array iteration, looping, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript forEach() - Iterate Array Elements',
    description: 'Learn to loop through arrays with forEach().',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/foreach',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript forEach() Method',
    description: 'Iterate arrays with forEach().',
  },
};

export default function ForEachPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript forEach() Method
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Iterate through array elements and perform actions. Useful for side effects and executing code for each element.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is forEach()?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The forEach() method executes a provided function once for each array element. It doesn't return anything and is used for performing actions on each element (side effects).
          </p>
          <CodeExample
          title='Basic forEach() Example'
            code={`const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num * 2);
});
// Logs: 2, 4, 6, 8, 10`}
            explanation="This example demonstrates how the <code>forEach()</code> method loops through an array and executes a function for every element."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax</h2>
          <CodeExample
          title='forEach() Syntax'
            code={`array.forEach((element, index, array) => {
  // Code to execute for each element
});`}
            explanation="The <code>forEach()</code> method accepts a callback function that runs for each element in the array. It can receive the element, index, and original array as parameters."
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Practical Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Log Each Element</h3>
              <CodeExample
              title='Loop Through Array Elements'
                code={`const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => {
  console.log(fruit);
});
// Logs: apple, banana, orange`}
                explanation="This example shows how <code>forEach()</code> iterates through an array and logs each element to the console.
</p>"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Update DOM Elements</h3>
              <CodeExample
              title='Update DOM with forEach()'
                code={`const items = ['Item 1', 'Item 2', 'Item 3'];
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  document.getElementById('list').appendChild(li);
});`}
                explanation="The <code>forEach()</code> method is commonly used to create or update DOM elements by looping through data arrays."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Using Index Parameter</h3>
              <CodeExample
              title='Access Element Index'
                code={`const colors = ['red', 'green', 'blue'];
colors.forEach((color, index) => {
  console.log(\`\${index + 1}. \${color}\`);
});
// Logs: 1. red, 2. green, 3. blue`}
                explanation="The callback function in <code>forEach()</code> provides an index parameter that allows you to track the position of each element."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Accumulate Values</h3>
              <CodeExample
              title='Calculate Sum with forEach()'
                code={`let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  sum += num;
});
console.log(sum); // 15
// Better: use reduce() for this!`}
                explanation="This example shows how <code>forEach()</code> can accumulate values such as calculating the sum of numbers in an array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Iterate Objects in Array</h3>
              <CodeExample
              title='Iterate Objects in an Array'
                code={`const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
users.forEach(user => {
  console.log(\`\${user.name} is \${user.age} years old\`);
});`}
                explanation="You can use <code>forEach()</code> to loop through arrays of objects and access their properties easily."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">forEach() vs Other Loop Methods</h2>
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
                  <td className="px-4 py-3 font-mono text-blue-600">forEach()</td>
                  <td className="px-4 py-3">undefined</td>
                  <td className="px-4 py-3">Side effects, logging</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">map()</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Transform data</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">for loop</td>
                  <td className="px-4 py-3">N/A</td>
                  <td className="px-4 py-3">Complex logic, break/continue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Expecting forEach() to Return a Value</h3>
              <CodeExample
              title='forEach() Does Not Return a Value'
                code={`const numbers = [1, 2, 3];
const result = numbers.forEach(n => n * 2);
console.log(result); // undefined

// Use map() if you need results:
const result = numbers.map(n => n * 2); // [2, 4, 6]`}
                explanation="The <code>forEach()</code> method always returns <code>undefined</code>. If you need to transform data and return a new array, use <code>map()</code>."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using forEach() When You Need break/continue</h3>
              <CodeExample
              title='forEach() Does Not Support break or continue'
                code={`// forEach doesn't support break
numbers.forEach(n => {
  if (n > 3) break; // SyntaxError!
});

// Use a for loop instead:
for (const n of numbers) {
  if (n > 3) break;
  console.log(n);
}`}
                explanation="Unlike traditional loops, <code>forEach()</code> cannot use <code>break</code> or <code>continue</code>. Use a <code>for</code> loop or <code>for...of</code> when control flow is required."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Modifying Array While Iterating</h3>
              <CodeExample
              title='Avoid Modifying Arrays During Iteration'
                code={`const arr = [1, 2, 3, 4];
arr.forEach(n => {
  if (n > 2) arr.push(n * 2); // Dangerous!
});
// Results in an infinite or unexpected loop`}
                explanation="Changing the array while iterating with <code>forEach()</code> can lead to unexpected behavior or infinite loops."
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I break out of forEach()?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, forEach() doesn't support break or continue. Use a for loop if you need to control iteration.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">When should I use forEach() vs for loop?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use forEach() for simple iterations. Use for loops when you need control flow statements (break, continue).</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I skip elements in forEach()?</h3>
              <CodeExample
              title='Skipping Elements in forEach()'
                code={`// You can't use continue, but you can use return
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => {
  if (n < 3) return; // Skips to next iteration
  console.log(n);
});
// Logs: 3, 4, 5`}
                explanation="Although <code>forEach()</code> does not support <code>continue</code>, you can use <code>return</code> inside the callback to skip the current iteration."
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
