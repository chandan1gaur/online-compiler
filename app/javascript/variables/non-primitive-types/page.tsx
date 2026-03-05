import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Non-Primitive Types in JavaScript",
  description:
    "Explore non-primitive types (objects, arrays, functions) in JavaScript: reference semantics, mutation, and cloning strategies.",
  keywords: ["javascript objects", "arrays", "functions", "reference types", "mutation"],
  openGraph: {
    title: "Non-Primitive Types in JavaScript",
    description:
      "Explore non-primitive types (objects, arrays, functions) in JavaScript: reference semantics, mutation, and cloning strategies.",
    url: "/javascript/variables/non-primitive-types",
    type: "article",
    images: ["/og-variables-non-primitive-types.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Primitive Types in JavaScript",
    description:
      "Explore non-primitive types (objects, arrays, functions) in JavaScript: reference semantics, mutation, and cloning strategies.",
    images: ["/og-variables-non-primitive-types.svg"],
  },
  alternates: { canonical: "/javascript/variables/non-primitive-types" },
};

export default function NonPrimitiveTypesPage() {
  return (
    <JsTutorialTemplate
      title="Non-Primitive Types (Objects & Arrays)"
      intro="Objects, arrays, and functions are reference types. Understanding references and mutation patterns is key to predictable code. Unlike primitives, these types are stored and passed by reference, which affects how they behave in assignments, function calls, and comparisons."
      why="Reference semantics affect equality, cloning, and how data flows through your application. Mastering reference types prevents bugs related to unintended mutations and ensures proper data isolation."
      sections={[
        {
          heading: "Reference vs Value",
          paragraphs: [
            "Objects and arrays are stored by reference; copying a reference points to the same underlying data. When you assign an object to a new variable, you're creating another reference to the same object in memory.",
            "Reference equality uses === to check if two variables point to the same object. Value equality requires deep comparison of all properties.",
            "Function references allow multiple variables to point to the same function. This enables function passing and higher-order functions.",
            "Reference semantics enable efficient memory usage by avoiding unnecessary copying of large data structures.",
          ],
        },
        {
          heading: "Cloning and Immutability",
          paragraphs: [
            "Use shallow clones (`{...obj}`, `Array.slice`) for simple needs and deep clones for nested structures. Shallow clones copy only the top level; nested objects remain shared.",
            "Consider immutable patterns when state predictability is required. Libraries like Immutable.js provide persistent data structures.",
            "Spread operator creates shallow clones: `{...obj}` for objects, `[...arr]` for arrays. Perfect for simple one-level copying.",
            "Deep cloning methods: JSON.parse(JSON.stringify(obj)), structuredClone() (modern browsers), or recursive functions.",
          ],
        },
        {
          heading: "Object Fundamentals",
          paragraphs: [
            "Objects are collections of key-value pairs. Keys are strings or symbols, values can be any type including other objects.",
            "Property access: dot notation (obj.prop) and bracket notation (obj['prop']). Bracket notation allows dynamic keys and special characters.",
            "Object methods: Object.keys(), Object.values(), Object.entries() for enumeration. Object.assign() for merging.",
            "Prototype chain: Objects inherit properties from their prototype. Understanding __proto__ and prototype is crucial for inheritance.",
            "Property descriptors: Define how properties behave with Object.defineProperty(). Can make properties read-only, non-enumerable, etc.",
            "Object freezing: Object.freeze() prevents property addition/deletion/modification. Object.seal() prevents addition/deletion but allows modification.",
          ],
        },
        {
          heading: "Array Characteristics",
          paragraphs: [
            "Arrays are special objects with numeric indices and length property. They inherit from Array.prototype.",
            "Dynamic sizing: Arrays grow automatically when assigning to indices beyond current length.",
            "Array methods: push/pop, shift/unshift, splice, slice, map, filter, reduce, forEach. Rich API for data manipulation.",
            "Sparse arrays: Arrays can have gaps (empty slots) when indices are skipped. Use with caution as they behave differently.",
            "TypedArrays: For binary data manipulation. Includes Int8Array, Float64Array, etc. Used with Web APIs.",
            "Array-like objects: Objects with length and numeric indices. Can be converted to arrays with Array.from().",
          ],
        },
        {
          heading: "Function Objects",
          paragraphs: [
            "Functions are first-class objects: can be assigned to variables, passed as arguments, returned from functions.",
            "Function properties: name, length (parameter count), prototype. Functions have their own properties beyond code.",
            "Closure creation: Functions capture variables from their defining scope. Enables private variables and data hiding.",
            "Function context: 'this' binding depends on how function is called. Four rules: global, object method, call/apply/bind, constructor.",
            "Arrow functions: Lexical 'this' binding, no prototype, cannot be used as constructors. More predictable scoping.",
            "Generator functions: Return iterators, can be paused/resumed. Use function* syntax and yield keyword.",
          ],
        },
        {
          heading: "Mutation Patterns",
          paragraphs: [
            "Direct mutation: obj.prop = value changes the object in place. Affects all references to that object.",
            "Immutable updates: Create new objects instead of modifying existing ones. Prevents side effects.",
            "Pure functions: Functions that don't mutate input parameters. Easier to test and reason about.",
            "Copy-on-write: Delay copying until mutation is needed. Optimizes performance for read-heavy scenarios.",
            "Structural sharing: Immutable data structures share unchanged parts between versions. Saves memory.",
            "Mutation detection: Use Object.freeze(), proxies, or libraries to detect/prevent unintended mutations.",
          ],
        },
        {
          heading: "Memory Management",
          paragraphs: [
            "Reference counting: Objects are garbage collected when no references remain. Circular references can cause memory leaks.",
            "Weak references: WeakMap and WeakSet allow garbage collection of keys/values. Useful for caching and metadata.",
            "Memory leaks: Common causes include forgotten references, closures capturing large objects, DOM element references.",
            "Performance implications: Object creation is expensive. Reuse objects when possible, use object pools for frequent allocations.",
            "V8 optimizations: Hidden classes and inline caching optimize property access. Consistent object shapes improve performance.",
            "Memory profiling: Use browser dev tools to identify memory leaks and optimize object usage.",
          ],
        },
        {
          heading: "Advanced Patterns",
          paragraphs: [
            "Factory functions: Return new objects without using classes. Provide encapsulation and customization.",
            "Module pattern: Use closures to create private scope. IIFE returns public API while keeping implementation private.",
            "Prototype inheritance: Objects inherit from other objects. More flexible than class-based inheritance.",
            "Composition over inheritance: Build complex objects by combining simpler objects. Avoids inheritance hierarchies.",
            "Mixin pattern: Copy properties from one object to another. Enables code reuse without inheritance.",
            "Proxy objects: Intercept property access with Proxy constructor. Enables validation, logging, virtualization.",
          ],
        },
        {
          heading: "Common Pitfalls",
          paragraphs: [
            "Reference traps: Assuming assignment creates a copy. Remember objects are passed by reference.",
            "Mutation side effects: Changing objects in functions affects callers. Use cloning or immutable patterns.",
            "Array methods confusion: Some methods mutate (splice, push), others don't (slice, map). Know the difference.",
            "Object comparison: === compares references, not values. Use deep equality libraries for value comparison.",
            "Prototype pollution: Adding properties to Object.prototype affects all objects. Avoid unless intentional.",
            "Circular references: Objects referencing each other prevent garbage collection. Break cycles when possible.",
          ],
        },
        {
          heading: "Best Practices",
          paragraphs: [
            "Prefer immutable patterns for predictable state management. Use spread operator for simple cloning.",
            "Use const for object references to prevent reassignment, but remember objects can still be mutated.",
            "Choose appropriate cloning method: shallow for simple objects, deep for complex nested structures.",
            "Document mutation expectations in function documentation. Make it clear if functions modify inputs.",
            "Use Object.freeze() in development to catch unintended mutations.",
            "Consider functional programming libraries like Ramda or Lodash for immutable operations.",
            "Profile memory usage regularly, especially for long-running applications.",
            "Use WeakMap/WeakSet for caches and metadata to prevent memory leaks.",
          ],
        },
      ]}
      examples={[
        {
          title: "Reference Assignment",
          code: `const a = { x: 1 };
const b = a;
// mutate via b
a['x'] = 2;
console.log(a.x); // 2`,
          explanation: "`a` and `b` reference the same object; mutation via one reference is visible through the other.",
        },
        {
          title: "Shallow vs Deep Cloning",
          code: `const original = {
  a: 1,
  nested: { b: 2 }
};

// Shallow clone
const shallow = { ...original };
shallow.a = 99;
shallow.nested.b = 88;

console.log(original.a); // 1 (not changed)
console.log(original.nested.b); // 88 (changed!)

// Deep clone
const deep = JSON.parse(JSON.stringify(original));
deep.nested.b = 77;
console.log(original.nested.b); // 88 (unchanged)`,
          explanation: "Shallow clones share nested objects; deep clones create completely independent copies.",
        },
        {
          title: "Array Reference Behavior",
          code: `const arr1 = [1, 2, 3];
const arr2 = arr1; // Reference copy

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (both changed)

const arr3 = [...arr1]; // Shallow clone
arr3.push(5);
console.log(arr1); // [1, 2, 3, 4] (unchanged)
console.log(arr3); // [1, 2, 3, 4, 5]`,
          explanation: "Assignment creates reference; spread operator creates shallow copy.",
        },
        {
          title: "Object Property Descriptors",
          code: `const obj = {};

Object.defineProperty(obj, 'readOnly', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.readOnly = 99;
console.log(obj.readOnly); // 42 (unchanged)

Object.defineProperty(obj, 'getter', {
  get: () => 'computed value',
  enumerable: true
});

console.log(obj.getter); // 'computed value'`,
          explanation: "Property descriptors control property behavior and create computed properties.",
        },
        {
          title: "Closure for Private Variables",
          code: `function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
// count is not accessible directly`,
          explanation: "Closures enable private variables accessible only through defined methods.",
        },
        {
          title: "Prototype Chain",
          code: `function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return this.name + ' barks';
};

const dog = new Dog('Rex');
console.log(dog.speak()); // 'Rex barks'`,
          explanation: "Prototype chain enables inheritance; methods can be overridden in derived objects.",
        },
        {
          title: "Immutable Updates",
          code: `const state = {
  user: { name: 'John', age: 30 },
  todos: ['task1', 'task2']
};

// Bad: Direct mutation
function badUpdate(state, newName) {
  state.user.name = newName; // Mutates original
  return state;
}

// Good: Immutable update
function goodUpdate(state, newName) {
  return {
    ...state,
    user: {
      ...state.user,
      name: newName
    }
  };
}

const newState = goodUpdate(state, 'Jane');
console.log(state.user.name); // 'John' (unchanged)
console.log(newState.user.name); // 'Jane'`,
          explanation: "Immutable updates prevent unintended side effects by creating new objects.",
        },
        {
          title: "WeakMap for Metadata",
          code: `const metadata = new WeakMap();

class User {
  constructor(name) {
    this.name = name;
    metadata.set(this, {
      createdAt: Date.now(),
      accessCount: 0
    });
  }
  
  access() {
    const data = metadata.get(this);
    data.accessCount++;
    console.log(\`Accessed \${data.accessCount} times\`);
  }
}

const user = new User('Alice');
user.access(); // 'Accessed 1 times'
user.access(); // 'Accessed 2 times'

// When user is garbage collected, metadata is automatically cleaned up`,
          explanation: "WeakMap allows associating metadata with objects without preventing garbage collection.",
        },
      ]}
      mistakes={[
        { title: "Mutating shared state", fix: "Avoid unexpected mutation by cloning or using immutable updates." },
        { title: "Assuming assignment copies objects", fix: "Objects are passed by reference; use cloning for copies." },
        { title: "Confusing shallow and deep clones", fix: "Know when nested objects are shared vs fully independent." },
        { title: "Modifying function parameters", fix: "Treat parameters as immutable to avoid side effects." },
        { title: "Circular references in serialization", fix: "Handle circular references when deep cloning or serializing." },
        { title: "Memory leaks from closures", fix: "Be aware of what variables closures capture and clean up when needed." },
      ]}
      faqs={[
        { q: "How to deep clone?", a: "Use structuredClone() (modern), JSON.parse(JSON.stringify(obj)), or recursive cloning functions. Each has trade-offs." },
        { q: "When are objects equal?", a: "=== checks reference equality. For value equality, use deep comparison libraries like lodash.isEqual()." },
        { q: "What's the difference between null and undefined?", a: "null is explicit absence; undefined means uninitialized. Both are falsy but have different meanings." },
        { q: "How do closures work?", a: "Functions capture variables from their defining scope. Even after the outer function returns, inner functions retain access." },
        { q: "Should I use classes or factory functions?", a: "Both work; factory functions are more flexible and avoid 'this' binding issues. Classes provide familiar syntax." },
        { q: "How to prevent object mutation?", a: "Use Object.freeze(), immutable libraries, or create new objects instead of modifying existing ones." },
        { q: "What's the prototype chain?", a: "Objects inherit properties from prototypes. When accessing a property, JavaScript walks up the chain until found." },
        { q: "How do WeakMap/WeakSet work?", a: "They hold weak references to keys/objects, allowing garbage collection even when referenced. Perfect for caches." },
      ]}
      related={[{ label: "Data Types", href: "/javascript/variables/data-types" }, { label: "Variables", href: "/javascript/variables" }, { label: "Objects", href: "/javascript/objects" }, { label: "Arrays", href: "/javascript/array-methods" }]}
    />
  );
}
