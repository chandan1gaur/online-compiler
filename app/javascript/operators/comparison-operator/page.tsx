import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Comparison Operators: ==, ===, >, <, >=, <=",
  description:
    "Learn JavaScript comparison operators, including strict vs loose equality, relational operators, and best practices with examples.",
  keywords: [
    "javascript comparison operators",
    "strict equality",
    "loose equality",
    "relational operators",
    "=== vs ==",
    "!= vs !==",
  ],
  openGraph: {
    title: "JavaScript Comparison Operators",
    description:
      "Learn JavaScript comparison operators, including strict vs loose equality, relational operators, and best practices with examples.",
    url: "/javascript/operators/comparison-operator",
    type: "article",
    images: ["/og-operators-comparison.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Comparison Operators",
    description:
      "Learn JavaScript comparison operators, including strict vs loose equality, relational operators, and best practices with examples.",
    images: ["/og-operators-comparison.svg"],
  },
  alternates: { canonical: "/javascript/operators/comparison-operator" },
};

const sections = [
  {
    heading: "Equality vs Strict Equality",
    paragraphs: [
      "`==` allows type coercion, while `===` compares both value and type. Most codebases prefer strict equality to avoid surprises.",
      "Loose equality has edge cases like `0 == false` or `\"\" == false`, which can introduce subtle bugs.",
    ],
  },
  {
    heading: "Relational Comparisons",
    paragraphs: [
      "Relational operators like `>`, `<`, `>=`, and `<=` compare numeric values and also work with strings by lexicographic order.",
      "Be careful when comparing strings that look like numbers. Convert explicitly if needed.",
    ],
  },
  {
    heading: "Special Values",
    paragraphs: [
      "`NaN` is never equal to itself; use `Number.isNaN()` or `Object.is()` to check it.",
      "`null` and `undefined` are only loosely equal to each other; strict equality keeps them distinct.",
    ],
  },
  {
    heading: "Comparison in Collections",
    paragraphs: [
      "Comparisons appear in array filtering, sorting, and searching. Your comparisons determine what users see first.",
      "Use comparators that return consistent results to avoid unstable sorting behaviors.",
    ],
  },
];

const examples = [
  {
    title: "Strict vs Loose Equality",
    code: `console.log(5 == "5");   // true\nconsole.log(5 === "5");  // false\nconsole.log(0 == false);  // true\nconsole.log(0 === false); // false`,
    explanation: "Strict equality avoids type coercion and is safer for most comparisons.",
  },
  {
    title: "Relational Operators",
    code: `console.log(10 > 7);   // true\nconsole.log(10 <= 7);  // false\nconsole.log("b" > "a"); // true (lexicographic)`,
    explanation: "Relational operators compare numeric values and also work with strings.",
  },
  {
    title: "NaN and Object.is",
    code: `const value = NaN;\nconsole.log(value === NaN);         // false\nconsole.log(Number.isNaN(value)); // true\nconsole.log(Object.is(value, NaN)); // true`,
    explanation: "Use Number.isNaN or Object.is to safely compare NaN.",
  },
  {
    title: "Sorting with Comparisons",
    code: `const scores = [12, 4, 18, 6];\n\nscores.sort((a, b) => a - b);\nconsole.log(scores); // [4, 6, 12, 18]`,
    explanation: "Comparators rely on consistent comparison results for correct sorting.",
  },
];

const mistakes = [
  { title: "Using == by default", fix: "Prefer === to avoid coercion surprises." },
  { title: "Comparing NaN with ===", fix: "Use Number.isNaN or Object.is for NaN checks." },
  { title: "Sorting strings like numbers", fix: "Convert strings to numbers before comparison." },
  { title: "Assuming null and undefined are the same", fix: "Use strict equality to keep them distinct." },
];

const faqs = [
  {
    q: "What is the difference between == and ===?",
    a: "`==` coerces types before comparing; `===` compares both value and type.",
  },
  {
    q: "Why is NaN not equal to itself?",
    a: "NaN represents an invalid number, and by specification it is not equal to anything, including itself.",
  },
  {
    q: "Can I compare objects with ===?",
    a: "Yes, but it compares references. Two different objects with the same contents are not equal.",
  },
  {
    q: "How do string comparisons work?",
    a: "JavaScript compares strings lexicographically based on Unicode code points.",
  },
];

const related = [
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
  { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
  { label: "Data Types", href: "/javascript/variables/data-types" },
];

export default function JavascriptComparisonOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Comparison Operators"
      intro={[
        "Comparison operators help you decide if two values are equal, greater, or less than each other.",
        "They are the backbone of conditionals, filters, validation rules, and sorting logic.",
      ]}
      why={[
        "Small comparison mistakes can flip logic or let invalid data through. That is why strict equality and clear comparisons matter.",
        "Understanding how JavaScript compares values keeps your conditions predictable and safe.",
      ]}
      syntax={[
        "a == b   // loose equality",
        "a === b  // strict equality",
        "a != b   // loose inequality",
        "a !== b  // strict inequality",
        "a > b, a < b, a >= b, a <= b",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `console.log(0 == false);  // true\nconsole.log("" == false); // true`,
        with: `console.log(0 === false);  // false\nconsole.log("" === false); // false`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Why prefer strict equality?", a: "It avoids implicit type coercion and makes comparisons predictable." },
        { q: "How do you compare NaN?", a: "Use Number.isNaN or Object.is because NaN !== NaN." },
        { q: "How do you compare objects?", a: "Object equality compares references, not deep values." },
      ]}
      practice={{
        prompt: "Practice: Write a function that checks if a user is an adult and the score is in range using comparisons.",
        starterCode: `const age = 17;\nconst score = 92;\n// TODO: print true only if age >= 18 and score between 80 and 100\n`,
        solution: `const age = 17;\nconst score = 92;\nconst ok = age >= 18 && score >= 80 && score <= 100;\nconsole.log(ok);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Comparison Demo",
        description: "Try the comparisons in the compiler and see how == and === behave.",
      }}
    />
  );
}
