import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript in Browser vs Node.js: Real Differences Explained",
  description:
    "Learn the real difference between JavaScript in the browser and Node.js: environment, APIs, security, modules, use cases, performance, and interview-ready explanations.",
  keywords: [
    "javascript in browser vs node js",
    "browser javascript vs nodejs",
    "node js runtime",
    "frontend vs backend javascript",
    "javascript environment differences",
    "node js vs browser api",
    "full stack javascript",
  ],
  openGraph: {
    title: "JavaScript in Browser vs Node.js: Real Differences Explained",
    description:
      "Learn the real difference between JavaScript in the browser and Node.js: environment, APIs, security, modules, use cases, performance, and interview-ready explanations.",
    url: "/javascript/javascript-in-browser-vs-nodejs",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript in Browser vs Node.js: Real Differences Explained",
    description:
      "Learn the real difference between JavaScript in the browser and Node.js: environment, APIs, security, modules, use cases, performance, and interview-ready explanations.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/javascript-in-browser-vs-nodejs" },
};

const sections = [
  {
    heading: "What Is JavaScript in the Browser?",
    paragraphs: [
      "In browsers like Chrome, Firefox, and Safari, JavaScript is primarily used to build interactive user interfaces.",
      "Browser JavaScript works alongside HTML (structure), CSS (styling), and the DOM (Document Object Model).",
      "The browser provides built-in Web APIs so JavaScript can interact with the webpage.",
    ],
    bullets: [
      "Modify HTML elements dynamically",
      "Handle user events (click, scroll, input)",
      "Validate forms before submission",
      "Make API requests using fetch",
      "Animate elements",
      "Store data in LocalStorage or SessionStorage",
    ],
    examples: [
      {
        title: "Browser Example (DOM Event)",
        code: `document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});`,
        explanation: "This works only in browser context because it relies on DOM APIs like document and event listeners.",
      },
    ],
  },
  {
    heading: "What Is Node.js?",
    paragraphs: [
      "Node.js is a runtime environment that allows JavaScript to run outside the browser.",
      "Introduced in 2009 and built on Chrome's V8 engine, Node.js is widely used for backend development.",
    ],
    bullets: [
      "Building APIs",
      "Database communication",
      "Real-time systems",
      "Server-side business logic",
      "Command-line tools",
    ],
  },
  {
    heading: "Key Differences Between Browser JavaScript and Node.js",
    paragraphs: ["The same language, but different runtime capabilities:"],
    bullets: [
      "Environment: Browser runs on user device, Node.js runs on server/local machine.",
      "Purpose: Browser for UI/client logic, Node.js for backend/server logic.",
      "APIs: Browser has window/document/DOM; Node.js has fs, process, network and OS modules.",
      "File system: Browser is sandboxed; Node.js can read/write files.",
      "Module system: Browser uses ES modules, Node.js supports CommonJS and ES modules.",
      "Security: Browser has strict sandbox; Node.js has deeper system access and requires stronger backend security controls.",
    ],
  },
  {
    heading: "Similarities Between Browser JavaScript and Node.js",
    paragraphs: ["Core JavaScript language features remain the same in both environments:"],
    bullets: [
      "let and const",
      "Arrow functions",
      "Classes",
      "Promises and async/await",
      "Objects, arrays, closures",
      "Event loop model",
    ],
  },
  {
    heading: "When Should You Use Browser JavaScript?",
    paragraphs: ["Use browser JavaScript for frontend and user interaction tasks:"],
    bullets: [
      "Interactive UIs",
      "User input handling",
      "Animations and dynamic content",
      "Client-side app behavior",
      "Frontend frameworks like React, Angular, Vue",
    ],
  },
  {
    heading: "When Should You Use Node.js?",
    paragraphs: ["Use Node.js for backend and server-focused development:"],
    bullets: [
      "REST APIs",
      "Authentication and authorization",
      "Database operations",
      "Business logic processing",
      "Real-time systems (chat, streaming)",
      "Frameworks like Express",
    ],
  },
  {
    heading: "Can You Use Both Together?",
    paragraphs: [
      "Yes. Modern applications usually combine both environments:",
    ],
    bullets: [
      "Frontend: React in browser",
      "Backend: Node.js + Express",
      "Database: MongoDB / MySQL",
      "This approach is called Full-Stack JavaScript development.",
    ],
  },
  {
    heading: "Performance Considerations",
    paragraphs: ["Performance characteristics differ by environment:"],
    bullets: [
      "Browser performance depends on user device, browser optimization, and network conditions.",
      "Node.js performance depends on server resources, architecture, and async design.",
      "Node.js is strong in high-concurrency workloads due to non-blocking event-driven architecture.",
    ],
  },
  {
    heading: "Interview Insight",
    paragraphs: [
      "Common question: Is Node.js a programming language?",
      "Answer: No. Node.js is a runtime environment that executes JavaScript outside the browser.",
    ],
  },
  {
    heading: "Environment Globals",
    paragraphs: [
      "Different runtime environments provide different global objects and APIs.",
    ],
    examples: [
      {
        title: "Environment Globals",
        code: `// Browser
console.log(window.location.href);

// Node.js
console.log(__dirname);`,
        explanation: "window exists in browser, while __dirname is a Node.js runtime global.",
      },
    ],
  },
  {
    heading: "Node.js Example (HTTP Server)",
    paragraphs: [
      "Node.js can create servers and handle network operations that browsers cannot do.",
    ],
    examples: [
      {
        title: "Node.js Example (HTTP Server)",
        code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js");
});

server.listen(3000);`,
        explanation: "This works in Node.js runtime and creates a server, which browser JavaScript cannot do directly.",
      },
    ],
  },
  {
    heading: "Final Summary",
    paragraphs: [
      "Browser JavaScript is focused on interactive UI and works with HTML, CSS, and DOM.",
      "Node.js runs JavaScript outside the browser for backend systems, APIs, and server logic.",
      "If you want to build complete modern applications, you should understand and use both.",
    ],
  },
  {
    heading: "SEO Topic Cluster Strategy",
    paragraphs: [
      "For stronger topic authority, connect this article with internal links to related JavaScript core pages.",
    ],
    bullets: [
      "What is JavaScript",
      "How JavaScript Works",
      "Event Loop Explained",
      "Node.js Introduction",
      "Express.js Tutorial",
    ],
  },
];

const mistakes = [
  {
    title: "Thinking Node.js is a language",
    fix: "Node.js is a runtime environment; JavaScript is the language.",
  },
  {
    title: "Using browser APIs in Node.js",
    fix: "document/window are not available in Node.js unless a DOM-like environment is added.",
  },
  {
    title: "Ignoring backend security",
    fix: "Node.js has wider system access, so validate input and secure authentication/authorization layers carefully.",
  },
];

const faqs = [
  {
    q: "Is JavaScript different in browser and Node.js?",
    a: "Core JavaScript is the same, but available APIs and runtime capabilities are different.",
  },
  {
    q: "Can Node.js access the DOM?",
    a: "Not natively. DOM APIs are browser-provided and not part of standard Node.js runtime.",
  },
  {
    q: "Can browser JavaScript read local files directly?",
    a: "Not freely. Browsers are sandboxed for security and have limited controlled file access.",
  },
  {
    q: "Should I learn browser JS or Node.js first?",
    a: "Start with JavaScript fundamentals, then choose based on your path: frontend, backend, or full-stack.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function JavascriptBrowserVsNodePage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript in the Browser vs Node.js: What Is the Real Difference?</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          JavaScript was originally designed to run inside web browsers. Today, it also runs on servers using Node.js. Both use the same language, but they run in different environments and provide different capabilities.
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
          If you want to become a frontend, backend, or full-stack developer, understanding this distinction is essential.
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
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
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
              { label: "Introduction to JavaScript", href: "/javascript" },
              { label: "How JavaScript Works", href: "/javascript/how-javascript-works" },
              { label: "History of JavaScript", href: "/javascript/history-of-javascript" },
              { label: "Async/Await", href: "/javascript/async-await" },
              { label: "Promises", href: "/javascript/promises" },
              { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
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
