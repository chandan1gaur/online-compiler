import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "History of JavaScript - From 1995 to Modern Web Development",
  description:
    "Complete history of JavaScript: from 1995 creation by Brendan Eich, browser wars, standardization with ECMAScript, Node.js revolution, and modern evolution.",
  keywords: [
    "javascript history",
    "brendan eich",
    "netscape",
    "ecmascript",
    "node.js",
    "browser wars",
    "javascript evolution",
  ],
  openGraph: {
    title: "JavaScript History - From 1995 to Today",
    description: "The complete story of JavaScript's evolution from a 10-day project to the world's most popular programming language.",
    url: "/javascript/history-of-javascript",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript History Timeline",
  },
  alternates: { canonical: "/javascript/history-of-javascript" },
};

const sections = [
  {
    heading: "The Birth of JavaScript (1995)",
    paragraphs: [
      "JavaScript was created in just 10 days in May 1995 by Brendan Eich while working at Netscape Communications.",
      "Originally named 'Mocha', then 'LiveScript', and finally 'JavaScript' for marketing reasons (Java was popular at the time).",
      "The goal was to add interactivity to web pages, which were mostly static HTML at the time.",
      "Brendan Eich built the first version in record time, demonstrating the language's simplicity and power.",
    ],
    examples: [
      {
        title: "First JavaScript Code (1995 Style)",
        code: `// This is how early JavaScript looked
function greetUser() {
  var name = prompt("What's your name?");
  alert("Hello, " + name + "!");
}

// Called from HTML:
// <input type="button" value="Click me" onclick="greetUser()">`,
        explanation: "Early JavaScript used var, prompt/alert for interaction, and inline HTML event handlers.",
      },
    ],
  },
  {
    heading: "The Browser Wars and Compatibility Issues (1996-1999)",
    paragraphs: [
      "Netscape Navigator and Microsoft Internet Explorer competed fiercely in the late 1990s.",
      "Each browser implemented JavaScript differently, causing major compatibility problems.",
      "Developers wrote browser-specific code and hacks to make websites work across browsers.",
      "This 'browser war' era made web development frustrating and unpredictable.",
    ],
    examples: [
      {
        title: "Browser Detection (Common Hack from 1990s)",
        code: `// Detecting browsers was common due to incompatibilities
var isNetscape = navigator.appName == "Netscape";
var isIE = navigator.appName == "Microsoft Internet Explorer";

if (isNetscape) {
  // Netscape-specific code
  document.layers['myLayer'].visibility = 'show';
} else if (isIE) {
  // IE-specific code
  document.all['myLayer'].style.visibility = 'visible';
}`,
        explanation: "Browser detection was necessary because document.layers (Netscape) and document.all (IE) worked differently.",
      },
    ],
  },
  {
    heading: "Standardization: ECMAScript (1997)",
    paragraphs: [
      "To solve compatibility issues, JavaScript was standardized by ECMA International in 1997.",
      "The standard was named ECMAScript, with JavaScript being the most popular implementation.",
      "This standardization improved consistency across browsers and professional adoption.",
      "Brendan Eich and others contributed to the ECMAScript specification.",
    ],
    examples: [
      {
        title: "ECMAScript Compliance Check",
        code: `// Modern browsers support ECMAScript standards
console.log("ECMAScript version support:");
console.log("ES3 (1999):", typeof Array.prototype.forEach !== 'undefined');
console.log("ES5 (2009):", typeof Object.create !== 'undefined');
console.log("ES6 (2015):", typeof Promise !== 'undefined');

// All modern browsers pass these checks`,
        explanation: "ECMAScript standardization ensures consistent JavaScript behavior across all browsers.",
      },
    ],
  },
  {
    heading: "Major ECMAScript Versions",
    paragraphs: [
      "JavaScript has evolved through major ECMAScript versions, each adding significant features:",
    ],
    examples: [
      {
        title: "Timeline of ECMAScript Versions",
        code: `// ES3 (1999) - Foundation
// - try/catch exception handling
// - Regular expressions
// - Better string/number handling

// ES5 (2009) - Major improvements
// - Strict mode
// - JSON support
// - Array methods (map, filter, reduce)
// - Object methods (keys, create, defineProperty)

// ES6/ES2015 (2015) - Game changer
// - let/const (block scoping)
// - Arrow functions
// - Classes
// - Template literals
// - Destructuring
// - Modules (import/export)
// - Promises

// ES2016-ES2023 - Annual updates
// - Async/await
// - Optional chaining
// - Nullish coalescing
// - Private class fields
// - And many more features`,
        explanation: "Each ECMAScript version built upon the previous, adding modern language features.",
      },
    ],
  },
  {
    heading: "The Rise of Libraries and Frameworks (2000s)",
    paragraphs: [
      "As JavaScript matured, developers created powerful libraries to solve common problems:",
      "jQuery simplified DOM manipulation and cross-browser issues.",
      "Angular introduced structured frontend architecture with two-way data binding.",
      "React popularized component-based UI development and virtual DOM.",
      "Vue.js offered a simpler reactive approach with excellent documentation.",
    ],
    examples: [
      {
        title: "jQuery vs Modern JavaScript",
        code: `// jQuery (2006) - Cross-browser DOM manipulation
$('#myButton').click(function() {
  $('#myDiv').fadeIn();
});

// Modern JavaScript (ES6+)
document.getElementById('myButton').addEventListener('click', () => {
  document.getElementById('myDiv').style.display = 'block';
});

// React (2013) - Component-based UI
function MyComponent() {
  const [visible, setVisible] = useState(false);
  
  return (
    <div>
      <button onClick={() => setVisible(true)}>Show</button>
      {visible && <div>Hello React!</div>}
    </div>
  );
}`,
        explanation: "Libraries evolved JavaScript development from manual DOM manipulation to declarative, component-based approaches.",
      },
    ],
  },
  {
    heading: "Node.js Revolution (2009)",
    paragraphs: [
      "Ryan Dahl created Node.js in 2009, allowing JavaScript to run outside browsers on servers.",
      "This enabled full-stack JavaScript development with one language everywhere.",
      "Node.js uses Google's V8 JavaScript engine and brought JavaScript to backend development.",
      "npm (Node Package Manager) became the largest package ecosystem in the world.",
    ],
    examples: [
      {
        title: "Node.js Server Example",
        code: `// server.js - JavaScript running on server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Run with: node server.js
// Now JavaScript powers both frontend and backend!`,
        explanation: "Node.js made JavaScript a full-stack language, revolutionizing web development.",
      },
    ],
  },
  {
    heading: "Modern JavaScript Era (2010s-Present)",
    paragraphs: [
      "JavaScript became the most popular programming language globally.",
      "Modern features like async/await, modules, and TypeScript improved developer experience.",
      "JavaScript runs everywhere: browsers, servers, mobile apps, desktop apps, IoT devices.",
      "The ecosystem exploded with frameworks, tools, and a massive developer community.",
    ],
    examples: [
      {
        title: "Modern JavaScript Features",
        code: `// Async/await (ES2017)
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    console.log('User:', user);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Modules (ES2015)
import { useState, useEffect } from 'react';
import express from 'express';

// Optional chaining (ES2020)
const userName = user?.profile?.name ?? 'Anonymous';

// Modern development stack
// Frontend: React/Next.js + TypeScript
// Backend: Node.js + Express
// Mobile: React Native
// Desktop: Electron`,
        explanation: "Modern JavaScript combines powerful language features with a rich ecosystem of tools and frameworks.",
      },
    ],
  },
  {
    heading: "Why JavaScript Became Dominant",
    paragraphs: [
      "JavaScript's success wasn't accidental. Several factors contributed to its dominance:",
    ],
    examples: [
      {
        title: "JavaScript's Key Advantages",
        code: `// 1. Universal runtime - runs everywhere
console.log('Runs in browsers');
console.log('Runs on servers (Node.js)');
console.log('Runs on mobile (React Native)');
console.log('Runs on desktop (Electron)');

// 2. Zero installation for web development
// Users don't need to install anything to run JavaScript

// 3. Massive ecosystem
// npm has 2+ million packages
// More packages than any other language

// 4. Continuous evolution
// Annual ECMAScript updates add new features
// Backward compatibility maintained

// 5. Strong community
// Millions of developers
// Excellent learning resources
// Active open source community`,
        explanation: "JavaScript's combination of accessibility, ecosystem, and continuous improvement made it unbeatable.",
      },
    ],
  },
  {
    heading: "JavaScript Today",
    paragraphs: [
      "JavaScript is the most popular programming language in the world.",
      "It powers the modern web, mobile apps, servers, and even machine learning.",
      "The language continues to evolve with annual ECMAScript releases.",
      "Learning JavaScript opens doors to countless career opportunities.",
    ],
    examples: [
      {
        title: "JavaScript in 2024",
        code: `// Web Development
// React, Next.js, Vue.js, Angular

// Backend Development  
// Node.js, Express, Fastify, NestJS

// Mobile Development
// React Native, Ionic, Cordova

// Desktop Development
// Electron (VS Code, Slack, Discord)

const future = [
  'WebAssembly integration',
  'Better performance',
  'Enhanced developer tools',
  'Continued ecosystem growth',
  'New runtime environments'
];

console.log('JavaScript future:', future);`,
        explanation: "JavaScript continues to expand into new domains while maintaining its core strengths.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Thinking JavaScript and Java are the same language",
    fix: "They are completely different languages with different syntax, purposes, and ecosystems.",
  },
  {
    title: "Ignoring historical context when learning",
    fix: "Understanding history explains many language quirks and design decisions.",
  },
  {
    title: "Learning frameworks before core JavaScript",
    fix: "Master fundamentals first, then frameworks become much easier to learn.",
  },
  {
    title: "Sticking with old JavaScript patterns",
    fix: "Embrace modern ES6+ features like let/const, arrow functions, and async/await.",
  },
  {
    title: "Not exploring the broader JavaScript ecosystem",
    fix: "JavaScript isn't just for browsers - explore Node.js, React Native, and more.",
  },
];

const faqs = [
  {
    q: "Who created JavaScript?",
    a: "Brendan Eich created JavaScript in 1995 while working at Netscape Communications. He built the first version in just 10 days.",
  },
  {
    q: "Why is JavaScript called JavaScript if it's not related to Java?",
    a: "The name was chosen for marketing reasons. Java was very popular in 1995, so using 'JavaScript' helped with branding and recognition.",
  },
  {
    q: "What is ECMAScript?",
    a: "ECMAScript is the standardized specification that defines the JavaScript language. JavaScript is the most popular implementation of ECMAScript.",
  },
  {
    q: "Why was ES6 such a big deal?",
    a: "ES6 (2015) introduced major modern features like let/const, classes, arrow functions, promises, and modules, transforming how we write JavaScript.",
  },
  {
    q: "Why is Node.js important in JavaScript history?",
    a: "Node.js allowed JavaScript to run on servers, enabling full-stack development with one language and creating the massive npm ecosystem.",
  },
  {
    q: "Is JavaScript still evolving?",
    a: "Yes! ECMAScript releases new features annually. Recent additions include optional chaining, nullish coalescing, and private class fields.",
  },
  {
    q: "Should I learn JavaScript in 2024?",
    a: "Absolutely! JavaScript remains the most popular and versatile programming language with endless career opportunities.",
  },
  {
    q: "What's the difference between JavaScript and TypeScript?",
    a: "TypeScript is a superset of JavaScript that adds static typing. It compiles to JavaScript and is widely used in large applications.",
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

export default function HistoryOfJavascriptPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          History of JavaScript
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          From a 10-day project in 1995 to the {"world's"} most popular programming language. Explore {"JavaScript's"} evolution through browser wars, standardization, and modern web development.
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
          Understanding {"JavaScript's"} history explains why the language works the way it does. Many {"quirks"} become clear when you know the context of its rapid development and evolution.
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

