import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Operators Tutorial",
  description:
    "Master JavaScript arithmetic, comparison, logical, assignment, and ternary operators with practical examples.",
  keywords: [
    "javascript operators",
    "arithmetic operators",
    "logical operators",
    "operator precedence",
    "js tutorial",
  ],
  alternates: { canonical: "/javascript/operators" },
};

export default function JavascriptOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Operators: Arithmetic, Comparison, Logical, and More"
      intro="Operators define how values are calculated, compared, and combined. Clear operator usage avoids silent logic bugs."
      why="Many bugs come from wrong operator choice, precedence confusion, or type coercion in comparisons."
      sections={[
        {
          heading: "Comparison and Logical Operators",
          paragraphs: [
            "Use strict equality operators (===, !==) to avoid implicit type conversion.",
            "Logical operators (&&, ||, !) are used for guard clauses and condition composition.",
            "Short-circuit behavior can simplify fallback values and safe access flows.",
          ],
        },
        {
          heading: "Assignment, Nullish, and Ternary Operators",
          paragraphs: [
            "Compound assignment operators (+=, -=, *=) reduce repetitive code.",
            "Nullish coalescing (??) handles null/undefined while preserving valid falsy values like 0 or empty string.",
            "Ternary operator is useful for concise branching, but nested ternary should be avoided for readability.",
          ],
        },
      ]}
      examples={[
        {
          title: "Strict vs Loose Equality",
          code: `console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(false == 0); // true
console.log(false === 0);// false`,
          explanation: "Use strict checks in production code for predictable behavior.",
        },
        {
          title: "Nullish Coalescing vs OR",
          code: `const count = 0;
console.log(count || 10); // 10
console.log(count ?? 10); // 0`,
          explanation: "?? is better when 0/empty-string are valid values.",
        },
        {
          title: "Ternary for UI Labels",
          code: `const score = 84;
const grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade);`,
          explanation: "Use ternary for compact decisions, keep complexity controlled.",
        },
      ]}
      mistakes={[
        {
          title: "Using loose equality everywhere",
          fix: "Prefer strict equality unless coercion is intentionally needed.",
        },
        {
          title: "Confusing || and ??",
          fix: "Use ?? when null/undefined fallback is intended, not all falsy values.",
        },
        {
          title: "Overusing nested ternary",
          fix: "Refactor to if/else for readability when branching grows.",
        },
      ]}
      faqs={[
        {
          q: "Should I ever use == in JavaScript?",
          a: "In most application code, use === for safer and clearer comparisons.",
        },
        {
          q: "What is short-circuit evaluation?",
          a: "Logical operators stop evaluation once result is determined.",
        },
        {
          q: "When to use ?? instead of ||?",
          a: "Use ?? when 0, false, or empty string should remain valid values.",
        },
        {
          q: "Is ternary faster than if/else?",
          a: "Performance difference is negligible; choose based on readability.",
        },
      ]}
      related={[
        { label: "Data Types", href: "/javascript/data-types" },
        { label: "Conditionals", href: "/javascript/conditionals" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
