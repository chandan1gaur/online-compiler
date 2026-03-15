import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript while Loop: Syntax and Examples",
  description: "Learn the JavaScript while loop with syntax, examples, and best practices.",
  keywords: ["javascript while loop", "while syntax", "iteration"],
  openGraph: {
    title: "JavaScript while Loop",
    description: "Learn the JavaScript while loop with syntax, examples, and best practices.",
    url: "/javascript/loops/while-loop",
    type: "article",
    images: ["/og-while-loop.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript while Loop",
    description: "Learn the JavaScript while loop with syntax, examples, and best practices.",
    images: ["/og-while-loop.svg"],
  },
  alternates: { canonical: "/javascript/loops/while-loop" },
};

const sections = [
  {
    heading: "Unknown Iterations",
    paragraphs: [
      "Use while loops when you do not know how many times you will iterate.",
      "They run as long as the condition remains true.",
    ],
  },
  {
    heading: "Exit Conditions",
    paragraphs: [
      "Always ensure the loop condition can become false.",
      "Update counters or state inside the loop to avoid infinite loops.",
    ],
  },
  {
    heading: "Polling and Retries",
    paragraphs: [
      "while loops are common for retries, polling, and reading input until valid.",
      "Combine with break statements for early exits.",
    ],
  },
];

const examples = [
  {
    title: "Basic while",
    code: `let i = 0;\n\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}`,
    explanation: "Runs until the condition is false.",
  },
  {
    title: "Retry loop",
    code: `let attempts = 0;\nlet success = false;\n\nwhile (attempts < 3 && !success) {\n  attempts++;\n  success = attempts === 2;\n}\n\nconsole.log(attempts, success);`,
    explanation: "Use while for retry logic.",
  },
  {
    title: "Read input",
    code: `const numbers = [2, 4, 6, 9];\nlet idx = 0;\n\nwhile (idx < numbers.length && numbers[idx] % 2 === 0) {\n  idx++;\n}\n\nconsole.log(idx);`,
    explanation: "Stop when a condition fails.",
  },
  {
    title: "Guard with break",
    code: `let count = 0;\n\nwhile (true) {\n  count++;\n  if (count === 3) break;\n}\n\nconsole.log(count);`,
    explanation: "Use break to exit early.",
  },
];

const mistakes = [
  { title: "Infinite loop", fix: "Ensure the condition changes inside the loop." },
  { title: "Missing increment", fix: "Update the counter or state each iteration." },
  { title: "Overly complex conditions", fix: "Extract conditions into named variables for clarity." },
  { title: "Using while for fixed counts", fix: "Prefer for loops when the count is known." },
];

const faqs = [
  { q: "When should I use while?", a: "When the number of iterations is not known in advance." },
  { q: "How do I stop a while loop?", a: "Make the condition false or use break." },
  { q: "Is while slower than for?", a: "Not meaningfully; choose based on readability." },
];

const related = [
  { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
  { label: "for Loop", href: "/javascript/loops/for-loop" },
  { label: "break Statement", href: "/javascript/loops/break-statement" },
];

export default function JavascriptWhileLoopPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript while Loop"
      intro={[
        "The while loop runs as long as its condition is true.",
        "It is best when you do not know the number of iterations ahead of time.",
      ]}
      why={[
        "Many tasks depend on dynamic conditions like retries or input validation.",
        "while loops handle these cases cleanly when written with safe exit conditions.",
      ]}
      syntax={["while (condition) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let i = 0;\nif (i < 3) {\n  console.log(i);\n  i++;\n} // repeats manually`,
        with: `let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the main risk with while loops?", a: "Infinite loops if the condition never changes." },
        { q: "When should you prefer for loops?", a: "When the number of iterations is known." },
        { q: "How do you exit early?", a: "Use break inside the loop." },
      ]}
      practice={{
        prompt: "Practice: Use a while loop to count down from 5 to 1.",
        starterCode: `let i = 5;\n// TODO: count down\n`,
        solution: `let i = 5;\nwhile (i > 0) {\n  console.log(i);\n  i--;\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run while Demo",
        description: "Try changing the condition to see how many iterations run.",
      }}
    />
  );
}
