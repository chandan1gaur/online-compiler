import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript flat(): Flatten Arrays",
  description: "Learn the JavaScript flat() method with syntax, examples, and depth control.",
  keywords: ["flat", "array flat", "javascript arrays"],
  openGraph: {
    title: "JavaScript flat()",
    description: "Learn the JavaScript flat() method with syntax, examples, and depth control.",
    url: "/javascript/arrays/flat",
    type: "article",
    images: ["/og-flat.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript flat()",
    description: "Learn the JavaScript flat() method with syntax, examples, and depth control.",
    images: ["/og-flat.svg"],
  },
  alternates: { canonical: "/javascript/arrays/flat" },
};

const sections = [
  {
    heading: "Flatten Nested Arrays",
    paragraphs: [
      "flat reduces the nesting level of arrays.",
      "By default it flattens one level.",
    ],
  },
  {
    heading: "Depth Control",
    paragraphs: [
      "Pass a depth number to flatten deeper levels.",
      "Use Infinity to fully flatten.",
    ],
  },
  {
    heading: "Non-Mutating",
    paragraphs: [
      "flat returns a new array and does not mutate the original.",
      "That makes it safe for immutable workflows.",
    ],
  },
];

const examples = [
  {
    title: "One level",
    code: `const nested = [1, [2, 3]];\nconst flat = nested.flat();\n\nconsole.log(flat);`,
    explanation: "Default depth is 1.",
  },
  {
    title: "Two levels",
    code: `const nested = [1, [2, [3]]];\nconst flat = nested.flat(2);\n\nconsole.log(flat);`,
    explanation: "Provide depth to flatten further.",
  },
  {
    title: "Infinity depth",
    code: `const nested = [1, [2, [3, [4]]]];\nconst flat = nested.flat(Infinity);\n\nconsole.log(flat);`,
    explanation: "Infinity flattens all levels.",
  },
  {
    title: "Remove empty slots",
    code: `const sparse = [1, , 2];\nconst flat = sparse.flat();\n\nconsole.log(flat);`,
    explanation: "flat removes empty slots in sparse arrays.",
  },
];

const mistakes = [
  { title: "Assuming flat mutates", fix: "flat returns a new array." },
  { title: "Forgetting depth", fix: "Specify depth when arrays are deeply nested." },
  { title: "Using flat for non-arrays", fix: "flat only works on arrays." },
];

const faqs = [
  { q: "Does flat mutate the array?", a: "No, it returns a new array." },
  { q: "What is the default depth?", a: "1." },
  { q: "How do I fully flatten?", a: "Use flat(Infinity)." },
];

const related = [
  { label: "reduce()", href: "/javascript/arrays/reduce" },
  { label: "slice() & splice()", href: "/javascript/arrays/slice" },
  { label: "Multidimensional Arrays", href: "/javascript/arrays/multidimensional" },
];

export default function JavascriptFlatPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript flat()"
      intro={[
        "flat reduces nested arrays into a single level array.",
        "It is useful for cleaning nested data.",
      ]}
      why={[
        "Nested arrays appear in grouped data, UI grids, and API responses.",
        "flat makes that data easier to process.",
      ]}
      syntax={["array.flat(depth)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const flat = nested.reduce((acc, arr) => acc.concat(arr), []);`,
        with: `const flat = nested.flat();`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does flat do?", a: "It flattens nested arrays to a given depth." },
        { q: "Does flat mutate?", a: "No, it returns a new array." },
        { q: "How do you flatten all levels?", a: "Use flat(Infinity)." },
      ]}
      practice={{
        prompt: "Practice: Flatten a two-level nested array.",
        starterCode: `const nested = [1, [2, 3]];\n// TODO: flatten\n`,
        solution: `const nested = [1, [2, 3]];\nconst flat = nested.flat();\nconsole.log(flat);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run flat() Demo",
        description: "Try different depths to see how arrays flatten.",
      }}
    />
  );
}
