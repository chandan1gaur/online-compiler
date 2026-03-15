import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Working with JSON in JavaScript",
  description:
    "Learn how to work with JSON in JavaScript: parse, stringify, validate, and handle common pitfalls.",
  keywords: ["javascript json", "JSON.parse", "JSON.stringify", "json validation"],
  openGraph: {
    title: "Working with JSON in JavaScript",
    description:
      "Learn how to work with JSON in JavaScript: parse, stringify, validate, and handle common pitfalls.",
    url: "/javascript/working-with-json",
    type: "article",
    images: ["/og-variables-json.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Working with JSON in JavaScript",
    description:
      "Learn how to work with JSON in JavaScript: parse, stringify, validate, and handle common pitfalls.",
    images: ["/og-variables-json.svg"],
  },
  alternates: { canonical: "/javascript/working-with-json" },
};

const sections = [
  {
    heading: "What is JSON?",
    paragraphs: [
      "JSON (JavaScript Object Notation) is a lightweight data format for exchanging data.",
      "It supports strings, numbers, booleans, null, arrays, and objects.",
      "JSON is language-agnostic and widely used in APIs and configuration files.",
    ],
  },
  {
    heading: "Parsing JSON Safely",
    paragraphs: [
      "Use JSON.parse() to convert a JSON string into a JavaScript value.",
      "Wrap parsing in try/catch to handle invalid JSON.",
      "Validate shape after parsing to avoid runtime errors.",
    ],
  },
  {
    heading: "Stringifying JavaScript Values",
    paragraphs: [
      "Use JSON.stringify() to convert JavaScript values into JSON strings.",
      "Functions, undefined, and symbols are not serialized.",
      "Use replacer and spacing options for custom output.",
    ],
  },
  {
    heading: "Common Pitfalls",
    paragraphs: [
      "Dates become strings when stringified and lose timezone behavior.",
      "Circular references throw errors during JSON.stringify().",
      "Precision can be lost with large numbers; consider BigInt or strings.",
    ],
  },
];

const examples = [
  {
    title: "Basic JSON.parse",
    code: `const json = '{"name":"Asha","age":21}';\nconst user = JSON.parse(json);\nconsole.log(user.name);`,
    explanation: "JSON.parse converts a JSON string into an object.",
  },
  {
    title: "Safe Parsing with try/catch",
    code: `function safeParse(str) {\n  try {\n    return JSON.parse(str);\n  } catch {\n    return null;\n  }\n}\n\nconsole.log(safeParse('{"ok":true}'));\nconsole.log(safeParse('invalid'));`,
    explanation: "Use try/catch to avoid crashes on invalid JSON.",
  },
  {
    title: "JSON.stringify Basics",
    code: `const user = { name: "Asha", age: 21 };\nconst json = JSON.stringify(user);\nconsole.log(json);`,
    explanation: "JSON.stringify converts objects into JSON strings.",
  },
  {
    title: "Custom Replacer and Spacing",
    code: `const user = { name: "Asha", password: "secret" };\nconst json = JSON.stringify(user, (key, value) => (key === "password" ? undefined : value), 2);\nconsole.log(json);`,
    explanation: "Use a replacer to remove fields and spacing for readability.",
  },
];

const mistakes = [
  { title: "Assuming JSON supports functions", fix: "Functions are skipped by JSON.stringify." },
  { title: "Ignoring parse errors", fix: "Wrap JSON.parse in try/catch and handle failures." },
  { title: "Serializing circular data", fix: "Remove cycles or use a custom serializer." },
];

const faqs = [
  { q: "Is JSON the same as JavaScript objects?", a: "No. JSON is a string format with stricter rules." },
  { q: "Why does JSON.parse throw?", a: "Because the input string is not valid JSON." },
  { q: "Can JSON store dates?", a: "Dates are stored as strings and must be rehydrated." },
  { q: "How to pretty-print JSON?", a: "Use JSON.stringify(value, null, 2)." },
];

export default function WorkingWithJsonPage() {
  return (
    <JsTutorialTemplate
      title="Working with JSON in JavaScript"
      intro={[
        "JSON is the standard format for data exchange on the web.",
        "Learn how to parse, stringify, and validate JSON safely.",
      ]}
      why={[
        "Most APIs send JSON, so you must parse and validate data correctly.",
        "Understanding JSON prevents runtime errors and data loss.",
      ]}
      syntax={[
        "JSON.parse(jsonString);",
        "JSON.stringify(value);",
      ]}
      sections={sections}
      examples={examples}
      mistakes={mistakes}
      faqs={faqs}
      interviewQuestions={[
        { q: "What does JSON.parse do?", a: "It converts a JSON string into a JavaScript value." },
        { q: "What cannot be serialized by JSON.stringify?", a: "Functions, undefined, and symbols." },
        { q: "How do you handle invalid JSON?", a: "Use try/catch and return a fallback." },
      ]}
      comparison={{
        without: `// Risky parse\nconst data = JSON.parse(input);`,
        with: `// Safe parse\nconst data = (() => {\n  try { return JSON.parse(input); } catch { return null; }\n})();`,
      }}
      practice={{
        prompt: "Practice: Parse a JSON string and log a field.",
        starterCode: `const json = '{"name":"Riya","age":20}';\n// TODO: parse and log name\n`,
        solution: `const json = '{"name":"Riya","age":20}';\nconst user = JSON.parse(json);\nconsole.log(user.name);`,
      }}
      tryItYourself={{
        code: examples[0].code,
        label: "Run JSON Parse",
        description: "Try parsing a JSON string and reading a property.",
      }}
      related={[
        { label: "Type Conversion", href: "/javascript/variables/type-conversion" },
        { label: "Data Types", href: "/javascript/variables/data-types" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
