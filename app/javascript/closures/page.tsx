import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Closures Tutorial",
  description:
    "Understand JavaScript closures with deep explanations, interview-ready examples, and practical use cases.",
  alternates: { canonical: "/javascript/closures" },
};

export default function JavascriptClosuresPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Closures: Deep Explanation and Use Cases"
      intro="A closure is created when an inner function keeps access to variables from its lexical parent scope even after parent execution completes."
      why="Closures are used in private state, memoization, module patterns, and many interview questions."
      sections={[
        {
          heading: "How Closures Actually Work",
          paragraphs: [
            "Closures capture references from lexical scope, not copied snapshots in most cases.",
            "Because references are retained, inner functions can read or update outer variables over time.",
            "This behavior enables controlled state without exposing variables globally.",
          ],
        },
        {
          heading: "Where Closures Are Useful",
          paragraphs: [
            "Factory functions for reusable modules with isolated state.",
            "Memoization for caching expensive computations.",
            "Configuration-based function generation for logging, validation, and event handling.",
          ],
        },
      ]}
      examples={[
        {
          title: "Private Counter State",
          code: `function createCounter(start = 0) {
  let count = start;
  return function () {
    count += 1;
    return count;
  };
}

const next = createCounter(5);
console.log(next(), next(), next());`,
          explanation:
            "count stays private and persists due to closure.",
        },
        {
          title: "Memoization Pattern",
          code: `function memoizeDouble() {
  const cache = {};
  return function (n) {
    if (cache[n]) return cache[n];
    cache[n] = n * 2;
    return cache[n];
  };
}

const fastDouble = memoizeDouble();
console.log(fastDouble(10), fastDouble(10));`,
          explanation: "cache survives between calls with closure.",
        },
        {
          title: "Logger Factory",
          code: `function createLogger(moduleName) {
  return function log(message) {
    console.log("[" + moduleName + "]", message);
  };
}

const authLog = createLogger("AUTH");
authLog("Token validated");`,
          explanation:
            "moduleName stays available for all later logs.",
        },
      ]}
      mistakes={[
        {
          title: "Confusing closure with value copy",
          fix: "Remember closures retain references to outer scope variables.",
        },
        {
          title: "Keeping large objects in long-lived closures",
          fix: "Store only required state to avoid memory pressure.",
        },
        {
          title: "Using var in closure loops",
          fix: "Use let in loops to avoid shared index bugs.",
        },
      ]}
      faqs={[
        {
          q: "Are closures only for interviews?",
          a: "No. Closures are common in real projects for encapsulation and factory patterns.",
        },
        {
          q: "Can closures cause memory leaks?",
          a: "They can if they retain references to large objects unnecessarily.",
        },
        {
          q: "How is closure different from class private fields?",
          a: "Closures hide state via lexical scope, while class fields use instance-based syntax and semantics.",
        },
        {
          q: "Do closures work with async code?",
          a: "Yes. Async callbacks can access captured outer variables through closure.",
        },
      ]}
      related={[
        { label: "Functions", href: "/javascript/functions" },
        { label: "Promises", href: "/javascript/promises" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
