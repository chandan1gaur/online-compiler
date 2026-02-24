import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Writing Your First JavaScript Program (Beginner's Guide)",
  description:
    "Learn how to write and run your first JavaScript program in browser and Node.js, with variables, conditions, template literals, and beginner best practices.",
  keywords: [
    "writing your first javascript program",
    "javascript hello world",
    "javascript for beginners",
    "run javascript in browser",
    "run javascript in node js",
    "javascript basic program",
    "javascript beginner tutorial",
  ],
  openGraph: {
    title: "Writing Your First JavaScript Program (Beginner's Guide)",
    description:
      "Learn how to write and run your first JavaScript program in browser and Node.js, with variables, conditions, template literals, and beginner best practices.",
    url: "/javascript/writing-your-first-javascript-program",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing Your First JavaScript Program (Beginner's Guide)",
    description:
      "Learn how to write and run your first JavaScript program in browser and Node.js, with variables, conditions, template literals, and beginner best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/writing-your-first-javascript-program" },
};

export default function WritingFirstJavascriptProgramPage() {
  return (
    <JsTutorialTemplate
      title="Writing Your First JavaScript Program (Beginner's Guide)"
      intro="Writing your first JavaScript program is an exciting milestone. JavaScript makes websites interactive by handling user actions, updating content dynamically, validating forms, and much more."
      why="This first program gives you the foundation for understanding logic, syntax, and runtime behavior before moving to advanced topics and frameworks."
      sections={[
        {
          heading: "What Is a JavaScript Program?",
          paragraphs: [
            "A JavaScript program is a set of instructions executed step by step by a browser or runtime environment.",
            "At a basic level, every program takes input, processes logic, and produces output.",
          ],
        },
        {
          heading: "Step 1: Your First JavaScript Code",
          paragraphs: ["The classic first program is:"],
          bullets: [
            'console.log("Hello, World!");',
            "console is a built-in JavaScript object.",
            "log() prints output.",
            '"Hello, World!" is a string value.',
          ],
        },
        {
          heading: "Step 2: Run It in the Browser",
          paragraphs: ["Method 1 (fastest): use browser DevTools Console."],
          bullets: [
            "Open Chrome/Firefox.",
            "Right click page -> Inspect.",
            "Go to Console tab.",
            'Run: console.log("Hello, World!");',
          ],
        },
        {
          heading: "Method 2: Run via HTML File",
          paragraphs: [
            "Create index.html and place JavaScript inside a script tag. Open in browser and check Console output.",
          ],
        },
        {
          heading: "Step 3: Use an External JavaScript File (Best Practice)",
          paragraphs: [
            "Professional codebases keep JavaScript separate from HTML for maintainability and scalability.",
          ],
          bullets: [
            "Create index.html",
            "Create script.js",
            "Link using <script src=\"script.js\"></script>",
          ],
        },
        {
          heading: "Step 4: Run JavaScript Using Node.js",
          paragraphs: [
            "JavaScript can run outside browser using Node.js. Create app.js and execute it with node app.js in terminal.",
          ],
        },
        {
          heading: "Step 5: Understand Basic Concepts",
          paragraphs: [
            "Extend your first program with variables and text output.",
          ],
          bullets: [
            "let declares a variable",
            "Strings are text values",
            "Numbers are numeric values",
            "+ concatenates text",
          ],
        },
        {
          heading: "Step 6: Template Literals (Modern Approach)",
          paragraphs: [
            "Template literals use backticks and ${} interpolation to make strings more readable than repeated concatenation.",
          ],
        },
        {
          heading: "Step 7: User Interaction in Browser",
          paragraphs: [
            "Browser-only APIs like prompt() and alert() let you collect input and show UI popups.",
          ],
        },
        {
          heading: "Step 8: Add Conditional Logic",
          paragraphs: [
            "Use if...else to make decisions in code and produce different outputs based on conditions.",
          ],
        },
        {
          heading: "Common Beginner Mistakes",
          paragraphs: [],
          bullets: [
            "Missing quotation marks around strings",
            "Using incorrect variable names",
            "Forgetting JavaScript is case-sensitive",
            "Writing Name instead of name",
            "age is not equal to Age",
          ],
        },
        {
          heading: "Best Practices for Beginners",
          paragraphs: [],
          bullets: [
            "Use meaningful variable names",
            "Keep code properly indented",
            "Use console.log() for debugging",
            "Start with small programs",
            "Practice consistently",
          ],
        },
        {
          heading: "Mini Practice Exercises",
          paragraphs: [],
          bullets: [
            "Print your full name using console.log()",
            "Create two numbers and print their sum",
            "Ask the user for age and print whether they are adult (18+)",
          ],
        },
        {
          heading: "What You Have Achieved",
          paragraphs: [
            "You now understand how JavaScript executes code, prints output, declares variables, uses conditions, and runs in browser and Node.js.",
            "This is the base for moving to real application development with React and Next.js.",
          ],
        },
        {
          heading: "Final Thoughts",
          paragraphs: [
            'Every advanced developer once started with console.log("Hello, World!").',
            "Focus on understanding how code runs, not memorizing syntax only.",
          ],
        },
      ]}
      examples={[
        {
          title: "First Program",
          code: `console.log("Hello, World!");`,
          explanation: "Your first JavaScript output statement.",
        },
        {
          title: "Run in HTML",
          code: `<!DOCTYPE html>
<html>
<head>
  <title>My First JavaScript Program</title>
</head>
<body>
  <h1>Learning JavaScript</h1>
  <script>
    console.log("Hello, World!");
  </script>
</body>
</html>`,
          explanation: "Place script in HTML and run it directly in browser.",
        },
        {
          title: "External File Setup",
          code: `<!-- index.html -->
<script src="script.js"></script>

// script.js
console.log("Hello from external JS file!");`,
          explanation: "Preferred structure for clean and scalable projects.",
        },
        {
          title: "Run with Node.js",
          code: `// app.js
console.log("Hello from Node!");

// terminal
node app.js`,
          explanation: "Executes JavaScript outside browser using Node runtime.",
        },
        {
          title: "Variables + Template Literal + Condition",
          code: `let name = "Chandan";
let age = 25;
let number = 10;

console.log(\`My name is \${name} and I am \${age} years old.\`);

if (number > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}`,
          explanation: "Combines beginner fundamentals into one small program.",
        },
      ]}
      mistakes={[
        {
          title: "Not checking console errors",
          fix: "Always open Console and read errors line by line.",
        },
        {
          title: "Case mismatch in variable names",
          fix: "Remember JavaScript is case-sensitive.",
        },
        {
          title: "Skipping basics and jumping ahead",
          fix: "Practice small programs daily before advanced topics.",
        },
      ]}
      faqs={[
        {
          q: "Can I run JavaScript without installing anything?",
          a: "Yes, run it directly in browser DevTools Console.",
        },
        {
          q: "Why use external .js files?",
          a: "They keep code modular, cleaner, and easier to maintain.",
        },
        {
          q: "Can the same JavaScript run in Node.js?",
          a: "Core JavaScript can run in both, but browser-specific APIs like alert/prompt do not work in Node.js.",
        },
        {
          q: "What should I learn after this?",
          a: "Move to variables, data types, operators, control flow, and functions.",
        },
      ]}
      related={[
        { label: "Introduction to JavaScript", href: "/javascript" },
        { label: "Setting Up Environment", href: "/javascript/setting-up-javascript-environment" },
        { label: "Variables", href: "/javascript/variables" },
        { label: "Operators", href: "/javascript/operators" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
