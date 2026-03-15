import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Nested Loops: Patterns and Examples",
  description: "Learn JavaScript nested loops with grid patterns, combinations, and performance tips.",
  keywords: ["javascript nested loops", "double loop", "grid iteration"],
  openGraph: {
    title: "JavaScript Nested Loops",
    description: "Learn JavaScript nested loops with grid patterns, combinations, and performance tips.",
    url: "/javascript/loops/nested-loops",
    type: "article",
    images: ["/og-nested-loops.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Nested Loops",
    description: "Learn JavaScript nested loops with grid patterns, combinations, and performance tips.",
    images: ["/og-nested-loops.svg"],
  },
  alternates: { canonical: "/javascript/loops/nested-loops" },
};

const sections = [
  {
    heading: "Grid Iteration",
    paragraphs: [
      "Nested loops are perfect for 2D grids like tables, boards, and matrices.",
      "The outer loop controls rows and the inner loop controls columns.",
    ],
  },
  {
    heading: "Combinations",
    paragraphs: [
      "Use nested loops to compare each item with others or generate pairs.",
      "Be mindful of performance as the work grows quickly (O(n^2)).",
    ],
  },
  {
    heading: "Performance Awareness",
    paragraphs: [
      "Nested loops can be expensive for large datasets.",
      "Consider breaking early with break or using smarter algorithms.",
    ],
  },
];

const examples = [
  {
    title: "2D grid",
    code: `const grid = [\n  [1, 2],\n  [3, 4],\n];\n\nfor (let r = 0; r < grid.length; r++) {\n  for (let c = 0; c < grid[r].length; c++) {\n    console.log(grid[r][c]);\n  }\n}`,
    explanation: "Nested loops iterate rows and columns.",
  },
  {
    title: "All pairs",
    code: `const items = ["a", "b", "c"];\n\nfor (let i = 0; i < items.length; i++) {\n  for (let j = i + 1; j < items.length; j++) {\n    console.log(items[i], items[j]);\n  }\n}`,
    explanation: "Generate unique pairs with a nested loop.",
  },
  {
    title: "Early break",
    code: `let found = false;\nfor (let i = 0; i < 3 && !found; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i + j === 4) {\n      found = true;\n      break;\n    }\n  }\n}\nconsole.log(found);`,
    explanation: "Use a flag to break out of nested loops.",
  },
  {
    title: "Pattern printing",
    code: `let pattern = "";\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j <= i; j++) {\n    pattern += "*";\n  }\n  pattern += "\n";\n}\nconsole.log(pattern);`,
    explanation: "Nested loops are common in pattern generation.",
  },
];

const mistakes = [
  { title: "Large nested loops", fix: "Consider algorithmic alternatives for large data sets." },
  { title: "Forgetting break scope", fix: "Break only exits the inner loop unless you use a flag." },
  { title: "Unclear loop variables", fix: "Use descriptive names like row and col for readability." },
];

const faqs = [
  { q: "Why are nested loops slow?", a: "They often scale with O(n^2) or worse as data grows." },
  { q: "How do I break both loops?", a: "Use a flag, labeled break, or return from a function." },
  { q: "When should I use nested loops?", a: "For grids, combinations, and comparisons across pairs." },
];

const related = [
  { label: "for Loop", href: "/javascript/loops/for-loop" },
  { label: "break Statement", href: "/javascript/loops/break-statement" },
  { label: "continue Statement", href: "/javascript/loops/continue-statement" },
];

export default function JavascriptNestedLoopsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Nested Loops"
      intro={[
        "Nested loops place one loop inside another to handle multi-dimensional data.",
        "They are common in grid processing, pattern printing, and pair comparisons.",
      ]}
      why={[
        "Some tasks require comparing every item to every other item or iterating 2D structures.",
        "Knowing nested loops helps you handle those cases while being mindful of performance.",
      ]}
      syntax={["for (...) {", "  for (...) { ... }", "}"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `for (let i = 0; i < rows; i++) {\n  // no inner loop\n}`,
        with: `for (let r = 0; r < rows; r++) {\n  for (let c = 0; c < cols; c++) {\n    // process grid cell\n  }\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is the time complexity of nested loops?", a: "Often O(n^2), depending on bounds." },
        { q: "How do you break out of both loops?", a: "Use a flag, labeled break, or return from a function." },
        { q: "When are nested loops necessary?", a: "For grids, combinations, and pairwise comparisons." },
      ]}
      practice={{
        prompt: "Practice: Use nested loops to print a 3x3 multiplication table.",
        starterCode: `// TODO: print 1..3 multiplied by 1..3\n`,
        solution: `for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i * j);\n  }\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Nested Loop Demo",
        description: "Try different grid sizes to see how nested loops behave.",
      }}
    />
  );
}
