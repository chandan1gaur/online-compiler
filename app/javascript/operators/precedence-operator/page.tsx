import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Operator Precedence Guide",
  description:
    "Understand JavaScript operator precedence and associativity with clear examples and common pitfalls.",
  keywords: [
    "javascript operator precedence",
    "operator order",
    "associativity",
    "precedence table",
  ],
  openGraph: {
    title: "JavaScript Operator Precedence",
    description: "Understand JavaScript operator precedence and associativity with clear examples and common pitfalls.",
    url: "/javascript/operators/precedence-operator",
    type: "article",
    images: ["/og-operators-precedence.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Operator Precedence",
    description: "Understand JavaScript operator precedence and associativity with clear examples and common pitfalls.",
    images: ["/og-operators-precedence.svg"],
  },
  alternates: { canonical: "/javascript/operators/precedence-operator" },
};

const sections = [
  {
    heading: "Why Precedence Matters",
    paragraphs: [
      "Operator precedence decides which parts of an expression run first. Misunderstanding it can flip results.",
      "When in doubt, parentheses make your intent explicit.",
    ],
  },
  {
    heading: "Associativity",
    paragraphs: [
      "Operators with the same precedence are evaluated based on associativity (left-to-right or right-to-left).",
      "For example, assignment is right-to-left, while addition is left-to-right.",
    ],
  },
  {
    heading: "Common Precedence Rules",
    paragraphs: [
      "Multiplication and division come before addition and subtraction.",
      "Logical AND (&&) runs before logical OR (||).",
      "Ternary has lower precedence than logical operators but higher than assignment.",
    ],
  },
  {
    heading: "Readable Expressions",
    paragraphs: [
      "Use parentheses to document intent, especially when mixing multiple operator types.",
      "Readable expressions reduce bugs and make code review easier.",
    ],
  },
];

const examples = [
  {
    title: "Arithmetic Precedence",
    code: `console.log(2 + 3 * 4);   // 14\nconsole.log((2 + 3) * 4); // 20`,
    explanation: "Multiplication happens before addition unless you use parentheses.",
  },
  {
    title: "Logical Precedence",
    code: `console.log(true || false && false);   // true\nconsole.log((true || false) && false); // false`,
    explanation: "&& runs before ||, so use parentheses when mixing them.",
  },
  {
    title: "Assignment Associativity",
    code: `let a, b, c;\na = b = c = 5;\nconsole.log(a, b, c); // 5 5 5`,
    explanation: "Assignment is right-associative, so it evaluates from right to left.",
  },
  {
    title: "Ternary with Other Operators",
    code: `const score = 70;\nconst label = score >= 60 && score <= 100 ? "Pass" : "Fail";\nconsole.log(label);`,
    explanation: "Use parentheses if the ternary condition gets complex.",
  },
];

const mistakes = [
  { title: "Assuming left-to-right always", fix: "Check associativity for operators like assignment and exponentiation." },
  { title: "Mixing && and || without parentheses", fix: "Parentheses make intent clear and prevent logic bugs." },
  { title: "Overlooking exponentiation", fix: "`**` has higher precedence and is right-associative." },
  { title: "Overly complex expressions", fix: "Break them into intermediate variables for readability." },
];

const faqs = [
  {
    q: "What is operator precedence?",
    a: "It defines the order in which operators are evaluated in an expression.",
  },
  {
    q: "What is associativity?",
    a: "It defines the direction of evaluation when operators have the same precedence.",
  },
  {
    q: "Should I memorize the precedence table?",
    a: "No. Know the common rules and use parentheses for clarity.",
  },
  {
    q: "Why does 2 ** 3 ** 2 equal 512?",
    a: "Exponentiation is right-associative, so it evaluates as 2 ** (3 ** 2).",
  },
];

const related = [
  { label: "Arithmetic Operators", href: "/javascript/operators/arithmetic-operator" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
  { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
];

export default function JavascriptOperatorPrecedencePage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Operator Precedence"
      intro={[
        "Operator precedence determines the order in which JavaScript evaluates expressions.",
        "Knowing the common rules and using parentheses prevents logic bugs and keeps code clear.",
      ]}
      why={[
        "Complex expressions can behave differently than you expect. A small precedence mistake can flip a condition or calculation.",
        "Parentheses make intent explicit and help teammates read your code quickly.",
      ]}
      syntax={[
        "// Use parentheses to control order",
        "(a + b) * c",
        "a && b || c",
        "a = b = c",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const result = 2 + 3 * 4; // 14`,
        with: `const result = (2 + 3) * 4; // 20`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is operator precedence?", a: "It is the order JavaScript uses to evaluate operators." },
        { q: "What is associativity?", a: "It is the direction of evaluation for operators of the same precedence." },
        { q: "How do you make precedence clear?", a: "Use parentheses or break expressions into variables." },
      ]}
      practice={{
        prompt: "Practice: Evaluate a mixed expression and then rewrite it with parentheses to make the order explicit.",
        starterCode: `const value = 5 + 2 * 3 > 10 || false && true;\n// TODO: rewrite with parentheses\n`,
        solution: `const value = (5 + (2 * 3) > 10) || (false && true);\nconsole.log(value);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Precedence Demo",
        description: "Run the precedence examples and add parentheses to see the difference.",
      }}
    />
  );
}
