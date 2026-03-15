import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Objects: Complete Beginner Guide",
  description:
    "Learn JavaScript objects with properties, methods, destructuring, and common utilities like Object.keys, values, and entries.",
  keywords: [
    "javascript objects",
    "object properties",
    "object methods",
    "object destructuring",
    "object keys",
  ],
  openGraph: {
    title: "JavaScript Objects",
    description:
      "Learn JavaScript objects with properties, methods, destructuring, and common utilities like Object.keys, values, and entries.",
    url: "/javascript/objects",
    type: "article",
    images: ["/og-objects.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Objects",
    description:
      "Learn JavaScript objects with properties, methods, destructuring, and common utilities like Object.keys, values, and entries.",
    images: ["/og-objects.svg"],
  },
  alternates: { canonical: "/javascript/objects" },
};

const sections = [
  {
    heading: "Key-Value Data",
    paragraphs: [
      "Objects store data in key-value pairs, making them great for structured information.",
      "They power most real-world data models in JavaScript.",
    ],
    bullets: ["Use objects for named fields.", "Access values by key.", "Nest objects for deeper structures."],
  },
  {
    heading: "Properties and Methods",
    paragraphs: [
      "Properties store values and methods store functions.",
      "Methods often use the this keyword to access other properties.",
    ],
  },
  {
    heading: "Modern Utilities",
    paragraphs: [
      "Use Object.keys, Object.values, and Object.entries to inspect objects.",
      "Use Object.assign and spread to copy or merge objects.",
    ],
  },
  {
    heading: "Destructuring",
    paragraphs: [
      "Destructuring lets you unpack object properties into variables.",
      "It reduces repetition and makes code cleaner.",
    ],
  },
];

const examples = [
  {
    title: "Create an object",
    code: `const user = {\n  name: "Ava",\n  age: 22,\n};\n\nconsole.log(user.name);`,
    explanation: "Objects group related data under named keys.",
  },
  {
    title: "Add and update",
    code: `const user = { name: "Ava" };\nuser.age = 22;\nuser.name = "Riya";\n\nconsole.log(user);`,
    explanation: "You can add or update properties anytime.",
  },
  {
    title: "Methods",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconsole.log(user.greet());`,
    explanation: "Methods are functions stored on objects.",
  },
  {
    title: "Destructuring",
    code: `const user = { name: "Ava", role: "admin" };\nconst { name, role } = user;\n\nconsole.log(name, role);`,
    explanation: "Destructure to avoid repeated user.name access.",
  },
];

const mistakes = [
  { title: "Using dot for dynamic keys", fix: "Use bracket notation for dynamic property names." },
  { title: "Mutating shared objects", fix: "Clone with spread or Object.assign when needed." },
  { title: "Forgetting this in methods", fix: "Use this.property to access other fields inside methods." },
];

const faqs = [
  { q: "Are objects ordered?", a: "Property order exists but should not be relied on for logic." },
  { q: "How do I copy an object?", a: "Use spread: const copy = { ...obj }." },
  { q: "What is a method?", a: "A function stored as a property of an object." },
];

const related = [
  { label: "Object Properties", href: "/javascript/objects/properties" },
  { label: "Object Methods", href: "/javascript/objects/methods" },
  { label: "Object Destructuring", href: "/javascript/objects/destructuring" },
  { label: "this Keyword", href: "/javascript/this-keyword" },
  { label: "Object.keys()", href: "/javascript/objects/keys" },
];

export default function JavascriptObjectsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Objects"
      intro={[
        "Objects are the most common data structure in JavaScript for representing structured data.",
        "They store information as key-value pairs and can include methods.",
      ]}
      why={[
        "Most app data looks like objects: users, settings, products, and more.",
        "Understanding objects is essential for working with real-world JavaScript code.",
      ]}
      syntax={["const obj = { key: value }", "obj.key", "obj['key']"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const name = user.name;\nconst role = user.role;`,
        with: `const { name, role } = user;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is an object?", a: "A collection of key-value pairs." },
        { q: "Dot vs bracket access?", a: "Dot for static keys, bracket for dynamic keys." },
        { q: "How do you add a property?", a: "Assign with obj.newKey = value or obj['newKey'] = value." },
      ]}
      practice={{
        prompt: "Practice: Create an object for a book with title and author, then log both.",
        starterCode: `// TODO: create book object\n`,
        solution: `const book = { title: "Clean Code", author: "Robert Martin" };\nconsole.log(book.title, book.author);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Objects Demo",
        description: "Try adding and updating properties on the object.",
      }}
    />
  );
}
