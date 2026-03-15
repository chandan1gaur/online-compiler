import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Multidimensional Arrays",
  description: "Learn how to work with multidimensional arrays in JavaScript with examples and best practices.",
  keywords: ["multidimensional arrays", "2d arrays", "javascript arrays"],
  openGraph: {
    title: "JavaScript Multidimensional Arrays",
    description: "Learn how to work with multidimensional arrays in JavaScript with examples and best practices.",
    url: "/javascript/arrays/multidimensional",
    type: "article",
    images: ["/og-multidimensional.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Multidimensional Arrays",
    description: "Learn how to work with multidimensional arrays in JavaScript with examples and best practices.",
    images: ["/og-multidimensional.svg"],
  },
  alternates: { canonical: "/javascript/arrays/multidimensional" },
};

const sections = [
  {
    heading: "Arrays of Arrays",
    paragraphs: [
      "A multidimensional array is an array that contains other arrays.",
      "This is common for grids, tables, and matrices.",
    ],
  },
  {
    heading: "Access by Index",
    paragraphs: [
      "Use two indexes to access row and column positions.",
      "grid[row][col] is the typical pattern.",
    ],
  },
  {
    heading: "Looping",
    paragraphs: [
      "Use nested loops to iterate through rows and columns.",
      "Keep the inner loop simple for performance.",
    ],
  },
];

const examples = [
  {
    title: "Create a grid",
    code: `const grid = [\n  [1, 2],\n  [3, 4],\n];\n\nconsole.log(grid[0][1]); // 2`,
    explanation: "Access row 0, column 1.",
  },
  {
    title: "Nested loops",
    code: `const grid = [\n  [1, 2],\n  [3, 4],\n];\n\nfor (let r = 0; r < grid.length; r++) {\n  for (let c = 0; c < grid[r].length; c++) {\n    console.log(grid[r][c]);\n  }\n}`,
    explanation: "Use nested loops for traversal.",
  },
  {
    title: "Update a cell",
    code: `const grid = [[1, 2], [3, 4]];\n\ngrid[1][0] = 99;\nconsole.log(grid);`,
    explanation: "Update a specific cell by index.",
  },
  {
    title: "Flatten",
    code: `const grid = [[1, 2], [3, 4]];\nconst flat = grid.flat();\n\nconsole.log(flat);`,
    explanation: "flat reduces one level of nesting.",
  },
];

const mistakes = [
  { title: "Assuming rectangular shape", fix: "Rows can have different lengths; check before indexing." },
  { title: "Mixing row and column", fix: "Be consistent with grid[row][col]." },
  { title: "Complex nested loops", fix: "Extract helper functions for clarity." },
];

const faqs = [
  { q: "What is a multidimensional array?", a: "An array that contains other arrays." },
  { q: "How do you access a value?", a: "Use two indexes: grid[row][col]." },
  { q: "Can rows be different lengths?", a: "Yes, JavaScript arrays are not required to be rectangular." },
];

const related = [
  { label: "flat()", href: "/javascript/arrays/flat" },
  { label: "Nested Loops", href: "/javascript/loops/nested-loops" },
  { label: "Array Destructuring", href: "/javascript/arrays/destructuring" },
];

export default function JavascriptMultidimensionalArraysPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Multidimensional Arrays"
      intro={[
        "Multidimensional arrays are arrays of arrays and are common in grid or table data.",
        "They require two indexes to access individual elements.",
      ]}
      why={[
        "Many problems involve grids, boards, or matrices. Multidimensional arrays model them directly.",
        "Understanding access and iteration patterns makes these problems easier.",
      ]}
      syntax={["const grid = [[1, 2], [3, 4]]", "grid[row][col]"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const row0col1 = grid[0][1];`,
        with: `const row0col1 = grid[0][1]; // direct access`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "How do you loop a grid?", a: "Use nested loops for rows and columns." },
        { q: "Can you flatten a grid?", a: "Yes, use flat() or reduce with concat." },
        { q: "Are rows always equal length?", a: "No, arrays can be jagged." },
      ]}
      practice={{
        prompt: "Practice: Print all values of a 2x2 grid using nested loops.",
        starterCode: `const grid = [[1, 2], [3, 4]];\n// TODO: print all values\n`,
        solution: `const grid = [[1, 2], [3, 4]];\nfor (let r = 0; r < grid.length; r++) {\n  for (let c = 0; c < grid[r].length; c++) {\n    console.log(grid[r][c]);\n  }\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Multidimensional Demo",
        description: "Try changing values and indexes in the grid.",
      }}
    />
  );
}
