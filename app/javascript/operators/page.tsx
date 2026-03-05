import type { Metadata } from "next";
import Link from "next/link";
import OperatorsCodeExample from "@/components/OperatorsCodeExample";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Operators: Complete Guide to Arithmetic, Comparison, Logical & More",
  description:
    "Master all JavaScript operators: arithmetic, assignment, comparison, logical, bitwise, ternary, nullish coalescing, optional chaining, and operator precedence with practical examples.",
  keywords: [
    "javascript operators",
    "arithmetic operators",
    "comparison operators",
    "logical operators",
    "assignment operators",
    "bitwise operators",
    "ternary operator",
    "nullish coalescing",
    "optional chaining",
    "operator precedence",
    "javascript tutorial",
  ],
  openGraph: {
    title: "JavaScript Operators: Complete Guide",
    description:
      "Master all JavaScript operators: arithmetic, assignment, comparison, logical, bitwise, ternary, nullish coalescing, optional chaining, and operator precedence.",
    url: "/javascript/operators",
    type: "article",
    images: ["/og-operators.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Operators: Complete Guide",
    description:
      "Master all JavaScript operators: arithmetic, assignment, comparison, logical, bitwise, ternary, nullish coalescing, optional chaining, and operator precedence.",
    images: ["/og-operators.svg"],
  },
  alternates: { canonical: "/javascript/operators" },
};


export default function JavascriptOperatorsPage() {
  const faqs = [
    {
      q: "Should I ever use loose equality (==) in JavaScript?",
      a: "Very rarely. Loose equality can be useful when you intentionally want type coercion, but strict equality (===) is safer and clearer in most cases.",
    },
    {
      q: "What's the difference between prefix and postfix increment?",
      a: "Prefix (++x) increments then returns the new value. Postfix (x++) returns the old value then increments.",
    },
    {
      q: "When should I use nullish coalescing (??) instead of logical OR (||)?",
      a: "Use ?? when you want to provide defaults only for null/undefined, but preserve other falsy values like 0, false, or empty strings.",
    },
    {
      q: "Is the ternary operator faster than if-else?",
      a: "Performance difference is negligible. Choose based on readability - ternary for simple expressions, if-else for complex logic.",
    },
    {
      q: "What is short-circuit evaluation?",
      a: "Logical operators stop evaluating as soon as the result is determined. For &&, if left operand is falsy, right isn't evaluated. For ||, if left is truthy, right isn't evaluated.",
    },
    {
      q: "How does operator precedence work?",
      a: "Operators have a precedence hierarchy. Higher precedence operators are evaluated first. Use parentheses to override or clarify precedence.",
    },
    {
      q: "When should I use optional chaining?",
      a: "Use ? when accessing properties on objects that might be null or undefined, to prevent TypeError exceptions.",
    },
    {
      q: "Are bitwise operators useful in modern JavaScript?",
      a: "Yes, for low-level operations, flags, permissions, and performance-critical code. Less common in typical application development.",
    },
    {
      q: "How does type coercion work with operators?",
      a: "JavaScript automatically converts types in certain contexts: strings in arithmetic become numbers, values in logical operations become booleans, etc.",
    },
    {
      q: "What's the most important operator to understand?",
      a: "Strict equality (===) - it prevents many subtle bugs from type coercion that loose equality (==) allows.",
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

  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript Operators: Complete Guide</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          JavaScript operators are symbols that perform operations on values and variables. They form the foundation of all programming logic, from basic arithmetic to complex conditional expressions. Understanding operators is crucial for writing clean, efficient, and bug-free code.
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
          Operators are used in nearly every line of JavaScript code. Misunderstanding operator precedence, type coercion, or the difference between loose and strict equality can lead to subtle bugs that are hard to debug. Mastering operators ensures you write predictable, maintainable code.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Arithmetic Operators</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Arithmetic operators perform mathematical calculations on numeric values. JavaScript supports all standard arithmetic operations plus some unique ones.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Addition (+):</strong> Adds two numbers or concatenates strings.<br />
            <strong>Subtraction (-):</strong> Subtracts right operand from left.<br />
            <strong>Multiplication (*):</strong> Multiplies two numbers.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Division (/):</strong> Divides left operand by right operand.<br />
            <strong>Modulo (%):</strong> Returns remainder of division.<br />
            <strong>Exponentiation (**):</strong> Raises left operand to power of right operand.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Increment (++):</strong> Increases value by 1.<br />
            <strong>Decrement (--):</strong> Decreases value by 1. Both have prefix and postfix forms with different behaviors.
          </p>
          <CodeExample
            title="Arithmetic Operators"
            code={`// Basic arithmetic
console.log(5 + 3);    // 8 (addition)
console.log(10 - 4);   // 6 (subtraction)
console.log(3 * 7);    // 21 (multiplication)
console.log(15 / 3);   // 5 (division)
console.log(17 % 5);   // 2 (modulo - remainder)
console.log(2 ** 3);   // 8 (exponentiation)

// Increment/Decrement
let x = 5;
console.log(x++);     // 5 (postfix: return then increment)
console.log(x);       // 6
console.log(++x);     // 7 (prefix: increment then return)
console.log(--x);     // 6 (decrement)`}
            explanation="Arithmetic operators perform mathematical operations on numbers."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Assignment Operators</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Assignment operators assign values to variables. The basic assignment operator is =, but there are compound assignment operators that combine arithmetic with assignment.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Simple assignment (=):</strong> Assigns right operand value to left operand.<br />
            <strong>Addition assignment (+=):</strong> Adds and assigns.<br />
            <strong>Subtraction assignment (-=):</strong> Subtracts and assigns.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Multiplication assignment (*=):</strong> Multiplies and assigns.<br />
            <strong>Division assignment (/=):</strong> Divides and assigns.<br />
            <strong>Modulo assignment (%=):</strong> Takes modulo and assigns.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Exponentiation assignment (**=):</strong> Raises to power and assigns. These compound operators are syntactic sugar for common patterns.
          </p>
          <CodeExample
            title="Assignment Operators"
            code={`let x = 10;

// Compound assignment operators
x += 5;    // x = x + 5;  x is now 15
x -= 3;    // x = x - 3;  x is now 12
x *= 2;    // x = x * 2;  x is now 24
x /= 4;    // x = x / 4;  x is now 6
x %= 5;    // x = x % 5;  x is now 1
x **= 3;   // x = x ** 3; x is now 1

console.log(x); // 1`}
            explanation="Compound assignment operators combine arithmetic and assignment in one step."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Comparison Operators</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Comparison operators compare two values and return a boolean result. They are essential for conditional logic and control flow.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Equal (==):</strong> Loose equality with type coercion.<br />
            <strong>Strict equal (===):</strong> Strict equality without type coercion.<br />
            <strong>Not equal (!=):</strong> Loose inequality.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Strict not equal (!==):</strong> Strict inequality.<br />
            <strong>Greater than (&gt;):</strong> Left operand greater than right.<br />
            <strong>Less than (&lt;):</strong> Left operand less than right.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Greater than or equal (&gt;=):</strong> Left operand greater than or equal to right.<br />
            <strong>Less than or equal (&lt;=):</strong> Left operand less than or equal to right.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Always prefer strict equality (===) over loose equality (==) to avoid unexpected type coercion bugs.
          </p>
          <CodeExample
            title="Comparison Operators"
            code={`// Strict vs Loose Equality
console.log(5 == "5");    // true  (loose equality with coercion)
console.log(5 === "5");   // false (strict equality, no coercion)
console.log(0 == false);  // true  (coercion)
console.log(0 === false); // false (strict)

// Other comparisons
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 4);      // false
console.log(5 !== "5");   // true  (strict inequality)`}
            explanation="Comparison operators return boolean values. Always prefer strict equality."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Logical Operators</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Logical operators perform logical operations on boolean values. They are crucial for combining conditions and creating complex boolean expressions.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Logical AND (&&):</strong> Returns true if both operands are truthy. Uses short-circuit evaluation.<br />
            <strong>Logical OR (||):</strong> Returns true if either operand is truthy.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Logical NOT (!):</strong> Inverts the boolean value of its operand. These operators have short-circuit behavior that can be used for default values and guard clauses.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Understanding truthy/falsy values is essential when working with logical operators, as they don't always operate on strict booleans.
          </p>
          <CodeExample
            title="Logical Operators"
            code={`// Logical AND (&&) - short-circuit
console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false

// Short-circuit evaluation
let result = false && expensiveOperation(); // expensiveOperation not called
console.log(result); // false

// Logical OR (||) - short-circuit
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false

// Logical NOT (!)
console.log(!true);            // false
console.log(!false);           // true
console.log(!!"hello");        // true (double negation for boolean conversion)`}
            explanation="Logical operators work with boolean values and use short-circuit evaluation."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Bitwise Operators</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Bitwise operators perform operations on binary representations of numbers. They work at the bit level and are less commonly used but powerful for certain tasks.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Bitwise AND (&):</strong> Performs AND operation on each bit.<br />
            <strong>Bitwise OR (|):</strong> Performs OR operation on each bit.<br />
            <strong>Bitwise XOR (^):</strong> Performs XOR operation.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Bitwise NOT (~):</strong> Flips all bits.<br />
            <strong>Left shift (&lt;&lt;):</strong> Shifts bits left by specified positions.<br />
            <strong>Right shift (&gt;&gt;):</strong> Shifts bits right (sign-preserving).
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Unsigned right shift (&gt;&gt;&gt;):</strong> Shifts bits right (zero-fill). These operators are useful for low-level operations, flags, and performance-critical code.
          </p>
          <CodeExample
            title="Bitwise Operators"
            code={`// Bitwise AND
console.log(5 & 3);     // 1 (0101 & 0011 = 0001)

// Bitwise OR
console.log(5 | 3);     // 7 (0101 | 0011 = 0111)

// Bitwise XOR
console.log(5 ^ 3);     // 6 (0101 ^ 0011 = 0110)

// Bitwise NOT
console.log(~5);        // -6 (flips all bits)

// Left shift
console.log(5 << 1);    // 10 (shift left by 1: 1010)

// Right shift (sign-preserving)
console.log(-8 >> 1);   // -4

// Unsigned right shift
console.log(-8 >>> 1);  // 2147483644 (zero-fill)`}
            explanation="Bitwise operators work on binary representations of numbers."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Ternary Operator</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            The ternary operator is JavaScript's only conditional operator. It provides a compact way to write simple if-else statements in a single expression.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Syntax:</strong> condition ? expressionIfTrue : expressionIfFalse. The condition is evaluated first. If truthy, expressionIfTrue is executed; otherwise, expressionIfFalse.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Can be nested but nesting reduces readability. Often used for simple conditional assignments and return values.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Parentheses can improve readability in complex expressions. Avoid overusing in favor of if-else for complex logic.
          </p>
          <CodeExample
            title="Ternary Operator"
            code={`// Basic ternary
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// Nested ternary (use sparingly)
const score = 85;
const grade = score >= 90 ? "A" :
              score >= 80 ? "B" :
              score >= 70 ? "C" : "F";
console.log(grade); // "B"

// In function return
function getStatus(isLoggedIn, isAdmin) {
  return isLoggedIn ? (isAdmin ? "Admin" : "User") : "Guest";
}

console.log(getStatus(true, false)); // "User"`}
            explanation="Ternary operator provides compact conditional expressions."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Nullish Coalescing Operator</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            The nullish coalescing operator (??) provides a way to handle null or undefined values while preserving other falsy values like 0, false, or empty strings.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Syntax:</strong> leftOperand ?? rightOperand. Returns leftOperand if it's not null or undefined, otherwise returns rightOperand.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Different from logical OR (||) which treats all falsy values (0, false, '', NaN, null, undefined) as equivalent.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Perfect for providing default values when you want to distinguish between null/undefined and other falsy values.
          </p>
          <CodeExample
            title="Nullish Coalescing (??)"
            code={`// Nullish coalescing vs OR
const count = 0;
console.log(count || 10);  // 10 (OR treats 0 as falsy)
console.log(count ?? 10);  // 0 (?? only treats null/undefined as nullish)

const name = "";
console.log(name || "Anonymous");  // "Anonymous" (empty string is falsy)
console.log(name ?? "Anonymous");  // "" (empty string is not nullish)

// Practical usage
function getUserDisplayName(user) {
  return user?.name ?? "Anonymous";
}

console.log(getUserDisplayName({}));           // "Anonymous"
console.log(getUserDisplayName({name: ""}));   // "" (preserves empty string)
console.log(getUserDisplayName({name: "John"})); // "John"`}
            explanation="Nullish coalescing preserves falsy values except null and undefined."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Optional Chaining Operator</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            The optional chaining operator (?.) allows safe access to nested object properties without throwing errors if intermediate properties are null or undefined.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            <strong>Syntax:</strong> object?.property or object?.method(). Can be chained: object?.property?.nestedProperty.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Returns undefined if any part of the chain is null or undefined, instead of throwing a TypeError.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Works with function calls, array access, and property access. Essential for working with potentially incomplete data structures.
          </p>
          <CodeExample
            title="Optional Chaining (?.)"
            code={`const user = {
  profile: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};

// Without optional chaining (risky)
console.log(user.profile.address.city); // "New York"
// console.log(user.profile.contacts.phone); // TypeError!

// With optional chaining (safe)
console.log(user?.profile?.address?.city);     // "New York"
console.log(user?.profile?.contacts?.phone);   // undefined

// Works with function calls
const result = user?.getName?.(); // undefined (method doesn't exist)

// Works with arrays
const arr = [1, 2, 3];
console.log(arr?.[0]);     // 1
console.log(arr?.[10]);    // undefined`}
            explanation="Optional chaining prevents errors when accessing properties on potentially null/undefined objects."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Operator Precedence</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Operator precedence determines the order in which operators are evaluated in an expression. Higher precedence operators are evaluated first.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Grouping with parentheses () overrides precedence. Multiplication/division have higher precedence than addition/subtraction.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Logical AND (&&) has higher precedence than logical OR (||). Assignment operators have very low precedence.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Understanding precedence prevents bugs in complex expressions. When in doubt, use parentheses for clarity.
          </p>
          <CodeExample
            title="Operator Precedence"
            code={`// Precedence examples
console.log(2 + 3 * 4);     // 14 (multiplication before addition)
console.log((2 + 3) * 4);   // 20 (parentheses override precedence)

// Logical operator precedence
console.log(true || false && false);   // true (&& has higher precedence)
console.log((true || false) && false); // false (parentheses change precedence)

// Assignment has low precedence
let x = 5;
let y = 10;
x = y += 2; // y += 2 is evaluated first, then x = y
console.log(x, y); // 12, 12`}
            explanation="Operator precedence determines evaluation order. Use parentheses for clarity."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Type Coercion with Operators</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            JavaScript performs automatic type conversion in certain operations, especially with loose equality and arithmetic operators.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            String concatenation with + converts numbers to strings. Loose equality (==) coerces types before comparison.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Arithmetic operators convert operands to numbers. Logical operators convert operands to booleans for evaluation.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Understanding coercion rules helps predict operator behavior and avoid unexpected results.
          </p>
          <CodeExample
            title="Type Coercion Gotchas"
            code={`// String concatenation vs addition
console.log(5 + 3);       // 8 (addition)
console.log(5 + "3");     // "53" (string concatenation)
console.log("5" + 3);     // "53" (string concatenation)

// Loose equality coercion
console.log(0 == false);  // true (both coerce to falsy)
console.log("" == false); // true (both coerce to falsy)
console.log(null == undefined); // true (special case)

// Arithmetic coercion
console.log("5" - 3);     // 2 (string "5" converts to number)
console.log("5" * 2);     // 10 (string converts to number)
console.log("a" * 2);     // NaN (invalid number conversion)

// Logical coercion
console.log(0 && "hello");    // 0 (0 is falsy)
console.log(1 && "hello");    // "hello" (1 is truthy)
console.log(0 || "default");  // "default" (0 is falsy)`}
            explanation="JavaScript automatically converts types in certain operations, which can lead to unexpected results."
          />
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Best Practices</h2>
          <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Use strict equality (===) by default,</strong> loose equality (==) only when type coercion is intentional.</p>
            <p><strong>Parenthesize complex expressions</strong> to make precedence explicit and avoid bugs.</p>
            <p><strong>Use nullish coalescing (??)</strong> when you want to preserve falsy values like 0 or empty strings.</p>
            <p><strong>Leverage optional chaining (?.)</strong> for safe property access in uncertain data structures.</p>
            <p><strong>Avoid overusing ternary operators;</strong> prefer if-else for complex conditional logic.</p>
            <p><strong>Understand short-circuit evaluation</strong> for efficient default value patterns.</p>
          </div>
        </article>
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes and Fixes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Using loose equality everywhere",
              fix: "Prefer strict equality (===) to avoid type coercion bugs.",
            },
            {
              title: "Confusing || and ?? operators",
              fix: "Use ?? when you want to preserve falsy values like 0 or empty strings.",
            },
            {
              title: "Overusing nested ternary operators",
              fix: "Refactor complex ternary chains to if-else statements for readability.",
            },
            {
              title: "Ignoring operator precedence",
              fix: "Use parentheses to make complex expressions explicit and avoid bugs.",
            },
            {
              title: "Not understanding short-circuit evaluation",
              fix: "Leverage short-circuit behavior for default values and guard clauses.",
            },
            {
              title: "Unsafe property access on uncertain objects",
              fix: "Use optional chaining (?.) for safe property access.",
            },
            {
              title: "Not handling type coercion in arithmetic",
              fix: "Explicitly convert types when mixing strings and numbers in operations.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950/70">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related JavaScript Topics</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: "Arithmetic Operators", href: "/javascript/operators/arithmetic-operator" },
            { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
            { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
            { label: "Assignment Operators", href: "/javascript/operators/assignment-operator" },
            { label: "Bitwise Operators", href: "/javascript/operators/bitwise-operator" },
            { label: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
            { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
            { label: "Optional Chaining", href: "/javascript/operators/optional-chaining-operator" },
            { label: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
            { label: "Data Types", href: "/javascript/variables/data-types" },
            { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
            { label: "Conditionals", href: "/javascript/conditionals" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
