import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Writing Your First JavaScript Program: From Hello World to Real Code",
  description:
    "Learn to write and run your first JavaScript program. Covers console.log, variables, conditions, template literals, and how to execute code in browsers and Node.js.",
  keywords: [
    "first javascript program",
    "hello world javascript",
    "javascript for beginners",
    "console.log",
    "run javascript in browser",
    "node.js tutorial",
  ],
  openGraph: {
    title: "Writing Your First JavaScript Program",
    description: "Complete beginner guide to writing and running your first JavaScript program.",
    url: "/javascript/writing-your-first-javascript-program",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your First JavaScript Program",
  },
  alternates: { canonical: "/javascript/writing-your-first-javascript-program" },
};

const sections = [
  {
    heading: "What Is a JavaScript Program?",
    paragraphs: [
      "A JavaScript program is a sequence of instructions executed by the JavaScript engine.",
      "Programs follow a simple pattern: accept input → process logic → produce output.",
      "Your first program will be simple, but it demonstrates all the fundamentals of how code execution works.",
      "As you progress, programs become more complex by combining multiple concepts together.",
    ],
    examples: [
      {
        title: "Program Flow Concept",
        code: `// INPUT: The data you start with
const name = "Alice";
const age = 25;

// LOGIC: Processing the data
const isAdult = age >= 18;
const greeting = \`Hello, \${name}!\`;

// OUTPUT: Result of processing
console.log(greeting);
console.log(\`Adult: \${isAdult}\`);

// Output:
// Hello, Alice!
// Adult: true`,
        explanation:
          "Every JavaScript program follows input → logic → output. This is the fundamental pattern.",
      },
    ],
  },
  {
    heading: "The Simplest Program: Hello World",
    paragraphs: [
      "Traditionally, the first program prints \"Hello, World!\" to demonstrate that code can execute.",
      "In JavaScript, console.log() is the built-in function for printing output.",
      "console is an object, log() is a method, and the text in quotes is the content to print.",
      "This single line demonstrates variables, strings, objects, methods, and output.",
    ],
    examples: [
      {
        title: "Classic Hello World",
        code: `console.log("Hello, World!");

// Output:
// Hello, World!`,
        explanation:
          "console.log() prints text to the console. This is your gateway to seeing program results.",
      },
    ],
  },
  {
    heading: "Method 1: Run Code in Browser Console",
    paragraphs: [
      "The fastest way to run JavaScript is directly in your browser's DevTools Console.",
      "No files needed, no setup required - just open the console and type.",
      "Perfect for learning, testing snippets, and debugging.",
      "Every modern browser (Chrome, Firefox, Safari, Edge) has built-in DevTools.",
    ],
    examples: [
      {
        title: "Running in Browser Console",
        code: `// Step 1: Open any webpage in Chrome
// Step 2: Right-click -> Inspect (or press F12)
// Step 3: Go to Console tab
// Step 4: Type and press Enter:

console.log("Hello from the console!");

// You immediately see output appear below your code
// This is perfect for quick experiments

// Try some quick tests:
5 + 3
"Hello" + " " + "World"
const message = "Test";
console.log(message);

// The console remembers variables you create
// Even more useful for quick debugging!`,
        explanation:
          "Browser console is interactive and immediate - type code, press Enter, see results instantly.",
      },
    ],
  },
  {
    heading: "Method 2: Create an HTML File with JavaScript",
    paragraphs: [
      "To run more complex programs, create an HTML file with embedded JavaScript.",
      "The <script> tag contains your JavaScript code.",
      "Opening the file in a browser executes the script.",
      "Use DevTools Console to see console.log() output.",
    ],
    examples: [
      {
        title: "Embedded JavaScript in HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First JavaScript Program</title>
</head>
<body>
  <h1>Learning JavaScript</h1>
  <p>Check the DevTools Console (F12 -> Console)</p>

  <script>
    // Your JavaScript code here
    console.log("Hello, World!");
    
    const name = "John";
    const age = 25;
    
    console.log(\`Name: \${name}, Age: \${age}\`);
    
    if (age >= 18) {
      console.log("You are an adult!");
    }
  </script>
</body>
</html>

// Save as index.html
// Double-click to open in browser
// Press F12 to open DevTools and see console output`,
        explanation:
          "Embedded JavaScript is great for small programs, but separating code files is better for larger projects.",
      },
    ],
  },
  {
    heading: "Method 3: External JavaScript File (Professional Approach)",
    paragraphs: [
      "Professional projects separate HTML and JavaScript into different files.",
      "Create a separate .js file and link it in HTML using <script src=\"file.js\"></script>.",
      "This approach scales better for larger applications.",
      "Makes code reusable and testing easier.",
    ],
    examples: [
      {
        title: "External JavaScript File Structure",
        code: `<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <h1>Welcome</h1>
  <!-- Link external JavaScript at end of body -->
  <script src="script.js"></script>
</body>
</html>

// script.js
console.log("External JavaScript file loaded!");

const user = {
  name: "Alice",
  age: 28,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

console.log(user.greet());

// Run index.html in browser and check console for output`,
        explanation:
          "Separating files makes code modular, testable, and maintainable. This is the professional standard.",
      },
    ],
  },
  {
    heading: "Method 4: Run JavaScript with Node.js",
    paragraphs: [
      "Node.js is a JavaScript runtime that executes JavaScript outside the browser.",
      "Perfect for running scripts, building servers, and automating tasks.",
      "Install Node.js, create a .js file, and run it with node filename.js.",
      "Useful for backend development and command-line tools.",
    ],
    examples: [
      {
        title: "Running JavaScript with Node.js",
        code: `// app.js
console.log("Running in Node.js!");

const sum = 5 + 3;
console.log(\`5 + 3 = \${sum}\`);

// All browser-specific APIs (alert, prompt, DOM) won't work in Node.js
// But console.log() works perfectly

// Run in terminal/command prompt:
// node app.js

// Output:
// Running in Node.js!
// 5 + 3 = 8`,
        explanation:
          "Node.js lets you run JavaScript as a standalone program without a browser.",
      },
    ],
  },
  {
    heading: "Building Your First Real Program",
    paragraphs: [
      "Combine what you've learned to create a program that actually does something.",
      "Use variables to store data, console.log() to print output, and conditional logic to make decisions.",
      "This program could greet a user, calculate values, or validate input.",
    ],
    examples: [
      {
        title: "A Complete Simple Program",
        code: `// Program: Age Checker and Greeting

// INPUT: Store user information
const userName = "Sarah";
const userAge = 17;
const currentYear = 2024;

// LOGIC: Process and calculate
const birthYear = currentYear - userAge;
const isAdult = userAge >= 18;
const yearsUntilAdult = isAdult ? 0 : (18 - userAge);

// OUTPUT: Display results
console.log("=== AGE CHECKER PROGRAM ===");
console.log(\`Hello, \${userName}!\`);
console.log(\`You are \${userAge} years old.\`);
console.log(\`Birth year: approximately \${birthYear}\`);

if (isAdult) {
  console.log("✓ You are an adult!");
} else {
  console.log(\`✗ You are a minor. \${yearsUntilAdult} more years until you're 18.\`);
}

console.log("=== END ===");

// Output Example:
// === AGE CHECKER PROGRAM ===
// Hello, Sarah!
// You are 17 years old.
// Birth year: approximately 2007
// ✗ You are a minor. 1 more years until you're 18.
// === END ===`,
        explanation:
          "This program demonstrates variables, strings, template literals, and conditional logic working together.",
      },
    ],
  },
  {
    heading: "How Code Execution Works",
    paragraphs: [
      "JavaScript executes code line by line from top to bottom.",
      "Variables are created when declared and remembered for the rest of the program.",
      "Each statement completes before the next one starts.",
      "Understanding execution order is crucial for debugging and learning.",
    ],
    examples: [
      {
        title: "Execution Order",
        code: `console.log("1. First line");

const x = 10;
console.log("2. x is now: " + x);

const y = x + 5;
console.log("3. y is now: " + y);

if (y > 10) {
  console.log("4. y is greater than 10");
}

console.log("5. Program ended");

// Execution happens top to bottom in this exact order:
// 1. First line
// 2. x is now: 10
// 3. y is now: 15
// 4. y is greater than 10
// 5. Program ended

// If you rearrange lines, output changes!`,
        explanation:
          "JavaScript is single-threaded and executes sequentially. Understanding order prevents bugs.",
      },
    ],
  },
  {
    heading: "Common Beginner Mistakes",
    paragraphs: [
      "Typos in variable and function names cause errors.",
      "Forgetting quotes around strings breaks the program.",
      "JavaScript is case-sensitive - \"name\" and \"Name\" are different.",
      "Mismatched parentheses or brackets prevent execution.",
    ],
    examples: [
      {
        title: "Common Errors to Avoid",
        code: `// ❌ ERROR: Missing quotes
console.log(Hello World); // SyntaxError!

// ✓ CORRECT:
console.log("Hello World");

// ❌ ERROR: Case mismatch (JavaScript is case-sensitive)
console.log(Name); // ReferenceError - Name is not defined
const name = "John";

// ✓ CORRECT:
const name = "John";
console.log(name); // "John"

// ❌ ERROR: Mismatched brackets
const arr = [1, 2, 3; // SyntaxError!

// ✓ CORRECT:
const arr = [1, 2, 3];

// ❌ ERROR: Missing closing parenthesis
console.log("test" // SyntaxError!

// ✓ CORRECT:
console.log("test"); // "test"

// ❌ ERROR: Using undefined variable
console.log(unknownVar); // ReferenceError!

// ✓ CORRECT:
const myVar = "defined";
console.log(myVar); // "defined"`,
        explanation:
          "Always check for syntax errors, quotes, brackets, parentheses, and variable names.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Running complicated logic before testing basics",
    fix: "Start with console.log(), simple variables, and basic conditions. Then build up complexity.",
  },
  {
    title: "Ignoring error messages",
    fix: "Error messages tell you exactly what's wrong. Read them carefully to fix issues quickly.",
  },
  {
    title: "Not using console.log() for debugging",
    fix: "Print variable values to understand what's happening. Console.log is your best debugging friend.",
  },
  {
    title: "Mixing JavaScript and HTML logic",
    fix: "Keep them separate for cleaner, more maintainable code.",
  },
  {
    title: "Forgetting execution is sequential",
    fix: "Code runs top-to-bottom. Use the correct variable names after declaration.",
  },
];

const faqs = [
  {
    q: "What's the difference between running code in console vs in a file?",
    a: "Console is immediate and interactive for testing. Files persist code and are used for actual programs. Both execute the same way.",
  },
  {
    q: "Can I run Node.js code in the browser?",
    a: "Core JavaScript can run in both, but Node.js-specific APIs (file system, process) don't work in browsers.",
  },
  {
    q: "What's the best way to learn: console, HTML, or Node.js?",
    a: "Start with console for quick experimentation. Move to HTML files for interactive programs. Use Node.js once you understand basics.",
  },
  {
    q: "Do I need to install anything to write JavaScript?",
    a: "No. Browser console needs nothing. For Node.js, install from nodejs.org. For files, just use a text editor.",
  },
  {
    q: "How do I debug if my program has an error?",
    a: "Check the error message. Use console.log() to print variable values. Open DevTools console to see what's happening.",
  },
  {
    q: "What comes after Hello World?",
    a: "Learn variables, data types, operators, conditions, loops, functions, and objects - in that order.",
  },
  {
    q: "Can I run multiple JavaScript files together?",
    a: "In HTML, link multiple scripts. In Node.js, use require() or import. In console, each line is independent.",
  },
  {
    q: "Is console.log() only for beginners?",
    a: "No. Professional developers use console.log() constantly for debugging and monitoring programs.",
  },
];

const examples = [
  {
    title: "Classic Hello World",
    code: `console.log("Hello, World!");`,
    explanation: "console.log() prints text to the console. This is your first output.",
  },
  {
    title: "Running in Browser Console",
    code: `console.log("Hello from the console!");\n\nconst message = "Test";\nconsole.log(message);`,
    explanation: "Use DevTools Console for instant feedback while learning.",
  },
  {
    title: "External JavaScript File Structure",
    code: `<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n  <script src="script.js"></script>\n</body>\n</html>\n\n// script.js\nconsole.log("External JavaScript file loaded!");`,
    explanation: "Separating files is the professional standard for maintainable projects.",
  },
  {
    title: "Running JavaScript with Node.js",
    code: `// app.js\nconsole.log("Running in Node.js!");\n\nconst sum = 5 + 3;\nconsole.log(\`5 + 3 = \${sum}\`);\n\n// Run: node app.js`,
    explanation: "Node.js lets you run JavaScript outside the browser.",
  },
  {
    title: "A Complete Simple Program",
    code: `const userName = "Sarah";\nconst userAge = 17;\nconst currentYear = 2024;\n\nconst birthYear = currentYear - userAge;\nconst isAdult = userAge >= 18;\n\nconsole.log(\`Hello, \${userName}!\`);\nconsole.log(\`Birth year: \${birthYear}\`);\nconsole.log(isAdult ? "Adult" : "Minor");`,
    explanation: "Combines variables, template literals, and conditions into one program.",
  },
];

export default function WritingFirstJavascriptProgramPage() {
  return (
    <JsTutorialTemplate
      title="Writing Your First JavaScript Program — From Hello World to Real Code"
      intro={[
        "Your first JavaScript program teaches the full input → logic → output flow.",
        "Start simple with console.log, then expand into variables, conditions, and reusable logic.",
      ]}
      why={[
        "This first program builds confidence and the mental model for how JavaScript executes.",
        "It also sets the foundation for functions, loops, and real-world apps.",
      ]}
      syntax={[
        "console.log(\"Hello, World!\");",
        "const name = \"Asha\";",
        "if (name) { console.log(name); }",
      ]}
      sections={sections}
      examples={examples}
      mistakes={mistakes}
      faqs={faqs}
      interviewQuestions={[
        { q: "What does console.log do?", a: "It prints output to the console so you can see program results." },
        { q: "What is the execution order in JavaScript?", a: "Code runs top-to-bottom, one statement at a time." },
        { q: "What is a JavaScript program?", a: "A sequence of instructions executed by the JavaScript engine." },
      ]}
      comparison={{
        without: `// No output\nconst name = "Asha";`,
        with: `// With output\nconst name = "Asha";\nconsole.log("Hello, " + name);`,
      }}
      practice={{
        prompt: "Practice: Print a greeting with a name and age.",
        starterCode: `const name = "Riya";\nconst age = 20;\n\n// TODO: print greeting with name and age\n`,
        solution: `const name = "Riya";\nconst age = 20;\n\nconsole.log(\`Hello, \${name}. You are \${age} years old.\`);`,
      }}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Hello World",
        description: "Run the classic Hello World example and then change the text.",
      }}
      related={[
        { label: "JavaScript Syntax", href: "/javascript/javascript-syntax" },
        { label: "Variables", href: "/javascript/variables" },
        { label: "Functions", href: "/javascript/functions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
