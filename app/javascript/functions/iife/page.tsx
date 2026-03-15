import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript IIFE (Immediately Invoked Function Expression)",
  description: "Learn IIFE in JavaScript with syntax, use cases, and examples.",
  keywords: ["iife", "immediately invoked function expression", "javascript functions"],
  openGraph: {
    title: "JavaScript IIFE",
    description: "Learn IIFE in JavaScript with syntax, use cases, and examples.",
    url: "/javascript/functions/iife",
    type: "article",
    images: ["/og-iife.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript IIFE",
    description: "Learn IIFE in JavaScript with syntax, use cases, and examples.",
    images: ["/og-iife.svg"],
  },
  alternates: { canonical: "/javascript/functions/iife" },
};

const sections = [
  {
    heading: "Run Immediately",
    paragraphs: [
      "An IIFE runs as soon as it is defined.",
      "It is useful for creating a private scope.",
    ],
  },
  {
    heading: "Avoid Global Pollution",
    paragraphs: [
      "IIFEs help avoid polluting the global namespace.",
      "This was especially common before ES modules.",
    ],
  },
  {
    heading: "Modern Alternatives",
    paragraphs: [
      "With ES modules, IIFEs are less common but still useful in quick scripts.",
      "They remain a good tool to understand legacy code.",
    ],
  },
];

const examples = [
  {
    title: "Basic IIFE",
    code: `(function() {\n  console.log("IIFE ran");\n})();`,
    explanation: "The function executes immediately after definition.",
  },
  {
    title: "IIFE with arguments",
    code: `(function(name) {\n  console.log("Hello " + name);\n})("Ava");`,
    explanation: "Pass arguments into the IIFE like a normal function.",
  },
  {
    title: "Arrow IIFE",
    code: `(() => {\n  console.log("Arrow IIFE");\n})();`,
    explanation: "IIFEs can be written with arrow syntax as well.",
  },
  {
    title: "Private scope",
    code: `const value = "global";\n\n(function() {\n  const value = "local";\n  console.log(value);\n})();\n\nconsole.log(value);`,
    explanation: "IIFE creates a private scope.",
  },
];

const mistakes = [
  { title: "Forgetting parentheses", fix: "Wrap the function to make it an expression." },
  { title: "Overusing IIFEs", fix: "Prefer modules for larger codebases." },
  { title: "Hard-to-read nesting", fix: "Keep IIFEs short and focused." },
];

const faqs = [
  { q: "What does IIFE mean?", a: "Immediately Invoked Function Expression." },
  { q: "Why use an IIFE?", a: "To run code immediately and create a private scope." },
  { q: "Are IIFEs still used today?", a: "Less common with ES modules, but still useful in scripts." },
];

const related = [
  { label: "Function Expression", href: "/javascript/functions/function-expression" },
  { label: "Modules", href: "/javascript/modules" },
  { label: "Scope", href: "/javascript/variables/scope" },
];

export default function JavascriptIIFEPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript IIFE"
      intro={[
        "An IIFE is a function expression that runs immediately after it is defined.",
        "It creates a private scope and avoids leaking variables globally.",
      ]}
      why={[
        "IIFEs were a popular way to isolate variables before ES modules.",
        "They are still useful in quick scripts and legacy codebases.",
      ]}
      syntax={["(function() { ... })()", "(() => { ... })()"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `var counter = 0;\n// counter is global`,
        with: `(function() {\n  let counter = 0;\n  console.log(counter);\n})();`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is an IIFE?", a: "A function that runs immediately after it is defined." },
        { q: "Why use an IIFE?", a: "To create a private scope and avoid globals." },
        { q: "Is IIFE still relevant?", a: "Yes, especially in scripts or legacy code." },
      ]}
      practice={{
        prompt: "Practice: Write an IIFE that logs the sum of two numbers.",
        starterCode: `// TODO: IIFE that logs 5 + 7\n`,
        solution: `(function(a, b) {\n  console.log(a + b);\n})(5, 7);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run IIFE Demo",
        description: "Try passing different values into the IIFE.",
      }}
    />
  );
}
