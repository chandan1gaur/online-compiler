import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Array Methods Tutorial",
  description:
    "Deep tutorial on JavaScript array methods including map, filter, reduce, find, sort, and interview patterns.",
  alternates: { canonical: "/javascript/array-methods" },
};

export default function JavascriptArrayMethodsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Array Methods: map, filter, reduce and More"
      intro="Array methods are essential for transforming and processing data in modern JavaScript applications."
      why="Clean array operations improve readability, reduce loop bugs, and accelerate feature development."
      sections={[
        {
          heading: "Transformation vs Selection vs Aggregation",
          paragraphs: [
            "Use map to transform each element into new form.",
            "Use filter to keep only matching elements.",
            "Use reduce for aggregated output such as totals, grouped objects, or summary metrics.",
          ],
        },
        {
          heading: "Searching and Sorting Patterns",
          paragraphs: [
            "Use find for first match, filter for all matches, and includes for simple primitive presence checks.",
            "sort mutates arrays. Clone with spread before sorting when immutability matters.",
          ],
        },
      ]}
      examples={[
        {
          title: "Pipeline with map/filter/reduce",
          code: `const orders = [
  { id: 1, amount: 500, paid: true },
  { id: 2, amount: 1200, paid: false },
  { id: 3, amount: 750, paid: true },
];

const paidTotal = orders
  .filter((o) => o.paid)
  .map((o) => o.amount)
  .reduce((sum, amt) => sum + amt, 0);

console.log(paidTotal);`,
          explanation: "A standard business logic flow in dashboards and reports.",
        },
        {
          title: "find vs filter",
          code: `const products = [
  { sku: "A1", stock: 0 },
  { sku: "B2", stock: 12 },
  { sku: "C3", stock: 5 },
];

console.log(products.find((p) => p.stock > 0));
console.log(products.filter((p) => p.stock > 0));`,
          explanation: "find gives first match; filter gives full list.",
        },
        {
          title: "Immutable Sort",
          code: `const nums = [9, 2, 6, 1];
const sorted = [...nums].sort((a, b) => a - b);
console.log(nums);   // original intact
console.log(sorted);`,
          explanation: "Clone first to avoid mutating source array.",
        },
      ]}
      mistakes={[
        {
          title: "Using map for side effects",
          fix: "Use forEach for side effects; reserve map for returned transformed arrays.",
        },
        {
          title: "No initial value in reduce",
          fix: "Pass explicit initial accumulator for predictable behavior.",
        },
        {
          title: "Mutating source array unexpectedly",
          fix: "Clone before using sort/splice when immutable behavior is required.",
        },
      ]}
      faqs={[
        {
          q: "Is reduce better than loops?",
          a: "Use whichever is clearer. reduce is powerful but should remain readable.",
        },
        {
          q: "Does sort always mutate array?",
          a: "Yes, native sort mutates. Clone first if you need original preserved.",
        },
        {
          q: "Should I chain many methods in one line?",
          a: "Only while readable. Break into named steps when logic grows complex.",
        },
        {
          q: "Which array methods are most asked in interviews?",
          a: "map, filter, reduce, find, sort, and flat/flatMap are frequently discussed.",
        },
      ]}
      related={[
        { label: "Functions", href: "/javascript/functions" },
        { label: "Async/Await", href: "/javascript/async-await" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
