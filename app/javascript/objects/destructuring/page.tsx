import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object Destructuring",
  description: "Learn object destructuring in JavaScript with syntax, examples, and best practices.",
  keywords: ["object destructuring", "javascript objects", "destructuring"],
  openGraph: {
    title: "JavaScript Object Destructuring",
    description: "Learn object destructuring in JavaScript with syntax, examples, and best practices.",
    url: "/javascript/objects/destructuring",
    type: "article",
    images: ["/og-object-destructuring.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Destructuring",
    description: "Learn object destructuring in JavaScript with syntax, examples, and best practices.",
    images: ["/og-object-destructuring.svg"],
  },
  alternates: { canonical: "/javascript/objects/destructuring" },
};

const sections = [
  {
    heading: "Unpack Properties",
    paragraphs: [
      "Destructuring lets you pull properties into variables by name.",
      "It reduces repeated object.property access.",
    ],
  },
  {
    heading: "Defaults and Renaming",
    paragraphs: [
      "You can rename variables and provide default values.",
      "This is useful when data may be missing.",
    ],
  },
  {
    heading: "Nested Destructuring",
    paragraphs: [
      "Destructure nested objects carefully to avoid undefined errors.",
      "Combine with defaults when needed.",
    ],
  },
];

const examples = [
  {
    title: "Basic destructuring",
    code: `const user = { name: "Ava", role: "admin" };\nconst { name, role } = user;\n\nconsole.log(name, role);`,
    explanation: "Pull properties into variables.",
  },
  {
    title: "Rename",
    code: `const user = { name: "Ava" };\nconst { name: fullName } = user;\n\nconsole.log(fullName);`,
    explanation: "Rename properties during destructuring.",
  },
  {
    title: "Default values",
    code: `const user = { name: "Ava" };\nconst { name, age = 18 } = user;\n\nconsole.log(age);`,
    explanation: "Defaults fill missing properties.",
  },
  {
    title: "Nested destructuring",
    code: `const user = { profile: { city: "Pune" } };\nconst { profile: { city } } = user;\n\nconsole.log(city);`,
    explanation: "Destructure nested objects.",
  },
];

const mistakes = [
  { title: "Destructuring undefined", fix: "Provide defaults or check objects before destructuring." },
  { title: "Overusing nested patterns", fix: "Keep destructuring readable and shallow when possible." },
  { title: "Forgetting renames", fix: "Use name: alias syntax for clarity." },
];

const faqs = [
  { q: "What is object destructuring?", a: "It assigns properties to variables by name." },
  { q: "Can I rename properties?", a: "Yes, use const { prop: alias } = obj." },
  { q: "How do I set defaults?", a: "Use const { prop = defaultValue } = obj." },
];

const related = [
  { label: "Object Properties", href: "/javascript/objects/properties" },
  { label: "Array Destructuring", href: "/javascript/arrays/destructuring" },
  { label: "Optional Chaining", href: "/javascript/objects/optional-chaining" },
];

export default function JavascriptObjectDestructuringPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object Destructuring"
      intro={[
        "Object destructuring lets you extract properties into variables in a concise way.",
        "It makes code more readable by reducing repeated access.",
      ]}
      why={[
        "Destructuring is common in function parameters and API responses.",
        "It helps you write cleaner and more expressive code.",
      ]}
      syntax={["const { prop } = obj", "const { prop: alias = defaultValue } = obj"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const name = user.name;\nconst role = user.role;`,
        with: `const { name, role } = user;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "How do you rename a destructured property?", a: "Use const { prop: alias } = obj." },
        { q: "How do you set defaults?", a: "Use = defaultValue in the pattern." },
        { q: "Why is destructuring useful?", a: "It reduces repeated property access and improves readability." },
      ]}
      practice={{
        prompt: "Practice: Destructure a user object to extract name and city.",
        starterCode: `const user = { name: "Ava", address: { city: "Delhi" } };\n// TODO: destructure name and city\n`,
        solution: `const user = { name: "Ava", address: { city: "Delhi" } };\nconst { name, address: { city } } = user;\nconsole.log(name, city);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Destructuring Demo",
        description: "Try renaming and adding defaults.",
      }}
    />
  );
}
