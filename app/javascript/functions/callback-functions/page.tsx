import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Callback Functions - Asynchronous Programming",
  description: "Learn JavaScript callback functions. Master passing functions as arguments and handling callbacks.",
  keywords: [
    "javascript callback",
    "callback functions",
    "asynchronous callbacks",
    "event callbacks",
    "javascript functions",
  ],
  openGraph: {
    title: "JavaScript Callback Functions",
    description: "Learn callback functions for event handling and asynchronous operations.",
    url: "/javascript/functions/callback-functions",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Callback Functions",
    description: "Master callback functions for handling events and async operations.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/callback-functions" },
};

const sections = [
  {
    heading: "What are Callback Functions?",
    paragraphs: [
      "A callback function is a function passed as an argument to another function. The receiving function can call the callback to perform some action, often after an event occurs or operation completes.",
      "Callbacks are fundamental to JavaScript's event-driven and asynchronous nature.",
    ],
    examples: [
      {
        title: "Basic Callback Function",
        code: `// Function that accepts a callback
function greet(name, callback) {
  const greeting = "Hello, " + name;
  callback(greeting);
}

// Callback function
function displayGreeting(message) {
  console.log(message);
}

// Pass the callback function
greet("Alice", displayGreeting);
// Output: Hello, Alice

// Using anonymous function as callback
greet("Bob", function(message) {
  console.log(">> " + message);
});
// Output: >> Hello, Bob

// Using arrow function as callback
greet("Charlie", (message) => console.log(message.toUpperCase()));
// Output: HELLO, CHARLIE`,
        explanation: "Callbacks are functions passed to other functions. They're called at specific times.",
      },
    ],
  },
  {
    heading: "Event Listeners with Callbacks",
    paragraphs: [
      "Callbacks are heavily used for event handling. When an event occurs, the callback function is called.",
    ],
    examples: [
      {
        title: "Event Handlers",
        code: `// HTML: <button id="myBtn">Click me</button>

const button = document.getElementById("myBtn");

// Click event with callback
button?.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Using arrow function
button?.addEventListener("click", () => {
  console.log("Button clicked again!");
});

// Callback receives event object
button?.addEventListener("click", function(event) {
  console.log("Click at:", event.clientX, event.clientY);
});

// Multiple event listeners
button?.addEventListener("mouseenter", () => console.log("Mouse entered"));
button?.addEventListener("mouseleave", () => console.log("Mouse left"));`,
        explanation: "addEventListener uses callbacks to respond to user events.",
      },
    ],
  },
  {
    heading: "Array Methods with Callbacks",
    paragraphs: [
      "Array methods like map, filter, reduce, and forEach use callbacks to process elements.",
    ],
    examples: [
      {
        title: "Array Methods",
        code: `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - keep elements that match condition
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// forEach - execute for each element
numbers.forEach((num, index) => {
  console.log("Index " + index + ": " + num);
});

// reduce - accumulate into single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// find - return first match
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2`,
        explanation: "Array methods use callbacks to iterate and transform collections.",
      },
    ],
  },
  {
    heading: "Asynchronous Callbacks",
    paragraphs: [
      "Callbacks are essential for asynchronous operations like timers, file reading, and API calls. The callback is called when the operation completes.",
    ],
    examples: [
      {
        title: "Asynchronous Operations",
        code: `// setTimeout - run code after delay
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval - run code repeatedly
const id = setInterval(function() {
  console.log("Repeat every 1 second");
}, 1000);

// Stop interval
setTimeout(() => clearInterval(id), 5000);

// Fetch API with callbacks
fetch("https://api.example.com/data")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Data:", data);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

// File operations (Node.js)
const fs = require("fs");
fs.readFile("file.txt", "utf8", function(err, data) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File content:", data);
  }
});`,
        explanation: "Callbacks handle completion of asynchronous operations.",
      },
    ],
  },
  {
    heading: "Callback Hell (Callback Pyramid of Doom)",
    paragraphs: [
      "When callbacks are deeply nested, code becomes hard to read. This is called 'callback hell' or 'callback pyramid of doom'.",
      "Modern JavaScript provides Promises and async/await to handle this issue more elegantly.",
    ],
    examples: [
      {
        title: "Callback Hell and Solutions",
        code: `// Callback Hell - deeply nested, hard to read
getUser(userId, function(err, user) {
  if (err) {
    console.log(err);
  } else {
    getOrders(user.id, function(err, orders) {
      if (err) {
        console.log(err);
      } else {
        getOrderDetails(orders[0].id, function(err, details) {
          if (err) {
            console.log(err);
          } else {
            console.log(details);
          }
        });
      }
    });
  }
});

// Better: Using Promises
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => console.log(details))
  .catch(err => console.log(err));

// Best: Using async/await
async function displayOrderDetails() {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    console.log(details);
  } catch (err) {
    console.log(err);
  }
}`,
        explanation: "Callbacks can lead to hard-to-read code. Use Promises or async/await for cleaner asynchronous code.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting to pass the callback function",
    fix: "Pass the function itself, not the result of calling it. Use 'callback' not 'callback()'.",
  },
  {
    title: "Not handling errors in callbacks",
    fix: "Always check for errors, especially in asynchronous callbacks. Use try/catch or .catch().",
  },
  {
    title: "Callback hell from excessive nesting",
    fix: "Use Promises or async/await instead of deeply nested callbacks for better readability.",
  },
];

const faqs = [
  {
    q: "What is a callback function?",
    a: "A callback function is a function passed as an argument to another function. It's called after some event occurs or operation completes.",
  },
  {
    q: "When are callbacks used?",
    a: "Callbacks are used for event handling, array iteration, asynchronous operations (timers, API calls, file operations), and more.",
  },
  {
    q: "What is callback hell?",
    a: "Callback hell occurs when callbacks are deeply nested, making code hard to read. Use Promises or async/await to avoid this.",
  },
  {
    q: "How are callbacks different from Promises?",
    a: "Callbacks are functions passed to other functions. Promises are objects representing eventual completion. Promises provide better error handling and readability.",
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

export default function CallbackFunctionsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Callback Functions
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master callback functions for event handling and asynchronous programming.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try in Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Callbacks are fundamental to JavaScript. They enable event handling, asynchronous operations, and functional programming patterns essential to modern web development.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">FAQ</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related Topics</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Function Expression", href: "/javascript/functions/function-expression" },
              { label: "Promises", href: "/javascript/promises" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex rounded-md border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}