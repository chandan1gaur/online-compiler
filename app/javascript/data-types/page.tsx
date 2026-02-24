import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Data Types Tutorial",
  description:
    "Learn JavaScript primitive and reference data types with examples, type checks, and conversion rules.",
  alternates: { canonical: "/javascript/data-types" },
};

export default function JavascriptDataTypesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Data Types: Primitives and Objects"
      intro="Data types define how values behave in memory and operations. Strong type awareness prevents runtime errors and logical bugs."
      why="Type confusion causes common issues like incorrect comparisons, unexpected coercion, and method errors."
      sections={[
        {
          heading: "Primitive Types and Their Behavior",
          paragraphs: [
            "JavaScript primitives include string, number, bigint, boolean, undefined, null, and symbol.",
            "Primitives are immutable values. Operations create new values rather than changing original primitive data.",
            "typeof helps with quick checks, but note that typeof null returns object due to historical behavior.",
          ],
        },
        {
          heading: "Reference Types and Mutation",
          paragraphs: [
            "Objects, arrays, and functions are reference types. Assignment copies the reference, not deep content.",
            "Mutating through one reference affects all references pointing to same object.",
            "Use spread or structuredClone for safer copy patterns when immutability is needed.",
          ],
        },
      ]}
      examples={[
        {
          title: "Primitive Type Checks",
          code: `const user = "Asha";
const score = 91;
const active = true;
let note;
const nothing = null;

console.log(typeof user);    // string
console.log(typeof score);   // number
console.log(typeof active);  // boolean
console.log(typeof note);    // undefined
console.log(typeof nothing); // object (legacy behavior)`,
          explanation: "Use type checks before method calls for safer code.",
        },
        {
          title: "Reference Mutation",
          code: `const a = { theme: "light" };
const b = a;
b.theme = "dark";
console.log(a.theme); // dark`,
          explanation: "Both variables point to same object in memory.",
        },
        {
          title: "Shallow Copy with Spread",
          code: `const original = { name: "Ravi", city: "Pune" };
const copied = { ...original };
copied.city = "Delhi";

console.log(original.city); // Pune
console.log(copied.city);   // Delhi`,
          explanation: "Spread creates a new top-level object reference.",
        },
      ]}
      mistakes={[
        {
          title: "Using == with mixed types",
          fix: "Prefer strict equality (===) to avoid coercion surprises.",
        },
        {
          title: "Treating null and undefined as same always",
          fix: "Handle them intentionally based on business logic.",
        },
        {
          title: "Assuming object assignment clones data",
          fix: "Use copy patterns when independent objects are required.",
        },
      ]}
      faqs={[
        {
          q: "How many primitive types exist in JavaScript?",
          a: "Seven: string, number, bigint, boolean, undefined, null, and symbol.",
        },
        {
          q: "Why does typeof null return object?",
          a: "It is a long-standing language quirk kept for backward compatibility.",
        },
        {
          q: "How can I deep copy objects safely?",
          a: "Use structuredClone where available, or robust deep-copy strategies based on data structure.",
        },
        {
          q: "Is array a primitive or object?",
          a: "Array is a reference type (object).",
        },
      ]}
      related={[
        { label: "Variables", href: "/javascript/variables" },
        { label: "Operators", href: "/javascript/operators" },
        { label: "Objects", href: "/javascript/objects" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
