import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Arithmetic Operators: Addition, Subtraction, Multiplication & More",
  description:
    "Master JavaScript arithmetic operators: addition (+), subtraction (-), multiplication (*), division (/), modulo (%), exponentiation (**), increment (++), and decrement (--).",
  keywords: [
    "javascript arithmetic operators",
    "addition operator",
    "subtraction operator",
    "multiplication operator",
    "division operator",
    "modulo operator",
    "exponentiation operator",
    "increment operator",
    "decrement operator",
    "prefix postfix",
  ],
  openGraph: {
    title: "JavaScript Arithmetic Operators",
    description:
      "Master JavaScript arithmetic operators: addition, subtraction, multiplication, division, modulo, exponentiation, increment, and decrement with practical examples.",
    url: "/javascript/operators/arithmetic-operator",
    type: "article",
    images: ["/og-operators-arithmetic.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Arithmetic Operators",
    description:
      "Master JavaScript arithmetic operators: addition, subtraction, multiplication, division, modulo, exponentiation, increment, and decrement with practical examples.",
    images: ["/og-operators-arithmetic.svg"],
  },
  alternates: { canonical: "/javascript/operators/arithmetic-operator" },
};


const sections = [
  {
    heading: "Basic Arithmetic Operators",
    paragraphs: [
      "JavaScript provides five fundamental arithmetic operators: addition (+), subtraction (-), multiplication (*), division (/), and modulo (%).",
      "Addition (+) adds two numbers together or concatenates strings. Subtraction (-) subtracts the right operand from the left operand.",
      "Multiplication (*) multiplies two numbers. Division (/) divides the left operand by the right operand.",
      "Modulo (%) returns the remainder of division. All these operators work with numbers and perform automatic type conversion when needed.",
    ],
    examples: [
      {
        title: "Basic Arithmetic Operations",
        code: `// Addition
console.log(5 + 3);        // 8
console.log(10.5 + 2.3);   // 12.8

// Subtraction
console.log(10 - 4);       // 6
console.log(5.7 - 2.1);    // 3.6

// Multiplication
console.log(3 * 7);        // 21
console.log(4.5 * 2);      // 9

// Division
console.log(15 / 3);       // 5
console.log(7 / 2);        // 3.5

// Modulo (remainder)
console.log(17 % 5);       // 2
console.log(10 % 3);       // 1
console.log(12 % 4);       // 0`,
        explanation: "Basic arithmetic operators work with both integers and floating-point numbers.",
      },
    ],
  },
  {
    heading: "Exponentiation Operator",
    paragraphs: [
      "The exponentiation operator (**) raises the left operand to the power of the right operand. Introduced in ES2016 (ES7).",
      "Syntax: base ** exponent. Equivalent to Math.pow(base, exponent) but more concise and readable.",
      "Supports fractional and negative exponents. Right-associative, meaning a ** b ** c is evaluated as a ** (b ** c).",
      "More performant than Math.pow() in modern JavaScript engines and has better operator precedence.",
    ],
    examples: [
      {
        title: "Exponentiation Operator",
        code: `// Basic exponentiation
console.log(2 ** 3);       // 8 (2 cubed)
console.log(3 ** 2);       // 9 (3 squared)
console.log(16 ** 0.5);    // 4 (square root of 16)

// Fractional exponents
console.log(8 ** (1/3));   // 2 (cube root of 8)
console.log(4 ** -1);      // 0.25 (1/4)

// Right-associative
console.log(2 ** 3 ** 2);  // 512 (2^(3^2) = 2^9 = 512)

// Comparison with Math.pow
console.log(2 ** 10);      // 1024
console.log(Math.pow(2, 10)); // 1024 (same result)`,
        explanation: "Exponentiation operator provides clean syntax for power operations and supports fractional exponents.",
      },
    ],
  },
  {
    heading: "Increment and Decrement Operators",
    paragraphs: [
      "Increment (++) increases a variable's value by 1. Decrement (--) decreases a variable's value by 1.",
      "Both operators have prefix (++x) and postfix (x++) forms with different behaviors.",
      "Prefix form: increments/decrements first, then returns the new value. Postfix form: returns current value, then increments/decrements.",
      "Common in loops and counters, but can be confusing due to side effects. Prefer explicit addition/subtraction for clarity.",
    ],
    examples: [
      {
        title: "Increment and Decrement Operators",
        code: `let x = 5;

// Postfix increment: return then increment
console.log(x++);     // 5 (returns 5, then x becomes 6)
console.log(x);       // 6

// Prefix increment: increment then return
console.log(++x);     // 7 (x becomes 7, then returns 7)

// Postfix decrement: return then decrement
console.log(x--);     // 7 (returns 7, then x becomes 6)
console.log(x);       // 6

// Prefix decrement: decrement then return
console.log(--x);     // 5 (x becomes 5, then returns 5)

// In expressions
let a = 1, b = 2;
let result = a++ + ++b; // a++ returns 1, ++b returns 3, sum = 4
console.log(result);  // 4
console.log(a, b);    // 2, 3`,
        explanation: "Increment/decrement operators have different behaviors in prefix vs postfix form.",
      },
    ],
  },
  {
    heading: "Type Coercion in Arithmetic",
    paragraphs: [
      "JavaScript automatically converts non-numeric operands to numbers in arithmetic operations.",
      "String concatenation takes precedence over addition when one operand is a string.",
      "Invalid numeric strings convert to NaN. Boolean true becomes 1, false becomes 0.",
      "null converts to 0, undefined converts to NaN. Understanding these rules prevents unexpected results.",
    ],
    examples: [
      {
        title: "Type Coercion in Arithmetic",
        code: `// String concatenation vs addition
console.log(5 + 3);       // 8 (addition)
console.log(5 + "3");     // "53" (string concatenation)
console.log("5" + 3);     // "53" (string concatenation)

// Automatic type conversion
console.log("5" - 3);     // 2 (string "5" converts to number)
console.log("5" * 2);     // 10 (string converts to number)
console.log("10" / 2);    // 5 (string converts to number)

// Boolean conversion
console.log(true + 1);    // 2 (true becomes 1)
console.log(false + 1);   // 1 (false becomes 0)

// Invalid conversions
console.log("abc" - 1);   // NaN (invalid number string)
console.log(null + 1);    // 1 (null becomes 0)
console.log(undefined + 1); // NaN (undefined becomes NaN)`,
        explanation: "JavaScript automatically converts types in arithmetic operations, which can lead to unexpected results.",
      },
    ],
  },
  {
    heading: "Precision and Floating Point Issues",
    paragraphs: [
      "JavaScript uses IEEE 754 double-precision floating-point numbers, which can cause precision errors.",
      "Operations like 0.1 + 0.2 may not equal 0.3 due to binary representation limitations.",
      "Use Number.EPSILON for floating-point comparisons. Consider libraries like decimal.js for financial calculations.",
      "Integer operations are generally safe within JavaScript's safe integer range (Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER).",
    ],
    examples: [
      {
        title: "Floating Point Precision Issues",
        code: `// Floating point precision problems
console.log(0.1 + 0.2);        // 0.30000000000000004 (not exactly 0.3!)
console.log(0.1 + 0.2 === 0.3); // false!

// Using Number.EPSILON for comparison
const EPSILON = Number.EPSILON;
function floatEqual(a, b) {
  return Math.abs(a - b) < EPSILON;
}

console.log(floatEqual(0.1 + 0.2, 0.3)); // true

// Safe integer range
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991

// Beyond safe integers
console.log(9007199254740992 + 1);       // 9007199254740992 (precision lost)
console.log(9007199254740992 + 2);       // 9007199254740994 (wrong!)`,
        explanation: "Floating-point arithmetic can cause precision issues. Use appropriate comparison methods and be aware of safe integer limits.",
      },
    ],
  },
  {
    heading: "Operator Precedence",
    paragraphs: [
      "Arithmetic operators have different precedence levels that determine evaluation order.",
      "Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).",
      "Modulo (%) has the same precedence as multiplication and division.",
      "Exponentiation (**) has the highest precedence among arithmetic operators.",
      "Use parentheses to override precedence and make expressions clear.",
    ],
    examples: [
      {
        title: "Operator Precedence Examples",
        code: `// Multiplication before addition
console.log(2 + 3 * 4);     // 14 (3*4=12, then 2+12)
console.log((2 + 3) * 4);   // 20 (parentheses override precedence)

// Division and modulo same precedence (left-to-right)
console.log(20 / 3 % 2);    // 1.333... % 2 = 1.333...
console.log(20 % 3 / 2);    // 2 / 2 = 1

// Exponentiation highest precedence
console.log(2 * 3 ** 2);    // 18 (3**2=9, then 2*9)
console.log(2 ** 3 * 2);    // 16 (2**3=8, then 8*2)

// Complex expression with parentheses
console.log((5 + 3) * (10 - 2) / 2); // (8) * (8) / 2 = 32`,
        explanation: "Operator precedence determines evaluation order. Use parentheses to make complex expressions clear.",
      },
    ],
  },
  {
    heading: "Special Cases and Edge Cases",
    paragraphs: [
      "Division by zero returns Infinity (positive) or -Infinity (negative), not an error.",
      "Modulo with negative numbers: sign follows the dividend (left operand).",
      "NaN in any arithmetic operation results in NaN. Infinity arithmetic follows mathematical rules.",
      "BigInt arithmetic requires both operands to be BigInt values, no automatic conversion.",
    ],
  },
  {
    heading: "Performance Considerations",
    paragraphs: [
      "Modern JavaScript engines optimize arithmetic operations efficiently.",
      "Bitwise operations on integers can be faster than equivalent arithmetic operations in some cases.",
      "For intensive calculations, consider WebAssembly or specialized libraries.",
      "Use appropriate numeric types (Number vs BigInt) based on your requirements.",
    ],
  },
  {
    heading: "Common Patterns and Use Cases",
    paragraphs: [
      "Counter variables in loops. Calculating totals and averages. Animation frame calculations.",
      "Geometric calculations (area, perimeter, distance). Financial computations (interest, percentages).",
      "Array indexing and bounds checking. Time and date arithmetic. Game physics and scoring.",
      "Data validation and normalization. Statistical calculations. Matrix operations.",
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use parentheses for complex expressions to make precedence explicit.",
      "Be aware of floating-point precision limitations for financial calculations.",
      "Handle division by zero appropriately in your application logic.",
      "Consider using BigInt for large integer calculations.",
      "Test edge cases like NaN, Infinity, and very large/small numbers.",
      "Use increment/decrement operators judiciously to avoid confusion.",
    ],
  },
];



const mistakes = [
  {
    title: "Confusing string concatenation with addition",
    fix: "Be explicit about types. Use Number() or parseFloat() for string-to-number conversion.",
  },
  {
    title: "Not handling floating-point precision",
    fix: "Use Number.EPSILON for floating-point comparisons and consider decimal libraries for financial calculations.",
  },
  {
    title: "Misunderstanding increment/decrement precedence",
    fix: "Use explicit assignment (x = x + 1) instead of ++/-- when the difference matters.",
  },
  {
    title: "Not checking for division by zero",
    fix: "Add validation before division operations to prevent Infinity results.",
  },
  {
    title: "Ignoring operator precedence in complex expressions",
    fix: "Use parentheses to make evaluation order explicit and avoid bugs.",
  },
  {
    title: "Mixing BigInt and regular numbers",
    fix: "Use explicit conversion with BigInt() or Number() when mixing types.",
  },
  {
    title: "Assuming integer operations are always safe",
    fix: "Be aware of Number.MAX_SAFE_INTEGER limits for large integer calculations.",
  },
  {
    title: "Not handling NaN propagation",
    fix: "Validate inputs and use isNaN() checks to prevent NaN from spreading through calculations.",
  },
];

const faqs = [
  {
    q: "Why does 0.1 + 0.2 not equal 0.3 in JavaScript?",
    a: "JavaScript uses binary floating-point arithmetic (IEEE 754), which cannot exactly represent decimal fractions like 0.1 and 0.2. Use Number.EPSILON for comparisons.",
  },
  {
    q: "What's the difference between prefix and postfix increment?",
    a: "Prefix (++x) increments the variable and returns the new value. Postfix (x++) returns the current value and then increments the variable.",
  },
  {
    q: "When should I use ** instead of Math.pow()?",
    a: "Use ** when you want cleaner syntax and better performance. It's equivalent to Math.pow() but more readable for simple cases.",
  },
  {
    q: "How does modulo work with negative numbers?",
    a: "In JavaScript, the modulo operator follows the sign of the dividend (left operand). So -17 % 5 equals -2, not 3.",
  },
  {
    q: "What happens when I divide by zero?",
    a: "Division by zero returns Infinity (for positive numbers) or -Infinity (for negative numbers), not an error like in some other languages.",
  },
  {
    q: "Are arithmetic operations slow in JavaScript?",
    a: "No, modern JavaScript engines have highly optimized arithmetic operations. They're generally fast enough for most applications.",
  },
  {
    q: "When should I use BigInt instead of Number?",
    a: "Use BigInt when you need to work with integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1) or when you need exact integer arithmetic.",
  },
  {
    q: "How do I check if a number is safe for integer operations?",
    a: "Use Number.isSafeInteger(value) to check if a number is within the safe integer range where integer operations are guaranteed to be precise.",
  },
  {
    q: "Why does string + number give string concatenation?",
    a: "The + operator has special behavior: if either operand is a string, it performs string concatenation instead of addition. Other arithmetic operators convert strings to numbers.",
  },
  {
    q: "How do I prevent floating-point precision errors?",
    a: "For financial calculations, consider using integer cents instead of decimal dollars, or use libraries like decimal.js that provide decimal arithmetic.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function JavascriptArithmeticOperatorsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Arithmetic Operators: Addition, Subtraction, Multiplication & More
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Arithmetic operators perform mathematical operations on numeric values. JavaScript supports all standard arithmetic operations plus some modern additions like exponentiation. Understanding these operators is fundamental to any mathematical computation in JavaScript.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Arithmetic operators are used in calculations, data processing, animations, games, financial applications, and virtually any program that needs to perform mathematical operations. Incorrect usage can lead to precision errors, type coercion issues, and unexpected results.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article key={section.heading} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {section.examples && section.examples.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.examples.map((ex) => (
                  <CodeExample
                    key={ex.title}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </article>
        ))}


        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Pitfalls</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
