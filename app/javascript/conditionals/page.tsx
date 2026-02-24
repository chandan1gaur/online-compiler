import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Conditionals Tutorial",
  description:
    "Learn if, else, else if, switch, and conditional patterns in JavaScript with examples and FAQs.",
  alternates: { canonical: "/javascript/conditionals" },
};

export default function JavascriptConditionalsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Conditionals: if/else, switch, and Decision Patterns"
      intro="Conditional logic controls application flow based on runtime state and input values."
      why="Accurate conditions are required for validation, permissions, UI rendering, and business rules."
      sections={[
        {
          heading: "if/else and else if Chains",
          paragraphs: [
            "if/else is ideal for branching where conditions are dynamic and expressive checks are needed.",
            "Order matters in chained conditions. Place most specific checks before generic checks.",
            "Guard clause style (early return) keeps complex functions easier to read.",
          ],
        },
        {
          heading: "switch for Discrete Cases",
          paragraphs: [
            "switch works well for discrete values like status codes or command routing.",
            "Always include default for fallback behavior and safer future handling.",
            "Use break to prevent unintended fallthrough unless fallthrough is explicit and documented.",
          ],
        },
      ]}
      examples={[
        {
          title: "if/else with Guard Clause",
          code: `function accessMessage(role, active) {
  if (!active) return "Account inactive";
  if (role === "admin") return "Full access";
  if (role === "editor") return "Edit access";
  return "Read only";
}

console.log(accessMessage("editor", true));`,
          explanation: "Guard clauses simplify control flow and reduce nesting.",
        },
        {
          title: "switch with Default",
          code: `function colorByStatus(status) {
  switch (status) {
    case "success":
      return "green";
    case "warning":
      return "orange";
    case "error":
      return "red";
    default:
      return "gray";
  }
}

console.log(colorByStatus("warning"));`,
          explanation: "switch is clear for finite known values.",
        },
        {
          title: "Conditional Rendering Label",
          code: `const score = 77;
let label = "";
if (score >= 90) label = "Excellent";
else if (score >= 75) label = "Good";
else label = "Needs Improvement";

console.log(label);`,
          explanation: "Readable style for multi-tier scoring logic.",
        },
      ]}
      mistakes={[
        {
          title: "Missing default case in switch",
          fix: "Always add default to avoid undefined behavior for unknown values.",
        },
        {
          title: "Over-nested if blocks",
          fix: "Use guard clauses and smaller helper functions.",
        },
        {
          title: "Wrong condition ordering",
          fix: "Place specific checks before broad checks.",
        },
      ]}
      faqs={[
        {
          q: "When should I use switch instead of if/else?",
          a: "Use switch when matching one variable against many fixed values.",
        },
        {
          q: "Is nested if/else bad?",
          a: "Not always, but deep nesting hurts readability and maintainability.",
        },
        {
          q: "Should I always use braces with if?",
          a: "Yes, braces improve clarity and reduce accidental bugs in future edits.",
        },
        {
          q: "How can I simplify many conditions?",
          a: "Use lookup maps, helper functions, or split logic into dedicated modules.",
        },
      ]}
      related={[
        { label: "Operators", href: "/javascript/operators" },
        { label: "Loops", href: "/javascript/loops" },
        { label: "Functions", href: "/javascript/functions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
