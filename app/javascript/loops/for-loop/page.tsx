import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript for Loop: Syntax and Examples",
  description: "Learn the JavaScript for loop with syntax, examples, and best practices.",
  keywords: ["javascript for loop", "for loop syntax", "iteration"],
  openGraph: {
    title: "JavaScript for Loop",
    description: "Learn the JavaScript for loop with syntax, examples, and best practices.",
    url: "/javascript/loops/for-loop",
    type: "article",
    images: ["/og-for-loop.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript for Loop",
    description: "Learn the JavaScript for loop with syntax, examples, and best practices.",
    images: ["/og-for-loop.svg"],
  },
  alternates: { canonical: "/javascript/loops/for-loop" },
};

const sections = [
  {
    heading: "Known Iterations",
    paragraphs: [
      "Use a for loop when you know how many times you need to run a block.",
      "It combines initialization, condition, and increment in one place.",
    ],
  },
  {
    heading: "Indices and Counters",
    paragraphs: [
      "for loops are great for index-based iteration over arrays.",
      "Be mindful of the start and end conditions to avoid off-by-one errors.",
    ],
  },
  {
    heading: "Nested Loops",
    paragraphs: [
      "Nested loops are useful for grids and combinations, but can be expensive.",
      "Keep the inner work light and avoid unnecessary nesting.",
    ],
  },
];

const examples = [
  {
    title: "Basic for loop",
    code: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`,
    explanation: "A standard for loop counts from 0 to 2.",
  },
  {
    title: "Loop over array",
    code: `const items = ["a", "b", "c"];\n\nfor (let i = 0; i < items.length; i++) {\n  console.log(items[i]);\n}`,
    explanation: "Use indices when you need the position.",
  },
  {
    title: "Step by 2",
    code: `for (let i = 0; i <= 10; i += 2) {\n  console.log(i);\n}`,
    explanation: "Adjust the increment to skip values.",
  },
  {
    title: "Reverse loop",
    code: `for (let i = 5; i >= 0; i--) {\n  console.log(i);\n}`,
    explanation: "You can count down as well.",
  },
];

const mistakes = [
  { title: "Off-by-one errors", fix: "Double-check loop boundaries (use < vs <= intentionally)." },
  { title: "Using length in condition repeatedly", fix: "Cache length if needed for performance in hot loops." },
  { title: "Forgetting i++", fix: "Ensure the counter changes so the loop can finish." },
  { title: "Mutating array length while looping", fix: "Avoid changing the array you are iterating unless necessary." },
];

const faqs = [
  { q: "When should I use for vs for...of?", a: "Use for when you need the index, for...of when you only need values." },
  { q: "Can the increment be negative?", a: "Yes, you can count down with i--." },
  { q: "Is for faster than array methods?", a: "Often similar; choose readability first unless performance is critical." },
];

const related = [
  { label: "while Loop", href: "/javascript/loops/while-loop" },
  { label: "for...of Loop", href: "/javascript/loops/for-of-loop" },
  { label: "Nested Loops", href: "/javascript/loops/nested-loops" },
];

export default function JavascriptForLoopPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript for Loop"
      intro={[
        "The for loop is the most common loop when you know exactly how many times to iterate.",
        "It keeps initialization, condition, and step in one concise line.",
      ]}
      why={[
        "Index-based loops are helpful for arrays, pagination, and fixed counts.",
        "A well-structured for loop is easy to read and efficient.",
      ]}
      syntax={["for (init; condition; step) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let i = 0;\nconsole.log(i);\ni++;\nconsole.log(i);\ni++;`,
        with: `for (let i = 0; i < 2; i++) {\n  console.log(i);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What are the three parts of a for loop?", a: "Initialization, condition, and increment (step)." },
        { q: "How do you avoid off-by-one errors?", a: "Be explicit about whether the end index is inclusive or exclusive." },
        { q: "When is for...of better?", a: "When you only need the values, not the index." },
      ]}
      practice={{
        prompt: "Practice: Print the first 10 even numbers using a for loop.",
        starterCode: `// TODO: print 0 to 18 step 2\n`,
        solution: `for (let i = 0; i < 20; i += 2) {\n  console.log(i);\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run for Loop Demo",
        description: "Try changing the loop bounds and step to see how iteration changes.",
      }}
    />
  );
}
