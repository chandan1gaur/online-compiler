import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Template Literals",
  description: "Learn JavaScript template literals with multi-line strings, interpolation, and expressions.",
  keywords: ["template literals", "javascript strings", "backticks"],
  openGraph: {
    title: "JavaScript Template Literals",
    description: "Learn JavaScript template literals with multi-line strings, interpolation, and expressions.",
    url: "/javascript/strings/template-literals",
    type: "article",
    images: ["/og-template-literals.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Template Literals",
    description: "Learn JavaScript template literals with multi-line strings, interpolation, and expressions.",
    images: ["/og-template-literals.svg"],
  },
  alternates: { canonical: "/javascript/strings/template-literals" },
};

const sections = [
  {
    heading: "Backtick Strings",
    paragraphs: [
      "Template literals use backticks (`) instead of quotes.",
      "They make multi-line strings and interpolation easy.",
    ],
  },
  {
    heading: "Interpolation",
    paragraphs: [
      "Use ${} to insert variables or expressions into strings.",
      "This is cleaner than string concatenation.",
    ],
  },
  {
    heading: "Tagged Templates",
    paragraphs: [
      "Template literals can be tagged to process strings in custom ways.",
      "This is advanced but useful for localization or formatting.",
    ],
  },
];

const examples = [
  {
    title: "Basic template",
    code: "const name = 'Ava';\nconst msg = `Hello ${name}`;\n\nconsole.log(msg);",
    explanation: "Interpolate variables with ${}.",
  },
  {
    title: "Multi-line",
    code: "const text = `Line one\nLine two`;\n\nconsole.log(text);",
    explanation: "Template literals preserve line breaks.",
  },
  {
    title: "Expressions",
    code: "const a = 2;\nconst b = 3;\nconst sum = `Total: ${a + b}`;\n\nconsole.log(sum);",
    explanation: "You can place any expression inside ${}.",
  },
  {
    title: "Tagged template",
    code: "function tag(strings, value) {\n  return strings[0] + value.toUpperCase();\n}\n\nconst result = tag`Hi ${'ava'}`;\nconsole.log(result);",
    explanation: "Tagged templates give you control over formatting.",
  },
];

const mistakes = [
  { title: "Using quotes instead of backticks", fix: "Interpolation only works in backtick strings." },
  { title: "Forgetting braces", fix: "Use ${expression}, not $expression." },
  { title: "Overusing tagged templates", fix: "Use tags only when you need custom formatting." },
];

const faqs = [
  { q: "How do template literals differ from strings?", a: "They allow interpolation and multi-line content." },
  { q: "Can I use expressions inside?", a: "Yes, any expression inside ${} is allowed." },
  { q: "Are template literals slower?", a: "Performance is similar; choose readability." },
];

const related = [
  { label: "String Interpolation", href: "/javascript/strings/interpolation" },
  { label: "String Methods", href: "/javascript/strings" },
  { label: "Regex Overview", href: "/javascript/regex" },
];

export default function JavascriptTemplateLiteralsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Template Literals"
      intro={[
        "Template literals use backticks and allow interpolation with ${}.",
        "They make string formatting cleaner and more readable.",
      ]}
      why={[
        "String concatenation can get messy with multiple variables.",
        "Template literals keep formatting clear and maintainable.",
      ]}
      syntax={["`Hello ${name}`", "`Line1\nLine2`"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const msg = "Hello " + name + ", you have " + count + " items";`,
        with: "const msg = `Hello ${name}, you have ${count} items`;",
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What symbol is used for template literals?", a: "Backticks (`)." },
        { q: "How do you interpolate variables?", a: "Use ${variable} inside the template literal." },
        { q: "What is a tagged template?", a: "A function that processes a template literal." },
      ]}
      practice={{
        prompt: "Practice: Create a template literal that shows a user's name and age.",
        starterCode: "const name = 'Ava';\nconst age = 22;\n// TODO: create message\n",
        solution: "const name = 'Ava';\nconst age = 22;\nconst msg = `Name: ${name}, Age: ${age}`;\nconsole.log(msg);",
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Template Literal Demo",
        description: "Try interpolating different values.",
      }}
    />
  );
}
