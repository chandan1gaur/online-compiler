import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript switch Statement: Syntax and Examples",
  description:
    "Learn JavaScript switch statements with syntax, examples, fall-through behavior, and best practices.",
  keywords: ["javascript switch", "switch statement", "case", "default"],
  openGraph: {
    title: "JavaScript switch Statement",
    description: "Learn JavaScript switch statements with syntax, examples, fall-through behavior, and best practices.",
    url: "/javascript/conditionals/switch-statement",
    type: "article",
    images: ["/og-switch.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript switch Statement",
    description: "Learn JavaScript switch statements with syntax, examples, fall-through behavior, and best practices.",
    images: ["/og-switch.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/switch-statement" },
};

const sections = [
  {
    heading: "Discrete Choices",
    paragraphs: [
      "Use switch when you compare one value against many fixed cases.",
      "It can be cleaner than a long else-if ladder when all checks are equality checks.",
    ],
  },
  {
    heading: "Fall-Through",
    paragraphs: [
      "If you omit `break`, execution continues into the next case. This is called fall-through.",
      "Sometimes it is useful, but it is a common source of bugs.",
    ],
  },
  {
    heading: "Default Case",
    paragraphs: [
      "The default block runs when no case matches.",
      "Always include a default to handle unexpected values.",
    ],
  },
];

const examples = [
  {
    title: "Basic switch",
    code: `const role = "editor";\n\nswitch (role) {\n  case "admin":\n    console.log("All access");\n    break;\n  case "editor":\n    console.log("Write access");\n    break;\n  default:\n    console.log("Read access");\n}`,
    explanation: "Switch matches the value to one of the cases.",
  },
  {
    title: "Grouped Cases",
    code: `const day = "sat";\n\nswitch (day) {\n  case "sat":\n  case "sun":\n    console.log("Weekend");\n    break;\n  default:\n    console.log("Weekday");\n}`,
    explanation: "Group cases when they share the same behavior.",
  },
  {
    title: "Number Cases",
    code: `const status = 404;\n\nswitch (status) {\n  case 200:\n    console.log("OK");\n    break;\n  case 404:\n    console.log("Not Found");\n    break;\n  default:\n    console.log("Unknown");\n}`,
    explanation: "Switch works with numbers, strings, and more.",
  },
  {
    title: "Fall-Through Example",
    code: `const size = "M";\nlet price = 0;\n\nswitch (size) {\n  case "L":\n    price += 2;\n  case "M":\n    price += 1;\n  case "S":\n    price += 0;\n    break;\n  default:\n    price = -1;\n}\n\nconsole.log(price);`,
    explanation: "Without breaks, cases fall through. Use carefully.",
  },
];

const mistakes = [
  { title: "Missing break", fix: "Add break to avoid unexpected fall-through." },
  { title: "No default case", fix: "Always include default for unexpected values." },
  { title: "Using switch for complex conditions", fix: "Switch is best for equality checks on one value." },
  { title: "Forgetting strict comparison", fix: "Switch uses strict equality (===), so types must match." },
];

const faqs = [
  { q: "Does switch use strict equality?", a: "Yes, switch compares using ===." },
  { q: "Can I use expressions in case?", a: "Yes, but they are matched against the switch value." },
  { q: "Is fall-through always bad?", a: "No, it can be useful for grouped cases, but use it intentionally." },
];

const related = [
  { label: "Conditionals Overview", href: "/javascript/conditionals" },
  { label: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
  { label: "Break Statement", href: "/javascript/loops/break-statement" },
];

export default function JavascriptSwitchStatementPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript switch Statement"
      intro={[
        "The switch statement is a clean way to choose between many fixed outcomes.",
        "It compares a single value against multiple cases and runs the first match.",
      ]}
      why={[
        "Long else-if chains can be hard to read when every branch checks the same variable.",
        "Switch keeps that pattern compact and easy to scan.",
      ]}
      syntax={["switch (value) { case x: ...; break; default: ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `if (role === "admin") {\n  console.log("All access");\n} else if (role === "editor") {\n  console.log("Write access");\n} else {\n  console.log("Read access");\n}`,
        with: `switch (role) {\n  case "admin":\n    console.log("All access");\n    break;\n  case "editor":\n    console.log("Write access");\n    break;\n  default:\n    console.log("Read access");\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does switch compare with?", a: "It uses strict equality (===) against each case." },
        { q: "What is fall-through?", a: "When one case continues into the next because break is missing." },
        { q: "When is switch a good choice?", a: "When comparing one value to many fixed cases." },
      ]}
      practice={{
        prompt: "Practice: Use switch to map a plan name to a monthly price.",
        starterCode: `const plan = "pro";\n// TODO: log price for basic, pro, or enterprise\n`,
        solution: `const plan = "pro";\nswitch (plan) {\n  case "basic":\n    console.log(10);\n    break;\n  case "pro":\n    console.log(25);\n    break;\n  case "enterprise":\n    console.log(50);\n    break;\n  default:\n    console.log(0);\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run switch Demo",
        description: "Try different values to see how switch selects a case.",
      }}
    />
  );
}
