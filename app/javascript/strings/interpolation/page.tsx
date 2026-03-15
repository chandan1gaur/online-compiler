import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript String Interpolation",
  description: "Learn string interpolation in JavaScript with template literals and examples.",
  keywords: ["string interpolation", "template literals", "javascript strings"],
  openGraph: {
    title: "JavaScript String Interpolation",
    description: "Learn string interpolation in JavaScript with template literals and examples.",
    url: "/javascript/strings/interpolation",
    type: "article",
    images: ["/og-interpolation.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript String Interpolation",
    description: "Learn string interpolation in JavaScript with template literals and examples.",
    images: ["/og-interpolation.svg"],
  },
  alternates: { canonical: "/javascript/strings/interpolation" },
};

const sections = [
  {
    heading: "Insert Values",
    paragraphs: [
      "String interpolation inserts variables or expressions into a string.",
      "In JavaScript, interpolation is done with template literals.",
    ],
  },
  {
    heading: "Cleaner Than Concatenation",
    paragraphs: [
      "Interpolation avoids + concatenation and keeps strings readable.",
      "It reduces bugs in long strings and UI templates.",
    ],
  },
  {
    heading: "Expressions Work Too",
    paragraphs: [
      "You can embed any expression inside ${}.",
      "This includes math, function calls, or ternaries.",
    ],
  },
];

const examples = [
  {
    title: "Basic interpolation",
    code: "const name = 'Ava';\nconst msg = `Hello ${name}`;\n\nconsole.log(msg);",
    explanation: "Insert a variable into a string.",
  },
  {
    title: "Expressions",
    code: "const price = 100;\nconst tax = 0.18;\nconst total = `Total: ${price + price * tax}`;\n\nconsole.log(total);",
    explanation: "Use expressions inside ${}.",
  },
  {
    title: "Conditional",
    code: "const isMember = true;\nconst label = `Price: ${isMember ? 'Member' : 'Standard'}`;\n\nconsole.log(label);",
    explanation: "Ternaries work inside interpolation.",
  },
  {
    title: "Function call",
    code: "function format(n) { return n.toFixed(2); }\nconst value = `Amount: ${format(12.3)}`;\n\nconsole.log(value);",
    explanation: "Call functions inside templates.",
  },
];

const mistakes = [
  { title: "Using quotes instead of backticks", fix: "Interpolation only works with backticks." },
  { title: "Forgetting ${}", fix: "Use ${expression}, not {expression}." },
  { title: "Overcomplicated templates", fix: "Move complex logic into variables or functions." },
];

const faqs = [
  { q: "How do you interpolate in JavaScript?", a: "Use template literals with ${} expressions." },
  { q: "Can I use expressions?", a: "Yes, any valid expression works." },
  { q: "Is interpolation faster than concatenation?", a: "Performance is similar; choose readability." },
];

const related = [
  { label: "Template Literals", href: "/javascript/strings/template-literals" },
  { label: "String Methods", href: "/javascript/strings" },
  { label: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
];

export default function JavascriptStringInterpolationPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript String Interpolation"
      intro={[
        "String interpolation inserts values directly into a string using ${}.",
        "It is cleaner than concatenation for complex strings.",
      ]}
      why={[
        "UI strings often combine text and data. Interpolation keeps them readable.",
        "It reduces mistakes compared to multiple + operators.",
      ]}
      syntax={["`Hello ${name}`", "`Total: ${price + tax}`"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const msg = "Hello " + name + "!";`,
        with: "const msg = `Hello ${name}!`;",
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What syntax enables interpolation?", a: "Template literals with backticks." },
        { q: "Can you use expressions inside?", a: "Yes, any expression inside ${}." },
        { q: "What if you need complex logic?", a: "Move it into a variable or function first." },
      ]}
      practice={{
        prompt: "Practice: Build a message that shows username and item count.",
        starterCode: "const user = 'Ava';\nconst count = 3;\n// TODO: create message\n",
        solution: "const user = 'Ava';\nconst count = 3;\nconst msg = `User ${user} has ${count} items`;\nconsole.log(msg);",
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Interpolation Demo",
        description: "Try different expressions inside ${}.",
      }}
    />
  );
}
