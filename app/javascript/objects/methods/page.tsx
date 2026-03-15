import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Object Methods",
  description: "Learn how to define and use methods inside JavaScript objects.",
  keywords: ["object methods", "javascript objects", "this keyword"],
  openGraph: {
    title: "JavaScript Object Methods",
    description: "Learn how to define and use methods inside JavaScript objects.",
    url: "/javascript/objects/methods",
    type: "article",
    images: ["/og-object-methods.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Methods",
    description: "Learn how to define and use methods inside JavaScript objects.",
    images: ["/og-object-methods.svg"],
  },
  alternates: { canonical: "/javascript/objects/methods" },
};

const sections = [
  {
    heading: "Functions as Properties",
    paragraphs: [
      "Methods are functions stored on objects.",
      "They can access other properties using this.",
    ],
  },
  {
    heading: "Method Shorthand",
    paragraphs: [
      "You can define methods using shorthand syntax.",
      "It makes objects cleaner and easier to read.",
    ],
  },
  {
    heading: "this Binding",
    paragraphs: [
      "this refers to the object the method is called on.",
      "Be careful when passing methods as callbacks.",
    ],
  },
];

const examples = [
  {
    title: "Basic method",
    code: `const user = {\n  name: "Ava",\n  greet: function() {\n    return "Hi " + this.name;\n  }\n};\n\nconsole.log(user.greet());`,
    explanation: "Methods can access properties via this.",
  },
  {
    title: "Shorthand",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconsole.log(user.greet());`,
    explanation: "Method shorthand is concise.",
  },
  {
    title: "Method as callback",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconst fn = user.greet;\nconsole.log(fn()); // this is undefined in strict mode`,
    explanation: "this depends on call site.",
  },
  {
    title: "Bind this",
    code: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};\n\nconst bound = user.greet.bind(user);\nconsole.log(bound());`,
    explanation: "bind fixes this to the object.",
  },
];

const mistakes = [
  { title: "Using arrow for methods", fix: "Arrow functions do not have their own this." },
  { title: "Losing this in callbacks", fix: "Use bind or wrap in another function." },
  { title: "Overusing methods for data", fix: "Store data as properties, logic as methods." },
];

const faqs = [
  { q: "What is a method?", a: "A function stored as an object property." },
  { q: "Can methods use this?", a: "Yes, this refers to the object the method is called on." },
  { q: "Should I use arrow functions for methods?", a: "Usually no, because arrows do not bind this." },
];

const related = [
  { label: "this Keyword", href: "/javascript/this-keyword" },
  { label: "Object Properties", href: "/javascript/objects/properties" },
  { label: "Function Expressions", href: "/javascript/functions/function-expression" },
];

export default function JavascriptObjectMethodsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Object Methods"
      intro={[
        "Object methods are functions attached to objects, used to operate on their data.",
        "They often rely on this to access other properties.",
      ]}
      why={[
        "Methods keep logic close to the data it uses, which makes code more readable.",
        "Understanding this inside methods prevents bugs.",
      ]}
      syntax={["const obj = { method() { ... } }", "obj.method()"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const greet = function(user) {\n  return "Hi " + user.name;\n};`,
        with: `const user = {\n  name: "Ava",\n  greet() {\n    return "Hi " + this.name;\n  }\n};`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is this in a method?", a: "It refers to the object that called the method." },
        { q: "Why avoid arrow methods?", a: "Arrows do not have their own this." },
        { q: "How do you fix this?", a: "Use bind or call the method on the object." },
      ]}
      practice={{
        prompt: "Practice: Create an object with a method that returns a full name.",
        starterCode: `const user = { first: "Ava", last: "Roy" };\n// TODO: add fullName method\n`,
        solution: `const user = {\n  first: "Ava",\n  last: "Roy",\n  fullName() {\n    return this.first + " " + this.last;\n  }\n};\n\nconsole.log(user.fullName());`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Methods Demo",
        description: "Try calling the method after changing the name.",
      }}
    />
  );
}
