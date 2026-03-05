import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript Arrays - Complete Guide | Online Compiler',
  description: 'Master JavaScript arrays with our comprehensive guide. Learn array methods, manipulation, and best practices with interactive examples.',
  keywords: 'JavaScript arrays, array methods, map, filter, reduce, splice, slice, sort, JavaScript tutorial',
  openGraph: {
    title: 'JavaScript Arrays - Complete Guide',
    description: 'Master JavaScript arrays with our comprehensive guide. Learn array methods, manipulation, and best practices.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Arrays - Complete Guide',
    description: 'Master JavaScript arrays with our comprehensive guide. Learn array methods, manipulation, and best practices.',
  },
  canonical: 'https://www.online-compiler.com/javascript/arrays',
};

export default function ArraysOverviewPage() {
  const overviewCards = [
    { title: 'Array Methods', href: '/javascript/arrays/array-methods', description: 'Learn push, pop, shift, unshift and other basic operations' },
    { title: 'map()', href: '/javascript/arrays/map', description: 'Transform array elements with the map() method' },
    { title: 'filter()', href: '/javascript/arrays/filter', description: 'Filter array elements based on conditions' },
    { title: 'reduce()', href: '/javascript/arrays/reduce', description: 'Combine array elements into a single value' },
    { title: 'find()', href: '/javascript/arrays/find', description: 'Find the first matching element' },
    { title: 'findIndex()', href: '/javascript/arrays/findindex', description: 'Find the index of the first matching element' },
    { title: 'some()', href: '/javascript/arrays/some', description: 'Check if any element matches a condition' },
    { title: 'every()', href: '/javascript/arrays/every', description: 'Check if all elements match a condition' },
    { title: 'sort()', href: '/javascript/arrays/sort', description: 'Sort array elements' },
    { title: 'slice()', href: '/javascript/arrays/slice', description: 'Extract a portion of an array' },
    { title: 'splice()', href: '/javascript/arrays/splice', description: 'Add or remove elements from an array' },
    { title: 'flat()', href: '/javascript/arrays/flat', description: 'Flatten nested arrays' },
    { title: 'forEach()', href: '/javascript/arrays/foreach', description: 'Iterate through array elements' },
    { title: 'Array Destructuring', href: '/javascript/arrays/destructuring', description: 'Extract values from arrays into variables' },
    { title: 'Multidimensional Arrays', href: '/javascript/arrays/multidimensional', description: 'Work with nested arrays' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Arrays: Complete Guide
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Master working with arrays in JavaScript. From basic operations to advanced methods, this guide covers everything you need to know about arrays and how to use them effectively in your applications.
          </p>
        </div>

        {/* What are Arrays? */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What are Arrays?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            An array is an ordered collection of elements stored in a single variable. Arrays are one of the most fundamental data structures in JavaScript and are used to store multiple values of the same or different types. Each element in an array has an index (starting from 0) that identifies its position.
          </p>
          <CodeExample
          title='Creating Arrays in JavaScript'
            code={`// Creating arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3`}
            explanation="Learn how to create arrays and access elements using index positions. Arrays store multiple values in a single variable and are one of the most commonly used JavaScript data structures."
          />
        </section>

        {/* How to Create Arrays */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">How to Create Arrays</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">There are multiple ways to create arrays in JavaScript. Each method is useful in different scenarios.</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Array Literal (Recommended)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">The most common and preferred way to create arrays. Use square brackets [] with comma-separated values.</p>
              <CodeExample
              title='Create Arrays Using Array Literals'
                code={`// Empty array
const empty = [];

// Array with values
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, { name: 'John' }, null];

// Array with variables
const x = 10;
const arr = [x, x + 5, x * 2]; // [10, 15, 20]`}
                explanation="The array literal syntax [] is the most common way to create arrays in JavaScript. It is simple, readable, and widely used in modern applications."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Array Constructor</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use the new Array() constructor. Be careful with a single numeric argument - it creates an empty array with that length.</p>
              <CodeExample
              title='Create Arrays with the Array Constructor'
                code={`// Creates array with specific length (contains empty slots)
const arr1 = new Array(5); // [empty × 5]
console.log(arr1.length); // 5

// Creates array with values
const arr2 = new Array(1, 2, 3); // [1, 2, 3]
const arr3 = new Array('a', 'b'); // ['a', 'b']

// CAUTION: Single number argument behaves differently
const arr4 = new Array(3); // [empty × 3]
const arr5 = new Array(3, 4); // [3, 4]`}
                explanation="JavaScript arrays can also be created using new Array(). It allows defining array values or creating arrays with a specific length."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Array.from()</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Create an array from an iterable (string, Set, Map, NodeList) or array-like object.</p>
              <CodeExample
              title='Convert Data to Arrays with Array.from()'
                code={`// From a string
const str = 'hello';
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

// From a Set
const set = new Set([1, 2, 3, 3, 2, 1]);
const arr = Array.from(set); // [1, 2, 3]

// With mapping function
const numbers = [1, 2, 3];
const doubled = Array.from(numbers, x => x * 2); // [2, 4, 6]

// From object with length property
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const arr2 = Array.from(arrayLike); // ['a', 'b', 'c']`}
                explanation="Array.from() creates a new array from iterable or array-like objects such as strings, sets, and node lists."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Array.of()</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Create an array from its arguments. Solves the single-number argument issue of new Array().</p>
              <CodeExample
              title='Create Arrays Using Array.of()'
                code={`// Unlike new Array(3), Array.of(3) creates [3]
const arr1 = Array.of(3); // [3]
const arr2 = Array.of(3, 4, 5); // [3, 4, 5]

// Always treats arguments as elements, not length
const arr3 = Array.of(1); // [1] (not [empty × 1])`}
                explanation="Array.of() creates a new array from the provided arguments and always treats them as elements."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Spread Operator (...)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Spread operator expands iterables into array elements. Great for copying or combining arrays.</p>
              <CodeExample
              title='Using the Spread Operator with Arrays'
                code={`// Copy an array
const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]

// Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Add elements while combining
const merged = [0, ...arr1, 2.5, ...arr2, 5]; // [0, 1, 2, 2.5, 3, 4, 5]

// From string
const letters = [...'hello']; // ['h', 'e', 'l', 'l', 'o']`}
                explanation="The spread operator ... expands array elements. It is commonly used to copy, merge, or combine arrays."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Creating Arrays of Specific Size with Defaults</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Create arrays with a specific length filled with default values.</p>
              <CodeExample
              title='Create Arrays with Default Values'
                code={`// Fill with 0
const zeros = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// Fill with string
const repeated = new Array(3).fill('x'); // ['x', 'x', 'x']

// Using Array.from for more control
const range = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]
const evens = Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]`}
                explanation="Use fill() or Array.from() to create arrays with a fixed size and predefined values."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">7. Using Array Methods (Advanced)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Create arrays by transforming existing ones.</p>
              <CodeExample
              title='Generate Arrays Using Array Methods'
                code={`// Using map() to create array
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]

// Using filter() to create array
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4, 6]

// Using split() to create array from string
const csv = 'apple,banana,orange';
const fruits = csv.split(','); // ['apple', 'banana', 'orange']`}
                explanation="Methods like map(), filter(), and split() help transform existing data into new arrays."
              />
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-900 dark:text-blue-200 text-sm">
              <strong>💡 Best Practice:</strong> Use array literal syntax <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">[1, 2, 3]</code> for most cases. Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">Array.from()</code> or spread operator when transforming other data structures.
            </p>
          </div>
        </section>

        {/* Why Learn Arrays? */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why Master Arrays?</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span><strong>Essential for Data Management:</strong> Arrays are crucial for organizing and manipulating collections of data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span><strong>Coding Interviews:</strong> Array problems are common in technical interviews</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span><strong>Performance Optimization:</strong> Choosing the right array method impacts your code's efficiency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span><strong>Working with APIs:</strong> Most data from APIs comes in array format (JSON arrays)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-1">✓</span>
              <span><strong>Frontend Development:</strong> React, Vue, and Angular heavily rely on array manipulation</span>
            </li>
          </ul>
        </section>

        {/* Overview Cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Array Methods & Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{card.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Key Concepts */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Array Index</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Arrays use zero-based indexing, meaning the first element is at index 0.</p>
              <CodeExample
              title='Access Array Elements Using Index'
                code={`const arr = ['a', 'b', 'c'];
console.log(arr[0]); // 'a'
console.log(arr[1]); // 'b'
console.log(arr[2]); // 'c'`}
                explanation="JavaScript arrays use zero-based indexing, meaning the first element starts at index 0. You can access elements using bracket notation like array[index]."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Array Length</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">The length property returns the number of elements in an array.</p>
              <CodeExample
              title='Get and Modify Array Length'
                code={`const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3

// You can modify the length
fruits.length = 2; // Trims array to 2 elements
console.log(fruits); // ['apple', 'banana']`}
                explanation="The length property returns the number of elements in an array. It can also be used to truncate or expand an array."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Array Methods Categories</h3>
              <div className="space-y-2 text-slate-700 dark:text-slate-300">
                <p><strong>Mutating Methods:</strong> Modify the original array (push, pop, shift, unshift, splice, sort, reverse)</p>
                <p><strong>Non-Mutating Methods:</strong> Return a new array without modifying the original (map, filter, slice, concat)</p>
                <p><strong>Iterator Methods:</strong> Execute a function for each element (forEach, map, filter, reduce)</p>
                <p><strong>Search Methods:</strong> Find specific elements (find, findIndex, includes, indexOf)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Array Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">❌ Forgetting Array is Zero-Indexed</h3>
              <CodeExample
              title='Array Index Starts From Zero'
                code={`const arr = [1, 2, 3];
console.log(arr[1]); // 2, not 1!`}
                explanation="JavaScript arrays start from index 0. Accessing arr[1] returns the second element, not the first."
              />
              <p className="text-sm text-red-700 dark:text-red-400 mt-2">Always remember: first element is at index 0, not 1</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">❌ Using == Instead of Deep Comparison</h3>
              <CodeExample
              title='Array Comparison in JavaScript'
                code={`const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2); // false (different references)
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true`}
                explanation="Arrays are compared by reference, not by value. Two arrays with the same elements are still different unless they reference the same object."
              />
              <p className="text-sm text-red-700 dark:text-red-400 mt-2">Arrays are compared by reference, not by value</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">❌ Mutating Original Array Accidentally</h3>
              <CodeExample
              title='Avoid Mutating the Original Array'
                code={`const original = [1, 2, 3];
const sorted = original.sort(); // Mutates original!
console.log(original); // [1, 2, 3] - changed!

// Better:
const sorted = [...original].sort(); // Creates copy first`}
                explanation="Some methods like sort() modify the original array. Use the spread operator or slice() to create a copy before sorting or modifying."
              />
              <p className="text-sm text-red-700 dark:text-red-400 mt-2">Some array methods mutate the original array. Use spread operator or slice() to create a copy</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">❌ Not Checking for Empty Arrays</h3>
              <CodeExample
              title='Check for Empty Arrays Safely'
                code={`const arr = [];
console.log(arr[0]); // undefined (not an error)

// Better:
if (arr.length > 0) {
  console.log(arr[0]);
}`}
                explanation="Accessing an index in an empty array returns undefined. Always check array.length before accessing elements."
              />
              <p className="text-sm text-red-700 dark:text-red-400 mt-2">Always check array length before accessing elements</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I create an array?</h3>
              <p className="text-slate-700 dark:text-slate-300">You can create arrays using array literals [] or the Array constructor. Array literals are preferred: const arr = [1, 2, 3];</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference between forEach and map?</h3>
              <p className="text-slate-700 dark:text-slate-300">forEach doesn't return anything and is used for side effects. map returns a new array with transformed elements and should be used when you need the results.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">When should I use filter vs find?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use find() to get the first matching element, and filter() to get all matching elements. find() returns a single value, filter() returns an array.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I remove duplicates from an array?</h3>
              <CodeExample
              title='Remove Duplicate Values from an Array'
                code={`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]`}
                explanation="You can remove duplicates using the Set object and the spread operator to create a new array with unique values."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the best way to copy an array?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use the spread operator [...arr], slice() method, or Array.from(). Avoid direct assignment (newArr = oldArr) as it only copies the reference.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-4">Ready to Dive Deeper?</h2>
          <p className="text-blue-800 dark:text-blue-300 mb-6">
            Choose an array method above and learn how to use it with practical examples. Each topic includes real-world use cases and common pitfalls to avoid.
          </p>
          <a href="/javascript/arrays/array-methods" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Start with Array Methods →
          </a>
        </section>
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
                name: 'How do I create an array?',
                acceptedAnswer: { '@type': 'Answer', text: 'You can create arrays using array literals [] or the Array constructor. Array literals are preferred: const arr = [1, 2, 3];' },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between forEach and map?',
                acceptedAnswer: { '@type': 'Answer', text: 'forEach doesn\'t return anything and is used for side effects. map returns a new array with transformed elements and should be used when you need the results.' },
              },
              {
                '@type': 'Question',
                name: 'When should I use filter vs find?',
                acceptedAnswer: { '@type': 'Answer', text: 'Use find() to get the first matching element, and filter() to get all matching elements. find() returns a single value, filter() returns an array.' },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
