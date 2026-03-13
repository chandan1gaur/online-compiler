import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object.keys() - Complete Guide to Property Enumeration",
  description: "Master JavaScript Object.keys() method with comprehensive guide covering property enumeration, iteration patterns, performance optimization, and practical applications.",
  keywords: [
    "javascript object.keys",
    "object property enumeration",
    "javascript object iteration",
    "object.keys vs for-in",
    "property enumeration methods",
    "javascript object utilities",
    "object traversal techniques",
    "property iteration patterns",
    "javascript object methods",
    "object.keys performance"
  ],
  openGraph: {
    title: "JavaScript Object.keys() - Complete Guide",
    description: "Master JavaScript Object.keys() method with comprehensive guide covering property enumeration, iteration patterns, performance optimization, and practical applications.",
    url: "/javascript/objects/keys",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.keys() Guide",
    description: "Master JavaScript Object.keys() method with comprehensive guide covering property enumeration, iteration patterns, performance optimization, and practical applications.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/keys" },
};

const keysSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object.keys() - Complete Guide to Property Enumeration",
  "description": "Master JavaScript Object.keys() method with comprehensive guide covering property enumeration, iteration patterns, performance optimization, and practical applications.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectKeysPage() {
  return (
    <>
      <Script id="keys-schema" type="application/ld+json">
        {JSON.stringify(keysSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object.keys(): Complete Guide to Property Enumeration
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object.keys() is a fundamental JavaScript method for enumerating object properties.
          This comprehensive guide covers everything from basic usage to advanced patterns,
          performance optimization, and real-world applications.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Object.keys() Fundamentals</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Basic Syntax and Usage</h3>
          <p className="text-slate-700 mb-4">
            Object.keys() returns an array of a given object's own enumerable property names.
          </p>

          <CodeExample
            title="Object.keys() Basic Usage"
            code={`// Basic syntax
const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(Object.keys(obj)); // ['name', 'age', 'city']

// Empty object
console.log(Object.keys({})); // []

// Single property
console.log(Object.keys({ a: 1 })); // ['a']

// Multiple properties
const user = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
  isActive: true,
  createdAt: '2024-01-01'
};

const keys = Object.keys(user);
console.log(keys); // ['id', 'username', 'email', 'isActive', 'createdAt']
console.log(keys.length); // 5

// Keys are always strings (even for numeric keys)
const numericKeys = { 1: 'one', 2: 'two', 3: 'three' };
console.log(Object.keys(numericKeys)); // ['1', '2', '3']

// Symbol keys are not included
const symbolKey = Symbol('secret');
const withSymbol = { a: 1, [symbolKey]: 'secret', b: 2 };
console.log(Object.keys(withSymbol)); // ['a', 'b']

// Non-enumerable properties are excluded
const withNonEnum = Object.create({}, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});
console.log(Object.keys(withNonEnum)); // ['visible']

// Inherited properties are not included
function Parent() {
  this.inherited = 'from parent';
}

Parent.prototype.protoProp = 'prototype property';

const child = new Parent();
child.own = 'own property';

console.log(Object.keys(child)); // ['own'] (only own properties)

// Array-like objects
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Object.keys(arrayLike)); // ['0', '1', '2', 'length']

// Date object
const date = new Date();
console.log(Object.keys(date)); // [] (Date has no enumerable own properties)

// Function object
function testFunc() {}
testFunc.customProp = 'custom';
console.log(Object.keys(testFunc)); // ['customProp']

// Primitive values (converted to objects)
console.log(Object.keys('hello')); // ['0', '1', '2', '3', '4']
console.log(Object.keys(42)); // []
console.log(Object.keys(true)); // []`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Return Value and Type</h3>
          <p className="text-slate-700 mb-4">
            Understanding what Object.keys() returns and how to work with the result.
          </p>

          <CodeExample
            title="Object.keys() Return Value Analysis"
            code={`// Always returns an array
const obj = { a: 1, b: 2 };
const keys = Object.keys(obj);

console.log(Array.isArray(keys)); // true
console.log(keys instanceof Array); // true
console.log(Object.prototype.toString.call(keys)); // '[object Array]'

// Array methods work on the result
const user = {
  name: 'Alice',
  age: 25,
  city: 'Boston'
};

const userKeys = Object.keys(user);
console.log(userKeys.length); // 3
console.log(userKeys[0]); // 'name'
console.log(userKeys.includes('age')); // true
console.log(userKeys.indexOf('city')); // 2

// Can be spread
const allKeys = [...Object.keys(user), 'extra'];
console.log(allKeys); // ['name', 'age', 'city', 'extra']

// Can be destructured
const [firstKey, ...restKeys] = Object.keys(user);
console.log(firstKey); // 'name'
console.log(restKeys); // ['age', 'city']

// Order is guaranteed (insertion order for string keys)
const ordered = { z: 3, a: 1, m: 2 };
console.log(Object.keys(ordered)); // ['z', 'a', 'm'] (insertion order)

// Numeric keys are sorted
const numeric = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.keys(numeric)); // ['1', '2', '3'] (numeric order)

// Mixed keys: numbers first (sorted), then strings (insertion order)
const mixed = { 2: 'two', b: 'bee', 1: 'one', a: 'ay' };
console.log(Object.keys(mixed)); // ['1', '2', 'b', 'a']

// Empty object returns empty array
console.log(Object.keys({})); // []
console.log(Object.keys({}).length); // 0

// Array prototype methods
const keys2 = Object.keys({ x: 1, y: 2, z: 3 });

console.log(keys2.map(key => key.toUpperCase())); // ['X', 'Y', 'Z']
console.log(keys2.filter(key => key > 'a')); // ['x', 'y', 'z'] (ASCII comparison)
console.log(keys2.sort()); // ['x', 'y', 'z']
console.log(keys2.reverse()); // ['z', 'y', 'x']

// Converting to different formats
const obj = { name: 'John', age: 30, city: 'NYC' };
const keys3 = Object.keys(obj);

// To Set
const keySet = new Set(keys3);
console.log(keySet.has('name')); // true

// To Map
const keyMap = new Map(keys3.map(key => [key, key.toUpperCase()]));
console.log(keyMap.get('name')); // 'NAME'

// Join as string
console.log(keys3.join(', ')); // 'name, age, city'

// Create key-value pairs
const pairs = keys3.map(key => [key, obj[key]]);
console.log(pairs); // [['name', 'John'], ['age', 30], ['city', 'NYC']]

// Recreate object from keys
const recreated = {};
Object.keys(obj).forEach(key => {
  recreated[key] = obj[key];
});
console.log(recreated); // { name: 'John', age: 30, city: 'NYC' }

// Check if object has specific keys
function hasKeys(obj, requiredKeys) {
  const objKeys = Object.keys(obj);
  return requiredKeys.every(key => objKeys.includes(key));
}

console.log(hasKeys(user, ['name', 'age'])); // true
console.log(hasKeys(user, ['name', 'salary'])); // false`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Comparison with Other Enumeration Methods</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.keys() vs for...in</h3>
          <p className="text-slate-700 mb-4">
            Understanding the differences between Object.keys() and for...in loops.
          </p>

          <CodeExample
            title="Object.keys() vs for...in Comparison"
            code={`// Setup test object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = 'Human';
Person.prototype.greet = function() { return 'Hello'; };

const person = new Person('Alice', 30);
person.job = 'Developer';
person.city = 'San Francisco';

// Object.keys() - only own enumerable properties
console.log('Object.keys():', Object.keys(person)); // ['name', 'age', 'job', 'city']

// for...in - includes prototype chain
console.log('for...in:');
const forInKeys = [];
for (const key in person) {
  forInKeys.push(key);
}
console.log(forInKeys); // ['name', 'age', 'job', 'city', 'species', 'greet']

// Safe for...in (checking hasOwnProperty)
console.log('for...in with hasOwnProperty:');
const ownKeys = [];
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    ownKeys.push(key);
  }
}
console.log(ownKeys); // ['name', 'age', 'job', 'city']

// Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('Object.keys');
const keys1 = Object.keys(largeObj);
console.timeEnd('Object.keys');

console.time('for...in with hasOwnProperty');
const keys2 = [];
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) {
    keys2.push(key);
  }
}
console.timeEnd('for...in with hasOwnProperty');

console.time('for...in without check');
const keys3 = [];
for (const key in largeObj) {
  keys3.push(key);
}
console.timeEnd('for...in without check');

// Object.keys() is generally faster and safer

// When to use each:

// Use Object.keys() when:
// - You want only own enumerable properties
// - You need an array of keys
// - You want predictable iteration order
// - Performance is important
// - You need to use array methods on keys

// Use for...in when:
// - You want to iterate over all enumerable properties (own + inherited)
// - You don't need an array
// - You're working with simple objects without prototypes
// - Memory usage is a concern (no intermediate array)

// Practical examples

// Object.keys() - clean and modern
function getObjectInfo(obj) {
  const keys = Object.keys(obj);
  return {
    keyCount: keys.length,
    keys: keys,
    hasNested: keys.some(key => typeof obj[key] === 'object')
  };
}

// for...in - when you need inherited properties
function getAllProperties(obj) {
  const props = [];
  for (const key in obj) {
    props.push(key);
  }
  return props;
}

// Converting for...in to Object.keys()
function oldWay(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key + ': ' + obj[key]);
    }
  }
  return result;
}

function newWay(obj) {
  return Object.keys(obj).map(key => \`\${key}: \${obj[key]}\`);
}

const testObj = { a: 1, b: 2, c: 3 };
console.log(oldWay(testObj)); // ['a: 1', 'b: 2', 'c: 3']
console.log(newWay(testObj)); // ['a: 1', 'b: 2', 'c: 3']`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object.keys() vs Object.getOwnPropertyNames()</h3>
          <p className="text-slate-700 mb-4">
            Comparing Object.keys() with methods that include non-enumerable properties.
          </p>

          <CodeExample
            title="Object.keys() vs Object.getOwnPropertyNames()"
            code={`// Setup object with non-enumerable properties
const obj = Object.create({}, {
  enumerableProp: { value: 'visible', enumerable: true },
  nonEnumProp: { value: 'hidden', enumerable: false },
  anotherEnum: { value: 'also visible', enumerable: true }
});

obj.dynamicProp = 'dynamic'; // enumerable by default

console.log('Object.keys():', Object.keys(obj));
// ['dynamicProp'] (only enumerable own properties)

console.log('Object.getOwnPropertyNames():', Object.getOwnPropertyNames(obj));
// ['dynamicProp', 'enumerableProp', 'nonEnumProp', 'anotherEnum'] (all own properties)

console.log('Object.getOwnPropertyDescriptors():');
console.log(Object.getOwnPropertyDescriptors(obj));

// Difference demonstration
const testObj = {};
Object.defineProperty(testObj, 'normal', {
  value: 'normal value',
  enumerable: true
});

Object.defineProperty(testObj, 'hidden', {
  value: 'hidden value',
  enumerable: false
});

testObj.added = 'added value'; // enumerable

console.log('Object.keys():', Object.keys(testObj));
// ['normal', 'added']

console.log('Object.getOwnPropertyNames():', Object.getOwnPropertyNames(testObj));
// ['normal', 'hidden', 'added']

// When to use each:

// Use Object.keys() when:
// - You only want enumerable properties
// - You're iterating over properties for display/serialization
// - You want properties that would show up in JSON.stringify()
// - Performance is important and you don't need non-enumerable props

// Use Object.getOwnPropertyNames() when:
// - You need ALL own properties, including non-enumerable ones
// - You're doing meta-programming or property inspection
// - You need to copy/clone all properties exactly
// - You're working with property descriptors

// Practical examples

// Serialization (use Object.keys)
function serialize(obj) {
  const result = {};
  Object.keys(obj).forEach(key => {
    result[key] = obj[key];
  });
  return JSON.stringify(result);
}

// Deep inspection (use getOwnPropertyNames)
function inspectObject(obj) {
  const names = Object.getOwnPropertyNames(obj);
  const descriptors = Object.getOwnPropertyDescriptors(obj);

  return {
    propertyCount: names.length,
    properties: names.map(name => ({
      name,
      descriptor: descriptors[name]
    }))
  };
}

const inspected = inspectObject(testObj);
console.log(inspected);

// Safe property enumeration
function safeKeys(obj) {
  if (obj == null) return [];
  return Object.keys(obj);
}

function safeGetOwnPropertyNames(obj) {
  if (obj == null) return [];
  return Object.getOwnPropertyNames(obj);
}

// Performance: Object.keys() is faster for typical use cases
const perfObj = {};
for (let i = 0; i < 1000; i++) {
  Object.defineProperty(perfObj, \`prop\${i}\`, {
    value: i,
    enumerable: i % 2 === 0 // Half enumerable, half not
  });
}

console.time('Object.keys');
const enumKeys = Object.keys(perfObj);
console.timeEnd('Object.keys');

console.time('Object.getOwnPropertyNames');
const allKeys = Object.getOwnPropertyNames(perfObj);
console.timeEnd('Object.getOwnPropertyNames');

console.log(\`Object.keys found \${enumKeys.length} properties\`);
console.log(\`getOwnPropertyNames found \${allKeys.length} properties\`);

// Converting between formats
function enumerableOnly(obj) {
  return Object.keys(obj);
}

function allProperties(obj) {
  return Object.getOwnPropertyNames(obj);
}

function nonEnumerableOnly(obj) {
  const all = Object.getOwnPropertyNames(obj);
  const enumerable = Object.keys(obj);
  return all.filter(prop => !enumerable.includes(prop));
}

console.log('All properties:', allProperties(testObj));
console.log('Only enumerable:', enumerableOnly(testObj));
console.log('Only non-enumerable:', nonEnumerableOnly(testObj));`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Practical Applications</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object Iteration and Transformation</h3>
          <p className="text-slate-700 mb-4">
            Common patterns for iterating over and transforming objects using Object.keys().
          </p>

          <CodeExample
            title="Object Iteration Patterns with Object.keys()"
            code={`// 1. Basic iteration
const user = {
  name: 'John',
  age: 30,
  city: 'New York',
  email: 'john@example.com'
};

Object.keys(user).forEach(key => {
  console.log(\`\${key}: \${user[key]}\`);
});

// 2. Conditional iteration
Object.keys(user).forEach(key => {
  if (typeof user[key] === 'string') {
    console.log(\`\${key}: \${user[key]}\`);
  }
});

// 3. Transform object properties
function transformKeys(obj, transformFn) {
  const result = {};
  Object.keys(obj).forEach(key => {
    const newKey = transformFn(key);
    result[newKey] = obj[key];
  });
  return result;
}

const snakeCase = transformKeys(user, key =>
  key.replace(/[A-Z]/g, match => '_' + match.toLowerCase())
);
console.log(snakeCase);
// { name: 'John', age: 30, city: 'New York', email: 'john@example.com' }

// 4. Filter object properties
function filterObject(obj, predicate) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (predicate(key, obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
}

const stringProps = filterObject(user, (key, value) =>
  typeof value === 'string'
);
console.log(stringProps); // { name: 'John', city: 'New York', email: 'john@example.com' }

// 5. Object validation
function validateObject(obj, schema) {
  const errors = [];
  const keys = Object.keys(obj);

  // Check required fields
  Object.keys(schema).forEach(requiredKey => {
    if (!keys.includes(requiredKey)) {
      errors.push(\`Missing required field: \${requiredKey}\`);
    } else if (typeof obj[requiredKey] !== schema[requiredKey]) {
      errors.push(\`Invalid type for \${requiredKey}: expected \${schema[requiredKey]}, got \${typeof obj[requiredKey]}\`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

const userSchema = {
  name: 'string',
  age: 'number',
  email: 'string'
};

console.log(validateObject(user, userSchema)); // { isValid: true, errors: [] }

// 6. Object comparison
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };

console.log(shallowEqual(obj1, obj2)); // true
console.log(shallowEqual(obj1, obj3)); // false

// 7. Object merging with Object.keys()
function mergeObjects(...objects) {
  const result = {};

  objects.forEach(obj => {
    if (obj && typeof obj === 'object') {
      Object.keys(obj).forEach(key => {
        result[key] = obj[key];
      });
    }
  });

  return result;
}

const merged = mergeObjects(
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { d: 5 }
);
console.log(merged); // { a: 1, b: 3, c: 4, d: 5 }

// 8. Create key-value pairs array
function toPairs(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

console.log(toPairs(user));
// [['name', 'John'], ['age', 30], ['city', 'New York'], ['email', 'john@example.com']]

// 9. Group objects by property
function groupBy(objects, keyFn) {
  return objects.reduce((groups, obj) => {
    const key = keyFn(obj);
    if (!groups[key]) groups[key] = [];
    groups[key].push(obj);
    return groups;
  }, {});
}

const people = [
  { name: 'Alice', age: 25, city: 'NYC' },
  { name: 'Bob', age: 30, city: 'LA' },
  { name: 'Charlie', age: 25, city: 'NYC' }
];

const groupedByAge = groupBy(people, person => person.age);
console.log(groupedByAge);

// 10. Object size and statistics
function objectStats(obj) {
  const keys = Object.keys(obj);
  const values = keys.map(key => obj[key]);

  return {
    keyCount: keys.length,
    valueTypes: values.reduce((types, value) => {
      const type = typeof value;
      types[type] = (types[type] || 0) + 1;
      return types;
    }, {}),
    stringKeys: keys.filter(key => typeof key === 'string'),
    numericKeys: keys.filter(key => !isNaN(key)),
    hasNestedObjects: values.some(value => value && typeof value === 'object')
  };
}

console.log(objectStats(user));

// 11. Safe property access
function safeGet(obj, path, defaultValue = undefined) {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current == null || typeof current !== 'object') {
      return defaultValue;
    }
    current = current[key];
  }

  return current;
}

const nestedObj = { user: { profile: { name: 'John' } } };
console.log(safeGet(nestedObj, 'user.profile.name')); // 'John'
console.log(safeGet(nestedObj, 'user.settings.theme')); // undefined

// 12. Object flattening
function flattenObject(obj, prefix = '') {
  const result = {};

  Object.keys(obj).forEach(key => {
    const newKey = prefix ? \`\${prefix}.\${key}\` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  });

  return result;
}

const nested = {
  user: {
    name: 'John',
    profile: {
      age: 30,
      settings: {
        theme: 'dark'
      }
    }
  },
  app: {
    version: '1.0'
  }
};

console.log(flattenObject(nested));
// {
//   'user.name': 'John',
//   'user.profile.age': 30,
//   'user.profile.settings.theme': 'dark',
//   'app.version': '1.0'
// }

// 13. Object mapping
function mapObject(obj, mapperFn) {
  const result = {};

  Object.keys(obj).forEach(key => {
    const [newKey, newValue] = mapperFn(key, obj[key]);
    result[newKey] = newValue;
  });

  return result;
}

const mapped = mapObject(user, (key, value) => [
  key.toUpperCase(),
  typeof value === 'string' ? value.toUpperCase() : value
]);

console.log(mapped); // { NAME: 'JOHN', AGE: 30, CITY: 'NEW YORK', EMAIL: 'JOHN@EXAMPLE.COM' }

// 14. Find object properties
function findKey(obj, predicate) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (predicate(key, obj[key])) {
      return key;
    }
  }
  return undefined;
}

function findValue(obj, predicate) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (predicate(obj[key], key)) {
      return obj[key];
    }
  }
  return undefined;
}

console.log(findKey(user, (key, value) => typeof value === 'number')); // 'age'
console.log(findValue(user, (value, key) => key === 'email')); // 'john@example.com'`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Data Processing and Validation</h3>
          <p className="text-slate-700 mb-4">
            Using Object.keys() for data processing, validation, and transformation tasks.
          </p>

          <CodeExample
            title="Data Processing with Object.keys()"
            code={`// 1. Form data validation
function validateFormData(formData) {
  const required = ['name', 'email', 'age'];
  const errors = [];

  required.forEach(field => {
    if (!Object.keys(formData).includes(field)) {
      errors.push(\`Missing required field: \${field}\`);
    } else if (!formData[field]) {
      errors.push(\`\${field} cannot be empty\`);
    }
  });

  // Type validation
  if (formData.age && isNaN(formData.age)) {
    errors.push('Age must be a number');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

const formData = { name: 'John', email: 'john@example.com', age: '30' };
console.log(validateFormData(formData));

// 2. API response normalization
function normalizeApiResponse(response) {
  const normalized = {};

  Object.keys(response).forEach(key => {
    // Convert snake_case to camelCase
    const camelKey = key.replace(/_([a-z])/g, (match, letter) =>
      letter.toUpperCase()
    );

    normalized[camelKey] = response[key];
  });

  return normalized;
}

const apiResponse = {
  user_id: 123,
  user_name: 'john_doe',
  email_address: 'john@example.com',
  is_active: true
};

console.log(normalizeApiResponse(apiResponse));
// { userId: 123, userName: 'john_doe', emailAddress: 'john@example.com', isActive: true }

// 3. Configuration merging
function mergeConfigs(defaults, userConfig) {
  const result = { ...defaults };

  Object.keys(userConfig).forEach(key => {
    if (typeof userConfig[key] === 'object' && userConfig[key] !== null &&
        typeof defaults[key] === 'object' && defaults[key] !== null) {
      result[key] = mergeConfigs(defaults[key], userConfig[key]);
    } else {
      result[key] = userConfig[key];
    }
  });

  return result;
}

const defaultConfig = {
  theme: 'light',
  notifications: { email: true, push: false },
  timeout: 5000
};

const userConfig = {
  theme: 'dark',
  notifications: { push: true }
};

console.log(mergeConfigs(defaultConfig, userConfig));

// 4. Object schema validation
function validateAgainstSchema(obj, schema) {
  const errors = [];

  Object.keys(schema).forEach(key => {
    const rules = schema[key];
    const value = obj[key];

    if (rules.required && (value === undefined || value === null)) {
      errors.push(\`\${key} is required\`);
      return;
    }

    if (value !== undefined && rules.type && typeof value !== rules.type) {
      errors.push(\`\${key} must be of type \${rules.type}\`);
    }

    if (value !== undefined && rules.minLength && value.length < rules.minLength) {
      errors.push(\`\${key} must be at least \${rules.minLength} characters\`);
    }

    if (value !== undefined && rules.pattern && !rules.pattern.test(value)) {
      errors.push(\`\${key} format is invalid\`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

const userSchema = {
  name: { required: true, type: 'string', minLength: 2 },
  email: { required: true, type: 'string', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  age: { type: 'number' }
};

const testUser = { name: 'Jo', email: 'invalid-email', age: '25' };
console.log(validateAgainstSchema(testUser, userSchema));

// 5. Data transformation pipeline
function createTransformer(transforms) {
  return function(obj) {
    const result = { ...obj };

    Object.keys(transforms).forEach(key => {
      if (key in result) {
        result[key] = transforms[key](result[key]);
      }
    });

    return result;
  };
}

const userTransformer = createTransformer({
  name: (v) => v.trim().toLowerCase(),
  email: (v) => v.toLowerCase(),
  age: (v) => parseInt(v, 10),
  createdAt: (v) => new Date(v)
});

const rawUser = {
  name: '  JOHN DOE  ',
  email: 'John.Doe@Example.COM',
  age: '30',
  createdAt: '2024-01-01T00:00:00Z'
};

console.log(userTransformer(rawUser));

// 6. Object diffing
function objectDiff(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = new Set([...keys1, ...keys2]);

  const diff = {
    added: [],
    removed: [],
    changed: [],
    unchanged: []
  };

  for (const key of allKeys) {
    const in1 = key in obj1;
    const in2 = key in obj2;

    if (in1 && in2) {
      if (obj1[key] !== obj2[key]) {
        diff.changed.push(key);
      } else {
        diff.unchanged.push(key);
      }
    } else if (in1) {
      diff.removed.push(key);
    } else {
      diff.added.push(key);
    }
  }

  return diff;
}

const oldUser = { name: 'John', age: 30, city: 'NYC' };
const newUser = { name: 'Jane', age: 30, email: 'jane@example.com' };

console.log(objectDiff(oldUser, newUser));
// { added: ['email'], removed: ['city'], changed: ['name'], unchanged: ['age'] }

// 7. Selective object copying
function pick(obj, keys) {
  const result = {};
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

function omit(obj, keys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  });
  return result;
}

const fullUser = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  password: 'secret',
  createdAt: '2024-01-01'
};

console.log(pick(fullUser, ['id', 'name', 'email']));
// { id: 1, name: 'John', email: 'john@example.com' }

console.log(omit(fullUser, ['password', 'createdAt']));
// { id: 1, name: 'John', email: 'john@example.com' }

// 8. Object memoization
function memoizeObject(fn) {
  const cache = new Map();

  return function(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    const key = JSON.stringify([keys, values]);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(obj);
    cache.set(key, result);
    return result;
  };
}

const expensiveOperation = memoizeObject((user) => {
  // Simulate expensive computation
  console.log('Computing for:', user.name);
  return {
    ...user,
    score: user.age * 10 + user.name.length
  };
});

console.log(expensiveOperation({ name: 'John', age: 30 })); // Computes
console.log(expensiveOperation({ name: 'John', age: 30 })); // Cached

// 9. Batch object operations
function batchUpdate(objects, updates) {
  return objects.map(obj => {
    const updated = { ...obj };
    Object.keys(updates).forEach(key => {
      if (key in updated) {
        updated[key] = updates[key](updated[key]);
      }
    });
    return updated;
  });
}

const users = [
  { name: 'John', age: 30, salary: 50000 },
  { name: 'Jane', age: 25, salary: 45000 }
];

const updates = {
  age: (age) => age + 1,
  salary: (salary) => salary * 1.05
};

console.log(batchUpdate(users, updates));

// 10. Object serialization control
function serialize(obj, options = {}) {
  const {
    exclude = [],
    include = null,
    transform = (key, value) => value
  } = options;

  const result = {};

  Object.keys(obj).forEach(key => {
    if (exclude.includes(key)) return;
    if (include && !include.includes(key)) return;

    result[key] = transform(key, obj[key]);
  });

  return result;
}

const sensitiveData = {
  id: 1,
  name: 'John',
  password: 'secret',
  email: 'john@example.com',
  ssn: '123-45-6789'
};

console.log(serialize(sensitiveData, {
  exclude: ['password', 'ssn'],
  transform: (key, value) => typeof value === 'string' ? value.toUpperCase() : value
}));`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Performance and Best Practices</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance Optimization</h3>
          <p className="text-slate-700 mb-4">
            Understanding performance characteristics and optimization techniques.
          </p>

          <CodeExample
            title="Object.keys() Performance Optimization"
            code={`// 1. Cache Object.keys() results when used multiple times
function processObject(obj) {
  const keys = Object.keys(obj); // Cache once

  // Use keys multiple times
  const keyCount = keys.length;
  const firstKey = keys[0];
  const lastKey = keys[keys.length - 1];

  return { keyCount, firstKey, lastKey };
}

// Bad: Calling Object.keys() multiple times
function badProcessObject(obj) {
  const keyCount = Object.keys(obj).length; // Don't do this
  const firstKey = Object.keys(obj)[0];     // Or this
  const lastKey = Object.keys(obj)[Object.keys(obj).length - 1]; // Definitely not this

  return { keyCount, firstKey, lastKey };
}

// 2. Use appropriate enumeration method
const obj = { a: 1, b: 2, c: 3 };

// For simple iteration - Object.keys() is fine
Object.keys(obj).forEach(key => console.log(key));

// For checking existence - use 'in' or hasOwnProperty
console.log('a' in obj); // Fast
console.log(obj.hasOwnProperty('a')); // Also fast

// For large objects, consider alternatives
const largeObj = {};
for (let i = 0; i < 100000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

// Object.keys() creates an array - memory intensive for large objects
console.time('Object.keys large');
const largeKeys = Object.keys(largeObj);
console.timeEnd('Object.keys large');

// For...in might be better for very large objects
console.time('for...in large');
let count = 0;
for (const key in largeObj) {
  if (largeObj.hasOwnProperty(key)) count++;
}
console.timeEnd('for...in large');

// 3. Avoid Object.keys() in hot loops
const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  value: Math.random()
}));

// Bad: Calling Object.keys() in loop
console.time('keys in loop');
for (const item of data) {
  const keys = Object.keys(item); // Called 1000 times
  console.log(keys.length);
}
console.timeEnd('keys in loop');

// Good: Pre-calculate if structure is known
console.time('pre-calculated');
const itemKeys = Object.keys(data[0]); // Calculate once
for (const item of data) {
  console.log(itemKeys.length);
}
console.timeEnd('pre-calculated');

// 4. Use Set for fast lookups when needed
const lookupObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const lookupKeys = Object.keys(lookupObj);

// For multiple lookups, convert to Set
const keySet = new Set(lookupKeys);

console.time('array includes');
for (let i = 0; i < 1000; i++) {
  lookupKeys.includes('c');
}
console.timeEnd('array includes');

console.time('set has');
for (let i = 0; i < 1000; i++) {
  keySet.has('c');
}
console.timeEnd('set has');

// Set.has() is faster for multiple lookups

// 5. Memory considerations
function memoryEfficientKeys(obj) {
  // For very large objects, consider lazy evaluation
  if (Object.keys(obj).length > 10000) {
    console.warn('Large object detected, consider alternative approaches');
  }
  return Object.keys(obj);
}

// 6. Benchmark different approaches
function benchmarkKeys(obj, iterations = 10000) {
  const results = {};

  // Object.keys()
  console.time('Object.keys');
  for (let i = 0; i < iterations; i++) {
    const keys = Object.keys(obj);
  }
  console.timeEnd('Object.keys');

  // for...in with hasOwnProperty
  console.time('for...in');
  for (let i = 0; i < iterations; i++) {
    const keys = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
  }
  console.timeEnd('for...in');

  // Reflect.ownKeys() - includes symbols
  console.time('Reflect.ownKeys');
  for (let i = 0; i < iterations; i++) {
    const keys = Reflect.ownKeys(obj);
  }
  console.timeEnd('Reflect.ownKeys');

  return results;
}

const testObj = {};
for (let i = 0; i < 100; i++) {
  testObj[\`prop\${i}\`] = i;
}

benchmarkKeys(testObj);

// 7. Optimize for specific use cases
const config = {
  debug: true,
  version: '1.0.0',
  features: ['auth', 'cache', 'logging']
};

// If you only need to check existence
function hasConfig(obj, key) {
  return key in obj; // Faster than Object.keys().includes()
}

// If you need the actual keys array
function getConfigKeys(obj) {
  return Object.keys(obj); // Creates array
}

// If you need to iterate and modify
function processConfig(obj, processor) {
  const keys = Object.keys(obj);
  const result = {};

  for (const key of keys) {
    result[key] = processor(key, obj[key]);
  }

  return result;
}

// 8. Avoid unnecessary object creation
// Bad
function badFilter(obj, predicate) {
  return Object.keys(obj)
    .filter(key => predicate(key, obj[key]))
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
}

// Good - single pass
function goodFilter(obj, predicate) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && predicate(key, obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}

// 9. Use appropriate data structures
// For frequent additions/deletions, consider Map
const frequentChanges = new Map();

// Instead of:
const objChanges = {};
objChanges.key1 = 'value1';
delete objChanges.key1;

// Use:
frequentChanges.set('key1', 'value1');
frequentChanges.delete('key1');

// Map maintains insertion order and is optimized for changes

// 10. Profile memory usage
function memoryProfile(fn, ...args) {
  const startMemory = process.memoryUsage?.().heapUsed || 0;

  const result = fn(...args);

  const endMemory = process.memoryUsage?.().heapUsed || 0;
  const memoryDelta = endMemory - startMemory;

  console.log(\`Memory delta: \${(memoryDelta / 1024 / 1024).toFixed(2)} MB\`);

  return result;
}

const largeData = {};
for (let i = 0; i < 50000; i++) {
  largeData[\`key\${i}\`] = \`value\${i}\`;
}

memoryProfile(() => Object.keys(largeData));`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Best Practices and Common Patterns</h3>
          <p className="text-slate-700 mb-4">
            Essential best practices for using Object.keys() effectively.
          </p>

          <CodeExample
            title="Object.keys() Best Practices"
            code={`// 1. Always check for null/undefined
function safeKeys(obj) {
  return obj == null ? [] : Object.keys(obj);
}

console.log(safeKeys(null)); // []
console.log(safeKeys({})); // []
console.log(safeKeys({ a: 1 })); // ['a']

// 2. Use Object.keys() for array-like operations
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);

// Array methods work
console.log(keys.map(key => key.toUpperCase())); // ['A', 'B', 'C']
console.log(keys.filter(key => key > 'a')); // ['b', 'c']
console.log(keys.sort()); // ['a', 'b', 'c']

// 3. Prefer Object.keys() over for...in for modern code
// Modern approach
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});

// Legacy approach (avoid)
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

// 4. Use destructuring with Object.keys()
const { length } = Object.keys(obj);
const [firstKey] = Object.keys(obj);
const { [Object.keys(obj).length - 1]: lastKey } = Object.keys(obj);

// Better approach
const keys2 = Object.keys(obj);
const first = keys2[0];
const last = keys2[keys2.length - 1];

// 5. Combine with other object methods
const data = { x: 10, y: 20, z: 30 };

// Get entries
const entries = Object.keys(data).map(key => [key, data[key]]);
console.log(entries); // [['x', 10], ['y', 20], ['z', 30]]

// Get values
const values = Object.keys(data).map(key => data[key]);
console.log(values); // [10, 20, 30]

// 6. Use for validation and type checking
function validateShape(obj, requiredKeys) {
  const objKeys = Object.keys(obj);
  return requiredKeys.every(key => objKeys.includes(key));
}

function hasStringKeysOnly(obj) {
  return Object.keys(obj).every(key => typeof key === 'string');
}

function countValueTypes(obj) {
  return Object.keys(obj).reduce((counts, key) => {
    const type = typeof obj[key];
    counts[type] = (counts[type] || 0) + 1;
    return counts;
  }, {});
}

// 7. Avoid common pitfalls
const obj2 = { a: 1, b: 2 };

// Don't modify array returned by Object.keys()
const keys3 = Object.keys(obj2);
// keys3.push('c'); // Don't do this - modifies the keys array

// Instead, create new array
const extendedKeys = [...Object.keys(obj2), 'c'];

// 8. Use appropriate alternatives when needed
// For checking existence
console.log('a' in obj2); // true
console.log(obj2.hasOwnProperty('a')); // true

// For getting all properties including non-enumerable
console.log(Object.getOwnPropertyNames(obj2));

// For getting property descriptors
console.log(Object.getOwnPropertyDescriptors(obj2));

// 9. Performance considerations for large objects
function processLargeObject(obj) {
  const keys = Object.keys(obj);

  // For very large objects, consider processing in chunks
  const chunkSize = 1000;
  for (let i = 0; i < keys.length; i += chunkSize) {
    const chunk = keys.slice(i, i + chunkSize);
    // Process chunk
    chunk.forEach(key => {
      // Do something with obj[key]
    });
  }
}

// 10. Use with modern JavaScript features
// With optional chaining
const nested = { user: { profile: { name: 'John' } } };
const path = 'user.profile.name';

function safeGet(obj, path) {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    current = current?.[key];
  }

  return current;
}

// With nullish coalescing
function getKeys(obj) {
  return Object.keys(obj ?? {});
}

// 11. Document object structures
/**
 * @typedef {Object} User
 * @property {string} name - User's full name
 * @property {number} age - User's age
 * @property {string} email - User's email address
 */

/**
 * Validates a user object
 * @param {any} obj - Object to validate
 * @returns {boolean} True if valid user object
 */
function isValidUser(obj) {
  const requiredKeys = ['name', 'age', 'email'];
  const objKeys = Object.keys(obj);

  return requiredKeys.every(key => objKeys.includes(key)) &&
         typeof obj.name === 'string' &&
         typeof obj.age === 'number' &&
         typeof obj.email === 'string';
}

// 12. Create utility functions
const objectUtils = {
  // Get object size
  size(obj) {
    return Object.keys(obj ?? {}).length;
  },

  // Check if empty
  isEmpty(obj) {
    return this.size(obj) === 0;
  },

  // Get first key
  firstKey(obj) {
    return Object.keys(obj ?? {})[0];
  },

  // Get last key
  lastKey(obj) {
    const keys = Object.keys(obj ?? {});
    return keys[keys.length - 1];
  },

  // Check if has any of the keys
  hasAny(obj, keys) {
    const objKeys = Object.keys(obj ?? {});
    return keys.some(key => objKeys.includes(key));
  },

  // Check if has all of the keys
  hasAll(obj, keys) {
    const objKeys = Object.keys(obj ?? {});
    return keys.every(key => objKeys.includes(key));
  }
};

const testObj = { a: 1, b: 2, c: 3 };
console.log(objectUtils.size(testObj)); // 3
console.log(objectUtils.hasAny(testObj, ['a', 'd'])); // true
console.log(objectUtils.hasAll(testObj, ['a', 'd'])); // false

// 13. Error handling
function safeObjectOperation(obj, operation) {
  try {
    if (obj == null) {
      throw new TypeError('Object cannot be null or undefined');
    }

    const keys = Object.keys(obj);
    return operation(keys, obj);
  } catch (error) {
    console.error('Object operation failed:', error.message);
    return null;
  }
}

safeObjectOperation({ a: 1, b: 2 }, (keys, obj) => {
  return keys.map(key => obj[key] * 2);
}); // [2, 4]

// 14. Testing utilities
function createMockObject(keys, valueFn = () => Math.random()) {
  return keys.reduce((obj, key) => {
    obj[key] = valueFn(key);
    return obj;
  }, {});
}

function assertKeys(obj, expectedKeys) {
  const actualKeys = Object.keys(obj).sort();
  const expected = [...expectedKeys].sort();

  if (JSON.stringify(actualKeys) !== JSON.stringify(expected)) {
    throw new Error(\`Expected keys \${expected}, but got \${actualKeys}\`);
  }
}

// 15. Integration with other libraries
// Example with Lodash-like API
const _ = {
  keys: Object.keys,

  values(obj) {
    return Object.keys(obj ?? {}).map(key => obj[key]);
  },

  entries(obj) {
    return Object.keys(obj ?? {}).map(key => [key, obj[key]]);
  },

  pick(obj, keys) {
    const result = {};
    keys.forEach(key => {
      if (key in (obj ?? {})) {
        result[key] = obj[key];
      }
    });
    return result;
  },

  omit(obj, keys) {
    const result = {};
    Object.keys(obj ?? {}).forEach(key => {
      if (!keys.includes(key)) {
        result[key] = obj[key];
      }
    });
    return result;
  }
};

const sample = { a: 1, b: 2, c: 3, d: 4 };
console.log(_.pick(sample, ['a', 'c'])); // { a: 1, c: 3 }
console.log(_.omit(sample, ['b', 'd'])); // { a: 1, c: 3 }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object.keys() is a fundamental method for working with object properties in JavaScript.
            Understanding its behavior, performance characteristics, and proper usage patterns enables
            efficient and maintainable code.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Object.keys() Key Points</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Returns:</h4>
                <p className="text-slate-700">Array of enumerable own property names</p>
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
                <p className="text-slate-700">Iteration, validation, transformation, serialization</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand Object.keys(), explore related methods:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Object.values():</strong> Get property values instead of keys</li>
              <li><strong>Object.entries():</strong> Get key-value pairs as arrays</li>
              <li><strong>Object.getOwnPropertyNames():</strong> Include non-enumerable properties</li>
              <li><strong>Advanced Patterns:</strong> Combining with modern JavaScript features</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}