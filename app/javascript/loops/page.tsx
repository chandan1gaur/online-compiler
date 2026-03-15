import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Loops: for, while, do...while, for...of, for...in",
  description:
    "Learn JavaScript loops with for, while, do...while, for...of, for...in, plus break and continue statements.",
  keywords: [
    "javascript loops",
    "for loop",
    "while loop",
    "do while loop",
    "for of",
    "for in",
  ],
  openGraph: {
    title: "JavaScript Loops",
    description:
      "Learn JavaScript loops with for, while, do...while, for...of, for...in, plus break and continue statements.",
    url: "/javascript/loops",
    type: "article",
    images: ["/og-loops.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Loops",
    description:
      "Learn JavaScript loops with for, while, do...while, for...of, for...in, plus break and continue statements.",
    images: ["/og-loops.svg"],
  },
  alternates: { canonical: "/javascript/loops" },
};

const sections = [
  {
    heading: "Repeat Work Safely",
    paragraphs: [
      "Loops execute a block multiple times. They are essential for processing arrays, retries, and repeated tasks.",
      "Always ensure loops have clear exit conditions to avoid infinite loops.",
    ],
    bullets: [
      "Use `for` when you know the number of iterations.",
      "Use `while` when you loop until a condition changes.",
      "Use `do...while` when the body must run at least once.",
    ],
  },
  {
    heading: "Iterating Collections",
    paragraphs: [
      "Use `for...of` for values in arrays, strings, and iterables.",
      "Use `for...in` for object keys, but be careful with inherited properties.",
    ],
  },
  {
    heading: "Control Flow",
    paragraphs: [
      "`break` exits a loop early, and `continue` skips to the next iteration.",
      "These give you fine-grained control without extra flags.",
    ],
  },
];

const examples = [
  {
    title: "for loop",
    code: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`,
    explanation: "A for loop is perfect when you know the count.",
  },
  {
    title: "while loop",
    code: `let attempts = 0;\n\nwhile (attempts < 3) {\n  attempts++;\n}\n\nconsole.log(attempts);`,
    explanation: "while loops run as long as the condition is true.",
  },
  {
    title: "for...of",
    code: `const items = ["a", "b", "c"];\n\nfor (const item of items) {\n  console.log(item);\n}`,
    explanation: "for...of iterates over values.",
  },
  {
    title: "break and continue",
    code: `for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  if (i === 4) break;\n  console.log(i);\n}`,
    explanation: "Use continue to skip, break to exit.",
  },
];

const mistakes = [
  { title: "Infinite loop", fix: "Ensure the loop condition can become false." },
  { title: "Off-by-one errors", fix: "Check boundaries carefully (use < vs <= intentionally)." },
  { title: "Using for...in on arrays", fix: "Prefer for...of or array methods for values." },
  { title: "Mutating arrays while looping", fix: "Be cautious when changing the collection during iteration." },
];

const faqs = [
  { q: "Which loop should I use?", a: "Use for when you know the count, while when the stop condition is dynamic." },
  { q: "What is the difference between for...in and for...of?", a: "for...in iterates keys; for...of iterates values." },
  { q: "When should I use break?", a: "When you want to exit early after finding what you need." },
];

const related = [
  { label: "for Loop", href: "/javascript/loops/for-loop" },
  { label: "while Loop", href: "/javascript/loops/while-loop" },
  { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
  { label: "for...of Loop", href: "/javascript/loops/for-of-loop" },
  { label: "break Statement", href: "/javascript/loops/break-statement" },
];

export default function JavascriptLoopsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Loops"
      intro={[
        "Loops let you repeat tasks efficiently, from iterating arrays to retrying network calls.",
        "Choosing the right loop keeps code clear and avoids bugs like infinite loops.",
      ]}
      why={[
        "Most data comes in lists. Loops are how you process each item without duplicating code.",
        "Understanding loop types and controls helps you write fast, reliable logic.",
      ]}
      syntax={[
        "for (init; condition; step) { ... }",
        "while (condition) { ... }",
        "do { ... } while (condition)",
        "for (const value of iterable) { ... }",
        "for (const key in object) { ... }",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let i = 0;\nconsole.log(i);\ni++;\nconsole.log(i);\ni++;`,
        with: `for (let i = 0; i < 2; i++) {\n  console.log(i);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is an infinite loop?", a: "A loop that never ends because its condition never becomes false." },
        { q: "for...of vs for...in?", a: "for...of iterates values, for...in iterates keys." },
        { q: "When to use do...while?", a: "When the loop body must run at least once." },
      ]}
      practice={{
        prompt: "Practice: Loop through an array of prices and sum the total.",
        starterCode: `const prices = [10, 25, 5];\n// TODO: sum prices\n`,
        solution: `const prices = [10, 25, 5];\nlet total = 0;\nfor (const price of prices) {\n  total += price;\n}\nconsole.log(total);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Loop Demo",
        description: "Run these loops and adjust the counts to see how they behave.",
      }}
    />
  );
}
