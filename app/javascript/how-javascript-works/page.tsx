import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "How JavaScript Works: Engine, Execution Context, Call Stack, Event Loop",
  description:
    "Deep dive into JavaScript internals: engine, execution context, call stack, event loop, Web APIs, hoisting, and how JavaScript handles async operations.",
  keywords: [
    "how javascript works",
    "javascript engine",
    "javascript execution context",
    "javascript call stack",
    "javascript event loop",
    "javascript hoisting",
    "microtask vs macrotask",
    "javascript web api",
  ],
  openGraph: {
    title: "How JavaScript Works: Engine, Execution Context, Call Stack, Event Loop",
    description:
      "Deep dive into JavaScript internals: engine, execution context, call stack, event loop, Web APIs, hoisting, and how JavaScript handles async operations.",
    url: "/javascript/how-javascript-works",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How JavaScript Works",
    description:
      "Deep dive into JavaScript internals: engine, execution context, call stack, event loop, Web APIs, hoisting, and how JavaScript handles async operations.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/how-javascript-works" },
};

const sections = [
  {
    heading: "JavaScript Is Single-Threaded (But Very Clever)",
    paragraphs: [
      "JavaScript has a single-threaded execution model, meaning one instruction executes at a time on a single thread.",
      "Despite this limitation, JavaScript handles complex, multi-scenario applications through the event loop and asynchronous patterns.",
      "Understanding this is crucial because it explains why setTimeout doesn't guarantee immediate execution and why async/await works the way it does.",
      "The single-threaded model actually provides advantages: simpler reasoning about code, no race conditions at the language level, and easier debugging.",
    ],
    examples: [
      {
        title: "Single-Threaded Nature",
        code: `// These two console logs will NEVER execute simultaneously
console.log("Task 1 starts");
console.log("Task 2 starts");

// Task 1 COMPLETELY finishes before Task 2 starts
// This is guaranteed by the single-threaded model

// Even with async:
async function task1() {
  console.log("Async Task 1");
}

console.log("Sync code");
task1(); // Will be queued, not run immediately
console.log("Sync code end");

// Order: Sync code -> Sync code end -> Async Task 1`,
        explanation:
          "JavaScript executes one piece of code at a time. Async operations are queued for later execution when the current execution stack is clear.",
      },
    ],
  },
  {
    heading: "The JavaScript Engine",
    paragraphs: [
      "A JavaScript engine is a program that reads, compiles, and executes JavaScript code.",
      "Different browsers use different engines optimized for performance and features.",
      "Modern engines use Just-In-Time (JIT) compilation, which translates frequently-used code to machine code for faster execution.",
      "The engine manages memory allocation, garbage collection, and code optimization.",
      "Understanding the engine helps you write code that performs well and avoids common memory leaks.",
    ],
    examples: [
      {
        title: "Major JavaScript Engines",
        code: `// V8 (Google Chrome, Node.js, Edge)
// - Used in most production Node.js applications
// - Extremely optimized for performance
// - Features: JIT compilation, inline caching, garbage collection

// SpiderMonkey (Mozilla Firefox)
// - Used since Firefox's early days
// - Known for standards compliance

// JavaScriptCore (Apple Safari)
// - Optimized for Safari and iOS
// - Competitive performance with V8

// The differences don't matter much for learning
// Focus on writing efficient code that works across all engines
// Use performance profiling tools to identify bottlenecks

const exampleCode = () => {
  // This code runs the same way regardless of engine
  return 1 + 1; // Returns 2
};`,
        explanation:
          "Different engines optimize code differently, but all implement the ECMAScript standard. Write clean code and let the engine optimize for you.",
      },
    ],
  },
  {
    heading: "Execution Phases: Creation and Execution",
    paragraphs: [
      "JavaScript code execution happens in two distinct phases: Creation Phase and Execution Phase.",
      "During the Creation Phase, the JavaScript engine scans the code and allocates memory for variables and functions before any code actually runs.",
      "This happens silently, and it's why hoisting occurs - variables and functions are allocated before line-by-line execution begins.",
      "Understanding these phases explains JavaScript's quirks like variable hoisting, function hoisting, and the temporal dead zone.",
      "The execution phase is where code actually runs, variables are assigned, and functions are called.",
    ],
    examples: [
      {
        title: "Creation Phase Explains Hoisting",
        code: `// When this code is parsed, the engine does this in CREATION phase:
// 1. Allocate memory for 'name'
// 2. Initialize 'name' as undefined
// 3. Allocate memory for greet function

console.log(name); // undefined (not an error!)
var name = "Alice";
console.log(name); // "Alice"

// Function declarations are fully hoisted
greet(); // Works! Prints: Hello Alice

function greet() {
  console.log("Hello " + name);
}

// But function expressions are NOT fully hoisted
sayHi(); // Error! sayHi is undefined

var sayHi = function() {
  console.log("Hi!");
};`,
        explanation:
          "During creation phase, memory is allocated. var declarations are initialized as undefined (hoisted), function declarations are fully hoisted, but function expressions are not.",
      },
    ],
  },
  {
    heading: "Execution Context and Scope Chain",
    paragraphs: [
      "Every piece of code that runs in JavaScript runs within an Execution Context.",
      "A new execution context is created for the global scope and each function call.",
      "Each execution context has access to three components: Variable Object, Scope Chain, and the 'this' value.",
      "The scope chain determines what variables are accessible from within a function or block.",
      "This is how JavaScript implements nested function behavior and why inner functions can access outer function variables.",
    ],
    examples: [
      {
        title: "Execution Context and Scope Chain",
        code: `const globalVar = "I'm global";

function outer() {
  const outerVar = "I'm in outer";
  
  function inner() {
    const innerVar = "I'm in inner";
    
    // Scope chain: inner -> outer -> global
    console.log(innerVar);    // "I'm in inner"
    console.log(outerVar);    // "I'm in outer"
    console.log(globalVar);   // "I'm global"
  }
  
  inner();
  // console.log(innerVar);  // ReferenceError! Not in scope
}

outer();

// Execution contexts created:
// 1. Global Execution Context created
// 2. outer() called -> Function Execution Context created
// 3. inner() called -> Function Execution Context created
// 4. inner() returns -> its context removed
// 5. outer() returns -> its context removed
// 6. Program ends -> global context cleaned up`,
        explanation:
          "Each function creates its own execution context with its own scope. Inner functions can access outer scope but not vice versa.",
      },
    ],
  },
  {
    heading: "The Call Stack in Action",
    paragraphs: [
      "The call stack is a data structure that tracks function calls and execution order.",
      "When a function is called, it's pushed onto the stack. When it returns, it's popped off.",
      "If a function calls another function, the new function is pushed on top, and the original pauses.",
      "The call stack ensures functions execute in the correct order and that local variables are created and destroyed properly.",
      "Stack overflow occurs when the call stack grows too large (usually due to infinite recursion).",
    ],
    examples: [
      {
        title: "Call Stack Visualization",
        code: `function a() {
  b(); // Called here
  console.log("Back in a");
}

function b() {
  c(); // Called here
  console.log("Back in b");
}

function c() {
  console.log("In c");
}

a(); // Start here

// Call Stack Evolution:
// Call a() -> Stack: [a]
// a calls b() -> Stack: [a, b]
// b calls c() -> Stack: [a, b, c]
// c logs -> Stack: [a, b, c]
// c returns -> Stack: [a, b]
// console.log("Back in b") -> Stack: [a, b]
// b returns -> Stack: [a]
// console.log("Back in a") -> Stack: [a]
// a returns -> Stack: []

// Output:
// In c
// Back in b
// Back in a`,
        explanation:
          "The call stack is LIFO (Last In, First Out). Functions execute in the order they were called, and return in reverse order.",
      },
    ],
  },
  {
    heading: "The Event Loop and Web APIs",
    paragraphs: [
      "The Event Loop is what makes JavaScript's apparent concurrency possible in a single-threaded environment.",
      "When asynchronous operations like setTimeout, fetch, or DOM events occur, they're delegated to Web APIs (provided by the browser).",
      "The Web APIs run these operations outside the main thread and queue the callback functions.",
      "The Event Loop constantly checks if the call stack is empty. When it is, it moves callbacks from the queue to the call stack.",
      "This allows JavaScript to handle I/O and other time-consuming operations without blocking user interactions.",
    ],
    examples: [
      {
        title: "Event Loop with setTimeout",
        code: `console.log("1. Start");

setTimeout(() => {
  console.log("2. Inside setTimeout");
}, 0);

console.log("3. End");

// Execution flow:
// 1. "1. Start" logs immediately
// 2. setTimeout detected -> callback sent to Web APIs
// 3. "3. End" logs immediately
// 4. Main stack is empty
// 5. Event Loop checks queue and finds the callback
// 6. "2. Inside setTimeout" logs

// OUTPUT:
// 1. Start
// 3. End
// 2. Inside setTimeout

// Even though setTimeout is 0ms, the callback doesn't run until
// the main stack is clear and the event loop processes it!`,
        explanation:
          "setTimeout doesn't guarantee immediate execution. The callback waits in a queue until the call stack is empty and the event loop processes it.",
      },
    ],
  },
  {
    heading: "Microtasks vs Macrotasks",
    paragraphs: [
      "Not all callbacks are equal. JavaScript has two types of task queues: Microtask Queue and Macrotask (Task) Queue.",
      "Microtasks include Promise callbacks, queueMicrotask, and MutationObserver callbacks.",
      "Macrotasks include setTimeout, setInterval, setImmediate, I/O, and UI rendering.",
      "After each macrotask, ALL microtasks are processed before the next macrotask runs.",
      "This priority system is crucial for understanding async code behavior and interview questions.",
    ],
    examples: [
      {
        title: "Microtask vs Macrotask Priority",
        code: `console.log("Script start");

// Macrotask
setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

// Microtasks
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

// Another Macrotask
setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("Script end");

// Order of execution:
// 1. Script start (synchronous)
// 2. Script end (synchronous)
// 3. Promise 1 (microtask)
// 4. Promise 2 (microtask)
// 5. setTimeout 1 (macrotask)
// 6. setTimeout 2 (macrotask)

// Why? Because after synchronous code:
// Event loop processes ALL microtasks first
// Then processes ONE macrotask
// Then checks for more microtasks
// And repeats`,
        explanation:
          "Microtasks have higher priority than macrotasks. The event loop processes all microtasks before moving to the next macrotask.",
      },
    ],
  },
  {
    heading: "Memory Management and Garbage Collection",
    paragraphs: [
      "JavaScript manages memory automatically through garbage collection.",
      "Memory is allocated when values are created and deallocated when values are no longer needed.",
      "The call stack stores primitive values and references, while the heap stores complex objects.",
      "Garbage collectors determine when objects are no longer reachable and free their memory.",
      "Understanding memory helps you avoid memory leaks, especially with event listeners and closures.",
    ],
    examples: [
      {
        title: "Stack vs Heap Memory",
        code: `// Stack - Automatically freed when function returns
function stackExample() {
  const num = 42;        // Stack: 42
  const str = "hello";   // Stack: "hello"
  return num + str.length;
}
// num and str are removed from stack when function returns

// Heap - Freed by garbage collector when unreachable
function heapExample() {
  const obj = {          // Heap: object stored here
    name: "John",        // Stack: reference to heap object
    age: 30
  };
  return obj;
}

const person = heapExample();
// obj reference is in person variable
// Heap object still exists because it's referenced

// Memory leak example:
function memoryLeak() {
  const hugArray = new Array(1000000).fill("data");
  return () => {
    console.log(hugArray.length);  // Closure keeps reference
  };  // hugArray stays in memory even after function ends!
}

const callback = memoryLeak();
// hugArray is still allocated because closure references it`,
        explanation:
          "Primitives are stored on the stack and automatically freed. Objects are on the heap and freed when unreachable. Closures can cause memory leaks by holding references.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Thinking async code runs in parallel threads",
    fix: "JavaScript is single-threaded. Async operations are delegated to Web APIs and queued for later execution.",
  },
  {
    title: "Assuming setTimeout(fn, 0) runs immediately after",
    fix: "It queues the callback. It only runs when the call stack is clear AND the event loop processes it.",
  },
  {
    title: "Not understanding hoisting",
    fix: "Variables and functions are allocated memory during creation phase, before execution phase begins.",
  },
  {
    title: "Confusing microtasks and macrotasks",
    fix: "Microtasks (Promises) always run before macrotasks (setTimeout) in the same event loop cycle.",
  },
  {
    title: "Ignoring scope chain behavior",
    fix: "Inner functions access outer scope through the scope chain, but outer functions cannot access inner scope.",
  },
];

const faqs = [
  {
    q: "Is JavaScript single-threaded?",
    a: "Yes, JavaScript runs on a single main thread. However, Web APIs handle time-consuming operations, and the event loop coordinates callbacks.",
  },
  {
    q: "How does async/await work internally?",
    a: "Async functions are syntactic sugar over Promises. They pause execution at await points and resume when the Promise settles.",
  },
  {
    q: "Why do Promises run before setTimeout?",
    a: "Promise callbacks are microtasks with higher priority than macrotasks like setTimeout. The event loop processes all microtasks before the next macrotask.",
  },
  {
    q: "What causes stack overflow?",
    a: "Infinite recursion or excessively deep call stacks. Each recursive call adds to the stack until memory is exhausted.",
  },
  {
    q: "Is hoisting good or bad?",
    a: "Hoisting is how JavaScript works, not good or bad. Using const/let and function declarations helps you work with it effectively.",
  },
  {
    q: "Can I access closure variables?",
    a: "No, closure variables are private by design. This is what makes closures useful for data encapsulation.",
  },
  {
    q: "When should I use microtasks vs macrotasks?",
    a: "Rarely. Use Promises for operations that should complete first, setTimeout for lower-priority deferred work.",
  },
  {
    q: "Do I need to optimize memory manually?",
    a: "Rarely. The garbage collector handles most cleanup. Just avoid common patterns like circular references and unused event listeners.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HowJavascriptWorksPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          How JavaScript Works: Engine, Call Stack, and Event Loop
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master the internals of JavaScript execution. Understand execution contexts, the call stack, event loop, Web APIs, and how JavaScript handles asynchronous operations. Essential knowledge for debugging complex issues and acing technical interviews.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Understanding how JavaScript works internally is the difference between debugging like a professional and guessing randomly. Knowledge of execution contexts, call stacks, and event loops directly impacts your ability to write efficient async code, understand closures, and pass technical interviews.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {section.examples && section.examples.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.examples.map((ex) => (
                  <CodeExample
                    key={ex.title}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </article>
        ))}

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Misconceptions</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
