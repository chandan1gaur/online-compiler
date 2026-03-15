import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript for...of Loop: Iterating Values",
  description: "Learn JavaScript for...of loops for iterating values in arrays, strings, and iterables.",
  keywords: ["javascript for of", "for...of loop", "iterate values"],
  openGraph: {
    title: "JavaScript for...of Loop",
    description: "Learn JavaScript for...of loops for iterating values in arrays, strings, and iterables.",
    url: "/javascript/loops/for-of-loop",
    type: "article",
    images: ["/og-for-of.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript for...of Loop",
    description: "Learn JavaScript for...of loops for iterating values in arrays, strings, and iterables.",
    images: ["/og-for-of.svg"],
  },
  alternates: { canonical: "/javascript/loops/for-of-loop" },
};

const sections = [
  {
    heading: "Iterate Values",
    paragraphs: [
      "for...of iterates over values from arrays, strings, maps, sets, and other iterables.",
      "It is the most readable way to loop over arrays when you only need values.",
    ],
  },
  {
    heading: "Works with Strings",
    paragraphs: [
      "for...of can iterate over string characters one by one.",
      "This is useful for parsing and validation.",
    ],
  },
  {
    heading: "Breaking and Continuing",
    paragraphs: [
      "You can use break and continue inside for...of loops.",
      "This gives you full control over the iteration.",
    ],
  },
];

const examples = [
  {
    title: "Array values",
    code: `const items = ["a", "b", "c"];\n\nfor (const item of items) {\n  console.log(item);\n}`,
    explanation: "for...of iterates values directly.",
  },
  {
    title: "String characters",
    code: `const word = "code";\n\nfor (const char of word) {\n  console.log(char);\n}`,
    explanation: "Each iteration yields one character.",
  },
  {
    title: "Map values",
    code: `const map = new Map([["a", 1], ["b", 2]]);\n\nfor (const [key, value] of map) {\n  console.log(key, value);\n}`,
    explanation: "for...of works with Maps and Sets.",
  },
  {
    title: "Break early",
    code: `const nums = [1, 2, 3, 4];\n\nfor (const n of nums) {\n  if (n === 3) break;\n  console.log(n);\n}`,
    explanation: "Use break to exit early.",
  },
];

const mistakes = [
  { title: "Using for...of on objects", fix: "Objects are not iterable; use Object.keys or for...in instead." },
  { title: "Needing index but using for...of", fix: "Use entries() or a classic for loop for indices." },
  { title: "Mutating array while iterating", fix: "Be careful when adding or removing items during the loop." },
];

const faqs = [
  { q: "What can for...of iterate?", a: "Any iterable: arrays, strings, maps, sets, and more." },
  { q: "How do I get the index?", a: "Use array.entries() or a traditional for loop." },
  { q: "Can I use break and continue?", a: "Yes, just like other loops." },
];

const related = [
  { label: "for...in Loop", href: "/javascript/loops/for-in-loop" },
  { label: "for Loop", href: "/javascript/loops/for-loop" },
  { label: "Loops Overview", href: "/javascript/loops" },
];

export default function JavascriptForOfLoopPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript for...of Loop"
      intro={[
        "The for...of loop iterates over values in arrays and other iterables.",
        "It is clean, readable, and avoids manual indexing.",
      ]}
      why={[
        "Most of the time you care about values, not indexes. for...of keeps that intent clear.",
        "It also works with strings, maps, and sets, so it is versatile.",
      ]}
      syntax={["for (const value of iterable) { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const items = ["a", "b"];\nfor (let i = 0; i < items.length; i++) {\n  console.log(items[i]);\n}`,
        with: `const items = ["a", "b"];\nfor (const item of items) {\n  console.log(item);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does for...of iterate?", a: "Values from any iterable like arrays or strings." },
        { q: "How do you get index with for...of?", a: "Use array.entries() and destructure index and value." },
        { q: "Why choose for...of over for?", a: "It is more readable when you only need values." },
      ]}
      practice={{
        prompt: "Practice: Loop through an array of names and print each one.",
        starterCode: `const names = ["Ava", "Lee", "Ravi"];\n// TODO: print each name\n`,
        solution: `const names = ["Ava", "Lee", "Ravi"];\nfor (const name of names) {\n  console.log(name);\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run for...of Demo",
        description: "Try iterating different arrays and strings with for...of.",
      }}
    />
  );
}
