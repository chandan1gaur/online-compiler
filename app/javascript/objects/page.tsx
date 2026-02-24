import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Objects Tutorial",
  description:
    "Deep tutorial on JavaScript objects, property access, methods, cloning, and object iteration patterns.",
  alternates: { canonical: "/javascript/objects" },
};

export default function JavascriptObjectsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Objects: Structure, Methods, and Practical Patterns"
      intro="Objects are core to modeling real-world entities in JavaScript. Mastering object behavior is essential for application architecture."
      why="Most business data is represented as objects. Weak object handling creates mutation bugs and unpredictable state."
      sections={[
        {
          heading: "Object Basics and Access Patterns",
          paragraphs: [
            "Use dot notation for known properties and bracket notation for dynamic keys.",
            "Objects can contain nested objects, arrays, and methods for behavior grouping.",
            "Optional chaining prevents crashes when intermediate properties are missing.",
          ],
        },
        {
          heading: "Cloning and Iteration",
          paragraphs: [
            "Spread syntax creates shallow copies. Nested objects still share references.",
            "Use Object.keys, Object.values, and Object.entries for iteration and transformations.",
            "Prefer immutable update patterns when managing UI or shared state.",
          ],
        },
      ]}
      examples={[
        {
          title: "Object Access and Optional Chaining",
          code: `const profile = {
  name: "Asha",
  address: { city: "Jaipur" },
};

console.log(profile.name);
console.log(profile.address?.city);
console.log(profile.company?.name); // undefined`,
          explanation: "Optional chaining prevents runtime errors on missing paths.",
        },
        {
          title: "Shallow Clone and Update",
          code: `const state = { theme: "light", fontSize: 14 };
const nextState = { ...state, theme: "dark" };
console.log(state.theme, nextState.theme);`,
          explanation: "Creates a new top-level object for safe state updates.",
        },
        {
          title: "Object.entries Iteration",
          code: `const stats = { users: 120, posts: 450, comments: 980 };
for (const [key, value] of Object.entries(stats)) {
  console.log(key, value);
}`,
          explanation: "entries provides key-value pairs for readable iteration.",
        },
      ]}
      mistakes={[
        {
          title: "Assuming spread deep clones nested objects",
          fix: "Use structured clone approaches for deep copy needs.",
        },
        {
          title: "Mutating shared objects directly",
          fix: "Use immutable update style to avoid side effects.",
        },
        {
          title: "No safe access for nested data",
          fix: "Use optional chaining and fallback values for uncertain data structures.",
        },
      ]}
      faqs={[
        {
          q: "Dot notation vs bracket notation, which is better?",
          a: "Use dot for static keys, bracket for dynamic keys or invalid identifier names.",
        },
        {
          q: "Does spread clone nested objects too?",
          a: "No, spread is shallow at top level only.",
        },
        {
          q: "How do I loop through object properties?",
          a: "Use Object.keys, Object.values, or Object.entries based on what you need.",
        },
        {
          q: "When should I freeze an object?",
          a: "Use Object.freeze when you need to prevent top-level mutation in strict scenarios.",
        },
      ]}
      related={[
        { label: "Data Types", href: "/javascript/data-types" },
        { label: "this Keyword", href: "/javascript/this-keyword" },
        { label: "Functions", href: "/javascript/functions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
