import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Parameters and Arguments",
  description: "Understand parameters and arguments in JavaScript with examples and best practices.",
  keywords: ["parameters", "arguments", "javascript functions"],
  openGraph: {
    title: "JavaScript Parameters and Arguments",
    description: "Understand parameters and arguments in JavaScript with examples and best practices.",
    url: "/javascript/functions/parameters-arguments",
    type: "article",
    images: ["/og-parameters.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Parameters and Arguments",
    description: "Understand parameters and arguments in JavaScript with examples and best practices.",
    images: ["/og-parameters.svg"],
  },
  alternates: { canonical: "/javascript/functions/parameters-arguments" },
};

const sections = [
  {
    heading: "Inputs to Functions",
    paragraphs: [
      "Parameters are the named variables in the function definition.",
      "Arguments are the actual values passed when you call the function.",
    ],
  },
  {
    heading: "Default and Optional Values",
    paragraphs: [
      "If an argument is missing, its parameter becomes undefined.",
      "Use default parameters to handle missing values safely.",
    ],
  },
  {
    heading: "Argument Flexibility",
    paragraphs: [
      "JavaScript does not enforce parameter count. Extra arguments are ignored unless you capture them.",
      "Use rest parameters to collect extra values.",
    ],
  },
];

const examples = [
  {
    title: "Basic usage",
    code: `function greet(name) {\n  return "Hello " + name;\n}\n\nconsole.log(greet("Neha"));`,
    explanation: "name is a parameter, and 'Neha' is the argument.",
  },
  {
    title: "Missing argument",
    code: `function label(status) {\n  return status ?? "pending";\n}\n\nconsole.log(label());`,
    explanation: "Missing arguments become undefined.",
  },
  {
    title: "Extra arguments",
    code: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(2, 3, 4));`,
    explanation: "Extra arguments are ignored unless you collect them.",
  },
  {
    title: "Rest parameters",
    code: `function sum(...nums) {\n  return nums.reduce((acc, n) => acc + n, 0);\n}\n\nconsole.log(sum(1, 2, 3));`,
    explanation: "Rest parameters collect extra arguments into an array.",
  },
];

const mistakes = [
  { title: "Assuming required arguments", fix: "Validate inputs or provide defaults." },
  { title: "Using arguments object in arrows", fix: "Arrow functions do not have their own arguments object." },
  { title: "Mixing parameter order", fix: "Keep parameter order stable and well-documented." },
];

const faqs = [
  { q: "What is the difference between parameters and arguments?", a: "Parameters are named inputs; arguments are the values passed." },
  { q: "What happens if I pass fewer arguments?", a: "Missing parameters become undefined." },
  { q: "Can I pass more arguments?", a: "Yes, extra arguments are ignored unless you capture them." },
];

const related = [
  { label: "Default Parameters", href: "/javascript/functions/default-parameters" },
  { label: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
  { label: "Spread Operator", href: "/javascript/functions/spread-operator" },
];

export default function JavascriptParametersArgumentsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Parameters and Arguments"
      intro={[
        "Parameters are the placeholders in a function definition, and arguments are the values you pass in.",
        "Understanding the difference makes function calls clearer and safer.",
      ]}
      why={[
        "Most bugs in functions come from unexpected inputs or missing values.",
        "Clear parameter handling keeps your functions predictable.",
      ]}
      syntax={["function name(param1, param2) { ... }", "name(arg1, arg2)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `function greet(name) {\n  return "Hello " + name;\n}\nconsole.log(greet());`,
        with: `function greet(name = "Guest") {\n  return "Hello " + name;\n}\nconsole.log(greet());`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is a parameter?", a: "A named input in a function definition." },
        { q: "What is an argument?", a: "The actual value passed to a function call." },
        { q: "How do you handle extra arguments?", a: "Use rest parameters to capture them." },
      ]}
      practice={{
        prompt: "Practice: Write a function that takes two parameters and returns their difference.",
        starterCode: `// TODO: function diff(a, b)\n`,
        solution: `function diff(a, b) {\n  return a - b;\n}\n\nconsole.log(diff(10, 4));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Parameters Demo",
        description: "Try passing different arguments and see how outputs change.",
      }}
    />
  );
}
