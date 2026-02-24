import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

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

export default function JavascriptBrowserVsNodePage() {
  return (
    <JsTutorialTemplate
      title="JavaScript in the Browser vs Node.js: What Is the Real Difference?"
      intro="JavaScript was originally designed to run inside web browsers. Today, it also runs on servers using Node.js. Both use the same language, but they run in different environments and provide different capabilities."
      why="If you want to become a frontend, backend, or full-stack developer, understanding this distinction is essential."
      sections={[
        {
          heading: "What Is JavaScript in the Browser?",
          paragraphs: [
            "In browsers like Chrome, Firefox, and Safari, JavaScript is primarily used to build interactive user interfaces.",
            "Browser JavaScript works alongside HTML (structure), CSS (styling), and the DOM (Document Object Model).",
            "The browser provides built-in Web APIs so JavaScript can interact with the webpage.",
          ],
        },
        {
          heading: "What You Can Do in the Browser",
          paragraphs: ["Browser JavaScript can:"],
          bullets: [
            "Modify HTML elements dynamically",
            "Handle user events (click, scroll, input)",
            "Validate forms before submission",
            "Make API requests using fetch",
            "Animate elements",
            "Store data in LocalStorage or SessionStorage",
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
      ]}
      examples={[
        {
          title: "Browser Example (DOM Event)",
          code: `document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});`,
          explanation:
            "This works only in browser context because it relies on DOM APIs like document and event listeners.",
        },
        {
          title: "Node.js Example (HTTP Server)",
          code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js");
});

server.listen(3000);`,
          explanation:
            "This works in Node.js runtime and creates a server, which browser JavaScript cannot do directly.",
        },
        {
          title: "Environment Globals",
          code: `// Browser
console.log(window.location.href);

// Node.js
console.log(__dirname);`,
          explanation:
            "window exists in browser, while __dirname is a Node.js runtime global.",
        },
      ]}
      mistakes={[
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
      ]}
      faqs={[
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
      ]}
      related={[
        { label: "Introduction to JavaScript", href: "/javascript" },
        { label: "How JavaScript Works", href: "/javascript/how-javascript-works" },
        { label: "History of JavaScript", href: "/javascript/history-of-javascript" },
        { label: "Async/Await", href: "/javascript/async-await" },
        { label: "Promises", href: "/javascript/promises" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
