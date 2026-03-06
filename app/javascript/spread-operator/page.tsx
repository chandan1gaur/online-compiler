import type { Metadata } from "next";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Spread Operator (...) - Complete Guide | Online Compiler",
  description:
    "Master JavaScript spread operator. Learn array spreading, object spreading, function arguments, cloning, and practical use cases with examples.",
  keywords: [
    "spread operator",
    "rest operator",
    "array spreading",
    "object spreading",
    "javascript es6",
    "array cloning",
  ],
  openGraph: {
    title: "JavaScript Spread & Rest Operators - Complete Guide",
    description:
      "Master spread operator for arrays, objects, and function arguments with practical examples.",
    url: "/javascript/spread-operator",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Spread Operator",
    description: "Learn spread operator for arrays, objects, and function arguments.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/spread-operator" },
};

export default function SpreadOperatorPage() {
  return (
    <main className="w-full px-4 py-12">
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">JavaScript Spread & Rest Operators: Complete Guide</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-semibold mb-2">What You'll Learn:</p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Spread operator syntax and usage</li>
            <li>✅ Rest parameters in functions</li>
            <li>✅ Array spreading and cloning</li>
            <li>✅ Object spreading and merging</li>
            <li>✅ Copying vs referencing data</li>
            <li>✅ Spread in function calls</li>
            <li>✅ When to use spread vs alternatives</li>
            <li>✅ Interview questions</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">What is the Spread Operator?</h2>
        <p className="text-lg leading-relaxed mb-6">
          The spread operator (...) allows iterable objects (like arrays or strings) to be expanded in places where zero or more elements are expected. It's one of the most useful ES6 features, making code cleaner and enabling powerful operations on collections and objects.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Spread in Arrays</h2>

        <CodeExample
          title="Array Spreading Basics"
          code={`// Spread unpacks array elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Without spread: [[1,2,3], [4,5,6]]
const wrong = [arr1, arr2];
console.log(wrong); // [[1,2,3], [4,5,6]]

// With spread: [1, 2, 3, 4, 5, 6]
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Add elements between
const merged = [0, ...arr1, 3.5, ...arr2, 7];
console.log(merged); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Works with strings (treats as array of characters)
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
`}
          explanation="Spread unpacks array elements inline, useful for combining arrays and adding elements."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Cloning Arrays and Objects</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Spread is a great way to create shallow copies of arrays and objects, avoiding unintended mutations.
        </p>

        <CodeExample
          title="Cloning with Spread"
          code={`// Clone an array (shallow copy)
const original = [1, 2, 3];
const clone = [...original];

console.log(clone); // [1, 2, 3]
console.log(clone === original); // false (different arrays)

// Modifying clone doesn't affect original
clone[0] = 99;
console.log(original[0]); // 1 (unchanged)
console.log(clone[0]); // 99

// Clone an object
const originalObj = { name: "Alice", age: 30 };
const cloneObj = { ...originalObj };

console.log(cloneObj); // { name: "Alice", age: 30 }
console.log(cloneObj === originalObj); // false (different objects)

// Modifying clone doesn't affect original
cloneObj.name = "Bob";
console.log(originalObj.name); // "Alice"
console.log(cloneObj.name); // "Bob"

// IMPORTANT: Only shallow copy for nested objects
const nested = { user: { name: "Alice" } };
const shallowClone = { ...nested };

// Nested object is still referenced!
shallowClone.user.name = "Bob";
console.log(nested.user.name); // "Bob" (affected!)

// For deep cloning, use JSON or structured clone
const deepClone = JSON.parse(JSON.stringify(nested));
// Now nested.user.name is unchanged
`}
          explanation="Spread creates shallow copies. For nested objects, you need deep cloning techniques."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Spread in Objects</h2>

        <CodeExample
          title="Object Spreading"
          code={`// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties (last one wins)
const base = { x: 1, y: 2, z: 3 };
const override = { y: 20, z: 30 };
const result = { ...base, ...override };
console.log(result); // { x: 1, y: 20, z: 30 }

// Add new properties while keeping existing ones
const user = { name: "Alice", age: 30 };
const updated = { ...user, email: "alice@example.com" };
console.log(updated); // { name: "Alice", age: 30, email: "alice@..." }

// Update specific properties
const modified = { ...user, age: 31 };
console.log(modified); // { name: "Alice", age: 31 }

// Order matters - later values override
const final = { a: 1, ...{ a: 2 }, a: 3 };
console.log(final.a); // 3
`}
          explanation="Object spread merges objects. Later properties override earlier ones with the same key."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Spread in Function Calls</h2>

        <CodeExample
          title="Spread in Function Arguments"
          code={`// Pass array elements as separate arguments
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums); // Equivalent to sum(1, 2, 3)
console.log(result); // 6

// Math functions
const numbers = [5, 2, 9, 3];
const max = Math.max(...numbers); // Equivalent to Math.max(5, 2, 9, 3)
console.log(max); // 9

// Array methods
const arr1 = [1, 2];
const arr2 = [3, 4];
arr1.push(...arr2); // Push multiple elements
console.log(arr1); // [1, 2, 3, 4]

// Copy arrays
const original = [1, 2, 3];
const copy = Array.from(original); // Alternative
const copy2 = [...original]; // Using spread

// Common: apply method without "apply"
const text = "hello";
const chars = [...text]; // ['h', 'e', 'l', 'l', 'o']
`}
          explanation="Spread in function calls unpacks array elements as individual arguments."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Rest Parameters vs Spread Operator</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Rest parameters are the opposite of spread - they collect multiple arguments into an array. Both use ... but in different contexts.
        </p>

        <CodeExample
          title="Rest Parameters"
          code={`// REST: Collect multiple arguments into array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum()); // 0

// Rest with other parameters
function greet(greeting, ...names) {
  console.log(\`\${greeting}, \${names.join(" and ")}!\`);
}

greet("Hello", "Alice", "Bob", "Charlie");
// "Hello, Alice and Bob and Charlie!"

// Rest must be last parameter
// function bad(a, ...rest, b) { } // SyntaxError!
function good(a, ...rest) { }

// Destructuring with rest
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

// In objects
const { x, y, ...others } = { x: 1, y: 2, z: 3, w: 4 };
console.log(x, y); // 1, 2
console.log(others); // { z: 3, w: 4 }

// SPREAD vs REST:
// Rest (...params): Collects arguments INTO an array
// Spread (...array): Expands array INTO arguments
`}
          explanation="Rest parameters collect multiple arguments. Spread expands arrays. Both use ... but have opposite effects."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Real-World Examples</h2>

        <CodeExample
          title="Practical Spread Usage"
          code={`// 1. Combine arrays from multiple sources
const oldItems = [1, 2, 3];
const newItems = [4, 5];
const allItems = [...oldItems, ...newItems];

// 2. Create variations without mutation
const config = { timeout: 5000, retries: 3, debug: false };
const prodConfig = { ...config, debug: false };
const devConfig = { ...config, debug: true, timeout: 10000 };

// 3. Add items to immutable array
const todos = [
  { id: 1, text: "Learn JS" },
  { id: 2, text: "Build project" }
];

const newTodo = { id: 3, text: "Deploy app" };
const updatedTodos = [...todos, newTodo];
// Original 'todos' unchanged

// 4. Filter and combine
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const unique = [...new Set([...arr1, ...arr2])];
console.log(unique); // [1, 2, 3, 4, 5]

// 5. Copy with modifications
const person = { name: "Alice", age: 30 };
const adult = { ...person, isAdult: true };

// 6. Merge multiple objects
const defaults = { theme: "light", language: "en" };
const userPrefs = { theme: "dark" };
const appSettings = { ...defaults, ...userPrefs };
// { theme: "dark", language: "en" }
`}
          explanation="Spread is crucial for immutable programming, which prevents unintended side effects."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Spread vs Alternatives</h2>

        <CodeExample
          title="When to Use Spread"
          code={`// Array copying alternatives
const original = [1, 2, 3];

// Method 1: Spread (modern, clean)
const copy1 = [...original];

// Method 2: slice()
const copy2 = original.slice();

// Method 3: Array.from()
const copy3 = Array.from(original);

// Method 4: concat()
const copy4 = original.concat();

// All create shallow copies - prefer SPREAD for readability

// Object merging alternatives
const obj1 = { a: 1 };
const obj2 = { b: 2 };

// Method 1: Spread (modern, clean - PREFERRED)
const merged1 = { ...obj1, ...obj2 };

// Method 2: Object.assign() (older)
const merged2 = Object.assign({}, obj1, obj2);

// Both work, but spread is the modern standard

// Spread is better for:
// ✅ Readability
// ✅ Immutability
// ✅ Easy to chaining operations
// ✅ Works consistently across arrays and objects
`}
          explanation="Spread is the modern, preferred way for copying and merging. It's cleaner than older alternatives."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Common Pitfalls</h2>

        <CodeExample
          title="Things to Watch For"
          code={`// PITFALL 1: Shallow copy doesn't deep clone
const nested = { user: { name: "Alice" } };
const copy = { ...nested };
copy.user.name = "Bob";
console.log(nested.user.name); // "Bob" (affected!)

// PITFALL 2: Order matters in object spread
const base = { x: 1, y: 2 };
const override = { x: 10 };
const result1 = { ...base, ...override };
const result2 = { ...override, ...base };
console.log(result1.x); // 10
console.log(result2.x); // 1

// PITFALL 3: Spread creates new array, but content not copied
const arr = [[1, 2], [3, 4]];
const copied = [...arr];
copied[0][0] = 99;
console.log(arr[0][0]); // 99 (affected!)

// PITFALL 4: Rest must be last parameter
// function test(a, ...rest, b) {} // SyntaxError!

// PITFALL 5: Spread is slow for very large arrays
const huge = Array(1000000).fill(0);
const copy = [...huge]; // Creates new array (memory intensive)
`}
          explanation="Shallow copying, order sensitivity, and nested structures are common spread pitfalls."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Interview Q&A</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: What's the difference between spread and rest?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Spread (...array) expands array into individual elements. Rest (...params) collects multiple arguments into an array. Spread is used in function calls or array/object literals. Rest is used in function parameters or destructuring.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: Why doesn't spread create a deep copy?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Spread creates a shallow copy - it copies the first level only. For nested objects/arrays, references are still shared. Deep copying requires recursion or libraries like lodash.deepClone().
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: Can you use spread in loops?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Spread is for immediate expansion, not looping. For loops, use array methods like map(), filter(), or forEach(). However, you can use spread to unpack arrays into rest parameters.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Summary</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>🎯 Spread (...) expands arrays/objects inline</li>
            <li>🎯 Rest (...) collects arguments into arrays</li>
            <li>🎯 Great for copying and merging without mutation</li>
            <li>🎯 Creates shallow copies only</li>
            <li>🎯 Improves code readability vs concatenation</li>
            <li>🎯 Works in arrays, objects, and function calls</li>
            <li>🎯 Preferred modern alternative to slice/concat/Object.assign</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
