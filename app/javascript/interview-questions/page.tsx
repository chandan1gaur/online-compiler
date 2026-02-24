import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Interview Questions and Answers",
  description:
    "JavaScript interview preparation page with frequent questions, clear answers, and practical code examples.",
  alternates: { canonical: "/javascript/interview-questions" },
};

export default function JavascriptInterviewQuestionsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Interview Questions: High-Frequency Topics"
      intro="This page covers commonly asked JavaScript interview questions with concise explanations and runnable examples."
      why="Interview success comes from clear concept explanation plus ability to demonstrate behavior with code."
      sections={[
        {
          heading: "How to Answer JavaScript Interview Questions",
          paragraphs: [
            "Use a clear structure: definition, code example, and practical use case.",
            "Avoid memorized one-liners. Interviewers usually ask follow-up questions that test real understanding.",
            "Run snippets and explain output order, especially for async and event loop topics.",
          ],
        },
        {
          heading: "Most Asked JavaScript Areas",
          paragraphs: [
            "Scope and hoisting, closures, promises, async/await, array methods, this binding, and equality operators.",
            "For experienced roles, interviewers also check optimization, error handling, and code organization decisions.",
          ],
        },
      ]}
      examples={[
        {
          title: "Q: Difference between == and ===",
          code: `console.log(5 == "5");  // true
console.log(5 === "5"); // false`,
          explanation: "Strict equality avoids coercion bugs and is preferred in production code.",
        },
        {
          title: "Q: What is closure?",
          code: `function outer() {
  let secret = "token";
  return function inner() {
    return secret;
  };
}
const getSecret = outer();
console.log(getSecret());`,
          explanation: "Inner function retains access to outer lexical variable.",
        },
        {
          title: "Q: Event loop output order",
          code: `console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("microtask"));
console.log("end");`,
          explanation: "Expected order: start, end, microtask, timeout.",
        },
      ]}
      mistakes={[
        {
          title: "Definition-only answers",
          fix: "Support each answer with a small code example.",
        },
        {
          title: "Ignoring edge cases",
          fix: "Mention one caveat or common mistake per concept.",
        },
        {
          title: "Unstructured communication",
          fix: "Follow definition -> example -> real use case format.",
        },
      ]}
      faqs={[
        {
          q: "What JavaScript topics are asked most frequently?",
          a: "Closures, promises, async/await, scope, hoisting, equality, and array methods.",
        },
        {
          q: "Should I practice DSA or JavaScript concepts first?",
          a: "Both matter. For frontend interviews, strong JavaScript concepts are essential from round one.",
        },
        {
          q: "How many questions should I practice per day?",
          a: "Practice 2 to 4 questions deeply with explanation and code execution.",
        },
        {
          q: "How do I improve confidence during interviews?",
          a: "Practice speaking through code behavior step-by-step while writing examples.",
        },
      ]}
      related={[
        { label: "Variables", href: "/javascript/variables" },
        { label: "Functions", href: "/javascript/functions" },
        { label: "Closures", href: "/javascript/closures" },
        { label: "Promises", href: "/javascript/promises" },
        { label: "Async/Await", href: "/javascript/async-await" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
