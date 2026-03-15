import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

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
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Operators: Complete Guide",
    description:
      "Master all JavaScript operators: arithmetic, assignment, comparison, logical, bitwise, ternary, nullish coalescing, optional chaining, and operator precedence.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/operators" },
};

const sections = [
  {
    heading: "Everyday Calculations",
    paragraphs: [
      "Arithmetic operators power totals, averages, prices, and time math. You use them anytime you add, subtract, multiply, divide, or work with remainders.",
      "When expressions get longer, precedence decides the evaluation order. Parentheses keep intent obvious for you and your teammates.",
    ],
    bullets: [
      "Use `+` for numeric addition and string concatenation.",
      "Use `**` for powers and `%` for remainders.",
      "Wrap complex expressions in parentheses for clarity.",
    ],
  },
  {
    heading: "Decision Making",
    paragraphs: [
      "Comparison and logical operators are the foundation of conditionals. They help you answer questions like �Is this user logged in?� or �Is the value in range?�",
      "Combine them to create readable rules for UI states, validation, and branching logic.",
    ],
    bullets: [
      "Prefer strict equality `===` over `==` to avoid coercion surprises.",
      "Use `&&` for guards and `||` for fallbacks.",
      "Use `!` to invert a boolean condition.",
    ],
  },
  {
    heading: "Safer Defaults",
    paragraphs: [
      "Modern operators like nullish coalescing (`??`) and optional chaining (`?.`) prevent runtime errors and make defaults explicit.",
      "They shine when dealing with API responses or optional config values.",
    ],
    bullets: [
      "Use `??` to keep 0, false, and empty strings intact.",
      "Use `?.` to safely access nested data.",
      "Combine both for resilient data access in UIs.",
    ],
  },
  {
    heading: "Low-Level Control",
    paragraphs: [
      "Bitwise operators are less common but useful for flags, permissions, and performance-sensitive math.",
      "They work on 32-bit integers, so keep that in mind when mixing with large numbers.",
    ],
    bullets: [
      "Use `|` to combine flags and `&` to test them.",
      "Use shifts for quick powers-of-two operations.",
      "Avoid bitwise ops on floating-point data.",
    ],
  },
];

const examples = [
  {
    title: "Arithmetic + Assignment",
    code: `let total = 0;

total += 25; // add item price
const tax = total * 0.1;
const final = total + tax;

console.log(final);`,
    explanation: "Arithmetic and assignment operators handle running totals and derived values.",
  },
  {
    title: "Comparison + Logical",
    code: `const age = 21;
const hasId = true;

const canEnter = age >= 18 && hasId;
console.log(canEnter); // true`,
    explanation: "Combine comparison and logical operators to express clear rules.",
  },
  {
    title: "Nullish + Optional Chaining",
    code: `const user = { profile: { name: "Riya" } };

const name = user?.profile?.name ?? "Guest";
console.log(name);`,
    explanation: "Optional chaining prevents crashes and nullish coalescing provides safe defaults.",
  },
  {
    title: "Ternary Operator",
    code: `const score = 72;
const badge = score >= 70 ? "Pass" : "Retry";

console.log(badge);`,
    explanation: "The ternary operator gives compact, readable conditional values.",
  },
];

const mistakes = [
  {
    title: "Using loose equality everywhere",
    fix: "Stick to strict equality (`===`) unless you explicitly want coercion.",
  },
  {
    title: "Overwriting falsy values",
    fix: "Use `??` instead of `||` when 0 or empty strings are valid.",
  },
  {
    title: "Ignoring precedence",
    fix: "Use parentheses to make complex expressions unambiguous.",
  },
  {
    title: "Unsafe property access",
    fix: "Use optional chaining (`?.`) when values may be null or undefined.",
  },
  {
    title: "Misusing bitwise operators",
    fix: "Remember bitwise ops convert to 32-bit integers and can lose precision.",
  },
];

const faqs = [
  {
    q: "What is the difference between == and ===?",
    a: "`==` performs type coercion before comparing. `===` compares both value and type, so it is safer in most cases.",
  },
  {
    q: "When should I use ?? instead of ||?",
    a: "Use `??` when you only want to fallback for `null` or `undefined`, not for other falsy values like 0 or \"\".",
  },
  {
    q: "What does short-circuiting mean?",
    a: "Logical operators stop evaluating as soon as the result is known. This enables guard clauses and efficient defaults.",
  },
  {
    q: "Are bitwise operators still useful?",
    a: "Yes, especially for flags, permissions, and compact state storage, but they are less common in everyday UI code.",
  },
];

const related = [
  { label: "Arithmetic Operators", href: "/javascript/operators/arithmetic-operator" },
  { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Assignment Operators", href: "/javascript/operators/assignment-operator" },
  { label: "Bitwise Operators", href: "/javascript/operators/bitwise-operator" },
  { label: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
  { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
  { label: "Optional Chaining", href: "/javascript/operators/optional-chaining-operator" },
  { label: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
  { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
  { label: "Conditionals", href: "/javascript/conditionals" },
];

export default function JavascriptOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Operators: Complete Guide"
      intro={[
        "JavaScript operators are symbols that perform actions on values and variables, from simple math to advanced safe data access.",
        "If you understand operators well, you can write clearer logic, avoid subtle bugs, and express intent more directly in your code.",
      ]}
      why={[
        "Operators appear in almost every line of JavaScript. Confusing precedence, equality rules, or short-circuiting can lead to bugs that are hard to spot.",
        "Learning operators gives you reliable building blocks for calculations, decisions, defaults, and safe data access.",
      ]}
      syntax={[
        "// Arithmetic",
        "a + b, a - b, a * b, a / b, a % b, a ** b",
        "// Assignment",
        "x = y, x += y, x -= y, x *= y, x /= y",
        "// Comparison",
        "a === b, a !== b, a > b, a < b, a >= b, a <= b",
        "// Logical",
        "a && b, a || b, !a",
        "// Ternary",
        "condition ? valueIfTrue : valueIfFalse",
        "// Nullish / Optional",
        "value ?? fallback, obj?.prop, obj?.method?.()",
        "// Bitwise",
        "a & b, a | b, a ^ b, ~a, a << b, a >> b, a >>> b",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `// Without clear operators\nlet isAdult = false;\nif (age >= 18) {\n  isAdult = true;\n}\n\nlet label = "";\nif (user && user.profile && user.profile.name) {\n  label = user.profile.name;\n} else {\n  label = "Guest";\n}`,
        with: `// With modern operators\nconst isAdult = age >= 18;\nconst label = user?.profile?.name ?? "Guest";`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Why is strict equality preferred in JavaScript?", a: "It avoids implicit type coercion, making comparisons more predictable." },
        { q: "What is operator precedence?", a: "It defines the order in which operators are evaluated in an expression." },
        { q: "How does short-circuiting help performance?", a: "It skips unnecessary evaluation once the outcome is known." },
      ]}
      practice={{
        prompt: "Practice: Build a small scoring rule that uses arithmetic, comparison, and a ternary operator to return a grade label.",
        starterCode: `const score = 78;\n// TODO: return \"A\", \"B\", or \"C\"\n`,
        solution: `const score = 78;\nconst grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";\nconsole.log(grade);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Operator Demo",
        description: "Try the operator examples in our JavaScript compiler and tweak the values to see how outputs change.",
      }}
    />
  );
}
