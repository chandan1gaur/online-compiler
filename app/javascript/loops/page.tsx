import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Loops Tutorial",
  description:
    "Learn JavaScript loops including for, while, do...while, for...of, and loop control statements.",
  keywords: [
    "javascript loops",
    "for loop js",
    "while loop",
    "iteration tutorial",
    "js control flow",
  ],
  alternates: { canonical: "/javascript/loops" },
};

export default function JavascriptLoopsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Loops: for, while, for...of, and Control Flow"
      intro="Loops execute repeated logic efficiently. Choosing the right loop type improves clarity and performance."
      why="Iteration appears in almost all programs for data processing, validation, rendering, and analytics."
      sections={[
        {
          heading: "Loop Types and Use Cases",
          paragraphs: [
            "for loop works well when iteration count is known.",
            "while loop suits condition-driven repetition with unknown iteration count.",
            "for...of is ideal for clean iteration over arrays and iterables.",
          ],
        },
        {
          heading: "Loop Control Statements",
          paragraphs: [
            "Use break to stop a loop early when target condition is met.",
            "Use continue to skip only current iteration and proceed with next.",
            "Avoid infinite loops by ensuring condition updates happen correctly.",
          ],
        },
      ]}
      examples={[
        {
          title: "for Loop with Accumulator",
          code: `const nums = [10, 20, 30, 40];
let total = 0;
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);`,
          explanation: "Classic loop for indexed data and aggregation.",
        },
        {
          title: "for...of with Conditional Skip",
          code: `const users = ["Asha", "", "Ravi", "Nina"];
for (const name of users) {
  if (!name) continue;
  console.log("User:", name);
}`,
          explanation: "for...of improves readability over manual indexing when index is not needed.",
        },
        {
          title: "while for Retry Style Flow",
          code: `let attempts = 0;
let success = false;
while (attempts < 3 && !success) {
  attempts += 1;
  success = attempts === 3;
}
console.log("Attempts:", attempts, "Success:", success);`,
          explanation: "while is useful for retry logic and conditional polling patterns.",
        },
      ]}
      mistakes={[
        {
          title: "Forgetting loop condition updates",
          fix: "Always verify counter increments/decrements to avoid infinite loops.",
        },
        {
          title: "Using for...in with arrays",
          fix: "Use for...of for array values. for...in is for object keys.",
        },
        {
          title: "Heavy logic inside loops",
          fix: "Extract complex logic into helper functions for readability and testing.",
        },
      ]}
      faqs={[
        {
          q: "Which loop is best in JavaScript?",
          a: "Depends on use case. for...of is readable for values, for is useful for indexed control.",
        },
        {
          q: "Is while loop slower than for loop?",
          a: "Differences are usually small. Prioritize clarity and correctness first.",
        },
        {
          q: "Can I break from forEach?",
          a: "No. Use for, for...of, or array methods like some/find for early-exit behavior.",
        },
        {
          q: "How do I avoid infinite loops?",
          a: "Ensure loop condition can become false and update loop variables correctly.",
        },
      ]}
      related={[
        { label: "Conditionals", href: "/javascript/conditionals" },
        { label: "Array Methods", href: "/javascript/array-methods" },
        { label: "Functions", href: "/javascript/functions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
