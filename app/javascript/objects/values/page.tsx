import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object.values() - Complete Guide to Property Values",
  description: "Master JavaScript Object.values() method with comprehensive guide covering value enumeration, data processing, performance optimization, and practical applications.",
  keywords: [
    "javascript object.values",
    "object property values",
    "javascript value enumeration",
    "object.values vs object.keys",
    "property value extraction",
    "javascript object utilities",
    "data processing values",
    "object iteration values",
    "javascript object methods",
    "object.values performance"
  ],
  openGraph: {
    title: "JavaScript Object.values() - Complete Guide",
    description: "Master JavaScript Object.values() method with comprehensive guide covering value enumeration, data processing, performance optimization, and practical applications.",
    url: "/javascript/objects/values",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.values() Guide",
    description: "Master JavaScript Object.values() method with comprehensive guide covering value enumeration, data processing, performance optimization, and practical applications.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/values" },
};

const valuesSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object.values() - Complete Guide to Property Values",
  "description": "Master JavaScript Object.values() method with comprehensive guide covering value enumeration, data processing, performance optimization, and practical applications.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectValuesPage() {
  return (
    <>
      <Script id="values-schema" type="application/ld+json">
        {JSON.stringify(valuesSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object.values(): Complete Guide to Property Values
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object.values() is a powerful JavaScript method for extracting and working with object property values.
          This comprehensive guide covers value enumeration, data processing techniques, performance optimization,
          and real-world applications.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Object.values() Fundamentals</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Basic Syntax and Usage</h3>
          <p className="text-slate-700 mb-4">
            Object.values() returns an array of a given object's own enumerable property values.
          </p>

          <CodeExample
            title="Object.values() Basic Usage"
            code={`// Basic syntax
const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(Object.values(user)); // ['John', 30, 'New York']

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

console.log(Object.values(mixed));
// ['hello', 42, true, [1, 2, 3], { nested: 'value' }, function() {...}, undefined, null]

// Empty object
console.log(Object.values({})); // []

// Single property
console.log(Object.values({ a: 1 })); // [1]

// Order preservation
const ordered = { z: 3, a: 1, m: 2 };
console.log(Object.values(ordered)); // [3, 1, 2] (insertion order)

// Numeric keys (converted to strings)
const numericKeys = { 1: 'one', 2: 'two', 3: 'three' };
console.log(Object.values(numericKeys)); // ['one', 'two', 'three']

// Symbol keys are excluded
const symbolKey = Symbol('secret');
const withSymbol = { a: 1, [symbolKey]: 'secret', b: 2 };
console.log(Object.values(withSymbol)); // [1, 2]

// Non-enumerable properties are excluded
const withNonEnum = Object.create({}, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});
console.log(Object.values(withNonEnum)); // [1]

// Inherited properties are not included
function Animal(name) {
  this.name = name;
}

Animal.prototype.species = 'Animal';

const dog = new Animal('Buddy');
dog.breed = 'Golden Retriever';

console.log(Object.values(dog)); // ['Buddy', 'Golden Retriever']

// Array-like objects
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Object.values(arrayLike)); // ['a', 'b', 'c', 3]

// Date object
const date = new Date();
console.log(Object.values(date)); // [] (Date has no enumerable own properties)

// Function object
function testFunc() {}
testFunc.customProp = 'custom';
console.log(Object.values(testFunc)); // ['custom']

// Primitive values (converted to objects)
console.log(Object.values('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log(Object.values(42)); // []
console.log(Object.values(true)); // []`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Return Value and Array Methods</h3>
          <p className="text-slate-700 mb-4">
            Understanding what Object.values() returns and how to work with the resulting array.
          </p>

          <CodeExample
            title="Object.values() Return Value and Array Operations"
            code={`// Always returns an array
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);

console.log(Array.isArray(values)); // true
console.log(values instanceof Array); // true
console.log(Object.prototype.toString.call(values)); // '[object Array]'

// Array methods work on the result
console.log(values.length); // 3
console.log(values[0]); // 1
console.log(values.includes(2)); // true
console.log(values.indexOf(3)); // 2

// Array iteration methods
values.forEach(value => console.log(value)); // 1, 2, 3

// Array transformation methods
console.log(values.map(v => v * 2)); // [2, 4, 6]
console.log(values.filter(v => v > 1)); // [2, 3]
console.log(values.reduce((sum, v) => sum + v, 0)); // 6

// Array searching methods
console.log(values.find(v => v > 2)); // 3
console.log(values.some(v => v > 2)); // true
console.log(values.every(v => v > 0)); // true

// Array sorting and modification
const sorted = [...values].sort((a, b) => b - a);
console.log(sorted); // [3, 2, 1]

const reversed = [...values].reverse();
console.log(reversed); // [3, 2, 1]

// Spreading values
const combined = [0, ...values, 4];
console.log(combined); // [0, 1, 2, 3, 4]

// Destructuring values
const [first, second, ...rest] = values;
console.log(first, second, rest); // 1, 2, [3]

// Converting to other formats
const obj2 = { x: 10, y: 20, z: 30 };
const vals = Object.values(obj2);

// To Set (removes duplicates)
const valueSet = new Set(vals);
console.log(valueSet); // Set { 10, 20, 30 }

// Join as string
console.log(vals.join(', ')); // '10, 20, 30'

// Create key-value pairs (with Object.keys)
const keys = Object.keys(obj2);
const pairs = keys.map((key, index) => [key, vals[index]]);
console.log(pairs); // [['x', 10], ['y', 20], ['z', 30]]

// Recreate object from values (needs keys)
function recreateObject(keys, values) {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index];
    return obj;
  }, {});
}

const recreated = recreateObject(Object.keys(obj2), vals);
console.log(recreated); // { x: 10, y: 20, z: 30 }

// Statistics and analysis
function analyzeValues(values) {
  return {
    count: values.length,
    sum: values.reduce((a, b) => a + b, 0),
    average: values.reduce((a, b) => a + b, 0) / values.length,
    min: Math.min(...values),
    max: Math.max(...values),
    unique: [...new Set(values)].length
  };
}

const numbers = Object.values({ a: 1, b: 2, c: 2, d: 3 });
console.log(analyzeValues(numbers));
// { count: 4, sum: 8, average: 2, min: 1, max: 3, unique: 3 }

// Type analysis
function analyzeTypes(values) {
  return values.reduce((types, value) => {
    const type = typeof value;
    types[type] = (types[type] || 0) + 1;
    return types;
  }, {});
}

const mixedValues = Object.values({
  str: 'hello',
  num: 42,
  bool: true,
  arr: [1, 2],
  obj: { a: 1 },
  func: () => {},
  undef: undefined,
  nul: null
});

console.log(analyzeTypes(mixedValues));
// { string: 1, number: 1, boolean: 1, object: 2, function: 1, undefined: 1 }

// Safe operations on values
function safeValueOperations(obj) {
  const values = Object.values(obj || {});

  return {
    numbers: values.filter(v => typeof v === 'number'),
    strings: values.filter(v => typeof v === 'string'),
    arrays: values.filter(v => Array.isArray(v)),
    objects: values.filter(v => v && typeof v === 'object' && !Array.isArray(v)),
    functions: values.filter(v => typeof v === 'function')
  };
}

const testObj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: { city: 'NYC' },
  greet: () => 'Hello'
};

console.log(safeValueOperations(testObj));`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Comparison with Other Value Extraction Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.values() vs Manual Extraction</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.values() with manual value extraction approaches.
          </p>

          <CodeExample
            title="Object.values() vs Manual Value Extraction"
            code={`// Manual value extraction (old way)
const obj = { a: 1, b: 2, c: 3, d: 4 };

// Manual approach
const manualValues = [];
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    manualValues.push(obj[key]);
  }
}
console.log(manualValues); // [1, 2, 3, 4]

// Object.values() approach
const values = Object.values(obj);
console.log(values); // [1, 2, 3, 4]

// Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('Manual extraction');
const manualResult = [];
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) {
    manualResult.push(largeObj[key]);
  }
}
console.timeEnd('Manual extraction');

console.time('Object.values()');
const valuesResult = Object.values(largeObj);
console.timeEnd('Object.values()');

// Object.values() is generally faster

// When to use each approach:

// Use Object.values() when:
// - You want all values in an array
// - You need to use array methods (map, filter, etc.)
// - Performance is important
// - Code clarity is preferred

// Use manual extraction when:
// - You need to transform values during extraction
// - You want to skip certain values conditionally
// - You need more control over the process
// - Memory usage is critical (no intermediate array)

// Advanced manual extraction
function customValueExtraction(obj, options = {}) {
  const {
    includeInherited = false,
    filterFn = () => true,
    transformFn = v => v
  } = options;

  const values = [];

  const processObj = (o) => {
    for (const key in o) {
      if (includeInherited || o.hasOwnProperty(key)) {
        const value = o[key];
        if (filterFn(key, value)) {
          values.push(transformFn(value));
        }
      }
    }
  };

  processObj(obj);
  return values;
}

const testObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(customValueExtraction(testObj, {
  filterFn: (key, value) => value > 2,
  transformFn: value => value * 10
})); // [30, 40]

// Converting manual approaches to Object.values()
const oldWay = (obj) => {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
};

const newWay = (obj) => Object.values(obj);

// They produce the same result
console.log(oldWay(obj)); // [1, 2, 3, 4]
console.log(newWay(obj)); // [1, 2, 3, 4]

// With filtering
const oldFiltered = (obj) => {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] > 2) {
      result.push(obj[key]);
    }
  }
  return result;
};

const newFiltered = (obj) => Object.values(obj).filter(v => v > 2);

console.log(oldFiltered(obj)); // [3, 4]
console.log(newFiltered(obj)); // [3, 4]

// With transformation
const oldTransformed = (obj) => {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key] * 2);
    }
  }
  return result;
};

const newTransformed = (obj) => Object.values(obj).map(v => v * 2);

console.log(oldTransformed(obj)); // [2, 4, 6, 8]
console.log(newTransformed(obj)); // [2, 4, 6, 8]

// Complex manual extraction with conditions
function extractValuesAdvanced(obj) {
  const values = [];

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];

    // Skip null/undefined
    if (value == null) continue;

    // Transform based on type
    if (typeof value === 'string') {
      values.push(value.toUpperCase());
    } else if (typeof value === 'number') {
      values.push(value * 100);
    } else if (Array.isArray(value)) {
      values.push(value.length);
    } else {
      values.push(value);
    }
  }

  return values;
}

const complexObj = {
  name: 'john',
  age: 25,
  scores: [85, 92, 78],
  active: true,
  notes: null
};

console.log(extractValuesAdvanced(complexObj));
// ['JOHN', 2500, 3, true]

// Equivalent with Object.values()
function extractValuesModern(obj) {
  return Object.values(obj)
    .filter(value => value != null)
    .map(value => {
      if (typeof value === 'string') return value.toUpperCase();
      if (typeof value === 'number') return value * 100;
      if (Array.isArray(value)) return value.length;
      return value;
    });
}

console.log(extractValuesModern(complexObj)); // ['JOHN', 2500, 3, true]

// Performance considerations
const perfObj = {};
for (let i = 0; i < 10000; i++) {
  perfObj[\`key\${i}\`] = i;
}

// Manual with early exit
console.time('Manual with condition');
let manualCount = 0;
for (const key in perfObj) {
  if (perfObj[key] > 5000) manualCount++;
}
console.timeEnd('Manual with condition');

// Object.values() with condition
console.time('Object.values with condition');
const valuesCount = Object.values(perfObj).filter(v => v > 5000).length;
console.timeEnd('Object.values with condition');

// For complex conditions, manual might be faster
console.log(manualCount, valuesCount);`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.values() vs Object.keys() + Mapping</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.values() with the pattern of getting keys and mapping to values.
          </p>

          <CodeExample
            title="Object.values() vs Object.keys() + Map"
            code={`// The old way: Object.keys() + map
const obj = { a: 1, b: 2, c: 3, d: 4 };

const valuesOldWay = Object.keys(obj).map(key => obj[key]);
console.log(valuesOldWay); // [1, 2, 3, 4]

// The new way: Object.values()
const valuesNewWay = Object.values(obj);
console.log(valuesNewWay); // [1, 2, 3, 4]

// They produce identical results
console.log(JSON.stringify(valuesOldWay) === JSON.stringify(valuesNewWay)); // true

// Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('Object.keys() + map()');
const oldResult = Object.keys(largeObj).map(key => largeObj[key]);
console.timeEnd('Object.keys() + map()');

console.time('Object.values()');
const newResult = Object.values(largeObj);
console.timeEnd('Object.values()');

// Object.values() is optimized and usually faster

// When the old pattern might be necessary:
// 1. When you need both keys and values
const withKeys = Object.keys(obj).map(key => ({
  key,
  value: obj[key]
}));
console.log(withKeys);
// [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, ...]

// 2. When you need to filter by keys first
const filteredValues = Object.keys(obj)
  .filter(key => key > 'b') // Filter keys
  .map(key => obj[key]); // Then get values
console.log(filteredValues); // [3, 4]

// With Object.values(), you'd need Object.entries()
const filteredValues2 = Object.entries(obj)
  .filter(([key]) => key > 'b')
  .map(([, value]) => value);
console.log(filteredValues2); // [3, 4]

// 3. When you need custom logic during mapping
const customMapped = Object.keys(obj).map(key => {
  const value = obj[key];
  // Custom logic based on key
  if (key === 'a') return value * 10;
  if (key === 'b') return value + 100;
  return value;
});
console.log(customMapped); // [10, 102, 3, 4]

// With Object.values(), you lose the key context
// You'd need Object.entries() for this
const customMapped2 = Object.entries(obj).map(([key, value]) => {
  if (key === 'a') return value * 10;
  if (key === 'b') return value + 100;
  return value;
});
console.log(customMapped2); // [10, 102, 3, 4]

// 4. When working with sparse objects
const sparseObj = {};
sparseObj[1000] = 'far away';
sparseObj[1] = 'close';

console.log(Object.keys(sparseObj)); // ['1', '1000']
console.log(Object.values(sparseObj)); // ['close', 'far away']

// Both maintain order, but keys() gives you string keys

// Memory considerations
// Object.keys() + map() creates two arrays (keys and mapped values)
// Object.values() creates one array
// For large objects, Object.values() uses less memory

// Use cases for each approach:

// Use Object.values() when:
// - You only need the values
// - Performance is critical
// - Memory usage matters
// - You want clean, readable code

// Use Object.keys() + map() when:
// - You need custom logic based on keys during mapping
// - You want to filter by keys before mapping
// - You need both keys and values in the result
// - You're working with legacy code patterns

// Modern alternatives
// Object.entries() for key-value pairs
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2], ['c', 3], ['d', 4]]

// Can be more flexible than separate keys/values
const processed = Object.entries(obj).map(([key, value]) => ({
  key: key.toUpperCase(),
  value: value * 2,
  originalKey: key
}));
console.log(processed);

// Converting between formats
function keysToValues(obj) {
  return Object.keys(obj).map(key => obj[key]);
}

function valuesToKeys(obj) {
  // This is trickier - we lose key information
  // You'd need to use Object.entries() instead
  return Object.values(obj); // No way to get keys back
}

// Best practice: Use the right tool for the job
const data = { x: 10, y: 20, z: 30 };

// Simple value extraction
const simpleValues = Object.values(data);

// Values with transformation
const transformedValues = Object.values(data).map(v => v / 10);

// Values filtered and transformed
const filteredTransformed = Object.values(data)
  .filter(v => v > 15)
  .map(v => v * 2);

// Complex logic requiring keys
const complexResult = Object.entries(data)
  .filter(([key, value]) => key !== 'y')
  .map(([key, value]) => (\`\${key}: \${value * 3}\`));

console.log(simpleValues); // [10, 20, 30]
console.log(transformedValues); // [1, 2, 3]
console.log(filteredTransformed); // [40, 60]
console.log(complexResult); // ['x: 30', 'z: 90']`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Practical Applications</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Data Processing and Analysis</h3>
          <p className="text-slate-700 mb-4">
            Using Object.values() for data processing, validation, and analysis tasks.
          </p>

          <CodeExample
            title="Data Processing with Object.values()"
            code={`// 1. Statistical calculations
const scores = {
  math: 85,
  science: 92,
  history: 78,
  english: 88
};

const scoreValues = Object.values(scores);

const statistics = {
  average: scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length,
  highest: Math.max(...scoreValues),
  lowest: Math.min(...scoreValues),
  range: Math.max(...scoreValues) - Math.min(...scoreValues),
  count: scoreValues.length
};

console.log(statistics);
// { average: 85.75, highest: 92, lowest: 78, range: 14, count: 4 }

// 2. Data validation
function validateData(obj, validators) {
  const values = Object.values(obj);
  const errors = [];

  values.forEach((value, index) => {
    const key = Object.keys(obj)[index];
    const validator = validators[key];

    if (validator && !validator(value)) {
      errors.push(\`Invalid \${key}: \${value}\`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com'
};

const validators = {
  name: (v) => typeof v === 'string' && v.length > 0,
  age: (v) => typeof v === 'number' && v >= 0 && v <= 150,
  email: (v) => typeof v === 'string' && v.includes('@')
};

console.log(validateData(userData, validators)); // { isValid: true, errors: [] }

// 3. Data transformation
const rawData = {
  first_name: 'John',
  last_name: 'Doe',
  birth_year: 1999,
  salary: 50000
};

const transformedData = {
  fullName: Object.values(rawData).slice(0, 2).join(' '),
  age: new Date().getFullYear() - rawData.birth_year,
  salary: rawData.salary
};

console.log(transformedData); // { fullName: 'John Doe', age: 25, salary: 50000 }

// 4. Finding patterns in data
const products = {
  laptop: { price: 1200, category: 'electronics' },
  book: { price: 20, category: 'books' },
  phone: { price: 800, category: 'electronics' },
  shirt: { price: 50, category: 'clothing' }
};

const productValues = Object.values(products);

// Find expensive items
const expensiveItems = productValues.filter(product => product.price > 100);
console.log(expensiveItems);

// Group by category
const categoryGroups = productValues.reduce((groups, product) => {
  const category = product.category;
  if (!groups[category]) groups[category] = [];
  groups[category].push(product);
  return groups;
}, {});

console.log(categoryGroups);

// Calculate totals
const totalValue = productValues.reduce((sum, product) => sum + product.price, 0);
const averagePrice = totalValue / productValues.length;

console.log(\`Total value: $\${totalValue}, Average price: $\${averagePrice.toFixed(2)}\`);

// 5. Data normalization
function normalizeData(data) {
  const values = Object.values(data);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return Object.keys(data).reduce((normalized, key) => {
    normalized[key] = (data[key] - min) / (max - min);
    return normalized;
  }, {});
}

const measurements = { a: 10, b: 20, c: 30, d: 40 };
console.log(normalizeData(measurements));
// { a: 0, b: 0.333..., c: 0.666..., d: 1 }

// 6. Data deduplication
function removeDuplicates(obj) {
  const values = Object.values(obj);
  const uniqueValues = [...new Set(values)];

  // This loses key information - use carefully
  return uniqueValues;
}

const dataWithDuplicates = { x: 1, y: 2, z: 1, w: 3, v: 2 };
console.log(removeDuplicates(dataWithDuplicates)); // [1, 2, 3]

// Better: remove duplicate values but keep keys
function deduplicateByValue(obj) {
  const seen = new Set();
  const result = {};

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (!seen.has(value)) {
      seen.add(value);
      result[key] = value;
    }
  });

  return result;
}

console.log(deduplicateByValue(dataWithDuplicates));
// { x: 1, y: 2, w: 3 } (keeps first occurrence of each value)

// 7. Data aggregation
const salesData = {
  q1: { revenue: 10000, customers: 50 },
  q2: { revenue: 12000, customers: 60 },
  q3: { revenue: 15000, customers: 70 },
  q4: { revenue: 18000, customers: 80 }
};

const quarters = Object.values(salesData);

const yearlyStats = {
  totalRevenue: quarters.reduce((sum, q) => sum + q.revenue, 0),
  totalCustomers: quarters.reduce((sum, q) => sum + q.customers, 0),
  averageRevenue: quarters.reduce((sum, q) => sum + q.revenue, 0) / quarters.length,
  growthRate: quarters.length > 1 ?
    ((quarters[quarters.length - 1].revenue - quarters[0].revenue) / quarters[0].revenue) * 100 : 0
};

console.log(yearlyStats);

// 8. Data filtering and searching
function searchData(data, criteria) {
  const values = Object.values(data);

  return values.filter(item => {
    return Object.entries(criteria).every(([key, value]) => {
      return item[key] === value;
    });
  });
}

const employees = {
  emp1: { name: 'Alice', department: 'Engineering', salary: 80000 },
  emp2: { name: 'Bob', department: 'Sales', salary: 60000 },
  emp3: { name: 'Charlie', department: 'Engineering', salary: 90000 }
};

console.log(searchData(employees, { department: 'Engineering' }));
// [{ name: 'Alice', department: 'Engineering', salary: 80000 }, { name: 'Charlie', ... }]

// 9. Data comparison
function compareDatasets(data1, data2) {
  const values1 = Object.values(data1).sort();
  const values2 = Object.values(data2).sort();

  return {
    identical: JSON.stringify(values1) === JSON.stringify(values2),
    differences: {
      inFirstOnly: values1.filter(v => !values2.includes(v)),
      inSecondOnly: values2.filter(v => !values1.includes(v)),
      common: values1.filter(v => values2.includes(v))
    }
  };
}

const setA = { x: 1, y: 2, z: 3 };
const setB = { a: 2, b: 3, c: 4 };

console.log(compareDatasets(setA, setB));

// 10. Data serialization preparation
function prepareForSerialization(obj) {
  const values = Object.values(obj);

  // Check for non-serializable values
  const serializableValues = values.filter(value => {
    try {
      JSON.stringify(value);
      return true;
    } catch {
      return false;
    }
  });

  return {
    serializable: serializableValues.length === values.length,
    serializableCount: serializableValues.length,
    totalCount: values.length
  };
}

const mixedData = {
  string: 'hello',
  number: 42,
  array: [1, 2, 3],
  object: { nested: 'value' },
  func: () => console.log('test'),
  date: new Date()
};

console.log(prepareForSerialization(mixedData));`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Advanced Patterns and Techniques</h3>
          <p className="text-slate-700 mb-4">
            Advanced usage patterns combining Object.values() with other JavaScript features.
          </p>

          <CodeExample
            title="Advanced Object.values() Patterns"
            code={`// 1. Functional programming with Object.values()
const data = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Compose operations
const result = Object.values(data)
  .filter(x => x > 2)      // [3, 4, 5]
  .map(x => x * 2)         // [6, 8, 10]
  .reduce((sum, x) => sum + x, 0); // 24

console.log(result); // 24

// 2. Lazy evaluation with generators
function* lazyValues(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield obj[key];
    }
  }
}

const lazyResult = [];
for (const value of lazyValues(data)) {
  lazyResult.push(value);
  if (lazyResult.length >= 3) break; // Stop early
}
console.log(lazyResult); // [1, 2, 3]

// 3. Memoization with Object.values()
const memoizedValues = (() => {
  const cache = new Map();

  return (obj) => {
    const key = JSON.stringify(obj);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const values = Object.values(obj);
    cache.set(key, values);
    return values;
  };
})();

const testObj = { x: 1, y: 2, z: 3 };
console.log(memoizedValues(testObj)); // [1, 2, 3] (computed)
console.log(memoizedValues(testObj)); // [1, 2, 3] (cached)

// 4. Object.values() with async operations
async function processValuesAsync(obj) {
  const values = Object.values(obj);

  // Process all values concurrently
  const promises = values.map(async (value) => {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    return value * 2;
  });

  return await Promise.all(promises);
}

const asyncResult = await processValuesAsync({ a: 1, b: 2, c: 3 });
console.log(asyncResult); // [2, 4, 6] (order may vary)

// 5. Streaming data processing
function createValueStream(obj) {
  const values = Object.values(obj);
  let index = 0;

  return {
    next() {
      if (index < values.length) {
        return { value: values[index++], done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

const stream = createValueStream({ a: 1, b: 2, c: 3 });
for (const value of stream) {
  console.log('Streamed:', value);
}

// 6. Object.values() with proxies
const handler = {
  get(target, prop) {
    if (prop === 'values') {
      return () => {
        console.log('Getting values...');
        return Object.values(target);
      };
    }
    return target[prop];
  }
};

const proxy = new Proxy({ a: 1, b: 2, c: 3 }, handler);
console.log(proxy.values()); // 'Getting values...' then [1, 2, 3]

// 7. Type-safe value extraction
function extractValuesOfType(obj, type) {
  return Object.values(obj).filter(value => typeof value === type);
}

const mixedObj = {
  str: 'hello',
  num: 42,
  bool: true,
  arr: [1, 2, 3],
  obj: { a: 1 }
};

console.log(extractValuesOfType(mixedObj, 'string')); // ['hello']
console.log(extractValuesOfType(mixedObj, 'number')); // [42]
console.log(extractValuesOfType(mixedObj, 'object')); // [[1, 2, 3], { a: 1 }]

// 8. Value-based object partitioning
function partitionBy(obj, predicate) {
  const values = Object.values(obj);
  const keys = Object.keys(obj);

  const matching = {};
  const nonMatching = {};

  keys.forEach((key, index) => {
    const value = values[index];
    if (predicate(value)) {
      matching[key] = value;
    } else {
      nonMatching[key] = value;
    }
  });

  return { matching, nonMatching };
}

const partitioned = partitionBy(
  { a: 1, b: 2, c: 3, d: 4 },
  value => value > 2
);

console.log(partitioned);
// { matching: { c: 3, d: 4 }, nonMatching: { a: 1, b: 2 } }

// 9. Object.values() with custom iterators
class ValueIterator {
  constructor(obj) {
    this.values = Object.values(obj);
    this.index = 0;
  }

  next() {
    if (this.index < this.values.length) {
      return {
        value: this.values[this.index++],
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
    this.values = this.values.filter(predicate);
    this.index = 0;
    return this;
  }

  map(transform) {
    this.values = this.values.map(transform);
    this.index = 0;
    return this;
  }
}

const iterator = new ValueIterator({ a: 1, b: 2, c: 3, d: 4 });
const filtered = iterator.filter(x => x > 2).map(x => x * 10);

for (const value of filtered) {
  console.log(value); // 30, 40
}

// 10. Reactive value observation
class ObservableValues {
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

  getValues() {
    const values = Object.values(this.obj);
    this.listeners.forEach(listener => listener(values));
    return values;
  }

  update(newObj) {
    this.obj = { ...this.obj, ...newObj };
    this.getValues(); // Trigger listeners
  }
}

const observable = new ObservableValues({ a: 1, b: 2 });

const unsubscribe = observable.subscribe(values => {
  console.log('Values changed:', values);
});

observable.getValues(); // Triggers listener: [1, 2]
observable.update({ c: 3 }); // Triggers listener: [1, 2, 3]

unsubscribe(); // Remove listener
observable.update({ d: 4 }); // No listener triggered`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Performance and Best Practices</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance Optimization</h3>
          <p className="text-slate-700 mb-4">
            Understanding performance characteristics and optimization techniques for Object.values().
          </p>

          <CodeExample
            title="Object.values() Performance Optimization"
            code={`// 1. Cache Object.values() results
function processObject(obj) {
  const values = Object.values(obj); // Cache once

  // Use values multiple times
  const sum = values.reduce((a, b) => a + b, 0);
  const max = Math.max(...values);
  const count = values.length;

  return { sum, max, count };
}

// Bad: Multiple calls
function badProcessObject(obj) {
  const sum = Object.values(obj).reduce((a, b) => a + b, 0);
  const max = Math.max(...Object.values(obj));
  const count = Object.values(obj).length;

  return { sum, max, count };
}

// 2. Use appropriate method for data access patterns
const obj = { a: 1, b: 2, c: 3, d: 4 };

// For single value access - use direct property access
console.log(obj.a); // Fastest

// For multiple value operations - use Object.values()
const values = Object.values(obj);
console.log(values.filter(v => v > 2)); // Good

// For key-value operations - use Object.entries()
const entries = Object.entries(obj);
console.log(entries.filter(([, v]) => v > 2)); // Good

// 3. Memory considerations for large objects
const largeObj = {};
for (let i = 0; i = 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

// Object.values() creates a new array - use carefully for large objects
console.time('Object.values large');
const largeValues = Object.values(largeObj);
console.timeEnd('Object.values large');

// For large objects, consider processing in chunks
function processLargeObjectValues(obj, chunkSize = 1000) {
  const keys = Object.keys(obj);
  const results = [];

  for (let i = 0; i < keys.length; i += chunkSize) {
    const chunkKeys = keys.slice(i, i + chunkSize);
    const chunkValues = chunkKeys.map(key => obj[key]);

    // Process chunk
    results.push(...chunkValues.filter(v => v > 0.5));
  }

  return results;
}

console.time('Chunked processing');
const processed = processLargeObjectValues(largeObj);
console.timeEnd('Chunked processing');

// 4. Avoid Object.values() in performance-critical loops
const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  value: Math.random()
}));

// Bad: Object.values() in loop
console.time('values in loop');
for (const item of data) {
  const values = Object.values(item); // Called 10000 times
  if (values[1] > 0.5) {
    // Do something
  }
}
console.timeEnd('values in loop');

// Good: Direct property access
console.time('direct access');
for (const item of data) {
  if (item.value > 0.5) { // Direct access
    // Do something
  }
}
console.timeEnd('direct access');

// 5. Benchmark different approaches
function benchmarkValues(obj, iterations = 1000) {
  console.time('Object.values()');
  for (let i = 0; i < iterations; i++) {
    const values = Object.values(obj);
  }
  console.timeEnd('Object.values()');

  console.time('Manual loop');
  for (let i = 0; i < iterations; i++) {
    const values = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
  }
  console.timeEnd('Manual loop');

  console.time('Object.keys() + map');
  for (let i = 0; i < iterations; i++) {
    const values = Object.keys(obj).map(key => obj[key]);
  }
  console.timeEnd('Object.keys() + map');
}

const testObj = {};
for (let i = 0; i < 100; i++) {
  testObj[\`prop\${i}\`] = i;
}

benchmarkValues(testObj);

// 6. Optimize for specific use cases
// When you only need some values
function getSomeValues(obj, count) {
  const values = Object.values(obj);
  return values.slice(0, count);
}

// When you need values in random order
function getRandomValues(obj, count) {
  const values = Object.values(obj);
  const shuffled = [...values].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// When you need unique values
function getUniqueValues(obj) {
  return [...new Set(Object.values(obj))];
}

// 7. Memory-efficient patterns
// For read-only access, avoid copying
function analyzeWithoutCopying(obj) {
  let sum = 0;
  let count = 0;
  let max = -Infinity;

  // Direct iteration without creating array
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      sum += value;
      count++;
      if (value > max) max = value;
    }
  }

  return { sum, average: sum / count, max, count };
}

// 8. Lazy evaluation for large datasets
function* lazyValueFilter(obj, predicate) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (predicate(value)) {
        yield value;
      }
    }
  }
}

const lazyFiltered = [];
for (const value of lazyValueFilter(largeObj, v => v > 0.8)) {
  lazyFiltered.push(value);
  if (lazyFiltered.length >= 10) break; // Stop when we have enough
}

console.log(\`Found \${lazyFiltered.length} values > 0.8\`);

// 9. Batch processing
function batchProcessValues(obj, batchSize = 100) {
  const values = Object.values(obj);
  const results = [];

  for (let i = 0; i < values.length; i += batchSize) {
    const batch = values.slice(i, i + batchSize);
    // Process batch (e.g., send to API, save to database)
    results.push(\`Processed batch \${Math.floor(i / batchSize) + 1}\`);
  }

  return results;
}

// 10. Performance monitoring
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

const trackedValues = withPerformanceTracking(
  (obj) => Object.values(obj).filter(v => v > 0.5),
  'value filtering'
);

console.log(trackedValues(largeObj));`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Best Practices and Common Patterns</h3>
          <p className="text-slate-700 mb-4">
            Essential best practices for using Object.values() effectively.
          </p>

          <CodeExample
            title="Object.values() Best Practices"
            code={`// 1. Always handle null/undefined objects
function safeValues(obj) {
  return obj == null ? [] : Object.values(obj);
}

console.log(safeValues(null)); // []
console.log(safeValues({ a: 1 })); // [1]

// 2. Use Object.values() for array operations
const obj = { a: 1, b: 2, c: 3 };

// Good - array methods work
const doubled = Object.values(obj).map(v => v * 2);
const filtered = Object.values(obj).filter(v => v > 1);
const sum = Object.values(obj).reduce((a, b) => a + b, 0);

// 3. Prefer Object.values() over manual iteration
// Modern approach
const values = Object.values(obj).forEach(value => {
  console.log(value);
});

// Avoid old approach
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

// 4. Combine with destructuring
const [first, second, ...rest] = Object.values(obj);
console.log(first, second, rest); // 1, 2, [3]

// 5. Use for data validation
function validateAllValues(obj, validator) {
  return Object.values(obj).every(validator);
}

const numbers = { a: 1, b: 2, c: 3 };
console.log(validateAllValues(numbers, v => typeof v === 'number')); // true

// 6. Cache results when used multiple times
function processData(obj) {
  const values = Object.values(obj); // Cache once

  return {
    count: values.length,
    sum: values.reduce((a, b) => a + b, 0),
    average: values.reduce((a, b) => a + b, 0) / values.length
  };
}

// 7. Use appropriate alternatives when needed
// For key-value pairs: Object.entries()
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2], ['c', 3]]

// For keys only: Object.keys()
const keys = Object.keys(obj);
console.log(keys); // ['a', 'b', 'c']

// For existence check: 'in' operator
console.log('a' in obj); // true

// 8. Handle non-enumerable properties
const objWithNonEnum = Object.create({}, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});

console.log(Object.values(objWithNonEnum)); // [1] (only enumerable)

// To get all values including non-enumerable
console.log(Object.getOwnPropertyNames(objWithNonEnum).map(key =>
  objWithNonEnum[key]
)); // [1, 2]

// 9. Be aware of order preservation
const orderedObj = { c: 3, b: 2, a: 1 };
console.log(Object.values(orderedObj)); // [3, 2, 1] (insertion order)

// Numeric keys are sorted
const numericObj = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.values(numericObj)); // ['one', 'two', 'three']

// 10. Use for type checking
function getValueTypes(obj) {
  return Object.values(obj).map(value => typeof value);
}

console.log(getValueTypes({
  str: 'hello',
  num: 42,
  bool: true,
  obj: {},
  arr: []
})); // ['string', 'number', 'boolean', 'object', 'object']

// 11. Combine with other modern JavaScript features
// With optional chaining
const nested = { user: { profile: { scores: [85, 92] } } };
const scores = Object.values(nested?.user?.profile?.scores || {});
console.log(scores); // [85, 92]

// With nullish coalescing
function getValues(obj) {
  return Object.values(obj ?? {});
}

// With spread operator
const combined = [0, ...Object.values(obj), 4];
console.log(combined); // [0, 1, 2, 3, 4]

// 12. Error handling
function safeValueOperation(obj, operation) {
  try {
    const values = Object.values(obj || {});
    return operation(values);
  } catch (error) {
    console.error('Value operation failed:', error.message);
    return null;
  }
}

safeValueOperation({ a: 1, b: 2 }, values => values.map(v => v * 2)); // [2, 4]

// 13. Performance considerations for large objects
function processLargeObject(obj) {
  // For objects with many properties, consider alternatives
  if (Object.keys(obj).length > 10000) {
    console.warn('Large object detected');
    // Use manual iteration instead
    const result = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }

  return Object.values(obj);
}

// 14. Document expected object structure
/**
 * Calculates statistics for numeric object values
 * @param {Object.<string, number>} obj - Object with numeric values
 * @returns {Object} Statistics object
 */
function calculateStats(obj) {
  const values = Object.values(obj).filter(v => typeof v === 'number');

  if (values.length === 0) return null;

  return {
    count: values.length,
    sum: values.reduce((a, b) => a + b, 0),
    average: values.reduce((a, b) => a + b, 0) / values.length,
    min: Math.min(...values),
    max: Math.max(...values)
  };
}

// 15. Testing utilities
function createTestObject(size = 10) {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[\`key\${i}\`] = Math.random();
  }
  return obj;
}

function assertValues(obj, expectedValues) {
  const actualValues = Object.values(obj).sort();
  const expected = [...expectedValues].sort();

  if (JSON.stringify(actualValues) !== JSON.stringify(expected)) {
    throw new Error(\`Expected values \${expected}, got \${actualValues}\`);
  }
}

// Usage
const testObj = createTestObject(3);
console.log('Test object created with', Object.values(testObj).length, 'values');

// 16. Integration patterns
// With array methods
const data = { users: [{ id: 1 }, { id: 2 }], posts: [{ id: 1 }, { id: 2 }, { id: 3 }] };

const allItems = Object.values(data).flat();
console.log(allItems.length); // 5

// With promises
async function processAllValues(obj) {
  const values = Object.values(obj);
  const promises = values.map(async value => {
    // Some async operation
    return value;
  });

  return Promise.all(promises);
}

// With observables (conceptual)
class ValueObservable {
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

  getValues() {
    const values = Object.values(this.obj);
    this.listeners.forEach(callback => callback(values));
    return values;
  }
}

// 17. Migration from legacy code
// Old way
function oldGetValues(obj) {
  const values = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

// New way
function newGetValues(obj) {
  return Object.values(obj);
}

// They produce the same result
const test = { a: 1, b: 2, c: 3 };
console.log(JSON.stringify(oldGetValues(test)) === JSON.stringify(newGetValues(test))); // true

// 18. Cross-browser considerations
// Object.values() is ES2017+ - use polyfill for older browsers
if (!Object.values) {
  Object.values = function(obj) {
    if (obj == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const values = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  };
}

// 19. Memory management
function memoryEfficientValues(obj) {
  // For large objects, consider if you really need all values at once
  const keys = Object.keys(obj);

  // Return iterator instead of array for large objects
  return {
    *[Symbol.iterator]() {
      for (const key of keys) {
        yield obj[key];
      }
    },
    toArray() {
      return keys.map(key => obj[key]);
    }
  };
}

const efficient = memoryEfficientValues(largeObj);
// Use as iterator (memory efficient)
let count = 0;
for (const value of efficient) {
  count++;
  if (count >= 5) break;
}
// Or convert to array when needed
const array = efficient.toArray();

// 20. Debugging and logging
function logValues(obj, label = 'Object values') {
  const values = Object.values(obj);
  console.group(label);
  console.log('Count:', values.length);
  console.log('Values:', values);
  console.log('Types:', values.map(v => typeof v));
  console.groupEnd();
}

logValues({ name: 'John', age: 30, active: true });`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object.values() is a powerful method for extracting and working with object property values.
            Understanding its behavior, performance characteristics, and proper usage patterns enables
            efficient and maintainable JavaScript code.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Object.values() Key Points</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Returns:</h4>
                <p className="text-slate-700">Array of enumerable own property values</p>
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
                <p className="text-slate-700">Data processing, validation, statistics, iteration</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand Object.values(), explore related methods:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Object.entries():</strong> Get key-value pairs as arrays</li>
              <li><strong>Object.keys():</strong> Get property names only</li>
              <li><strong>Array methods:</strong> Map, filter, reduce on object values</li>
              <li><strong>Advanced Patterns:</strong> Combining with modern JavaScript features</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}