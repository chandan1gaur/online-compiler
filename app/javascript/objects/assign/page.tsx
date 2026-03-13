import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object.assign() - Complete Guide to Object Merging",
  description: "Master JavaScript Object.assign() method with comprehensive guide covering object merging, copying, inheritance, performance optimization, and practical applications.",
  keywords: [
    "javascript object.assign",
    "object merging",
    "object copying",
    "shallow copy",
    "object inheritance",
    "javascript object utilities",
    "property assignment",
    "object composition",
    "javascript object methods",
    "object.assign performance"
  ],
  openGraph: {
    title: "JavaScript Object.assign() - Complete Guide",
    description: "Master JavaScript Object.assign() method with comprehensive guide covering object merging, copying, inheritance, performance optimization, and practical applications.",
    url: "/javascript/objects/assign",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.assign() Guide",
    description: "Master JavaScript Object.assign() method with comprehensive guide covering object merging, copying, inheritance, performance optimization, and practical applications.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/assign" },
};

const assignSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object.assign() - Complete Guide to Object Merging",
  "description": "Master JavaScript Object.assign() method with comprehensive guide covering object merging, copying, inheritance, performance optimization, and practical applications.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectAssignPage() {
  return (
    <>
      <Script id="assign-schema" type="application/ld+json">
        {JSON.stringify(assignSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object.assign(): Complete Guide to Object Merging
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object.assign() is a powerful JavaScript method for copying and merging objects.
          This comprehensive guide covers shallow copying, property merging, inheritance patterns,
          performance optimization, and real-world applications.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Object.assign() Fundamentals</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Basic Syntax and Usage</h3>
          <p className="text-slate-700 mb-4">
            Object.assign() copies all enumerable own properties from one or more source objects
            to a target object and returns the modified target object.
          </p>

          <CodeExample
            title="Object.assign() Basic Usage"
            code={`// Basic syntax
const target = { a: 1 };
const source = { b: 2, c: 3 };

const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2, c: 3 }
console.log(target === result); // true (target is modified)

// Multiple sources
const target1 = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const source3 = { d: 4 };

Object.assign(target1, source1, source2, source3);
console.log(target1); // { a: 1, b: 2, c: 3, d: 4 }

// Empty target (creates new object)
const newObj = Object.assign({}, { x: 1, y: 2 });
console.log(newObj); // { x: 1, y: 2 }

// Property overriding
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };
const obj3 = { c: 30, d: 4 };

const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 20, c: 30, d: 4 }

// Later sources override earlier ones
console.log(Object.assign({}, { a: 1 }, { a: 2 }, { a: 3 })); // { a: 3 }

// Only enumerable own properties are copied
const sourceObj = Object.create({ inherited: 'value' }, {
  ownEnum: { value: 1, enumerable: true },
  ownNonEnum: { value: 2, enumerable: false }
});

const targetObj = {};
Object.assign(targetObj, sourceObj);
console.log(targetObj); // { ownEnum: 1 } (only enumerable own properties)

// Symbol properties are copied
const symbolKey = Symbol('secret');
const withSymbol = { [symbolKey]: 'symbol value', regular: 'regular value' };

const copied = Object.assign({}, withSymbol);
console.log(copied[symbolKey]); // 'symbol value'
console.log(copied.regular); // 'regular value'

// Primitive values as sources are ignored
const target2 = { a: 1 };
Object.assign(target2, null, undefined, 42, 'string');
console.log(target2); // { a: 1 } (primitives ignored)

// Getter properties
const sourceWithGetter = {
  get dynamic() { return Math.random(); },
  static: 'value'
};

const copiedWithGetter = Object.assign({}, sourceWithGetter);
console.log(copiedWithGetter.static); // 'value'
// Getter becomes a data property with the value at assignment time
console.log(typeof copiedWithGetter.dynamic); // 'number' (not 'function')

// Date objects
const originalDate = new Date();
const copiedDate = Object.assign({}, originalDate);
console.log(copiedDate instanceof Date); // false (becomes plain object)
console.log(copiedDate); // Plain object with date properties

// Arrays (treated as objects)
const originalArray = [1, 2, 3];
const copiedArray = Object.assign([], originalArray);
console.log(copiedArray); // [1, 2, 3]
console.log(Array.isArray(copiedArray)); // true

// Array with additional properties
const arrayWithProps = [1, 2, 3];
arrayWithProps.customProp = 'custom';

const copiedArrayWithProps = Object.assign([], arrayWithProps);
console.log(copiedArrayWithProps); // [1, 2, 3, customProp: 'custom']

// Functions
function originalFunc() { return 'original'; }
originalFunc.customProp = 'custom';

const copiedFunc = Object.assign(function() {}, originalFunc);
console.log(copiedFunc()); // undefined (function body not copied)
console.log(copiedFunc.customProp); // 'custom' (properties copied)

// RegExp objects
const originalRegex = /test/gi;
const copiedRegex = Object.assign({}, originalRegex);
console.log(copiedRegex instanceof RegExp); // false (becomes plain object)
console.log(copiedRegex); // { source: 'test', flags: 'gi', ... }

// Maps and Sets
const originalMap = new Map([['key', 'value']]);
const copiedMap = Object.assign({}, originalMap);
console.log(copiedMap instanceof Map); // false
console.log(copiedMap); // {} (Map internals not enumerable)

// Error objects
const originalError = new Error('test error');
const copiedError = Object.assign({}, originalError);
console.log(copiedError instanceof Error); // false
console.log(copiedError.message); // 'test error'`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Shallow Copy vs Deep Copy</h3>
          <p className="text-slate-700 mb-4">
            Understanding the shallow copy behavior of Object.assign() and when deep copying is needed.
          </p>

          <CodeExample
            title="Object.assign() Shallow Copy Behavior"
            code={`// Shallow copy demonstration
const original = {
  primitive: 'value',
  nested: { inner: 'nested value' },
  array: [1, 2, 3]
};

const shallowCopy = Object.assign({}, original);

// Modifying primitive property
shallowCopy.primitive = 'modified';
console.log(original.primitive); // 'value' (unchanged)
console.log(shallowCopy.primitive); // 'modified'

// Modifying nested object (affects both!)
shallowCopy.nested.inner = 'modified nested';
console.log(original.nested.inner); // 'modified nested' (AFFECTED!)
console.log(shallowCopy.nested.inner); // 'modified nested'

// Same reference
console.log(original.nested === shallowCopy.nested); // true

// Modifying array (affects both!)
shallowCopy.array.push(4);
console.log(original.array); // [1, 2, 3, 4] (AFFECTED!)
console.log(shallowCopy.array); // [1, 2, 3, 4]

// Deep copy alternatives
// 1. JSON.parse(JSON.stringify()) - simple but has limitations
function deepCopyJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const deepCopy1 = deepCopyJSON(original);
deepCopy1.nested.inner = 'deep copied';
console.log(original.nested.inner); // 'modified nested' (unchanged)
console.log(deepCopy1.nested.inner); // 'deep copied'

// Limitations of JSON approach
const withFunctions = {
  func: () => console.log('test'),
  date: new Date(),
  regex: /test/,
  undefined: undefined,
  symbol: Symbol('test')
};

try {
  const jsonCopy = deepCopyJSON(withFunctions);
  console.log(jsonCopy); // { date: string, regex: {} } - functions, undefined, symbols lost
} catch (error) {
  console.log('JSON copy failed:', error.message);
}

// 2. Recursive deep copy
function deepCopy(obj, visited = new WeakMap()) {
  // Handle primitives
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // Handle different object types
  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (obj instanceof Map) {
    const copy = new Map();
    visited.set(obj, copy);
    for (const [key, value] of obj) {
      copy.set(deepCopy(key, visited), deepCopy(value, visited));
    }
    return copy;
  }

  if (obj instanceof Set) {
    const copy = new Set();
    visited.set(obj, copy);
    for (const value of obj) {
      copy.add(deepCopy(value, visited));
    }
    return copy;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    visited.set(obj, copy);
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i], visited);
    }
    return copy;
  }

  // Handle plain objects
  const copy = {};
  visited.set(obj, copy);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key], visited);
    }
  }

  return copy;
}

const complexObj = {
  nested: { inner: 'value' },
  array: [1, { nested: 'in array' }],
  date: new Date(),
  regex: /test/gi
};

const deepCopy2 = deepCopy(complexObj);
deepCopy2.nested.inner = 'changed';
deepCopy2.array[1].nested = 'changed in array';

console.log(complexObj.nested.inner); // 'value' (unchanged)
console.log(complexObj.array[1].nested); // 'in array' (unchanged)
console.log(deepCopy2.date instanceof Date); // true
console.log(deepCopy2.regex instanceof RegExp); // true

// 3. Structured clone (modern browsers)
if (typeof structuredClone === 'function') {
  const structuredCopy = structuredClone(complexObj);
  console.log(structuredCopy.nested.inner); // 'value'
  console.log(structuredCopy.date instanceof Date); // true
}

// 4. Shallow copy with Object.assign() is usually sufficient
// When you know the structure and only need shallow copy
const config = {
  api: { url: 'https://api.example.com' },
  ui: { theme: 'dark' }
};

const userConfig = Object.assign({}, config);
// Safe to modify top-level properties
userConfig.ui = { theme: 'light' };
console.log(config.ui.theme); // 'dark' (unchanged)

// But nested properties share reference
userConfig.api.url = 'https://modified.com';
console.log(config.api.url); // 'https://modified.com' (AFFECTED!)

// Safe pattern: shallow copy known safe properties
const safeConfig = {
  api: Object.assign({}, config.api),
  ui: Object.assign({}, config.ui)
};

safeConfig.api.url = 'https://safe.com';
console.log(config.api.url); // 'https://api.example.com' (unchanged)

// 5. Deep merge vs shallow merge
function shallowMerge(target, ...sources) {
  return Object.assign({}, target, ...sources);
}

function deepMerge(target, ...sources) {
  const result = Object.assign({}, target);

  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    });
  });

  return result;
}

const objA = { a: { x: 1, y: 2 }, b: 3 };
const objB = { a: { y: 20, z: 3 }, c: 4 };

console.log(shallowMerge(objA, objB));
// { a: { y: 20, z: 3 }, b: 3, c: 4 } (nested object replaced)

console.log(deepMerge(objA, objB));
// { a: { x: 1, y: 20, z: 3 }, b: 3, c: 4 } (nested objects merged)

// 6. When to use shallow vs deep copy
// Use shallow copy (Object.assign) when:
// - Objects have only primitive values
// - You're creating a new reference but don't mind shared nested objects
// - Performance is critical
// - You know the object structure won't be deeply modified

// Use deep copy when:
// - Objects have nested objects/arrays that will be modified
// - You need complete isolation between original and copy
// - Objects contain complex types (Date, RegExp, etc.)
// - You need to handle circular references

// Performance comparison
const largeNestedObj = {};
for (let i = 0; i < 1000; i++) {
  largeNestedObj[\`prop\${i}\`] = {
    nested: { value: Math.random() },
    array: [1, 2, 3]
  };
}

console.time('Shallow copy');
const shallow = Object.assign({}, largeNestedObj);
console.timeEnd('Shallow copy');

console.time('Deep copy (limited)');
const deep = Object.keys(largeNestedObj).reduce((acc, key) => {
  acc[key] = Object.assign({}, largeNestedObj[key]);
  return acc;
}, {});
console.timeEnd('Deep copy (limited)');

// Shallow copy is much faster for large objects`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Comparison with Other Object Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.assign() vs Spread Syntax</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.assign() with ES6 spread syntax for object merging and copying.
          </p>

          <CodeExample
            title="Object.assign() vs Spread Syntax"
            code={`// Spread syntax for object copying
const original = { a: 1, b: 2, c: 3 };

// Object.assign() approach
const copy1 = Object.assign({}, original);

// Spread syntax approach
const copy2 = { ...original };

console.log(copy1); // { a: 1, b: 2, c: 3 }
console.log(copy2); // { a: 1, b: 2, c: 3 }
console.log(JSON.stringify(copy1) === JSON.stringify(copy2)); // true

// Spread syntax for merging
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };
const obj3 = { c: 30, d: 4 };

// Object.assign() approach
const merged1 = Object.assign({}, obj1, obj2, obj3);

// Spread syntax approach
const merged2 = { ...obj1, ...obj2, ...obj3 };

console.log(merged1); // { a: 1, b: 20, c: 30, d: 4 }
console.log(merged2); // { a: 1, b: 20, c: 30, d: 4 }

// Both are shallow copies
const nested = { data: { value: 1 } };
const spreadCopy = { ...nested };
const assignCopy = Object.assign({}, nested);

spreadCopy.data.value = 2;
console.log(nested.data.value); // 2 (both affected)
console.log(assignCopy.data.value); // 2 (both affected)

// Key differences:

// 1. Spread syntax is more concise
const simple = { ...obj1, extra: 'value' };

// 2. Spread syntax can be used in object literals
const dynamic = {
  ...obj1,
  computed: obj1.a + obj1.b,
  ...(obj1.c && { c: obj1.c })
};

// 3. Object.assign() can take any number of sources
const manySources = Object.assign({}, obj1, obj2, obj3, { e: 5 });

// Spread equivalent (more verbose)
const spreadMany = { ...obj1, ...obj2, ...obj3, e: 5 };

// 4. Object.assign() modifies the target if provided
const target = { existing: 'value' };
Object.assign(target, { new: 'property' });
console.log(target); // { existing: 'value', new: 'property' }

// Spread creates new object
const spreadTarget = { existing: 'value', ...{ new: 'property' } };
console.log(spreadTarget); // { existing: 'value', new: 'property' }

// 5. Spread syntax with computed property names
const key = 'dynamicKey';
const withComputed = {
  ...obj1,
  [key]: 'computed value'
};

// 6. Spread syntax for conditional spreading
const condition = true;
const conditional = {
  ...obj1,
  ...(condition && { extra: 'conditional' })
};

// 7. Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('Object.assign()');
for (let i = 0; i < 100; i++) {
  const copy = Object.assign({}, largeObj);
}
console.timeEnd('Object.assign()');

console.time('Spread syntax');
for (let i = 0; i < 100; i++) {
  const copy = { ...largeObj };
}
console.timeEnd('Spread syntax');

// Spread syntax is often faster in modern engines

// 8. Browser support
// Object.assign(): ES2015+ (IE 9+ with polyfill)
// Spread syntax: ES2018+ (not supported in IE)

// 9. Use cases for each:

// Use Object.assign() when:
// - You need to support older browsers
// - You have many sources to merge
// - You want to modify an existing object
// - You're working with dynamic source objects

// Use spread syntax when:
// - You want more concise, readable code
// - You're using modern JavaScript features
// - You need computed property names or conditionals
// - You're creating new objects in literals

// 10. Combining both approaches
// Use spread for most cases, Object.assign() for complex merging
const complex = {
  ...obj1,
  ...Object.assign({}, obj2, obj3), // Complex merge
  final: 'property'
};

// 11. Spread syntax limitations
// Cannot spread into existing object (creates new one)
const existing = { a: 1 };
const updated = { ...existing, b: 2 }; // New object

// Object.assign() can update existing
Object.assign(existing, { b: 2 }); // Modifies existing

// 12. Nested object spreading
const nestedObj = {
  user: { name: 'John', age: 30 },
  settings: { theme: 'dark' }
};

// Shallow copy with spread
const shallow = { ...nestedObj };

// Deep copy pattern
const deep = {
  ...nestedObj,
  user: { ...nestedObj.user },
  settings: { ...nestedObj.settings }
};

deep.user.name = 'Jane';
console.log(nestedObj.user.name); // 'John' (unchanged)

// 13. Array spreading vs Object.assign() for arrays
const arr = [1, 2, 3];

// Both work for arrays
const arrCopy1 = Object.assign([], arr);
const arrCopy2 = [...arr];

console.log(arrCopy1); // [1, 2, 3]
console.log(arrCopy2); // [1, 2, 3]

// But spread is more common for arrays
// Object.assign() is more common for objects

// 14. Prototype handling
const withProto = Object.create({ inherited: 'value' });
withProto.own = 'own value';

// Object.assign() copies only own properties
const assignCopy = Object.assign({}, withProto);
console.log(assignCopy); // { own: 'own value' }

// Spread syntax also copies only own properties
const spreadCopy = { ...withProto };
console.log(spreadCopy); // { own: 'own value' }

// To copy with prototype chain, use different approach
const withProtoCopy = Object.assign(Object.create(Object.getPrototypeOf(withProto)), withProto);

// 15. Symbol property handling
const withSymbols = {
  [Symbol('a')]: 'symbol a',
  [Symbol('b')]: 'symbol b',
  regular: 'regular'
};

const assignSymbolCopy = Object.assign({}, withSymbols);
const spreadSymbolCopy = { ...withSymbols };

console.log(Object.getOwnPropertySymbols(assignSymbolCopy)); // [Symbol(a), Symbol(b)]
console.log(Object.getOwnPropertySymbols(spreadSymbolCopy)); // [Symbol(a), Symbol(b)]

// Both handle symbols correctly

// 16. Method copying
const withMethods = {
  value: 42,
  getValue() { return this.value; },
  setValue(v) { this.value = v; }
};

const assignMethodCopy = Object.assign({}, withMethods);
const spreadMethodCopy = { ...withMethods };

// Methods are copied but lose their original context
console.log(assignMethodCopy.getValue()); // 42
console.log(spreadMethodCopy.getValue()); // 42

// But 'this' context is lost in copied methods
assignMethodCopy.setValue(100);
console.log(assignMethodCopy.getValue()); // 100 (works because copied)

const boundCopy = {
  ...withMethods,
  getValue: withMethods.getValue.bind(withMethods)
};

// 17. Best practices
// Prefer spread syntax for simple operations
const simpleMerge = { ...obj1, ...obj2 };

// Use Object.assign() for complex merging or when you need to modify target
const complexMerge = Object.assign({}, obj1, obj2, obj3);

// Use spread for object creation with additional properties
const enhanced = {
  ...baseConfig,
  environment: 'production',
  timestamp: Date.now()
};

// Use Object.assign() when working with classes or constructors
class MyClass {
  constructor(props) {
    Object.assign(this, props);
  }
}

const instance = new MyClass({ a: 1, b: 2 });
console.log(instance); // MyClass { a: 1, b: 2 }`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.assign() vs Manual Property Copying</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.assign() with manual property copying approaches.
          </p>

          <CodeExample
            title="Object.assign() vs Manual Property Copying"
            code={`// Manual property copying (old way)
const source = { a: 1, b: 2, c: 3 };
const target = {};

// Manual approach
for (const key in source) {
  if (source.hasOwnProperty(key)) {
    target[key] = source[key];
  }
}

console.log(target); // { a: 1, b: 2, c: 3 }

// Object.assign() approach
const target2 = Object.assign({}, source);
console.log(target2); // { a: 1, b: 2, c: 3 }

// They produce identical results
console.log(JSON.stringify(target) === JSON.stringify(target2)); // true

// Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('Manual copy');
const manualCopy = {};
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) {
    manualCopy[key] = largeObj[key];
  }
}
console.timeEnd('Manual copy');

console.time('Object.assign()');
const assignCopy = Object.assign({}, largeObj);
console.timeEnd('Object.assign()');

// Object.assign() is optimized and usually faster

// When manual copying might be necessary:
// 1. When you need to transform values during copying
const sourceObj = { a: 1, b: 2, c: 3 };

// Manual with transformation
const transformed = {};
for (const key in sourceObj) {
  if (sourceObj.hasOwnProperty(key)) {
    transformed[key] = sourceObj[key] * 2;
  }
}
console.log(transformed); // { a: 2, b: 4, c: 6 }

// With Object.assign() + Object.entries()
const transformed2 = Object.fromEntries(
  Object.entries(sourceObj).map(([key, value]) => [key, value * 2])
);
console.log(transformed2); // { a: 2, b: 4, c: 6 }

// 2. When you need to filter properties during copying
const filtered = {};
for (const key in sourceObj) {
  if (sourceObj.hasOwnProperty(key) && sourceObj[key] > 1) {
    filtered[key] = sourceObj[key];
  }
}
console.log(filtered); // { b: 2, c: 3 }

// With Object.assign() + Object.entries()
const filtered2 = Object.fromEntries(
  Object.entries(sourceObj).filter(([, value]) => value > 1)
);
console.log(filtered2); // { b: 2, c: 3 }

// 3. When you need conditional logic
const conditional = {};
for (const key in sourceObj) {
  if (sourceObj.hasOwnProperty(key)) {
    const value = sourceObj[key];
    if (key === 'a') {
      conditional[key] = value + 10;
    } else if (value % 2 === 0) {
      conditional[key] = value;
    } else {
      conditional[key] = value * 3;
    }
  }
}
console.log(conditional); // { a: 11, b: 2, c: 9 }

// 4. When working with prototype chains
function Animal(name) {
  this.name = name;
}

Animal.prototype.species = 'Animal';

const dog = new Animal('Buddy');
dog.breed = 'Golden Retriever';

// Manual copying can include inherited properties
const manualWithInherited = {};
for (const key in dog) {
  manualWithInherited[key] = dog[key];
}
console.log(manualWithInherited); // { name: 'Buddy', breed: 'Golden Retriever', species: 'Animal' }

// Object.assign() only copies own properties
const assignCopy2 = Object.assign({}, dog);
console.log(assignCopy2); // { name: 'Buddy', breed: 'Golden Retriever' }

// 5. When you need to handle special property types
const specialObj = {
  normal: 'value',
  getter: 'getter value',
  get dynamic() { return Math.random(); }
};

// Manual copying can handle getters differently
const manualSpecial = {};
for (const key in specialObj) {
  if (specialObj.hasOwnProperty(key)) {
    const descriptor = Object.getOwnPropertyDescriptor(specialObj, key);
    if (descriptor && descriptor.get) {
      // Handle getter
      Object.defineProperty(manualSpecial, key, descriptor);
    } else {
      manualSpecial[key] = specialObj[key];
    }
  }
}

// Object.assign() converts getters to data properties
const assignSpecial = Object.assign({}, specialObj);
console.log(typeof assignSpecial.dynamic); // 'number' (data property)
console.log(typeof manualSpecial.dynamic); // 'function' (getter preserved)

// 6. Memory considerations
// Manual copying allows for streaming/chunking
function copyInChunks(source, chunkSize = 1000) {
  const result = {};
  const keys = Object.keys(source);

  for (let i = 0; i < keys.length; i += chunkSize) {
    const chunk = keys.slice(i, i + chunkSize);
    chunk.forEach(key => {
      result[key] = source[key];
    });

    // Could yield control here in async context
    if (i % 10000 === 0) {
      console.log(\`Processed \${i} properties...\`);
    }
  }

  return result;
}

// 7. Error handling during copying
function safeManualCopy(source) {
  const result = {};

  try {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        // Handle potential errors during property access
        result[key] = source[key];
      }
    }
  } catch (error) {
    console.error('Error during manual copy:', error);
    // Could return partial result or throw
  }

  return result;
}

// Object.assign() handles errors internally
const safeAssignCopy = Object.assign({}, source);

// 8. Custom copying logic
function customCopy(source, options = {}) {
  const {
    includeInherited = false,
    filterFn = () => true,
    transformFn = (key, value) => value,
    deep = false
  } = options;

  const result = {};

  const processObj = (obj) => {
    for (const key in obj) {
      if ((includeInherited || obj.hasOwnProperty(key)) && filterFn(key, obj[key])) {
        const value = obj[key];
        result[key] = deep && value && typeof value === 'object'
          ? customCopy(value, { deep: true, filterFn, transformFn })
          : transformFn(key, value);
      }
    }
  };

  processObj(source);
  return result;
}

const customResult = customCopy(sourceObj, {
  filterFn: (key, value) => value > 1,
  transformFn: (key, value) => value * 10
});
console.log(customResult); // { b: 20, c: 30 }

// 9. Performance for different object sizes
function benchmarkCopying(obj) {
  console.time('Manual copy');
  const manual = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      manual[key] = obj[key];
    }
  }
  console.timeEnd('Manual copy');

  console.time('Object.assign()');
  const assign = Object.assign({}, obj);
  console.timeEnd('Object.assign()');

  console.time('Spread syntax');
  const spread = { ...obj };
  console.timeEnd('Spread syntax');
}

const smallObj = { a: 1, b: 2, c: 3 };
const mediumObj = {};
for (let i = 0; i < 100; i++) mediumObj[\`key\${i}\`] = i;

console.log('Small object:');
benchmarkCopying(smallObj);

console.log('Medium object:');
benchmarkCopying(mediumObj);

// 10. Use cases for manual copying:
// - When you need fine-grained control over copying process
// - When copying inherited properties
// - When transforming values during copy
// - When filtering properties during copy
// - When handling special property types (getters, setters)
// - When you need to handle errors during copying
// - When memory usage needs to be controlled precisely

// Use Object.assign() when:
// - Simple copying/merging is needed
// - Performance is critical
// - Code clarity is preferred
// - You're working with plain objects
// - Browser compatibility allows it

// 11. Migration patterns
// Old manual code
function oldCopyFunction(source) {
  const result = {};
  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      result[prop] = source[prop];
    }
  }
  return result;
}

// New Object.assign() code
function newCopyFunction(source) {
  return Object.assign({}, source);
}

// Or with spread
function modernCopyFunction(source) {
  return { ...source };
}

// 12. Advanced manual copying with descriptors
function deepCopyWithDescriptors(source) {
  const result = {};

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const descriptor = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(result, key, descriptor);
    }
  }

  return result;
}

const withDescriptor = {};
Object.defineProperty(withDescriptor, 'special', {
  value: 'special value',
  enumerable: true,
  configurable: false,
  writable: false
});

const descriptorCopy = deepCopyWithDescriptors(withDescriptor);
console.log(descriptorCopy.special); // 'special value'

// Try to modify (should fail)
try {
  descriptorCopy.special = 'modified';
  console.log('Modification succeeded');
} catch (error) {
  console.log('Modification failed:', error.message);
}

// 13. Streaming copy for large objects
function* streamingCopy(source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      yield [key, source[key]];
    }
  }
}

const streamed = {};
for (const [key, value] of streamingCopy(largeObj)) {
  streamed[key] = value;
  // Could break early or process in chunks
}

// 14. Copy with prototype preservation
function copyWithPrototype(source) {
  const result = Object.assign(
    Object.create(Object.getPrototypeOf(source)),
    source
  );
  return result;
}

const withProto = Object.create({ inherited: 'value' });
withProto.own = 'own value';

const protoCopy = copyWithPrototype(withProto);
console.log(protoCopy.own); // 'own value'
console.log(protoCopy.inherited); // 'value'

// 15. Safe copying with error recovery
function resilientCopy(source) {
  const result = {};

  for (const key in source) {
    try {
      if (source.hasOwnProperty(key)) {
        result[key] = source[key];
      }
    } catch (error) {
      console.warn(\`Failed to copy property \${key}: \${error.message}\`);
      // Continue with other properties
    }
  }

  return result;
}

// Object.assign() will throw on first error
const problematic = {};
Object.defineProperty(problematic, 'bad', {
  get() { throw new Error('Bad property'); },
  enumerable: true
});

try {
  Object.assign({}, problematic);
} catch (error) {
  console.log('Object.assign() failed:', error.message);
}

const resilientResult = resilientCopy(problematic);
console.log('Resilient copy succeeded:', Object.keys(resilientResult));`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Practical Applications</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object Merging and Configuration</h3>
          <p className="text-slate-700 mb-4">
            Using Object.assign() for configuration management, defaults merging, and object composition.
          </p>

          <CodeExample
            title="Configuration Management with Object.assign()"
            code={`// 1. Default configuration merging
const defaultConfig = {
  api: {
    url: 'https://api.example.com',
    timeout: 5000,
    retries: 3
  },
  ui: {
    theme: 'light',
    language: 'en'
  },
  features: {
    notifications: true,
    analytics: false
  }
};

const userConfig = {
  api: {
    timeout: 10000
  },
  ui: {
    theme: 'dark'
  },
  features: {
    analytics: true
  }
};

// Shallow merge (nested objects are replaced)
const shallowMerged = Object.assign({}, defaultConfig, userConfig);
console.log(shallowMerged.api.timeout); // 10000
console.log(shallowMerged.api.retries); // undefined (lost!)

// Deep merge for nested configuration
function deepMerge(target, source) {
  const result = Object.assign({}, target);

  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });

  return result;
}

const deepMerged = deepMerge(defaultConfig, userConfig);
console.log(deepMerged.api.timeout); // 10000
console.log(deepMerged.api.retries); // 3 (preserved!)
console.log(deepMerged.ui.theme); // 'dark'
console.log(deepMerged.features.analytics); // true

// 2. Environment-specific configuration
const baseConfig = {
  app: {
    name: 'MyApp',
    version: '1.0.0'
  },
  database: {
    host: 'localhost',
    port: 5432
  }
};

const environments = {
  development: {
    database: {
      host: 'dev-db.example.com',
      debug: true
    },
    logging: {
      level: 'debug'
    }
  },
  production: {
    database: {
      host: 'prod-db.example.com',
      ssl: true
    },
    logging: {
      level: 'error'
    }
  }
};

function createConfig(env = 'development') {
  return deepMerge(baseConfig, environments[env] || {});
}

const devConfig = createConfig('development');
const prodConfig = createConfig('production');

console.log(devConfig.database.host); // 'dev-db.example.com'
console.log(prodConfig.database.host); // 'prod-db.example.com'

// 3. Feature flags and toggles
const baseFeatures = {
  dashboard: true,
  reports: false,
  admin: false,
  api: true
};

const userRoleFeatures = {
  user: {
    dashboard: true,
    reports: true
  },
  admin: {
    dashboard: true,
    reports: true,
    admin: true
  },
  premium: {
    dashboard: true,
    reports: true,
    api: true,
    analytics: true
  }
};

function getUserFeatures(userRole, additionalFeatures = {}) {
  const roleFeatures = userRoleFeatures[userRole] || {};
  return Object.assign({}, baseFeatures, roleFeatures, additionalFeatures);
}

console.log(getUserFeatures('user'));
// { dashboard: true, reports: true, admin: false, api: true }

console.log(getUserFeatures('admin'));
// { dashboard: true, reports: true, admin: true, api: true }

console.log(getUserFeatures('premium'));
// { dashboard: true, reports: true, admin: false, api: true, analytics: true }

// 4. Plugin system configuration
const defaultPlugins = {
  logger: { enabled: true, level: 'info' },
  cache: { enabled: false },
  auth: { enabled: true, provider: 'local' }
};

function configurePlugins(pluginConfigs) {
  const config = Object.assign({}, defaultPlugins);

  Object.keys(pluginConfigs).forEach(pluginName => {
    if (config[pluginName]) {
      config[pluginName] = Object.assign({}, config[pluginName], pluginConfigs[pluginName]);
    } else {
      config[pluginName] = pluginConfigs[pluginName];
    }
  });

  return config;
}

const userPlugins = {
  logger: { level: 'debug' },
  cache: { enabled: true, ttl: 3600 },
  customPlugin: { enabled: true, setting: 'value' }
};

const finalPlugins = configurePlugins(userPlugins);
console.log(finalPlugins);

// 5. Theme configuration
const defaultTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745'
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
};

function createTheme(overrides = {}) {
  return deepMerge(defaultTheme, overrides);
}

const darkTheme = createTheme({
  colors: {
    primary: '#0056b3',
    secondary: '#495057'
  },
  custom: {
    shadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
});

console.log(darkTheme.colors.primary); // '#0056b3'
console.log(darkTheme.custom.shadow); // '0 2px 4px rgba(0,0,0,0.1)'

// 6. API client configuration
class APIClient {
  constructor(config = {}) {
    this.config = Object.assign({
      baseURL: 'https://api.example.com',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      },
      retries: 3,
      retryDelay: 1000
    }, config);

    // Deep merge headers
    if (config.headers) {
      this.config.headers = Object.assign({}, this.config.headers, config.headers);
    }
  }

  async request(endpoint, options = {}) {
    const requestConfig = Object.assign({}, this.config, options);
    requestConfig.headers = Object.assign({}, this.config.headers, options.headers || {});

    // Make request with merged config
    console.log('Request config:', requestConfig);
  }
}

const client = new APIClient({
  baseURL: 'https://myapi.com',
  headers: {
    'Authorization': 'Bearer token123'
  },
  timeout: 10000
});

// 7. Component props merging (React-like)
function mergeProps(defaultProps, userProps, contextProps = {}) {
  // Order: context -> user -> defaults (user overrides context, defaults lowest priority)
  return Object.assign({}, defaultProps, contextProps, userProps);
}

const defaultButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: () => {}
};

const userButtonProps = {
  variant: 'secondary',
  onClick: () => console.log('Clicked!')
};

const contextButtonProps = {
  disabled: true
};

const finalButtonProps = mergeProps(defaultButtonProps, userButtonProps, contextButtonProps);
console.log(finalButtonProps);
// { variant: 'secondary', size: 'medium', disabled: true, onClick: [Function] }

// 8. Internationalization configuration
const defaultMessages = {
  en: {
    welcome: 'Welcome',
    goodbye: 'Goodbye',
    error: 'Error occurred'
  },
  es: {
    welcome: 'Bienvenido',
    goodbye: 'Adiós',
    error: 'Ocurrió un error'
  }
};

function createLocaleMessages(locale, customMessages = {}) {
  const baseMessages = defaultMessages[locale] || defaultMessages.en;
  return Object.assign({}, baseMessages, customMessages);
}

const spanishMessages = createLocaleMessages('es', {
  welcome: 'Hola', // Override
  help: 'Ayuda'    // Add new
});

console.log(spanishMessages);
// { welcome: 'Hola', goodbye: 'Adiós', error: 'Ocurrió un error', help: 'Ayuda' }

// 9. Database connection configuration
const dbDefaults = {
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  ssl: false,
  poolSize: 10,
  connectionTimeout: 10000
};

function createConnectionConfig(overrides = {}) {
  const config = Object.assign({}, dbDefaults, overrides);

  // Handle special cases
  if (config.ssl && typeof config.ssl === 'boolean') {
    config.ssl = { rejectUnauthorized: false };
  }

  return config;
}

const prodDbConfig = createConnectionConfig({
  host: 'prod-db.example.com',
  ssl: true,
  poolSize: 50
});

console.log(prodDbConfig);

// 10. Build tool configuration
const buildDefaults = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: []
  },
  plugins: [],
  optimization: {
    minimize: false
  }
};

function createBuildConfig(overrides = {}) {
  const config = deepMerge(buildDefaults, overrides);

  // Add default rules if none provided
  if (config.module.rules.length === 0) {
    config.module.rules = [
      { test: /\\.js$/, use: 'babel-loader' }
    ];
  }

  return config;
}

const devBuildConfig = createBuildConfig({
  output: {
    filename: 'bundle.dev.js'
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map'
});

console.log(JSON.stringify(devBuildConfig, null, 2));`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Advanced Patterns and Techniques</h3>
          <p className="text-slate-700 mb-4">
            Advanced usage patterns combining Object.assign() with other JavaScript features.
          </p>

          <CodeExample
            title="Advanced Object.assign() Patterns"
            code={`// 1. Mixin pattern for object composition
const EventEmitter = {
  events: {},

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this;
  },

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(...args));
    }
    return this;
  }
};

const DataStore = {
  data: {},

  set(key, value) {
    this.data[key] = value;
    this.emit('change', key, value);
    return this;
  },

  get(key) {
    return this.data[key];
  }
};

function createStore() {
  return Object.assign({}, EventEmitter, DataStore);
}

const store = createStore();
store.on('change', (key, value) => {
  console.log(\`Data changed: \${key} = \${value}\`);
});

store.set('user', 'John'); // Triggers event

// 2. Prototype chain manipulation
function createObjectWithPrototype(proto, properties) {
  return Object.assign(Object.create(proto), properties);
}

const animalProto = {
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
};

const dog = createObjectWithPrototype(animalProto, {
  name: 'Buddy',
  breed: 'Golden Retriever',
  speak() {
    console.log(\`\${this.name} barks!\`);
  }
});

dog.speak(); // 'Buddy barks!'
console.log(dog.__proto__ === animalProto); // true

// 3. Immutable updates with Object.assign()
const state = {
  user: {
    name: 'John',
    profile: {
      age: 30,
      address: {
        city: 'NYC'
      }
    }
  },
  settings: {
    theme: 'light'
  }
};

// Immutable update pattern
function updateUserName(state, newName) {
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, {
      name: newName
    })
  });
}

function updateUserAge(state, newAge) {
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, {
      profile: Object.assign({}, state.user.profile, {
        age: newAge
      })
    })
  });
}

const state2 = updateUserName(state, 'Jane');
const state3 = updateUserAge(state2, 31);

console.log(state.user.name); // 'John' (unchanged)
console.log(state2.user.name); // 'Jane'
console.log(state3.user.profile.age); // 31

// 4. Object.assign() with proxies for reactive objects
function createReactiveObject(target) {
  const handlers = {
    set(obj, prop, value) {
      obj[prop] = value;
      console.log(\`Property \${prop} changed to \${value}\`);
      return true;
    }
  };

  return new Proxy(Object.assign({}, target), handlers);
}

const reactive = createReactiveObject({ a: 1, b: 2 });
reactive.c = 3; // Logs: Property c changed to 3

// 5. Method binding with Object.assign()
const utils = {
  sum(a, b) { return a + b; },
  multiply(a, b) { return a * b; }
};

const boundUtils = Object.assign({}, utils, {
  sum: utils.sum.bind(null),
  multiply: utils.multiply.bind(null)
});

// Or bind all methods automatically
function bindMethods(obj, context) {
  const bound = Object.assign({}, obj);
  Object.keys(bound).forEach(key => {
    if (typeof bound[key] === 'function') {
      bound[key] = bound[key].bind(context);
    }
  });
  return bound;
}

const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  multiply(n) { this.value *= n; return this; }
};

const boundCalculator = bindMethods(calculator, calculator);
boundCalculator.add(5).multiply(2);
console.log(boundCalculator.value); // 10

// 6. Configuration inheritance
function createConfigHierarchy(...configs) {
  return configs.reduce((result, config) => {
    return Object.assign(result, config);
  }, {});
}

const globalConfig = { apiUrl: 'https://api.example.com' };
const moduleConfig = { timeout: 5000 };
const instanceConfig = { apiUrl: 'https://dev-api.example.com' };

const finalConfig = createConfigHierarchy(globalConfig, moduleConfig, instanceConfig);
console.log(finalConfig);
// { apiUrl: 'https://dev-api.example.com', timeout: 5000 }

// 7. Object.assign() with async operations
async function mergeAsyncConfigs(...configPromises) {
  const configs = await Promise.all(configPromises);
  return Object.assign({}, ...configs);
}

const config1 = Promise.resolve({ db: { host: 'localhost' } });
const config2 = Promise.resolve({ db: { port: 5432 }, cache: true });
const config3 = Promise.resolve({ db: { host: 'prod-db' } }); // Overrides host

const mergedConfig = await mergeAsyncConfigs(config1, config2, config3);
console.log(mergedConfig);

// 8. Functional composition with Object.assign()
function composeObjects(...factories) {
  return factories.reduce((obj, factory) => {
    return Object.assign(obj, factory(obj));
  }, {});
}

const withLogging = (obj) => ({
  log: (...args) => {
    console.log('[LOG]', ...args);
    return obj;
  }
});

const withTiming = (obj) => ({
  time: (label, fn) => {
    console.time(label);
    const result = fn();
    console.timeEnd(label);
    return result;
  }
});

const withCaching = (obj) => {
  const cache = new Map();
  return {
    cached: (key, fn) => {
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn();
      cache.set(key, result);
      return result;
    }
  };
};

const utility = composeObjects({}, withLogging, withTiming, withCaching);
utility.log('Composed object created');
utility.time('cache test', () => {
  return utility.cached('test', () => {
    console.log('Computing...');
    return 42;
  });
});

// 9. Object.assign() for class extension
class BaseClass {
  constructor(props = {}) {
    Object.assign(this, props);
  }

  getInfo() {
    return \`Base: \${this.name || 'Unknown'}\`;
  }
}

class ExtendedClass extends BaseClass {
  constructor(props = {}) {
    super(props);
    // Additional initialization
    this.extended = true;
  }

  getExtendedInfo() {
    return \`\${this.getInfo()}, Extended: \${this.extended}\`;
  }
}

const instance = new ExtendedClass({ name: 'Test', value: 123 });
console.log(instance.getInfo()); // 'Base: Test'
console.log(instance.getExtendedInfo()); // 'Base: Test, Extended: true'

// 10. Deep object freezing with Object.assign()
function deepFreeze(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}

const freezable = {
  user: { name: 'John' },
  settings: { theme: 'dark' }
};

const frozen = deepFreeze(freezable);
try {
  frozen.user.name = 'Jane'; // Throws error
} catch (error) {
  console.log('Cannot modify frozen object');
}

// 11. Object.assign() with generators
function* objectGenerator(template, count) {
  for (let i = 0; i < count; i++) {
    yield Object.assign({}, template, { id: i, timestamp: Date.now() });
  }
}

const objects = [...objectGenerator({ type: 'item', active: true }, 3)];
console.log(objects);

// 12. Configuration validation with Object.assign()
function validateAndAssign(target, source, validators) {
  const validated = {};

  Object.keys(source).forEach(key => {
    const value = source[key];
    const validator = validators[key];

    if (validator) {
      if (validator(value)) {
        validated[key] = value;
      } else {
        console.warn(\`Invalid value for \${key}: \${value}\`);
      }
    } else {
      validated[key] = value;
    }
  });

  return Object.assign(target, validated);
}

const validators = {
  age: (v) => typeof v === 'number' && v >= 0 && v <= 150,
  email: (v) => typeof v === 'string' && v.includes('@')
};

const person = {};
validateAndAssign(person, {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  invalidAge: -5
}, validators);

console.log(person); // { name: 'John', age: 25, email: 'john@example.com' }

// 13. Object.assign() for state management
class StateManager {
  constructor(initialState = {}) {
    this.state = Object.assign({}, initialState);
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  update(updates) {
    const newState = Object.assign({}, this.state, updates);
    this.state = newState;
    this.listeners.forEach(listener => listener(newState));
  }

  getState() {
    return Object.assign({}, this.state); // Return copy
  }
}

const stateManager = new StateManager({ count: 0, user: 'John' });

const unsubscribe = stateManager.subscribe(state => {
  console.log('State updated:', state);
});

stateManager.update({ count: 1 });
stateManager.update({ user: 'Jane' });

// 14. Method delegation with Object.assign()
function delegateMethods(target, source, methodNames) {
  const methods = {};
  methodNames.forEach(name => {
    if (typeof source[name] === 'function') {
      methods[name] = source[name].bind(source);
    }
  });
  return Object.assign(target, methods);
}

const calculatorMethods = {
  add(a, b) { return a + b; },
  multiply(a, b) { return a * b; }
};

const mathUtils = {};
delegateMethods(mathUtils, calculatorMethods, ['add', 'multiply']);

console.log(mathUtils.add(2, 3)); // 5
console.log(mathUtils.multiply(4, 5)); // 20

// 15. Object.assign() with WeakMap for private data
const privateData = new WeakMap();

class PrivateClass {
  constructor(data) {
    privateData.set(this, Object.assign({}, data));
  }

  get(key) {
    return privateData.get(this)[key];
  }

  set(key, value) {
    const data = privateData.get(this);
    privateData.set(this, Object.assign({}, data, { [key]: value }));
  }
}

const privateInstance = new PrivateClass({ secret: 'hidden' });
console.log(privateInstance.get('secret')); // 'hidden'
privateInstance.set('secret', 'updated');
console.log(privateInstance.get('secret')); // 'updated'`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Performance and Best Practices</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance Optimization</h3>
          <p className="text-slate-700 mb-4">
            Understanding performance characteristics and optimization techniques for Object.assign().
          </p>

          <CodeExample
            title="Object.assign() Performance Optimization"
            code={`// 1. Cache Object.assign() results when used multiple times
function processMultipleObjects(objects) {
  return objects.map(obj => {
    // Don't call Object.assign() multiple times for same object
    const processed = Object.assign({}, obj);
    processed.timestamp = Date.now();
    processed.processed = true;
    return processed;
  });
}

// Better: Cache the assignment
function processMultipleObjectsOptimized(objects) {
  const now = Date.now();
  return objects.map(obj => Object.assign({}, obj, {
    timestamp: now,
    processed: true
  }));
}

// 2. Use appropriate method for different scenarios
const obj = { a: 1, b: 2, c: 3 };

// For single object copying: Object.assign()
const copy1 = Object.assign({}, obj);

// For merging multiple objects: Object.assign()
const merged = Object.assign({}, obj, { d: 4 });

// For simple property addition: spread syntax (often faster)
const withExtra = { ...obj, d: 4 };

// Performance comparison for different operations
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('Object.assign() copy');
for (let i = 0; i < 100; i++) {
  const copy = Object.assign({}, largeObj);
}
console.timeEnd('Object.assign() copy');

console.time('Spread syntax copy');
for (let i = 0; i < 100; i++) {
  const copy = { ...largeObj };
}
console.timeEnd('Spread syntax copy');

// 3. Avoid Object.assign() in performance-critical loops
const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  value: Math.random()
}));

// Bad: Object.assign() in loop
console.time('assign in loop');
const processed = data.map(item => {
  return Object.assign({}, item, { processed: true });
});
console.timeEnd('assign in loop');

// Good: Pre-compute common properties
console.time('pre-compute properties');
const commonProps = { processed: true, timestamp: Date.now() };
const processed2 = data.map(item => Object.assign({}, item, commonProps));
console.timeEnd('pre-compute properties');

// 4. Memory considerations
// Object.assign() creates new objects - be mindful with large objects
const hugeObj = {};
for (let i = 0; i < 100000; i++) {
  hugeObj[\`prop\${i}\`] = Math.random();
}

// For large objects, consider if you really need a full copy
console.time('Full copy');
const fullCopy = Object.assign({}, hugeObj);
console.timeEnd('Full copy');

// Alternative: Create copy on demand
function createLazyCopy(original) {
  const cache = new WeakMap();

  return new Proxy(original, {
    get(target, prop) {
      if (!cache.has(target)) {
        cache.set(target, Object.assign({}, target));
      }
      return cache.get(target)[prop];
    },
    set(target, prop, value) {
      if (!cache.has(target)) {
        cache.set(target, Object.assign({}, target));
      }
      cache.get(target)[prop] = value;
      return true;
    }
  });
}

// 5. Optimize for specific use cases
// When you only need some properties
function pickProperties(obj, keys) {
  const result = {};
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

// Faster than Object.assign() + delete for large objects
const picked = pickProperties(largeObj, ['prop1', 'prop2', 'prop9999']);

// When you need to exclude some properties
function omitProperties(obj, keysToOmit) {
  const result = Object.assign({}, obj);
  keysToOmit.forEach(key => delete result[key]);
  return result;
}

// 6. Batch processing for large datasets
function batchAssign(objects, batchSize = 1000) {
  const results = [];

  for (let i = 0; i < objects.length; i += batchSize) {
    const batch = objects.slice(i, i + batchSize);
    const batchResults = batch.map(obj => Object.assign({}, obj, { batchId: Math.floor(i / batchSize) }));
    results.push(...batchResults);
  }

  return results;
}

// 7. Performance monitoring
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

const trackedAssign = withPerformanceTracking(
  (target, ...sources) => Object.assign(target, ...sources),
  'Object.assign() operation'
);

const result = trackedAssign({}, { a: 1 }, { b: 2 });`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Best Practices and Common Patterns</h3>
          <p className="text-slate-700 mb-4">
            Essential best practices for using Object.assign() effectively.
          </p>

          <CodeExample
            title="Object.assign() Best Practices"
            code={`// 1. Always provide a target object to avoid mutating sources
const source = { a: 1, b: 2 };

// Bad: Mutates source
Object.assign(source, { c: 3 });
console.log(source); // { a: 1, b: 2, c: 3 }

// Good: Creates new object
const result = Object.assign({}, source, { c: 3 });
console.log(source); // { a: 1, b: 2 } (unchanged)

// 2. Use spread syntax for simple operations
const obj = { a: 1, b: 2 };

// Prefer spread for simple cases
const copy = { ...obj };
const merged = { ...obj, c: 3 };

// Use Object.assign() for complex merging
const complex = Object.assign({}, obj, { c: 3 }, { d: 4 });

// 3. Be aware of shallow copying
const nested = { data: { value: 1 } };
const shallow = Object.assign({}, nested);

// This affects both objects!
shallow.data.value = 2;
console.log(nested.data.value); // 2 (affected!)

// Use deep copying when needed
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(deepCopy);
  if (typeof obj === 'object') {
    const copy = {};
    Object.keys(obj).forEach(key => {
      copy[key] = deepCopy(obj[key]);
    });
    return copy;
  }
}

const deep = deepCopy(nested);
deep.data.value = 3;
console.log(nested.data.value); // 2 (unchanged)

// 4. Handle null/undefined sources gracefully
function safeAssign(target, ...sources) {
  return Object.assign(target, ...sources.filter(source => source != null));
}

const result2 = safeAssign({}, { a: 1 }, null, { b: 2 }, undefined);
console.log(result2); // { a: 1, b: 2 }

// 5. Use for default parameter merging
function createUser(config = {}) {
  const defaults = {
    name: 'Anonymous',
    age: 18,
    active: true
  };

  return Object.assign({}, defaults, config);
}

console.log(createUser()); // { name: 'Anonymous', age: 18, active: true }
console.log(createUser({ name: 'John', age: 25 })); // { name: 'John', age: 25, active: true }

// 6. Combine with destructuring
const { a, b, ...rest } = Object.assign({}, { a: 1, b: 2, c: 3, d: 4 });
console.log(a, b, rest); // 1, 2, { c: 3, d: 4 }

// 7. Use for prototype extension
function extendPrototype(ChildClass, ParentClass) {
  ChildClass.prototype = Object.assign(
    Object.create(ParentClass.prototype),
    ChildClass.prototype
  );
}

// 8. Document expected object structures
/**
 * Merges configuration objects with validation
 * @param {Object} baseConfig - Base configuration object
 * @param {Object} userConfig - User-provided configuration
 * @returns {Object} Merged configuration
 */
function mergeConfigs(baseConfig, userConfig) {
  // Validate inputs
  if (typeof baseConfig !== 'object' || baseConfig === null) {
    throw new Error('baseConfig must be a non-null object');
  }

  if (userConfig != null && typeof userConfig !== 'object') {
    throw new Error('userConfig must be an object or null/undefined');
  }

  return Object.assign({}, baseConfig, userConfig);
}

// 9. Use for state updates in functional programming
const initialState = { count: 0, user: null };

function updateState(state, updates) {
  return Object.assign({}, state, updates);
}

const newState = updateState(initialState, { count: 1 });
console.log(initialState.count); // 0 (unchanged)
console.log(newState.count); // 1

// 10. Handle circular references carefully
const circular = { self: null };
circular.self = circular;

// Object.assign() can handle simple circular references
const copy = Object.assign({}, circular);
console.log(copy.self === copy); // true

// But be careful with complex circular structures
// Consider using structuredClone() for complex cases

// 11. Performance considerations for large objects
function processLargeObject(obj) {
  // For objects with many properties, consider alternatives
  if (Object.keys(obj).length > 10000) {
    console.warn('Large object detected, consider optimization');
  }

  return Object.assign({}, obj);
}

// 12. Testing utilities
function createTestObject(size = 10) {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[\`key\${i}\`] = \`value\${i}\`;
  }
  return obj;
}

function assertAssign(obj1, obj2, expected) {
  const result = Object.assign({}, obj1, obj2);
  const success = JSON.stringify(result) === JSON.stringify(expected);

  if (!success) {
    throw new Error(\`Expected \${JSON.stringify(expected)}, got \${JSON.stringify(result)}\`);
  }
}

// Usage
const testObj = createTestObject(3);
console.log('Test object created with', Object.keys(testObj).length, 'properties');

// 13. Integration patterns
// With classes
class ConfigurableClass {
  constructor(config = {}) {
    const defaults = {
      enabled: true,
      timeout: 5000
    };

    Object.assign(this, defaults, config);
  }
}

const instance = new ConfigurableClass({ timeout: 10000 });
console.log(instance.timeout); // 10000
console.log(instance.enabled); // true

// With promises
async function mergeAsyncConfigs(...configPromises) {
  const configs = await Promise.all(configPromises);
  return Object.assign({}, ...configs);
}

// With error handling
function safeObjectAssign(target, ...sources) {
  try {
    return Object.assign(target, ...sources);
  } catch (error) {
    console.error('Object.assign() failed:', error.message);
    return target;
  }
}

// 14. Migration from legacy code
// Old way: manual property copying
function oldMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

// New way: Object.assign()
function newMerge(target, source) {
  return Object.assign(target, source);
}

// Modern way: spread syntax
function modernMerge(target, source) {
  return { ...target, ...source };
}

// 15. Cross-browser considerations
// Object.assign() is ES2015+ - use polyfill for older browsers
if (typeof Object.assign !== 'function') {
  Object.assign = function(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (let index = 1; index < arguments.length; index++) {
      const source = arguments[index];
      if (source != null) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

// 16. Memory management
function memoryEfficientAssign(target, source) {
  // For large objects, consider if you need all properties
  const keys = Object.keys(source);

  for (const key of keys) {
    target[key] = source[key];
  }

  return target;
}

// 17. Debugging and logging
function logAssignOperation(target, ...sources) {
  console.group('Object.assign() operation');
  console.log('Target:', target);
  console.log('Sources:', sources);
  const result = Object.assign(target, ...sources);
  console.log('Result:', result);
  console.groupEnd();
  return result;
}

// 18. Validation before assignment
function validateAndAssign(target, source, validator) {
  const validSource = {};

  Object.keys(source).forEach(key => {
    if (validator(key, source[key])) {
      validSource[key] = source[key];
    }
  });

  return Object.assign(target, validSource);
}

const validator = (key, value) => {
  // Example validation
  return typeof value !== 'function'; // Exclude functions
};

const mixed = { a: 1, b: () => {}, c: 'text' };
const validated = validateAndAssign({}, mixed, validator);
console.log(validated); // { a: 1, c: 'text' }

// 19. Immutable patterns
const state = { count: 0, items: [] };

function immutableUpdate(obj, updates) {
  return Object.assign({}, obj, updates);
}

function addItem(state, item) {
  return Object.assign({}, state, {
    items: [...state.items, item]
  });
}

const newState = addItem(state, 'new item');
console.log(state.items.length); // 0 (unchanged)
console.log(newState.items.length); // 1

// 20. Composition patterns
function compose(...fns) {
  return (initial) => fns.reduce((result, fn) => Object.assign({}, result, fn(result)), initial);
}

const addTimestamp = (obj) => ({ timestamp: Date.now() });
const addId = (obj) => ({ id: Math.random().toString(36).substr(2, 9) });
const addMetadata = (obj) => ({ metadata: { created: true } });

const createObject = compose(addTimestamp, addId, addMetadata);

console.log(createObject({ name: 'test' }));`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object.assign() is a powerful method for copying and merging objects.
            Understanding its shallow copy behavior, performance characteristics, and proper usage patterns enables
            efficient and maintainable JavaScript code.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Object.assign() Key Points</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Copies:</h4>
                <p className="text-slate-700">All enumerable own properties from sources to target</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Returns:</h4>
                <p className="text-slate-700">The modified target object</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Copying:</h4>
                <p className="text-slate-700">Shallow copy - nested objects share references</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Use Cases:</h4>
                <p className="text-slate-700">Object merging, copying, configuration, mixins</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand Object.assign(), explore related concepts:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Spread syntax:</strong> Modern alternative for simple operations</li>
              <li><strong>Deep copying:</strong> Techniques for complete object duplication</li>
              <li><strong>Immutable updates:</strong> Functional programming patterns</li>
              <li><strong>Mixin patterns:</strong> Object composition techniques</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}