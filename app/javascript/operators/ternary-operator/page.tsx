import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Ternary Operator: condition ? value1 : value2",
  description:
    "Learn the JavaScript ternary operator with syntax, examples, best practices, and common mistakes.",
  keywords: [
    "javascript ternary operator",
    "conditional operator",
    "? : operator",
    "inline if",
  ],
  openGraph: {
    title: "JavaScript Ternary Operator",
    description: "Learn the JavaScript ternary operator with syntax, examples, best practices, and common mistakes.",
    url: "/javascript/operators/ternary-operator",
    type: "article",
    images: ["/og-operators-ternary.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Ternary Operator",
    description: "Learn the JavaScript ternary operator with syntax, examples, best practices, and common mistakes.",
    images: ["/og-operators-ternary.svg"],
  },
  alternates: { canonical: "/javascript/operators/ternary-operator" },
};

const sections = [
  {
    heading: "Compact Decisions",
    paragraphs: [
      "The ternary operator is JavaScript's only conditional operator. It lets you choose between two values in a single expression.",
      "Use it for simple decisions like labels, classes, or small value selections.",
    ],
  },
  {
    heading: "Readability First",
    paragraphs: [
      "Ternaries are great when they stay short. Once they become nested or multi-line, an if/else is clearer.",
      "Use parentheses to improve readability for complex expressions.",
    ],
  },
  {
    heading: "Common UI Patterns",
    paragraphs: [
      "Ternaries shine in UI code: badge labels, status colors, and empty states.",
      "They also work well in return statements for simple branching.",
    ],
  },
  {
    heading: "Avoid Overuse",
    paragraphs: [
      "Nested ternaries are hard to read and debug. Consider a switch or if/else for complex logic.",
      "If you need more than two outcomes, a mapping object can be cleaner.",
    ],
  },
];

const examples = [
  {
    title: "Basic Ternary",
    code: `const age = 20;\nconst canVote = age >= 18 ? "Yes" : "No";\n\nconsole.log(canVote);`,
    explanation: "A ternary returns one of two values based on a condition.",
  },
  {
    title: "Inline UI Label",
    code: `const status = "paid";\nconst badge = status === "paid" ? "Success" : "Pending";\n\nconsole.log(badge);`,
    explanation: "Ternary operators are common for UI labels and CSS class names.",
  },
  {
    title: "Return Statement",
    code: `function getPrice(isMember) {\n  return isMember ? 9.99 : 14.99;\n}\n\nconsole.log(getPrice(true));`,
    explanation: "Ternaries keep simple returns concise.",
  },
  {
    title: "Nested Ternary (Use Sparingly)",
    code: `const score = 82;\nconst grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";\n\nconsole.log(grade);`,
    explanation: "Nested ternaries work, but readability can suffer if you go too far.",
  },
];

const mistakes = [
  { title: "Nesting too deeply", fix: "Switch to if/else or a lookup object for more than two branches." },
  { title: "Using ternary for side effects", fix: "Ternaries should return values, not replace statements." },
  { title: "Ignoring parentheses", fix: "Add parentheses when combining ternaries with other operators." },
  { title: "Long expressions", fix: "Keep ternaries short and split logic into variables if needed." },
];

const faqs = [
  {
    q: "Is the ternary operator faster than if/else?",
    a: "Performance differences are negligible. Choose based on readability.",
  },
  {
    q: "Can I nest ternary operators?",
    a: "Yes, but it can hurt readability. Use sparingly.",
  },
  {
    q: "Can a ternary return JSX?",
    a: "Yes, it's common in React to render one of two components or strings.",
  },
  {
    q: "When should I avoid ternaries?",
    a: "Avoid them for complex logic or more than two outcomes.",
  },
];

const related = [
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
  { label: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
  { label: "Conditionals", href: "/javascript/conditionals" },
];

export default function JavascriptTernaryOperatorPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Ternary Operator"
      intro={[
        "The ternary operator is a compact way to write a simple if/else in one expression.",
        "It is perfect for small decisions like labels, status text, and inline returns.",
      ]}
      why={[
        "Ternaries keep code concise, but can become unreadable if overused.",
        "Knowing when to use them (and when not to) helps keep your codebase clear.",
      ]}
      syntax={["condition ? valueIfTrue : valueIfFalse"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let label;\nif (score >= 70) {\n  label = "Pass";\n} else {\n  label = "Retry";\n}`,
        with: `const label = score >= 70 ? "Pass" : "Retry";`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the ternary operator?", a: "A compact conditional operator that returns one of two values based on a condition." },
        { q: "When should you avoid ternary?", a: "When logic is complex or nested, use if/else for clarity." },
        { q: "Can ternary return expressions?", a: "Yes, it returns an expression and can be used inline.", },
      ]}
      practice={{
        prompt: "Practice: Use a ternary operator to choose a shipping label based on total amount.",
        starterCode: `const total = 75;\n// TODO: if total >= 100 return \"Free Shipping\" else \"Paid Shipping\"\n`,
        solution: `const total = 75;\nconst label = total >= 100 ? "Free Shipping" : "Paid Shipping";\nconsole.log(label);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Ternary Demo",
        description: "Try the ternary examples and adjust the inputs to see both branches.",
      }}
    />
  );
}
