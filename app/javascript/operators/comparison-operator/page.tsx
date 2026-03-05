import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Comparison Operators: == vs ===, <, >, <=, >=",
  description:
    "Master JavaScript comparison operators: strict equality (===), loose equality (==), greater than (>), less than (<), greater than or equal (>=), less than or equal (<=) with type coercion explained.",
  keywords: [
    "javascript comparison operators",
    "strict equality",
    "loose equality",
    "greater than",
    "less than",
    "type coercion",
    "comparison operators",
  ],
  openGraph: {
    title: "JavaScript Comparison Operators",
    description:
      "Master JavaScript comparison operators: strict vs loose equality, relational operators, and type coercion behavior.",
    url: "/javascript/operators/comparison-operator",
    type: "article",
    images: ["/og-operators-comparison.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Comparison Operators",
    description:
      "Master JavaScript comparison operators: strict vs loose equality, relational operators, and type coercion behavior.",
    images: ["/og-operators-comparison.svg"],
  },
  alternates: { canonical: "/javascript/operators/comparison-operator" },
};

const sections = [
  {
    heading: "Strict Equality Operator (===)",
    paragraphs: [
      "The strict equality operator (===) compares two values for equality without type coercion.",
      "Returns true only if both operands are the same type and have the same value.",
      "No type conversion occurs - different types are never equal, even if they represent the same value.",
      "Preferred over loose equality for predictable, bug-free comparisons.",
      "Essential for reliable conditional logic and data validation.",
    ],
    examples: [
      {
        title: "Strict Equality (===) Comparisons",
        code: `// Strict equality - no type coercion
console.log(5 === 5);        // true (same type and value)
console.log(5 === "5");      // false (different types)
console.log(true === 1);     // false (boolean vs number)
console.log(null === undefined); // false (different types)
console.log([] === []);       // false (different objects)
console.log({} === {});       // false (different objects)

// Reference equality
const arr1 = [1, 2, 3];
const arr2 = arr1;
console.log(arr1 === arr2);   // true (same reference)

const obj1 = { name: "John" };
const obj2 = { name: "John" };
console.log(obj1 === obj2);   // false (different references)

// Type checking with strict equality
function isString(value) {
  return typeof value === 'string';
}

function isInteger(value) {
  return typeof value === 'number' && Number.isInteger(value);
}

console.log(isString("hello")); // true
console.log(isInteger(42));     // true
console.log(isInteger(42.5));   // false`,
        explanation: "Strict equality prevents unexpected type coercion bugs that can occur with loose equality.",
      },
    ],
  },
  {
    heading: "Loose Equality Operator (==)",
    paragraphs: [
      "The loose equality operator (==) compares two values for equality with type coercion.",
      "Performs type conversion before comparison, following complex coercion rules.",
      "Can produce unexpected results due to implicit type conversion.",
      "Historically problematic - often leads to subtle bugs in JavaScript code.",
      "Generally avoided in favor of strict equality, except in specific cases where coercion is intentional.",
    ],
    examples: [
      {
        title: "Loose Equality (==) Comparisons",
        code: `// Loose equality - with type coercion
console.log(5 == 5);         // true
console.log(5 == "5");       // true (string "5" converts to number 5)
console.log(true == 1);      // true (true converts to 1)
console.log(false == 0);     // true (false converts to 0)
console.log(null == undefined); // true (special case)
console.log([] == "");       // true (array converts to empty string)
console.log([] == 0);        // true (array converts to 0)

// Comparison with coercion demonstration
console.log(0 == "");        // true (both become 0)
console.log(0 == "0");       // true (string converts to number)
console.log("" == "0");      // false (both are strings, can't coerce)

// Why loose equality can be problematic
const userInput = "10";
const expectedValue = 10;

// Using loose equality (risky)
if (userInput == expectedValue) {
  console.log("Match found"); // This will run
}

// Better: explicit conversion
if (parseInt(userInput, 10) === expectedValue) {
  console.log("Properly validated");
}`,
        explanation: "Loose equality performs type coercion which can lead to unexpected results. Strict equality is safer.",
      },
    ],
  },
  {
    heading: "Inequality Operators (!== and !=)",
    paragraphs: [
      "Strict inequality (!==) returns true if operands are not strictly equal.",
      "Loose inequality (!=) returns true if operands are not loosely equal.",
      "Follows the same type coercion rules as their equality counterparts.",
      "!== is preferred for consistency with strict equality usage.",
      "Used for checking non-equality in conditions and validations.",
    ],
    examples: [
      {
        title: "Inequality Operators (!==, !=)",
        code: `// Strict inequality (!==)
console.log(5 !== "5");      // true (different types)
console.log(5 !== 5);        // false (same type and value)
console.log(true !== 1);     // true (boolean vs number)
console.log(null !== undefined); // true (different types)

// Loose inequality (!=)
console.log(5 != "5");       // false (equal after coercion)
console.log(5 != 6);         // true
console.log(null != undefined); // false (loosely equal)

// Practical validation
function validateUserInput(input, expectedType) {
  if (typeof input !== expectedType) {
    return false; // Use strict inequality
  }
  return true;
}

console.log(validateUserInput("hello", "string")); // true
console.log(validateUserInput(42, "string"));      // false
console.log(validateUserInput(42, "number"));      // true

// Guard clauses
function processValue(value) {
  if (value === null || value === undefined) {
    return "Value is empty";
  }
  
  if (typeof value !== "number") {
    return "Value must be a number";
  }
  
  if (value < 0) {
    return "Value must be positive";
  }
  
  return \`Processed: \${value}\`;
}`,
        explanation: "Inequality operators check for non-equality. Strict inequality (!=={{) is preferred for type-safe comparisons.",
      },
    ],
  },
  {
    heading: "Greater Than and Less Than Operators",
    paragraphs: [
      "Greater than (>) compares if left operand is greater than right operand.",
      "Less than (<) compares if left operand is less than right operand.",
      "Greater than or equal (>=) and less than or equal (<=) include equality cases.",
      "Perform type coercion to numbers before comparison.",
      "Used for ordering, sorting, bounds checking, and range validation.",
    ],
    examples: [
      {
        title: "Relational Operators (<, >, <=, >=)",
        code: `// Basic numeric comparisons
console.log(5 > 3);          // true
console.log(5 < 3);          // false
console.log(5 >= 5);         // true
console.log(5 <= 4);         // false

// String comparisons (lexicographic)
console.log("apple" < "banana");    // true ('a' comes before 'b')
console.log("zebra" > "apple");     // true ('z' > 'a')
console.log("cat" < "car");         // false ('t' > 'r')

// Mixed type comparisons (converted to numbers)
console.log(5 > "3");         // true (string "3" becomes number 3)
console.log("5" < 3);         // false (string "5" becomes number 5)
console.log("10" > "2");      // false (string comparison, "1" < "2")

// Array bounds checking
function isValidIndex(array, index) {
  return index >= 0 && index < array.length;
}

const arr = [1, 2, 3, 4, 5];
console.log(isValidIndex(arr, 2));   // true
console.log(isValidIndex(arr, 10));  // false
console.log(isValidIndex(arr, -1));  // false

// Range validation
function isInRange(value, min, max) {
  return value >= min && value <= max;
}

console.log(isInRange(5, 1, 10));    // true
console.log(isInRange(15, 1, 10));   // false
console.log(isInRange(1, 1, 10));    // true`,
        explanation: "Relational operators compare ordering and work with numbers, strings, and mixed types.",
      },
    ],
  },
  {
    heading: "Type Coercion in Comparisons",
    paragraphs: [
      "Loose equality converts operands to the same type before comparison.",
      "Primitives are converted to numbers when possible (except strings).",
      "Objects are converted to primitives via toString() or valueOf().",
      "null and undefined are loosely equal to each other but nothing else.",
      "Understanding coercion rules is essential for debugging comparison issues.",
    ],
    examples: [
      {
        title: "Type Coercion Edge Cases",
        code: `// Empty string coercion
console.log(0 == "");         // true (both become 0)
console.log(0 === "");        // false (different types)

// Boolean coercion
console.log(false == 0);      // true
console.log(false == "");     // true
console.log(false == []);     // true (empty array becomes 0)
console.log(true == 1);       // true

// null and undefined
console.log(null == undefined); // true (special case)
console.log(null === undefined); // false
console.log(null == 0);       // false
console.log(undefined == 0);  // false

// Array coercion in comparisons
console.log([1, 2] == "1,2"); // true (array toString() = "1,2")
console.log([5] == 5);        // true ([5].toString() = "5", then "5" == 5)
console.log([] == 0);         // true (empty array coerces to 0)

// Object coercion
console.log({} == "[object Object]"); // true (object toString())

// Safe type comparison
function safeEquals(a, b) {
  // First check strict equality
  if (a === b) return true;
  
  // Handle special cases
  if (typeof a !== typeof b) return false;
  
  // NaN special case
  if (typeof a === 'number' && Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  
  return false;
}`,
        explanation: "Type coercion in loose equality can produce surprising results. Understanding these rules helps debug issues.",
      },
    ],
  },
  {
    heading: "NaN and Special Values",
    paragraphs: [
      "NaN (Not a Number) is not equal to anything, including itself.",
      "Use Number.isNaN() or isNaN() to check for NaN values.",
      "Infinity comparisons work as expected mathematically.",
      "-0 and +0 are strictly equal but have different meanings in some operations.",
      "Special handling required for floating-point comparisons due to precision issues.",
    ],
    examples: [
      {
        title: "NaN, Infinity, and Special Cases",
        code: `// NaN comparisons
console.log(NaN == NaN);      // false
console.log(NaN === NaN);     // false
console.log(Number.isNaN(NaN)); // true (correct way)

// Checking for NaN
function safeDivide(a, b) {
  const result = a / b;
  if (Number.isNaN(result)) {
    return "Invalid calculation";
  }
  return result;
}

console.log(safeDivide(10, 0));     // Infinity
console.log(safeDivide(0, 0));      // "Invalid calculation" (NaN)

// Infinity comparisons
console.log(Infinity > 1000);       // true
console.log(-Infinity < -1000);     // true
console.log(Infinity === Infinity); // true

// Zero comparisons
console.log(0 === -0);              // true
console.log(Object.is(0, -0));      // false (distinguishes -0 and +0)

// Floating point precision
console.log(0.1 + 0.2 === 0.3);    // false
console.log(0.1 + 0.2);             // 0.30000000000000004

// Safe floating point comparison
function floatEqual(a, b, epsilon = Number.EPSILON) {
  return Math.abs(a - b) < epsilon;
}

console.log(floatEqual(0.1 + 0.2, 0.3)); // true`,
        explanation: "NaN and special values require careful handling. Use Number.isNaN() and epsilon-based comparisons.",
      },
    ],
  },
  {
    heading: "Object and Reference Comparison",
    paragraphs: [
      "Objects are compared by reference, not by value.",
      "Two different objects are never equal, even if they have identical properties.",
      "Array comparison compares references, not contents.",
      "Use JSON.stringify() or deep comparison libraries for value-based comparison.",
      "Primitive wrappers (new String(), new Number()) behave like objects in comparisons.",
    ],
    examples: [
      {
        title: "Reference vs Value Comparison",
        code: `// Object comparison (by reference)
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(obj1 === obj2);    // false (different objects)
console.log(obj1 === obj3);    // true (same reference)
console.log(obj1 == obj2);     // false (still different references)

// Array comparison
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2);    // false (different array objects)
console.log(arr1 == arr2);     // false

// Deep comparison helper
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || b == null) return false;
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  
  return false;
}

console.log(deepEqual(arr1, arr2));        // true
console.log(deepEqual({ a: 1 }, { a: 1 })); // true`,
        explanation: "Objects and arrays are compared by reference. Use deep comparison for value-based equality.",
      },
    ],
  },
  {
    heading: "Practical Applications and Best Practices",
    paragraphs: [
      "Use strict equality (===) as the default for most comparisons.",
      "Be explicit about type conversions before comparisons.",
      "Use Number.EPSILON for floating-point comparisons.",
      "Handle NaN cases explicitly with Number.isNaN().",
      "Validate input types before performing comparisons.",
      "For user-facing comparisons, consider locale awareness.",
      "Test edge cases in comparison logic thoroughly.",
    ],
  },
];

const mistakes = [
  {
    title: "Using loose equality everywhere",
    fix: "Prefer strict equality (===) for predictable comparisons. Use loose equality (==) only when type coercion is intentional.",
  },
  {
    title: "Comparing floating-point numbers directly",
    fix: "Use Number.EPSILON or percentage-based comparisons for floating-point equality checks.",
  },
  {
    title: "Expecting object comparison by value",
    fix: "Objects compare by reference. Use deep comparison or JSON.stringify() for value-based comparison.",
  },
  {
    title: "Not handling NaN in comparisons",
    fix: "Use Number.isNaN() to check for NaN values. Remember NaN !== NaN.",
  },
  {
    title: "Case-sensitive string comparisons for user input",
    fix: "Use toLowerCase() or localeCompare() for case-insensitive user-facing comparisons.",
  },
  {
    title: "Ignoring type coercion in mixed-type comparisons",
    fix: "Explicitly convert types before comparison to avoid unexpected coercion behavior.",
  },
  {
    title: "Not validating input types before comparison",
    fix: "Add type checks before comparisons to prevent runtime errors and unexpected behavior.",
  },
  {
    title: "Assuming all comparisons follow mathematical logic",
    fix: "Remember that string comparisons are lexicographic, not numeric. Always test comparison behavior.",
  },
];

const faqs = [
  {
    q: "Should I always use === instead of ==?",
    a: "Yes, strict equality (===) is safer and more predictable. Loose equality (==) should only be used when type coercion is specifically intended.",
  },
  {
    q: "Why does NaN == NaN return false?",
    a: "NaN represents 'Not a Number' and is defined to never be equal to itself. Use Number.isNaN() to check for NaN.",
  },
  {
    q: "How do I compare floating-point numbers?",
    a: "Use Number.EPSILON for small differences or percentage-based comparisons. Direct === often fails due to precision errors.",
  },
  {
    q: "Why are objects compared by reference?",
    a: "Objects are complex structures. Reference comparison is faster and more predictable than deep value comparison.",
  },
  {
    q: "What's the difference between == null and === null?",
    a: "== null checks for both null and undefined, while === null checks for null exactly. Use == null for nullish checks.",
  },
  {
    q: "How do I do case-insensitive string comparison?",
    a: "Use toLowerCase() and toUpperCase() or localeCompare() with options for locale-aware comparison.",
  },
  {
    q: "Why does [] == [] return false?",
    a: "Arrays are objects and compare by reference. Two different array objects are never equal, even with identical elements.",
  },
  {
    q: "Why does \"10\" > \"2\" return false?",
    a: "Strings compare lexicographically (dictionary order). The character '1' comes before '2', so \"10\" < \"2\".",
  },
  {
    q: "What's Object.is() and when should I use it?",
    a: "Object.is() is similar to === but treats NaN as equal to itself and distinguishes -0 from +0. Use it for edge cases.",
  },
  {
    q: "How should I compare dates?",
    a: "Convert dates to timestamps with getTime() or compare Date objects directly with strict equality.",
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

export default function JavascriptComparisonOperatorsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Comparison Operators: == vs ===, {"<, >, <=, >="}
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Comparison operators compare two values and return a boolean result. JavaScript provides both strict and loose equality operators, plus relational operators for ordering comparisons. Understanding the difference between strict and loose equality is crucial for writing reliable JavaScript code.
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
          Comparison operators are fundamental to conditional logic, sorting, validation, and decision-making in JavaScript. The distinction between strict and loose equality prevents subtle bugs from type coercion. Incorrect comparisons can lead to unexpected behavior in conditionals, loops, and data processing.
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
