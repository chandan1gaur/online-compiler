import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JavaScript Array Methods - Complete Guide | Online Compiler',
  description: 'Master all JavaScript array methods: push, pop, shift, unshift, splice, slice, map, filter, reduce, find, sort, and more. Complete guide with examples.',
  keywords: 'array methods, push, pop, shift, unshift, splice, slice, map, filter, reduce, find, sort, forEach, JavaScript arrays, array manipulation',
  openGraph: {
    title: 'Complete JavaScript Array Methods Guide',
    description: 'Master all essential JavaScript array methods with practical examples and best practices.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/array-methods',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Array Methods',
    description: 'Complete guide to all JavaScript array methods with examples.',
  },
};

export default function ArrayMethodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="w-full px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Beginner Level
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Array Methods: Complete Guide
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Master all essential JavaScript array methods for manipulating, searching, and transforming arrays. From basic operations to advanced functional programming techniques.
          </p>
        </div>

        {/* Array Methods Categories */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Array Methods Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Mutating Methods</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Modify the original array: push, pop, shift, unshift, splice, sort, reverse, fill
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">Non-Mutating Methods</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Return new arrays/values: slice, concat, includes, indexOf, join
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Iteration Methods</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Process array elements: forEach, map, filter, reduce, find, some, every
              </p>
            </div>
          </div>
        </section>

        {/* Basic Mutating Methods */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Basic Mutating Methods</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">push() - Add to End</h3>
              <CodeExample
                title='push() Method'
                code={`const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Add multiple elements
fruits.push('mango', 'pineapple');
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'pineapple']

// Returns new length
const length = fruits.push('grape');
console.log(length); // 6`}
                explanation="Adds one or more elements to the end of an array and returns the new length."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">pop() - Remove from End</h3>
              <CodeExample
                title='pop() Method'
                code={`const fruits = ['apple', 'banana', 'orange'];
const removed = fruits.pop();
console.log(removed); // 'orange'
console.log(fruits); // ['apple', 'banana']

// Pop on empty array
const empty = [];
console.log(empty.pop()); // undefined`}
                explanation="Removes the last element from an array and returns that element."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">unshift() - Add to Beginning</h3>
              <CodeExample
                title='unshift() Method'
                code={`const fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']

// Add multiple elements
fruits.unshift('mango', 'pineapple');
console.log(fruits); // ['mango', 'pineapple', 'apple', 'banana', 'orange']

// Returns new length
const length = fruits.unshift('grape');
console.log(length); // 6`}
                explanation="Adds one or more elements to the beginning of an array and returns the new length."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">shift() - Remove from Beginning</h3>
              <CodeExample
                title='shift() Method'
                code={`const fruits = ['apple', 'banana', 'orange'];
const removed = fruits.shift();
console.log(removed); // 'apple'
console.log(fruits); // ['banana', 'orange']

// Shift on empty array
const empty = [];
console.log(empty.shift()); // undefined`}
                explanation="Removes the first element from an array and returns that element."
              />
            </div>
          </div>
        </section>

        {/* Advanced Mutating Methods */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Advanced Mutating Methods</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">splice() - Add/Remove Elements</h3>
              <CodeExample
                title='splice() Method'
                code={`const fruits = ['apple', 'banana', 'orange', 'mango'];

// Remove 1 element at index 1
const removed = fruits.splice(1, 1);
console.log(removed); // ['banana']
console.log(fruits); // ['apple', 'orange', 'mango']

// Add elements at index 1, remove 0
fruits.splice(1, 0, 'kiwi', 'grape');
console.log(fruits); // ['apple', 'kiwi', 'grape', 'orange', 'mango']

// Replace elements
fruits.splice(2, 2, 'pineapple');
console.log(fruits); // ['apple', 'kiwi', 'pineapple', 'mango']`}
                explanation="Adds/removes elements at any position. Parameters: (start, deleteCount, ...items)"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">sort() - Sort Array Elements</h3>
              <CodeExample
                title='sort() Method'
                code={`const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort();
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// Sort strings
const fruits = ['banana', 'Apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // ['Apple', 'banana', 'cherry', 'date']

// Custom sort function
const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => b - a); // Descending
console.log(nums); // [5, 4, 3, 1, 1]

// Sort objects
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people); // Sorted by age ascending`}
                explanation="Sorts array elements in place. Default: lexicographic. Custom comparator for numbers/objects."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">reverse() - Reverse Array</h3>
              <CodeExample
                title='reverse() Method'
                code={`const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

// Reverse strings
const letters = ['a', 'b', 'c', 'd'];
letters.reverse();
console.log(letters); // ['d', 'c', 'b', 'a']`}
                explanation="Reverses the order of elements in the array in place."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">fill() - Fill with Value</h3>
              <CodeExample
                title='fill() Method'
                code={`const numbers = [1, 2, 3, 4, 5];

// Fill entire array
numbers.fill(0);
console.log(numbers); // [0, 0, 0, 0, 0]

// Fill part of array
numbers.fill(9, 2, 4); // value, start, end
console.log(numbers); // [0, 0, 9, 9, 0]

// Fill with different types
const mixed = [1, 2, 3, 4, 5];
mixed.fill('hello', 1, 3);
console.log(mixed); // [1, 'hello', 'hello', 4, 5]`}
                explanation="Fills array elements with a static value. Parameters: (value, start?, end?)"
              />
            </div>
          </div>
        </section>

        {/* Non-Mutating Methods */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Non-Mutating Methods</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">slice() - Extract Portion</h3>
              <CodeExample
                title='slice() Method'
                code={`const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// Extract from index 1 to 3
const sliced = fruits.slice(1, 4);
console.log(sliced); // ['banana', 'orange', 'mango']
console.log(fruits); // Original unchanged

// From index 2 to end
const fromIndex2 = fruits.slice(2);
console.log(fromIndex2); // ['orange', 'mango', 'grape']

// Last 2 elements
const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['mango', 'grape']

// Copy entire array
const copy = fruits.slice();
console.log(copy); // ['apple', 'banana', 'orange', 'mango', 'grape']`}
                explanation="Returns a shallow copy of a portion of an array. Parameters: (start?, end?)"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">concat() - Merge Arrays</h3>
              <CodeExample
                title='concat() Method'
                code={`const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'mango'];

// Merge two arrays
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'banana', 'orange', 'mango']
console.log(fruits); // Original unchanged

// Merge multiple arrays
const veggies = ['carrot', 'broccoli'];
const combined = fruits.concat(moreFruits, veggies);
console.log(combined); // ['apple', 'banana', 'orange', 'mango', 'carrot', 'broccoli']

// Add individual elements
const withExtras = fruits.concat('grape', 'pineapple');
console.log(withExtras); // ['apple', 'banana', 'grape', 'pineapple']`}
                explanation="Merges two or more arrays and returns a new array without modifying originals."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">includes() - Check Existence</h3>
              <CodeExample
                title='includes() Method'
                code={`const fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false

// Check from specific index
console.log(fruits.includes('banana', 2)); // false (starts checking from index 2)
console.log(fruits.includes('orange', 2)); // true

// Works with different types
const mixed = [1, 'hello', true, null, undefined];
console.log(mixed.includes(null)); // true
console.log(mixed.includes(0)); // false (strict equality)`}
                explanation="Checks if an array contains a specific element. Parameters: (element, fromIndex?)"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">indexOf() & lastIndexOf() - Find Position</h3>
              <CodeExample
                title='indexOf() and lastIndexOf() Methods'
                code={`const fruits = ['apple', 'banana', 'orange', 'banana', 'mango'];

console.log(fruits.indexOf('banana')); // 1 (first occurrence)
console.log(fruits.lastIndexOf('banana')); // 3 (last occurrence)
console.log(fruits.indexOf('grape')); // -1 (not found)

// Search from specific index
console.log(fruits.indexOf('banana', 2)); // 3 (starts from index 2)
console.log(fruits.lastIndexOf('banana', 2)); // 1 (starts from index 2 backwards)

// Works with different types
const numbers = [1, 2, 3, 2, 1];
console.log(numbers.indexOf(2)); // 1
console.log(numbers.lastIndexOf(2)); // 3`}
                explanation="Find first/last index of an element. Returns -1 if not found. Parameters: (element, fromIndex?)"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">join() - Create String</h3>
              <CodeExample
                title='join() Method'
                code={`const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.join()); // 'apple,banana,orange' (default comma)
console.log(fruits.join('')); // 'applebananaorange' (no separator)
console.log(fruits.join(' ')); // 'apple banana orange' (space)
console.log(fruits.join(' - ')); // 'apple - banana - orange'

// Useful for creating sentences
const words = ['Hello', 'world', 'from', 'JavaScript'];
console.log(words.join(' ')); // 'Hello world from JavaScript'

// Creating CSV-like output
const data = ['John', 'Doe', '30'];
console.log(data.join(',')); // 'John,Doe,30'`}
                explanation="Joins all array elements into a string. Parameter: (separator?) - defaults to comma."
              />
            </div>
          </div>
        </section>

        {/* Iteration Methods */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Iteration Methods</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">forEach() - Execute Function</h3>
              <CodeExample
                title='forEach() Method'
                code={`const numbers = [1, 2, 3, 4, 5];

// Basic usage
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

// With arrow function and index
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});
// Output: Index 0: 1, Index 1: 2, etc.

// Practical example: Update DOM elements
const items = ['Apple', 'Banana', 'Orange'];
items.forEach((item, index) => {
  console.log(\`Item \${index + 1}: \${item}\`);
});`}
                explanation="Executes a function for each array element. Parameters: (callback(element, index, array))"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">map() - Transform Elements</h3>
              <CodeExample
                title='map() Method'
                code={`const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original unchanged)

// Transform objects
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
];

const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane']

const ages = users.map(user => user.age);
console.log(ages); // [30, 25]

// With index parameter
const indexed = numbers.map((num, index) => \`Item \${index}: \${num}\`);
console.log(indexed); // ['Item 0: 1', 'Item 1: 2', ...]`}
                explanation="Creates a new array with results of calling a function for every element."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">filter() - Filter Elements</h3>
              <CodeExample
                title='filter() Method'
                code={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Filter objects
const users = [
  { name: 'John', age: 30, active: true },
  { name: 'Jane', age: 25, active: false },
  { name: 'Bob', age: 35, active: true }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{name: 'John', ...}, {name: 'Bob', ...}]

const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{name: 'John', ...}, {name: 'Bob', ...}]

// Filter strings
const fruits = ['apple', 'banana', 'orange', 'grape'];
const longNames = fruits.filter(fruit => fruit.length > 5);
console.log(longNames); // ['banana', 'orange']`}
                explanation="Creates a new array with all elements that pass the test implemented by the provided function."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">find() & findIndex() - Find Elements</h3>
              <CodeExample
                title='find() and findIndex() Methods'
                code={`const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

// find() - returns first matching element
const user = users.find(user => user.age > 30);
console.log(user); // {id: 3, name: 'Bob', age: 35}

// findIndex() - returns index of first match
const index = users.findIndex(user => user.age > 30);
console.log(index); // 2

// If no match found
const notFound = users.find(user => user.age > 50);
console.log(notFound); // undefined

const notFoundIndex = users.findIndex(user => user.age > 50);
console.log(notFoundIndex); // -1

// Find in simple array
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2`}
                explanation="find() returns first element that satisfies condition. findIndex() returns its index. Returns undefined/-1 if not found."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">reduce() - Reduce to Single Value</h3>
              <CodeExample
                title='reduce() Method'
                code={`const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(sum); // 15

// With initial value
const sumFrom10 = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sumFrom10); // 25

// Find maximum
const max = numbers.reduce((acc, curr) => curr > acc ? curr : acc);
console.log(max); // 5

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // {apple: 3, banana: 2, orange: 1}

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]`}
                explanation="Executes a reducer function on each element, resulting in a single output value."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">some() & every() - Test Elements</h3>
              <CodeExample
                title='some() and every() Methods'
                code={`const numbers = [1, 2, 3, 4, 5];

// some() - at least one element passes test
console.log(numbers.some(num => num > 3)); // true
console.log(numbers.some(num => num > 10)); // false

// every() - all elements pass test
console.log(numbers.every(num => num > 0)); // true
console.log(numbers.every(num => num > 3)); // false

// Practical examples
const users = [
  { name: 'John', age: 30, active: true },
  { name: 'Jane', age: 25, active: false },
  { name: 'Bob', age: 35, active: true }
];

// Check if any user is inactive
const hasInactiveUsers = users.some(user => !user.active);
console.log(hasInactiveUsers); // true

// Check if all users are adults
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// Check if any user is over 40
const hasSenior = users.some(user => user.age > 40);
console.log(hasSenior); // false`}
                explanation="some() returns true if at least one element passes test. every() returns true if all elements pass test."
              />
            </div>
          </div>
        </section>

        {/* Modern Methods */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Modern Array Methods</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">flat() - Flatten Nested Arrays</h3>
              <CodeExample
                title='flat() Method'
                code={`const nested = [1, [2, 3], [4, [5, 6]]];

// Flatten one level
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]

// Flatten all levels
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// Flatten specific depth
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// Remove empty slots
const withEmpty = [1, , 3, , , 6];
console.log(withEmpty.flat()); // [1, 3, 6]`}
                explanation="Creates a new array with all sub-array elements concatenated recursively up to the specified depth."
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">flatMap() - Map and Flatten</h3>
              <CodeExample
                title='flatMap() Method'
                code={`const sentences = ['Hello world', 'How are you', 'Fine thank you'];

// Split each sentence and flatten
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ['Hello', 'world', 'How', 'are', 'you', 'Fine', 'thank', 'you']

// Equivalent to map().flat()
const wordsAlt = sentences.map(sentence => sentence.split(' ')).flat();
console.log(wordsAlt); // Same result

// More complex example
const numbers = [1, 2, 3, 4];
const doubledAndSplit = numbers.flatMap(num => [num, num * 2]);
console.log(doubledAndSplit); // [1, 2, 2, 4, 3, 6, 4, 8]

// Filter and transform
const data = [1, 2, 3, 4, 5, 6];
const evenDoubled = data.flatMap(num => {
  return num % 2 === 0 ? [num * 2] : [];
});
console.log(evenDoubled); // [4, 8, 12]`}
                explanation="First maps each element using a mapping function, then flattens the result into a new array."
              />
            </div>
          </div>
        </section>

        {/* Method Comparison Table */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Array Methods Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Method</th>
                  <th className="px-4 py-3 font-bold">Mutates</th>
                  <th className="px-4 py-3 font-bold">Returns</th>
                  <th className="px-4 py-3 font-bold">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">push()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">New length</td>
                  <td className="px-4 py-3">Add to end</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">pop()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">Removed element</td>
                  <td className="px-4 py-3">Remove from end</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">shift()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">Removed element</td>
                  <td className="px-4 py-3">Remove from start</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">unshift()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">New length</td>
                  <td className="px-4 py-3">Add to start</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">splice()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">Removed elements</td>
                  <td className="px-4 py-3">Add/remove anywhere</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">sort()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">Sorted array</td>
                  <td className="px-4 py-3">Sort elements</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">reverse()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">Reversed array</td>
                  <td className="px-4 py-3">Reverse order</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">fill()</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">Modified array</td>
                  <td className="px-4 py-3">Fill with value</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">slice()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Extract portion</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">concat()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Merge arrays</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">includes()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">Boolean</td>
                  <td className="px-4 py-3">Check existence</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">indexOf()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">Index or -1</td>
                  <td className="px-4 py-3">Find position</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">join()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">String</td>
                  <td className="px-4 py-3">Create string</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">forEach()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">undefined</td>
                  <td className="px-4 py-3">Execute function</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">map()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Transform elements</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">filter()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Filter elements</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">find()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">Element or undefined</td>
                  <td className="px-4 py-3">Find first match</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">reduce()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">Any value</td>
                  <td className="px-4 py-3">Reduce to single value</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">some()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">Boolean</td>
                  <td className="px-4 py-3">Test if any match</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">every()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">Boolean</td>
                  <td className="px-4 py-3">Test if all match</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">flat()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Flatten nested arrays</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono">flatMap()</td>
                  <td className="px-4 py-3">❌ No</td>
                  <td className="px-4 py-3">New array</td>
                  <td className="px-4 py-3">Map and flatten</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes to Avoid</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Forgetting Mutation</h3>
              <CodeExample
                title='Mistake: Mutating Original Array'
                code={`const original = [1, 2, 3];
const result = original.push(4); // Modifies original!
console.log(original); // [1, 2, 3, 4] - changed!
console.log(result); // 4 (length)

// Fix: Create copy first
const original2 = [1, 2, 3];
const copy = [...original2]; // or original2.slice()
copy.push(4);
console.log(original2); // [1, 2, 3] - unchanged
console.log(copy); // [1, 2, 3, 4]`}
                explanation="push, pop, shift, unshift, splice, sort, reverse, fill mutate the original array."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Confusing Return Values</h3>
              <CodeExample
                title='Mistake: Wrong Assumptions About Return Values'
                code={`const arr = [1, 2, 3];

// These return the array itself
console.log(arr.sort()); // [1, 2, 3] - returns sorted array
console.log(arr.reverse()); // [3, 2, 1] - returns reversed array

// These return different values
console.log(arr.push(4)); // 4 (new length)
console.log(arr.pop()); // 4 (removed element)
console.log(arr.shift()); // 3 (removed element)
console.log(arr.unshift(0)); // 4 (new length)

// These return new arrays
console.log(arr.slice(0, 2)); // [0, 1] - new array
console.log(arr.concat([4, 5])); // [0, 1, 2, 4, 5] - new array`}
                explanation="Different methods return different types: arrays, lengths, elements, or new arrays."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ sort() Default Behavior</h3>
              <CodeExample
                title='Mistake: sort() Converts to Strings'
                code={`const numbers = [1, 2, 10, 3, 20];
numbers.sort();
console.log(numbers); // [1, 10, 2, 20, 3] - wrong!

// Fix: Provide comparison function
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 10, 20] - correct!

// For descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [20, 10, 3, 2, 1]`}
                explanation="sort() converts elements to strings by default. Always provide a comparison function for numbers."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ splice() Parameter Confusion</h3>
              <CodeExample
                title='Mistake: Wrong splice() Parameters'
                code={`const arr = [1, 2, 3, 4, 5];

// Wrong: Trying to remove from index 2 to 4
arr.splice(2, 4); // Removes 3 elements starting at index 2
console.log(arr); // [1, 2] - not what expected!

// Correct: Remove elements at indices 2, 3, 4
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 3); // Start at 2, remove 3 elements
console.log(arr2); // [1, 2]

// Add elements without removing
const arr3 = [1, 2, 5];
arr3.splice(2, 0, 3, 4); // At index 2, remove 0, add 3, 4
console.log(arr3); // [1, 2, 3, 4, 5]`}
                explanation="splice(start, deleteCount, ...items) - deleteCount is number to remove, not end index."
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
              <span>Use <strong>push/pop</strong> for stack operations (LIFO) - they're O(1) and efficient</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use <strong>push/shift</strong> for queue operations (FIFO) when order matters</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Avoid <strong>shift/unshift</strong> on large arrays - they're O(n) and slow</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Always provide a comparison function to <strong>sort()</strong> for numbers</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use <strong>slice()</strong> instead of <strong>splice()</strong> when you don't want to mutate</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Prefer <strong>includes()</strong> over <strong>indexOf()</strong> for existence checks</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use <strong>map/filter/reduce</strong> for functional programming style</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Create array copies with <strong>slice()</strong> or spread operator before mutation</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use <strong>flat()</strong> and <strong>flatMap()</strong> for modern array flattening needs</span>
            </li>
          </ul>
        </section>

        {/* Related Topics */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Explore Individual Array Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/javascript/arrays/map" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">map()</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Transform array elements</p>
            </Link>
            <Link href="/javascript/arrays/filter" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">filter()</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Filter array elements</p>
            </Link>
            <Link href="/javascript/arrays/reduce" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">reduce()</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Reduce to single value</p>
            </Link>
            <Link href="/javascript/arrays/find" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">find()</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Find first matching element</p>
            </Link>
            <Link href="/javascript/arrays/sort" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">sort()</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Sort array elements</p>
            </Link>
            <Link href="/javascript/arrays/slice" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">slice() & splice()</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Extract and modify portions</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Which array methods mutate the original array?</h3>
              <p className="text-slate-700 dark:text-slate-300">push, pop, shift, unshift, splice, sort, reverse, and fill mutate the original array. All other methods return new arrays or values without modifying the original.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference between slice() and splice()?</h3>
              <p className="text-slate-700 dark:text-slate-300">slice() extracts a portion of an array without modifying the original. splice() can add/remove elements at any position and modifies the original array.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">When should I use map() vs forEach()?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use map() when you want to transform each element and get a new array. Use forEach() when you want to perform side effects (like logging) without creating a new array.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I check if an array contains a specific value?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use includes() for simple existence checks. Use find() or findIndex() when you need the actual element or its position.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the most efficient way to empty an array?</h3>
              <p className="text-slate-700 dark:text-slate-300">The most efficient way is to set the length property to 0: arr.length = 0. This clears all elements and doesn't create a new array reference.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I remove duplicates from an array?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use the Set constructor: [...new Set(array)] or array.filter((item, index) {"=>"} array.indexOf(item) === index)</p>
            </div>
          </div>
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
                name: 'Which array methods mutate the original array?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'push, pop, shift, unshift, splice, sort, reverse, and fill mutate the original array. All other methods return new arrays or values without modifying the original.'
                }
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between slice() and splice()?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'slice() extracts a portion of an array without modifying the original. splice() can add/remove elements at any position and modifies the original array.'
                }
              },
              {
                '@type': 'Question',
                name: 'When should I use map() vs forEach()?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use map() when you want to transform each element and get a new array. Use forEach() when you want to perform side effects (like logging) without creating a new array.'
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
