import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

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
    heading: "Everyday Calculations",
    paragraphs: [
      "Arithmetic operators power totals, averages, discounts, and time calculations. You use them for almost any numeric work in JavaScript.",
      "The same operators also work with floating-point numbers, so be mindful of precision in money or measurement logic.",
    ],
    bullets: ["Use `+` for addition and `-` for subtraction.", "Use `*` and `/` for multiplication and division.", "Use `%` for remainders in cycles or indexing."],
  },
  {
    heading: "Exponentiation",
    paragraphs: [
      "The `**` operator makes power calculations clear and readable. It is right-associative, so `2 ** 3 ** 2` means `2 ** (3 ** 2)`.",
      "For roots, use fractional exponents like `16 ** 0.5` for square roots.",
    ],
  },
  {
    heading: "Increment and Decrement",
    paragraphs: [
      "`++` and `--` update a variable by one. Prefix changes first, postfix changes after the expression returns.",
      "These operators are handy in loops but can hurt readability in complex expressions.",
    ],
  },
  {
    heading: "Floating Point Pitfalls",
    paragraphs: [
      "JavaScript uses IEEE 754 floating-point numbers. That means `0.1 + 0.2` is not exactly `0.3`.",
      "When precision matters, compare using a tolerance (like `Number.EPSILON`) or work with integers (cents instead of dollars).",
    ],
  },
];

const examples = [
  {
    title: "Basic Arithmetic",
    code: `console.log(5 + 3);   // 8\nconsole.log(10 - 4);  // 6\nconsole.log(3 * 7);   // 21\nconsole.log(15 / 3);  // 5\nconsole.log(17 % 5);  // 2`,
    explanation: "Addition, subtraction, multiplication, division, and modulo are the core arithmetic tools.",
  },
  {
    title: "Exponentiation",
    code: `console.log(2 ** 3);      // 8\nconsole.log(16 ** 0.5);   // 4 (square root)\nconsole.log(2 ** 3 ** 2); // 512 (right-associative)`,
    explanation: "Use `**` for powers and fractional exponents for roots.",
  },
  {
    title: "Increment vs Decrement",
    code: `let x = 5;\nconsole.log(x++); // 5 (postfix)\nconsole.log(x);   // 6\nconsole.log(++x); // 7 (prefix)\nconsole.log(--x); // 6`,
    explanation: "Prefix changes the value first, postfix returns first and then changes it.",
  },
  {
    title: "Precision Check",
    code: `const sum = 0.1 + 0.2;\nconsole.log(sum); // 0.30000000000000004\n\nconst closeEnough = Math.abs(sum - 0.3) < Number.EPSILON;\nconsole.log(closeEnough); // true`,
    explanation: "Floating-point arithmetic can be imprecise, so compare with a tolerance.",
  },
];

const mistakes = [
  { title: "Treating 0.1 + 0.2 as exact", fix: "Use a tolerance for comparisons or work with integers for money." },
  { title: "Mixing strings and numbers", fix: "Convert explicitly with Number() to avoid accidental concatenation." },
  { title: "Confusing prefix and postfix", fix: "Avoid ++/-- in complex expressions for readability." },
  { title: "Division by zero assumptions", fix: "JavaScript returns Infinity, so guard before dividing." },
];

const faqs = [
  {
    q: "Why does 0.1 + 0.2 not equal 0.3?",
    a: "Floating-point numbers cannot represent some decimals exactly. Use a tolerance or integer math for precision-sensitive work.",
  },
  {
    q: "Is ** the same as Math.pow?",
    a: "Yes. `a ** b` is equivalent to `Math.pow(a, b)` but more readable.",
  },
  {
    q: "What does % do in JavaScript?",
    a: "It returns the remainder after division, useful for cycles, parity checks, and wrapping indexes.",
  },
  {
    q: "Should I avoid ++ and --?",
    a: "They are fine in loops, but can reduce clarity in complex expressions.",
  },
];

const related = [
  { label: "Assignment Operators", href: "/javascript/operators/assignment-operator" },
  { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
  { label: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
  { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
  { label: "Data Types", href: "/javascript/variables/data-types" },
];

export default function JavascriptArithmeticOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Arithmetic Operators"
      intro={[
        "Arithmetic operators handle the math in JavaScript: addition, subtraction, multiplication, division, modulo, and exponentiation.",
        "They are essential for anything from totals in a cart to time calculations and animation math.",
      ]}
      why={[
        "Nearly every real program performs math. If you misunderstand arithmetic operators, you can create subtle logic and precision bugs.",
        "Knowing how these operators behave with strings, floats, and edge cases keeps calculations reliable.",
      ]}
      syntax={[
        "a + b   // addition",
        "a - b   // subtraction",
        "a * b   // multiplication",
        "a / b   // division",
        "a % b   // remainder",
        "a ** b  // exponentiation",
        "a++     // increment (postfix)",
        "++a     // increment (prefix)",
        "a--     // decrement (postfix)",
        "--a     // decrement (prefix)",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `// Without compound operators\nlet total = 10;\ntotal = total + 5;\n\n// Using Math.pow\nconst squared = Math.pow(4, 2);`,
        with: `// With arithmetic operators\nlet total = 10;\ntotal += 5;\n\nconst squared = 4 ** 2;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does the modulo operator do?", a: "It returns the remainder after division, often used for cycles or parity." },
        { q: "Why is 0.1 + 0.2 imprecise?", a: "Binary floating-point cannot exactly represent some decimals." },
        { q: "What is the difference between prefix and postfix increment?", a: "Prefix increments before returning the value; postfix returns first, then increments." },
      ]}
      practice={{
        prompt: "Practice: Calculate a discounted price and tax. Use arithmetic operators and print the final amount.",
        starterCode: `const price = 120;\nconst discount = 0.2;\nconst taxRate = 0.18;\n// TODO: compute final amount\n`,
        solution: `const price = 120;\nconst discount = 0.2;\nconst taxRate = 0.18;\nconst afterDiscount = price - price * discount;\nconst final = afterDiscount + afterDiscount * taxRate;\nconsole.log(final);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Arithmetic Demo",
        description: "Run the arithmetic examples and change the values to see how each operator behaves.",
      }}
    />
  );
}
