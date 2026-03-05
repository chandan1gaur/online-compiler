import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Comments in JavaScript: Single-Line, Multi-Line, and JSDoc",
  description:
    "Master JavaScript comments: single-line (//) and multi-line (/* */), JSDoc documentation, best practices, and professional commenting strategies.",
  keywords: [
    "javascript comments",
    "javascript single line comment",
    "javascript multi-line comment",
    "javascript jsdoc",
    "javascript documentation",
    "commenting best practices",
  ],
  openGraph: {
    title: "Comments in JavaScript",
    description: "Complete guide to comments in JavaScript with best practices and examples.",
    url: "/javascript/comments-in-javascript",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comments in JavaScript",
  },
  alternates: { canonical: "/javascript/comments-in-javascript" },
};

const sections = [
  {
    heading: "What Are Comments?",
    paragraphs: [
      "Comments are notes in your code that are completely ignored by the JavaScript engine during execution.",
      "Comments serve as documentation for other developers (and your future self) to understand the code's purpose.",
      "They help explain complex logic, document APIs, and provide context that the code alone cannot convey.",
      "Comments do not affect performance or code execution - they are purely for human readers.",
      "Professional code always includes meaningful comments that explain the \"why\" behind decisions.",
    ],
    examples: [
      {
        title: "Comments Are Ignored by the Engine",
        code: `// This entire line is a comment
console.log("Hello World"); // This is also a comment

/* This is a multi-line
   comment that spans
   multiple lines */

const name = "John"; // Even here, the comment is ignored
console.log(name);   // Only the code executes

// ALL of these comments are completely ignored:
// 1. Single-line comments
// 2. Multi-line comments
// 3. Comments at the end of lines
// 4. Comments in blocks

// The output is just:
// Hello World
// John`,
        explanation:
          "Comments exist only in source code. They are stripped out during parsing and never executed or affect how the code runs.",
      },
    ],
  },
  {
    heading: "Single-Line Comments (//)",
    paragraphs: [
      "Single-line comments start with // and extend to the end of the line.",
      "Everything after // on that line is treated as a comment.",
      "Use single-line comments for quick notes, inline explanations, or disabling single lines.",
      "They are the most common comment type for everyday use.",
      "You can place them on their own line or at the end of a code line.",
    ],
    examples: [
      {
        title: "Single-Line Comment Patterns",
        code: `// This entire line is a comment explaining the next line
const PI = 3.14159;

const user = "Alice"; // User's name
const age = 25;       // User's age in years

// Calculate total with tax
const price = 100;
const tax = price * 0.1; // 10% tax
const total = price + tax;

// Temporarily disable testing
// console.log("Debug: Testing disabled");

// Multiple comments in sequence
// explaining a code block:
// 1. Fetch user data
// 2. Process data
// 3. Display result

function greet(name) {
  // This function greets a user
  return \`Hello, \${name}!\`;
}

// Use the function
console.log(greet("Bob")); // Output: Hello, Bob!`,
        explanation:
          "Single-line comments are flexible and can be placed before code lines, at the end of lines, or in comment blocks.",
      },
    ],
  },
  {
    heading: "Multi-Line Comments (/* */)",
    paragraphs: [
      "Multi-line comments start with /* and end with */.",
      "They can span multiple lines and are useful for longer explanations.",
      "Multi-line comments are often used for file headers, function descriptions,  and temporarily disabling code blocks.",
      "Always ensure the closing */ is present to avoid syntax errors.",
      "They can also be used on a single line when the comment is brief.",
    ],
    examples: [
      {
        title: "Multi-Line Comment Usage",
        code: `/*
  File Header Section
  This module handles user authentication.
  Last updated: 2024-01-15
  Author: Development Team
*/

/*
  Temporarily disable this code block
  to test alternative logic
*/
/*
const oldApproach = () => {
  return "This is disabled";
};
*/

// New approach being tested
const newApproach = () => {
  return "This works better";
};

/*
  Calculate user subscription cost
  including all applicable taxes and discounts
*/
const subscriptionCost = 99.99;
const taxRate = 0.08;
const discountPercent = 10;

const taxAmount = subscriptionCost * taxRate;
const discountAmount = subscriptionCost * (discountPercent / 100);
const finalCost = subscriptionCost + taxAmount - discountAmount;

/*
  Multi-line comments can also be used for single-line notes
*/
const isActive = true; /* Flag indicating user is active */

/*
  Complex logic explanation:
  - Check if user is premium
  - If yes, apply premium discount
  - Then apply seasonal bonus
  - Finally, calculate total
*/
const calculateFinalPrice = (basePrice, isPremium) => {
  let price = basePrice;
  if (isPremium) price *= 0.8;  // 20% discount
  price *= 1.1;                 // 10% seasonal bonus
  return price;
};`,
        explanation:
          "Multi-line comments are perfect for longer explanations, file headers, and temporarily disabling larger code blocks.",
      },
    ],
  },
  {
    heading: "JSDoc Comments (/** */)",
    paragraphs: [
      "JSDoc is a standardized documentation format using /** */ with special tags.",
      "JSDoc comments provide structured metadata for functions, classes, and parameters.",
      "IDEs use JSDoc to provide IntelliSense hints, type information, and auto-completion.",
      "JSDoc tags start with @ and provide specific information like parameters, return types, and examples.",
      "JSDoc is especially valuable in larger projects and when working with TypeScript.",
    ],
    examples: [
      {
        title: "JSDoc for Functions",
        code: `/**
 * Calculates the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @example
 * const result = add(5, 3);
 * console.log(result); // 8
 */
function add(a, b) {
  return a + b;
}

/**
 * Fetches user data from the API
 * @async
 * @param {string} userId - The unique user identifier
 * @throws {Error} If the API request fails
 * @returns {Promise<Object>} User data including name, email, and preferences
 */
async function fetchUser(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  if (!response.ok) throw new Error('User not found');
  return response.json();
}

/**
 * Formats a date object to a readable string
 * @param {Date} date - The date to format
 * @param {string} [format='MM/DD/YYYY'] - Optional format pattern
 * @returns {string} Formatted date string
 * @deprecated Use the built-in toLocaleDateString() instead
 */
function formatDate(date, format = 'MM/DD/YYYY') {
  // Implementation
  return date.toLocaleDateString();
}

/**
 * User authentication credentials
 * @typedef {Object} Credentials
 * @property {string} username - User's username
 * @property {string} password - User's password (hashed in storage)
 * @property {boolean} rememberMe - Whether to remember the login
 */

/**
 * Authenticates a user with provided credentials
 * @param {Credentials} creds - User credentials object
 * @returns {Object} Authentication result with token and expiration
 */
function authenticate(creds) {
  // Implementation
}`,
        explanation:
          "JSDoc provides structured documentation that enables IDE features like auto-completion, type hints, and parameter documentation.",
      },
    ],
  },
  {
    heading: "Commenting Best Practices",
    paragraphs: [
      "Write comments that explain \"why\" the code works this way, not just \"what\" it does.",
      "Avoid stating the obvious - don't comment lines that are already clear.",
      "Keep comments concise but complete - avoid cryptic abbreviations.",
      "Use proper grammar and clear language to maintain professionalism.",
      "Update comments when you refactor code to keep them accurate.",
      "Comments should be at the same indentation level as the code they describe.",
    ],
    examples: [
      {
        title: "Good vs Bad Comments",
        code: `// BAD: Over-commenting obvious code
const name = "John";  // Assign \"John\" to name
let age = 25;         // Assign 25 to age  
console.log(name);    // Print name to console

// GOOD: Explaining the why
// User names are immutable for audit purposes
const name = "John";

// Age includes years of service (not calendar age)
let age = 25;

// BAD: Vague or cryptic comments
// Do the thing with the stuff
let result = calculate(data);

// GOOD: Clear, specific comments
// Memoize results to avoid recalculation in loops
let result = calculate(data);

// BAD: Duplicate of code
const total = price + tax;  // Adding tax to price

// GOOD: Explaining business logic
// Include sales tax per state regulations (CA: 8.625%)
const total = price + tax;

// BAD: Leaving broken code with comments
// TODO: Fix this later (written 2 years ago)
// let result = calculateWrongWay();

// GOOD: Fix or remove problematic code
// Using optimized algorithm after Q3 performance review
let result = calculateOptimizedWay();

// GOOD: Complex algorithm explanation
/*
  Using binary search for O(log n) lookup
  Normal linear search would be O(n) 
  Since array has 100k+ items, binary search significantly improves performance
*/
const index = binarySearch(sortedArray, target);`,
        explanation:
          "High-quality comments focus on business logic, design decisions, and non-obvious reasoning. Avoid restating what the code already says.",
      },
    ],
  },
  {
    heading: "Commenting Strategies for Different Scenarios",
    paragraphs: [
      "Different situations require different commenting approaches.",
      "Complex algorithms benefit from detailed inline explanations.",
      "Business logic should be documented with context about why decisions exist.",
      "Workarounds need explaining why the obvious approach doesn't work.",
      "Edge cases should document handling and expected behavior.",
    ],
    examples: [
      {
        title: "Strategic Commenting Examples",
        code: `// 1. Explain unusual workarounds with business context
const userAge = Math.floor((today - birthDate) / MILLISECONDS_PER_YEAR);
// Rounding down age because we count full years, 
// not fractional years per company HR policy

// 2. Document edge cases and gotchas
if (value === 0) {
  // DO NOT use Math.log(0) - returns -Infinity per JavaScript spec
  // Instead return 0 for this business case
  return 0;}

// 3. Explain performance-critical decisions
// Using Map instead of Object for O(1) lookup time
// Object property access can be O(log n) due to prototypal chain
const cache = new Map();

// 4. Reference external docs or issues
// See: https://github.com/project/issues/1234
// CSV parser needs to handle quoted commas in fields
const parseCSV = (line) => {
  // Complex logic here
};

// 5. Document assumptions
// This endpoint returns 'success' for both 200 and 201 responses
// API behavior verified in Postman on 2024-01-15
if (response.includes('success')) {
  handleSuccess();
}

// 6. Explain why something IS there (prevents accidental removal)
// DO NOT remove this setTimeout - allows React rendering to complete
// before fetching data. Removing causes race conditions.
setTimeout(() => {
  fetchData();
}, 0);

// 7. Document temporary fixes
// HACK: Database query timeout after 3 mins - investigating root cause
// Temporary fix: fetch in chunks instead of all at once
// TODO: Move to backend GraphQL endpoint when ready
const data = await fetchDataInChunks();`,
        explanation:
          "Strategic comments focus on business context, workarounds, performance decisions, and non-obvious reasoning that prevents future confusion.",
      },
    ],
  },
  {
    heading: "When NOT to Comment",
    paragraphs: [
      "Good code should be self-documenting through clear naming and structure.",
      "Avoid comments that restate what the code obviously does.",
      "Remove comments when code is refactored and they become obsolete.",
      "Don't use comments to hide broken code - fix or delete it.",
      "Comments should never contain sensitive information like passwords or API keys.",
    ],
    examples: [
      {
        title: "Unnecessary vs Necessary Comments",
        code: `// AVOID: Unnecessary comments
const x = y + 5;           // Add 5 to y
const name = "John";       // Set name to John
if (age > 18) { }          // Check if age greater than 18

// BETTER: Let the code speak through clear naming
const ageWithGracePeriod = currentAge + 5;
const userName = "John";
if (isAdult) { }

// AVOID: Over-commenting obvious patterns
// Increment loop counter
for (let i = 0; i < 10; i++) {
  // Add item to array
  items.push(i);
}

// BETTER: No comments needed for standard patterns
for (let i = 0; i < 10; i++) {
  items.push(i);
}

// AVOID: Keeping broken code commented out
// function buggyApproach() { }  // TODO: Fix the bug
// let oldWay = calculate();     // Replaced with newWay

// BETTER: Remove or extract to version control
// If needed, keep in git history, not in active code
function workingApproach() { }
let result = calculate();

// GOOD: Comment non-obvious or performance-related code
// Using Set instead of Array for O(1) lookup
const seen = new Set();  // Holds visited user IDs

// GOOD: Document why a seemingly simple line exists
// Must clone to avoid mutating original array in reducer
const updatedItems = [...items, newItem];`,
        explanation:
          "Use comments strategically to explain non-obvious decisions and business logic, not to restate what clear code already expresses.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Leaving outdated comments after refactoring",
    fix: "Update or remove comments when code changes. Outdated comments are worse than no comments.",
  },
  {
    title: "Over-commenting obvious code",
    fix: "Let clean code speak for itself. Comment only where additional context adds value.",
  },
  {
    title: "Using comments to hide broken code",
    fix: "Remove commented-out code. If it's needed, it's in version control. If not, delete it.",
  },
  {
    title: "Forgetting to close multi-line comments (/* */)",
    fix: "Always match /* with */. Unclosed comments cause SyntaxError.",
  },
  {
    title: "Including sensitive information in comments",
    fix: "Never put passwords, API keys, or personal data in comments. Use environment variables.",
  },
];

const faqs = [
  {
    q: "Do comments affect JavaScript performance?",
    a: "No. Comments are stripped during parsing and never reach the engine. They have zero performance impact.",
  },
  {
    q: "Should I comment every line of code?",
    a: "No. Comment should explain \"why\" not \"what\". Well-named variables and functions reduce comment needs significantly.",
  },
  {
    q: "What's the difference between // and /* */? ",
    a: "// is for single-line comments. /* */ is for multi-line comments. Use whichever is more convenient for your comment length.",
  },
  {
    q: "When should I use JSDoc?",
    a: "Use JSDoc for functions in shared modules, APIs, libraries, and larger codebases where IDE hints and documentation matter.",
  },
  {
    q: "Can I nest comments inside each other?",
    a: "Single-line comments can nest inside multi-line, but not the other way. Multi-line comments cannot nest within each other.",
  },
  {
    q: "Do I need to write JSDoc for every function?",
    a: "Not always. JSDoc is valuable for public APIs and complex functions. Simple utility functions might not need it.",
  },
  {
    q: "What's the best way to document complex algorithms?",
    a: "Use multi-line comments and explain the algorithm's approach, time complexity, and why it's used rather than simpler approaches.",
  },
  {
    q: "How do I generate documentation from JSDoc?",
    a: "Use tools like TypeDoc, ESDoc, or JSDoc CLI to automatically generate HTML documentation from JSDoc comments.",
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

export default function CommentsInJavascriptPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Comments in JavaScript
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master JavaScript comments: single-line, multi-line (/* */), and JSDoc documentation. Learn best practices for writing meaningful comments that improve code clarity and team collaboration.
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
          Professional code isn't just about being correct - it's about being understandable. Effective comments improve team collaboration, reduce debugging time, enable code reviews, and document business logic that code alone cannot convey.
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
