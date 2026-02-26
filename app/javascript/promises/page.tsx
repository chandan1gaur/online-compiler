import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Promises Tutorial",
  description:
    "Learn JavaScript promises deeply: states, chaining, combinators, and robust error handling.",
  keywords: [
    "javascript promises",
    "async programming",
    "promise chaining",
    "js async await",
    "learn javascript",
  ],
  alternates: { canonical: "/javascript/promises" },
};

export default function JavascriptPromisesPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Promises: States, Chains, and Reliability"
      intro="Promises represent future values from asynchronous operations and are the foundation of modern async JavaScript patterns."
      why="Without strong promise handling, async code becomes fragile and hard to maintain."
      sections={[
        {
          heading: "Promise Lifecycle and Chaining",
          paragraphs: [
            "Every promise starts pending and settles once as fulfilled or rejected.",
            "then returns a new promise, enabling linear chains instead of nested callbacks.",
            "Errors thrown in then blocks travel to nearest catch, enabling centralized handling.",
          ],
        },
        {
          heading: "Choosing Promise Combinators",
          paragraphs: [
            "Use Promise.all when every task must succeed.",
            "Use Promise.allSettled when you need results from all tasks regardless of individual failures.",
            "Use Promise.race for first completion and Promise.any for first success.",
          ],
        },
      ]}
      examples={[
        {
          title: "Basic Promise Chain",
          code: `function getUser(id) {
  return fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((r) => r.json());
}

getUser(1)
  .then((user) => user.email)
  .then((email) => console.log(email))
  .catch((error) => console.error(error.message));`,
          explanation: "then chain keeps asynchronous flow linear and readable.",
        },
        {
          title: "allSettled for Partial Success",
          code: `const tasks = [
  Promise.resolve("A success"),
  Promise.reject(new Error("B failed")),
  Promise.resolve("C success"),
];

Promise.allSettled(tasks).then((result) => console.log(result));`,
          explanation: "Use allSettled when partial completion is acceptable.",
        },
        {
          title: "Promise Wrapper for setTimeout",
          code: `function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done"), ms);
  });
}

wait(300).then(console.log);`,
          explanation: "Wrapping callback APIs into promises modernizes async composition.",
        },
      ]}
      mistakes={[
        {
          title: "Missing return inside then",
          fix: "Return value/promise inside then when next step depends on it.",
        },
        {
          title: "Ignoring catch handlers",
          fix: "Always handle rejection with catch or try/catch via async/await.",
        },
        {
          title: "Over-nested then chains",
          fix: "Chain linearly or switch to async/await for readability.",
        },
      ]}
      faqs={[
        {
          q: "Can a promise change state after resolve?",
          a: "No. Promise state is immutable once settled.",
        },
        {
          q: "When should I use Promise.all?",
          a: "Use it when all operations are required and a single failure should fail the complete operation.",
        },
        {
          q: "What is the purpose of finally?",
          a: "It runs cleanup logic regardless of success or failure.",
        },
        {
          q: "Is async/await replacing promises?",
          a: "No. async/await is syntax built on top of promises.",
        },
      ]}
      related={[
        { label: "Async/Await", href: "/javascript/async-await" },
        { label: "Closures", href: "/javascript/closures" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
