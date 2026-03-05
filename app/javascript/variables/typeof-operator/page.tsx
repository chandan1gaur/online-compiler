import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript `typeof` Operator",
  description:
    "Quick guide to the `typeof` operator: returned strings, edge cases like `null`, and practical usage patterns.",
  keywords: ["javascript typeof", "typeof null", "type checks"],
  openGraph: {
    title: "JavaScript `typeof` Operator",
    description:
      "Quick guide to the `typeof` operator: returned strings, edge cases like `null`, and practical usage patterns.",
    url: "/javascript/variables/typeof-operator",
    type: "article",
    images: ["/og-variables-typeof-operator.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript `typeof` Operator",
    description:
      "Quick guide to the `typeof` operator: returned strings, edge cases like `null`, and practical usage patterns.",
    images: ["/og-variables-typeof-operator.svg"],
  },
  alternates: { canonical: "/javascript/variables/typeof-operator" },
};

export default function TypeofOperatorPage() {
  return (
    <JsTutorialTemplate
      title="The `typeof` Operator"
      intro="`typeof` returns a string describing the type of a value. It’s useful for quick checks but has known edge cases to watch out for. The typeof operator is one of JavaScript's oldest features and provides runtime type information, though it has some historical quirks that developers need to understand."
      why="Use `typeof` for robust runtime checks (e.g., guard clauses) while knowing its limitations. It's essential for defensive programming and handling dynamic data, but should be used carefully due to its edge cases."
      sections={[
        {
          heading: "Return Values",
          paragraphs: [
            "`typeof` can return 'string', 'number', 'boolean', 'undefined', 'object', 'function', or 'symbol'. Each return value corresponds to a specific JavaScript type.",
            "'bigint' is returned for BigInt values (ES2020+). 'symbol' for Symbol values. 'function' for callable objects.",
            "'object' for objects, arrays, null, and other non-primitive values. This is where most confusion arises.",
            "'undefined' for declared but unassigned variables, missing properties, and void returns.",
          ],
        },
        {
          heading: "Common Pitfalls",
          paragraphs: [
            "`typeof null` returns 'object' due to legacy reasons. This is a well-known bug in JavaScript that has been preserved for backward compatibility.",
            "Arrays and objects both return 'object'. Cannot distinguish between {} and [] using typeof alone.",
            "Date objects, RegExp objects, and other built-in objects all return 'object'.",
            "Primitive wrapper objects (new String(), new Number()) return 'object', not their primitive counterparts.",
          ],
        },
        {
          heading: "Typeof with Primitives",
          paragraphs: [
            "Numbers: typeof 42 === 'number', typeof NaN === 'number', typeof Infinity === 'number'. All numeric values return 'number'.",
            "Strings: typeof 'hello' === 'string', typeof \`template\` === 'string'. All string literals and expressions return 'string'.",
            "Booleans: typeof true === 'boolean', typeof false === 'boolean'. Boolean literals return 'boolean'.",
            "Undefined: typeof undefined === 'undefined'. Also returned for undeclared variables in non-strict mode.",
            "Symbols: typeof Symbol() === 'symbol'. Unique identifiers return 'symbol'.",
            "BigInts: typeof 42n === 'bigint'. Large integers return 'bigint'.",
          ],
        },
        {
          heading: "Typeof with Objects",
          paragraphs: [
            "Plain objects: typeof {} === 'object'. All objects return 'object'.",
            "Arrays: typeof [] === 'object'. Arrays are objects in JavaScript.",
            "Functions: typeof function(){} === 'function'. Functions are callable objects.",
            "Null: typeof null === 'object'. Historical bug, don't rely on this.",
            "Dates: typeof new Date() === 'object'. Date instances are objects.",
            "Regular expressions: typeof /regex/ === 'object'. RegExp objects return 'object'.",
          ],
        },
        {
          heading: "Practical Usage Patterns",
          paragraphs: [
            "Checking for undefined: Use typeof variable === 'undefined' instead of direct comparison to avoid ReferenceError.",
            "Function detection: typeof func === 'function' to check if a value is callable.",
            "Primitive checks: Combine typeof with value checks for robust primitive detection.",
            "Guard clauses: Use typeof in defensive programming to handle dynamic data safely.",
            "Feature detection: Check if browser APIs exist using typeof before calling them.",
            "Library type checking: Build utility functions that combine typeof with other checks.",
          ],
        },
        {
          heading: "Better Type Checking Alternatives",
          paragraphs: [
            "Array.isArray(): Specifically checks for arrays, more reliable than typeof.",
            "Number.isNaN(): Checks for NaN values, more reliable than isNaN().",
            "Object.prototype.toString(): Returns '[object Type]' for precise type detection.",
            "instanceof: Checks prototype chain, useful for custom object types.",
            "constructor property: Can be spoofed, less reliable than other methods.",
            "Custom type guards: Functions that perform comprehensive type checking.",
          ],
        },
        {
          heading: "Edge Cases and Gotchas",
          paragraphs: [
            "Undeclared variables: In non-strict mode, typeof undeclaredVar === 'undefined'. In strict mode, ReferenceError.",
            "Document.all: Ancient IE object where typeof document.all === 'undefined' despite existing.",
            "Host objects: Browser DOM objects may have unpredictable typeof behavior.",
            "Primitive wrappers: new String('hi') has typeof 'object', not 'string'.",
            "Callable objects: Some objects are callable but typeof returns 'object', not 'function'.",
            "Proxy objects: typeof proxy returns the typeof of the target object.",
          ],
        },
        {
          heading: "Performance and Best Practices",
          paragraphs: [
            "Typeof is fast: One of the fastest operations in JavaScript, suitable for hot code paths.",
            "Use for primitives: Excellent for checking primitive types and undefined.",
            "Combine with other checks: Use Array.isArray(), instanceof for complex types.",
            "Avoid for null checks: Use === null instead of typeof === 'object'.",
            "TypeScript alternative: Use static typing to catch type errors at compile time.",
            "Runtime validation: Combine typeof with schema validation libraries for robust checking.",
          ],
        },
        {
          heading: "Common Patterns",
          paragraphs: [
            "Safe property access: Check if object exists before accessing properties.",
            "Function parameter validation: Use typeof to validate function arguments.",
            "API response handling: Check types of data received from external sources.",
            "Polyfill detection: Use typeof to check if modern features are available.",
            "Module loading: Check if required modules are loaded using typeof.",
            "Error handling: Validate error objects and thrown values.",
          ],
        },
      ]}
      examples={[
        {
          title: "Basic typeof Checks",
          code: `console.log(typeof 42); // 'number'
console.log(typeof 'hi'); // 'string'
console.log(typeof null); // 'object'`,
          explanation: "Note the `null` edge case; use additional checks for precise type detection.",
        },
        {
          title: "Primitive Type Detection",
          code: `function isPrimitive(value) {
  const type = typeof value;
  return type === 'string' || 
         type === 'number' || 
         type === 'boolean' || 
         type === 'symbol' || 
         type === 'bigint' || 
         type === 'undefined';
}

console.log(isPrimitive(42)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive(null)); // false (typeof null === 'object')`,
          explanation: "Combine typeof with logic for comprehensive primitive checking.",
        },
        {
          title: "Safe Undefined Checks",
          code: `// Avoid: if (someVar === undefined) - throws if undeclared
// Better: use typeof
if (typeof someVar === 'undefined') {
  console.log('Variable is undefined');
}

// Works even for undeclared variables
console.log(typeof notDeclared); // 'undefined' (non-strict mode)`,
          explanation: "typeof is safe for checking undeclared variables.",
        },
        {
          title: "Function Detection",
          code: `function callIfFunction(func) {
  if (typeof func === 'function') {
    return func();
  }
  return null;
}

console.log(callIfFunction(() => 'called')); // 'called'
console.log(callIfFunction(42)); // null`,
          explanation: "Use typeof to check if a value is callable.",
        },
        {
          title: "Array Detection (Wrong Way)",
          code: `const arr = [1, 2, 3];
const obj = { length: 3 };

console.log(typeof arr); // 'object'
console.log(typeof obj); // 'object'

// Wrong way
function isArrayWrong(value) {
  return typeof value === 'object' && value !== null;
}

console.log(isArrayWrong(arr)); // true
console.log(isArrayWrong(obj)); // true (false positive)`,
          explanation: "typeof cannot distinguish arrays from objects.",
        },
        {
          title: "Array Detection (Right Way)",
          code: `const arr = [1, 2, 3];
const obj = { length: 3 };

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

// Comprehensive array check
function isArray(value) {
  return Array.isArray(value);
}

console.log(isArray(arr)); // true
console.log(isArray(obj)); // false`,
          explanation: "Use Array.isArray() for reliable array detection.",
        },
        {
          title: "Complex Type Checking",
          code: `function getType(value) {
  const type = typeof value;
  
  if (type === 'object') {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    return 'object';
  }
  
  return type;
}

console.log(getType(null)); // 'null'
console.log(getType([1, 2])); // 'array'
console.log(getType(new Date())); // 'date'
console.log(getType(/test/)); // 'regexp'`,
          explanation: "Combine typeof with instanceof and other checks for detailed type information.",
        },
        {
          title: "Host Object Quirks",
          code: `// In browsers
console.log(typeof window); // 'object'
console.log(typeof document); // 'object'
console.log(typeof console); // 'object'

// Some host objects may behave unexpectedly
console.log(typeof document.all); // 'undefined' in modern browsers

// Feature detection
if (typeof localStorage !== 'undefined') {
  // localStorage is available
}`,
          explanation: "Host objects (DOM, BOM) may have unusual typeof behavior.",
        },
      ]}
      mistakes={[
        { title: "Relying solely on `typeof null`", fix: "Use `value === null` or Array.isArray for accurate checks." },
        { title: "Using typeof for array detection", fix: "Use Array.isArray() instead of typeof." },
        { title: "Assuming typeof works for host objects", fix: "Test behavior and use feature detection patterns." },
        { title: "Direct undefined comparison", fix: "Use typeof for safe undefined checks." },
        { title: "Ignoring primitive wrapper objects", fix: "Check for both primitives and wrapper objects." },
        { title: "Over-relying on typeof", fix: "Combine with other type checking methods for robustness." },
      ]}
      faqs={[
        { q: "How to detect arrays?", a: "Use `Array.isArray(value)`; `typeof` reports arrays as 'object'." },
        { q: "Why does typeof null return 'object'?", a: "Historical bug from JavaScript's early days, preserved for backward compatibility." },
        { q: "Can typeof check for undeclared variables?", a: "Yes, typeof undeclaredVar returns 'undefined' without throwing ReferenceError." },
        { q: "What's the difference between typeof and instanceof?", a: "typeof checks primitive types, instanceof checks prototype chain for objects." },
        { q: "How to check if something is callable?", a: "Use typeof value === 'function', but note some objects are callable too." },
        { q: "Is typeof slow?", a: "No, typeof is one of the fastest operations in JavaScript." },
        { q: "Can I override typeof behavior?", a: "No, typeof cannot be overridden or customized." },
        { q: "How does typeof work with symbols?", a: "typeof Symbol() returns 'symbol', introduced in ES6." },
      ]}
      related={[{ label: "Type Conversion", href: "/javascript/variables/type-conversion" }, { label: "Data Types", href: "/javascript/variables/data-types" }, { label: "Primitive Types", href: "/javascript/variables/primitive-types" }]}
    />
  );
}
