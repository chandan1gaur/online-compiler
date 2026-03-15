import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Data Types — Overview",
  description:
    "Overview of JavaScript data types: primitives, objects, symbols, and how types influence operations and performance.",
  keywords: ["javascript data types", "primitive types", "objects", "js types"],
  openGraph: {
    title: "JavaScript Data Types — Overview",
    description:
      "Overview of JavaScript data types: primitives, objects, symbols, and how types influence operations and performance.",
    url: "/javascript/variables/data-types",
    type: "article",
    images: ["/og-variables-data-types.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Data Types — Overview",
    description:
      "Overview of JavaScript data types: primitives, objects, symbols, and how types influence operations and performance.",
    images: ["/og-variables-data-types.svg"],
  },
  alternates: { canonical: "/javascript/variables/data-types" },
};

export default function DataTypesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Data Types"
      intro="JavaScript has several built-in types: primitives (number, string, boolean, null, undefined, symbol, bigint) and objects. Knowing them helps avoid type bugs. Understanding data types is fundamental to writing reliable JavaScript code and avoiding common pitfalls that can lead to unexpected behavior."
      why="Types determine how values behave during operations, comparisons, and when passed to APIs. Clear mental models reduce runtime surprises. Proper type understanding helps with debugging, performance optimization, and writing more predictable code."
      sections={[
        {
          heading: "Primitive vs Non-Primitive",
          paragraphs: [
            "Primitives are immutable and compared by value. Objects (including arrays and functions) are compared by reference. This fundamental difference affects how variables behave when assigned, compared, and passed as arguments.",
            "Primitive types include: number, string, boolean, null, undefined, symbol, and bigint. These are the basic building blocks that cannot be broken down further.",
            "Non-primitive types (objects) include: Object, Array, Function, Date, RegExp, and user-defined classes. These are complex types that can contain multiple values and methods.",
            "Immutability of primitives means operations on them create new values rather than modifying existing ones. This leads to different performance characteristics and memory usage patterns.",
          ],
        },
        {
          heading: "Common Types",
          paragraphs: [
            "Number: Represents both integers and floating-point numbers. Uses IEEE 754 double-precision format. Has special values like Infinity, -Infinity, and NaN.",
            "BigInt: For arbitrarily large integers beyond Number.MAX_SAFE_INTEGER. Created using BigInt() constructor or n suffix. Cannot mix with regular numbers in operations.",
            "String: Sequence of UTF-16 code units. Immutable - operations create new strings. Supports template literals, string methods, and Unicode.",
            "Boolean: Represents true or false. Many values are 'truthy' or 'falsy' when converted to boolean. Understanding truthiness is crucial for conditional logic.",
            "Null: Represents intentional absence of value. Different from undefined. Often used to indicate 'no value' or 'empty'.",
            "Undefined: Indicates a variable has been declared but not assigned a value. Also returned when accessing non-existent properties.",
            "Symbol: Unique and immutable primitive values. Often used as object property keys to avoid naming conflicts. Created with Symbol() function.",
            "Object: The most complex type. Includes arrays, functions, dates, and custom objects. Compared by reference, not value.",
          ],
        },
        {
          heading: "Type Checking and Conversion",
          paragraphs: [
            "typeof operator returns string indicating the type. Has quirks like typeof null === 'object'. Use carefully with type guards.",
            "instanceof checks if object is instance of constructor. Works with inheritance chain. More reliable than typeof for objects.",
            "Array.isArray() specifically checks for arrays, since typeof returns 'object' for arrays.",
            "Type coercion happens automatically in comparisons and operations. Understanding implicit conversion rules prevents bugs.",
            "Explicit conversion using constructors: Number(), String(), Boolean(). More predictable than implicit coercion.",
            "Parsing functions: parseInt(), parseFloat() for converting strings to numbers. More robust than Number() for partial strings.",
          ],
        },
        {
          heading: "Primitive Operations",
          paragraphs: [
            "String concatenation with + operator. Template literals provide better readability and interpolation.",
            "Number arithmetic: +, -, *, /, %, **. Watch for floating-point precision issues. Use libraries for financial calculations.",
            "Boolean logic: &&, ||, ! operators. Short-circuit evaluation affects performance and control flow.",
            "Comparison operators: === vs ==. Strict equality (===) prevents type coercion surprises.",
            "BigInt operations: Similar to numbers but cannot mix types. Use for large integer calculations.",
            "Symbol uniqueness: Each symbol is unique, even with same description. Useful for private properties.",
          ],
        },
        {
          heading: "Object Types Deep Dive",
          paragraphs: [
            "Arrays: Ordered collections of values. Dynamic sizing, mixed types allowed. Rich set of methods for manipulation.",
            "Functions: First-class objects that can be assigned, passed, and returned. Have properties and methods themselves.",
            "Dates: Represent points in time. Complex API with many methods. Time zones and formatting challenges.",
            "Regular expressions: Pattern matching objects. Powerful but complex syntax. Performance considerations for large strings.",
            "Maps and Sets: ES6 collections. Maps for key-value pairs, Sets for unique values. Better than plain objects in many cases.",
            "TypedArrays: For binary data manipulation. Used with Web APIs like Canvas, WebGL, and file processing.",
          ],
        },
        {
          heading: "Type-Related Performance",
          paragraphs: [
            "Primitive operations are generally faster than object operations. Consider using primitives when possible.",
            "Object property access is slower than variable access. Cache frequently used properties.",
            "Type coercion in hot loops can impact performance. Use explicit types to avoid repeated conversions.",
            "Memory usage: Objects consume more memory than primitives. Be mindful of object creation in loops.",
            "Garbage collection: Understanding when objects become eligible for GC helps prevent memory leaks.",
            "V8 optimizations: Modern engines optimize based on observed types. Consistent types improve performance.",
          ],
        },
        {
          heading: "Common Type Pitfalls",
          paragraphs: [
            "NaN comparisons: NaN !== NaN. Use Number.isNaN() or isNaN() carefully.",
            "Floating-point precision: 0.1 + 0.2 !== 0.3. Use epsilon comparisons for floating-point numbers.",
            "Type coercion in comparisons: '0' == 0 is true, but '0' === 0 is false. Prefer strict equality.",
            "Array length: Can be misleading with sparse arrays. Use Array.prototype.length reliably.",
            "Object property enumeration: Different methods (for...in, Object.keys, etc.) have different behaviors.",
            "Prototype pollution: Modifying Object.prototype affects all objects. Avoid unless intentional.",
          ],
        },
        {
          heading: "Modern TypeScript Integration",
          paragraphs: [
            "TypeScript adds static typing to JavaScript. Helps catch type errors at compile time.",
            "Type annotations: number, string, boolean, etc. correspond to JavaScript types.",
            "Union types: string | number for variables that can hold multiple types.",
            "Type guards: Functions that narrow types within conditional blocks.",
            "Generics: Reusable components that work with multiple types.",
            "Advanced types: Mapped types, conditional types, and utility types for complex scenarios.",
          ],
        },
        {
          heading: "Best Practices",
          paragraphs: [
            "Use strict equality (===) to avoid type coercion surprises.",
            "Check types explicitly when unsure: typeof, instanceof, Array.isArray().",
            "Handle edge cases: NaN, Infinity, -0, sparse arrays.",
            "Use appropriate types for the job: BigInt for large integers, Map for key-value pairs.",
            "Document type expectations in function comments or TypeScript.",
            "Test type-related edge cases thoroughly.",
            "Consider TypeScript for larger projects to catch type errors early.",
            "Use linters and static analysis tools to enforce type consistency.",
          ],
        },
      ]}
      examples={[
        {
          title: "Primitive vs Object Comparison",
          code: `const a = 5;
const b = 5;
console.log(a === b); // true

const o1 = { x: 1 };
const o2 = { x: 1 };
console.log(o1 === o2); // false`,
          explanation: "Primitives compare by value; objects compare by reference.",
        },
        {
          title: "Typeof Quirks",
          code: `console.log(typeof 42); // 'number'
console.log(typeof 'hello'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (quirk!)
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof function(){}); // 'function'`,
          explanation: "typeof has known quirks, especially with null and arrays.",
        },
        {
          title: "BigInt Usage",
          code: `const bigNum = 9007199254740991n;
const regularNum = 9007199254740991;

console.log(bigNum + 1n); // 9007199254740992n
console.log(regularNum + 1); // 9007199254740992 (precision lost)

console.log(typeof bigNum); // 'bigint'`,
          explanation: "BigInt handles large integers without precision loss.",
        },
        {
          title: "Symbol Uniqueness",
          code: `const sym1 = Symbol('test');
const sym2 = Symbol('test');

console.log(sym1 === sym2); // false
console.log(sym1 == sym2); // false

const obj = {};
obj[sym1] = 'value1';
obj[sym2] = 'value2';

console.log(Object.keys(obj).length); // 0 (symbols are not enumerable)`,
          explanation: "Symbols are unique even with same description; not enumerable in for...in.",
        },
        {
          title: "NaN Handling",
          code: `console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN('hello')); // true (coerces to NaN)
console.log(Number.isNaN('hello')); // false (doesn't coerce)

console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN`,
          explanation: "NaN requires special handling; Number.isNaN is more reliable.",
        },
        {
          title: "Type Coercion Examples",
          code: `console.log(5 + '5'); // '55' (number to string)
console.log('5' - 3); // 2 (string to number)
console.log('' == false); // true (both falsy)
console.log('' === false); // false (different types)

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true`,
          explanation: "Type coercion rules can be surprising; explicit conversion is safer.",
        },
        {
          title: "Array Type Checking",
          code: `const arr = [1, 2, 3];

console.log(typeof arr); // 'object'
console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true

console.log(arr.constructor === Array); // true
console.log(Object.prototype.toString.call(arr)); // '[object Array]'`,
          explanation: "Multiple ways to check if something is an array; Array.isArray is most reliable.",
        },
        {
          title: "Object Property Types",
          code: `const obj = {
  name: 'John',           // string
  age: 30,               // number
  isActive: true,        // boolean
  scores: [85, 92, 78],  // array
  address: {             // object
    street: '123 Main St',
    city: 'Anytown'
  },
  greet: function() {    // function
    return 'Hello!';
  }
};

console.log(typeof obj.name); // 'string'
console.log(Array.isArray(obj.scores)); // true
console.log(typeof obj.greet); // 'function'`,
          explanation: "Objects can contain properties of any type, including other objects and functions.",
        },
      ]}
      mistakes={[
        { title: "Mutating objects unintentionally", fix: "Use immutable patterns or clones when you need to keep original values." },
        { title: "Using == instead of ===", fix: "Strict equality prevents type coercion bugs." },
        { title: "Assuming typeof null is 'null'", fix: "Use value === null for null checks." },
        { title: "Floating-point precision errors", fix: "Use epsilon comparisons or libraries for financial math." },
        { title: "NaN comparison issues", fix: "Use Number.isNaN() for reliable NaN detection." },
        { title: "Array type checking with typeof", fix: "Use Array.isArray() instead of typeof." },
      ]}
      faqs={[
        { q: "Is null a type?", a: "`null` is a primitive value; `typeof null` returns 'object' due to legacy behavior. Use === null for null checks." },
        { q: "When to use BigInt?", a: "Use BigInt for integers beyond Number.MAX_SAFE_INTEGER when exact integer math matters. Cannot mix with regular numbers." },
        { q: "What's the difference between == and ===", a: "== allows type coercion; === requires same type and value. Always prefer === for predictable comparisons." },
        { q: "How to check if something is an array?", a: "Use Array.isArray(value). typeof returns 'object' for arrays." },
        { q: "Why is NaN !== NaN?", a: "NaN represents invalid numbers. By definition, NaN is not equal to anything, including itself." },
        { q: "Can objects be compared by value?", a: "Not directly. Use libraries like lodash or implement custom comparison logic for deep equality." },
        { q: "What's the most efficient way to copy an object?", a: "Depends on depth: shallow copy with spread {...obj}, deep copy with JSON.parse(JSON.stringify(obj)), or structuredClone()." },
        { q: "How does JavaScript handle very large numbers?", a: "Numbers are IEEE 754 doubles with limited precision. Use BigInt for arbitrary precision integers." },
      ]}
      syntax={[
        "typeof 42; // 'number'",
        "typeof 'hi'; // 'string'",
        "Array.isArray([]); // true",
      ]}
      comparison={{
        without: `// Loose equality\nconsole.log('5' == 5); // true`,
        with: `// Strict equality\nconsole.log('5' === 5); // false`,
      }}
      interviewQuestions={[
        { q: "What are JavaScript primitive types?", a: "number, string, boolean, null, undefined, symbol, bigint." },
        { q: "Why does typeof null return 'object'?", a: "It's a legacy quirk in JavaScript." },
        { q: "How do you check for arrays?", a: "Use Array.isArray(value)." },
      ]}
      practice={{
        prompt: "Practice: Log the types of a string, number, null, and array.",
        starterCode: `const name = "Asha";\nconst age = 21;\nconst empty = null;\nconst items = [1, 2, 3];\n\n// TODO: log typeof for each\n`,
        solution: `const name = "Asha";\nconst age = 21;\nconst empty = null;\nconst items = [1, 2, 3];\n\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof empty);\nconsole.log(Array.isArray(items));`,
      }}
      tryItYourself={{
        code: `console.log(typeof 42); // 'number'\nconsole.log(typeof 'hello'); // 'string'\nconsole.log(typeof null); // 'object'\nconsole.log(Array.isArray([])); // true`,
        label: "Run Type Checks",
        description: "Run a few typeof checks and observe the results.",
      }}
      related={[{ label: "Variables", href: "/javascript/variables" }, { label: "var, let, const", href: "/javascript/variables/var-let-const" }, { label: "Primitive Types", href: "/javascript/variables/primitive-types" }, { label: "Non-Primitive Types", href: "/javascript/variables/non-primitive-types" }]}
    />
  );
}
