import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object Spread Syntax - Modern Object Manipulation",
  description: "Master JavaScript object spread syntax with comprehensive guide covering object copying, merging, destructuring, and advanced patterns.",
  keywords: [
    "javascript object spread",
    "spread syntax",
    "object destructuring",
    "object copying",
    "object merging",
    "es6 spread",
    "javascript objects",
    "modern javascript",
    "object manipulation",
    "spread operator"
  ],
  openGraph: {
    title: "JavaScript Object Spread Syntax Guide",
    description: "Master JavaScript object spread syntax with comprehensive guide covering object copying, merging, destructuring, and advanced patterns.",
    url: "/javascript/objects/spread",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Spread Syntax",
    description: "Master JavaScript object spread syntax with comprehensive guide covering object copying, merging, destructuring, and advanced patterns.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/spread" },
};

const spreadSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object Spread Syntax - Modern Object Manipulation",
  "description": "Master JavaScript object spread syntax with comprehensive guide covering object copying, merging, destructuring, and advanced patterns.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectSpreadPage() {
  return (
    <>
      <Script id="spread-schema" type="application/ld+json">
        {JSON.stringify(spreadSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object Spread Syntax: Modern Object Manipulation
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object spread syntax (...) is a powerful ES6 feature for copying, merging, and manipulating objects.
          This comprehensive guide covers spread syntax fundamentals, advanced patterns, performance considerations,
          and practical applications.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Spread Syntax Fundamentals</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Basic Syntax and Usage</h3>
          <p className="text-slate-700 mb-4">
            The spread syntax (...) allows you to expand an object's properties into a new object literal.
            It's a concise way to copy and merge objects.
          </p>

          <CodeExample
            title="Object Spread Syntax Basics"
            code={`// Basic object copying
const original = { a: 1, b: 2, c: 3 };
const copy = { ...original };

console.log(copy); // { a: 1, b: 2, c: 3 }
console.log(copy === original); // false (different objects)

// Adding new properties
const enhanced = { ...original, d: 4, e: 5 };
console.log(enhanced); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

// Overriding properties
const modified = { ...original, b: 20 };
console.log(modified); // { a: 1, b: 20, c: 3 }

// Multiple spreads (later spreads override earlier ones)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };
const obj3 = { c: 30, d: 4 };

const merged = { ...obj1, ...obj2, ...obj3 };
console.log(merged); // { a: 1, b: 20, c: 30, d: 4 }

// Empty object spread (no effect)
const empty = {};
const spreadEmpty = { ...empty, x: 1 };
console.log(spreadEmpty); // { x: 1 }

// Spread with computed property names
const key = 'dynamicKey';
const withComputed = { ...original, [key]: 'dynamic value' };
console.log(withComputed); // { a: 1, b: 2, c: 3, dynamicKey: 'dynamic value' }

// Spread preserves property order
const ordered = { z: 26, a: 1, m: 13 };
const spreadOrdered = { ...ordered };
console.log(Object.keys(spreadOrdered)); // ['z', 'a', 'm']

// Symbol properties are copied
const withSymbol = { [Symbol('secret')]: 'hidden', regular: 'visible' };
const symbolCopy = { ...withSymbol };
console.log(Object.getOwnPropertySymbols(symbolCopy)); // [Symbol(secret)]

// Getter properties become data properties
const withGetter = {
  get dynamic() { return Math.random(); },
  static: 'value'
};

const getterCopy = { ...withGetter };
console.log(typeof getterCopy.dynamic); // 'number' (data property)
console.log(getterCopy.dynamic); // some random number

// Methods are copied
const withMethod = {
  value: 42,
  getValue() { return this.value; }
};

const methodCopy = { ...withMethod };
console.log(methodCopy.getValue()); // 42

// But 'this' context is lost
const boundCopy = { ...withMethod };
boundCopy.value = 100;
console.log(boundCopy.getValue()); // 100 (works because method copied)

// Primitive values as spreads (ignored)
const spreadPrimitives = { ...null, ...undefined, ...42, ...'string', a: 1 };
console.log(spreadPrimitives); // { a: 1 }

// Only object properties are spread
const arrayAsObject = [1, 2, 3];
arrayAsObject.customProp = 'custom';

const spreadArray = { ...arrayAsObject };
console.log(spreadArray); // { 0: 1, 1: 2, 2: 3, customProp: 'custom' }

// Date objects
const date = new Date();
const spreadDate = { ...date };
console.log(spreadDate instanceof Date); // false (plain object)
console.log(spreadDate); // { ...date properties }

// RegExp objects
const regex = /test/gi;
const spreadRegex = { ...regex };
console.log(spreadRegex instanceof RegExp); // false
console.log(spreadRegex); // { source: 'test', flags: 'gi', ... }

// Map and Set (only enumerable properties)
const map = new Map([['key', 'value']]);
const spreadMap = { ...map };
console.log(spreadMap); // {} (Map internals not enumerable)

// Error objects
const error = new Error('test');
const spreadError = { ...error };
console.log(spreadError instanceof Error); // false
console.log(spreadError.message); // 'test'

// Functions
function originalFunc() { return 'original'; }
originalFunc.customProp = 'custom';

const spreadFunc = { ...originalFunc };
console.log(typeof spreadFunc); // 'function' (function itself)
console.log(spreadFunc.customProp); // 'custom' (properties copied)

// Prototype properties are not copied
const withProto = Object.create({ inherited: 'value' });
withProto.own = 'own value';

const spreadProto = { ...withProto };
console.log(spreadProto); // { own: 'own value' } (only own properties)

// To copy with prototype, use different approach
const withProtoCopy = Object.assign(Object.create(Object.getPrototypeOf(withProto)), withProto);

// Non-enumerable properties are not copied
const withNonEnum = {};
Object.defineProperty(withNonEnum, 'hidden', {
  value: 'secret',
  enumerable: false
});
withNonEnum.visible = 'public';

const spreadNonEnum = { ...withNonEnum };
console.log(spreadNonEnum); // { visible: 'public' } (only enumerable)

// Spread with rest parameters
function mergeWithRest(first, ...rest) {
  return { ...first, ...Object.assign({}, ...rest) };
}

const result = mergeWithRest({ a: 1 }, { b: 2 }, { c: 3 });
console.log(result); // { a: 1, b: 2, c: 3 }

// Spread in class constructors
class Configurable {
  constructor(config = {}) {
    Object.assign(this, { enabled: true, timeout: 5000 }, config);
  }
}

// Modern way with spread
class ModernConfigurable {
  constructor(config = {}) {
    this.config = { enabled: true, timeout: 5000, ...config };
  }
}

// Spread with template literals (not directly related but useful)
const dynamicObj = {
  [\`prop_\${Date.now()}\`]: 'dynamic',
  ...{ static: 'value' }
};

// Spread order matters
const order1 = { a: 1, ...{ b: 2 }, c: 3 };
const order2 = { ...{ a: 1, b: 2 }, c: 3 };

console.log(order1); // { a: 1, b: 2, c: 3 }
console.log(order2); // { a: 1, b: 2, c: 3 }

// Spread with conditional properties
const condition = true;
const conditional = {
  always: 'present',
  ...(condition && { optional: 'included' })
};

console.log(conditional); // { always: 'present', optional: 'included' }

// Spread with logical operators
const logical = {
  base: 'value',
  ...(Math.random() > 0.5 && { random: 'included' }),
  ...(false && { never: 'included' })
};

// Spread in array context (different behavior)
const arraySpread = [...[1, 2, 3], 4, 5];
console.log(arraySpread); // [1, 2, 3, 4, 5]

// Object spread vs array spread
const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];

const spreadObj = { ...obj }; // { a: 1, b: 2 }
const spreadArr = [...arr]; // [1, 2, 3]

// Mixed spread
const mixed = { ...obj, ...arr }; // { 0: 1, 1: 2, 2: 3, a: 1, b: 2 }

// Spread with destructuring
const { x, y, ...rest } = { x: 1, y: 2, z: 3, w: 4 };
console.log(x, y, rest); // 1, 2, { z: 3, w: 4 }

// Spread in function parameters
function spreadFunction(...args) {
  return { ...args }; // Wait, this doesn't work for objects
}

// Correct way for object spread in functions
function objectSpreadFunction(obj) {
  return { ...obj, processed: true };
}

console.log(objectSpreadFunction({ a: 1 })); // { a: 1, processed: true }

// Spread with async/await
async function asyncSpread() {
  const data = await fetch('/api/data').then(r => r.json());
  return { ...data, timestamp: Date.now() };
}

// Spread in promises
Promise.resolve({ a: 1 }).then(obj => ({ ...obj, b: 2 })).then(console.log);

// Spread with generators
function* objectGenerator(template) {
  let id = 0;
  while (true) {
    yield { ...template, id: id++ };
  }
}

const gen = objectGenerator({ type: 'item' });
console.log(gen.next().value); // { type: 'item', id: 0 }
console.log(gen.next().value); // { type: 'item', id: 1 }

// Spread with WeakMap/WeakSet (doesn't work)
const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey, 'value');

// const spreadWeak = { ...weakMap }; // Error: WeakMap is not iterable

// Spread with Proxy
const proxy = new Proxy({ a: 1 }, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return target[prop];
  }
});

const spreadProxy = { ...proxy }; // Triggers get for each property
console.log(spreadProxy); // { a: 1 }

// Spread with frozen objects
const frozen = Object.freeze({ a: 1, b: 2 });
const spreadFrozen = { ...frozen };
console.log(Object.isFrozen(spreadFrozen)); // false (spread creates new object)

// Spread with sealed objects
const sealed = Object.seal({ a: 1, b: 2 });
const spreadSealed = { ...sealed };
console.log(Object.isSealed(spreadSealed)); // false (spread creates new object)

// Spread performance consideration
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

console.time('Spread copy');
const spreadCopy = { ...largeObj };
console.timeEnd('Spread copy');

console.time('Object.assign copy');
const assignCopy = Object.assign({}, largeObj);
console.timeEnd('Object.assign copy');

// Spread is often faster for simple operations

// Spread with circular references
const circular = { self: null };
circular.self = circular;

const spreadCircular = { ...circular };
console.log(spreadCircular.self === spreadCircular); // true

// Complex circular structures may cause issues
// Use structuredClone() for complex cases if available`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Shallow Copy Behavior</h3>
          <p className="text-slate-700 mb-4">
            Understanding how spread syntax creates shallow copies and when deep copying is needed.
          </p>

          <CodeExample
            title="Spread Syntax Shallow Copy Behavior"
            code={`// Spread syntax creates shallow copies
const original = {
  primitive: 'value',
  nested: { inner: 'nested value' },
  array: [1, 2, 3]
};

const shallowCopy = { ...original };

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
// 1. Recursive deep copy
function deepCopy(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

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

  const copy = {};
  visited.set(obj, copy);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key], visited);
    }
  }

  return copy;
}

const deepCopy1 = deepCopy(original);
deepCopy1.nested.inner = 'deep copied';
console.log(original.nested.inner); // 'modified nested' (unchanged)

// 2. JSON.parse(JSON.stringify()) - simple but has limitations
const deepCopy2 = JSON.parse(JSON.stringify(original));
deepCopy2.nested.inner = 'json copied';
console.log(original.nested.inner); // 'modified nested' (unchanged)

// Limitations of JSON approach
const withFunctions = {
  func: () => console.log('test'),
  date: new Date(),
  regex: /test/,
  undefined: undefined,
  symbol: Symbol('test')
};

try {
  const jsonCopy = JSON.parse(JSON.stringify(withFunctions));
  console.log(jsonCopy); // { date: string } - functions, undefined, symbols lost
} catch (error) {
  console.log('JSON copy failed');
}

// 3. structuredClone() - modern browsers
if (typeof structuredClone === 'function') {
  const structuredCopy = structuredClone(original);
  structuredCopy.nested.inner = 'structured cloned';
  console.log(original.nested.inner); // 'modified nested' (unchanged)
  console.log(structuredCopy.date instanceof Date); // true (if had dates)
}

// 4. Shallow copy with specific depth
function shallowCopyDepth1(obj) {
  const copy = { ...obj };

  // Manually copy first level of nested objects
  Object.keys(copy).forEach(key => {
    if (copy[key] && typeof copy[key] === 'object' && !Array.isArray(copy[key])) {
      copy[key] = { ...copy[key] };
    }
  });

  return copy;
}

const depth1Copy = shallowCopyDepth1(original);
depth1Copy.nested.inner = 'depth 1 copied';
console.log(original.nested.inner); // 'modified nested' (unchanged)

// 5. Selective deep copying
function selectiveDeepCopy(obj, deepKeys = []) {
  const copy = { ...obj };

  deepKeys.forEach(key => {
    if (copy[key] && typeof copy[key] === 'object') {
      copy[key] = deepCopy(copy[key]);
    }
  });

  return copy;
}

const selectiveCopy = selectiveDeepCopy(original, ['nested']);
selectiveCopy.nested.inner = 'selectively copied';
console.log(original.nested.inner); // 'modified nested' (unchanged)

// 6. Immutable update patterns
const state = {
  user: { name: 'John', profile: { age: 30 } },
  settings: { theme: 'dark' }
};

// Bad: Direct mutation
// state.user.name = 'Jane'; // Mutates original!

// Good: Immutable updates with spread
const newState1 = {
  ...state,
  user: {
    ...state.user,
    name: 'Jane'
  }
};

const newState2 = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      age: 31
    }
  }
};

console.log(state.user.name); // 'John' (unchanged)
console.log(newState1.user.name); // 'Jane'
console.log(newState2.user.profile.age); // 31

// 7. Deep merge vs shallow spread
function deepMerge(target, source) {
  const result = { ...target };

  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });

  return result;
}

const objA = { a: { x: 1, y: 2 }, b: 3 };
const objB = { a: { y: 20, z: 3 }, c: 4 };

console.log({ ...objA, ...objB }); // { a: { y: 20, z: 3 }, b: 3, c: 4 } (shallow)
console.log(deepMerge(objA, objB)); // { a: { x: 1, y: 20, z: 3 }, b: 3, c: 4 } (deep)

// 8. When to use shallow vs deep copy
// Use shallow copy (spread) when:
// - Objects have only primitive values
// - You're creating a new reference but don't mind shared nested objects
// - Performance is critical and you know the structure
// - You want to preserve object identity for unchanged parts

// Use deep copy when:
// - Objects have nested objects/arrays that will be modified
// - You need complete isolation between original and copy
// - Objects contain complex types (Date, RegExp, etc.)
// - You need to handle circular references

// 9. Performance comparison
const largeNestedObj = {};
for (let i = 0; i < 1000; i++) {
  largeNestedObj[\`prop\${i}\`] = {
    nested: { value: Math.random() },
    array: [1, 2, 3]
  };
}

console.time('Shallow spread');
const shallowSpread = { ...largeNestedObj };
console.timeEnd('Shallow spread');

console.time('Deep copy (limited)');
const deepLimited = Object.keys(largeNestedObj).reduce((acc, key) => {
  acc[key] = { ...largeNestedObj[key] };
  return acc;
}, {});
console.timeEnd('Deep copy (limited)');

// 10. Spread with arrays (different behavior)
const originalArray = [1, 2, { nested: 'value' }];
const spreadArray = [...originalArray];

spreadArray[2].nested = 'modified';
console.log(originalArray[2].nested); // 'modified' (shallow copy)

// 11. Safe spread patterns
function safeSpread(obj) {
  if (obj === null || obj === undefined) {
    return {};
  }

  if (typeof obj !== 'object') {
    return {};
  }

  try {
    return { ...obj };
  } catch (error) {
    console.warn('Spread failed:', error.message);
    return {};
  }
}

console.log(safeSpread(null)); // {}
console.log(safeSpread({ a: 1 })); // { a: 1 }

// 12. Spread with prototype chains
const withProto = Object.create({ inherited: 'value' });
withProto.own = 'own value';

const spreadProto = { ...withProto };
console.log(spreadProto); // { own: 'own value' } (only own properties)

// To preserve prototype
const withProtoPreserved = Object.assign(
  Object.create(Object.getPrototypeOf(withProto)),
  withProto
);

// 13. Spread vs Object.assign() performance
const testObj = {};
for (let i = 0; i < 10000; i++) {
  testObj[\`key\${i}\`] = \`value\${i}\`;
}

console.time('Spread syntax');
for (let i = 0; i < 100; i++) {
  const copy = { ...testObj };
}
console.timeEnd('Spread syntax');

console.time('Object.assign()');
for (let i = 0; i < 100; i++) {
  const copy = Object.assign({}, testObj);
}
console.timeEnd('Object.assign()');

// Spread is often faster for simple operations

// 14. Memory implications
// Each spread creates a new object
const chain = [];
for (let i = 0; i < 1000; i++) {
  chain.push({ ...chain[chain.length - 1] || {}, [\`prop\${i}\`]: i });
}

console.log(chain.length); // 1000
// Each object in chain is separate, but shares no references

// 15. Spread with getters/setters
const withAccessor = {
  _value: 42,
  get value() { return this._value; },
  set value(v) { this._value = v; }
};

const spreadAccessor = { ...withAccessor };
console.log(spreadAccessor.value); // 42
spreadAccessor.value = 100;
console.log(spreadAccessor.value); // 100

// Getters become data properties
console.log(Object.getOwnPropertyDescriptor(spreadAccessor, 'value'));
// { value: 42, writable: true, enumerable: true, configurable: true }

// 16. Spread with frozen/sealed objects
const frozen = Object.freeze({ a: 1, b: 2 });
const spreadFrozen = { ...frozen };

console.log(Object.isFrozen(spreadFrozen)); // false
spreadFrozen.c = 3; // Allowed
console.log(spreadFrozen); // { a: 1, b: 2, c: 3 }

// 17. Circular reference handling
const circular = { name: 'circular' };
circular.self = circular;

const spreadCircular = { ...circular };
console.log(spreadCircular.self === spreadCircular); // true

// Complex circular structures
const complexCircular = {
  a: { name: 'a' },
  b: { name: 'b' }
};
complexCircular.a.ref = complexCircular.b;
complexCircular.b.ref = complexCircular.a;

const spreadComplex = { ...complexCircular };
// This works but creates new references

// 18. Spread with symbols
const withSymbols = {
  [Symbol('a')]: 'symbol a',
  [Symbol('b')]: 'symbol b',
  regular: 'regular'
};

const spreadSymbols = { ...withSymbols };
console.log(Object.getOwnPropertySymbols(spreadSymbols).length); // 2

// 19. Spread in different contexts
// In object literals
const objLiteral = { ...{ a: 1 }, b: 2 };

// In function calls (rest parameters)
function restFunction(...args) {
  return args;
}

// In array literals (different syntax)
const arrLiteral = [...[1, 2], 3, 4];

// In destructuring (rest)
const { x, ...rest } = { x: 1, y: 2, z: 3 };

// 20. Advanced spread patterns
// Conditional spreading
const config = {
  base: 'config',
  ...(process.env.NODE_ENV === 'development' && { debug: true }),
  ...(Math.random() > 0.5 && { randomFeature: true })
};

// Computed property spreading
const dynamic = {
  ...{ base: 'value' },
  [Date.now()]: 'timestamp'
};

// Spread with method binding
const methods = {
  getValue() { return this.value; },
  setValue(v) { this.value = v; }
};

const boundMethods = {
  ...methods,
  getValue: methods.getValue.bind(methods),
  setValue: methods.setValue.bind(methods)
};

// Spread with validation
function validatedSpread(target, source, validator) {
  const validSource = Object.keys(source).reduce((acc, key) => {
    if (validator(key, source[key])) {
      acc[key] = source[key];
    }
    return acc;
  }, {});

  return { ...target, ...validSource };
}

const validated = validatedSpread(
  { a: 1 },
  { b: 2, invalid: null },
  (key, value) => value !== null
);
console.log(validated); // { a: 1, b: 2 }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Advanced Spread Patterns</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Conditional and Dynamic Spreading</h3>
          <p className="text-slate-700 mb-4">
            Using spread syntax with conditional logic, computed properties, and dynamic object construction.
          </p>

          <CodeExample
            title="Advanced Spread Patterns"
            code={`// 1. Conditional spreading
const environment = 'development';
const baseConfig = { apiUrl: 'https://api.example.com' };

const config = {
  ...baseConfig,
  ...(environment === 'development' && {
    debug: true,
    logLevel: 'verbose',
    devTools: true
  }),
  ...(environment === 'production' && {
    minify: true,
    compress: true
  })
};

console.log(config);

// 2. Dynamic property spreading
function createDynamicObject(base, dynamicProps) {
  return {
    ...base,
    ...dynamicProps.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {})
  };
}

const dynamic = createDynamicObject(
  { base: 'value' },
  [['dynamic1', 'value1'], ['dynamic2', 'value2']]
);

// 3. Spread with computed property names
const createAction = (type, payload) => ({
  type,
  payload,
  timestamp: Date.now(),
  ...(['CREATE', 'UPDATE'].includes(type) && { optimistic: true }),
  ...(type === 'DELETE' && { cascade: true })
});

console.log(createAction('CREATE', { id: 1 }));
console.log(createAction('DELETE', { id: 1 }));

// 4. Nested conditional spreading
const user = {
  id: 123,
  name: 'John',
  role: 'admin',
  permissions: ['read', 'write']
};

const userView = {
  ...user,
  ...(user.role === 'admin' && {
    adminPanel: true,
    systemAccess: true
  }),
  ...(user.permissions.includes('write') && {
    canEdit: true,
    canDelete: true
  }),
  // Override computed properties
  displayName: user.name.toUpperCase()
};

console.log(userView);

// 5. Spread with validation
function validatedSpread(target, source, validators = {}) {
  const validated = {};

  Object.keys(source).forEach(key => {
    const validator = validators[key];
    const value = source[key];

    if (!validator || validator(value)) {
      validated[key] = value;
    }
  });

  return { ...target, ...validated };
}

const validators = {
  age: (v) => typeof v === 'number' && v >= 0 && v <= 150,
  email: (v) => typeof v === 'string' && v.includes('@')
};

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  invalidAge: -5,
  invalidEmail: 'not-an-email'
};

const validUser = validatedSpread({}, userData, validators);
console.log(validUser);

// 6. Spread with transformation
function transformAndSpread(target, source, transformers = {}) {
  const transformed = {};

  Object.keys(source).forEach(key => {
    const transformer = transformers[key];
    let value = source[key];

    if (transformer) {
      value = transformer(value);
    }

    transformed[key] = value;
  });

  return { ...target, ...transformed };
}

const transformers = {
  name: (v) => v.toUpperCase(),
  age: (v) => v + 10,
  tags: (v) => v.map(tag => tag.toLowerCase())
};

const rawData = {
  name: 'john',
  age: 25,
  tags: ['ADMIN', 'USER']
};

const transformedData = transformAndSpread({}, rawData, transformers);
console.log(transformedData);

// 7. Spread with async data
async function createUserFromAPI(apiData) {
  const user = {
    id: apiData.id,
    name: apiData.name,
    ...((await checkPremiumStatus(apiData.id)) && {
      premium: true,
      features: ['advanced', 'priority']
    }),
    ...(apiData.settings && {
      settings: { ...apiData.settings }
    })
  };

  return user;
}

// Mock async function
async function checkPremiumStatus(id) {
  return id % 2 === 0; // Even IDs are premium
}

// 8. Spread with method binding
const baseMethods = {
  save() { console.log('Saving', this.data); },
  load() { console.log('Loading', this.id); }
};

function createModel(data) {
  return {
    ...data,
    ...baseMethods,
    // Bind methods to this instance
    save: baseMethods.save.bind(this),
    load: baseMethods.load.bind(this)
  };
}

const model = createModel({ id: 1, data: 'test' });
model.save(); // 'Saving test'

// 9. Spread with inheritance simulation
const animal = {
  type: 'animal',
  speak() { console.log('Animal sound'); }
};

const dog = {
  ...animal,
  type: 'dog',
  speak() { console.log('Woof!'); },
  fetch() { console.log('Fetching ball'); }
};

console.log(dog.type); // 'dog'
dog.speak(); // 'Woof!'
dog.fetch(); // 'Fetching ball'

// 10. Spread with mixins
const EventEmitter = {
  events: {},
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...args));
    }
  }
};

const DataStore = {
  data: {},
  set(key, value) {
    this.data[key] = value;
    this.emit('change', key, value);
  },
  get(key) {
    return this.data[key];
  }
};

function createStore(initialData = {}) {
  return {
    ...EventEmitter,
    ...DataStore,
    data: { ...initialData }
  };
}

const store = createStore({ counter: 0 });
store.on('change', (key, value) => console.log(\`\${key} changed to \${value}\`));
store.set('counter', 1);

// 11. Spread with configuration layers
const defaultConfig = {
  theme: 'light',
  language: 'en',
  notifications: true
};

const userConfig = {
  theme: 'dark'
};

const sessionConfig = {
  language: 'es'
};

const runtimeConfig = {
  notifications: false
};

// Layer configs in order of precedence
const finalConfig = {
  ...defaultConfig,
  ...userConfig,
  ...sessionConfig,
  ...runtimeConfig
};

console.log(finalConfig);

// 12. Spread with feature flags
const features = {
  dashboard: true,
  reports: false,
  admin: false
};

const userPermissions = {
  canViewDashboard: true,
  canGenerateReports: true,
  isAdmin: false
};

const uiConfig = {
  ...features,
  ...userPermissions,
  // Computed features based on permissions
  ...(userPermissions.canViewDashboard && features.dashboard && {
    showDashboard: true
  }),
  ...(userPermissions.canGenerateReports && features.reports && {
    showReports: true
  }),
  ...(userPermissions.isAdmin && features.admin && {
    showAdminPanel: true
  })
};

console.log(uiConfig);

// 13. Spread with error handling
function safeSpread(...sources) {
  return sources.reduce((result, source) => {
    if (source && typeof source === 'object') {
      try {
        return { ...result, ...source };
      } catch (error) {
        console.warn('Failed to spread source:', error.message);
        return result;
      }
    }
    return result;
  }, {});
}

const safeResult = safeSpread(
  { a: 1 },
  null,
  { b: 2 },
  undefined,
  { c: 3 }
);
console.log(safeResult);

// 14. Spread with type checking
function typedSpread(target, source, typeMap = {}) {
  const result = { ...target };

  Object.keys(source).forEach(key => {
    const expectedType = typeMap[key];
    const value = source[key];

    if (!expectedType || typeof value === expectedType) {
      result[key] = value;
    } else {
      console.warn(\`Type mismatch for \${key}: expected \${expectedType}, got \${typeof value}\`);
    }
  });

  return result;
}

const typeMap = {
  age: 'number',
  name: 'string',
  active: 'boolean'
};

const typedResult = typedSpread(
  {},
  { name: 'John', age: 25, active: true, invalid: 'value' },
  typeMap
);
console.log(typedResult);

// 15. Spread with deep merging
function deepSpread(target, ...sources) {
  return sources.reduce((result, source) => {
    if (!source || typeof source !== 'object') return result;

    Object.keys(source).forEach(key => {
      const sourceValue = source[key];
      const targetValue = result[key];

      if (sourceValue && typeof sourceValue === 'object' &&
          targetValue && typeof targetValue === 'object' &&
          !Array.isArray(sourceValue)) {
        result[key] = deepSpread({}, targetValue, sourceValue);
      } else {
        result[key] = sourceValue;
      }
    });

    return result;
  }, { ...target });
}

const deepResult = deepSpread(
  { user: { name: 'John' } },
  { user: { age: 25 } },
  { settings: { theme: 'dark' } }
);
console.log(deepResult);

// 16. Spread with caching
const spreadCache = new WeakMap();

function cachedSpread(...sources) {
  // Simple cache key based on sources
  const key = sources;

  if (spreadCache.has(key)) {
    return spreadCache.get(key);
  }

  const result = sources.reduce((acc, source) => ({ ...acc, ...source }), {});
  spreadCache.set(key, result);
  return result;
}

// 17. Spread with logging
function loggedSpread(label, ...sources) {
  console.group(\`Spreading: \${label}\`);
  sources.forEach((source, i) => {
    console.log(\`Source \${i}:\`, source);
  });

  const result = sources.reduce((acc, source) => ({ ...acc, ...source }), {});
  console.log('Result:', result);
  console.groupEnd();

  return result;
}

const logged = loggedSpread('user config', { a: 1 }, { b: 2 });

// 18. Spread with validation and transformation pipeline
function createPipeline(...steps) {
  return (initial) => steps.reduce((result, step) => step(result), initial);
}

const validationStep = (obj) => {
  // Validate and filter
  const validated = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string' && obj[key].length > 0) {
      validated[key] = obj[key];
    }
  });
  return validated;
};

const transformationStep = (obj) => ({
  ...obj,
  name: obj.name?.toUpperCase(),
  timestamp: Date.now()
});

const pipeline = createPipeline(validationStep, transformationStep);

const processed = pipeline({
  name: 'john',
  empty: '',
  valid: 'value'
});
console.log(processed);

// 19. Spread with conditional object creation
function createConditionalObject(conditions) {
  return {
    base: 'value',
    ...Object.keys(conditions).reduce((acc, key) => {
      if (conditions[key]) {
        acc[key] = \`enabled_\${key}\`;
      }
      return acc;
    }, {})
  };
}

const conditional = createConditionalObject({
  feature1: true,
  feature2: false,
  feature3: true
});
console.log(conditional);

// 20. Spread with method delegation
function delegateMethods(target, source, methods) {
  const delegated = { ...target };

  methods.forEach(method => {
    if (typeof source[method] === 'function') {
      delegated[method] = (...args) => source[method](...args);
    }
  });

  return delegated;
}

const calculator = {
  add(a, b) { return a + b; },
  multiply(a, b) { return a * b; }
};

const safeCalculator = delegateMethods({}, calculator, ['add', 'multiply']);
console.log(safeCalculator.add(2, 3)); // 5`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Spread Syntax vs Object.assign()</h3>
          <p className="text-slate-700 mb-4">
            Comparing spread syntax with Object.assign() for different use cases and performance scenarios.
          </p>

          <CodeExample
            title="Spread Syntax vs Object.assign() Comparison"
            code={`// 1. Basic usage comparison
const obj = { a: 1, b: 2 };

// Both create shallow copies
const spreadCopy = { ...obj };
const assignCopy = Object.assign({}, obj);

console.log(spreadCopy); // { a: 1, b: 2 }
console.log(assignCopy); // { a: 1, b: 2 }

// 2. Merging multiple objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

// Spread syntax
const spreadMerge = { ...obj1, ...obj2, ...obj3 };

// Object.assign()
const assignMerge = Object.assign({}, obj1, obj2, obj3);

console.log(spreadMerge); // { a: 1, b: 2, c: 3 }
console.log(assignMerge); // { a: 1, b: 2, c: 3 }

// 3. Adding properties
const base = { a: 1 };

// Spread
const spreadAdd = { ...base, b: 2, c: 3 };

// Object.assign()
const assignAdd = Object.assign({}, base, { b: 2, c: 3 });

console.log(spreadAdd); // { a: 1, b: 2, c: 3 }
console.log(assignAdd); // { a: 1, b: 2, c: 3 }

// 4. Overriding properties
const original = { a: 1, b: 2 };

// Spread
const spreadOverride = { ...original, b: 20 };

// Object.assign()
const assignOverride = Object.assign({}, original, { b: 20 });

console.log(spreadOverride); // { a: 1, b: 20 }
console.log(assignOverride); // { a: 1, b: 20 }

// 5. Performance comparison
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

console.time('Spread copy');
for (let i = 0; i < 100; i++) {
  const copy = { ...largeObj };
}
console.timeEnd('Spread copy');

console.time('Object.assign copy');
for (let i = 0; i < 100; i++) {
  const copy = Object.assign({}, largeObj);
}
console.timeEnd('Object.assign copy');

// Spread is often faster for simple operations

// 6. Modifying existing object (Object.assign only)
const existing = { a: 1 };
Object.assign(existing, { b: 2 });
console.log(existing); // { a: 1, b: 2 }

// Spread always creates new object
const newObj = { ...existing, c: 3 };
console.log(existing); // { a: 1, b: 2 } (unchanged)

// 7. Browser support
// Object.assign(): ES2015+ (IE 9+ with polyfill)
// Spread syntax: ES2018+ (not supported in IE)

// 8. Use cases for spread syntax:
// - Simple object copying
// - Adding properties in object literals
// - Computed property names
// - Conditional spreading
// - Modern JavaScript codebases
// - Object destructuring (rest)

// Use cases for Object.assign():
// - Modifying existing objects
// - Merging many sources
// - Older browser support
// - Dynamic source objects
// - Complex merging logic

// 9. Spread with computed properties
const key = 'dynamicKey';
const spreadComputed = {
  ...obj,
  [key]: 'dynamic value'
};

// Object.assign with computed properties
const assignComputed = Object.assign({}, obj, { [key]: 'dynamic value' });

// 10. Spread with conditionals
const condition = true;
const spreadConditional = {
  ...obj,
  ...(condition && { extra: 'value' })
};

// Object.assign with conditionals
const assignConditional = Object.assign(
  {},
  obj,
  condition && { extra: 'value' }
);

// 11. Spread in function parameters
function spreadFunction(obj) {
  return { ...obj, processed: true };
}

// Object.assign in function
function assignFunction(obj) {
  return Object.assign({}, obj, { processed: true });
}

// 12. Spread with rest destructuring
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // { b: 2, c: 3 }

// Object.assign equivalent
const source = { a: 1, b: 2, c: 3 };
const { a: extractedA, ...restAssign } = Object.assign({}, source);

// 13. Memory usage
// Both create new objects, but spread may be more memory efficient
// in some JavaScript engines

// 14. Spread with arrays (different behavior)
const arr = [1, 2, 3];
const spreadArr = [...arr, 4]; // [1, 2, 3, 4]

// Object.assign with arrays
const assignArr = Object.assign([], arr, [4]); // [4, 2, 3] (overwrites)

// 15. Prototype handling
const withProto = Object.create({ inherited: 'value' });
withProto.own = 'own value';

// Both copy only own properties
const spreadProto = { ...withProto };
const assignProto = Object.assign({}, withProto);

console.log(spreadProto); // { own: 'own value' }
console.log(assignProto); // { own: 'own value' }

// 16. Symbol properties
const withSymbols = {
  [Symbol('a')]: 'symbol a',
  regular: 'value'
};

const spreadSymbols = { ...withSymbols };
const assignSymbols = Object.assign({}, withSymbols);

console.log(Object.getOwnPropertySymbols(spreadSymbols)); // [Symbol(a)]
console.log(Object.getOwnPropertySymbols(assignSymbols)); // [Symbol(a)]

// 17. Getter/setter handling
const withGetter = {
  get dynamic() { return Math.random(); }
};

const spreadGetter = { ...withGetter };
const assignGetter = Object.assign({}, withGetter);

console.log(typeof spreadGetter.dynamic); // 'number'
console.log(typeof assignGetter.dynamic); // 'number'

// 18. Error handling
// Both throw on invalid sources
try {
  const invalid = { ...null };
} catch (error) {
  console.log('Spread error:', error.message);
}

try {
  const invalid = Object.assign({}, null);
} catch (error) {
  console.log('Assign error:', error.message);
}

// 19. Chaining operations
// Spread can be chained in object literals
const chained = {
  ...obj1,
  ...obj2,
  extra: 'value',
  computed: 'property'
};

// Object.assign chaining
const chainedAssign = Object.assign(
  {},
  obj1,
  obj2,
  { extra: 'value', computed: 'property' }
);

// 20. Performance for different object sizes
function benchmark(method, obj, iterations = 1000) {
  console.time(method);
  for (let i = 0; i < iterations; i++) {
    if (method === 'spread') {
      const copy = { ...obj };
    } else {
      const copy = Object.assign({}, obj);
    }
  }
  console.timeEnd(method);
}

const smallObj = { a: 1, b: 2 };
const mediumObj = {};
for (let i = 0; i < 100; i++) mediumObj[\`key\${i}\`] = i;

console.log('Small object:');
benchmark('spread', smallObj);
benchmark('assign', smallObj);

console.log('Medium object:');
benchmark('spread', mediumObj);
benchmark('assign', mediumObj);

// 21. When to prefer spread syntax:
// - Object literals
// - Simple operations
// - Modern codebases
// - Computed properties
// - Conditional logic
// - Rest destructuring

// When to prefer Object.assign():
// - Modifying existing objects
// - Many source objects
// - Legacy code
// - Dynamic sources
// - Complex merging

// 22. Migration patterns
// Old Object.assign() code
const oldWay = Object.assign({}, obj1, obj2, { extra: 'value' });

// New spread syntax
const newWay = { ...obj1, ...obj2, extra: 'value' };

// 23. Best practices
// Use spread for simple, readable code
const simple = { ...base, override: 'value' };

// Use Object.assign() for complex merging
const complex = Object.assign({}, base, override1, override2, override3);

// Use spread in modern React/JSX
const Component = (props) => ({
  ...defaultProps,
  ...props,
  className: \`default \${props.className || ''}\`.trim()
});

// 24. Edge cases
// Empty spread
const emptySpread = { ...{} };
console.log(emptySpread); // {}

// Spread with undefined
const undefinedSpread = { ...undefined };
console.log(undefinedSpread); // {}

// Object.assign with undefined
const undefinedAssign = Object.assign({}, undefined);
console.log(undefinedAssign); // {}

// 25. Tooling and linting
// Modern linters prefer spread syntax for simple cases
// Both are valid, choose based on readability and consistency`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Practical Applications</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">React and Modern Frontend Patterns</h3>
          <p className="text-slate-700 mb-4">
            Using spread syntax in React components, state management, and modern frontend development.
          </p>

          <CodeExample
            title="Spread Syntax in React and Frontend"
            code={`// 1. React component props spreading
const Button = ({ children, ...props }) => (
  <button
    {...props}
    className={\`btn \${props.className || ''}\`}
  >
    {children}
  </button>
);

// Usage
<Button
  onClick={() => console.log('clicked')}
  disabled={false}
  className="primary"
>
  Click me
</Button>

// 2. Default props merging
const defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};

const ButtonWithDefaults = (props) => {
  const finalProps = {
    ...defaultProps,
    ...props,
    className: \`btn \${defaultProps.variant} \${props.className || ''}\`.trim()
  };

  return <button {...finalProps} />;
};

// 3. State updates in React
const Counter = () => {
  const [state, setState] = useState({
    count: 0,
    step: 1,
    history: []
  });

  const increment = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + prevState.step,
      history: [...prevState.history, prevState.count]
    }));
  };

  const setStep = (newStep) => {
    setState(prevState => ({
      ...prevState,
      step: newStep
    }));
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </div>
  );
};

// 4. Form handling with spread
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  const reset = () => setValues(initialValues);

  const setValues = (newValues) => {
    setValues(prevValues => ({
      ...prevValues,
      ...newValues
    }));
  };

  return { values, handleChange, reset, setValues };
};

// Usage
const LoginForm = () => {
  const { values, handleChange } = useForm({
    email: '',
    password: ''
  });

  return (
    <form>
      <input
        type="email"
        value={values.email}
        onChange={handleChange('email')}
      />
      <input
        type="password"
        value={values.password}
        onChange={handleChange('password')}
      />
    </form>
  );
};

// 5. Configuration objects
const themeConfig = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  },
  spacing: {
    small: '8px',
    medium: '16px'
  }
};

const componentConfig = {
  ...themeConfig,
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

// 6. API response handling
const apiResponse = {
  user: { id: 1, name: 'John' },
  posts: [],
  meta: { total: 10, page: 1 }
};

const normalizedData = {
  ...apiResponse.user,
  postsCount: apiResponse.posts.length,
  ...apiResponse.meta
};

// 7. Redux reducer patterns
const initialState = {
  loading: false,
  data: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

// 8. Context provider props
const ThemeProvider = ({ children, ...themeProps }) => {
  const defaultTheme = {
    mode: 'light',
    primaryColor: '#007bff'
  };

  const theme = {
    ...defaultTheme,
    ...themeProps
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// 9. Component composition
const withLoading = (Component) => (props) => {
  const [loading, setLoading] = useState(false);

  const enhancedProps = {
    ...props,
    loading,
    setLoading
  };

  return <Component {...enhancedProps} />;
};

// 10. Event handler spreading
const eventHandlers = {
  onClick: () => console.log('clicked'),
  onMouseEnter: () => console.log('hovered'),
  onFocus: () => console.log('focused')
};

const InteractiveButton = (props) => (
  <button
    {...eventHandlers}
    {...props}
  >
    Interactive Button
  </button>
);

// 11. Style object merging
const baseStyles = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px'
};

const variantStyles = {
  primary: {
    ...baseStyles,
    backgroundColor: '#007bff',
    color: 'white'
  },
  secondary: {
    ...baseStyles,
    backgroundColor: '#6c757d',
    color: 'white'
  }
};

// 12. Route configuration
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    ...authRequired
  },
  {
    path: '/profile',
    component: Profile,
    ...privateRoute
  }
];

// 13. GraphQL query building
const baseQuery = {
  user: {
    id: true,
    name: true
  }
};

const extendedQuery = {
  ...baseQuery,
  user: {
    ...baseQuery.user,
    email: true,
    profile: {
      avatar: true
    }
  }
};

// 14. Animation configurations
const animationDefaults = {
  duration: 300,
  easing: 'ease-in-out',
  delay: 0
};

const fadeIn = {
  ...animationDefaults,
  from: { opacity: 0 },
  to: { opacity: 1 }
};

const slideIn = {
  ...animationDefaults,
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
  duration: 500
};

// 15. Test utilities
const createMockProps = (overrides = {}) => ({
  onClick: jest.fn(),
  className: 'mock-class',
  children: 'Mock Content',
  ...overrides
});

const MockComponent = (props) => <div {...props} />;

// Usage in tests
const mockProps = createMockProps({ className: 'custom-class' });
render(<MockComponent {...mockProps} />);

// 16. Higher-order component props
const withRouter = (Component) => (props) => {
  const routerProps = {
    location: window.location,
    navigate: (path) => window.history.pushState(null, '', path)
  };

  return <Component {...props} {...routerProps} />;
};

// 17. Form validation
const validationRules = {
  required: (value) => value ? null : 'Required',
  email: (value) => /@/.test(value) ? null : 'Invalid email'
};

const createField = (name, rules = []) => ({
  name,
  value: '',
  error: null,
  touched: false,
  rules,
  validate: function(value) {
    const error = rules.reduce((err, rule) => {
      return err || validationRules[rule](value);
    }, null);

    return {
      ...this,
      value,
      error,
      touched: true
    };
  }
});

// 18. Data transformation pipelines
const transformUser = (user) => ({
  ...user,
  fullName: \`\${user.firstName} \${user.lastName}\`,
  displayName: user.nickname || user.firstName,
  isActive: user.status === 'active'
});

const users = [
  { firstName: 'John', lastName: 'Doe', nickname: 'JD' },
  { firstName: 'Jane', lastName: 'Smith', status: 'inactive' }
].map(transformUser);

// 19. Component state management
const useAsyncState = (initialState) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
    ...initialState
  });

  const execute = async (asyncFn) => {
    setState(prevState => ({
      ...prevState,
      loading: true,
      error: null
    }));

    try {
      const data = await asyncFn();
      setState(prevState => ({
        ...prevState,
        data,
        loading: false
      }));
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error,
        loading: false
      }));
    }
  };

  return { ...state, execute };
};

// 20. Configuration inheritance
const baseComponentConfig = {
  renderAs: 'div',
  className: '',
  style: {}
};

const buttonConfig = {
  ...baseComponentConfig,
  renderAs: 'button',
  onClick: null
};

const inputConfig = {
  ...baseComponentConfig,
  renderAs: 'input',
  type: 'text',
  value: ''
};

// 21. Event delegation
const eventDelegator = (handlers) => (event) => {
  const handler = handlers[event.type];
  if (handler) {
    handler(event);
  }
};

const buttonEvents = {
  click: (e) => console.log('Button clicked'),
  mouseenter: (e) => console.log('Button hovered')
};

const handleButtonEvent = eventDelegator(buttonEvents);

// 22. CSS-in-JS patterns
const createStyles = (theme) => ({
  button: {
    ...theme.baseStyles,
    ...theme.buttonStyles,
    '&:hover': {
      ...theme.hoverStyles
    }
  }
});

// 23. Data fetching hooks
const useApi = (endpoint) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setState(prevState => ({
        ...prevState,
        data,
        loading: false
      })))
      .catch(error => setState(prevState => ({
        ...prevState,
        error,
        loading: false
      })));
  }, [endpoint]);

  return state;
};

// 24. Component factory
const createComponent = (defaultProps) => (Component) => (props) => (
  <Component {...defaultProps} {...props} />
);

const PrimaryButton = createComponent({
  variant: 'primary',
  size: 'medium'
})(Button);

// 25. State machine transitions
const stateMachine = {
  initial: 'idle',
  states: {
    idle: {
      on: { START: 'loading' }
    },
    loading: {
      on: { SUCCESS: 'success', ERROR: 'error' }
    },
    success: {
      on: { RESET: 'idle' }
    },
    error: {
      on: { RETRY: 'loading', RESET: 'idle' }
    }
  }
};

const useStateMachine = (machine) => {
  const [state, setState] = useState(machine.initial);

  const transition = (event) => {
    const currentStateConfig = machine.states[state];
    const nextState = currentStateConfig?.on?.[event];

    if (nextState) {
      setState(nextState);
    }
  };

  return { state, transition };
};

// Usage
const { state, transition } = useStateMachine(stateMachine);
console.log(state); // 'idle'
transition('START');
console.log(state); // 'loading'`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance and Best Practices</h3>
          <p className="text-slate-700 mb-4">
            Performance considerations and best practices for using spread syntax effectively.
          </p>

          <CodeExample
            title="Spread Syntax Performance and Best Practices"
            code={`// 1. Performance considerations
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = Math.random();
}

// Spread is optimized in modern engines
console.time('Spread copy');
const spreadCopy = { ...largeObj };
console.timeEnd('Spread copy');

// Avoid spread in performance-critical loops
const results = [];
for (let i = 0; i < 1000; i++) {
  // Bad: spread in loop
  results.push({ ...largeObj, id: i });
}

// Better: pre-compute common properties
const baseObj = { ...largeObj };
for (let i = 0; i < 1000; i++) {
  results.push({ ...baseObj, id: i });
}

// 2. Memory efficiency
// Spread creates new objects - be mindful with large objects
function processLargeDataset(data) {
  // For large datasets, consider processing in chunks
  const chunkSize = 1000;
  const results = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const processedChunk = chunk.map(item => ({
      ...item,
      processed: true,
      timestamp: Date.now()
    }));
    results.push(...processedChunk);
  }

  return results;
}

// 3. Deep vs shallow copying
const nested = {
  user: { name: 'John', profile: { age: 30 } },
  settings: { theme: 'dark' }
};

// Shallow copy (default behavior)
const shallow = { ...nested };
shallow.user.name = 'Jane'; // Affects original!
console.log(nested.user.name); // 'Jane'

// Deep copy when needed
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) return obj.map(deepCopy);

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const deep = deepCopy(nested);
deep.user.name = 'Bob';
console.log(nested.user.name); // 'John' (unchanged)

// 4. Best practices
// Use spread for simple operations
const simple = { ...base, extra: 'value' };

// Use Object.assign() for complex merging
const complex = Object.assign({}, obj1, obj2, obj3);

// Prefer spread in modern codebases
const modern = { ...defaults, ...overrides };

// 5. Avoiding common pitfalls
// Don't spread in return statements unnecessarily
function getConfig() {
  const base = { a: 1, b: 2 };
  // Bad: unnecessary spread
  return { ...base, c: 3 };
}

// Good: direct return
function getConfigGood() {
  return { a: 1, b: 2, c: 3 };
}

// 6. Spread with validation
function safeSpread(target, source) {
  if (!source || typeof source !== 'object') {
    return { ...target };
  }

  try {
    return { ...target, ...source };
  } catch (error) {
    console.warn('Spread failed:', error.message);
    return { ...target };
  }
}

// 7. Performance monitoring
function withPerformanceTracking(fn, label) {
  return (...args) => {
    console.time(label);
    const result = fn(...args);
    console.timeEnd(label);
    return result;
  };
}

const trackedSpread = withPerformanceTracking(
  (obj) => ({ ...obj, processed: true }),
  'Object spread operation'
);

// 8. Memory leak prevention
// Be careful with circular references
const circular = { name: 'circular' };
circular.self = circular;

// Spread handles simple circular references
const spreadCircular = { ...circular };
console.log(spreadCircular.self === spreadCircular); // true

// For complex circular structures, use specialized libraries
// or implement custom deep copy with WeakMap

// 9. Code readability
// Prefer spread for object literals
const readable = {
  ...baseConfig,
  ...userConfig,
  environment: 'production',
  timestamp: Date.now()
};

// Avoid overly complex spreads
// Bad: hard to read
const complexSpread = {
  ...obj1,
  ...obj2,
  ...(condition && obj3),
  ...Object.keys(obj4).reduce((acc, key) => ({ ...acc, [key]: obj4[key] }), {}),
  final: 'property'
};

// Good: break it down
const intermediate = { ...obj1, ...obj2 };
const conditional = condition ? { ...intermediate, ...obj3 } : intermediate;
const transformed = Object.keys(obj4).reduce(
  (acc, key) => ({ ...acc, [key]: obj4[key] }),
  conditional
);
const final = { ...transformed, final: 'property' };

// 10. TypeScript considerations
// Spread preserves types in TypeScript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const user: User = { name: 'John', age: 30 };
const admin: Admin = { ...user, role: 'admin' };

// 11. Testing utilities
const createMockObject = (overrides = {}) => ({
  id: 1,
  name: 'Mock',
  active: true,
  ...overrides
});

// Usage
const mockUser = createMockObject({ name: 'Test User' });
const inactiveUser = createMockObject({ active: false });

// 12. Functional programming patterns
const pipe = (...fns) => (initial) =>
  fns.reduce((result, fn) => fn(result), initial);

const addTimestamp = (obj) => ({ ...obj, timestamp: Date.now() });
const addId = (obj) => ({ ...obj, id: Math.random() });
const validate = (obj) => ({ ...obj, valid: obj.name?.length > 0 });

const processObject = pipe(addId, addTimestamp, validate);
const result = processObject({ name: 'Test' });

// 13. Immutable updates
const state = {
  users: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ],
  settings: { theme: 'dark' }
};

// Immutable update patterns
const addUser = (state, user) => ({
  ...state,
  users: [...state.users, user]
});

const updateUser = (state, userId, updates) => ({
  ...state,
  users: state.users.map(user =>
    user.id === userId ? { ...user, ...updates } : user
  )
});

const updateSettings = (state, newSettings) => ({
  ...state,
  settings: { ...state.settings, ...newSettings }
});

// 14. Caching expensive operations
const spreadCache = new WeakMap();

function cachedSpread(...sources) {
  const key = sources.length === 1 ? sources[0] : sources;

  if (spreadCache.has(key)) {
    return spreadCache.get(key);
  }

  const result = sources.reduce((acc, source) => ({ ...acc, ...source }), {});
  spreadCache.set(key, result);
  return result;
}

// 15. Error boundaries for spread operations
class SafeSpread {
  static merge(...sources) {
    return sources.reduce((result, source) => {
      try {
        return { ...result, ...source };
      } catch (error) {
        console.error('Failed to merge source:', error.message);
        return result;
      }
    }, {});
  }
}

// 16. Performance for different object sizes
function benchmarkSpread(obj, iterations = 1000) {
  console.time('Spread performance');
  for (let i = 0; i < iterations; i++) {
    const copy = { ...obj };
  }
  console.timeEnd('Spread performance');
}

const smallObj = { a: 1, b: 2, c: 3 };
const mediumObj = {};
for (let i = 0; i < 100; i++) mediumObj[\`key\${i}\`] = i;

console.log('Small object:');
benchmarkSpread(smallObj);

console.log('Medium object:');
benchmarkSpread(mediumObj);

// 17. Memory monitoring
function monitorMemory(operation, label) {
  const startMemory = performance.memory?.usedJSHeapSize;
  operation();
  const endMemory = performance.memory?.usedJSHeapSize;

  if (startMemory && endMemory) {
    console.log(\`\${label} memory usage: \${endMemory - startMemory} bytes\`);
  }
}

// Usage (in browsers that support performance.memory)
monitorMemory(() => {
  const copies = [];
  for (let i = 0; i < 1000; i++) {
    copies.push({ ...largeObj });
  }
}, 'Creating 1000 spread copies');

// 18. Optimizing repeated spreads
class SpreadOptimizer {
  constructor(baseObject) {
    this.base = { ...baseObject };
    this.cache = new Map();
  }

  spread(overrides) {
    const key = JSON.stringify(overrides);

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const result = { ...this.base, ...overrides };
    this.cache.set(key, result);
    return result;
  }

  clearCache() {
    this.cache.clear();
  }
}

// 19. Batch processing
function batchSpread(objects, batchSize = 100) {
  const results = [];

  for (let i = 0; i < objects.length; i += batchSize) {
    const batch = objects.slice(i, i + batchSize);
    const batchResults = batch.map(obj => ({ ...obj, processed: true }));
    results.push(...batchResults);

    // Allow event loop to process other operations
    if (i % 1000 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }

  return results;
}

// 20. Code splitting considerations
// Avoid spreading large objects in frequently called functions
const largeConfig = { /* large object */ };

// Bad: spread in hot path
function processItem(item) {
  return { ...largeConfig, ...item, processed: true };
}

// Good: pre-compute
const baseConfig = { ...largeConfig, processed: true };
function processItemOptimized(item) {
  return { ...baseConfig, ...item };
}

// 21. Tree shaking friendly patterns
// Avoid dynamic property names that break tree shaking
const config = {
  feature1: true,
  feature2: false,
  ...(process.env.NODE_ENV === 'development' && {
    debug: true
  })
};

// Better for tree shaking
const baseConfig = {
  feature1: true,
  feature2: false
};

const devConfig = {
  ...baseConfig,
  debug: true
};

const prodConfig = baseConfig;

const finalConfig = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

// 22. Bundle size considerations
// Spread syntax has minimal bundle impact
// Object.assign polyfill may be needed for older browsers

// 23. Debugging spread operations
function debugSpread(...sources) {
  console.group('Spread operation');
  console.log('Sources:', sources);

  const result = sources.reduce((acc, source) => {
    console.log('Accumulated:', acc);
    console.log('Adding:', source);
    const newAcc = { ...acc, ...source };
    console.log('Result:', newAcc);
    return newAcc;
  }, {});

  console.groupEnd();
  return result;
}

// 24. Testing spread behavior
function assertSpread(expected, ...sources) {
  const result = sources.reduce((acc, source) => ({ ...acc, ...source }), {});
  const success = JSON.stringify(result) === JSON.stringify(expected);

  if (!success) {
    throw new Error(\`Spread assertion failed. Expected: \${JSON.stringify(expected)}, Got: \${JSON.stringify(result)}\`);
  }

  return true;
}

// Usage
assertSpread({ a: 1, b: 2 }, { a: 1 }, { b: 2 });
assertSpread({ a: 2, b: 2 }, { a: 1 }, { a: 2, b: 2 });

// 25. Migration from Object.assign()
const oldCode = Object.assign({}, obj1, obj2, { extra: 'value' });
const newCode = { ...obj1, ...obj2, extra: 'value' };

// Both are equivalent, but spread is more readable for simple cases`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object spread syntax is a powerful ES6 feature for object manipulation, offering concise and readable ways to copy, merge, and transform objects.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Spread Syntax Key Points</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Syntax:</h4>
                <p className="text-slate-700">{`{ ...object }`}</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Copies:</h4>
                <p className="text-slate-700">All enumerable own properties</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Creates:</h4>
                <p className="text-slate-700">Shallow copies by default</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Use Cases:</h4>
                <p className="text-slate-700">Object copying, merging, React props, state updates</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand spread syntax, explore related concepts:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Rest parameters:</strong> Collecting remaining arguments</li>
              <li><strong>Destructuring:</strong> Extracting object properties</li>
              <li><strong>Immutable patterns:</strong> Functional programming approaches</li>
              <li><strong>Modern JavaScript:</strong> ES6+ features and patterns</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}