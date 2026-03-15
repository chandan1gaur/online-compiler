import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Property Shorthand",
  description: "Learn object property shorthand in JavaScript with syntax, examples, and best practices.",
  keywords: ["property shorthand", "object shorthand", "javascript objects"],
  openGraph: {
    title: "JavaScript Property Shorthand",
    description: "Learn object property shorthand in JavaScript with syntax, examples, and best practices.",
    url: "/javascript/objects/shorthand",
    type: "article",
    images: ["/og-object-shorthand.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Property Shorthand",
    description: "Learn object property shorthand in JavaScript with syntax, examples, and best practices.",
    images: ["/og-object-shorthand.svg"],
  },
  alternates: { canonical: "/javascript/objects/shorthand" },
};

const sections = [
  {
    heading: "Shorter Object Literals",
    paragraphs: [
      "Property shorthand lets you write { name } instead of { name: name }.",
      "It makes object literals cleaner and less repetitive.",
    ],
  },
  {
    heading: "Method Shorthand",
    paragraphs: [
      "Methods can also use shorthand: greet() { ... }.",
      "This keeps object definitions compact.",
    ],
  },
  {
    heading: "Use Cases",
    paragraphs: [
      "Shorthand is common when creating objects from variables.",
      "It is especially useful in factory functions and reducers.",
    ],
  },
];

const examples = [
  {
    title: "Property shorthand",
    code: `const name = "Ava";\nconst role = "admin";\nconst user = { name, role };\n\nconsole.log(user);`,
    explanation: "Shorthand uses variable names as keys.",
  },
  {
    title: "Method shorthand",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconsole.log(user.greet());`,
    explanation: "Methods can be defined without the function keyword.",
  },
  {
    title: "Factory function",
    code: `function createUser(name, role) {\n  return { name, role };\n}\n\nconsole.log(createUser("Ava", "admin"));`,
    explanation: "Shorthand keeps factory functions concise.",
  },
  {
    title: "Computed with shorthand",
    code: `const key = "status";\nconst value = "active";\nconst obj = { [key]: value };\n\nconsole.log(obj);`,
    explanation: "Combine shorthand with computed keys.",
  },
];

const mistakes = [
  { title: "Forgetting variable names", fix: "Shorthand only works when variable names match desired keys." },
  { title: "Overusing shorthand", fix: "Use explicit keys when it improves clarity." },
  { title: "Confusing method shorthand", fix: "Remember method shorthand still creates a function." },
];

const faqs = [
  { q: "When can I use property shorthand?", a: "When variable names match the object keys you want." },
  { q: "Is method shorthand different from function?", a: "It is just shorter syntax; behavior is the same." },
  { q: "Can I use shorthand with computed keys?", a: "Yes, using [key]: value syntax." },
];

const related = [
  { label: "Object Methods", href: "/javascript/objects/methods" },
  { label: "Object Destructuring", href: "/javascript/objects/destructuring" },
  { label: "Spread in Objects", href: "/javascript/objects/spread" },
];

export default function JavascriptPropertyShorthandPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Property Shorthand"
      intro={[
        "Property shorthand reduces repetition when object keys match variable names.",
        "It keeps object literals short and readable.",
      ]}
      why={[
        "Shorthand improves readability in object creation and factory functions.",
        "It is widely used in modern JavaScript.",
      ]}
      syntax={["const obj = { name, role }", "const obj = { greet() { ... } }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const user = { name: name, role: role };`,
        with: `const user = { name, role };`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is property shorthand?", a: "A shorter way to define object properties when key and variable name match." },
        { q: "Does shorthand change behavior?", a: "No, it is just syntax sugar." },
        { q: "When is explicit better?", a: "When the key name differs or clarity is needed." },
      ]}
      practice={{
        prompt: "Practice: Create an object with name and age using shorthand.",
        starterCode: `const name = "Ava";\nconst age = 22;\n// TODO: create object\n`,
        solution: `const name = "Ava";\nconst age = 22;\nconst user = { name, age };\nconsole.log(user);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Shorthand Demo",
        description: "Try creating objects with different variable names.",
      }}
    />
  );
}
