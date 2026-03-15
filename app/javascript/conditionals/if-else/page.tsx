import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript if...else Statement: Syntax and Examples",
  description:
    "Learn JavaScript if...else with syntax, practical examples, comparisons, and common mistakes.",
  keywords: ["javascript if else", "conditional branches", "if else syntax"],
  openGraph: {
    title: "JavaScript if...else Statement",
    description: "Learn JavaScript if...else with syntax, practical examples, comparisons, and common mistakes.",
    url: "/javascript/conditionals/if-else",
    type: "article",
    images: ["/og-if-else.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript if...else Statement",
    description: "Learn JavaScript if...else with syntax, practical examples, comparisons, and common mistakes.",
    images: ["/og-if-else.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/if-else" },
};

const sections = [
  {
    heading: "Two Outcomes",
    paragraphs: [
      "if...else lets you define both the true branch and the false branch.",
      "This is the most common pattern for binary decisions.",
    ],
  },
  {
    heading: "User Flow",
    paragraphs: [
      "Use if...else for login states, toggles, and empty vs populated UI states.",
      "It keeps your logic explicit and predictable.",
    ],
  },
  {
    heading: "Keep Branches Small",
    paragraphs: [
      "Large if/else blocks are hard to test. Extract logic into functions when needed.",
      "Small branches are easier to read and maintain.",
    ],
  },
];

const examples = [
  {
    title: "Basic if...else",
    code: `const isMember = true;\n\nif (isMember) {\n  console.log("Member price");\n} else {\n  console.log("Standard price");\n}`,
    explanation: "Two branches for two outcomes.",
  },
  {
    title: "UI State",
    code: `const items = [];\n\nif (items.length > 0) {\n  console.log("Show list");\n} else {\n  console.log("Show empty state");\n}`,
    explanation: "if...else is common for UI rendering decisions.",
  },
  {
    title: "Permissions",
    code: `const role = "editor";\n\nif (role === "admin") {\n  console.log("All access");\n} else {\n  console.log("Limited access");\n}`,
    explanation: "Handle a yes/no permission check.",
  },
  {
    title: "Boolean Coercion",
    code: `const name = "";\n\nif (name) {\n  console.log("Hello", name);\n} else {\n  console.log("Hello, guest");\n}`,
    explanation: "Empty strings are falsy, so be explicit if needed.",
  },
];

const mistakes = [
  { title: "Using else when you should return early", fix: "Consider guard clauses to reduce nesting." },
  { title: "Mixing many conditions", fix: "Use else if ladder or switch for multiple branches." },
  { title: "Relying on falsy values unintentionally", fix: "Check for empty strings or zero explicitly if needed." },
  { title: "Large branches", fix: "Extract repeated logic into helper functions." },
];

const faqs = [
  { q: "When should I use if...else?", a: "Use it for two mutually exclusive outcomes." },
  { q: "Is if...else better than ternary?", a: "Use ternary for simple expressions and if...else for larger blocks." },
  { q: "Can if...else be nested?", a: "Yes, but deep nesting hurts readability." },
];

const related = [
  { label: "if Statement", href: "/javascript/conditionals/if-statement" },
  { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
  { label: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
];

export default function JavascriptIfElsePage() {
  return (
    <JsTutorialTemplate
      title="JavaScript if...else Statement"
      intro={[
        "The if...else statement provides two clear paths: one for true and one for false.",
        "It is the most common conditional structure in day-to-day JavaScript.",
      ]}
      why={[
        "Most decisions are binary: success or failure, logged in or logged out.",
        "if...else keeps both outcomes explicit, making logic easier to maintain.",
      ]}
      syntax={["if (condition) { ... } else { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let message;\nif (isLoggedIn) {\n  message = "Welcome";\n} else {\n  message = "Please sign in";\n}`,
        with: `const message = isLoggedIn ? "Welcome" : "Please sign in";`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does if...else do?", a: "It selects between two branches based on a condition." },
        { q: "When should you avoid nested if...else?", a: "When it reduces readability; prefer guard clauses or switch." },
        { q: "Is else mandatory?", a: "No, use it only when you need a fallback branch." },
      ]}
      practice={{
        prompt: "Practice: Show a free-shipping message if total is over 100, otherwise show the shipping fee.",
        starterCode: `const total = 75;\n// TODO: log the correct message\n`,
        solution: `const total = 75;\nif (total > 100) {\n  console.log("Free shipping");\n} else {\n  console.log("Shipping fee applies");\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run if...else Demo",
        description: "Modify the condition to see which branch runs.",
      }}
    />
  );
}
