import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Array Destructuring",
  description: "Learn array destructuring in JavaScript with syntax, examples, and best practices.",
  keywords: ["array destructuring", "javascript arrays", "destructuring"],
  openGraph: {
    title: "JavaScript Array Destructuring",
    description: "Learn array destructuring in JavaScript with syntax, examples, and best practices.",
    url: "/javascript/arrays/destructuring",
    type: "article",
    images: ["/og-array-destructuring.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Array Destructuring",
    description: "Learn array destructuring in JavaScript with syntax, examples, and best practices.",
    images: ["/og-array-destructuring.svg"],
  },
  alternates: { canonical: "/javascript/arrays/destructuring" },
};

const sections = [
  {
    heading: "Unpack Values",
    paragraphs: [
      "Destructuring lets you unpack array values into variables.",
      "It improves readability compared to manual indexing.",
    ],
  },
  {
    heading: "Skip and Defaults",
    paragraphs: [
      "You can skip elements with commas and set default values.",
      "This is useful for optional positions.",
    ],
  },
  {
    heading: "Rest Elements",
    paragraphs: [
      "Use rest syntax to collect remaining items into a new array.",
      "Rest must be the last element in the pattern.",
    ],
  },
];

const examples = [
  {
    title: "Basic destructuring",
    code: `const coords = [10, 20];\nconst [x, y] = coords;\n\nconsole.log(x, y);`,
    explanation: "Assign positions to variables.",
  },
  {
    title: "Skip items",
    code: `const items = ["a", "b", "c"];\nconst [first, , third] = items;\n\nconsole.log(first, third);`,
    explanation: "Use commas to skip.",
  },
  {
    title: "Defaults",
    code: `const list = ["only"];\nconst [a, b = "default"] = list;\n\nconsole.log(a, b);`,
    explanation: "Provide defaults for missing values.",
  },
  {
    title: "Rest",
    code: `const nums = [1, 2, 3, 4];\nconst [head, ...tail] = nums;\n\nconsole.log(head, tail);`,
    explanation: "Collect remaining items into a new array.",
  },
];

const mistakes = [
  { title: "Assuming value exists", fix: "Use defaults for optional positions." },
  { title: "Rest not last", fix: "Rest must be the final pattern element." },
  { title: "Overusing destructuring", fix: "Keep code readable; use destructuring when it helps." },
];

const faqs = [
  { q: "What does array destructuring do?", a: "It assigns array items to variables by position." },
  { q: "Can I skip items?", a: "Yes, by leaving a blank spot between commas." },
  { q: "How do I capture the rest?", a: "Use ...rest as the last pattern element." },
];

const related = [
  { label: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
  { label: "Spread Operator", href: "/javascript/functions/spread-operator" },
  { label: "Array Methods", href: "/javascript/arrays/array-methods" },
];

export default function JavascriptArrayDestructuringPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Array Destructuring"
      intro={[
        "Array destructuring lets you unpack values into variables in a clean, readable way.",
        "It is especially useful for function returns and swapping values.",
      ]}
      why={[
        "Destructuring reduces repeated indexing and makes intent clear.",
        "It also works well with rest syntax and default values.",
      ]}
      syntax={["const [a, b] = array", "const [first, , third] = array", "const [head, ...tail] = array"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const first = items[0];\nconst second = items[1];`,
        with: `const [first, second] = items;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "How does destructuring work?", a: "It assigns values by position from the array." },
        { q: "Can you set defaults?", a: "Yes, use = defaultValue in the pattern." },
        { q: "Where must rest appear?", a: "At the end of the destructuring pattern." },
      ]}
      practice={{
        prompt: "Practice: Destructure a list of three colors into variables.",
        starterCode: `const colors = ["red", "green", "blue"];\n// TODO: destructure into a, b, c\n`,
        solution: `const colors = ["red", "green", "blue"];\nconst [a, b, c] = colors;\nconsole.log(a, b, c);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Destructuring Demo",
        description: "Try skipping values or adding defaults.",
      }}
    />
  );
}
