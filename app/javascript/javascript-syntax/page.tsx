import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Syntax (Complete Beginner to Advanced Guide)",
  description:
    "Master JavaScript syntax with statements, variables, data types, blocks, comments, expressions, keywords, strict mode, common errors, and best practices.",
  keywords: [
    "javascript syntax",
    "javascript statements",
    "javascript keywords",
    "javascript strict mode",
    "javascript syntax errors",
    "learn javascript syntax",
    "javascript beginner to advanced",
  ],
  openGraph: {
    title: "JavaScript Syntax (Complete Beginner to Advanced Guide)",
    description:
      "Master JavaScript syntax with statements, variables, data types, blocks, comments, expressions, keywords, strict mode, common errors, and best practices.",
    url: "/javascript/javascript-syntax",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Syntax (Complete Beginner to Advanced Guide)",
    description:
      "Master JavaScript syntax with statements, variables, data types, blocks, comments, expressions, keywords, strict mode, common errors, and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/javascript-syntax" },
};

export default function JavascriptSyntaxPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Syntax (Complete Beginner to Advanced Guide)"
      intro="Understanding JavaScript syntax is the foundation of writing clean, error-free, and professional code. Syntax is the rule set that defines how JavaScript programs are written and structured."
      why="If syntax is incorrect, the JavaScript engine throws errors and your program fails. Strong syntax fundamentals directly improve debugging speed, readability, and scalability."
      sections={[
        {
          heading: "What Is JavaScript Syntax?",
          paragraphs: [
            "JavaScript syntax defines how variables are declared, statements are written, functions are structured, code blocks are organized, and comments are added.",
            "Think of syntax like grammar in English. If grammar is wrong, sentences break. Same in programming.",
            "Engines like V8 and SpiderMonkey follow JavaScript syntax rules strictly.",
          ],
        },
        {
          heading: "JavaScript Statements",
          paragraphs: ["A statement is an instruction executed by the JavaScript engine."],
          bullets: [
            "Example: let name = 'Chandan';",
            "Example: console.log(name);",
            "Semicolons separate statements. ASI exists, but using semicolons consistently is a professional best practice.",
          ],
        },
        {
          heading: "Case Sensitivity",
          paragraphs: ["JavaScript is case-sensitive. Small capitalization mistakes can break code."],
          bullets: [
            "name and Name are different identifiers",
            "console.log() is valid, Console.log() is not",
          ],
        },
        {
          heading: "Variables in JavaScript",
          paragraphs: ["Variables store data values using let, const, or var."],
          bullets: [
            "Use const by default",
            "Use let when reassignment is needed",
            "Avoid var in modern JavaScript code",
          ],
        },
        {
          heading: "Variable Naming Rules",
          paragraphs: [],
          bullets: [
            "Must start with a letter, _ or $",
            "Cannot start with a number",
            "Cannot use reserved keywords",
            "Use meaningful names for readability",
          ],
        },
        {
          heading: "JavaScript Data Types",
          paragraphs: ["JavaScript has primitive and non-primitive data types."],
          bullets: [
            "Primitive: String, Number, Boolean, Null, Undefined",
            "Non-Primitive: Object, Array (reference types)",
          ],
        },
        {
          heading: "Code Blocks",
          paragraphs: [
            "Code blocks are enclosed in curly braces {} and are used in functions, conditions, loops, and classes.",
          ],
        },
        {
          heading: "Comments in JavaScript",
          paragraphs: [
            "Comments improve readability and are ignored during execution.",
          ],
          bullets: ["Single-line: //", "Multi-line: /* ... */"],
        },
        {
          heading: "Whitespace and Formatting",
          paragraphs: [
            "JavaScript ignores extra spaces and line breaks, but consistent formatting is essential for maintainable code.",
          ],
          bullets: ["Use Prettier for formatting", "Use ESLint for code quality and syntax checks"],
        },
        {
          heading: "Expressions in JavaScript",
          paragraphs: ["An expression is any code that produces a value."],
          bullets: ["5 + 10", "age > 18", "'Hello ' + name", "let result = 10 + 5"],
        },
        {
          heading: "JavaScript Keywords",
          paragraphs: ["Keywords are reserved words and cannot be used as variable names."],
          bullets: ["let", "const", "var", "if", "else", "return", "function", "class", "for", "while"],
        },
        {
          heading: "Identifiers and Naming Conventions",
          paragraphs: ["Identifiers are names for variables, functions, and classes."],
          bullets: [
            "Use camelCase for variables/functions",
            "Use PascalCase for classes",
            "Prefer meaningful names (totalPrice instead of x)",
          ],
        },
        {
          heading: "JavaScript Is Interpreted",
          paragraphs: [
            "JavaScript engines parse and execute syntax line by line, with modern optimization through JIT compilation.",
          ],
        },
        {
          heading: "Strict Mode",
          paragraphs: ["Strict mode enforces safer syntax and catches common coding mistakes earlier."],
          bullets: [
            "Prevents accidental global variables",
            "Throws errors for unsafe actions",
            "Improves debugging",
            "Enabled automatically in ES modules and modern frameworks like Next.js",
          ],
        },
        {
          heading: "Common JavaScript Syntax Errors",
          paragraphs: [],
          bullets: [
            "Missing }",
            "Missing )",
            "Using reserved keywords as identifiers",
            "Forgetting quotation marks",
            "Typo in variable name",
          ],
        },
        {
          heading: "Best Practices for Clean Syntax",
          paragraphs: [],
          bullets: [
            "Use consistent indentation",
            "Always close brackets and quotes",
            "Use const by default",
            "Avoid var in modern code",
            "Use descriptive names",
            "Use ESLint and Prettier",
          ],
        },
        {
          heading: "Why JavaScript Syntax Matters",
          paragraphs: [
            "Correct syntax ensures error-free execution, easier debugging, cleaner code, and long-term maintainability.",
            "Strong syntax fundamentals are essential for scalable React and Next.js applications.",
          ],
        },
        {
          heading: "Final Thoughts",
          paragraphs: [
            "JavaScript syntax is not difficult, but precision is critical.",
            "Once you master statements, variables, blocks, expressions, keywords, and formatting, you are ready for advanced topics like operators, control flow, functions, scope, and hoisting.",
          ],
        },
      ]}
      examples={[
        {
          title: "Statements and Semicolons",
          code: `let name = "Chandan";
console.log(name);`,
          explanation: "Each line is a statement. Use semicolons consistently for clarity and safer parsing behavior.",
        },
        {
          title: "Variables and Data Types",
          code: `let age = 25;
const country = "India";
let isActive = true;
let x = null;
let y;

let person = { name: "John", age: 30 };
let numbers = [1, 2, 3];`,
          explanation: "Covers primitive and non-primitive data usage with modern variable declarations.",
        },
        {
          title: "Strict Mode + Complete Syntax Sample",
          code: `"use strict";

let firstName = "Chandan";
let age = 25;

function greet(name) {
  return \`Hello, \${name}!\`;
}

if (age >= 18) {
  console.log(greet(firstName));
} else {
  console.log("You are a minor.");
}`,
          explanation:
            "Shows a full syntax flow with strict mode, variable declarations, function definition, condition, template literals, and output.",
        },
        {
          title: "Syntax Error Example",
          code: `console.log("Hello)`,
          explanation: "Missing closing quote causes a syntax error and prevents execution.",
        },
      ]}
      mistakes={[
        {
          title: "Inconsistent casing",
          fix: "Remember JavaScript is case-sensitive. Keep identifier casing consistent.",
        },
        {
          title: "Relying fully on ASI",
          fix: "Use semicolons consistently to avoid edge-case parsing bugs.",
        },
        {
          title: "Using unclear variable names",
          fix: "Use meaningful, descriptive identifiers for maintainable code.",
        },
      ]}
      faqs={[
        {
          q: "Is semicolon mandatory in JavaScript?",
          a: "Not always due to ASI, but using semicolons consistently is recommended in professional codebases.",
        },
        {
          q: "Why does JavaScript throw syntax errors quickly?",
          a: "The engine must parse code before execution; invalid syntax blocks execution entirely.",
        },
        {
          q: "Should beginners use strict mode?",
          a: "Yes. Strict mode catches common mistakes early and enforces safer coding behavior.",
        },
        {
          q: "Does formatting affect execution?",
          a: "Extra spaces usually do not, but good formatting improves readability, debugging, and team collaboration.",
        },
      ]}
      related={[
        { label: "Introduction to JavaScript", href: "/javascript" },
        { label: "Writing First Program", href: "/javascript/writing-your-first-javascript-program" },
        { label: "Variables", href: "/javascript/variables" },
        { label: "Data Types", href: "/javascript/data-types" },
        { label: "Operators", href: "/javascript/operators" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
