import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript do...while Loop: Syntax and Examples",
  description: "Learn the JavaScript do...while loop with syntax, examples, and best practices.",
  keywords: ["javascript do while", "do...while loop", "iteration"],
  openGraph: {
    title: "JavaScript do...while Loop",
    description: "Learn the JavaScript do...while loop with syntax, examples, and best practices.",
    url: "/javascript/loops/do-while-loop",
    type: "article",
    images: ["/og-do-while.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript do...while Loop",
    description: "Learn the JavaScript do...while loop with syntax, examples, and best practices.",
    images: ["/og-do-while.svg"],
  },
  alternates: { canonical: "/javascript/loops/do-while-loop" },
};

const sections = [
  {
    heading: "Run At Least Once",
    paragraphs: [
      "do...while runs the body first and checks the condition afterward.",
      "Use it when the body must execute at least once.",
    ],
  },
  {
    heading: "Validation Loops",
    paragraphs: [
      "It is useful for input validation and menus that must show at least once.",
      "The loop continues as long as the condition remains true.",
    ],
  },
  {
    heading: "Avoid Infinite Loops",
    paragraphs: [
      "Just like while, make sure the condition can become false.",
      "Update counters or state inside the loop.",
    ],
  },
];

const examples = [
  {
    title: "Basic do...while",
    code: `let i = 0;\n\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);`,
    explanation: "The body runs before the condition check.",
  },
  {
    title: "Run Once Even if False",
    code: `let count = 0;\n\ndo {\n  console.log("Runs once");\n} while (count > 0);`,
    explanation: "Even though the condition is false, it runs once.",
  },
  {
    title: "Menu Loop",
    code: `let choice = "";\nlet attempts = 0;\n\ndo {\n  attempts++;\n  choice = attempts === 2 ? "exit" : "stay";\n} while (choice !== "exit");\n\nconsole.log(choice);`,
    explanation: "Common for menu interactions and retries.",
  },
  {
    title: "Validation Example",
    code: `let value = -1;\n\ndo {\n  value++;\n} while (value < 0);\n\nconsole.log(value);`,
    explanation: "Ensure a validation step happens at least once.",
  },
];

const mistakes = [
  { title: "Assuming the condition is checked first", fix: "Remember do...while checks after the body runs." },
  { title: "Forgetting to update the condition", fix: "Update counters or state to avoid infinite loops." },
  { title: "Using do...while unnecessarily", fix: "Use while if the body should not always run." },
];

const faqs = [
  { q: "What is the difference between while and do...while?", a: "do...while runs the body at least once before checking the condition." },
  { q: "When should I use do...while?", a: "When you need the body to run at least once, like menus or input validation." },
  { q: "Can do...while be replaced by while?", a: "Yes, but you would need an extra first run before the loop." },
];

const related = [
  { label: "while Loop", href: "/javascript/loops/while-loop" },
  { label: "for Loop", href: "/javascript/loops/for-loop" },
  { label: "break Statement", href: "/javascript/loops/break-statement" },
];

export default function JavascriptDoWhileLoopPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript do...while Loop"
      intro={[
        "The do...while loop runs its body once before checking the condition.",
        "This guarantees at least one iteration.",
      ]}
      why={[
        "Some tasks must run at least once, such as showing a menu or validating input.",
        "do...while matches that pattern without extra boilerplate.",
      ]}
      syntax={["do { ... } while (condition)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let i = 0;\nconsole.log(i);\ni++;\nwhile (i < 1) {\n  console.log(i);\n  i++;\n}`,
        with: `let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 1);`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "When does do...while check the condition?", a: "After running the body once." },
        { q: "When should you use do...while?", a: "When you need the loop body to run at least once." },
        { q: "How do you avoid infinite loops?", a: "Ensure the condition can become false." },
      ]}
      practice={{
        prompt: "Practice: Use do...while to print numbers from 1 to 3.",
        starterCode: `let i = 1;\n// TODO: print 1, 2, 3 using do...while\n`,
        solution: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 3);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run do...while Demo",
        description: "Try a do...while loop and change the condition to see the effect.",
      }}
    />
  );
}
