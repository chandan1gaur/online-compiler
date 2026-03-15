import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Rest Parameters (...args)",
  description: "Learn JavaScript rest parameters with syntax, examples, and best practices.",
  keywords: ["rest parameters", "...args", "javascript functions"],
  openGraph: {
    title: "JavaScript Rest Parameters",
    description: "Learn JavaScript rest parameters with syntax, examples, and best practices.",
    url: "/javascript/functions/rest-parameters",
    type: "article",
    images: ["/og-rest-params.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Rest Parameters",
    description: "Learn JavaScript rest parameters with syntax, examples, and best practices.",
    images: ["/og-rest-params.svg"],
  },
  alternates: { canonical: "/javascript/functions/rest-parameters" },
};

const sections = [
  {
    heading: "Collect Extra Arguments",
    paragraphs: [
      "Rest parameters gather remaining arguments into an array.",
      "They are useful when you do not know how many inputs you will receive.",
    ],
  },
  {
    heading: "Position Matters",
    paragraphs: [
      "The rest parameter must be the last parameter.",
      "Only one rest parameter is allowed.",
    ],
  },
  {
    heading: "Modern Alternative to arguments",
    paragraphs: [
      "Rest parameters are clearer than the old arguments object.",
      "They work in arrow functions too.",
    ],
  },
];

const examples = [
  {
    title: "Sum values",
    code: `function sum(...nums) {\n  return nums.reduce((acc, n) => acc + n, 0);\n}\n\nconsole.log(sum(1, 2, 3));`,
    explanation: "Collect all arguments into an array and reduce.",
  },
  {
    title: "Fixed + rest",
    code: `function log(level, ...messages) {\n  console.log(level, messages);\n}\n\nlog("info", "start", "loading");`,
    explanation: "Use rest after fixed parameters.",
  },
  {
    title: "Forward arguments",
    code: `function wrap(fn, ...args) {\n  return fn(...args);\n}\n\nconsole.log(wrap(Math.max, 3, 9, 2));`,
    explanation: "Combine rest and spread to forward arguments.",
  },
  {
    title: "Arrow with rest",
    code: `const join = (...parts) => parts.join("-");\n\nconsole.log(join("a", "b", "c"));`,
    explanation: "Rest parameters work in arrow functions.",
  },
];

const mistakes = [
  { title: "Putting rest first", fix: "Rest must be the last parameter." },
  { title: "Using arguments in arrows", fix: "Arrow functions do not have arguments; use rest." },
  { title: "Assuming rest is required", fix: "Rest can be an empty array if no extra args are passed." },
];

const faqs = [
  { q: "What does ...args mean?", a: "It collects remaining arguments into an array." },
  { q: "Can I have multiple rest parameters?", a: "No, only one is allowed and it must be last." },
  { q: "How is rest different from spread?", a: "Rest collects arguments, spread expands them." },
];

const related = [
  { label: "Spread Operator", href: "/javascript/functions/spread-operator" },
  { label: "Parameters and Arguments", href: "/javascript/functions/parameters-arguments" },
  { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
];

export default function JavascriptRestParametersPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Rest Parameters"
      intro={[
        "Rest parameters collect extra function arguments into an array.",
        "They make functions flexible when input count varies.",
      ]}
      why={[
        "Many utilities accept an unknown number of inputs. Rest parameters handle those cases cleanly.",
        "They are clearer and safer than the old arguments object.",
      ]}
      syntax={["function name(...rest) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `function sum() {\n  return Array.from(arguments).reduce((a, b) => a + b, 0);\n}`,
        with: `function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Why must rest be last?", a: "It collects all remaining arguments, so it must be at the end." },
        { q: "Can arrows use rest?", a: "Yes, rest works with arrow functions." },
        { q: "Rest vs spread?", a: "Rest collects into an array; spread expands an array." },
      ]}
      practice={{
        prompt: "Practice: Write a function that multiplies all numbers passed in.",
        starterCode: `// TODO: function multiply(...nums)\n`,
        solution: `function multiply(...nums) {\n  return nums.reduce((acc, n) => acc * n, 1);\n}\n\nconsole.log(multiply(2, 3, 4));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Rest Demo",
        description: "Try passing different counts of numbers.",
      }}
    />
  );
}
