import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "How JavaScript Works: Engine, Execution Context, Call Stack, Event Loop",
  description:
    "Beginner to advanced guide on how JavaScript works internally: engine, creation phase, execution context, call stack, event loop, Web APIs, and microtasks vs macrotasks.",
  keywords: [
    "how javascript works",
    "javascript engine",
    "javascript execution context",
    "javascript call stack",
    "javascript event loop",
    "microtask vs macrotask",
    "javascript web api",
  ],
  openGraph: {
    title: "How JavaScript Works: Engine, Execution Context, Call Stack, Event Loop",
    description:
      "Beginner to advanced guide on how JavaScript works internally: engine, creation phase, execution context, call stack, event loop, Web APIs, and microtasks vs macrotasks.",
    url: "/javascript/how-javascript-works",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How JavaScript Works: Engine, Execution Context, Call Stack, Event Loop",
    description:
      "Beginner to advanced guide on how JavaScript works internally: engine, creation phase, execution context, call stack, event loop, Web APIs, and microtasks vs macrotasks.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/how-javascript-works" },
};

export default function HowJavascriptWorksPage() {
  return (
    <JsTutorialTemplate
      title="How JavaScript Works: From Engine to Event Loop (Beginner to Advanced Guide)"
      intro="JavaScript powers everything from simple button clicks to large-scale web applications. If you understand what happens behind the scenes when code runs, you debug faster, write cleaner asynchronous logic, and perform much better in technical interviews."
      why="Once you understand engine behavior, execution context, call stack, and event loop, JavaScript stops feeling magical and starts feeling logical."
      sections={[
        {
          heading: "JavaScript Is Single-Threaded, But Not Slow",
          paragraphs: [
            "JavaScript executes one task at a time on the main thread. That means one call stack and one active instruction at any moment.",
            "It still handles real-world workloads efficiently because asynchronous operations are non-blocking and coordinated through the event loop.",
          ],
          bullets: [
            "One call stack",
            "One instruction executed at a time",
            "No parallel execution in the main thread",
          ],
        },
        {
          heading: "The JavaScript Engine",
          paragraphs: [
            "JavaScript runs inside an engine that parses, compiles, and executes code while managing memory.",
          ],
          bullets: [
            "V8 (Chrome, Node.js)",
            "SpiderMonkey (Firefox)",
            "JavaScriptCore (Safari)",
            "Modern engines use Just-In-Time compilation for high performance.",
          ],
        },
        {
          heading: "How JavaScript Executes Code",
          paragraphs: [
            "Execution happens in two phases: memory creation phase and code execution phase.",
          ],
          bullets: [
            "Creation phase: memory allocated for variables/functions, global execution context created.",
            "Execution phase: code runs line by line, values assigned, functions invoked.",
            "Hoisting is explained by work done during creation phase.",
          ],
        },
        {
          heading: "Execution Context Explained",
          paragraphs: [
            "Every running unit of JavaScript code has an execution context.",
          ],
          bullets: [
            "Global Execution Context",
            "Function Execution Context",
            "Eval Execution Context (rarely used)",
            "Each context has variable environment, scope chain, and this binding.",
          ],
        },
        {
          heading: "The Call Stack",
          paragraphs: [
            "JavaScript uses a call stack to manage execution contexts in order.",
          ],
          bullets: [
            "Function call -> pushed onto stack",
            "Function finish -> popped from stack",
            "Ensures correct and predictable execution order",
          ],
        },
        {
          heading: "The Event Loop and Async JavaScript",
          paragraphs: [
            "Asynchronous tasks like timers, fetch, and events are handled through browser APIs and queues.",
            "The event loop continuously checks whether the call stack is empty and then schedules queued callbacks.",
          ],
          bullets: [
            "Synchronous code runs first",
            "Async operations are delegated to Web APIs",
            "Completed callbacks are queued",
            "Event loop moves callbacks to stack when stack is empty",
          ],
        },
        {
          heading: "What Are Web APIs?",
          paragraphs: [
            "Web APIs are browser-provided capabilities, not part of core JavaScript language syntax.",
          ],
          bullets: [
            "DOM API",
            "setTimeout / setInterval",
            "fetch",
            "Geolocation",
            "LocalStorage",
          ],
        },
        {
          heading: "Microtasks vs Macrotasks",
          paragraphs: [
            "Async callbacks are scheduled in different queues with different priority levels.",
          ],
          bullets: [
            "Microtasks: Promise callbacks, queueMicrotask, MutationObserver",
            "Macrotasks: setTimeout, setInterval",
            "Microtasks run before macrotasks after main execution completes",
          ],
        },
        {
          heading: "JavaScript Memory Model",
          paragraphs: [
            "JavaScript memory is generally discussed in terms of stack and heap.",
          ],
          bullets: [
            "Stack: primitive values, function calls",
            "Heap: objects, arrays, functions",
            "Garbage collection cleans unused memory automatically",
          ],
        },
        {
          heading: "Why This Knowledge Is Critical",
          paragraphs: [
            "Most advanced JavaScript interview questions revolve around internals like event loop, call stack, execution context, hoisting, and closures.",
          ],
          bullets: [
            "Debug unexpected behavior faster",
            "Avoid blocking the main thread",
            "Write optimized async code",
            "Understand scope and closures deeply",
          ],
        },
        {
          heading: "Summary",
          paragraphs: [
            "JavaScript uses a single-threaded model supported by execution contexts, call stack, Web APIs, callback queues, and the event loop.",
            "The engine creates memory, executes line by line, and coordinates async work without blocking the main thread.",
          ],
        },
      ]}
      examples={[
        {
          title: "Creation Phase and Hoisting",
          code: `console.log(x);
var x = 5;

// During creation phase:
// x is allocated and initialized as undefined
// During execution phase:
// x becomes 5`,
          explanation:
            "Variables declared with var are hoisted and initialized as undefined during memory creation phase.",
        },
        {
          title: "Call Stack Flow",
          code: `function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();`,
          explanation:
            "Global context -> first() pushed -> second() pushed -> log executes -> second pops -> first pops.",
        },
        {
          title: "Event Loop with setTimeout",
          code: `console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 1000);

console.log("End");`,
          explanation:
            "Output order is Start, End, Inside Timeout because timer callback runs only after the call stack is clear.",
        },
        {
          title: "Microtask vs Macrotask Priority",
          code: `console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");`,
          explanation:
            "Output: Start, End, Promise, Timeout. Promise callback is a microtask and runs before timer macrotask.",
        },
      ]}
      mistakes={[
        {
          title: "Assuming setTimeout runs immediately",
          fix: "It schedules a callback; execution depends on queue order and stack availability.",
        },
        {
          title: "Ignoring creation phase behavior",
          fix: "Understand hoisting and execution context before debugging scope issues.",
        },
        {
          title: "Treating all async callbacks equally",
          fix: "Learn microtask vs macrotask priority to predict execution order correctly.",
        },
      ]}
      faqs={[
        {
          q: "Is JavaScript single-threaded?",
          a: "Yes, JavaScript runs on a single main thread with one call stack.",
        },
        {
          q: "If it is single-threaded, how does async work?",
          a: "Async tasks are handled by Web APIs and queues, then coordinated back through the event loop.",
        },
        {
          q: "Why do Promises run before setTimeout?",
          a: "Promise callbacks are microtasks, and microtasks are processed before macrotasks like setTimeout.",
        },
        {
          q: "Do I need this for interviews?",
          a: "Yes. Event loop, call stack, execution context, hoisting, and closures are common interview topics.",
        },
      ]}
      related={[
        { label: "Introduction to JavaScript", href: "/javascript" },
        { label: "History of JavaScript", href: "/javascript/history-of-javascript" },
        { label: "Variables", href: "/javascript/variables" },
        { label: "Closures", href: "/javascript/closures" },
        { label: "Promises", href: "/javascript/promises" },
        { label: "Async/Await", href: "/javascript/async-await" },
      ]}
    />
  );
}
