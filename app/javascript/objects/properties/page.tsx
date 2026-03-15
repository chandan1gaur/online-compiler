import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object Properties",
  description: "Learn how to read, write, and manage object properties in JavaScript.",
  keywords: ["object properties", "javascript objects", "dot notation", "bracket notation"],
  openGraph: {
    title: "JavaScript Object Properties",
    description: "Learn how to read, write, and manage object properties in JavaScript.",
    url: "/javascript/objects/properties",
    type: "article",
    images: ["/og-object-properties.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Properties",
    description: "Learn how to read, write, and manage object properties in JavaScript.",
    images: ["/og-object-properties.svg"],
  },
  alternates: { canonical: "/javascript/objects/properties" },
};

const sections = [
  {
    heading: "Access Properties",
    paragraphs: [
      "Use dot notation for static keys and bracket notation for dynamic keys.",
      "Bracket notation also allows keys with spaces or special characters.",
    ],
  },
  {
    heading: "Add and Update",
    paragraphs: [
      "You can add new properties or update existing ones with simple assignment.",
      "Objects are mutable by default.",
    ],
  },
  {
    heading: "Delete and Check",
    paragraphs: [
      "Use delete to remove a property and in or hasOwn to check existence.",
      "Prefer Object.hasOwn for own properties only.",
    ],
  },
];

const examples = [
  {
    title: "Dot vs bracket",
    code: `const user = { name: "Ava", "role type": "admin" };\n\nconsole.log(user.name);\nconsole.log(user["role type"]);`,
    explanation: "Dot for simple keys, bracket for special keys.",
  },
  {
    title: "Dynamic key",
    code: `const key = "email";\nconst user = {};\nuser[key] = "a@example.com";\n\nconsole.log(user.email);`,
    explanation: "Use bracket notation for dynamic keys.",
  },
  {
    title: "Update",
    code: `const user = { name: "Ava" };\nuser.name = "Riya";\n\nconsole.log(user);`,
    explanation: "Assignment updates properties.",
  },
  {
    title: "Delete",
    code: `const user = { name: "Ava", age: 22 };\ndelete user.age;\n\nconsole.log(user);`,
    explanation: "delete removes a property.",
  },
];

const mistakes = [
  { title: "Using dot for dynamic keys", fix: "Use bracket notation for variables as keys." },
  { title: "Deleting in performance-critical loops", fix: "Prefer creating new objects when possible." },
  { title: "Assuming property exists", fix: "Check with in or Object.hasOwn before access." },
];

const faqs = [
  { q: "When should I use bracket notation?", a: "When the key is dynamic or has special characters." },
  { q: "How do I check if a property exists?", a: "Use key in obj or Object.hasOwn(obj, key)." },
  { q: "Does delete remove nested properties?", a: "It removes only the property you target." },
];

const related = [
  { label: "Object Methods", href: "/javascript/objects/methods" },
  { label: "Object.keys()", href: "/javascript/objects/keys" },
  { label: "Optional Chaining", href: "/javascript/objects/optional-chaining" },
];

export default function JavascriptObjectPropertiesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object Properties"
      intro={[
        "Object properties store values under keys, and you can access them using dot or bracket notation.",
        "Understanding property access is essential for working with real data structures.",
      ]}
      why={[
        "Most data in JavaScript is represented as objects with properties.",
        "Knowing how to access and update properties prevents common bugs.",
      ]}
      syntax={["obj.key", "obj['key']", "delete obj.key"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const value = obj['dynamicKey'];`,
        with: `const value = obj[dynamicKey];`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Dot vs bracket access?", a: "Dot for static keys, bracket for dynamic or special keys." },
        { q: "How do you delete a property?", a: "Use delete obj.key." },
        { q: "How do you check existence?", a: "Use in or Object.hasOwn." },
      ]}
      practice={{
        prompt: "Practice: Add a property called role to a user object and log it.",
        starterCode: `const user = { name: "Ava" };\n// TODO: add role\n`,
        solution: `const user = { name: "Ava" };\nuser.role = "admin";\nconsole.log(user.role);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Properties Demo",
        description: "Try accessing properties with dot and bracket notation.",
      }}
    />
  );
}
