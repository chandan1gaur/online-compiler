import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Type Conversion in JavaScript",
  description:
    "Learn about implicit and explicit type conversion in JavaScript, how coercion works, and how to write predictable code.",
  keywords: ["javascript type conversion", "type coercion", "implicit conversion", "Number() String() Boolean()"],
  openGraph: {
    title: "Type Conversion in JavaScript",
    description:
      "Learn about implicit and explicit type conversion in JavaScript, how coercion works, and how to write predictable code.",
    url: "/javascript/variables/type-conversion",
    type: "article",
    images: ["/og-variables-type-conversion.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Type Conversion in JavaScript",
    description:
      "Learn about implicit and explicit type conversion in JavaScript, how coercion works, and how to write predictable code.",
    images: ["/og-variables-type-conversion.svg"],
  },
  alternates: { canonical: "/javascript/variables/type-conversion" },
};

export default function TypeConversionPage() {
  return (
    <JsTutorialTemplate
      title="Type Conversion & Coercion"
      intro="JavaScript often converts values between types automatically. Learn when coercion happens and how to control conversions explicitly. Type conversion is a fundamental aspect of JavaScript that can lead to both powerful features and subtle bugs if not understood properly."
      why="Predictable conversions prevent bugs in comparisons, arithmetic, and API inputs. Prefer explicit conversion for clarity. Understanding coercion rules helps write more robust and maintainable code."
      sections={[
        {
          heading: "Implicit vs Explicit Conversion",
          paragraphs: [
            "Implicit conversion (coercion) happens in operations like `+`, `==`, and conditional checks. JavaScript automatically converts types to make operations work, following specific rules.",
            "Explicit conversion uses helpers like `Number()`, `String()`, `Boolean()` or unary `+`. These provide clear intent and predictable results, making code more readable and less error-prone.",
            "Coercion can be powerful but dangerous. It allows flexible code but can mask type errors. Modern JavaScript development often prefers explicit conversion for better type safety.",
            "Understanding coercion rules is essential for debugging. Knowing when and how JavaScript converts types helps predict program behavior.",
          ],
        },
        {
          heading: "Common Gotchas",
          paragraphs: [
            "Empty strings, `null`, `undefined`, and arrays can produce surprising coerced results — test conversions in edge cases. These 'falsy' or 'truthy' values behave differently than expected.",
            "String concatenation vs numeric addition: `+` operator behaves differently with strings vs numbers. One string operand forces string concatenation.",
            "Loose equality (`==`) performs type coercion before comparison. This can lead to unexpected true results when strict equality (`===`) would return false.",
            "Array and object coercion: Arrays become strings via `toString()`, objects may throw errors or return '[object Object]'.",
          ],
        },
        {
          heading: "To Number Conversion",
          paragraphs: [
            "Number() constructor: Explicit conversion, returns NaN for invalid inputs. More strict than parseInt/parseFloat.",
            "parseInt() and parseFloat(): Parse strings, stop at first invalid character. Useful for partial strings like '42px'.",
            "Unary plus (+): Quick number conversion, equivalent to Number(). Fast but less explicit.",
            "Math operations: Automatic coercion in arithmetic. Division by zero returns Infinity, invalid operations return NaN.",
            "BigInt conversion: Use BigInt() for large integers, but cannot mix with regular numbers in operations.",
          ],
        },
        {
          heading: "To String Conversion",
          paragraphs: [
            "String() constructor: Explicit conversion, works with any value including null and undefined.",
            "Template literals: Automatic string conversion with interpolation. Modern preferred method.",
            "toString() method: Available on most objects, customizable via Symbol.toPrimitive.",
            "Concatenation: + operator with string forces string conversion of other operand.",
            "JSON.stringify(): Converts objects to JSON strings, handles nested structures.",
          ],
        },
        {
          heading: "To Boolean Conversion",
          paragraphs: [
            "Boolean() constructor: Explicit conversion. Clear and readable.",
            "Double negation (!!) : Quick boolean conversion, commonly used.",
            "Falsy values: false, 0, -0, 0n, '', null, undefined, NaN. Everything else is truthy.",
            "Truthy values: Non-empty strings, non-zero numbers, objects, arrays, functions.",
            "Conditional contexts: if, while, ternary operator all perform boolean conversion.",
            "Logical operators: && and || return actual values, not booleans, but use truthiness for evaluation.",
          ],
        },
        {
          heading: "Equality and Comparison",
          paragraphs: [
            "Strict equality (===): No type coercion, checks value and type. Preferred for most comparisons.",
            "Loose equality (==): Performs type coercion before comparison. Complex rules can be surprising.",
            "Abstract equality algorithm: Defines how == works. Involves ToPrimitive conversions and complex rules.",
            "SameValueZero: Used by includes(), indexOf(). Similar to === but treats -0 and +0 as equal.",
            "Object comparison: Always false for different objects, even with identical properties. Compare references.",
          ],
        },
        {
          heading: "Advanced Coercion Topics",
          paragraphs: [
            "Symbol.toPrimitive: Method objects can implement for custom conversion behavior.",
            "valueOf() and toString(): Called during primitive conversion. Objects can customize how they convert.",
            "Primitive wrapper objects: new String(), new Number(), new Boolean(). Behave differently than primitives.",
            "Date coercion: Dates convert to strings or numbers (timestamps) depending on context.",
            "Array coercion: Arrays convert to strings by joining elements, or to numbers via valueOf().",
          ],
        },
        {
          heading: "Performance Implications",
          paragraphs: [
            "Type coercion has performance costs. Explicit conversion can be faster in hot code paths.",
            "V8 engine optimizes repeated coercions. Consistent types improve performance.",
            "Avoid coercion in loops. Pre-convert values outside loops for better performance.",
            "Memory implications: Wrapper objects consume more memory than primitives.",
            "Garbage collection: Wrapper objects may create more GC pressure than primitives.",
          ],
        },
        {
          heading: "Best Practices",
          paragraphs: [
            "Prefer explicit conversion over implicit coercion for clarity and predictability.",
            "Use strict equality (===) instead of loose equality (==) to avoid coercion surprises.",
            "Handle edge cases explicitly: Check for null/undefined before conversion.",
            "Use appropriate conversion methods: Number() for strict number conversion, parseInt() for partial strings.",
            "Document expected types in function parameters and return values.",
            "Use TypeScript for compile-time type checking to catch conversion errors early.",
            "Test conversion edge cases thoroughly, especially with user input.",
            "Consider using utility libraries like Lodash for complex type operations.",
          ],
        },
      ]}
      examples={[
        {
          title: "String Concatenation vs Addition",
          code: `console.log('1' + 2); // '12'
console.log(1 + 2); // 3`,
          explanation: "`+` triggers string concatenation if either operand is a string.",
        },
        {
          title: "Loose Equality Surprises",
          code: `console.log(null == undefined); // true
console.log([] == false); // true`,
          explanation: "`==` performs complex coercion rules — prefer `===` for predictable equality.",
        },
        {
          title: "Number Conversion Methods",
          code: `console.log(Number('42')); // 42
console.log(Number('42px')); // NaN
console.log(parseInt('42px')); // 42
console.log(parseFloat('3.14px')); // 3.14
console.log(+'42'); // 42 (unary plus)`,
          explanation: "Different methods handle invalid characters differently.",
        },
        {
          title: "Boolean Conversion Edge Cases",
          code: `console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean('0')); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false`,
          explanation: "Empty arrays and objects are truthy, empty strings are falsy.",
        },
        {
          title: "Equality Comparison Differences",
          code: `console.log(0 == false); // true (coercion)
console.log(0 === false); // false (strict)

console.log('' == false); // true (coercion)
console.log('' === false); // false (strict)

console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (strict)`,
          explanation: "Loose equality performs type coercion; strict equality does not.",
        },
        {
          title: "Array and Object Coercion",
          code: `console.log(String([1, 2, 3])); // '1,2,3'
console.log(Number([1])); // 1
console.log(Number([1, 2])); // NaN

console.log(String({})); // '[object Object]'
console.log(Number({})); // NaN

console.log(Boolean([])); // true
console.log(Boolean({})); // true`,
          explanation: "Arrays and objects have specific coercion behaviors.",
        },
        {
          title: "Custom Object Conversion",
          code: `const obj = {
  value: 42,
  toString() {
    return 'custom string';
  },
  valueOf() {
    return 99;
  }
};

console.log(String(obj)); // 'custom string'
console.log(Number(obj)); // 99
console.log(obj + 1); // 100 (uses valueOf)

const date = new Date();
console.log(Number(date)); // timestamp
console.log(String(date)); // date string`,
          explanation: "Objects can customize their conversion behavior.",
        },
        {
          title: "Primitive Wrapper Objects",
          code: `const str = new String('hello');
console.log(typeof str); // 'object'
console.log(str === 'hello'); // false

const num = new Number(42);
console.log(typeof num); // 'object'
console.log(num === 42); // false

// But they work in operations
console.log(str + ' world'); // 'hello world'
console.log(num + 8); // 50`,
          explanation: "Wrapper objects behave like primitives in operations but are objects for typeof.",
        },
      ]}
      mistakes={[
        { title: "Using `==` unintentionally", fix: "Use `===` to avoid coercion-based surprises." },
        { title: "Assuming empty string is falsey-safe", fix: "Explicitly convert values before arithmetic or API calls." },
        { title: "Relying on array-to-string coercion", fix: "Use explicit join() or toString() for clarity." },
        { title: "Confusing null and undefined coercion", fix: "Handle null/undefined explicitly before operations." },
        { title: "Using Number() for user input", fix: "Use parseInt/parseFloat for partial string parsing." },
        { title: "Assuming object coercion is predictable", fix: "Test object conversion behavior explicitly." },
      ]}
      faqs={[
        { q: "Is coercion always bad?", a: "Not always — it can be handy, but explicit conversions are clearer and safer in most codebases." },
        { q: "When should I use == vs ===", a: "Almost always use ===. == performs confusing coercion that can hide bugs." },
        { q: "How to safely convert user input?", a: "Validate input first, then use appropriate conversion: parseInt for integers, Number for strict numbers." },
        { q: "Why does [] == false return true?", a: "Array coerces to empty string, empty string coerces to 0, 0 == false is true due to complex == rules." },
        { q: "How to prevent coercion bugs?", a: "Use strict equality, explicit conversion, and TypeScript. Test edge cases thoroughly." },
        { q: "What's the difference between Number() and parseInt()?", a: "Number() is strict (returns NaN for invalid), parseInt() is lenient (stops at first invalid character)." },
        { q: "Can I customize object coercion?", a: "Yes, implement toString() and valueOf() methods to control how objects convert to primitives." },
        { q: "Why avoid wrapper objects?", a: "They create unnecessary objects, are slower, and can cause typeof confusion. Use primitives instead." },
      ]}
      related={[{ label: "Data Types", href: "/javascript/variables/data-types" }, { label: "Primitive Types", href: "/javascript/variables/primitive-types" }, { label: "typeof Operator", href: "/javascript/variables/typeof-operator" }]}
    />
  );
}
