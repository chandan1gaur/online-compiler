import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "History of JavaScript: From 10-Day Experiment to Global Language",
  description:
    "Complete history of JavaScript from 1995 to modern ECMAScript and Node.js. Learn browser wars, ES6, standardization, and why JavaScript became dominant.",
  keywords: [
    "history of javascript",
    "javascript evolution",
    "brendan eich javascript",
    "ecmascript history",
    "es6 history",
    "javascript browser wars",
    "node js history",
  ],
  openGraph: {
    title: "History of JavaScript: From 10-Day Experiment to Global Language",
    description:
      "Complete history of JavaScript from 1995 to modern ECMAScript and Node.js. Learn browser wars, ES6, standardization, and why JavaScript became dominant.",
    url: "/javascript/history-of-javascript",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "History of JavaScript: From 10-Day Experiment to Global Language",
    description:
      "Complete history of JavaScript from 1995 to modern ECMAScript and Node.js. Learn browser wars, ES6, standardization, and why JavaScript became dominant.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/history-of-javascript" },
};

export default function JavascriptHistoryPage() {
  return (
    <JsTutorialTemplate
      title="History of JavaScript: From a 10-Day Experiment to a Global Programming Language"
      intro="Today, JavaScript powers nearly every interactive website on the internet. From simple dropdown menus to complex web applications, it has become one of the most influential programming languages in history. But JavaScript did not start as a massive ecosystem. It began as a small scripting experiment built in just 10 days."
      why="Understanding the history of JavaScript helps developers appreciate its design decisions, strengths, and even its quirks."
      sections={[
        {
          heading: "The Birth of JavaScript (1995)",
          paragraphs: [
            "In 1995, the internet was growing rapidly, but most websites were static pages with text and images and very little interactivity.",
            "Brendan Eich, working at Netscape Communications, was asked to create a lightweight scripting language for the browser.",
            "He built the first version in just 10 days.",
          ],
          bullets: [
            "Originally named Mocha",
            "Then renamed to LiveScript",
            "Finally renamed to JavaScript",
            "The JavaScript name was chosen for marketing because Java was popular, but JavaScript and Java are completely different languages.",
          ],
        },
        {
          heading: "The Browser Wars and Early Problems",
          paragraphs: [
            "In the late 1990s, Netscape Navigator and Internet Explorer competed aggressively, and each browser implemented JavaScript differently.",
            "This caused major compatibility issues and frustration for developers.",
          ],
          bullets: [
            "Code working in one browser failed in another",
            "Developers wrote browser-specific hacks",
            "Maintenance became difficult",
          ],
        },
        {
          heading: "Standardization: The Birth of ECMAScript",
          paragraphs: [
            "To solve compatibility problems, JavaScript was standardized in 1997 by ECMA International.",
            "The standardized language specification was named ECMAScript. Browser engines implement this specification.",
            "This standardization was a major turning point because it improved consistency across browsers.",
          ],
          bullets: [
            "ECMAScript defines language syntax, core features, and standard behavior.",
            "Example engine: V8 (used in Chrome and Node.js).",
          ],
        },
        {
          heading: "Major ECMAScript Versions",
          paragraphs: [
            "Over time, major ECMAScript versions shaped modern JavaScript.",
          ],
          bullets: [
            "ES3 (1999): Became the stable foundation for many years.",
            "ES5 (2009): Added strict mode, native JSON support, array methods (map/filter/reduce), and better object handling.",
            "ES6 / ES2015 (2015): Introduced let/const, arrow functions, classes, template literals, destructuring, modules, and promises.",
            "After ES6, updates began shipping yearly, so JavaScript kept evolving continuously.",
          ],
        },
        {
          heading: "Rise of Libraries and Frameworks",
          paragraphs: [
            "As JavaScript matured, developers built strong ecosystems on top of it.",
          ],
          bullets: [
            "jQuery simplified DOM manipulation and cross-browser issues.",
            "Angular introduced structured frontend architecture.",
            "React popularized component-based UI development.",
            "Vue.js offered a simpler reactive approach.",
          ],
        },
        {
          heading: "JavaScript Beyond the Browser: Node.js (2009)",
          paragraphs: [
            "A major breakthrough came in 2009 with Node.js, which allowed JavaScript to run outside the browser.",
            "This enabled full-stack JavaScript development using one language for frontend and backend.",
          ],
          bullets: [
            "Backend servers",
            "REST APIs",
            "Real-time applications",
            "Streaming platforms",
            "Command-line tools",
          ],
        },
        {
          heading: "Why JavaScript Became So Dominant",
          paragraphs: ["JavaScript became dominant for several practical reasons:"],
          bullets: [
            "Runs in every browser without frontend installation",
            "Massive package ecosystem through npm",
            "Continuous yearly ECMAScript evolution",
            "Supports functional, object-oriented, event-driven, and asynchronous styles",
            "Strong community and industry backing",
          ],
        },
        {
          heading: "JavaScript Today",
          paragraphs: [
            "Today JavaScript is one of the most popular languages globally, used by millions of developers and supported by all major browsers.",
          ],
          bullets: [
            "Web applications",
            "Mobile apps (React Native)",
            "Desktop apps (Electron)",
            "Cloud platforms",
            "Game development",
            "Server-side systems",
            "Modern async/await workflows and modular architecture",
          ],
        },
        {
          heading: "Interview Insight: Why JavaScript Has Strange Behaviors",
          paragraphs: [
            "Some quirks exist because JavaScript was built quickly, had to remain backward compatible, and evolved rapidly during browser competition.",
            "History explains why some modern concepts feel unusual for beginners.",
          ],
          bullets: [
            "var vs let behavior differences",
            "Loose equality (==) surprises",
            "Prototype inheritance confusion",
          ],
        },
        {
          heading: "The Future of JavaScript",
          paragraphs: [
            "JavaScript continues to evolve through annual ECMAScript releases.",
          ],
          bullets: [
            "Performance optimization",
            "Cleaner syntax",
            "Better async handling",
            "Improved modular systems",
          ],
        },
        {
          heading: "Final Summary",
          paragraphs: [
            "JavaScript started in 1995 as a lightweight scripting language built in 10 days. Through standardization, browser evolution, ES6 modernization, and Node.js, it became one of the most versatile languages in the world.",
            "From simple browser scripts to full-stack applications, JavaScript has grown far beyond its original purpose.",
            "Knowing this history gives developers deeper insight into how JavaScript works and why it remains essential in modern development.",
          ],
        },
      ]}
      examples={[
        {
          title: "ECMAScript 5 Style vs Modern Style",
          code: `// ES5 style
var user = "Developer";
function greet(name) {
  return "Hello, " + name;
}
console.log(greet(user));

// Modern style (ES6+)
const modernUser = "Developer";
const modernGreet = (name) => \`Hello, \${name}\`;
console.log(modernGreet(modernUser));`,
          explanation:
            "This reflects how JavaScript evolved from older syntax into modern, cleaner ES6+ patterns.",
        },
        {
          title: "Async Evolution Snapshot",
          code: `// Before: callback style
setTimeout(function () {
  console.log("Old async style");
}, 1000);

// Now: promise/async style
async function run() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Modern async style");
}
run();`,
          explanation:
            "JavaScript history includes major improvements in asynchronous programming, especially after ES6 and later releases.",
        },
      ]}
      mistakes={[
        {
          title: "Thinking JavaScript and Java are the same",
          fix: "They are different languages with different goals and architecture.",
        },
        {
          title: "Ignoring historical context",
          fix: "History explains many quirks like var behavior and loose equality.",
        },
        {
          title: "Learning frameworks before core JavaScript",
          fix: "Strong fundamentals make React/Angular/Vue easier and more reliable.",
        },
      ]}
      faqs={[
        {
          q: "Who created JavaScript?",
          a: "Brendan Eich created JavaScript at Netscape in 1995, with the first version built in about 10 days.",
        },
        {
          q: "What is ECMAScript?",
          a: "ECMAScript is the standardized specification of JavaScript managed by ECMA International.",
        },
        {
          q: "Why was ES6 a major milestone?",
          a: "ES6 introduced modern features like let/const, classes, modules, destructuring, and promises, transforming JavaScript development.",
        },
        {
          q: "Why is Node.js important in JavaScript history?",
          a: "Node.js enabled JavaScript to run on servers, making full-stack JavaScript development possible.",
        },
      ]}
      related={[
        { label: "Introduction to JavaScript", href: "/javascript" },
        { label: "Variables", href: "/javascript/variables" },
        { label: "Async/Await", href: "/javascript/async-await" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
