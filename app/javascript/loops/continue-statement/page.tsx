import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript continue Statement: Skip to Next Iteration",
  description: "Learn the JavaScript continue statement with examples and best practices.",
  keywords: ["javascript continue", "continue statement", "skip iteration"],
  openGraph: {
    title: "JavaScript continue Statement",
    description: "Learn the JavaScript continue statement with examples and best practices.",
    url: "/javascript/loops/continue-statement",
    type: "article",
    images: ["/og-continue.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript continue Statement",
    description: "Learn the JavaScript continue statement with examples and best practices.",
    images: ["/og-continue.svg"],
  },
  alternates: { canonical: "/javascript/loops/continue-statement" },
};

const sections = [
  {
    heading: "Skip an Iteration",
    paragraphs: [
      "continue skips the rest of the current loop iteration and moves to the next one.",
      "It is useful for filtering values without deeply nested conditions.",
    ],
  },
  {
    heading: "Filtering Patterns",
    paragraphs: [
      "continue makes it easy to ignore certain items while looping.",
      "It keeps the main logic flatter and easier to read.",
    ],
  },
  {
    heading: "Combine with Guards",
    paragraphs: [
      "Use continue alongside guard checks to avoid nested if blocks.",
      "Be careful to still update counters to avoid infinite loops.",
    ],
  },
];

const examples = [
  {
    title: "Skip an item",
    code: `for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}`,
    explanation: "The value 2 is skipped.",
  },
  {
    title: "Filter odd numbers",
    code: `const nums = [1, 2, 3, 4, 5];\n\nfor (const n of nums) {\n  if (n % 2 !== 0) continue;\n  console.log(n);\n}`,
    explanation: "continue skips all odd numbers.",
  },
  {
    title: "Guard in while",
    code: `let i = 0;\n\nwhile (i < 5) {\n  i++;\n  if (i === 3) continue;\n  console.log(i);\n}`,
    explanation: "Remember to update the counter before continuing.",
  },
  {
    title: "Skip empty values",
    code: `const items = ["a", "", "b"];\n\nfor (const item of items) {\n  if (!item) continue;\n  console.log(item);\n}`,
    explanation: "Skip empty strings with a continue guard.",
  },
];

const mistakes = [
  { title: "Forgetting to update counters", fix: "Make sure the loop state still changes before continue." },
  { title: "Overusing continue", fix: "Use clear conditions; too many continues can be confusing." },
  { title: "Skipping needed work", fix: "Ensure skipped iterations do not miss required side effects." },
];

const faqs = [
  { q: "What does continue do?", a: "It skips the rest of the current iteration and moves to the next one." },
  { q: "How is continue different from break?", a: "Break exits the loop entirely; continue only skips one iteration." },
  { q: "Can I use continue in while loops?", a: "Yes, but make sure the loop state still changes." },
];

const related = [
  { label: "break Statement", href: "/javascript/loops/break-statement" },
  { label: "for Loop", href: "/javascript/loops/for-loop" },
  { label: "while Loop", href: "/javascript/loops/while-loop" },
];

export default function JavascriptContinueStatementPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript continue Statement"
      intro={[
        "The continue statement skips the current iteration and jumps to the next one.",
        "It helps filter items without deep nesting.",
      ]}
      why={[
        "Filtering values is common when processing arrays or streams.",
        "continue keeps the loop body clean and focused on valid items.",
      ]}
      syntax={["continue;"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `for (const n of nums) {\n  if (n % 2 === 0) {\n    console.log(n);\n  }\n}`,
        with: `for (const n of nums) {\n  if (n % 2 !== 0) continue;\n  console.log(n);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does continue do?", a: "It skips the rest of the current loop iteration." },
        { q: "When is continue useful?", a: "When filtering items without nested if blocks." },
        { q: "How do you avoid infinite loops?", a: "Update counters before continue in while loops." },
      ]}
      practice={{
        prompt: "Practice: Print only the positive numbers from an array using continue.",
        starterCode: `const nums = [-1, 2, 0, 3, -5];\n// TODO: print only positives\n`,
        solution: `const nums = [-1, 2, 0, 3, -5];\nfor (const n of nums) {\n  if (n <= 0) continue;\n  console.log(n);\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run continue Demo",
        description: "Try skipping different values and see how the output changes.",
      }}
    />
  );
}
