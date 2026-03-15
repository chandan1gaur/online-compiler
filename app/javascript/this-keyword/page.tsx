import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript this Keyword",
  description: "Learn how the this keyword works in JavaScript with examples and common pitfalls.",
  keywords: ["this keyword", "javascript this", "object methods"],
  openGraph: {
    title: "JavaScript this Keyword",
    description: "Learn how the this keyword works in JavaScript with examples and common pitfalls.",
    url: "/javascript/this-keyword",
    type: "article",
    images: ["/og-this.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript this Keyword",
    description: "Learn how the this keyword works in JavaScript with examples and common pitfalls.",
    images: ["/og-this.svg"],
  },
  alternates: { canonical: "/javascript/this-keyword" },
};

const sections = [
  {
    heading: "Call Site Matters",
    paragraphs: [
      "this depends on how a function is called, not where it is defined.",
      "In methods, this refers to the object before the dot.",
    ],
  },
  {
    heading: "Arrow Functions",
    paragraphs: [
      "Arrow functions do not have their own this.",
      "They capture this from the surrounding scope.",
    ],
  },
  {
    heading: "Common Pitfalls",
    paragraphs: [
      "Losing this happens when you pass a method as a callback.",
      "Use bind, call, or arrow wrappers to keep context.",
    ],
  },
];

const examples = [
  {
    title: "Method call",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconsole.log(user.greet());`,
    explanation: "this refers to user.",
  },
  {
    title: "Detached function",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconst fn = user.greet;\nconsole.log(fn());`,
    explanation: "this is undefined in strict mode when detached.",
  },
  {
    title: "Bind this",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconst bound = user.greet.bind(user);\nconsole.log(bound());`,
    explanation: "bind fixes the context.",
  },
  {
    title: "Arrow in callback",
    code: `const team = {\n  name: "Blue",\n  members: ["A", "B"],\n  list() {\n    return this.members.map((m) => this.name + "-" + m);\n  }\n};\n\nconsole.log(team.list());`,
    explanation: "Arrow function uses outer this.",
  },
];

const mistakes = [
  { title: "Using this in arrow methods", fix: "Arrows do not bind this; use method syntax instead." },
  { title: "Passing methods directly", fix: "Bind the method or wrap it in a function." },
  { title: "Assuming this is global", fix: "In strict mode, this is undefined in standalone calls." },
];

const faqs = [
  { q: "What does this refer to?", a: "It depends on how the function is called." },
  { q: "Do arrow functions have this?", a: "No, they capture this from their scope." },
  { q: "How do I keep this in callbacks?", a: "Use bind or arrow functions." },
];

const related = [
  { label: "Object Methods", href: "/javascript/objects/methods" },
  { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
  { label: "Function Expression", href: "/javascript/functions/function-expression" },
];

export default function JavascriptThisKeywordPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript this Keyword"
      intro={[
        "The this keyword refers to the object a function is called on.",
        "Its value changes based on the call site.",
      ]}
      why={[
        "Misunderstanding this is a common source of bugs.",
        "Knowing how this works makes methods and callbacks safer.",
      ]}
      syntax={["obj.method()", "fn.call(obj)", "fn.bind(obj)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const fn = user.greet;\nfn(); // this is undefined`,
        with: `const fn = user.greet.bind(user);\nfn(); // this is user`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What determines this?", a: "The way a function is called." },
        { q: "Why use bind?", a: "To lock this to a specific object." },
        { q: "Does arrow have this?", a: "No, arrows use lexical this." },
      ]}
      practice={{
        prompt: "Practice: Fix a method call so this refers to the object.",
        starterCode: `const user = { name: "Ava", greet() { return "Hi " + this.name; } };\nconst fn = user.greet;\n// TODO: call with correct this\n`,
        solution: `const user = { name: "Ava", greet() { return "Hi " + this.name; } };\nconst fn = user.greet.bind(user);\nconsole.log(fn());`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run this Demo",
        description: "Try detaching methods and see how this changes.",
      }}
    />
  );
}
