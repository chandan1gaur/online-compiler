import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript break Statement: Exit Loops Early",
  description: "Learn the JavaScript break statement with examples for loops and switch statements.",
  keywords: ["javascript break", "break statement", "exit loop"],
  openGraph: {
    title: "JavaScript break Statement",
    description: "Learn the JavaScript break statement with examples for loops and switch statements.",
    url: "/javascript/loops/break-statement",
    type: "article",
    images: ["/og-break.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript break Statement",
    description: "Learn the JavaScript break statement with examples for loops and switch statements.",
    images: ["/og-break.svg"],
  },
  alternates: { canonical: "/javascript/loops/break-statement" },
};

const sections = [
  {
    heading: "Exit Early",
    paragraphs: [
      "The break statement stops a loop or switch immediately.",
      "Use it when you have found what you need and want to exit early.",
    ],
  },
  {
    heading: "Search Patterns",
    paragraphs: [
      "break is common in search loops to stop after a match is found.",
      "It prevents unnecessary work and keeps code efficient.",
    ],
  },
  {
    heading: "Switch Cases",
    paragraphs: [
      "In switch statements, break prevents fall-through to the next case.",
      "Most cases should end with break.",
    ],
  },
];

const examples = [
  {
    title: "Break in a loop",
    code: `for (let i = 0; i < 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}`,
    explanation: "Stops the loop once i reaches 3.",
  },
  {
    title: "Break in search",
    code: `const items = [5, 7, 9, 12];\nlet found = false;\n\nfor (const item of items) {\n  if (item === 9) {\n    found = true;\n    break;\n  }\n}\n\nconsole.log(found);`,
    explanation: "Exit as soon as the item is found.",
  },
  {
    title: "Break in switch",
    code: `const role = "admin";\n\nswitch (role) {\n  case "admin":\n    console.log("All access");\n    break;\n  default:\n    console.log("Read access");\n}`,
    explanation: "Prevents fall-through in switch statements.",
  },
  {
    title: "Nested loops",
    code: `let foundPair = false;\nfor (let i = 0; i < 3 && !foundPair; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i + j === 4) {\n      foundPair = true;\n      break;\n    }\n  }\n}\nconsole.log(foundPair);`,
    explanation: "Break only exits the inner loop. Use flags for outer loops.",
  },
];

const mistakes = [
  { title: "Breaking the wrong loop", fix: "Remember break only exits the nearest loop or switch." },
  { title: "Using break instead of return", fix: "If you want to exit a function, return is clearer." },
  { title: "Missing break in switch", fix: "Add break to avoid accidental fall-through." },
];

const faqs = [
  { q: "Does break work outside loops?", a: "No, it only works inside loops and switch statements." },
  { q: "How do I break an outer loop?", a: "Use a flag or labeled break (rarely used)." },
  { q: "Is break the same as return?", a: "No, return exits the function; break exits the loop or switch." },
];

const related = [
  { label: "continue Statement", href: "/javascript/loops/continue-statement" },
  { label: "switch Statement", href: "/javascript/conditionals/switch-statement" },
  { label: "Nested Loops", href: "/javascript/loops/nested-loops" },
];

export default function JavascriptBreakStatementPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript break Statement"
      intro={[
        "The break statement stops a loop or switch immediately.",
        "It is useful for early exits when a condition is met.",
      ]}
      why={[
        "Without break, loops always run to completion even when the result is already known.",
        "Using break correctly saves time and improves clarity.",
      ]}
      syntax={["break;"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    i = 5;\n  }\n}`,
        with: `for (let i = 0; i < 5; i++) {\n  if (i === 3) break;\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does break do?", a: "It exits the nearest loop or switch immediately." },
        { q: "How do you break out of nested loops?", a: "Use a flag or a labeled break." },
        { q: "When should you use break?", a: "When you have already found the result and want to stop looping." },
      ]}
      practice={{
        prompt: "Practice: Stop a loop once you find the first even number in an array.",
        starterCode: `const nums = [1, 3, 5, 8, 10];\n// TODO: find first even and stop\n`,
        solution: `const nums = [1, 3, 5, 8, 10];\nlet firstEven;\nfor (const n of nums) {\n  if (n % 2 === 0) {\n    firstEven = n;\n    break;\n  }\n}\nconsole.log(firstEven);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run break Demo",
        description: "Try changing the break condition to see when the loop stops.",
      }}
    />
  );
}
