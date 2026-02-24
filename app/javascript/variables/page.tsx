import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Variables: var vs let vs const",
  description:
    "Deep tutorial on JavaScript variables, scope, hoisting, and temporal dead zone with practical examples and FAQs.",
  alternates: { canonical: "/javascript/variables" },
};

export default function JavascriptVariablesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Variables: var, let, const"
      intro="Variable declarations control scope, mutation, and runtime behavior. Most beginner and intermediate bugs in JavaScript are caused by incorrect variable usage."
      why="Correct variable semantics reduce hidden bugs, avoid accidental global leaks, and make async behavior easier to reason about."
      sections={[
        {
          heading: "var, let, const: Practical Difference",
          paragraphs: [
            "var is function-scoped and can leak outside block boundaries, while let and const are block-scoped.",
            "Use const as default. Switch to let only when reassignment is required. Avoid var in modern code unless working with legacy behavior.",
            "These rules matter in loops, conditional branches, and closures where variable lifetime impacts output.",
          ],
        },
        {
          heading: "Hoisting and Temporal Dead Zone",
          paragraphs: [
            "All declarations are hoisted, but let and const remain inaccessible before declaration line. This period is called temporal dead zone.",
            "Temporal dead zone prevents accidental usage before initialization and catches logic mistakes early.",
          ],
        },
      ]}
      examples={[
        {
          title: "Block Scope vs Function Scope",
          code: `if (true) {
  var oldWay = "visible outside block";
  let modernWay = "only inside block";
}

console.log(oldWay); // works
// console.log(modernWay); // ReferenceError`,
          explanation: "var escapes block, let does not.",
        },
        {
          title: "const with Object Mutation",
          code: `const config = { mode: "light" };
config.mode = "dark"; // allowed
console.log(config.mode);

// config = {}; // TypeError`,
          explanation:
            "const locks binding, not nested object content.",
        },
        {
          title: "Temporal Dead Zone",
          code: `function demo() {
  // console.log(total); // ReferenceError
  let total = 10;
  console.log(total);
}
demo();`,
          explanation:
            "Accessing let/const before declaration throws runtime error.",
        },
      ]}
      mistakes={[
        {
          title: "Using var in loops",
          fix: "Use let so each loop block has predictable scoped values.",
        },
        {
          title: "Using let everywhere",
          fix: "Use const by default to prevent accidental reassignment.",
        },
        {
          title: "Expecting const object immutability",
          fix: "Use Object.freeze or immutable update patterns for stricter guarantees.",
        },
      ]}
      faqs={[
        {
          q: "Which keyword should I use by default?",
          a: "Use const by default and let when reassignment is required.",
        },
        {
          q: "Why avoid var in modern JavaScript?",
          a: "var has function scope and hoisting behavior that often causes confusing bugs.",
        },
        {
          q: "What is temporal dead zone?",
          a: "It is the time before let/const declaration where the variable exists but cannot be accessed.",
        },
        {
          q: "Can const arrays be changed?",
          a: "Array contents can be changed, but the variable cannot be reassigned to a new array.",
        },
      ]}
      related={[
        { label: "Functions", href: "/javascript/functions" },
        { label: "Closures", href: "/javascript/closures" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
