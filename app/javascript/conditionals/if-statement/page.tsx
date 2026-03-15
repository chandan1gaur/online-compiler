import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript if Statement: Syntax and Examples",
  description:
    "Learn the JavaScript if statement with syntax, examples, best practices, and common mistakes.",
  keywords: ["javascript if statement", "if syntax", "conditional"],
  openGraph: {
    title: "JavaScript if Statement",
    description: "Learn the JavaScript if statement with syntax, examples, best practices, and common mistakes.",
    url: "/javascript/conditionals/if-statement",
    type: "article",
    images: ["/og-if-statement.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript if Statement",
    description: "Learn the JavaScript if statement with syntax, examples, best practices, and common mistakes.",
    images: ["/og-if-statement.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/if-statement" },
};

const sections = [
  {
    heading: "Single-Branch Decisions",
    paragraphs: [
      "The if statement runs a block only when a condition is true.",
      "Use it for guard clauses, validation, and early returns.",
    ],
  },
  {
    heading: "Boolean Expressions",
    paragraphs: [
      "Any expression that evaluates to true or false can be used in an if condition.",
      "Prefer explicit comparisons for clarity.",
    ],
  },
  {
    heading: "Readable Guards",
    paragraphs: [
      "Keep if conditions short. Extract complex logic into named variables.",
      "This makes code easier to scan and review.",
    ],
  },
];

const examples = [
  {
    title: "Basic if",
    code: `const isOnline = true;\n\nif (isOnline) {\n  console.log("User is online");\n}`,
    explanation: "The block runs only when the condition is true.",
  },
  {
    title: "Guard Clause",
    code: `function submit(form) {\n  if (!form.isValid) return;\n  console.log("Submitting...");\n}`,
    explanation: "Guard clauses exit early when a condition fails.",
  },
  {
    title: "Range Check",
    code: `const age = 19;\n\nif (age >= 18) {\n  console.log("Adult");\n}`,
    explanation: "Use comparisons to check ranges.",
  },
  {
    title: "Combine Conditions",
    code: `const isMember = true;\nconst total = 120;\n\nif (isMember && total > 100) {\n  console.log("Apply discount");\n}`,
    explanation: "Logical operators combine multiple checks.",
  },
];

const mistakes = [
  { title: "Overly complex conditions", fix: "Extract logic into named booleans for readability." },
  { title: "Using assignment instead of comparison", fix: "Use === for comparisons, not =." },
  { title: "Relying on truthy/falsy accidentally", fix: "Use explicit comparisons when values can be 0 or empty strings." },
  { title: "Deep nesting", fix: "Use guard clauses or return early to keep nesting shallow." },
];

const faqs = [
  { q: "Can I put any expression in if?", a: "Yes, but it will be coerced to a boolean. Explicit comparisons are clearer." },
  { q: "What is a guard clause?", a: "An early return that exits when a condition fails." },
  { q: "Is if faster than switch?", a: "Performance differences are usually negligible. Choose for readability." },
];

const related = [
  { label: "if...else", href: "/javascript/conditionals/if-else" },
  { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
];

export default function JavascriptIfStatementPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript if Statement"
      intro={[
        "The if statement is the simplest way to execute code conditionally in JavaScript.",
        "It runs a block only when a condition evaluates to true.",
      ]}
      why={[
        "Most application logic starts with simple checks like if a user is logged in or if data is valid.",
        "Clear if statements make control flow easy to understand and maintain.",
      ]}
      syntax={["if (condition) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let label = "";\nif (isActive) {\n  label = "Active";\n}`,
        with: `const label = isActive ? "Active" : "";`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does an if statement do?", a: "It runs a block only when a condition is true." },
        { q: "Why use guard clauses?", a: "They reduce nesting and make code easier to read." },
        { q: "What is a truthy value?", a: "Any value that coerces to true in a boolean context." },
      ]}
      practice={{
        prompt: "Practice: Check if a cart total is above a free-shipping threshold and log a message.",
        starterCode: `const total = 65;\n// TODO: log "Free shipping" only if total >= 50\n`,
        solution: `const total = 65;\nif (total >= 50) {\n  console.log("Free shipping");\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run if Demo",
        description: "Try changing the condition to see when the if block executes.",
      }}
    />
  );
}
