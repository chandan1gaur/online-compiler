import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Event Loop - Complete Guide to Asynchronous Execution",
  description: "Master JavaScript Event Loop with comprehensive guide covering call stack, callback queue, microtasks, macrotasks, and asynchronous programming patterns.",
  keywords: [
    "javascript event loop",
    "javascript asynchronous",
    "call stack",
    "callback queue",
    "microtasks macrotasks",
    "javascript runtime",
    "setTimeout",
    "promises event loop",
    "async await event loop",
    "javascript execution model",
  ],
  openGraph: {
    title: "JavaScript Event Loop - Complete Guide to Asynchronous Execution",
    description: "Master JavaScript Event Loop with comprehensive guide covering call stack, callback queue, microtasks, macrotasks, and asynchronous programming patterns.",
    url: "/javascript/execution-context/event-loop",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Event Loop Tutorial",
    description: "Complete guide to understanding JavaScript Event Loop - asynchronous execution, call stack, and task queues.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/execution-context/event-loop" },
};

const sections = [
  {
    heading: "What is the JavaScript Event Loop?",
    paragraphs: [
      "The Event Loop is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It handles the execution of code, collection of events, and execution of queued sub-tasks.",
      "JavaScript has a single thread of execution, meaning it can only do one thing at a time. The Event Loop enables asynchronous behavior by coordinating between the Call Stack, Callback Queue, and Web APIs.",
      "Understanding the Event Loop is crucial for writing efficient asynchronous JavaScript code and debugging timing-related issues in your applications.",
    ],
    examples: [
      {
        title: "Basic Event Loop Concept",
        code:`console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout callback`,
        explanation: "Even with 0ms timeout, the callback executes after synchronous code completes, demonstrating the Event Loop's role.",
      },
    ],
  },
  {
    heading: "Components of the Event Loop",
    paragraphs: [
      "The Event Loop consists of several key components that work together to manage JavaScript execution: the Call Stack, Web APIs, Callback Queue, and Microtask Queue.",
    ],
    examples: [
      {
        title: "Call Stack",
        code:`function first() {
  console.log('First function start');
  second();
  console.log('First function end');
}

function second() {
  console.log('Second function start');
  third();
  console.log('Second function end');
}

function third() {
  console.log('Third function');
}

first();

// Output:
// First function start
// Second function start
// Third function
// Second function end
// First function end`,
        explanation: "The Call Stack manages function execution order using LIFO (Last In, First Out) principle.",
      },
      {
        title: "Web APIs and Callback Queue",
        code:`console.log('1. Synchronous code');

setTimeout(() => {
  console.log('3. Timeout callback');
}, 1000);

console.log('2. More synchronous code');

// Web API handles the timeout
// After 1 second, callback moves to Callback Queue
// Event Loop checks Call Stack, finds it empty, moves callback to Call Stack

// Output:
// 1. Synchronous code
// 2. More synchronous code
// 3. Timeout callback`,
        explanation: "Web APIs handle asynchronous operations, and completed callbacks are queued for execution.",
      },
    ],
  },
  {
    heading: "Microtasks vs Macrotasks",
    paragraphs: [
      "JavaScript has two types of task queues: Microtask Queue (higher priority) and Macrotask Queue (Callback Queue). Microtasks are executed before macrotasks in each Event Loop tick.",
      "Promises and MutationObserver callbacks are microtasks, while setTimeout, setInterval, and I/O operations are macrotasks.",
    ],
    examples: [
      {
        title: "Microtasks vs Macrotasks Priority",
        code:`console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise');
});

console.log('End');

// Output:
// Start
// End
// Microtask: Promise
// Macrotask: setTimeout`,
        explanation: "Microtasks execute before macrotasks, even when macrotasks have shorter delays.",
      },
      {
        title: "Multiple Microtasks",
        code:`console.log('Start');

setTimeout(() => {
  console.log('Macrotask 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask 1');
  return Promise.resolve();
}).then(() => {
  console.log('Microtask 2');
});

Promise.resolve().then(() => {
  console.log('Microtask 3');
});

console.log('End');

// Output:
// Start
// End
// Microtask 1
// Microtask 3
// Microtask 2
// Macrotask 1`,
        explanation: "All microtasks execute before any macrotasks, and chained microtasks execute in order.",
      },
    ],
  },
  {
    heading: "Event Loop Execution Order",
    paragraphs: [
      "The Event Loop follows a specific execution order in each iteration (tick):",
      "1. Execute all code in the Call Stack",
      "2. Execute all microtasks in the Microtask Queue",
      "3. Execute one macrotask from the Macrotask Queue",
      "4. Repeat",
    ],
    examples: [
      {
        title: "Complete Event Loop Cycle",
        code:`console.log('1. Synchronous start');

setTimeout(() => {
  console.log('4. Macrotask (setTimeout)');
  Promise.resolve().then(() => {
    console.log('5. Microtask in macrotask');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('2. First microtask');
  Promise.resolve().then(() => {
    console.log('3. Nested microtask');
  });
});

console.log('End synchronous code');

// Execution order:
// 1. Synchronous start
// End synchronous code
// 2. First microtask
// 3. Nested microtask
// 4. Macrotask (setTimeout)
// 5. Microtask in macrotask`,
        explanation: "Shows the complete Event Loop execution order with nested tasks.",
      },
    ],
  },
  {
    heading: "Common Event Loop Patterns",
    paragraphs: [
      "Understanding Event Loop behavior helps explain many JavaScript patterns and potential pitfalls.",
    ],
    examples: [
      {
        title: "setTimeout with 0 Delay",
        code:`console.log('Start');

setTimeout(() => {
  console.log('Timeout 0ms');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise resolved');
});

console.log('End');

// Why 0ms timeout doesn't execute immediately:
// - setTimeout schedules for next macrotask
// - Promise schedules for current microtask
// - Microtasks run before macrotasks

// Output:
// Start
// End
// Promise resolved
// Timeout 0ms`,
        explanation: "Even 0ms setTimeout doesn't execute immediately due to Event Loop prioritization.",
      },
      {
        title: "Blocking the Event Loop",
        code:`console.log('Start');

// This blocks the Event Loop
const start = Date.now();
while (Date.now() - start < 3000) {
  // Busy wait for 3 seconds
}

console.log('End - 3 seconds later');

// Any setTimeout or Promise callbacks
// scheduled during this 3 seconds
// will execute after the blocking code completes`,
        explanation: "Long-running synchronous code blocks the Event Loop, delaying all asynchronous operations.",
      },
      {
        title: "Event Loop Starvation",
        code:`// Dangerous: Infinite microtasks
Promise.resolve().then(function loop() {
  console.log('Microtask loop');
  return Promise.resolve().then(loop);
});

// This will prevent any macrotasks from executing
// The UI will freeze, setTimeout callbacks won't run
setTimeout(() => {
  console.log('This will never execute');
}, 0);`,
        explanation: "Infinite microtask chains can starve the Event Loop, preventing macrotask execution.",
      },
    ],
  },
  {
    heading: "Async/Await and Event Loop",
    paragraphs: [
      "Async/await is syntactic sugar over Promises and follows the same Event Loop rules.",
    ],
    examples: [
      {
        title: "Async/Await Event Loop Behavior",
        code:`async function asyncExample() {
  console.log('1. Function start');

  await Promise.resolve();
  console.log('3. After first await');

  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('5. After second await');

  console.log('6. Function end');
}

console.log('0. Before function call');
asyncExample();
console.log('2. After function call');

// Output:
// 0. Before function call
// 1. Function start
// 2. After function call
// 3. After first await
// 4. Timeout callback (from setTimeout)
// 5. After second await
// 6. Function end`,
        explanation: "Async/await uses Promises internally, so it follows Event Loop rules for microtask execution.",
      },
    ],
  },
  {
    heading: "Event Loop in Different Environments",
    paragraphs: [
      "The Event Loop behaves differently in browsers vs Node.js, though the core concepts are similar.",
    ],
    examples: [
      {
        title: "Browser Event Loop",
        code:`// Browser-specific APIs
console.log('Synchronous');

requestAnimationFrame(() => {
  console.log('Animation frame callback');
});

setTimeout(() => {
  console.log('Timer callback');
}, 0);

// User interactions (clicks, scrolls) also queue tasks
document.addEventListener('click', () => {
  console.log('Click handler');
});`,
        explanation: "Browsers have additional task sources like animation frames and user interactions.",
      },
      {
        title: "Node.js Event Loop",
        code:`// Node.js has additional phases
const fs = require('fs');

console.log('Start');

fs.readFile('file.txt', () => {
  console.log('File read callback');
});

setTimeout(() => {
  console.log('Timer callback');
}, 0);

process.nextTick(() => {
  console.log('nextTick callback');
});

Promise.resolve().then(() => {
  console.log('Promise microtask');
});

// Node.js Event Loop phases:
// 1. Timers (setTimeout, setInterval)
// 2. Pending callbacks (I/O callbacks)
// 3. Idle/Prepare
// 4. Poll (I/O)
// 5. Check (setImmediate)
// 6. Close callbacks`,
        explanation: "Node.js has a more complex Event Loop with multiple phases for different types of operations.",
      },
    ],
  },
  {
    heading: "Debugging Event Loop Issues",
    paragraphs: [
      "Common Event Loop problems and how to debug them.",
    ],
    examples: [
      {
        title: "Detecting Event Loop Blocking",
        code:`// Monitor Event Loop lag
let lastTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
  const lag = currentTime - lastTime - 1000;

  if (lag > 50) { // More than 50ms lag
    console.warn(\`Event Loop blocked for \${lag}ms\`);
  }

  lastTime = currentTime;
}, 1000);`,
        explanation: "Monitor Event Loop performance to detect blocking operations.",
      },
      {
        title: "Breaking Long Tasks",
        code:`// Break long synchronous work into chunks
function processLargeArray(array) {
  const chunkSize = 1000;
  let index = 0;

  function processChunk() {
    const endIndex = Math.min(index + chunkSize, array.length);

    for (let i = index; i < endIndex; i++) {
      // Process array[i]
      heavyComputation(array[i]);
    }

    index = endIndex;

    if (index < array.length) {
      // Schedule next chunk for next Event Loop tick
      setTimeout(processChunk, 0);
    }
  }

  processChunk();
}`,
        explanation: "Break long synchronous operations into smaller chunks to prevent Event Loop blocking.",
      },
    ],
  },
  {
    heading: "Interview Questions about Event Loop",
    paragraphs: [
      "Event Loop questions are very common in JavaScript interviews.",
    ],
    examples: [
      {
        title: "Classic Interview Question",
        code:`console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');

// What will be the output?
// Answer: A, D, C, B

// Explanation:
// 1. 'A' - synchronous
// 2. setTimeout queues 'B' in macrotask queue
// 3. Promise queues 'C' in microtask queue
// 4. 'D' - synchronous
// 5. Microtasks execute: 'C'
// 6. Macrotasks execute: 'B'`,
        explanation: "Understanding task queue priorities is crucial for predicting execution order.",
      },
      {
        title: "Complex Event Loop Scenario",
        code:`setTimeout(() => console.log('A'), 0);

Promise.resolve().then(() => {
  console.log('B');
  setTimeout(() => console.log('C'), 0);
  Promise.resolve().then(() => console.log('D'));
});

setTimeout(() => console.log('E'), 0);

// Output: B, D, A, C, E

// Why?
// 1. Two setTimeout calls queue A and E in macrotask queue
// 2. Promise queues B, D, C in microtask and macrotask queues
// 3. First tick: execute microtask B, then nested microtask D
// 4. Second tick: execute macrotask A, then queue C from A's microtask
// 5. Third tick: execute macrotask E
// 6. Fourth tick: execute macrotask C`,
        explanation: "Complex scenarios require understanding nested task scheduling.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Assuming setTimeout executes immediately",
    fix: "Remember that setTimeout always queues for the next Event Loop tick, even with 0ms delay.",
  },
  {
    title: "Blocking the Event Loop with long operations",
    fix: "Break long synchronous operations into smaller chunks using setTimeout or setImmediate.",
  },
  {
    title: "Creating infinite microtask chains",
    fix: "Be careful with recursive Promise chains that can starve the Event Loop.",
  },
  {
    title: "Misunderstanding task queue priorities",
    fix: "Remember: microtasks always execute before macrotasks in each Event Loop tick.",
  },
  {
    title: "Not considering browser vs Node.js differences",
    fix: "Understand that Event Loop implementations vary between environments.",
  },
  {
    title: "Debugging timing issues without Event Loop knowledge",
    fix: "Use Event Loop understanding to debug async timing and execution order issues.",
  },
];

const faqs = [
  {
    q: "What is the JavaScript Event Loop?",
    a: "The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations by coordinating between the Call Stack, Web APIs, and task queues.",
  },
  {
    q: "Why does JavaScript need an Event Loop?",
    a: "JavaScript is single-threaded, so the Event Loop enables non-blocking asynchronous operations like timers, I/O, and user interactions.",
  },
  {
    q: "What's the difference between microtasks and macrotasks?",
    a: "Microtasks (Promises, MutationObserver) execute before macrotasks (setTimeout, setInterval) in each Event Loop tick.",
  },
  {
    q: "Why does setTimeout with 0ms delay not execute immediately?",
    a: "setTimeout always queues callbacks as macrotasks, which execute after all microtasks in the current tick complete.",
  },
  {
    q: "Can the Event Loop be blocked?",
    a: "Yes, long-running synchronous code blocks the Event Loop, delaying all asynchronous operations and potentially freezing the UI.",
  },
  {
    q: "How does async/await relate to the Event Loop?",
    a: "Async/await uses Promises internally, so it follows the same Event Loop rules with microtask execution.",
  },
  {
    q: "What's the difference between browser and Node.js Event Loops?",
    a: "Both follow similar principles, but Node.js has additional phases for I/O operations, while browsers have phases for rendering and user interactions.",
  },
  {
    q: "How can I prevent Event Loop blocking?",
    a: "Break long operations into smaller chunks, use asynchronous APIs, and avoid synchronous busy-waiting loops.",
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

export default function EventLoopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-full px-4 pt-0 pb-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          JavaScript Event Loop - Complete Guide to Asynchronous Execution
        </h1>
        <p className="text-lg mb-8 text-center">
          Master the JavaScript Event Loop with comprehensive examples covering call stack, task queues,
          microtasks vs macrotasks, and asynchronous programming patterns.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Understanding the JavaScript Event Loop</h2>

          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{section.heading}</h3>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300">
                  {p}
                </p>
              ))}
              {section.examples && section.examples.length > 0 && (
                <div className="space-y-6">
                  {section.examples.map((ex, exIdx) => (
                    <CodeExample
                      key={exIdx}
                      title={ex.title}
                      code={ex.code}
                      explanation={ex.explanation}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Common Event Loop Mistakes</h2>
          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700 dark:text-red-400">
                  {mistake.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <strong>Solution:</strong> {mistake.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Event Loop FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Execution Context", href: "/javascript/execution-context" },
              { label: "Call Stack", href: "/javascript/execution-context/call-stack" },
              { label: "Promises", href: "/javascript/async/promises" },
              { label: "Async/Await", href: "/javascript/async/async-await" },
              { label: "setTimeout", href: "/javascript/async/timers" },
              { label: "Interview Questions", href: "/javascript/interview-questions" },
              { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Event Loop enables asynchronous behavior in single-threaded JavaScript</li>
            <li>Call Stack executes synchronous code, task queues handle asynchronous callbacks</li>
            <li>Microtasks (Promises) execute before macrotasks (setTimeout) in each tick</li>
            <li>setTimeout with 0ms delay doesn't execute immediately due to queue prioritization</li>
            <li>Long synchronous operations can block the Event Loop and freeze the UI</li>
            <li>Understanding Event Loop is crucial for debugging async timing issues</li>
          </ul>
        </div>
      </div>
    </>
  );
}