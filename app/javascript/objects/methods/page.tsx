import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object Methods - Complete Guide to Built-in Methods",
  description: "Master JavaScript object methods with comprehensive guide covering Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, and advanced manipulation techniques.",
  keywords: [
    "javascript object methods",
    "object.keys object.values",
    "object.entries object.assign",
    "object.freeze object.seal",
    "object manipulation",
    "javascript built-in methods",
    "object utilities",
    "property enumeration methods",
    "object cloning copying",
    "object freezing sealing"
  ],
  openGraph: {
    title: "JavaScript Object Methods - Complete Guide",
    description: "Master JavaScript object methods with comprehensive guide covering Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, and advanced manipulation techniques.",
    url: "/javascript/objects/methods",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Methods Guide",
    description: "Master JavaScript object methods with comprehensive guide covering Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, and advanced manipulation techniques.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/methods" },
};

const methodsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object Methods - Complete Guide",
  "description": "Master JavaScript object methods with comprehensive guide covering Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, and advanced manipulation techniques.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectMethodsPage() {
  return (
    <>
      <Script id="methods-schema" type="application/ld+json">
        {JSON.stringify(methodsSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object Methods: Complete Guide to Built-in Object Utilities
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          JavaScript provides powerful built-in methods for object manipulation, property enumeration,
          cloning, and control. Mastering these methods enables efficient object handling and data transformation.
          This comprehensive guide covers all essential Object methods with practical examples and performance considerations.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Property Enumeration Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.keys() - Get Object Keys</h3>
          <p className="text-slate-700 mb-4">
            Returns an array of a given object's own enumerable property names.
          </p>

          <CodeExample
            title="Object.keys() Usage and Examples"
            code={`// Basic usage
const user = {
  name: 'John',
  age: 30,
  city: 'New York',
  isActive: true
};

console.log(Object.keys(user)); // ['name', 'age', 'city', 'isActive']

// Empty object
console.log(Object.keys({})); // []

// Object with non-enumerable properties
const obj = Object.create({}, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});

console.log(Object.keys(obj)); // ['visible']

// Array-like object
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Object.keys(arrayLike)); // ['0', '1', '2', 'length']

// Practical examples

// 1. Check if object has any properties
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

// 2. Get object size
function getObjectSize(obj) {
  return Object.keys(obj).length;
}

console.log(getObjectSize(user)); // 4

// 3. Iterate over object properties
Object.keys(user).forEach(key => {
  console.log(\`\${key}: \${user[key]}\`);
});
// Output:
// name: John
// age: 30
// city: New York
// isActive: true

// 4. Transform object keys
const transformedKeys = Object.keys(user).map(key =>
  key.toUpperCase()
);
console.log(transformedKeys); // ['NAME', 'AGE', 'CITY', 'ISACTIVE']

// 5. Filter object properties
const filteredKeys = Object.keys(user).filter(key =>
  typeof user[key] === 'string'
);
console.log(filteredKeys); // ['name', 'city']

// 6. Sort object keys
const sortedKeys = Object.keys(user).sort();
console.log(sortedKeys); // ['age', 'city', 'isActive', 'name']

// 7. Check for specific key patterns
const hasIdKey = Object.keys(user).some(key => key.includes('Id'));
console.log(hasIdKey); // false

// 8. Create key-value pairs array
const keyValuePairs = Object.keys(user).map(key => [key, user[key]]);
console.log(keyValuePairs);
// [['name', 'John'], ['age', 30], ['city', 'New York'], ['isActive', true]]

// Performance comparison with for...in
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('Object.keys');
const keys = Object.keys(largeObj);
console.timeEnd('Object.keys');

console.time('for-in');
const forInKeys = [];
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) {
    forInKeys.push(key);
  }
}
console.timeEnd('for-in');

// Object.keys is generally faster and more reliable

// Edge cases
console.log(Object.keys(null)); // TypeError: Cannot convert undefined or null to object
console.log(Object.keys(undefined)); // TypeError

// Safe version
function safeKeys(obj) {
  if (obj == null) return [];
  return Object.keys(obj);
}

console.log(safeKeys(null)); // []
console.log(safeKeys({ a: 1 })); // ['a']`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.values() - Get Object Values</h3>
          <p className="text-slate-700 mb-4">
            Returns an array of a given object's own enumerable property values.
          </p>

          <CodeExample
            title="Object.values() Usage and Examples"
            code={`// Basic usage
const user = {
  name: 'John',
  age: 30,
  city: 'New York',
  isActive: true
};

console.log(Object.values(user)); // ['John', 30, 'New York', true]

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

// Practical examples

// 1. Sum all numeric values
const scores = { math: 85, science: 92, history: 78 };
const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore); // 255

// 2. Find maximum value
const temperatures = { monday: 20, tuesday: 25, wednesday: 18, thursday: 22 };
const maxTemp = Math.max(...Object.values(temperatures));
console.log(maxTemp); // 25

// 3. Check if all values are truthy
const config = { enabled: true, debug: false, verbose: true };
const allEnabled = Object.values(config).every(Boolean);
console.log(allEnabled); // false

// 4. Count occurrences of each value
const fruits = { apple: 'red', banana: 'yellow', cherry: 'red', grape: 'purple' };
const colorCount = Object.values(fruits).reduce((count, color) => {
  count[color] = (count[color] || 0) + 1;
  return count;
}, {});
console.log(colorCount); // { red: 2, yellow: 1, purple: 1 }

// 5. Filter values by type
const data = { a: 1, b: 'hello', c: true, d: [1, 2], e: { key: 'value' } };
const strings = Object.values(data).filter(value => typeof value === 'string');
console.log(strings); // ['hello']

// 6. Transform values
const prices = { coffee: 3.50, tea: 2.75, juice: 4.00 };
const discountedPrices = Object.values(prices).map(price => price * 0.9);
console.log(discountedPrices); // [3.15, 2.475, 3.6]

// 7. Check for specific value
const hasAdmin = Object.values(user).includes('admin');
console.log(hasAdmin); // false

// 8. Get unique values
const duplicates = { a: 1, b: 2, c: 1, d: 3, e: 2 };
const uniqueValues = [...new Set(Object.values(duplicates))];
console.log(uniqueValues); // [1, 2, 3]

// 9. Calculate statistics
const numbers = { x: 10, y: 20, z: 30 };
const stats = {
  sum: Object.values(numbers).reduce((a, b) => a + b, 0),
  avg: Object.values(numbers).reduce((a, b) => a + b, 0) / Object.values(numbers).length,
  min: Math.min(...Object.values(numbers)),
  max: Math.max(...Object.values(numbers))
};
console.log(stats); // { sum: 60, avg: 20, min: 10, max: 30 }

// 10. Deep value extraction
function getAllValues(obj, maxDepth = 3, currentDepth = 0) {
  if (currentDepth >= maxDepth) return [obj];

  if (typeof obj !== 'object' || obj === null) return [obj];

  const values = [];
  for (const value of Object.values(obj)) {
    values.push(...getAllValues(value, maxDepth, currentDepth + 1));
  }
  return values;
}

const nested = { a: 1, b: { c: 2, d: { e: 3 } }, f: [4, 5] };
console.log(getAllValues(nested)); // [1, 2, 3, 4, 5]

// Performance considerations
const largeObj = {};
for (let i = 0; i < 100000; i++) {
  largeObj[\`key\${i}\`] = Math.random();
}

console.time('Object.values');
const values = Object.values(largeObj);
console.timeEnd('Object.values');

// Object.values() is optimized and very fast

// Edge cases
console.log(Object.values({})); // []
console.log(Object.values(null)); // TypeError
console.log(Object.values(undefined)); // TypeError

// Safe version
function safeValues(obj) {
  if (obj == null) return [];
  return Object.values(obj);
}`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.entries() - Get Key-Value Pairs</h3>
          <p className="text-slate-700 mb-4">
            Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
          </p>

          <CodeExample
            title="Object.entries() Usage and Examples"
            code={`// Basic usage
const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(Object.entries(user));
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Converting back to object
const entries = Object.entries(user);
const reconstructed = Object.fromEntries(entries);
console.log(reconstructed); // { name: 'John', age: 30, city: 'New York' }

// Practical examples

// 1. Transform object properties
const original = { firstName: 'John', lastName: 'Doe', age: 30 };
const transformed = Object.fromEntries(
  Object.entries(original).map(([key, value]) => [
    key.replace(/([A-Z])/g, '_$1').toLowerCase(),
    typeof value === 'string' ? value.toUpperCase() : value
  ])
);
console.log(transformed); // { first_name: 'JOHN', last_name: 'DOE', age: 30 }

// 2. Filter object entries
const data = { a: 1, b: 2, c: 3, d: 4 };
const filtered = Object.fromEntries(
  Object.entries(data).filter(([key, value]) => value > 2)
);
console.log(filtered); // { c: 3, d: 4 }

// 3. Rename object keys
const oldKeys = { first_name: 'John', last_name: 'Doe' };
const newKeys = Object.fromEntries(
  Object.entries(oldKeys).map(([key, value]) => [
    key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()),
    value
  ])
);
console.log(newKeys); // { firstName: 'John', lastName: 'Doe' }

// 4. Create Map from object
const obj = { a: 1, b: 2, c: 3 };
const map = new Map(Object.entries(obj));
console.log(map.get('a')); // 1
console.log(map.has('b')); // true

// 5. Iterate with destructuring
Object.entries(user).forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});

// 6. Group entries by type
const mixed = { name: 'John', age: 30, active: true, scores: [85, 92] };
const grouped = Object.entries(mixed).reduce((groups, [key, value]) => {
  const type = Array.isArray(value) ? 'array' : typeof value;
  if (!groups[type]) groups[type] = {};
  groups[type][key] = value;
  return groups;
}, {});

console.log(grouped);
// {
//   string: { name: 'John' },
//   number: { age: 30 },
//   boolean: { active: true },
//   array: { scores: [85, 92] }
// }

// 7. Sort object by values
const unsorted = { z: 3, a: 1, b: 2 };
const sorted = Object.fromEntries(
  Object.entries(unsorted).sort(([, a], [, b]) => a - b)
);
console.log(sorted); // { a: 1, b: 2, z: 3 }

// 8. Create query string from object
const params = { page: 1, limit: 10, sort: 'name' };
const queryString = Object.entries(params)
  .map(([key, value]) => \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`)
  .join('&');
console.log(queryString); // "page=1&limit=10&sort=name"

// 9. Deep clone with entries
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
  );
}

const original2 = { a: 1, b: { c: 2 }, d: [3, 4] };
const cloned = deepClone(original2);
console.log(cloned); // { a: 1, b: { c: 2 }, d: [3, 4] }
console.log(cloned.b === original2.b); // false (deep clone)

// 10. Validate object structure
function validateObject(obj, schema) {
  return Object.entries(schema).every(([key, validator]) => {
    const value = obj[key];
    return validator(value);
  });
}

const user2 = { name: 'John', age: 30, email: 'john@example.com' };
const schema = {
  name: (v) => typeof v === 'string' && v.length > 0,
  age: (v) => typeof v === 'number' && v >= 0,
  email: (v) => typeof v === 'string' && v.includes('@')
};

console.log(validateObject(user2, schema)); // true

// 11. Object comparison
function shallowEqual(obj1, obj2) {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  if (entries1.length !== entries2.length) return false;

  return entries1.every(([key, value]) => obj2[key] === value);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };

console.log(shallowEqual(obj1, obj2)); // true
console.log(shallowEqual(obj1, obj3)); // false

// 12. Merge objects with custom logic
function mergeObjects(target, source, mergeFn = (a, b) => b) {
  return Object.fromEntries(
    [...Object.entries(target), ...Object.entries(source)]
      .reduce((map, [key, value]) => {
        if (map.has(key)) {
          map.set(key, mergeFn(map.get(key), value));
        } else {
          map.set(key, value);
        }
        return map;
      }, new Map())
  );
}

const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark', fontSize: 14 };
const merged = mergeObjects(defaults, userPrefs);
console.log(merged); // { theme: 'dark', lang: 'en', fontSize: 14 }

// Performance and edge cases
console.log(Object.entries({})); // []
console.log(Object.entries(null)); // TypeError

function safeEntries(obj) {
  if (obj == null) return [];
  return Object.entries(obj);
}

console.log(safeEntries(null)); // []`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Object Manipulation Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.assign() - Copy Properties</h3>
          <p className="text-slate-700 mb-4">
            Copies the values of all enumerable own properties from one or more source objects to a target object.
          </p>

          <CodeExample
            title="Object.assign() Usage and Examples"
            code={`// Basic usage - shallow copy
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);

console.log(result); // { a: 1, b: 2, c: 3 }
console.log(target === result); // true (modifies target)

// Multiple sources
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
Object.assign(obj1, obj2, obj3);
console.log(obj1); // { a: 1, b: 2, c: 3 }

// Without modifying target - create new object
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: 2 }
console.log(copy === original); // false

// Practical examples

// 1. Default options merging
function createConfig(options) {
  const defaults = {
    theme: 'light',
    language: 'en',
    timeout: 5000,
    retries: 3
  };

  return Object.assign({}, defaults, options);
}

const config = createConfig({ theme: 'dark', timeout: 10000 });
console.log(config);
// { theme: 'dark', language: 'en', timeout: 10000, retries: 3 }

// 2. Object cloning
function shallowClone(obj) {
  return Object.assign({}, obj);
}

const original = { a: 1, b: { c: 2 } };
const cloned = shallowClone(original);
console.log(cloned); // { a: 1, b: { c: 2 } }

// But nested objects are shared!
cloned.a = 999;
console.log(original.a); // 1 (unchanged)

cloned.b.c = 999;
console.log(original.b.c); // 999 (changed!)

// 3. Deep cloning (simple version)
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const cloned = {};
  Object.keys(obj).forEach(key => {
    cloned[key] = deepClone(obj[key]);
  });
  return cloned;
}

const deepOriginal = { a: 1, b: { c: 2 }, d: [3, 4] };
const deepCloned = deepClone(deepOriginal);
deepCloned.b.c = 999;
console.log(deepOriginal.b.c); // 2 (unchanged)

// 4. Mixins and composition
const canEat = {
  eat(food) {
    console.log(\`Eating \${food}\`);
    this.energy += 10;
  }
};

const canSleep = {
  sleep(hours) {
    console.log(\`Sleeping for \${hours} hours\`);
    this.energy -= hours * 2;
  }
};

const canCode = {
  code(language) {
    console.log(\`Coding in \${language}\`);
    this.energy -= 5;
  }
};

function createProgrammer(name) {
  const programmer = { name, energy: 100 };
  return Object.assign(programmer, canEat, canSleep, canCode);
}

const dev = createProgrammer('Alice');
dev.code('JavaScript');
dev.eat('pizza');
console.log(dev.energy); // 105

// 5. Object extension
const baseConfig = { apiUrl: 'https://api.example.com' };
const devConfig = Object.assign({}, baseConfig, {
  debug: true,
  logLevel: 'verbose'
});
const prodConfig = Object.assign({}, baseConfig, {
  cache: true,
  compression: true
});

// 6. Property overriding
const base = { a: 1, b: 2 };
const override = { b: 99, c: 3 };
const merged = Object.assign({}, base, override);
console.log(merged); // { a: 1, b: 99, c: 3 }

// 7. Array of objects merging
const objects = [
  { a: 1 },
  { b: 2 },
  { c: 3 }
];

const mergedObj = Object.assign({}, ...objects);
console.log(mergedObj); // { a: 1, b: 2, c: 3 }

// 8. Prototype copying
function extend(child, parent) {
  child.prototype = Object.assign({}, parent.prototype);
  child.prototype.constructor = child;
}

// Usage with classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return 'Some sound';
  }
}

class Dog extends Animal {
  speak() {
    return 'Woof!';
  }
}

// Manual extension without extends
function createDog(name) {
  const dog = Object.assign(Object.create(Animal.prototype), {
    name,
    speak() {
      return 'Woof!';
    }
  });
  return dog;
}

// 9. Configuration builder pattern
class ConfigBuilder {
  constructor() {
    this.config = {};
  }

  setApiUrl(url) {
    Object.assign(this.config, { apiUrl: url });
    return this;
  }

  setTimeout(timeout) {
    Object.assign(this.config, { timeout });
    return this;
  }

  enableCache() {
    Object.assign(this.config, { cache: true });
    return this;
  }

  build() {
    return Object.assign({}, this.config);
  }
}

const builder = new ConfigBuilder();
const config2 = builder
  .setApiUrl('https://api.example.com')
  .setTimeout(5000)
  .enableCache()
  .build();

console.log(config2);
// { apiUrl: 'https://api.example.com', timeout: 5000, cache: true }

// 10. Object property validation and defaults
function validateAndAssign(target, source, validators = {}) {
  const result = Object.assign({}, target);

  Object.keys(source).forEach(key => {
    const value = source[key];
    const validator = validators[key];

    if (validator && !validator(value)) {
      throw new Error(\`Invalid value for \${key}: \${value}\`);
    }

    result[key] = value;
  });

  return result;
}

const baseUser = { role: 'user', active: false };
const validators = {
  age: (v) => typeof v === 'number' && v >= 0 && v <= 150,
  email: (v) => typeof v === 'string' && v.includes('@')
};

try {
  const user = validateAndAssign(baseUser, {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  }, validators);
  console.log(user);
} catch (error) {
  console.error(error.message);
}

// Performance considerations
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('Object.assign');
const copy = Object.assign({}, largeObj);
console.timeEnd('Object.assign');

// Object.assign is very fast for shallow copying

// Edge cases and gotchas
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { b: 3, c: 4 }; // b will override

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 3, c: 4 }

// Only enumerable properties are copied
const obj = Object.defineProperty({}, 'hidden', {
  value: 'secret',
  enumerable: false
});

const copy2 = Object.assign({}, obj);
console.log(copy2.hidden); // undefined (not copied)

// Primitive values are not copied
const primitive = Object.assign({}, 'hello');
console.log(primitive); // {} (empty object)

// null/undefined sources are ignored
const result2 = Object.assign({}, { a: 1 }, null, { b: 2 }, undefined);
console.log(result2); // { a: 1, b: 2 }

// Safe Object.assign
function safeAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Target cannot be null or undefined');
  }

  sources.forEach(source => {
    if (source != null) {
      Object.assign(target, source);
    }
  });

  return target;
}`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.freeze() and Object.seal()</h3>
          <p className="text-slate-700 mb-4">
            Control object mutability with freezing and sealing methods.
          </p>

          <CodeExample
            title="Object.freeze() and Object.seal() Usage"
            code={`// Object.freeze() - completely immutable
const frozen = Object.freeze({
  name: 'John',
  age: 30,
  address: { city: 'NYC' }
});

console.log(Object.isFrozen(frozen)); // true

// Cannot add properties
frozen.newProp = 'test'; // Fails silently in strict mode
console.log(frozen.newProp); // undefined

// Cannot delete properties
delete frozen.name; // Fails
console.log(frozen.name); // 'John'

// Cannot modify properties
frozen.age = 31; // Fails
console.log(frozen.age); // 30

// But nested objects are not frozen!
frozen.address.city = 'LA'; // Works!
console.log(frozen.address.city); // 'LA'

// Deep freeze function
function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

const deepFrozen = deepFreeze({
  name: 'John',
  address: { city: 'NYC' }
});

deepFrozen.address.city = 'LA'; // Fails
console.log(deepFrozen.address.city); // 'NYC'

// Object.seal() - prevents add/delete but allows modification
const sealed = Object.seal({
  name: 'John',
  age: 30
});

console.log(Object.isSealed(sealed)); // true

// Cannot add properties
sealed.newProp = 'test'; // Fails
console.log(sealed.newProp); // undefined

// Cannot delete properties
delete sealed.name; // Fails
console.log(sealed.name); // 'John'

// But can modify existing properties
sealed.age = 31; // Works
console.log(sealed.age); // 31

// Practical examples

// 1. Constants object
const CONSTANTS = Object.freeze({
  PI: 3.14159,
  E: 2.71828,
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER
});

// 2. Configuration that shouldn't change
const appConfig = Object.freeze({
  apiUrl: 'https://api.example.com',
  version: '1.0.0',
  features: Object.freeze(['auth', 'dashboard', 'reports'])
});

// 3. Immutable data structures
class ImmutableList {
  constructor(items = []) {
    this._items = Object.freeze([...items]);
  }

  get(index) {
    return this._items[index];
  }

  size() {
    return this._items.length;
  }

  // Return new instance for modifications
  add(item) {
    return new ImmutableList([...this._items, item]);
  }

  remove(index) {
    return new ImmutableList(this._items.filter((_, i) => i !== index));
  }
}

const list = new ImmutableList([1, 2, 3]);
const newList = list.add(4);
console.log(list.size()); // 3
console.log(newList.size()); // 4

// 4. Preventing accidental mutations
function createUser(data) {
  return Object.freeze({
    id: data.id,
    name: data.name,
    email: data.email,
    createdAt: new Date(),
    profile: Object.freeze({
      avatar: data.avatar,
      bio: data.bio
    })
  });
}

const user = createUser({
  id: 1,
  name: 'John',
  email: 'john@example.com',
  avatar: 'avatar.jpg',
  bio: 'Developer'
});

// All attempts to modify will fail
user.name = 'Jane'; // Fails
user.profile.bio = 'Designer'; // Fails

// 5. Sealed objects for controlled extension
function createPluginSystem() {
  const plugins = Object.seal({});

  return {
    register(name, plugin) {
      if (plugins[name]) {
        throw new Error(\`Plugin \${name} already exists\`);
      }
      plugins[name] = Object.freeze(plugin);
    },
    get(name) {
      return plugins[name];
    },
    list() {
      return Object.keys(plugins);
    }
  };
}

const pluginSystem = createPluginSystem();
pluginSystem.register('logger', { log: console.log });
pluginSystem.register('storage', { save: () => {} });

// Cannot add new properties to plugins object
// plugins.newPlugin = {}; // Would fail

// 6. Performance implications
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('freeze-large-object');
Object.freeze(largeObj);
console.timeEnd('freeze-large-object');

// Freezing has some performance cost but enables optimizations

// 7. Checking frozen/sealed status
function getObjectStatus(obj) {
  return {
    isFrozen: Object.isFrozen(obj),
    isSealed: Object.isSealed(obj),
    isExtensible: Object.isExtensible(obj),
    properties: Object.getOwnPropertyNames(obj).map(prop => ({
      name: prop,
      writable: Object.getOwnPropertyDescriptor(obj, prop).writable,
      configurable: Object.getOwnPropertyDescriptor(obj, prop).configurable
    }))
  };
}

const testObj = Object.freeze({ a: 1, b: 2 });
console.log(getObjectStatus(testObj));
// {
//   isFrozen: true,
//   isSealed: true,
//   isExtensible: false,
//   properties: [
//     { name: 'a', writable: false, configurable: false },
//     { name: 'b', writable: false, configurable: false }
//   ]
// }

// 8. Conditional freezing
function conditionalFreeze(obj, condition = true) {
  return condition ? Object.freeze(obj) : obj;
}

const devMode = process.env.NODE_ENV === 'development';
const config = conditionalFreeze({
  debug: true,
  apiUrl: 'http://localhost:3000'
}, !devMode);

// 9. Freeze in production
const createEnvironmentConfig = (env) => {
  const config = {
    apiUrl: env === 'production' ? 'https://api.prod.com' : 'http://localhost:3000',
    debug: env !== 'production',
    cache: env === 'production'
  };

  return env === 'production' ? Object.freeze(config) : config;
};

// 10. Preventing prototype pollution
const safeObj = Object.freeze({
  __proto__: null, // Prevent prototype pollution
  constructor: null,
  toString: null
});

// Attempting to pollute will fail
// safeObj.__proto__.polluted = true; // Fails

console.log(Object.isFrozen(safeObj)); // true`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Advanced Object Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.create() - Create with Prototype</h3>
          <p className="text-slate-700 mb-4">
            Creates a new object with the specified prototype object and properties.
          </p>

          <CodeExample
            title="Object.create() Usage and Examples"
            code={`// Basic usage
const animal = {
  type: 'animal',
  speak() {
    return 'Some sound';
  }
};

const dog = Object.create(animal);
dog.name = 'Buddy';
dog.breed = 'Golden Retriever';

console.log(dog.type); // 'animal' (inherited)
console.log(dog.speak()); // 'Some sound' (inherited)
console.log(dog.name); // 'Buddy' (own property)

// Setting prototype
console.log(Object.getPrototypeOf(dog) === animal); // true

// Object.create(null) - object without prototype
const pureObj = Object.create(null);
console.log(pureObj.toString); // undefined (no inherited methods)
console.log(Object.getPrototypeOf(pureObj)); // null

// With property descriptors
const person = Object.create(Object.prototype, {
  name: {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true
  }
});

console.log(person.name); // 'John'
console.log(person.age); // 30

// Practical examples

// 1. Classical inheritance pattern
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return 'Some sound';
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return 'Woof!';
};

const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name); // 'Buddy'
console.log(myDog.breed); // 'Golden Retriever'
console.log(myDog.speak()); // 'Woof!'

// 2. Mixin pattern
const canEat = {
  eat(food) {
    console.log(\`Eating \${food}\`);
    return this;
  }
};

const canSleep = {
  sleep(hours) {
    console.log(\`Sleeping for \${hours} hours\`);
    return this;
  }
};

function createCreature(name) {
  const creature = Object.create({
    ...canEat,
    ...canSleep,
    getName() {
      return name;
    }
  });

  return creature;
}

const cat = createCreature('Whiskers');
cat.eat('fish').sleep(8);

// 3. Prototype chain demonstration
const grandparent = { generation: 1 };
const parent = Object.create(grandparent);
parent.generation = 2;
const child = Object.create(parent);
child.generation = 3;

console.log(child.generation); // 3 (own property)
console.log(Object.getPrototypeOf(child).generation); // 2 (parent's property)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)).generation); // 1 (grandparent)

// 4. Property shadowing
const base = { value: 'base' };
const derived = Object.create(base);
derived.value = 'derived'; // Shadows the inherited property

console.log(derived.value); // 'derived'
console.log(Object.getPrototypeOf(derived).value); // 'base'

// 5. Method overriding and super calls
const vehicle = {
  move() {
    return 'Moving';
  }
};

const car = Object.create(vehicle);
car.move = function() {
  // Call parent method
  const parentResult = Object.getPrototypeOf(this).move.call(this);
  return parentResult + ' in a car';
};

console.log(car.move()); // 'Moving in a car'

// 6. Creating objects with specific prototypes
const eventEmitterProto = {
  listeners: {},

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },

  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(...args));
    }
  }
};

function createEventEmitter() {
  return Object.create(eventEmitterProto);
}

const emitter = createEventEmitter();
emitter.on('data', (data) => console.log('Received:', data));
emitter.emit('data', 'Hello World');

// 7. Immutable objects with prototype
function createImmutableObject(proto, properties) {
  const obj = Object.create(proto);

  // Add properties as non-writable
  Object.keys(properties).forEach(key => {
    Object.defineProperty(obj, key, {
      value: properties[key],
      writable: false,
      enumerable: true,
      configurable: false
    });
  });

  return obj;
}

const immutableUser = createImmutableObject(
  {
    getFullName() {
      return \`\${this.firstName} \${this.lastName}\`;
    }
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  }
);

console.log(immutableUser.getFullName()); // 'John Doe'
// immutableUser.age = 31; // Would fail

// 8. Prototype-based classes
const Shape = {
  init(width, height) {
    this.width = width;
    this.height = height;
    return this;
  },

  area() {
    return this.width * this.height;
  }
};

const Rectangle = Object.create(Shape);
Rectangle.area = function() {
  return this.width * this.height;
};

const Square = Object.create(Rectangle);
Square.init = function(size) {
  return Shape.init.call(this, size, size);
};

const rect = Object.create(Rectangle).init(10, 5);
const square = Object.create(Square).init(7);

console.log(rect.area()); // 50
console.log(square.area()); // 49

// 9. Object.create for default properties
function createConfig(defaults) {
  return Object.create({
    get(key) {
      return this[key] !== undefined ? this[key] : defaults[key];
    },
    set(key, value) {
      this[key] = value;
    }
  });
}

const config = createConfig({ theme: 'light', lang: 'en' });
console.log(config.get('theme')); // 'light'
config.set('theme', 'dark');
console.log(config.get('theme')); // 'dark'

// 10. Performance considerations
console.time('Object.create');
for (let i = 0; i < 100000; i++) {
  const obj = Object.create(null);
}
console.timeEnd('Object.create');

// Object.create is fast but objects with prototypes have lookup overhead

// Edge cases
console.log(Object.create()); // {} (Object.prototype)
console.log(Object.getPrototypeOf(Object.create(null))); // null

// Creating object with specific constructor
function CustomConstructor() {}
const obj = Object.create(CustomConstructor.prototype);
console.log(obj.constructor === CustomConstructor); // true`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.getOwnPropertyDescriptor() and Object.defineProperty()</h3>
          <p className="text-slate-700 mb-4">
            Get and set property descriptors for fine-grained property control.
          </p>

          <CodeExample
            title="Property Descriptors Advanced Usage"
            code={`// Getting property descriptors
const obj = { name: 'John' };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
// { value: 'John', writable: true, enumerable: true, configurable: true }

// Defining properties with descriptors
Object.defineProperty(obj, 'age', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(obj.age); // 30
obj.age = 31; // Fails silently
console.log(obj.age); // 30

// Getters and setters
let _temperature = 20;

Object.defineProperty(obj, 'temperature', {
  get() {
    console.log('Getting temperature');
    return _temperature;
  },
  set(value) {
    console.log('Setting temperature to', value);
    if (value < -273.15) {
      throw new Error('Temperature cannot be below absolute zero');
    }
    _temperature = value;
  },
  enumerable: true,
  configurable: true
});

console.log(obj.temperature); // Getting temperature \n 20
obj.temperature = 25; // Setting temperature to 25
console.log(obj.temperature); // Getting temperature \n 25

// Multiple property definitions
Object.defineProperties(obj, {
  'firstName': {
    value: 'John',
    writable: true,
    enumerable: true
  },
  'lastName': {
    value: 'Doe',
    writable: true,
    enumerable: true
  },
  'fullName': {
    get() {
      return \`\${this.firstName} \${this.lastName}\`;
    },
    enumerable: true
  }
});

console.log(obj.fullName); // 'John Doe'

// Practical examples

// 1. Creating read-only properties
function createConstants(obj) {
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      value: obj[key],
      writable: false,
      enumerable: true,
      configurable: false
    });
  });
  return obj;
}

const constants = createConstants({
  PI: 3.14159,
  E: 2.71828,
  SPEED_OF_LIGHT: 299792458
});

// 2. Lazy loading properties
function createLazyObject(loader) {
  const cache = new Map();

  return new Proxy({}, {
    get(target, prop) {
      if (!cache.has(prop)) {
        console.log(\`Loading \${prop}...\`);
        const value = loader(prop);
        Object.defineProperty(target, prop, {
          value,
          enumerable: true,
          configurable: false
        });
        cache.set(prop, value);
      }
      return target[prop];
    }
  });
}

const lazyData = createLazyObject(key => \`Loaded \${key}: \${Date.now()}\`);
console.log(lazyData.users); // Loading users... \n "Loaded users: 1234567890"

// 3. Property validation
function createValidatedObject(schema) {
  const obj = {};

  Object.keys(schema).forEach(key => {
    const config = schema[key];

    Object.defineProperty(obj, key, {
      get() {
        return obj[\`_\${key}\`];
      },
      set(value) {
        if (config.validate && !config.validate(value)) {
          throw new Error(\`Invalid value for \${key}: \${value}\`);
        }
        obj[\`_\${key}\`] = config.transform ? config.transform(value) : value;
      },
      enumerable: true,
      configurable: true
    });
  });

  return obj;
}

const user = createValidatedObject({
  email: {
    validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    transform: v => v.toLowerCase()
  },
  age: {
    validate: v => typeof v === 'number' && v >= 0 && v <= 150
  }
});

user.email = 'JOHN@EXAMPLE.COM'; // Validated and transformed
user.age = 30; // Validated

// 4. Computed properties
const calculator = {};

Object.defineProperties(calculator, {
  a: { value: 0, writable: true, enumerable: true },
  b: { value: 0, writable: true, enumerable: true },
  sum: {
    get() { return this.a + this.b; },
    enumerable: true
  },
  product: {
    get() { return this.a * this.b; },
    enumerable: true
  }
});

calculator.a = 5;
calculator.b = 3;
console.log(calculator.sum); // 8
console.log(calculator.product); // 15

// 5. Property change tracking
function createObservable(target = {}) {
  const observers = new Map();

  return new Proxy(target, {
    set(obj, prop, value) {
      const oldValue = obj[prop];

      // Define property if it doesn't exist
      if (!obj.hasOwnProperty(prop)) {
        Object.defineProperty(obj, prop, {
          value,
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        obj[prop] = value;
      }

      // Notify observers
      const propObservers = observers.get(prop);
      if (propObservers) {
        propObservers.forEach(callback => callback(value, oldValue, prop));
      }

      return true;
    },

    get(obj, prop) {
      if (prop === 'subscribe') {
        return (propName, callback) => {
          if (!observers.has(propName)) {
            observers.set(propName, []);
          }
          observers.get(propName).push(callback);
        };
      }
      return obj[prop];
    }
  });
}

const observable = createObservable();
observable.subscribe('count', (newVal, oldVal) => {
  console.log(\`Count changed from \${oldVal} to \${newVal}\`);
});

observable.count = 5; // "Count changed from undefined to 5"

// 6. Private properties simulation
const privateStore = new WeakMap();

function createPrivateObject() {
  const obj = {};

  privateStore.set(obj, {
    secret: 'top secret',
    count: 0
  });

  Object.defineProperty(obj, 'secret', {
    get() {
      return privateStore.get(obj).secret;
    },
    set(value) {
      privateStore.get(obj).secret = value;
    },
    enumerable: false // Hidden from enumeration
  });

  Object.defineProperty(obj, 'increment', {
    value() {
      privateStore.get(obj).count++;
      return privateStore.get(obj).count;
    },
    enumerable: false
  });

  return obj;
}

const privateObj = createPrivateObject();
console.log(privateObj.secret); // 'top secret'
console.log(Object.keys(privateObj)); // [] (no enumerable properties)

// 7. Property existence checking
function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop) ||
         (prop in obj && Object.getOwnPropertyDescriptor(obj, prop) !== undefined);
}

const testObj = {};
Object.defineProperty(testObj, 'hidden', {
  value: 'secret',
  enumerable: false
});

console.log(hasProperty(testObj, 'hidden')); // true
console.log(Object.keys(testObj).includes('hidden')); // false

// 8. Dynamic property creation
function createDynamicProperties(obj, propertyConfigs) {
  Object.keys(propertyConfigs).forEach(prop => {
    const config = propertyConfigs[prop];

    Object.defineProperty(obj, prop, {
      get: config.get,
      set: config.set,
      enumerable: config.enumerable !== false,
      configurable: config.configurable !== false
    });
  });

  return obj;
}

const dynamicObj = createDynamicProperties({}, {
  fullName: {
    get() {
      return \`\${this.firstName || ''} \${this.lastName || ''}\`.trim();
    },
    set(value) {
      const parts = value.split(' ');
      this.firstName = parts[0] || '';
      this.lastName = parts.slice(1).join(' ') || '';
    }
  },
  isAdult: {
    get() {
      return (this.age || 0) >= 18;
    }
  }
});

dynamicObj.fullName = 'John Doe';
dynamicObj.age = 25;

console.log(dynamicObj.firstName); // 'John'
console.log(dynamicObj.lastName); // 'Doe'
console.log(dynamicObj.fullName); // 'John Doe'
console.log(dynamicObj.isAdult); // true

// 9. Property cloning with descriptors
function cloneWithDescriptors(obj) {
  const clone = {};
  const descriptors = Object.getOwnPropertyDescriptors(obj);

  Object.keys(descriptors).forEach(key => {
    Object.defineProperty(clone, key, descriptors[key]);
  });

  return clone;
}

const original = {};
Object.defineProperty(original, 'computed', {
  get() { return 'computed value'; },
  enumerable: true
});

const cloned = cloneWithDescriptors(original);
console.log(cloned.computed); // 'computed value'

// 10. Property metadata
function addPropertyMetadata(obj, prop, metadata) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop) || {
    value: obj[prop],
    writable: true,
    enumerable: true,
    configurable: true
  };

  // Store metadata in a separate object
  if (!obj._propertyMetadata) {
    Object.defineProperty(obj, '_propertyMetadata', {
      value: new Map(),
      enumerable: false,
      configurable: false
    });
  }

  obj._propertyMetadata.set(prop, metadata);

  // Re-define property with metadata
  Object.defineProperty(obj, prop, descriptor);
}

const smartObj = { name: 'John', age: 30 };
addPropertyMetadata(smartObj, 'name', { type: 'string', required: true });
addPropertyMetadata(smartObj, 'age', { type: 'number', min: 0, max: 150 });

console.log(smartObj._propertyMetadata.get('name')); // { type: 'string', required: true }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Object Method Performance and Best Practices</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance Optimization</h3>
          <p className="text-slate-700 mb-4">
            Understanding performance characteristics of different object methods and optimization techniques.
          </p>

          <CodeExample
            title="Object Methods Performance Optimization"
            code={`// 1. Object.keys() vs for...in vs Object.getOwnPropertyNames()
const obj = {};
for (let i = 0; i < 1000; i++) {
  obj[\`prop\${i}\`] = Math.random();
}

// Object.keys() - fastest for enumerable properties
console.time('Object.keys');
const keys1 = Object.keys(obj);
console.timeEnd('Object.keys');

// for...in with hasOwnProperty - slower
console.time('for-in');
const keys2 = [];
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    keys2.push(key);
  }
}
console.timeEnd('for-in');

// Object.getOwnPropertyNames() - includes non-enumerable
console.time('getOwnPropertyNames');
const keys3 = Object.getOwnPropertyNames(obj);
console.timeEnd('getOwnPropertyNames');

// Results: Object.keys() > for...in > getOwnPropertyNames()

// 2. Object.assign() vs spread vs manual copy
const source = {};
for (let i = 0; i < 1000; i++) {
  source[\`prop\${i}\`] = i;
}

// Object.assign()
console.time('Object.assign');
const copy1 = Object.assign({}, source);
console.timeEnd('Object.assign');

// Spread operator
console.time('spread');
const copy2 = { ...source };
console.timeEnd('spread');

// Manual copy
console.time('manual');
const copy3 = {};
for (const key in source) {
  if (source.hasOwnProperty(key)) {
    copy3[key] = source[key];
  }
}
console.timeEnd('manual');

// Results: Spread ≈ Object.assign() > Manual

// 3. Property access optimization
const testObj = { a: 1, b: 2, c: 3 };

// Direct access - fastest
console.time('direct');
for (let i = 0; i < 1000000; i++) {
  const val = testObj.a;
}
console.timeEnd('direct');

// Bracket notation - slower
console.time('bracket');
for (let i = 0; i < 1000000; i++) {
  const val = testObj['a'];
}
console.timeEnd('bracket');

// Variable bracket - slowest
console.time('variable-bracket');
const prop = 'a';
for (let i = 0; i < 1000000; i++) {
  const val = testObj[prop];
}
console.timeEnd('variable-bracket');

// 4. Object freezing performance impact
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('access-before-freeze');
for (let i = 0; i < 10000; i++) {
  const val = largeObj[\`prop\${i}\`];
}
console.timeEnd('access-before-freeze');

Object.freeze(largeObj);

console.time('access-after-freeze');
for (let i = 0; i < 10000; i++) {
  const val = largeObj[\`prop\${i}\`];
}
console.timeEnd('access-after-freeze');

// Freezing can actually improve performance in some cases

// 5. Memory-efficient object creation
// Bad: Creating many objects with same structure
const badObjects = [];
for (let i = 0; i < 10000; i++) {
  badObjects.push({
    id: i,
    name: \`Item \${i}\`,
    value: Math.random(),
    toString: function() { return this.name; },
    equals: function(other) { return this.id === other.id; }
  });
}

// Good: Use prototype for shared methods
const itemPrototype = {
  toString() { return this.name; },
  equals(other) { return this.id === other.id; }
};

const goodObjects = [];
for (let i = 0; i < 10000; i++) {
  const obj = Object.create(itemPrototype);
  obj.id = i;
  obj.name = \`Item \${i}\`;
  obj.value = Math.random();
  goodObjects.push(obj);
}

// Memory usage: goodObjects use much less memory

// 6. Object pooling for performance
class ObjectPool {
  constructor(createFn, resetFn) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
  }

  get() {
    return this.pool.length > 0 ? this.pool.pop() : this.createFn();
  }

  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}

const vectorPool = new ObjectPool(
  () => ({ x: 0, y: 0 }),
  (obj) => { obj.x = 0; obj.y = 0; }
);

const v1 = vectorPool.get();
v1.x = 10; v1.y = 20;
// Use v1...
vectorPool.release(v1); // Return to pool

// 7. Avoiding object creation in hot paths
let sharedObject = { count: 0, sum: 0 };

function addValue(value) {
  sharedObject.count++;
  sharedObject.sum += value;
}

// Better: Use parameters
function addValueOptimized(value, accumulator = { count: 0, sum: 0 }) {
  accumulator.count++;
  accumulator.sum += value;
  return accumulator;
}

// 8. Object property order optimization
// V8 optimizes objects with consistent property order
const consistentObjects = [];
for (let i = 0; i < 1000; i++) {
  consistentObjects.push({
    id: i,
    name: \`Item \${i}\`,
    value: Math.random(),
    active: true
  });
}

// Avoid changing property order
const inconsistentObjects = [];
for (let i = 0; i < 1000; i++) {
  if (i % 2 === 0) {
    inconsistentObjects.push({
      id: i,
      name: \`Item \${i}\`,
      value: Math.random(),
      active: true
    });
  } else {
    inconsistentObjects.push({
      name: \`Item \${i}\`,
      id: i, // Different order
      active: true,
      value: Math.random()
    });
  }
}

// 9. Using Maps for frequent additions/deletions
const frequentChanges = {};

// Bad: Adding/removing properties frequently
for (let i = 0; i < 1000; i++) {
  frequentChanges[\`key\${i}\`] = i;
  delete frequentChanges[\`key\${i - 10}\`];
}

// Good: Use Map
const map = new Map();
for (let i = 0; i < 1000; i++) {
  map.set(\`key\${i}\`, i);
  if (i >= 10) {
    map.delete(\`key\${i - 10}\`);
  }
}

// Maps are optimized for frequent changes

// 10. Object method caching
const expensiveOperations = {
  _cache: new Map(),

  expensiveCalculation(n) {
    const key = n;
    if (this._cache.has(key)) {
      return this._cache.get(key);
    }

    // Simulate expensive operation
    const result = Array.from({ length: n }, (_, i) => i)
      .reduce((sum, val) => sum + val, 0);

    this._cache.set(key, result);
    return result;
  }
};

console.log(expensiveOperations.expensiveCalculation(1000)); // First call: slow
console.log(expensiveOperations.expensiveCalculation(1000)); // Second call: fast (cached)`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Best Practices and Common Patterns</h3>
          <p className="text-slate-700 mb-4">
            Essential best practices for working with object methods in production code.
          </p>

          <CodeExample
            title="Object Methods Best Practices"
            code={`// 1. Always check for null/undefined before using object methods
function safeObjectKeys(obj) {
  return obj != null ? Object.keys(obj) : [];
}

function safeObjectAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Target cannot be null or undefined');
  }

  return Object.assign(target, ...sources.filter(source => source != null));
}

// 2. Use Object.hasOwnProperty for property existence
const obj = { prop: 'value' };

// Good
console.log(obj.hasOwnProperty('prop')); // true
console.log(Object.prototype.hasOwnProperty.call(obj, 'prop')); // Safe for any object

// Avoid
console.log('prop' in obj); // Includes prototype chain
console.log(obj.prop !== undefined); // Fails for falsy values

// 3. Prefer Object.keys/values/entries over for...in
const data = { a: 1, b: 2, c: 3 };

// Good
Object.keys(data).forEach(key => {
  console.log(key, data[key]);
});

// Avoid
for (const key in data) {
  console.log(key, data[key]); // May include prototype properties
}

// 4. Use Object.assign() for shallow copying
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);

// Good for shallow copy
console.log(copy.a); // 1
console.log(copy.b === original.b); // true (shared reference)

// For deep copy, use structuredClone (modern) or implement deep clone
const deepCopy = structuredClone ? structuredClone(original) : JSON.parse(JSON.stringify(original));

// 5. Use Object.freeze() for constants
const CONFIG = Object.freeze({
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000,
  FEATURES: Object.freeze(['auth', 'cache', 'retry'])
});

// 6. Prefer Map over objects for complex keys
const map = new Map();
const objKey = { id: 1 };

// Good
map.set(objKey, 'value');
console.log(map.get(objKey)); // 'value'

// Avoid
const regularObj = {};
// regularObj[objKey] = 'value'; // Key becomes '[object Object]'

// 7. Use Object.create() for inheritance
const animal = {
  speak() { return 'Some sound'; }
};

const dog = Object.create(animal);
dog.speak = function() { return 'Woof!'; };

// Good for prototypal inheritance
console.log(dog.speak()); // 'Woof!'

// 8. Use property descriptors for advanced control
const controlledObj = {};

Object.defineProperty(controlledObj, 'readOnlyProp', {
  value: 'constant',
  writable: false,
  enumerable: true,
  configurable: false
});

// 9. Avoid modifying Object.prototype
// Bad
Object.prototype.customMethod = function() { return 'custom'; };

// Good - use composition or classes
class CustomObject {
  customMethod() { return 'custom'; }
}

// 10. Use WeakMap for private data
const privateData = new WeakMap();

class PrivateClass {
  constructor(secret) {
    privateData.set(this, { secret });
  }

  getSecret() {
    return privateData.get(this).secret;
  }
}

// 11. Prefer const for object declarations
// Good
const config = { url: 'https://example.com' };
config.timeout = 5000; // OK, modifying properties

// Avoid
let config2 = { url: 'https://example.com' };
config2 = { url: 'https://other.com' }; // Reassignment

// 12. Use destructuring for multiple property access
function processUser(user) {
  const { name, age, email = 'N/A' } = user;
  return \`\${name} (\${age}) - \${email}\`;
}

// 13. Use optional chaining for safe property access
const data = { user: { profile: { name: 'John' } } };
console.log(data?.user?.profile?.name); // 'John'
console.log(data?.admin?.profile?.name); // undefined

// 14. Avoid using objects as maps with arbitrary keys
// Bad for numeric keys
const obj = { 1: 'one', 2: 'two' };
console.log(Object.keys(obj)); // ['1', '2'] (string keys)

// Good for numeric keys
const map = new Map([[1, 'one'], [2, 'two']]);
console.log(map.get(1)); // 'one'

// 15. Use Object.is() for precise equality
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(0 === -0); // true
console.log(NaN === NaN); // false

// 16. Prefer Object.fromEntries() over manual object creation
const entries = [['a', 1], ['b', 2], ['c', 3]];
const objFromEntries = Object.fromEntries(entries);

// Better than manual creation
const manualObj = {};
entries.forEach(([key, value]) => {
  manualObj[key] = value;
});

// 17. Use Object.seal() to prevent property addition/deletion
const sealedObj = Object.seal({ a: 1, b: 2 });
sealedObj.c = 3; // Fails
delete sealedObj.a; // Fails
sealedObj.a = 10; // OK

// 18. Avoid deep nesting - use flat structures
// Bad
const badStructure = {
  user: {
    profile: {
      personal: {
        name: 'John',
        address: {
          street: '123 Main St'
        }
      }
    }
  }
};

// Good
const goodStructure = {
  userName: 'John',
  userStreet: '123 Main St'
};

// Or use classes/objects for organization
class User {
  constructor() {
    this.profile = new Profile();
  }
}

class Profile {
  constructor() {
    this.personal = new Personal();
  }
}

// 19. Use Symbols for unique property keys
const PRIVATE_KEY = Symbol('private');
const INTERNAL_KEY = Symbol('internal');

const objWithSymbols = {
  public: 'visible',
  [PRIVATE_KEY]: 'hidden',
  [INTERNAL_KEY]: 'internal'
};

console.log(Object.keys(objWithSymbols)); // ['public']
console.log(Object.getOwnPropertySymbols(objWithSymbols)); // [Symbol(private), Symbol(internal)]

// 20. Document object structures with JSDoc
/**
 * @typedef {Object} UserConfig
 * @property {string} apiUrl - The API endpoint URL
 * @property {number} timeout - Request timeout in milliseconds
 * @property {boolean} debug - Enable debug mode
 */

/**
 * Creates a user configuration object
 * @param {Partial<UserConfig>} config - Partial configuration
 * @returns {UserConfig} Complete configuration
 */
function createUserConfig(config = {}) {
  return Object.assign({
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    debug: false
  }, config);
}`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            JavaScript object methods provide powerful tools for property enumeration, object manipulation,
            and control. Understanding these methods enables efficient and maintainable code.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Object Methods Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Property Enumeration</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li><code>Object.keys()</code> - Get enumerable property names</li>
                  <li><code>Object.values()</code> - Get enumerable property values</li>
                  <li><code>Object.entries()</code> - Get key-value pairs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Object Manipulation</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li><code>Object.assign()</code> - Copy/merge properties</li>
                  <li><code>Object.create()</code> - Create with prototype</li>
                  <li><code>Object.freeze()</code> - Make immutable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Property Control</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li><code>Object.defineProperty()</code> - Define property descriptor</li>
                  <li><code>Object.getOwnPropertyDescriptor()</code> - Get property descriptor</li>
                  <li><code>Object.seal()</code> - Prevent add/delete</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Utility Methods</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li><code>Object.is()</code> - Precise equality check</li>
                  <li><code>Object.fromEntries()</code> - Create from entries</li>
                  <li><code>Object.getPrototypeOf()</code> - Get prototype</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand object methods, explore related topics:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Object Destructuring:</strong> Extract properties with modern syntax</li>
              <li><strong>Optional Chaining:</strong> Safe property access with `?.`</li>
              <li><strong>Property Shorthand:</strong> Concise object property definitions</li>
              <li><strong>Advanced Patterns:</strong> Mixins, composition, and design patterns</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}