import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript else if Ladder: Multiple Conditions",
  description:
    "Learn JavaScript else if ladders for handling multiple conditions with clear examples and best practices.",
  keywords: ["javascript else if", "else if ladder", "multiple conditions"],
  openGraph: {
    title: "JavaScript else if Ladder",
    description: "Learn JavaScript else if ladders for handling multiple conditions with clear examples and best practices.",
    url: "/javascript/conditionals/else-if-ladder",
    type: "article",
    images: ["/og-else-if.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript else if Ladder",
    description: "Learn JavaScript else if ladders for handling multiple conditions with clear examples and best practices.",
    images: ["/og-else-if.svg"],
  },
  alternates: { canonical: "/javascript/conditionals/else-if-ladder" },
};

const sections = [
  {
    heading: "Multiple Branches",
    paragraphs: [
      "An else-if ladder lets you test multiple conditions in order.",
      "The first matching condition runs, and the rest are skipped.",
    ],
  },
  {
    heading: "Ordering Matters",
    paragraphs: [
      "Put the most specific or highest-priority conditions first.",
      "A broad condition early can block the rest of the ladder.",
    ],
  },
  {
    heading: "When to Use Switch",
    paragraphs: [
      "If you are comparing a single value to many discrete cases, a switch can be clearer.",
      "For ranges or complex conditions, an else-if ladder is usually better.",
    ],
  },
];

const examples = [
  {
    title: "Grade Ranges",
    code: `const score = 78;\nlet grade;\n\nif (score >= 90) {\n  grade = "A";\n} else if (score >= 80) {\n  grade = "B";\n} else if (score >= 70) {\n  grade = "C";\n} else {\n  grade = "D";\n}\n\nconsole.log(grade);`,
    explanation: "Use ordered ranges so the first match wins.",
  },
  {
    title: "Shipping Tiers",
    code: `const total = 125;\nlet fee;\n\nif (total > 200) {\n  fee = 0;\n} else if (total > 100) {\n  fee = 5;\n} else {\n  fee = 10;\n}\n\nconsole.log(fee);`,
    explanation: "Tiers are a common use case for else-if ladders.",
  },
  {
    title: "Status Mapping",
    code: `const status = "processing";\nlet label;\n\nif (status === "paid") {\n  label = "Paid";\n} else if (status === "failed") {\n  label = "Failed";\n} else if (status === "processing") {\n  label = "Processing";\n} else {\n  label = "Pending";\n}\n\nconsole.log(label);`,
    explanation: "Order the conditions by priority or specificity.",
  },
  {
    title: "Multiple Checks",
    code: `const age = 17;\nconst hasId = true;\nlet result;\n\nif (age >= 18 && hasId) {\n  result = "Enter";\n} else if (age >= 18) {\n  result = "Need ID";\n} else {\n  result = "Too young";\n}\n\nconsole.log(result);`,
    explanation: "Combine logical operators when needed.",
  },
];

const mistakes = [
  { title: "Wrong order", fix: "Put the most specific or highest-priority checks first." },
  { title: "Overlapping conditions", fix: "Ensure ranges do not overlap in unintended ways." },
  { title: "Too many branches", fix: "Consider switch or data-driven maps for large sets." },
  { title: "No default case", fix: "Use a final else to handle unexpected values." },
];

const faqs = [
  { q: "Does else-if stop after the first match?", a: "Yes, the first true condition runs and the rest are skipped." },
  { q: "When should I use switch instead?", a: "Use switch for many discrete values of one variable." },
  { q: "Can I have nested else-if ladders?", a: "Yes, but readability can suffer." },
];

const related = [
  { label: "if Statement", href: "/javascript/conditionals/if-statement" },
  { label: "if...else", href: "/javascript/conditionals/if-else" },
  { label: "switch Statement", href: "/javascript/conditionals/switch-statement" },
];

export default function JavascriptElseIfLadderPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript else if Ladder"
      intro={[
        "An else-if ladder allows you to check multiple conditions in sequence.",
        "The first true condition runs, and the rest are skipped.",
      ]}
      why={[
        "Many real-world rules have tiers or ranges. else-if ladders are perfect for those cases.",
        "Ordering conditions correctly prevents bugs and unexpected behavior.",
      ]}
      syntax={["if (a) { ... } else if (b) { ... } else { ... }"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let label = "";\nif (score >= 90) {\n  label = "A";\n}\nif (score >= 80) {\n  label = "B";\n}`,
        with: `let label;\nif (score >= 90) {\n  label = "A";\n} else if (score >= 80) {\n  label = "B";\n}`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Why does order matter?", a: "The first matching condition stops evaluation of the rest." },
        { q: "When is else-if better than switch?", a: "When you need ranges or complex conditions." },
        { q: "Do I need a final else?", a: "It helps handle unexpected values safely." },
      ]}
      practice={{
        prompt: "Practice: Create a shipping tier using else-if for totals above 200, above 100, and below 100.",
        starterCode: `const total = 145;\n// TODO: set fee using an else-if ladder\n`,
        solution: `const total = 145;\nlet fee;\nif (total > 200) {\n  fee = 0;\n} else if (total > 100) {\n  fee = 5;\n} else {\n  fee = 10;\n}\nconsole.log(fee);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run else-if Demo",
        description: "Adjust the score to see which branch fires.",
      }}
    />
  );
}
