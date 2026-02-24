import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Functions Tutorial",
  description:
    "Learn JavaScript functions deeply: declaration, expression, arrow functions, parameters, and common pitfalls.",
  alternates: { canonical: "/javascript/functions" },
};

export default function JavascriptFunctionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Functions: Core to Advanced Patterns"
      intro="Functions are the foundation of reusable and testable JavaScript. Strong function design directly improves architecture quality."
      why="Most business logic is implemented through functions. Understanding syntax and behavior prevents many runtime issues."
      sections={[
        {
          heading: "Function Declaration, Expression, and Arrow",
          paragraphs: [
            "Function declarations are hoisted with implementation. Function expressions depend on assignment timing.",
            "Arrow functions provide concise syntax and lexical this. They are useful for callbacks but not always suitable for methods.",
            "Choose style based on behavior needs, not only syntax preference.",
          ],
        },
        {
          heading: "Parameters and Return Design",
          paragraphs: [
            "Use default parameters to prevent undefined edge cases and rest parameters for flexible argument counts.",
            "Return explicit values from utility functions to avoid hidden undefined behavior in chains.",
          ],
        },
      ]}
      examples={[
        {
          title: "Declaration and Expression",
          code: `console.log(add(2, 3)); // 5
function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(8, 3));`,
          explanation: "Declaration hoists fully, expression does not.",
        },
        {
          title: "Arrow Function and this",
          code: `const profile = {
  name: "Nina",
  normal() {
    return this.name;
  },
  arrow: () => this?.name,
};

console.log(profile.normal()); // Nina
console.log(profile.arrow()); // usually undefined`,
          explanation:
            "Arrow functions inherit outer this, so avoid them for object methods needing local context.",
        },
        {
          title: "Default and Rest Parameters",
          code: `function invoice(tax = 0.18, ...amounts) {
  const subtotal = amounts.reduce((sum, n) => sum + n, 0);
  return subtotal + subtotal * tax;
}

console.log(invoice(0.18, 120, 80, 50));`,
          explanation:
            "Cleaner APIs with default values and flexible argument handling.",
        },
      ]}
      mistakes={[
        {
          title: "Using arrow for method requiring this",
          fix: "Use method syntax or function keyword for dynamic this binding.",
        },
        {
          title: "Large functions with many responsibilities",
          fix: "Split into smaller composable helpers with clear input-output.",
        },
        {
          title: "Implicit undefined returns",
          fix: "Return explicit output in utility functions.",
        },
      ]}
      faqs={[
        {
          q: "Are arrow functions always better?",
          a: "No. They are concise, but not ideal where method-level this behavior is required.",
        },
        {
          q: "What is a higher-order function?",
          a: "A function that accepts another function or returns one.",
        },
        {
          q: "Can function declarations be used before definition?",
          a: "Yes, due to hoisting behavior.",
        },
        {
          q: "Should I use default parameters often?",
          a: "Yes, when sensible defaults prevent undefined edge-case bugs.",
        },
      ]}
      related={[
        { label: "Variables", href: "/javascript/variables" },
        { label: "Closures", href: "/javascript/closures" },
        { label: "Array Methods", href: "/javascript/array-methods" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
