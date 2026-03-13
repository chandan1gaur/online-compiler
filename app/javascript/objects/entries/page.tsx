import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object.entries() - Complete Guide to Key-Value Pairs",
  description: "Master JavaScript Object.entries() method with comprehensive guide covering key-value pair enumeration, data transformation, iteration patterns, and practical applications.",
  keywords: [
    "javascript object.entries",
    "key-value pairs",
    "object iteration",
    "javascript object methods",
    "data transformation",
    "object.entries vs for-in",
    "property enumeration",
    "javascript object utilities",
    "key-value iteration",
    "object.entries performance"
  ],
  openGraph: {
    title: "JavaScript Object.entries() - Complete Guide",
    description: "Master JavaScript Object.entries() method with comprehensive guide covering key-value pair enumeration, data transformation, iteration patterns, and practical applications.",
    url: "/javascript/objects/entries",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.entries() Guide",
    description: "Master JavaScript Object.entries() method with comprehensive guide covering key-value pair enumeration, data transformation, iteration patterns, and practical applications.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/entries" },
};

const entriesSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object.entries() - Complete Guide to Key-Value Pairs",
  "description": "Master JavaScript Object.entries() method with comprehensive guide covering key-value pair enumeration, data transformation, iteration patterns, and practical applications.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectEntriesPage() {
  return (
    <>
      <Script id="entries-schema" type="application/ld+json">
        {JSON.stringify(entriesSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object.entries(): Complete Guide to Key-Value Pairs
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object.entries() is a powerful JavaScript method for working with key-value pairs.
          This comprehensive guide covers pair enumeration, data transformation techniques,
          iteration patterns, and real-world applications.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Object.entries() Fundamentals</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Basic Syntax and Usage</h3>
          <p className="text-slate-700 mb-4">
            Object.entries() returns an array of a given object's own enumerable property [key, value] pairs.
          </p>

          <CodeExample
            title="Object.entries() Basic Usage"
            code={`// Basic syntax
const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(Object.entries(user));
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Different value types
const mixed = {
  string: 'hello',
  number: 42,
  boolean: true,
  array: [1, 2, 3],
  object: { nested: 'value' },
  func: function() { return 'test'; },
  undef: undefined,
  nul: null
};

console.log(Object.entries(mixed));
// [['string', 'hello'], ['number', 42], ['boolean', true], ...]

// Empty object
console.log(Object.entries({})); // []

// Single property
console.log(Object.entries({ a: 1 })); // [['a', 1]]

// Order preservation
const ordered = { z: 3, a: 1, m: 2 };
console.log(Object.entries(ordered));
// [['z', 3], ['a', 1], ['m', 2]] (insertion order)

// Numeric keys (converted to strings)
const numericKeys = { 1: 'one', 2: 'two', 3: 'three' };
console.log(Object.entries(numericKeys));
// [['1', 'one'], ['2', 'two'], ['3', 'three']]

// Symbol keys are excluded
const symbolKey = Symbol('secret');
const withSymbol = { a: 1, [symbolKey]: 'secret', b: 2 };
console.log(Object.entries(withSymbol)); // [['a', 1], ['b', 2]]

// Non-enumerable properties are excluded
const withNonEnum = Object.create({}, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});
console.log(Object.entries(withNonEnum)); // [['visible', 1]]

// Inherited properties are not included
function Animal(name) {
  this.name = name;
}

Animal.prototype.species = 'Animal';

const dog = new Animal('Buddy');
dog.breed = 'Golden Retriever';

console.log(Object.entries(dog)); // [['name', 'Buddy'], ['breed', 'Golden Retriever']]

// Array-like objects
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Object.entries(arrayLike));
// [['0', 'a'], ['1', 'b'], ['2', 'c'], ['length', 3]]

// Date object
const date = new Date();
console.log(Object.entries(date)); // [] (Date has no enumerable own properties)

// Function object
function testFunc() {}
testFunc.customProp = 'custom';
console.log(Object.entries(testFunc)); // [['customProp', 'custom']]

// Primitive values (converted to objects)
console.log(Object.entries('hello'));
// [['0', 'h'], ['1', 'e'], ['2', 'l'], ['3', 'l'], ['4', 'o']]
console.log(Object.entries(42)); // []
console.log(Object.entries(true)); // []`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Return Value and Array Methods</h3>
          <p className="text-slate-700 mb-4">
            Understanding what Object.entries() returns and how to work with the resulting array of pairs.
          </p>

          <CodeExample
            title="Object.entries() Return Value and Array Operations"
            code={`// Always returns an array of [key, value] pairs
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);

console.log(Array.isArray(entries)); // true
console.log(entries instanceof Array); // true
console.log(Object.prototype.toString.call(entries)); // '[object Array]'

// Each element is a [key, value] pair
console.log(entries[0]); // ['a', 1]
console.log(entries[1]); // ['b', 2]

// Array methods work on the entries
console.log(entries.length); // 3
console.log(entries.includes(['a', 1])); // true (shallow comparison)
console.log(entries.indexOf(['b', 2])); // 1

// Array iteration methods
entries.forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});
// a: 1, b: 2, c: 3

// Array transformation methods
const doubled = entries.map(([key, value]) => [key, value * 2]);
console.log(doubled); // [['a', 2], ['b', 4], ['c', 6]]

const filtered = entries.filter(([key, value]) => value > 1);
console.log(filtered); // [['b', 2], ['c', 3]]

const sum = entries.reduce((total, [key, value]) => total + value, 0);
console.log(sum); // 6

// Array searching methods
const found = entries.find(([key, value]) => value === 2);
console.log(found); // ['b', 2]

const hasEven = entries.some(([key, value]) => value % 2 === 0);
console.log(hasEven); // true

const allPositive = entries.every(([key, value]) => value > 0);
console.log(allPositive); // true

// Array sorting and modification
const sortedByValue = [...entries].sort(([, a], [, b]) => a - b);
console.log(sortedByValue); // [['a', 1], ['b', 2], ['c', 3]]

const sortedByKey = [...entries].sort(([a], [b]) => a.localeCompare(b));
console.log(sortedByKey); // [['a', 1], ['b', 2], ['c', 3]]

const reversed = [...entries].reverse();
console.log(reversed); // [['c', 3], ['b', 2], ['a', 1]]

// Spreading entries
const combined = [['x', 0], ...entries, ['z', 4]];
console.log(combined);
// [['x', 0], ['a', 1], ['b', 2], ['c', 3], ['z', 4]]

// Destructuring entries
const [first, second, ...rest] = entries;
console.log(first, second, rest); // ['a', 1], ['b', 2], [['c', 3]]

// Converting to other formats
const obj2 = { x: 10, y: 20, z: 30 };
const ents = Object.entries(obj2);

// To Map
const entryMap = new Map(ents);
console.log(entryMap.get('x')); // 10

// To Set of keys
const keySet = new Set(ents.map(([key]) => key));
console.log(keySet); // Set { 'x', 'y', 'z' }

// To Set of values
const valueSet = new Set(ents.map(([, value]) => value));
console.log(valueSet); // Set { 10, 20, 30 }

// Join as string
const joined = ents.map(([k, v]) => \`\${k}=\${v}\`).join('&');
console.log(joined); // 'x=10&y=20&z=30'

// Recreate object from entries
function recreateObject(entries) {
  return entries.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

const recreated = recreateObject(ents);
console.log(recreated); // { x: 10, y: 20, z: 30 }

// Statistics and analysis
function analyzeEntries(entries) {
  return {
    count: entries.length,
    keys: entries.map(([k]) => k),
    values: entries.map(([, v]) => v),
    keyTypes: entries.map(([k]) => typeof k),
    valueTypes: entries.map(([, v]) => typeof v),
    numericValues: entries.filter(([, v]) => typeof v === 'number').map(([, v]) => v)
  };
}

const analysis = analyzeEntries(ents);
console.log(analysis);

// Type analysis
function analyzeEntryTypes(entries) {
  const types = entries.reduce((stats, [key, value]) => {
    const keyType = typeof key;
    const valueType = typeof value;

    stats.keyTypes[keyType] = (stats.keyTypes[keyType] || 0) + 1;
    stats.valueTypes[valueType] = (stats.valueTypes[valueType] || 0) + 1;

    return stats;
  }, { keyTypes: {}, valueTypes: {} });

  return types;
}

const mixedEntries = Object.entries({
  str: 'hello',
  num: 42,
  bool: true,
  arr: [1, 2],
  obj: { a: 1 },
  func: () => {},
  undef: undefined,
  nul: null
});

console.log(analyzeEntryTypes(mixedEntries));

// Safe operations on entries
function safeEntryOperations(obj) {
  const entries = Object.entries(obj || {});

  return {
    strings: entries.filter(([, v]) => typeof v === 'string'),
    numbers: entries.filter(([, v]) => typeof v === 'number'),
    arrays: entries.filter(([, v]) => Array.isArray(v)),
    objects: entries.filter(([, v]) => v && typeof v === 'object' && !Array.isArray(v)),
    functions: entries.filter(([, v]) => typeof v === 'function')
  };
}

const testObj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: { city: 'NYC' },
  greet: () => 'Hello'
};

console.log(safeEntryOperations(testObj));`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Comparison with Other Iteration Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.entries() vs for...in Loop</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.entries() with traditional for...in loops for property iteration.
          </p>

          <CodeExample
            title="Object.entries() vs for...in Loop"
            code={`// Traditional for...in approach
const obj = { a: 1, b: 2, c: 3 };

// Manual iteration with for...in
const manualResult = [];
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    manualResult.push([key, obj[key]]);
  }
}
console.log(manualResult); // [['a', 1], ['b', 2], ['c', 3]]

// Object.entries() approach
const entriesResult = Object.entries(obj);
console.log(entriesResult); // [['a', 1], ['b', 2], ['c', 3]]

// They produce identical results
console.log(JSON.stringify(manualResult) === JSON.stringify(entriesResult)); // true

// Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('for...in loop');
const forInResult = [];
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) {
    forInResult.push([key, largeObj[key]]);
  }
}
console.timeEnd('for...in loop');

console.time('Object.entries()');
const entriesResult2 = Object.entries(largeObj);
console.timeEnd('Object.entries()');

// Object.entries() is generally faster and more convenient

// When for...in might be necessary:
// 1. When you need to iterate over inherited properties
function Animal(name) {
  this.name = name;
}

Animal.prototype.species = 'Animal';

const dog = new Animal('Buddy');
dog.breed = 'Golden Retriever';

// Only own properties
console.log(Object.entries(dog)); // [['name', 'Buddy'], ['breed', 'Golden Retriever']]

// All properties including inherited
const allProps = [];
for (const key in dog) {
  allProps.push([key, dog[key]]);
}
console.log(allProps); // [['name', 'Buddy'], ['breed', 'Golden Retriever'], ['species', 'Animal']]

// 2. When you need to break out of iteration early
console.log('Using for...in with early exit:');
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) {
    console.log('Found first key:', key);
    break; // Exit after first property
  }
}

// With Object.entries(), you'd need to use a different approach
console.log('Using Object.entries() with early exit:');
const firstEntry = Object.entries(largeObj)[0];
console.log('First entry:', firstEntry);

// Or use for...of with entries
console.log('Using for...of with Object.entries():');
let count = 0;
for (const [key, value] of Object.entries(largeObj)) {
  console.log(\`\${key}: \${value}\`);
  count++;
  if (count >= 3) break; // Exit after 3 iterations
}

// 3. When working with sparse objects or specific conditions
const sparseObj = {};
sparseObj[1000] = 'far away';
sparseObj[1] = 'close';

// Both approaches handle this fine
console.log(Object.entries(sparseObj)); // [['1', 'close'], ['1000', 'far away']]

// Manual with for...in
const sparseManual = [];
for (const key in sparseObj) {
  if (sparseObj.hasOwnProperty(key)) {
    sparseManual.push([key, sparseObj[key]]);
  }
}
console.log(sparseManual); // [['1', 'close'], ['1000', 'far away']]

// 4. Memory considerations
// Object.entries() creates an array of all entries upfront
// for...in iterates lazily, using less memory for large objects

// For very large objects, for...in might be better
console.log('Memory usage comparison:');
console.log('Object.entries() creates array of', Object.entries(largeObj).length, 'entries');
console.log('for...in iterates without creating intermediate array');

// 5. Converting between approaches
// Old way to new way
function oldWay(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

function newWay(obj) {
  return Object.entries(obj);
}

// They produce the same result
console.log(JSON.stringify(oldWay(obj)) === JSON.stringify(newWay(obj))); // true

// With filtering
function oldFiltered(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] > 1) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

function newFiltered(obj) {
  return Object.entries(obj).filter(([, value]) => value > 1);
}

console.log(oldFiltered(obj)); // [['b', 2], ['c', 3]]
console.log(newFiltered(obj)); // [['b', 2], ['c', 3]]

// With transformation
function oldTransformed(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key.toUpperCase(), obj[key] * 2]);
    }
  }
  return result;
}

function newTransformed(obj) {
  return Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value * 2]);
}

console.log(oldTransformed(obj)); // [['A', 2], ['B', 4], ['C', 6]]
console.log(newTransformed(obj)); // [['A', 2], ['B', 4], ['C', 6]]

// Complex manual iteration with conditions
function iterateAdvanced(obj) {
  const result = [];

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];

    // Skip null/undefined
    if (value == null) continue;

    // Transform based on type
    let transformedValue;
    if (typeof value === 'string') {
      transformedValue = value.toUpperCase();
    } else if (typeof value === 'number') {
      transformedValue = value * 100;
    } else {
      transformedValue = value;
    }

    result.push([key, transformedValue]);
  }

  return result;
}

const complexObj = {
  name: 'john',
  age: 25,
  scores: [85, 92],
  active: true,
  notes: null
};

console.log(iterateAdvanced(complexObj));
// [['name', 'JOHN'], ['age', 2500], ['scores', [85, 92]], ['active', true]]

// Equivalent with Object.entries()
function iterateModern(obj) {
  return Object.entries(obj)
    .filter(([, value]) => value != null)
    .map(([key, value]) => {
      if (typeof value === 'string') return [key, value.toUpperCase()];
      if (typeof value === 'number') return [key, value * 100];
      return [key, value];
    });
}

console.log(iterateModern(complexObj)); // Same result

// Performance considerations
const perfObj = {};
for (let i = 0; i < 10000; i++) {
  perfObj[\`key\${i}\`] = i;
}

// Manual with early exit
console.time('Manual with condition');
let manualCount = 0;
for (const key in perfObj) {
  if (perfObj.hasOwnProperty(key) && perfObj[key] > 5000) {
    manualCount++;
  }
}
console.timeEnd('Manual with condition');

// Object.entries() with condition
console.time('Object.entries with condition');
const entriesCount = Object.entries(perfObj).filter(([, v]) => v > 5000).length;
console.timeEnd('Object.entries with condition');

// For complex conditions, manual might be faster
console.log(manualCount, entriesCount);`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.entries() vs Object.keys() + Object.values()</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.entries() with separate calls to Object.keys() and Object.values().
          </p>

          <CodeExample
            title="Object.entries() vs Separate keys() and values() Calls"
            code={`// The separate approach
const obj = { a: 1, b: 2, c: 3, d: 4 };

const keys = Object.keys(obj);      // ['a', 'b', 'c', 'd']
const values = Object.values(obj);  // [1, 2, 3, 4]

// Manual combination
const manualEntries = keys.map((key, index) => [key, values[index]]);
console.log(manualEntries); // [['a', 1], ['b', 2], ['c', 3], ['d', 4]]

// Object.entries() approach
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2], ['c', 3], ['d', 4]]

// They produce identical results
console.log(JSON.stringify(manualEntries) === JSON.stringify(entries)); // true

// Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('Object.keys() + Object.values() + map()');
const manualResult = Object.keys(largeObj).map((key, index) => [
  key,
  Object.values(largeObj)[index]
]);
console.timeEnd('Object.keys() + Object.values() + map()');

console.time('Object.entries()');
const entriesResult = Object.entries(largeObj);
console.timeEnd('Object.entries()');

// Object.entries() is optimized and usually faster

// When the separate approach might be necessary:
// 1. When you need keys and values separately for different operations
const data = { x: 10, y: 20, z: 30 };

const keysOnly = Object.keys(data);
const valuesOnly = Object.values(data);

// Use keys for one operation
const upperKeys = keysOnly.map(k => k.toUpperCase());
console.log(upperKeys); // ['X', 'Y', 'Z']

// Use values for another operation
const doubledValues = valuesOnly.map(v => v * 2);
console.log(doubledValues); // [20, 40, 60]

// 2. When you need to process keys and values independently
function processKeysAndValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return {
    keyStats: {
      count: keys.length,
      longest: keys.reduce((max, key) => key.length > max.length ? key : max, ''),
      shortest: keys.reduce((min, key) => key.length < min.length ? key : min, keys[0] || '')
    },
    valueStats: {
      sum: values.reduce((a, b) => a + b, 0),
      average: values.reduce((a, b) => a + b, 0) / values.length,
      max: Math.max(...values),
      min: Math.min(...values)
    }
  };
}

console.log(processKeysAndValues(data));

// 3. When memory is critical and you only need one part
// For large objects, getting only what you need saves memory
const hugeObj = {};
for (let i = 0; i < 100000; i++) {
  hugeObj[\`prop\${i}\`] = Math.random();
}

// If you only need keys
console.time('Only keys');
const onlyKeys = Object.keys(hugeObj);
console.timeEnd('Only keys');

// If you only need values
console.time('Only values');
const onlyValues = Object.values(hugeObj);
console.timeEnd('Only values');

// If you need both as entries
console.time('Both as entries');
const bothEntries = Object.entries(hugeObj);
console.timeEnd('Both as entries');

// 4. When you need to filter by keys before combining
const mixedObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Filter keys first, then get corresponding values
const filteredKeys = Object.keys(mixedObj).filter(key => key > 'b');
const filteredValues = filteredKeys.map(key => mixedObj[key]);

console.log('Filtered keys:', filteredKeys);   // ['c', 'd', 'e']
console.log('Filtered values:', filteredValues); // [3, 4, 5]

// With Object.entries(), you'd filter the pairs
const filteredEntries = Object.entries(mixedObj).filter(([key]) => key > 'b');
console.log('Filtered entries:', filteredEntries); // [['c', 3], ['d', 4], ['e', 5]]

// 5. When you need custom pairing logic
// Manual pairing allows for custom logic
function customPairing(obj, pairFn) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return keys.map((key, index) => pairFn(key, values[index], index));
}

const customPairs = customPairing(obj, (key, value, index) => ({
  key,
  value,
  index,
  keyLength: key.length,
  isEven: value % 2 === 0
}));

console.log(customPairs);

// 6. Memory and performance considerations
// Object.keys() + Object.values() + map() creates three arrays
// Object.entries() creates one array
// For large objects, Object.entries() uses less memory

// Benchmark
function benchmarkApproaches(obj, iterations = 1000) {
  console.time('Separate keys/values');
  for (let i = 0; i < iterations; i++) {
    const k = Object.keys(obj);
    const v = Object.values(obj);
    const e = k.map((key, idx) => [key, v[idx]]);
  }
  console.timeEnd('Separate keys/values');

  console.time('Object.entries()');
  for (let i = 0; i < iterations; i++) {
    const e = Object.entries(obj);
  }
  console.timeEnd('Object.entries()');
}

const testObj = {};
for (let i = 0; i < 100; i++) {
  testObj[\`prop\${i}\`] = i;
}

benchmarkApproaches(testObj);

// Use cases for each approach:

// Use Object.entries() when:
// - You need both keys and values together
// - Performance is critical
// - Memory usage matters
// - You want clean, readable code
// - You're using array methods on pairs

// Use separate keys/values when:
// - You need keys and values for completely different operations
// - Memory is extremely critical and you only need one part
// - You need custom pairing logic
// - You want to filter keys before getting values
// - You're working with legacy code patterns

// Modern alternatives
// Object.entries() is the most modern and efficient approach
// Use Map for ordered key-value storage
const dataMap = new Map(Object.entries(obj));
console.log(dataMap.get('a')); // 1

// Converting between formats
function entriesToKeys(obj) {
  return Object.entries(obj).map(([k]) => k);
}

function entriesToValues(obj) {
  return Object.entries(obj).map(([, v]) => v);
}

// Best practice: Use the right tool for the job
const sampleData = { x: 10, y: 20, z: 30 };

// Simple pair operations
const simplePairs = Object.entries(sampleData);

// Complex operations requiring both keys and values
const complexResult = Object.entries(sampleData)
  .filter(([key, value]) => key !== 'y' && value > 15)
  .map(([key, value]) => (\`\${key.toUpperCase()}: \${value * 3}\`));

console.log(simplePairs); // [['x', 10], ['y', 20], ['z', 30]]
console.log(complexResult); // ['Z: 90']

// When you need independent processing
const independent = {
  keys: Object.keys(sampleData).map(k => k.toUpperCase()),
  values: Object.values(sampleData).map(v => v / 10),
  pairs: Object.entries(sampleData).map(([k, v]) => (\`\${k}=\${v}\`))
};

console.log(independent);`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Practical Applications</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Data Transformation and Processing</h3>
          <p className="text-slate-700 mb-4">
            Using Object.entries() for data transformation, validation, and processing tasks.
          </p>

          <CodeExample
            title="Data Transformation with Object.entries()"
            code={`// 1. Object transformation and mapping
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john@example.com'
};

// Transform property names and values
const transformed = Object.fromEntries(
  Object.entries(user).map(([key, value]) => {
    // Convert camelCase to snake_case
    const newKey = key.replace(/[A-Z]/g, letter => \`_\${letter.toLowerCase()}\`);

    // Transform values
    let newValue = value;
    if (key === 'age') newValue = value + ' years old';
    if (key === 'email') newValue = value.toLowerCase();

    return [newKey, newValue];
  })
);

console.log(transformed);
// { first_name: 'John', last_name: 'Doe', age: '30 years old', email: 'john@example.com' }

// 2. Filtering and validation
function validateAndFilter(obj, validators) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      const validator = validators[key];
      return validator ? validator(value) : true;
    })
  );
}

const rawData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  salary: 50000,
  department: 'Engineering'
};

const validators = {
  age: (v) => typeof v === 'number' && v >= 18 && v <= 100,
  email: (v) => typeof v === 'string' && v.includes('@'),
  salary: (v) => typeof v === 'number' && v > 0
};

console.log(validateAndFilter(rawData, validators));
// { name: 'John', age: 25, email: 'john@example.com', salary: 50000, department: 'Engineering' }

// 3. Data aggregation and grouping
const salesData = {
  q1: { revenue: 10000, customers: 50 },
  q2: { revenue: 12000, customers: 60 },
  q3: { revenue: 15000, customers: 70 },
  q4: { revenue: 18000, customers: 80 }
};

const quarterlyStats = Object.entries(salesData).map(([quarter, data]) => ({
  quarter: quarter.toUpperCase(),
  revenue: data.revenue,
  customers: data.customers,
  avgRevenuePerCustomer: data.revenue / data.customers
}));

console.log(quarterlyStats);

// Group by criteria
function groupBy(obj, criteriaFn) {
  return Object.entries(obj).reduce((groups, [key, value]) => {
    const groupKey = criteriaFn(key, value);
    if (!groups[groupKey]) groups[groupKey] = {};
    groups[groupKey][key] = value;
    return groups;
  }, {});
}

const products = {
  laptop: { price: 1200, category: 'electronics' },
  book: { price: 20, category: 'books' },
  phone: { price: 800, category: 'electronics' },
  shirt: { price: 50, category: 'clothing' }
};

const groupedByCategory = groupBy(products, (key, product) => product.category);
console.log(groupedByCategory);

// 4. Data comparison and diffing
function objectDiff(obj1, obj2) {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  const diff = {
    added: {},
    removed: {},
    changed: {},
    unchanged: {}
  };

  // Create maps for efficient lookup
  const map1 = new Map(entries1);
  const map2 = new Map(entries2);

  // Find added and changed
  for (const [key, value] of entries2) {
    if (!map1.has(key)) {
      diff.added[key] = value;
    } else if (map1.get(key) !== value) {
      diff.changed[key] = { from: map1.get(key), to: value };
    } else {
      diff.unchanged[key] = value;
    }
  }

  // Find removed
  for (const [key, value] of entries1) {
    if (!map2.has(key)) {
      diff.removed[key] = value;
    }
  }

  return diff;
}

const oldUser = { name: 'John', age: 25, city: 'NYC' };
const newUser = { name: 'John', age: 26, city: 'LA', email: 'john@example.com' };

console.log(objectDiff(oldUser, newUser));

// 5. Data serialization and export
function exportToCSV(obj) {
  const entries = Object.entries(obj);
  const headers = entries.map(([key]) => key);
  const values = entries.map(([, value]) => value);

  return [headers.join(','), values.join(',')].join('\\n');
}

const exportData = { name: 'John', age: 30, city: 'New York' };
console.log(exportToCSV(exportData));
// 'name,age,city'
// 'John,30,New York'

// 6. Configuration processing
const config = {
  database: {
    host: 'localhost',
    port: 5432,
    name: 'mydb'
  },
  cache: {
    enabled: true,
    ttl: 3600
  },
  features: {
    logging: true,
    metrics: false
  }
};

// Flatten nested configuration
function flattenConfig(obj, prefix = '') {
  return Object.entries(obj).reduce((flat, [key, value]) => {
    const newKey = prefix ? \`\${prefix}.\${key}\` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(flat, flattenConfig(value, newKey));
    } else {
      flat[newKey] = value;
    }

    return flat;
  }, {});
}

console.log(flattenConfig(config));
// { 'database.host': 'localhost', 'database.port': 5432, ... }

// 7. Data validation with detailed errors
function validateWithDetails(obj, rules) {
  const errors = [];
  const validData = {};

  Object.entries(obj).forEach(([key, value]) => {
    const rule = rules[key];

    if (rule) {
      const result = rule(value);
      if (result.valid) {
        validData[key] = result.value || value;
      } else {
        errors.push({
          field: key,
          value,
          error: result.error
        });
      }
    } else {
      validData[key] = value;
    }
  });

  return { validData, errors, isValid: errors.length === 0 };
}

const validationRules = {
  email: (value) => ({
    valid: typeof value === 'string' && /^[^@]+@[^@]+\\.[^@]+$/.test(value),
    error: 'Invalid email format',
    value: value.toLowerCase()
  }),
  age: (value) => ({
    valid: typeof value === 'number' && value >= 0 && value <= 150,
    error: 'Age must be between 0 and 150'
  })
};

const testData = {
  name: 'John',
  email: 'john@example',
  age: 25
};

console.log(validateWithDetails(testData, validationRules));

// 8. Data merging and combining
function mergeObjects(...objects) {
  const result = {};

  objects.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (result[key] === undefined) {
        result[key] = value;
      } else if (Array.isArray(result[key]) && Array.isArray(value)) {
        result[key] = [...result[key], ...value];
      } else if (typeof result[key] === 'object' && typeof value === 'object') {
        result[key] = mergeObjects(result[key], value);
      } else {
        // Last object wins for primitive values
        result[key] = value;
      }
    });
  });

  return result;
}

const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };
const obj3 = { b: { z: 30 }, d: 4 };

console.log(mergeObjects(obj1, obj2, obj3));

// 9. Data sampling and statistics
function analyzeObject(obj) {
  const entries = Object.entries(obj);

  const analysis = {
    totalProperties: entries.length,
    propertyTypes: {},
    valueRanges: {},
    patterns: {}
  };

  entries.forEach(([key, value]) => {
    const type = typeof value;
    analysis.propertyTypes[type] = (analysis.propertyTypes[type] || 0) + 1;

    // Analyze patterns
    if (typeof value === 'string') {
      if (!analysis.patterns.strings) analysis.patterns.strings = [];
      analysis.patterns.strings.push({ key, length: value.length });
    }

    if (typeof value === 'number') {
      if (!analysis.valueRanges.numbers) {
        analysis.valueRanges.numbers = { min: value, max: value, sum: 0, count: 0 };
      }
      const range = analysis.valueRanges.numbers;
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
      range.sum += value;
      range.count++;
    }
  });

  if (analysis.valueRanges.numbers) {
    analysis.valueRanges.numbers.average = analysis.valueRanges.numbers.sum / analysis.valueRanges.numbers.count;
  }

  return analysis;
}

const sampleObj = {
  name: 'John',
  age: 30,
  score: 85,
  active: true,
  tags: ['developer', 'javascript'],
  metadata: { created: '2023-01-01' }
};

console.log(analyzeObject(sampleObj));

// 10. Data transformation pipelines
function createTransformationPipeline(...transforms) {
  return (obj) => {
    return transforms.reduce((result, transform) => {
      return Object.fromEntries(
        Object.entries(result).map(([key, value]) => {
          const transformed = transform(key, value);
          return transformed || [key, value];
        }).filter(Boolean)
      );
    }, obj);
  };
}

const transformationPipeline = createTransformationPipeline(
  // Transform 1: Convert strings to uppercase
  (key, value) => typeof value === 'string' ? [key, value.toUpperCase()] : null,

  // Transform 2: Double numbers
  (key, value) => typeof value === 'number' ? [key, value * 2] : null,

  // Transform 3: Add prefix to keys
  (key, value) => [\`transformed_\${key}\`, value]
);

const inputData = { name: 'john', age: 25, active: true };
console.log(transformationPipeline(inputData));`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Advanced Patterns and Techniques</h3>
          <p className="text-slate-700 mb-4">
            Advanced usage patterns combining Object.entries() with other JavaScript features.
          </p>

          <CodeExample
            title="Advanced Object.entries() Patterns"
            code={`// 1. Functional programming with Object.entries()
const data = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Compose operations using entries
const result = Object.entries(data)
  .filter(([key, value]) => value > 2)        // [['c', 3], ['d', 4], ['e', 5]]
  .map(([key, value]) => [key.toUpperCase(), value * 2])  // [['C', 6], ['D', 8], ['E', 10]]
  .reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {}); // { C: 6, D: 8, E: 10 }

console.log(result);

// 2. Lazy evaluation with generators
function* lazyEntries(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield [key, obj[key]];
    }
  }
}

const lazyResult = {};
for (const [key, value] of lazyEntries(data)) {
  lazyResult[key] = value;
  if (Object.keys(lazyResult).length >= 3) break; // Stop early
}
console.log(lazyResult); // { a: 1, b: 2, c: 3 }

// 3. Memoization with Object.entries()
const memoizedEntries = (() => {
  const cache = new Map();

  return (obj) => {
    const key = JSON.stringify(obj);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const entries = Object.entries(obj);
    cache.set(key, entries);
    return entries;
  };
})();

const testObj = { x: 1, y: 2, z: 3 };
console.log(memoizedEntries(testObj)); // [['x', 1], ['y', 2], ['z', 3]] (computed)
console.log(memoizedEntries(testObj)); // [['x', 1], ['y', 2], ['z', 3]] (cached)

// 4. Object.entries() with async operations
async function processEntriesAsync(obj) {
  const entries = Object.entries(obj);

  // Process all entries concurrently
  const promises = entries.map(async ([key, value]) => {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    return [key, value * 2];
  });

  const processedEntries = await Promise.all(promises);
  return Object.fromEntries(processedEntries);
}

const asyncResult = await processEntriesAsync({ a: 1, b: 2, c: 3 });
console.log(asyncResult); // { a: 2, b: 4, c: 6 }

// 5. Streaming data processing
function createEntryStream(obj) {
  const entries = Object.entries(obj);
  let index = 0;

  return {
    next() {
      if (index < entries.length) {
        return { value: entries[index++], done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

const stream = createEntryStream({ a: 1, b: 2, c: 3 });
for (const [key, value] of stream) {
  console.log('Streamed:', key, value);
}

// 6. Object.entries() with proxies
const handler = {
  get(target, prop) {
    if (prop === 'entries') {
      return () => {
        console.log('Getting entries...');
        return Object.entries(target);
      };
    }
    return target[prop];
  }
};

const proxy = new Proxy({ a: 1, b: 2, c: 3 }, handler);
console.log(proxy.entries()); // 'Getting entries...' then [['a', 1], ['b', 2], ['c', 3]]

// 7. Type-safe entry extraction
function extractEntriesOfType(obj, type) {
  return Object.entries(obj).filter(([, value]) => typeof value === type);
}

const mixedObj = {
  str: 'hello',
  num: 42,
  bool: true,
  arr: [1, 2, 3],
  obj: { a: 1 },
  func: () => {},
  undef: undefined,
  nul: null
};

console.log(extractEntriesOfType(mixedObj, 'string')); // [['str', 'hello']]
console.log(extractEntriesOfType(mixedObj, 'number')); // [['num', 42]]
console.log(extractEntriesOfType(mixedObj, 'object')); // [['arr', [1, 2, 3]], ['obj', { a: 1 }]]

// 8. Entry-based object partitioning
function partitionByEntry(obj, predicate) {
  const entries = Object.entries(obj);
  const matching = {};
  const nonMatching = {};

  entries.forEach(([key, value]) => {
    if (predicate(key, value)) {
      matching[key] = value;
    } else {
      nonMatching[key] = value;
    }
  });

  return { matching, nonMatching };
}

const partitioned = partitionByEntry(
  { a: 1, b: 2, c: 3, d: 4 },
  (key, value) => value > 2
);

console.log(partitioned);
// { matching: { c: 3, d: 4 }, nonMatching: { a: 1, b: 2 } }

// 9. Object.entries() with custom iterators
class EntryIterator {
  constructor(obj) {
    this.entries = Object.entries(obj);
    this.index = 0;
  }

  next() {
    if (this.index < this.entries.length) {
      return {
        value: this.entries[this.index++],
        done: false
      };
    }
    return { done: true };
  }

  [Symbol.iterator]() {
    return this;
  }

  // Additional methods
  filter(predicate) {
    this.entries = this.entries.filter(([key, value]) => predicate(key, value));
    this.index = 0;
    return this;
  }

  map(transform) {
    this.entries = this.entries.map(([key, value]) => transform(key, value));
    this.index = 0;
    return this;
  }
}

const iterator = new EntryIterator({ a: 1, b: 2, c: 3, d: 4 });
const filtered = iterator.filter((key, value) => value > 2).map((key, value) => [key.toUpperCase(), value * 10]);

for (const [key, value] of filtered) {
  console.log(key, value); // 'C' 30, 'D' 40
}

// 10. Reactive entry observation
class ObservableEntries {
  constructor(obj) {
    this.obj = obj;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  getEntries() {
    const entries = Object.entries(this.obj);
    this.listeners.forEach(listener => listener(entries));
    return entries;
  }

  update(newObj) {
    this.obj = { ...this.obj, ...newObj };
    this.getEntries(); // Trigger listeners
  }
}

const observable = new ObservableEntries({ a: 1, b: 2 });

const unsubscribe = observable.subscribe(entries => {
  console.log('Entries changed:', entries);
});

observable.getEntries(); // Triggers listener: [['a', 1], ['b', 2]]
observable.update({ c: 3 }); // Triggers listener: [['a', 1], ['b', 2], ['c', 3]]

unsubscribe(); // Remove listener
observable.update({ d: 4 }); // No listener triggered`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Performance and Best Practices</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance Optimization</h3>
          <p className="text-slate-700 mb-4">
            Understanding performance characteristics and optimization techniques for Object.entries().
          </p>

          <CodeExample
            title="Object.entries() Performance Optimization"
            code={`// 1. Cache Object.entries() results
function processObject(obj) {
  const entries = Object.entries(obj); // Cache once

  // Use entries multiple times
  const keys = entries.map(([k]) => k);
  const values = entries.map(([, v]) => v);
  const filtered = entries.filter(([, v]) => v > 1);

  return { keys, values, filtered };
}

// Bad: Multiple calls
function badProcessObject(obj) {
  const keys = Object.entries(obj).map(([k]) => k);
  const values = Object.entries(obj).map(([, v]) => v);
  const filtered = Object.entries(obj).filter(([, v]) => v > 1);

  return { keys, values, filtered };
}

// 2. Use appropriate method for data access patterns
const obj = { a: 1, b: 2, c: 3 };

// For key-value operations: Object.entries()
const entries = Object.entries(obj);
console.log(entries.map(([k, v]) => \`\${k}: \${v}\`)); // ['a: 1', 'b: 2', 'c: 3']

// For value-only operations: Object.values()
const values = Object.values(obj);
console.log(values.filter(v => v > 1)); // [2, 3]

// For key-only operations: Object.keys()
const keys = Object.keys(obj);
console.log(keys.filter(k => k > 'a')); // ['b', 'c']

// 3. Memory considerations for large objects
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

// Object.entries() creates an array of all entries upfront
// Use carefully for large objects
console.time('Object.entries large');
const largeEntries = Object.entries(largeObj);
console.timeEnd('Object.entries large');

// For large objects, consider processing in chunks
function processLargeObjectEntries(obj, chunkSize = 1000) {
  const allKeys = Object.keys(obj);
  const results = [];

  for (let i = 0; i < allKeys.length; i += chunkSize) {
    const chunkKeys = allKeys.slice(i, i + chunkSize);
    const chunkEntries = chunkKeys.map(key => [key, obj[key]]);

    // Process chunk
    results.push(...chunkEntries.filter(([, v]) => v > 0.5));
  }

  return results;
}

console.time('Chunked processing');
const processed = processLargeObjectEntries(largeObj);
console.timeEnd('Chunked processing');

// 4. Avoid Object.entries() in performance-critical loops
const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  value: Math.random()
}));

// Bad: Object.entries() in loop
console.time('entries in loop');
for (const item of data) {
  const entries = Object.entries(item); // Called 10000 times
  if (entries[1][1] > 0.5) { // entries[1][1] is the value of second property
    // Do something
  }
}
console.timeEnd('entries in loop');

// Good: Direct property access
console.time('direct access');
for (const item of data) {
  if (item.value > 0.5) { // Direct access
    // Do something
  }
}
console.timeEnd('direct access');

// 5. Benchmark different approaches
function benchmarkEntries(obj, iterations = 1000) {
  console.time('Object.entries()');
  for (let i = 0; i < iterations; i++) {
    const entries = Object.entries(obj);
  }
  console.timeEnd('Object.entries()');

  console.time('Manual loop');
  for (let i = 0; i < iterations; i++) {
    const entries = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        entries.push([key, obj[key]]);
      }
    }
  }
  console.timeEnd('Manual loop');

  console.time('for...in with destructuring');
  for (let i = 0; i < iterations; i++) {
    const entries = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        entries.push([key, obj[key]]);
      }
    }
  }
  console.timeEnd('for...in with destructuring');
}

const testObj = {};
for (let i = 0; i < 100; i++) {
  testObj[\`prop\${i}\`] = i;
}

benchmarkEntries(testObj);

// 6. Optimize for specific use cases
// When you only need some entries
function getSomeEntries(obj, count) {
  const entries = Object.entries(obj);
  return entries.slice(0, count);
}

// When you need entries in random order
function getRandomEntries(obj, count) {
  const entries = Object.entries(obj);
  const shuffled = [...entries].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// When you need entries sorted by value
function getEntriesSortedByValue(obj, ascending = true) {
  return Object.entries(obj).sort(([, a], [, b]) =>
    ascending ? a - b : b - a
  );
}

// 7. Lazy evaluation for large datasets
function* lazyEntryFilter(obj, predicate) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (predicate(key, value)) {
        yield [key, value];
      }
    }
  }
}

const lazyFiltered = [];
for (const [key, value] of lazyEntryFilter(largeObj, (k, v) => v > 0.8)) {
  lazyFiltered.push([key, value]);
  if (lazyFiltered.length >= 10) break; // Stop when we have enough
}

console.log(\`Found \${lazyFiltered.length} entries > 0.8\`);

// 8. Batch processing
function batchProcessEntries(obj, batchSize = 100) {
  const entries = Object.entries(obj);
  const results = [];

  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    // Process batch (e.g., send to API, save to database)
    results.push(\`Processed batch \${Math.floor(i / batchSize) + 1}\`);
  }

  return results;
}

// 9. Performance monitoring
function withPerformanceTracking(fn, label) {
  return (...args) => {
    console.time(label);
    try {
      const result = fn(...args);
      console.timeEnd(label);
      return result;
    } catch (error) {
      console.timeEnd(label);
      throw error;
    }
  };
}

const trackedEntries = withPerformanceTracking(
  (obj) => Object.entries(obj).filter(([k, v]) => v > 0.5),
  'entry filtering'
);

console.log(trackedEntries(largeObj));`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Best Practices and Common Patterns</h3>
          <p className="text-slate-700 mb-4">
            Essential best practices for using Object.entries() effectively.
          </p>

          <CodeExample
            title="Object.entries() Best Practices"
            code={`// 1. Always handle null/undefined objects
function safeEntries(obj) {
  return obj == null ? [] : Object.entries(obj);
}

console.log(safeEntries(null)); // []
console.log(safeEntries({ a: 1 })); // [['a', 1]]

// 2. Use destructuring for cleaner code
const obj = { a: 1, b: 2, c: 3 };

// Good: Destructuring in loops
for (const [key, value] of Object.entries(obj)) {
  console.log(\`\${key}: \${value}\`);
}

// Good: Destructuring in array methods
const doubled = Object.entries(obj).map(([key, value]) => [key, value * 2]);
const filtered = Object.entries(obj).filter(([key, value]) => value > 1);

// 3. Prefer Object.entries() over manual iteration
// Modern approach
const entries = Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

// Avoid old approach
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

// 4. Use for object transformation
const transformed = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value * 2])
);
console.log(transformed); // { A: 2, B: 4, C: 6 }

// 5. Combine with other modern JavaScript features
// With optional chaining
const nested = { user: { profile: { scores: [85, 92] } } };
const scoreEntries = Object.entries(nested?.user?.profile?.scores || {});
console.log(scoreEntries); // [['0', 85], ['1', 92]]

// With nullish coalescing
function getEntries(obj) {
  return Object.entries(obj ?? {});
}

// With spread operator
const combined = [['x', 0], ...Object.entries(obj), ['z', 4]];
console.log(combined);
// [['x', 0], ['a', 1], ['b', 2], ['c', 3], ['z', 4]]

// 6. Error handling
function safeEntryOperation(obj, operation) {
  try {
    const entries = Object.entries(obj || {});
    return operation(entries);
  } catch (error) {
    console.error('Entry operation failed:', error.message);
    return null;
  }
}

safeEntryOperation({ a: 1, b: 2 }, entries => entries.map(([k, v]) => [k, v * 2])); // [['a', 2], ['b', 4]]

// 7. Be aware of order preservation
const orderedObj = { c: 3, b: 2, a: 1 };
console.log(Object.entries(orderedObj));
// [['c', 3], ['b', 2], ['a', 1]] (insertion order)

// Numeric keys are sorted
const numericObj = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.entries(numericObj));
// [['1', 'one'], ['2', 'two'], ['3', 'three']]

// 8. Handle non-enumerable properties
const objWithNonEnum = Object.create({}, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});

console.log(Object.entries(objWithNonEnum)); // [['visible', 1]]

// To get all properties including non-enumerable
console.log(Object.getOwnPropertyNames(objWithNonEnum).map(key =>
  [key, objWithNonEnum[key]]
)); // [['visible', 1], ['hidden', 2]]

// 9. Use for data validation
function validateEntries(obj, validators) {
  return Object.entries(obj).every(([key, value]) => {
    const validator = validators[key];
    return validator ? validator(value) : true;
  });
}

const data = { name: 'John', age: 30 };
const validators = {
  age: (v) => typeof v === 'number' && v > 0,
  name: (v) => typeof v === 'string' && v.length > 0
};

console.log(validateEntries(data, validators)); // true

// 10. Document expected object structure
/**
 * Transforms object entries based on mapping functions
 * @param {Object} obj - Input object
 * @param {Function} keyMapper - Function to transform keys
 * @param {Function} valueMapper - Function to transform values
 * @returns {Object} Transformed object
 */
function transformEntries(obj, keyMapper, valueMapper) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      keyMapper(key),
      valueMapper(value)
    ])
  );
}

// 11. Testing utilities
function createTestObject(size = 10) {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[\`key\${i}\`] = Math.random();
  }
  return obj;
}

function assertEntries(obj, expectedEntries) {
  const actualEntries = Object.entries(obj).sort();
  const expected = expectedEntries.sort();

  if (JSON.stringify(actualEntries) !== JSON.stringify(expected)) {
    throw new Error(\`Expected entries \${expected}, got \${actualEntries}\`);
  }
}

// Usage
const testObj = createTestObject(3);
console.log('Test object created with', Object.entries(testObj).length, 'entries');

// 12. Integration patterns
// With array methods
const data2 = { users: [{ id: 1 }], posts: [{ id: 1 }, { id: 2 }] };

const allItems = Object.entries(data2).flatMap(([, items]) => items);
console.log(allItems.length); // 3

// With promises
async function processAllEntries(obj) {
  const entries = Object.entries(obj);
  const promises = entries.map(async ([key, value]) => {
    // Some async operation
    return [key, value];
  });

  return Object.fromEntries(await Promise.all(promises));
}

// With observables (conceptual)
class EntryObservable {
  constructor(obj) {
    this.obj = obj;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  getEntries() {
    const entries = Object.entries(this.obj);
    this.listeners.forEach(callback => callback(entries));
    return entries;
  }
}

// 13. Migration from legacy code
// Old way
function oldGetEntries(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

// New way
function newGetEntries(obj) {
  return Object.entries(obj);
}

// They produce the same result
const test = { a: 1, b: 2, c: 3 };
console.log(JSON.stringify(oldGetEntries(test)) === JSON.stringify(newGetEntries(test))); // true

// With filtering
function oldFiltered(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] > 1) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

function newFiltered(obj) {
  return Object.entries(obj).filter(([, value]) => value > 1);
}

console.log(oldFiltered(test)); // [['b', 2], ['c', 3]]
console.log(newFiltered(test)); // [['b', 2], ['c', 3]]

// With transformation
function oldTransformed(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key.toUpperCase(), obj[key] * 2]);
    }
  }
  return result;
}

function newTransformed(obj) {
  return Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value * 2]);
}

console.log(oldTransformed(test)); // [['A', 2], ['B', 4], ['C', 6]]
console.log(newTransformed(test)); // [['A', 2], ['B', 4], ['C', 6]]

// Complex manual iteration with conditions
function iterateAdvanced(obj) {
  const result = [];

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];

    // Skip null/undefined
    if (value == null) continue;

    // Transform based on type
    let transformedValue;
    if (typeof value === 'string') {
      transformedValue = value.toUpperCase();
    } else if (typeof value === 'number') {
      transformedValue = value * 100;
    } else {
      transformedValue = value;
    }

    result.push([key, transformedValue]);
  }

  return result;
}

const complexObj = {
  name: 'john',
  age: 25,
  scores: [85, 92],
  active: true,
  notes: null
};

console.log(iterateAdvanced(complexObj));
// [['name', 'JOHN'], ['age', 2500], ['scores', [85, 92]], ['active', true]]

// Equivalent with Object.entries()
function iterateModern(obj) {
  return Object.entries(obj)
    .filter(([, value]) => value != null)
    .map(([key, value]) => {
      if (typeof value === 'string') return [key, value.toUpperCase()];
      if (typeof value === 'number') return [key, value * 100];
      return [key, value];
    });
}

console.log(iterateModern(complexObj)); // Same result

// Performance considerations
const perfObj = {};
for (let i = 0; i < 10000; i++) {
  perfObj[\`key\${i}\`] = i;
}

// Manual with early exit
console.time('Manual with condition');
let manualCount = 0;
for (const key in perfObj) {
  if (perfObj.hasOwnProperty(key) && perfObj[key] > 5000) {
    manualCount++;
  }
}
console.timeEnd('Manual with condition');

// Object.entries() with condition
console.time('Object.entries with condition');
const entriesCount = Object.entries(perfObj).filter(([, v]) => v > 5000).length;
console.timeEnd('Object.entries with condition');

// For complex conditions, manual might be faster
console.log(manualCount, entriesCount);

// 14. Cross-browser considerations
// Object.entries() is ES2017+ - use polyfill for older browsers
if (!Object.entries) {
  Object.entries = function(obj) {
    if (obj == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const entries = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        entries.push([key, obj[key]]);
      }
    }
    return entries;
  };
}

// 15. Memory management
function memoryEfficientEntries(obj) {
  // For large objects, consider if you really need all entries at once
  const keys = Object.keys(obj);

  // Return iterator instead of array for large objects
  return {
    *[Symbol.iterator]() {
      for (const key of keys) {
        yield [key, obj[key]];
      }
    },
    toArray() {
      return keys.map(key => [key, obj[key]]);
    }
  };
}

const efficient = memoryEfficientEntries(largeObj);
// Use as iterator (memory efficient)
let count = 0;
for (const [key, value] of efficient) {
  count++;
  if (count >= 5) break;
}
// Or convert to array when needed
const array = efficient.toArray();

// 16. Debugging and logging
function logEntries(obj, label = 'Object entries') {
  const entries = Object.entries(obj);
  console.group(label);
  console.log('Count:', entries.length);
  console.log('Entries:', entries);
  console.log('Keys:', entries.map(([k]) => k));
  console.log('Values:', entries.map(([, v]) => v));
  console.groupEnd();
}

logEntries({ name: 'John', age: 30, active: true });`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object.entries() is a powerful method for working with key-value pairs.
            Understanding its behavior, performance characteristics, and proper usage patterns enables
            efficient and maintainable JavaScript code.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Object.entries() Key Points</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Returns:</h4>
                <p className="text-slate-700">Array of [key, value] pairs</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Order:</h4>
                <p className="text-slate-700">Guaranteed insertion order for string keys</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Performance:</h4>
                <p className="text-slate-700">Fast, but creates array - cache for multiple uses</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Use Cases:</h4>
                <p className="text-slate-700">Data transformation, validation, iteration, mapping</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand Object.entries(), explore related methods:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Object.fromEntries():</strong> Create objects from entry arrays</li>
              <li><strong>Map and Set:</strong> Modern key-value data structures</li>
              <li><strong>Array destructuring:</strong> Advanced iteration patterns</li>
              <li><strong>Functional programming:</strong> Compose operations on entries</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}