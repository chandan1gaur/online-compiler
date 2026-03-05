import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Introduction to JavaScript",
  description:
    "What is JavaScript? Complete beginner guide covering browser and Node.js, DOM, async behavior, key features, and real-world use cases.",
  keywords: [
    "introduction to javascript",
    "what is javascript",
    "javascript beginner guide",
    "javascript basics",
    "learn javascript",
    "javascript tutorial",
    "javascript for beginners",
  ],
  openGraph: {
    title: "Introduction to JavaScript",
    description:
      "What is JavaScript? Complete beginner guide covering browser and Node.js, DOM, async behavior, key features, and real-world use cases.",
    url: "/javascript",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to JavaScript",
    description:
      "What is JavaScript? Complete beginner guide covering browser and Node.js, DOM, async behavior, key features, and real-world use cases.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript" },
};

const sections = [
  {
    heading: "Why JavaScript Is Important in Modern Web Development",
    paragraphs: [
      "JavaScript runs directly inside browsers like Chrome, Firefox, Safari, and Edge. Users do not need to install anything because the browser executes JavaScript automatically.",
      "It makes websites interactive by enabling show/hide behavior, form validation, dropdowns, sliders, real-time notifications, and data fetching without full page reloads.",
      "Modern frontend frameworks are built on JavaScript, including React, Angular, and Vue. If someone wants to become a frontend or full-stack developer, JavaScript is the core foundation.",
    ],
    examples: [
      {
        title: "Basic JavaScript Example",
        code: `let name = "Developer";

function greet(user) {
  return "Hello, " + user + "!";
}

console.log(greet(name));`,
        explanation: "This demonstrates variable declaration, function definition, string concatenation, and console output.",
      },
    ],
  },
  {
    heading: "How JavaScript Works Internally",
    paragraphs: [
      "When you write JavaScript in the browser, the code is parsed, compiled by the JavaScript engine, and executed. The page can then update dynamically.",
      "Modern browsers use engines such as V8 (used in Chrome and Node.js). These engines use Just-In-Time (JIT) compilation for better performance.",
    ],
  },
  {
    heading: "What Is the DOM?",
    paragraphs: [
      "The DOM (Document Object Model) represents the webpage as a tree structure that JavaScript can read and modify.",
      "For example, JavaScript can update text, add elements, remove elements, and react to user interactions by changing the DOM in real time.",
      "Example: document.getElementById('title').textContent = 'Welcome!';",
    ],
  },
  {
    heading: "JavaScript in Browser vs Node.js",
    paragraphs: [
      "This makes JavaScript a full-stack language.",
    ],
    bullets: [
      "Browser environment: Manipulates HTML/CSS, handles user events (click, input, scroll), and controls UI behavior.",
      "Server environment (Node.js): Builds REST APIs, connects databases, handles authentication, and executes backend logic.",
    ],
  },
  {
    heading: "Key Features of JavaScript",
    paragraphs: ["JavaScript supports multiple programming styles and concepts:"],
    bullets: [
      "Dynamic typing",
      "Object-oriented programming",
      "Functional programming",
      "Event-driven architecture",
      "Asynchronous programming (Promises, async/await)",
      "First-class functions",
      "Closures",
      "Prototypes",
    ],
  },
  {
    heading: "What You Can Build With JavaScript",
    paragraphs: ["JavaScript allows you to build:"],
    bullets: [
      "Interactive websites",
      "Single Page Applications (SPAs)",
      "REST APIs",
      "Real-time chat applications",
      "Dashboards",
      "Online code editors",
      "Games",
      "Mobile apps (React Native)",
      "Desktop apps (Electron)",
    ],
  },
  {
    heading: "Who Should Learn JavaScript?",
    paragraphs: [
      "Beginners starting web development, frontend developers, backend developers, full-stack developers, students preparing for interviews, and developers building tools or SaaS products.",
      "Since this website includes JavaScript tutorials and a compiler tool, this introduction is designed as the foundation article before moving to deeper topics.",
    ],
  },
  {
    heading: "Understanding Asynchronous JavaScript",
    paragraphs: [
      "Asynchronous programming is one of JavaScript's most important concepts for building real-world applications.",
    ],
    examples: [
      {
        title: "Understanding Asynchronous JavaScript",
        code: `setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("Runs first");`,
        explanation: "Even though setTimeout appears first, JavaScript prints 'Runs first' before delayed output because of the event loop.",
      },
    ],
  },
  {
    heading: "Summary",
    paragraphs: [
      "JavaScript is a powerful language that makes websites interactive and dynamic. It runs in browsers and on servers, supports multiple programming styles, and powers modern web applications.",
      "If you want to build real-world applications, understand frameworks, or become a full-stack developer, learning JavaScript is essential.",
    ],
  },
];

const mistakes = [
  {
    title: "Confusion between var, let, and const",
    fix: "Use const by default, let for reassignment, and learn scope behavior clearly.",
  },
  {
    title: "Ignoring asynchronous behavior",
    fix: "Learn event loop basics and practice with setTimeout, Promises, and async/await early.",
  },
  {
    title: "Jumping to frameworks without fundamentals",
    fix: "Master core JavaScript first, then move to React/Angular/Vue for better long-term understanding.",
  },
];

const faqs = [
  {
    q: "Is JavaScript the same as Java?",
    a: "No. JavaScript and Java are completely different languages with different syntax and use cases.",
  },
  {
    q: "Is JavaScript compiled or interpreted?",
    a: "It is traditionally interpreted, but modern engines like V8 use Just-In-Time compilation for performance.",
  },
  {
    q: "Is JavaScript hard to learn?",
    a: "It is beginner-friendly, but advanced topics like closures and asynchronous programming require consistent practice.",
  },
  {
    q: "Why is async JavaScript important?",
    a: "It is essential for API calls, real-world app behavior, and interview questions based on event loop and execution order.",
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

export default function JavascriptTutorialIndexPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Introduction to JavaScript</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          If you have ever clicked a button on a website and seen content update instantly without reloading the page, that behavior is powered by JavaScript. JavaScript is a high-level programming language used to make websites interactive and dynamic. While HTML structures a webpage and CSS styles it, JavaScript adds behavior and intelligence to it. Today, JavaScript is not limited to browsers. It is also used for building servers, mobile apps, desktop applications, and games.
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
          JavaScript is one of the three core technologies of the web. Almost every modern website uses it, and it is the foundation for frontend, backend, and full-stack development.
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
              { label: "Variables", href: "/javascript/variables" },
              { label: "Operators", href: "/javascript/operators" },
              { label: "DOM Manipulation", href: "/javascript/dom-manipulation" },
              { label: "Async/Await", href: "/javascript/async-await" },
              { label: "Data Types", href: "/javascript/data-types" },
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
