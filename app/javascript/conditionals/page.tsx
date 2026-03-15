import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Conditionals: if, else, else if, switch",
  description:
    "Learn JavaScript conditionals with if, else, else if ladder, and switch statements using clear examples and best practices.",
  keywords: [
    "javascript conditionals",
    "if statement",
    "if else",
    "else if ladder",
    "switch statement",
  ],
  openGraph: {
    title: "JavaScript Conditionals",
    description:
      "Learn JavaScript conditionals with if, else, else if ladder, and switch statements using clear examples and best practices.",
    url: "/javascript/conditionals",
    type: "article",
    images: ["/og-conditionals.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Conditionals",
    description:
      "Learn JavaScript conditionals with if, else, else if ladder, and switch statements using clear examples and best practices.",
    images: ["/og-conditionals.svg"],
  },
  alternates: { canonical: "/javascript/conditionals" },
};

const sections = [
  {
    heading: "Making Decisions",
    paragraphs: [
      "Conditionals control which code runs based on a boolean expression. They are the core of business rules and UI states.",
      "Use if/else for flexible logic and switch when you have a single value with multiple discrete cases.",
    ],
    bullets: [
      "Use `if` for a single branch.",
      "Use `if...else` for two outcomes.",
      "Use `else if` ladders for multiple ranges.",
    ],
  },
  {
    heading: "Readable Rules",
    paragraphs: [
      "Readable conditions reduce bugs. Prefer small, named boolean variables over long, nested expressions.",
      "Parentheses can improve clarity when mixing logical operators.",
    ],
  },
  {
    heading: "Switch for Discrete Values",
    paragraphs: [
      "Switch statements are ideal for mapping a single value to many outcomes.",
      "Remember to use `break` to avoid fall-through unless that is your intent.",
    ],
  },
  {
    heading: "Truthy and Falsy",
    paragraphs: [
      "JavaScript treats some values as falsy: 0, \"\", null, undefined, NaN, and false.",
      "Be explicit when a value like 0 or an empty string is meaningful.",
    ],
  },
];

const examples = [
  {
    title: "Simple if",
    code: `const loggedIn = true;\n\nif (loggedIn) {\n  console.log("Welcome back");\n}`,
    explanation: "Run a block only when the condition is true.",
  },
  {
    title: "if...else",
    code: `const isMember = false;\n\nif (isMember) {\n  console.log("Member price");\n} else {\n  console.log("Standard price");\n}`,
    explanation: "Provide a fallback branch for the false case.",
  },
  {
    title: "else if ladder",
    code: `const score = 82;\n\nlet grade;\nif (score >= 90) {\n  grade = "A";\n} else if (score >= 80) {\n  grade = "B";\n} else if (score >= 70) {\n  grade = "C";\n} else {\n  grade = "D";\n}\n\nconsole.log(grade);`,
    explanation: "Use else-if ladders for ranges or tiers.",
  },
  {
    title: "switch statement",
    code: `const role = "admin";\n\nswitch (role) {\n  case "admin":\n    console.log("All access");\n    break;\n  case "editor":\n    console.log("Write access");\n    break;\n  default:\n    console.log("Read access");\n}`,
    explanation: "Switch maps a single value to multiple outcomes.",
  },
];

const mistakes = [
  { title: "Forgetting else branches", fix: "Add an else when you need a clear fallback path." },
  { title: "Overly complex conditions", fix: "Split into named boolean variables for readability." },
  { title: "Missing break in switch", fix: "Add break to avoid accidental fall-through." },
  { title: "Relying on truthy/falsy unintentionally", fix: "Use explicit comparisons when values like 0 or \"\" are valid." },
];

const faqs = [
  { q: "When should I use switch?", a: "Use switch when you compare a single value against many discrete cases." },
  { q: "What is an else-if ladder?", a: "A chain of if/else-if blocks for multiple conditions." },
  { q: "Do I always need else?", a: "No, only when you want a fallback action." },
  { q: "What are falsy values?", a: "0, \"\", null, undefined, NaN, and false are falsy in JavaScript." },
];

const related = [
  { label: "if Statement", href: "/javascript/conditionals/if-statement" },
  { label: "if...else", href: "/javascript/conditionals/if-else" },
  { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
  { label: "switch Statement", href: "/javascript/conditionals/switch-statement" },
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
];

export default function JavascriptConditionalsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Conditionals"
      intro={[
        "Conditionals let your program choose different paths based on a condition.",
        "They power decision making in forms, UI flows, validation, and business rules.",
      ]}
      why={[
        "Every real app needs branching logic. Without conditionals, code cannot respond to user input or data.",
        "Understanding conditionals keeps your logic predictable and easy to maintain.",
      ]}
      syntax={[
        "if (condition) { ... }",
        "if (condition) { ... } else { ... }",
        "if (a) { ... } else if (b) { ... } else { ... }",
        "switch (value) { case x: ...; break; default: ... }",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let label;\nif (status === "paid") {\n  label = "Paid";\n} else {\n  label = "Pending";\n}`,
        with: `const label = status === "paid" ? "Paid" : "Pending";`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the difference between if and switch?", a: "If is flexible for many conditions; switch compares one value against cases." },
        { q: "What is fall-through in switch?", a: "When a case runs into the next because break is missing." },
        { q: "Why avoid complex conditions?", a: "They reduce readability and are harder to debug." },
      ]}
      practice={{
        prompt: "Practice: Build a status label using if/else based on a payment status string.",
        starterCode: `const status = "processing";\n// TODO: print a label for paid, failed, or pending\n`,
        solution: `const status = "processing";\nlet label;\nif (status === "paid") {\n  label = "Paid";\n} else if (status === "failed") {\n  label = "Failed";\n} else {\n  label = "Pending";\n}\nconsole.log(label);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[2].code,
        label: "Run Conditionals Demo",
        description: "Try the conditional examples and change the inputs to see different branches.",
      }}
    />
  );
}
