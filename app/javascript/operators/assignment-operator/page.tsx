import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Assignment Operators: =, +=, -=, *=, /= and More",
  description:
    "Learn JavaScript assignment operators including =, +=, -=, *=, /=, %=, **=, &&=, ||=, ??= with practical examples and best practices.",
  keywords: [
    "javascript assignment operators",
    "assignment operator",
    "compound assignment",
    "logical assignment",
    "+= operator",
    "-= operator",
    "*= operator",
    "/= operator",
    "??= operator",
  ],
  openGraph: {
    title: "JavaScript Assignment Operators",
    description:
      "Learn JavaScript assignment operators including =, +=, -=, *=, /=, %=, **=, &&=, ||=, ??= with practical examples.",
    url: "/javascript/operators/assignment-operator",
    type: "article",
    images: ["/og-operators-assignment.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Assignment Operators",
    description:
      "Learn JavaScript assignment operators including =, +=, -=, *=, /=, %=, **=, &&=, ||=, ??= with practical examples.",
    images: ["/og-operators-assignment.svg"],
  },
  alternates: { canonical: "/javascript/operators/assignment-operator" },
};

const sections = [
  {
    heading: "Simple Assignment",
    paragraphs: [
      "The `=` operator assigns a value to a variable. It is the base for every other assignment operator.",
      "Assignments evaluate from right to left, so `a = b = 5` sets both values to 5.",
    ],
  },
  {
    heading: "Compound Assignment",
    paragraphs: [
      "Compound operators combine math with assignment, like `+=` or `*=`.",
      "They keep code concise and reduce repetition when updating counters, totals, and scores.",
    ],
  },
  {
    heading: "Logical Assignment",
    paragraphs: [
      "Logical assignment operators (`&&=`, `||=`, `??=`) update a variable only when a logical condition is met.",
      "They are great for default values and guard-style updates without extra if-statements.",
    ],
  },
  {
    heading: "Bitwise Assignment",
    paragraphs: [
      "Bitwise assignment operators (like `&=` or `<<=`) combine bitwise operations with assignment.",
      "These are mainly used for flags, permissions, and low-level optimizations.",
    ],
  },
];

const examples = [
  {
    title: "Basic and Compound Assignment",
    code: `let total = 10;\n\ntotal += 5; // 15\ntotal -= 3; // 12\ntotal *= 2; // 24\ntotal /= 4; // 6\n\nconsole.log(total);`,
    explanation: "Compound assignment keeps updates short and readable.",
  },
  {
    title: "Exponentiation and Modulo Assignment",
    code: `let value = 3;\nvalue **= 2; // 9\nvalue %= 5;  // 4\n\nconsole.log(value);`,
    explanation: "Use **= for powers and %= for cycling or wrapping values.",
  },
  {
    title: "Logical Assignment",
    code: `let name = "";\nname ||= "Guest"; // empty string is falsy, so set fallback\n\nlet score = 0;\nscore ||= 10; // score becomes 10 (because 0 is falsy)\n\nlet count = 0;\ncount ??= 5; // count stays 0 because it's not null/undefined\n\nconsole.log(name, score, count);`,
    explanation: "Use ||= and &&= for truthy/falsy checks, and ??= for nullish-only checks.",
  },
  {
    title: "Destructuring Assignment",
    code: `const user = { id: 7, role: "admin" };\nconst { id, role } = user;\n\nconsole.log(id, role);`,
    explanation: "Destructuring is a readable way to assign multiple variables at once.",
  },
];

const mistakes = [
  { title: "Using ||= when 0 is valid", fix: "Prefer ??= to preserve 0, false, and empty strings." },
  { title: "Overusing chained assignments", fix: "Chaining like a = b = c can reduce readability." },
  { title: "Mixing bitwise and numeric math", fix: "Bitwise ops convert values to 32-bit integers." },
  { title: "Forgetting right-to-left evaluation", fix: "Remember assignments evaluate from right to left." },
];

const faqs = [
  {
    q: "What is a compound assignment operator?",
    a: "It combines an operation with assignment, like `x += 2` instead of `x = x + 2`.",
  },
  {
    q: "When should I use ??= ?",
    a: "Use it when you only want to assign a default for null or undefined values.",
  },
  {
    q: "Do assignment operators return a value?",
    a: "Yes. The assignment expression evaluates to the assigned value.",
  },
  {
    q: "Is destructuring an assignment?",
    a: "Yes, destructuring assigns values to variables from arrays or objects.",
  },
];

const related = [
  { label: "Arithmetic Operators", href: "/javascript/operators/arithmetic-operator" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
  { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
];

export default function JavascriptAssignmentOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Assignment Operators"
      intro={[
        "Assignment operators set or update values stored in variables. They are used everywhere from counters to state updates.",
        "Beyond `=`, JavaScript offers compound and logical assignment operators to keep updates concise and intentional.",
      ]}
      why={[
        "Writing updates clearly prevents bugs and makes code easier to scan. Compound and logical assignments reduce repetition.",
        "Knowing the difference between ||= and ??= avoids accidentally overwriting valid values like 0 or empty strings.",
      ]}
      syntax={[
        "x = y",
        "x += y, x -= y, x *= y, x /= y, x %= y, x **= y",
        "x &&= y, x ||= y, x ??= y",
        "x &= y, x |= y, x ^= y, x <<= y, x >>= y, x >>>= y",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let total = 10;\ntotal = total + 5;\n\nlet name = "";\nif (!name) {\n  name = "Guest";\n}`,
        with: `let total = 10;\ntotal += 5;\n\nlet name = "";\nname ||= "Guest";`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the difference between ||= and ??=?", a: "||= assigns on any falsy value, while ??= assigns only for null or undefined." },
        { q: "Why use compound assignment?", a: "It makes updates shorter and easier to read." },
        { q: "Does assignment return a value?", a: "Yes, the assigned value, which enables chaining (though it can hurt clarity)." },
      ]}
      practice={{
        prompt: "Practice: Build a score tracker that updates total points using compound assignment.",
        starterCode: `let score = 0;\n// Add 10, subtract 3, then double\n`,
        solution: `let score = 0;\nscore += 10;\nscore -= 3;\nscore *= 2;\nconsole.log(score);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Assignment Demo",
        description: "Run the assignment examples and edit the values to see how each operator updates state.",
      }}
    />
  );
}
