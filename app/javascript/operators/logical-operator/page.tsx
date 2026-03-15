import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Logical Operators: &&, ||, ! and Short-Circuiting",
  description:
    "Learn JavaScript logical operators (&&, ||, !) with short-circuit behavior, truthy/falsy rules, and practical examples.",
  keywords: [
    "javascript logical operators",
    "logical and",
    "logical or",
    "logical not",
    "short-circuit",
    "truthy falsy",
  ],
  openGraph: {
    title: "JavaScript Logical Operators",
    description:
      "Learn JavaScript logical operators (&&, ||, !) with short-circuit behavior, truthy/falsy rules, and practical examples.",
    url: "/javascript/operators/logical-operator",
    type: "article",
    images: ["/og-operators-logical.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Logical Operators",
    description:
      "Learn JavaScript logical operators (&&, ||, !) with short-circuit behavior, truthy/falsy rules, and practical examples.",
    images: ["/og-operators-logical.svg"],
  },
  alternates: { canonical: "/javascript/operators/logical-operator" },
};

const sections = [
  {
    heading: "Combining Conditions",
    paragraphs: [
      "Logical operators let you combine multiple checks into one expression. This keeps conditionals short and readable.",
      "Use `&&` when all conditions must be true, `||` when any condition can be true.",
    ],
  },
  {
    heading: "Short-Circuit Behavior",
    paragraphs: [
      "JavaScript stops evaluating as soon as the result is known. This saves work and prevents errors.",
      "Short-circuiting is often used for guards like `user && user.name` or fallback values like `value || defaultValue`.",
    ],
  },
  {
    heading: "Truthy and Falsy",
    paragraphs: [
      "Logical operators work with truthy/falsy values, not just booleans. This can be powerful but also surprising.",
      "Be intentional when using logical operators with numbers or strings.",
    ],
  },
  {
    heading: "Readability Tips",
    paragraphs: [
      "Break long conditions into named variables for readability.",
      "Prefer clear guard clauses over deeply nested logical expressions.",
    ],
  },
];

const examples = [
  {
    title: "Basic AND / OR",
    code: `const age = 21;\nconst hasId = true;\n\nconst canEnter = age >= 18 && hasId;\nconst isStudent = age < 25 || age === 30;\n\nconsole.log(canEnter, isStudent);`,
    explanation: "Use && for all-true checks and || for any-true checks.",
  },
  {
    title: "Short-Circuit Guards",
    code: `const user = null;\n\nconst name = user && user.name;\nconsole.log(name); // null (no crash)`,
    explanation: "Short-circuiting avoids accessing properties on null or undefined.",
  },
  {
    title: "Fallback Values",
    code: `const input = "";\nconst label = input || "Untitled";\n\nconsole.log(label);`,
    explanation: "Logical OR provides quick defaults for falsy values.",
  },
  {
    title: "Boolean Coercion",
    code: `console.log(!!"hello"); // true\nconsole.log(!!0);       // false\nconsole.log(!"" );      // true`,
    explanation: "Double negation is a common way to coerce to boolean.",
  },
];

const mistakes = [
  { title: "Using || when 0 is valid", fix: "Use ?? to preserve 0, false, and empty strings." },
  { title: "Overloading one long expression", fix: "Split into named conditions for readability." },
  { title: "Forgetting short-circuiting", fix: "Remember that right-hand expressions may not run." },
  { title: "Confusing truthy/falsy", fix: "Review which values are falsy: 0, \"\", null, undefined, NaN, false." },
];

const faqs = [
  {
    q: "What is short-circuiting?",
    a: "It means JavaScript stops evaluating when the outcome is already known (e.g., false && ...).",
  },
  {
    q: "Do logical operators return booleans?",
    a: "They return one of the operands, not necessarily true or false.",
  },
  {
    q: "When should I use ?? instead of ||?",
    a: "Use ?? when you only want to default on null or undefined.",
  },
  {
    q: "Is ! always safe?",
    a: "It flips truthiness; be careful with values that are already non-boolean.",
  },
];

const related = [
  { label: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
  { label: "Nullish Coalescing", href: "/javascript/operators/nullish-coalescing-operator" },
  { label: "Optional Chaining", href: "/javascript/operators/optional-chaining-operator" },
  { label: "Conditionals", href: "/javascript/conditionals" },
];

export default function JavascriptLogicalOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Logical Operators"
      intro={[
        "Logical operators combine conditions and control flow in JavaScript. They are essential for validation and decision-making.",
        "The three core logical operators are AND (&&), OR (||), and NOT (!), all with short-circuit behavior.",
      ]}
      why={[
        "Misusing logical operators can cause logic to flip or defaults to overwrite valid values.",
        "Understanding short-circuiting and truthy/falsy behavior keeps your conditions stable.",
      ]}
      syntax={[
        "a && b  // AND",
        "a || b  // OR",
        "!a      // NOT",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `if (user !== null && user !== undefined) {\n  if (user.name) {\n    console.log(user.name);\n  }\n}`,
        with: `const name = user && user.name;\nif (name) {\n  console.log(name);\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What is short-circuit evaluation?", a: "Evaluation stops early when the result is known (e.g., false && ...)." },
        { q: "Why does || return a non-boolean?", a: "Logical operators return one of the operands, not a boolean coercion." },
        { q: "How do you coerce to boolean?", a: "Use `Boolean(value)` or double negation `!!value`." },
      ]}
      practice={{
        prompt: "Practice: Create a guard that only shows a profile card when user exists and isActive is true.",
        starterCode: `const user = { name: "Ava" };\nconst isActive = true;\n// TODO: print user.name only when both conditions are true\n`,
        solution: `const user = { name: "Ava" };\nconst isActive = true;\nif (user && isActive) {\n  console.log(user.name);\n}`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Logical Demo",
        description: "Run these logical operator examples and explore how short-circuiting changes outcomes.",
      }}
    />
  );
}
