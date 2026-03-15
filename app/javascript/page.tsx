import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

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
  },
  {
    heading: "Summary",
    paragraphs: [
      "JavaScript is a powerful language that makes websites interactive and dynamic. It runs in browsers and on servers, supports multiple programming styles, and powers modern web applications.",
      "If you want to build real-world applications, understand frameworks, or become a full-stack developer, learning JavaScript is essential.",
    ],
  },
];

const examples = [
  {
    title: "Basic JavaScript Example",
    code: `let name = "Developer";

function greet(user) {
  return "Hello, " + user + "!";
}

console.log(greet(name));`,
    explanation: "This demonstrates variable declaration, function definition, string concatenation, and console output.",
  },
  {
    title: "Understanding Asynchronous JavaScript",
    code: `setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("Runs first");`,
    explanation: "Even though setTimeout appears first, JavaScript prints 'Runs first' before delayed output because of the event loop.",
  },
  {
    title: "DOM Update Example",
    code: `const title = document.getElementById("title");
title.textContent = "Welcome!";`,
    explanation: "JavaScript can read and update the DOM in real time.",
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

export default function JavascriptTutorialIndexPage() {
  return (
    <JsTutorialTemplate
      title="Introduction to JavaScript — Complete Beginner Guide"
      intro={[
        "JavaScript is a high-level programming language that powers interactive behavior on the web.",
        "It runs in every modern browser and also on servers with Node.js, which makes it a full-stack language.",
      ]}
      why={[
        "JavaScript is one of the three core technologies of the web alongside HTML and CSS.",
        "Learning it unlocks frontend development, backend APIs, and modern tooling used in real products.",
      ]}
      syntax={[
        "let message = \"Hello\";",
        "function greet(name) {",
        "  return message + \", \" + name + \"!\";",
        "}",
        "console.log(greet(\"Developer\"));",
      ]}
      sections={sections}
      examples={examples}
      mistakes={mistakes}
      faqs={faqs}
      interviewQuestions={[
        { q: "What is JavaScript and where does it run?", a: "JavaScript runs in browsers and on servers through Node.js." },
        { q: "How is JavaScript different from HTML and CSS?", a: "HTML structures content, CSS styles it, JavaScript adds logic and interactivity." },
        { q: "Why is JavaScript important for web developers?", a: "It powers UI behavior, data fetching, and full-stack development." },
      ]}
      comparison={{
        without: `<!-- Without JavaScript -->\n<button>Submit</button>\n<p>Status: Waiting</p>`,
        with: `<!-- With JavaScript -->\n<button onclick=\"document.querySelector('p').textContent='Submitted!'\">Submit</button>\n<p>Status: Waiting</p>`,
      }}
      practice={{
        prompt: "Practice: Write a function that greets a user by name and logs the result.",
        starterCode: `function greet(name) {\n  // TODO: return a greeting\n}\n\nconsole.log(greet(\"Asha\"));`,
        solution: `function greet(name) {\n  return \"Hello, \" + name + \"!\";\n}\n\nconsole.log(greet(\"Asha\"));`,
      }}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Intro Example",
        description: "Try this greeting example in our JavaScript compiler and change the name or message.",
      }}
      related={[
        { label: "JavaScript Syntax", href: "/javascript/javascript-syntax" },
        { label: "How JavaScript Works", href: "/javascript/how-javascript-works" },
        { label: "JavaScript in Browser vs Node.js", href: "/javascript/javascript-in-browser-vs-nodejs" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
