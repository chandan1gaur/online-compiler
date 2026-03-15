import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Spread Operator in Functions",
  description: "Learn how to use the spread operator in JavaScript function calls and definitions.",
  keywords: ["spread operator", "javascript functions", "..."],
  openGraph: {
    title: "JavaScript Spread Operator in Functions",
    description: "Learn how to use the spread operator in JavaScript function calls and definitions.",
    url: "/javascript/functions/spread-operator",
    type: "article",
    images: ["/og-spread.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Spread Operator in Functions",
    description: "Learn how to use the spread operator in JavaScript function calls and definitions.",
    images: ["/og-spread.svg"],
  },
  alternates: { canonical: "/javascript/functions/spread-operator" },
};

const sections = [
  {
    heading: "Expand Arrays",
    paragraphs: [
      "Spread expands an array into individual arguments.",
      "It makes calling functions with array data concise.",
    ],
  },
  {
    heading: "Combine with Rest",
    paragraphs: [
      "Spread and rest look the same but do opposite jobs.",
      "Spread expands; rest collects.",
    ],
  },
  {
    heading: "Practical Uses",
    paragraphs: [
      "Use spread with Math functions, copy arrays, and pass dynamic arguments.",
      "It improves readability over apply or manual loops.",
    ],
  },
];

const examples = [
  {
    title: "Spread into function",
    code: `const nums = [3, 7, 2];\nconsole.log(Math.max(...nums));`,
    explanation: "Spread turns array items into separate arguments.",
  },
  {
    title: "Merge arguments",
    code: `function sum(a, b, c) {\n  return a + b + c;\n}\n\nconst parts = [1, 2, 3];\nconsole.log(sum(...parts));`,
    explanation: "Pass an array as parameters using spread.",
  },
  {
    title: "Clone arrays",
    code: `const original = [1, 2];\nconst copy = [...original, 3];\n\nconsole.log(copy);`,
    explanation: "Spread is a clean way to clone and extend arrays.",
  },
  {
    title: "With rest",
    code: `function logAll(...items) {\n  console.log(items);\n}\n\nconst values = ["a", "b"];\nlogAll(...values);`,
    explanation: "Spread and rest work well together.",
  },
];

const mistakes = [
  { title: "Confusing rest and spread", fix: "Rest collects, spread expands." },
  { title: "Spreading non-iterables", fix: "Spread only works on iterables like arrays and strings." },
  { title: "Overusing spread in hot loops", fix: "Be mindful of performance in tight loops." },
];

const faqs = [
  { q: "What does spread do?", a: "It expands an iterable into individual elements." },
  { q: "How is it different from rest?", a: "Rest collects arguments, spread expands them." },
  { q: "Can I spread objects into function args?", a: "No, objects are not iterable unless you use Object.values()." },
];

const related = [
  { label: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
  { label: "Parameters and Arguments", href: "/javascript/functions/parameters-arguments" },
  { label: "Array Methods", href: "/javascript/arrays" },
];

export default function JavascriptSpreadOperatorPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Spread Operator in Functions"
      intro={[
        "The spread operator (...) expands arrays or iterables into function arguments.",
        "It makes function calls with array data clean and readable.",
      ]}
      why={[
        "Without spread, you need apply or manual indexing to pass arrays as arguments.",
        "Spread makes your intent clear and your code concise.",
      ]}
      syntax={["fn(...iterable)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `const nums = [1, 2, 3];\nconsole.log(Math.max.apply(null, nums));`,
        with: `const nums = [1, 2, 3];\nconsole.log(Math.max(...nums));`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What does spread do in function calls?", a: "It expands an iterable into separate arguments." },
        { q: "Rest vs spread?", a: "Rest collects into an array; spread expands from an array." },
        { q: "Can you spread strings?", a: "Yes, strings are iterable and spread into characters." },
      ]}
      practice={{
        prompt: "Practice: Use spread to pass an array of three numbers into a function that multiplies them.",
        starterCode: `function multiply(a, b, c) {\n  return a * b * c;\n}\n\nconst values = [2, 3, 4];\n// TODO: call multiply with spread\n`,
        solution: `function multiply(a, b, c) {\n  return a * b * c;\n}\n\nconst values = [2, 3, 4];\nconsole.log(multiply(...values));`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Spread Demo",
        description: "Try spreading different arrays into Math.max.",
      }}
    />
  );
}
