import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Primitive Types in JavaScript",
  description:
    "Deep dive into JavaScript primitive types: number, string, boolean, null, undefined, symbol, and bigint with examples and tips.",
  keywords: ["javascript primitives", "number string boolean null undefined symbol bigint"],
  openGraph: {
    title: "Primitive Types in JavaScript",
    description:
      "Deep dive into JavaScript primitive types: number, string, boolean, null, undefined, symbol, and bigint with examples and tips.",
    url: "/javascript/variables/primitive-types",
    type: "article",
    images: ["/og-variables-primitive-types.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primitive Types in JavaScript",
    description:
      "Deep dive into JavaScript primitive types: number, string, boolean, null, undefined, symbol, and bigint with examples and tips.",
    images: ["/og-variables-primitive-types.svg"],
  },
  alternates: { canonical: "/javascript/variables/primitive-types" },
};

export default function PrimitiveTypesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Primitive Types"
      intro="Primitives are the basic building blocks in JavaScript. They are immutable and compared by value. Understanding primitive types is essential for writing efficient and bug-free JavaScript code. These fundamental types form the foundation of all JavaScript programs."
      why="Understanding primitives avoids common pitfalls when comparing values or cloning data. Primitive types behave differently from objects in assignments, comparisons, and function arguments, which can lead to unexpected bugs if not properly understood."
      sections={[
        {
          heading: "Number and BigInt",
          paragraphs: [
            "`Number` handles floats and integers using IEEE 754 double-precision format. It can represent integers up to 2^53 and floating-point numbers with approximately 15 decimal digits of precision.",
            "`BigInt` is for arbitrarily large integers beyond Number.MAX_SAFE_INTEGER. Created using BigInt() constructor or 'n' suffix. Essential for financial calculations, cryptography, and large number operations.",
            "Number special values: Infinity, -Infinity, NaN (Not a Number). These represent mathematical edge cases and invalid operations.",
            "BigInt limitations: Cannot mix with regular numbers in operations, cannot use Math object methods, and have different typeof result.",
          ],
        },
        {
          heading: "String, Boolean, Null, Undefined, Symbol",
          paragraphs: [
            "Strings are immutable sequences of UTF-16 code units. Every string operation creates a new string rather than modifying the original. This immutability ensures thread safety and predictable behavior.",
            "Booleans represent truthy/falsy states with only two possible values: true and false. Many JavaScript values are 'truthy' or 'falsy' when evaluated in boolean context, which affects conditional statements.",
            "`null` is an explicit empty value representing intentional absence. Different from undefined, it indicates a deliberate 'no value' state.",
            "`undefined` means a variable has been declared but not assigned a value. Also returned when accessing non-existent object properties or array elements.",
            "Symbol is a unique and immutable primitive value. Each symbol is guaranteed to be unique, even when created with the same description. Perfect for creating private object properties and avoiding naming conflicts.",
          ],
        },
        {
          heading: "Number Deep Dive",
          paragraphs: [
            "IEEE 754 floating-point representation causes precision issues: 0.1 + 0.2 !== 0.3 due to binary representation limitations.",
            "Safe integer range: Numbers from -(2^53 - 1) to +(2^53 - 1) can be safely represented. Beyond this range, precision is lost.",
            "Special number values: Infinity (positive infinity), -Infinity (negative infinity), NaN (result of invalid operations like 0/0).",
            "Number methods: toFixed(), toPrecision(), toString() for formatting. isNaN(), isFinite(), isInteger() for checking.",
            "Parsing numbers: parseInt() and parseFloat() convert strings to numbers. More flexible than Number() constructor.",
            "Math object: Provides constants like Math.PI, Math.E and methods like Math.round(), Math.floor(), Math.ceil().",
          ],
        },
        {
          heading: "String Operations",
          paragraphs: [
            "String concatenation: Using + operator or template literals. Template literals support interpolation and multi-line strings.",
            "String methods: length property, charAt(), charCodeAt(), substring(), slice(), indexOf(), includes(), startsWith(), endsWith().",
            "Case conversion: toUpperCase(), toLowerCase(). Creates new strings since strings are immutable.",
            "Trimming: trim(), trimStart(), trimEnd() remove whitespace. Useful for user input sanitization.",
            "Splitting and joining: split() breaks strings into arrays, join() combines arrays into strings.",
            "Unicode handling: JavaScript strings use UTF-16. Be aware of surrogate pairs for characters outside BMP.",
          ],
        },
        {
          heading: "Boolean Logic and Truthiness",
          paragraphs: [
            "Truthy values: All values except falsy ones. Includes non-empty strings, non-zero numbers, objects, arrays, functions.",
            "Falsy values: false, 0, -0, 0n, '', null, undefined, NaN. These become false in boolean context.",
            "Logical operators: && (AND), || (OR), ! (NOT). Support short-circuit evaluation.",
            "Comparison operators: == (loose equality with coercion), === (strict equality), !==, etc.",
            "Conditional statements: if, while, ternary operator all rely on truthiness evaluation.",
            "Boolean conversion: Explicit conversion using Boolean() constructor or double negation !!.",
          ],
        },
        {
          heading: "Null and Undefined",
          paragraphs: [
            "`null` represents intentional absence of value. Often used as default parameter or to indicate 'no result'.",
            "`undefined` indicates missing value. Returned by functions without return statement, uninitialized variables.",
            "Key difference: typeof null === 'object' (legacy bug), typeof undefined === 'undefined'.",
            "Checking for null/undefined: Use === null, === undefined, or == null (checks both).",
            "Default parameter values: Use || or ?? to provide defaults when dealing with potentially null/undefined values.",
            "Optional chaining (?.) and nullish coalescing (??) help handle null/undefined safely.",
          ],
        },
        {
          heading: "Symbol Advanced Usage",
          paragraphs: [
            "Symbol creation: Symbol() creates unique symbols, Symbol.for() creates/retrieves global symbols.",
            "Well-known symbols: Symbol.iterator, Symbol.toStringTag, etc. Used by JavaScript internals.",
            "Private properties: Symbols can create non-enumerable properties that won't show in for...in loops.",
            "Symbol registry: Symbol.for() and Symbol.keyFor() manage global symbol registry.",
            "Type safety: Symbols prevent property name collisions in objects and APIs.",
            "Debugging: Symbols have descriptions for debugging but don't affect uniqueness.",
          ],
        },
        {
          heading: "BigInt Practical Applications",
          paragraphs: [
            "Cryptography: Large prime numbers and modular arithmetic require BigInt precision.",
            "Financial calculations: Precise decimal arithmetic without floating-point errors.",
            "Timestamp handling: Unix timestamps beyond year 2038 (32-bit limitation).",
            "Database IDs: Large auto-incrementing IDs that exceed Number.MAX_SAFE_INTEGER.",
            "Scientific computing: Calculations requiring arbitrary precision integers.",
            "BigInt limitations: Slower than regular numbers, cannot use with Math object, JSON serialization issues.",
          ],
        },
        {
          heading: "Primitive Type Conversion",
          paragraphs: [
            "Explicit conversion: Number(), String(), Boolean() constructors.",
            "Implicit coercion: Automatic conversion in operations and comparisons.",
            "To number: parseInt(), parseFloat(), Number(), unary +, Math.floor().",
            "To string: String(), toString(), template literals, concatenation.",
            "To boolean: Boolean(), !! (double negation), truthy/falsy evaluation.",
            "Type coercion rules: Complex rules for == operator, prefer === for safety.",
          ],
        },
        {
          heading: "Performance Considerations",
          paragraphs: [
            "Primitive operations are faster than object operations. Use primitives when possible.",
            "String concatenation performance: + operator vs array.join() vs template literals.",
            "Number vs BigInt: Regular numbers are faster for most use cases.",
            "Memory usage: Primitives are more memory-efficient than objects.",
            "V8 optimizations: Engines optimize based on observed types. Consistent primitive usage improves performance.",
            "Avoid unnecessary conversions: Minimize type coercion in hot code paths.",
          ],
        },
        {
          heading: "Best Practices",
          paragraphs: [
            "Use strict equality (===) to avoid type coercion surprises.",
            "Prefer template literals for string interpolation and multi-line strings.",
            "Use BigInt only when necessary - regular numbers are faster and more compatible.",
            "Handle null and undefined explicitly with default values or optional chaining.",
            "Use Symbols for private properties and to avoid naming conflicts.",
            "Be aware of floating-point precision limitations for financial calculations.",
            "Use appropriate type checking: typeof, Number.isNaN(), etc.",
            "Document expected types in function parameters and return values.",
          ],
        },
      ]}
      examples={[
        {
          title: "Number vs BigInt",
          code: `console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n + 1n); // BigInt math`,
          explanation: "Use BigInt when you need integer precision beyond Number.MAX_SAFE_INTEGER.",
        },
        {
          title: "String Immutability",
          code: `let str = 'hello';
let upper = str.toUpperCase();
console.log(str); // 'hello' (unchanged)
console.log(upper); // 'HELLO' (new string)`,
          explanation: "String operations create new strings; original remains unchanged.",
        },
        {
          title: "Truthy and Falsy Values",
          code: `console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean('hello')); // true

// In conditionals
if ('') {
  console.log('This won\'t run');
}
if ([]) {
  console.log('This will run');
}`,
          explanation: "Understanding truthiness is crucial for conditional logic.",
        },
        {
          title: "Null vs Undefined",
          code: `let a; // undefined
let b = null; // null

console.log(typeof a); // 'undefined'
console.log(typeof b); // 'object'

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)

function getUser() {
  return null; // Explicit no user
}

let user = getUser();
if (user === null) {
  console.log('No user found');
}`,
          explanation: "null and undefined are different; use appropriate checks.",
        },
        {
          title: "Symbol Uniqueness",
          code: `const sym1 = Symbol('test');
const sym2 = Symbol('test');

console.log(sym1 === sym2); // false

const obj = {
  [sym1]: 'value1',
  [sym2]: 'value2',
  regularProp: 'regular'
};

console.log(Object.keys(obj)); // ['regularProp']
console.log(Object.getOwnPropertySymbols(obj)); // [sym1, sym2]`,
          explanation: "Symbols are unique and can create non-enumerable properties.",
        },
        {
          title: "BigInt Operations",
          code: `const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;

console.log(big1 + big2); // Works with BigInt
// console.log(big1 + 1); // Error: can't mix BigInt and number

console.log(big1 * big2); // Arbitrary precision
console.log(big1 < big2); // Comparison works

// Convert to string for display
console.log(big1.toString());`,
          explanation: "BigInt provides arbitrary precision but has restrictions.",
        },
        {
          title: "Number Precision Issues",
          code: `console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Safe comparison
const EPSILON = 0.0000001;
function floatEqual(a, b) {
  return Math.abs(a - b) < EPSILON;
}

console.log(floatEqual(0.1 + 0.2, 0.3)); // true`,
          explanation: "Floating-point arithmetic has precision limitations.",
        },
        {
          title: "Type Conversion Examples",
          code: `// To number
console.log(Number('42')); // 42
console.log(parseInt('42px')); // 42
console.log(+'42'); // 42 (unary plus)

// To string
console.log(String(42)); // '42'
console.log(42 + ''); // '42'

// To boolean
console.log(Boolean(0)); // false
console.log(!!'hello'); // true

// Coercion examples
console.log('5' + 3); // '53' (string concatenation)
console.log('5' - 3); // 2 (string to number)`,
          explanation: "Understanding type conversion prevents unexpected behavior.",
        },
      ]}
      mistakes={[
        { title: "Using `==` with different types", fix: "Prefer `===` to avoid coercion surprises with primitives." },
        { title: "Assuming string operations modify original", fix: "Strings are immutable; operations return new strings." },
        { title: "Floating-point precision errors", fix: "Use epsilon comparisons or libraries for precise decimal math." },
        { title: "Confusing null and undefined", fix: "Use explicit checks: === null vs === undefined." },
        { title: "Mixing BigInt and Number", fix: "Convert explicitly: Number(bigInt) or BigInt(number)." },
        { title: "Assuming all numbers are safe", fix: "Check against Number.MAX_SAFE_INTEGER for large integers." },
      ]}
      faqs={[
        { q: "Is string immutable?", a: "Yes — operations create new strings rather than modifying the original. This ensures thread safety and predictable behavior." },
        { q: "When should I use BigInt?", a: "Use BigInt for integers beyond Number.MAX_SAFE_INTEGER, cryptography, or when exact integer precision is required." },
        { q: "What's the difference between null and undefined?", a: "null is explicit absence of value; undefined means uninitialized. typeof null returns 'object' (bug), typeof undefined returns 'undefined'." },
        { q: "How do Symbols work?", a: "Symbols are unique primitives, perfect for private properties. Each Symbol() call creates a unique value, even with same description." },
        { q: "Why is 0.1 + 0.2 !== 0.3?", a: "Due to IEEE 754 floating-point representation. Binary can't exactly represent some decimal fractions." },
        { q: "Can I mix BigInt and regular numbers?", a: "No, they throw TypeError. Convert explicitly using BigInt() or Number() when needed." },
        { q: "What are truthy and falsy values?", a: "Falsy: false, 0, '', null, undefined, NaN. Everything else is truthy, including objects and non-empty strings." },
        { q: "How to safely convert to number?", a: "Use Number.isNaN(Number(value)) to check if conversion succeeded, or use parseInt/parseFloat for strings." },
      ]}
      syntax={[
        "typeof 42; // 'number'",
        "typeof 'hi'; // 'string'",
        "typeof true; // 'boolean'",
      ]}
      comparison={{
        without: `// Loose equality\nconsole.log(null == undefined); // true`,
        with: `// Strict equality\nconsole.log(null === undefined); // false`,
      }}
      interviewQuestions={[
        { q: "What are JavaScript primitives?", a: "number, string, boolean, null, undefined, symbol, bigint." },
        { q: "Why are strings immutable?", a: "Operations create new strings to keep values predictable." },
        { q: "Why is typeof null 'object'?", a: "Legacy JavaScript quirk." },
      ]}
      practice={{
        prompt: "Practice: Convert a string number to a number and check its type.",
        starterCode: `const value = "42";\n// TODO: convert to number and log typeof\n`,
        solution: `const value = "42";\nconst num = Number(value);\nconsole.log(typeof num);`,
      }}
      tryItYourself={{
        code: `console.log(Boolean(0));\nconsole.log(Boolean('')); \nconsole.log(Boolean([]));\nconsole.log(Boolean({}));`,
        label: "Run Truthy/Falsy",
        description: "Run these boolean conversions to see truthy/falsy behavior.",
      }}
      related={[{ label: "Data Types", href: "/javascript/variables/data-types" }, { label: "var, let, const", href: "/javascript/variables/var-let-const" }, { label: "Type Conversion", href: "/javascript/variables/type-conversion" }]}
    />
  );
}
