import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Optional Chaining with Objects",
  description: "Learn optional chaining for safe object property access with examples and best practices.",
  keywords: ["optional chaining", "javascript objects", "safe access"],
  openGraph: {
    title: "JavaScript Optional Chaining with Objects",
    description: "Learn optional chaining for safe object property access with examples and best practices.",
    url: "/javascript/objects/optional-chaining",
    type: "article",
    images: ["/og-object-optional.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Optional Chaining with Objects",
    description: "Learn optional chaining for safe object property access with examples and best practices.",
    images: ["/og-object-optional.svg"],
  },
  alternates: { canonical: "/javascript/objects/optional-chaining" },
};

const sections = [
  {
    heading: "Safe Access",
    paragraphs: [
      "Optional chaining prevents errors when intermediate properties are null or undefined.",
      "It returns undefined instead of throwing a TypeError.",
    ],
  },
  {
    heading: "Nested Objects",
    paragraphs: [
      "Use optional chaining when reading deeply nested data from APIs.",
      "It keeps code short and safe.",
    ],
  },
  {
    heading: "Combine with Defaults",
    paragraphs: [
      "Pair optional chaining with nullish coalescing to provide fallbacks.",
      "This is a common pattern in UI code.",
    ],
  },
];

const examples = [
  {
    title: "Basic usage",
    code: `const user = { profile: { name: "Ava" } };\n\nconsole.log(user?.profile?.name);`,
    explanation: "Safe access to nested properties.",
  },
  {
    title: "Missing data",
    code: `const user = {};\nconsole.log(user?.profile?.name); // undefined`,
    explanation: "No error, returns undefined.",
  },
  {
    title: "With fallback",
    code: `const user = {};\nconst name = user?.profile?.name ?? "Guest";\n\nconsole.log(name);`,
    explanation: "Provide a default with ?? .",
  },
  {
    title: "Optional method",
    code: `const user = { getName: null };\nconst name = user.getName?.();\n\nconsole.log(name);`,
    explanation: "Safe method call if it exists.",
  },
];

const mistakes = [
  { title: "Using on undeclared variables", fix: "Optional chaining works only on declared variables." },
  { title: "Skipping required validation", fix: "If data must exist, validate it explicitly." },
  { title: "Assuming null result", fix: "Optional chaining returns undefined when it short-circuits." },
];

const faqs = [
  { q: "What does optional chaining return?", a: "Undefined when any part is null or undefined." },
  { q: "Can I use it with methods?", a: "Yes, use obj.method?.() syntax." },
  { q: "When should I avoid it?", a: "When a missing value should throw or be validated." },
];

const related = [
  { label: "Optional Chaining Operator", href: "/javascript/operators/optional-chaining-operator" },
  { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
  { label: "Object Properties", href: "/javascript/objects/properties" },
];

export default function JavascriptObjectOptionalChainingPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Optional Chaining with Objects"
      intro={[
        "Optional chaining lets you safely access nested properties without errors.",
        "It returns undefined if something is missing.",
      ]}
      why={[
        "API data is often incomplete. Optional chaining avoids crashes when fields are missing.",
        "It keeps code concise and readable.",
      ]}
      syntax={["obj?.prop", "obj?.nested?.prop", "obj.method?.()"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let name = "";\nif (user && user.profile) {\n  name = user.profile.name;\n}`,
        with: `const name = user?.profile?.name;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does optional chaining prevent?", a: "TypeErrors when accessing missing properties." },
        { q: "Does it return null?", a: "No, it returns undefined." },
        { q: "Can you use it on functions?", a: "Yes, with method?.() syntax." },
      ]}
      practice={{
        prompt: "Practice: Safely access user.address.city with optional chaining.",
        starterCode: `const user = {};\n// TODO: safely access city\n`,
        solution: `const user = {};\nconst city = user?.address?.city;\nconsole.log(city);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Optional Chaining Demo",
        description: "Try different object shapes to see safe access.",
      }}
    />
  );
}
