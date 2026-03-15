import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Default Parameters",
  description: "Learn JavaScript default parameters with syntax, examples, and best practices.",
  keywords: ["default parameters", "javascript functions"],
  openGraph: {
    title: "JavaScript Default Parameters",
    description: "Learn JavaScript default parameters with syntax, examples, and best practices.",
    url: "/javascript/functions/default-parameters",
    type: "article",
    images: ["/og-default-params.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Default Parameters",
    description: "Learn JavaScript default parameters with syntax, examples, and best practices.",
    images: ["/og-default-params.svg"],
  },
  alternates: { canonical: "/javascript/functions/default-parameters" },
};

const sections = [
  {
    heading: "Provide Fallbacks",
    paragraphs: [
      "Default parameters set a value when an argument is undefined.",
      "They reduce boilerplate checks inside your function.",
    ],
  },
  {
    heading: "Safe Configuration",
    paragraphs: [
      "Defaults are helpful for configuration objects and optional inputs.",
      "They keep function signatures clean and easy to read.",
    ],
  },
  {
    heading: "Evaluation Rules",
    paragraphs: [
      "Default values are evaluated at call time, not at function creation time.",
      "You can even use earlier parameters to compute defaults.",
    ],
  },
];

const examples = [
  {
    title: "Basic default",
    code: `function greet(name = "Guest") {\n  return "Hello " + name;\n}\n\nconsole.log(greet());`,
    explanation: "Missing arguments use the default value.",
  },
  {
    title: "Number default",
    code: `function addTax(price, rate = 0.18) {\n  return price + price * rate;\n}\n\nconsole.log(addTax(100));`,
    explanation: "Defaults work with any type.",
  },
  {
    title: "Computed default",
    code: `function makeId(prefix, id = prefix + "-" + Date.now()) {\n  return id;\n}\n\nconsole.log(makeId("user"));`,
    explanation: "Defaults can depend on earlier parameters.",
  },
  {
    title: "Undefined only",
    code: `function label(status = "pending") {\n  return status;\n}\n\nconsole.log(label(null)); // null, not default\nconsole.log(label(undefined)); // uses default`,
    explanation: "Defaults only apply when the argument is undefined.",
  },
];

const mistakes = [
  { title: "Assuming null uses default", fix: "Defaults apply only to undefined, not null." },
  { title: "Overusing defaults", fix: "Use defaults for optional values, not required inputs." },
  { title: "Complex defaults", fix: "Keep defaults simple or move logic into the function body." },
];

const faqs = [
  { q: "When do defaults apply?", a: "Only when the argument is undefined." },
  { q: "Can defaults reference other params?", a: "Yes, as long as the referenced param appears earlier." },
  { q: "Do defaults work with destructuring?", a: "Yes, you can provide defaults in destructured params." },
];

const related = [
  { label: "Parameters and Arguments", href: "/javascript/functions/parameters-arguments" },
  { label: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
  { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
];

export default function JavascriptDefaultParametersPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Default Parameters"
      intro={[
        "Default parameters let you assign fallback values when arguments are missing.",
        "They simplify functions and reduce manual checks inside the body.",
      ]}
      why={[
        "Functions often accept optional inputs. Defaults make those cases clean and predictable.",
        "They also make function signatures more self-documenting.",
      ]}
      syntax={["function name(param = defaultValue) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `function greet(name) {\n  if (name === undefined) {\n    name = "Guest";\n  }\n  return "Hello " + name;\n}`,
        with: `function greet(name = "Guest") {\n  return "Hello " + name;\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "When do default parameters apply?", a: "When the argument is undefined." },
        { q: "Do defaults apply to null?", a: "No, null is treated as a real value." },
        { q: "Can defaults be expressions?", a: "Yes, they are evaluated at call time." },
      ]}
      practice={{
        prompt: "Practice: Create a function that formats currency with a default symbol.",
        starterCode: `// TODO: function format(amount, symbol = \"$\")\n`,
        solution: `function format(amount, symbol = \"$\") {\n  return symbol + amount.toFixed(2);\n}\n\nconsole.log(format(10));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Defaults Demo",
        description: "Try calling the function with and without arguments.",
      }}
    />
  );
}
