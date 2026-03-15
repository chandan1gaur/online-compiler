import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object.keys(): Get Property Names",
  description: "Learn Object.keys() with syntax, examples, and common use cases.",
  keywords: ["Object.keys", "javascript objects", "keys"],
  openGraph: {
    title: "JavaScript Object.keys()",
    description: "Learn Object.keys() with syntax, examples, and common use cases.",
    url: "/javascript/objects/keys",
    type: "article",
    images: ["/og-object-keys.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object.keys()",
    description: "Learn Object.keys() with syntax, examples, and common use cases.",
    images: ["/og-object-keys.svg"],
  },
  alternates: { canonical: "/javascript/objects/keys" },
};

const sections = [
  {
    heading: "List Keys",
    paragraphs: [
      "Object.keys returns an array of an object's own enumerable keys.",
      "It is useful for iteration and validation.",
    ],
  },
  {
    heading: "Pairs with values and entries",
    paragraphs: [
      "Use Object.values for values and Object.entries for key-value pairs.",
      "Together they cover most inspection use cases.",
    ],
  },
  {
    heading: "Non-Objects",
    paragraphs: [
      "Object.keys works on arrays too, returning index strings.",
      "It ignores properties in the prototype chain.",
    ],
  },
];

const examples = [
  {
    title: "Basic keys",
    code: `const user = { name: "Ava", role: "admin" };\nconst keys = Object.keys(user);\n\nconsole.log(keys);`,
    explanation: "Returns ['name', 'role'].",
  },
  {
    title: "Iterate",
    code: `const settings = { theme: "dark", layout: "grid" };\nObject.keys(settings).forEach((key) => {\n  console.log(key, settings[key]);\n});`,
    explanation: "Loop over keys to access values.",
  },
  {
    title: "Array keys",
    code: `const items = ["a", "b"];\nconsole.log(Object.keys(items)); // ['0','1']`,
    explanation: "Arrays are objects, so keys are indexes as strings.",
  },
  {
    title: "Count properties",
    code: `const user = { a: 1, b: 2, c: 3 };\nconst count = Object.keys(user).length;\n\nconsole.log(count);`,
    explanation: "Count properties by keys length.",
  },
];

const mistakes = [
  { title: "Expecting inherited keys", fix: "Object.keys returns only own enumerable properties." },
  { title: "Using keys for values", fix: "Use Object.values when you only need values." },
  { title: "Assuming numeric order", fix: "Key order exists but should not be relied on for logic." },
];

const faqs = [
  { q: "What does Object.keys return?", a: "An array of own enumerable property names." },
  { q: "Does it include inherited properties?", a: "No, only own properties." },
  { q: "Can I use it on arrays?", a: "Yes, it returns string indexes." },
];

const related = [
  { label: "Object.values()", href: "/javascript/objects/values" },
  { label: "Object.entries()", href: "/javascript/objects/entries" },
  { label: "Object Properties", href: "/javascript/objects/properties" },
];

export default function JavascriptObjectKeysPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object.keys()"
      intro={[
        "Object.keys returns an array of an object's own enumerable property names.",
        "It is commonly used for iteration and validation.",
      ]}
      why={[
        "When working with objects, you often need to list keys for loops or checks.",
        "Object.keys makes that simple and reliable.",
      ]}
      syntax={["Object.keys(obj)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `for (const key in obj) {\n  if (Object.hasOwn(obj, key)) {\n    console.log(key);\n  }\n}`,
        with: `Object.keys(obj).forEach((key) => console.log(key));`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does Object.keys return?", a: "An array of own enumerable keys." },
        { q: "Does it include inherited keys?", a: "No, only own properties." },
        { q: "Why use Object.keys over for...in?", a: "It avoids inherited properties without extra checks." },
      ]}
      practice={{
        prompt: "Practice: Count how many properties an object has using Object.keys.",
        starterCode: `const user = { name: "Ava", role: "admin" };\n// TODO: count keys\n`,
        solution: `const user = { name: "Ava", role: "admin" };\nconst count = Object.keys(user).length;\nconsole.log(count);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Object.keys Demo",
        description: "Try adding properties and see how the key list changes.",
      }}
    />
  );
}
