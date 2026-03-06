import type { Metadata } from "next";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Template Literals in JavaScript - String Interpolation Guide",
  description:
    "Master JavaScript template literals. Learn string interpolation, multi-line strings, tagged templates, and advanced techniques with practical examples.",
  keywords: [
    "template literals",
    "backticks",
    "string interpolation",
    "template strings",
    "es6 strings",
    "javascript strings",
  ],
  openGraph: {
    title: "Template Literals - Modern String Handling",
    description:
      "Complete guide to JavaScript template literals for string interpolation and multi-line text.",
    url: "/javascript/template-literals",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Template Literals",
    description: "Master template literals for cleaner string interpolation.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/template-literals" },
};

export default function TemplateLiteralsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">JavaScript Template Literals: Complete String Guide</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-semibold mb-2">What You'll Learn:</p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Template literal syntax and basics</li>
            <li>✅ String interpolation with expressions</li>
            <li>✅ Multi-line strings</li>
            <li>✅ Nesting and complex expressions</li>
            <li>✅ Tagged templates for advanced processing</li>
            <li>✅ Performance considerations</li>
            <li>✅ Common pitfalls and best practices</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">What are Template Literals?</h2>
        <p className="text-lg leading-relaxed mb-6">
          Template literals are a modern way to work with strings in JavaScript, using backticks (`) instead of quotes. They provide string interpolation, allowing you to embed expressions directly in strings, and they support multi-line strings natively. Introduced in ES6 (2015), they've become the preferred way to work with strings in modern JavaScript.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Basic Syntax</h2>
        <CodeExample
          title="Template Literal Basics"
          code={`// Template literal uses backticks
const greeting = \`Hello, World!\`;
console.log(greeting); // "Hello, World!"

// Equivalent to traditional strings:
const old = "Hello, World!";
const modern = \`Hello, World!\`;
console.log(old === modern); // true

// Can contain single and double quotes without escaping:
const quote1 = \`She said "Hello"\`;
const quote2 = \`It's beautiful\`;
const quote3 = \`"It's going to be great," he said\`;

console.log(quote1); // She said "Hello"
console.log(quote2); // It's beautiful
console.log(quote3); // "It's going to be great," he said
`}
          explanation="Template literals use backticks and support both single and double quotes without escaping."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">String Interpolation - The Power</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          String interpolation lets you embed variables and expressions directly in strings using {'${'} and {'}'} syntax. This eliminates tedious string concatenation.
        </p>

        <CodeExample
          title="String Interpolation"
          code={`// Variables in template literals
const name = "Alice";
const age = 25;

// Old way (concatenation)
const oldWay = "My name is " + name + " and I'm " + age + " years old";

// Modern way (interpolation)
const modern = \`My name is \${name} and I'm \${age} years old\`;

console.log(modern); // My name is Alice and I'm 25 years old

// Any expression works inside \${}
const x = 10;
const y = 20;
console.log(\`\${x} plus \${y} equals \${x + y}\`); // 10 plus 20 equals 30

// Function calls
function getGreeting(time) {
  return time < 12 ? "Good morning" : "Good afternoon";
}

const hour = new Date().getHours();
console.log(\`Status: \${getGreeting(hour)}\`);

// Ternary operators
const score = 85;
console.log(\`Grade: \${score >= 90 ? "A" : score >= 80 ? "B" : "C"}\`);

// Method calls
const text = "javascript";
console.log(\`Language: \${text.toUpperCase()}\`); // Language: JAVASCRIPT
`}
          explanation="Interpolation with \${...} lets you embed any expression directly in strings, replacing tedious concatenation."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Multi-line Strings</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Template literals preserve newlines and whitespace, making multi-line strings simple and readable.
        </p>

        <CodeExample
          title="Multi-line Strings"
          code={`// Traditional multi-line (awkward)
const oldWay = "Line 1\\n" +
               "Line 2\\n" +
               "Line 3";

// Template literal (clean)
const modern = \`Line 1
Line 2
Line 3\`;

console.log(modern);
// Output:
// Line 1
// Line 2
// Line 3

// HTML template (very common use case)
const htmlTemplate = \`
  <div class="container">
    <h1>Welcome</h1>
    <p>This is a paragraph</p>
  </div>
\`;

// SQL queries
const userId = 123;
const sqlQuery = \`
  SELECT * FROM users
  WHERE id = \${userId}
  AND status = 'active'
\`;

// JSON-like structures
const config = \`
  {
    "name": "MyApp",
    "version": "1.0.0",
    "debug": true
  }
\`;

// Warning: Whitespace is preserved!
const indented = \`
    Indented text
    More indented
\`; // Includes leading spaces and newlines
`}
          explanation="Template literals preserve newlines and whitespace, enabling clean multi-line strings."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Nested and Complex Expressions</h2>

        <CodeExample
          title="Advanced Interpolation"
          code={`// Nested template literals
const user = { name: "Bob", premium: true };
const message = \`
  User: \${user.name}
  Status: \${user.premium ? "Premium" : "Free"}
\`;

// Objects and arrays
const person = { name: "Carol", age: 30, hobbies: ["reading", "coding"] };
console.log(\`
  Name: \${person.name}
  Age: \${person.age}
  Hobbies: \${person.hobbies.join(", ")}
\`);

// Nested template literals
const outer = \`
  Outer: \${\`Inner template with \${123}\`}
\`;
console.log(outer); // Outer: Inner template with 123

// Conditional logic
const items = [1, 2, 3];
const list = \`
  Items count: \${items.length}
  \${items.length > 0 ? \`First item: \${items[0]}\` : "No items"}
\`;

// Loop inside template
const numbers = [1, 2, 3];
const result = \`
  Numbers: \${numbers.map(n => n * 2).join(", ")}
\`;
console.log(result); // Numbers: 2, 4, 6
`}
          explanation="Template literals support nested templates, objects, arrays, and complex expressions."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Tagged Templates (Advanced)</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Tagged templates allow you to process template literals with a function. The function receives the string parts and interpolated values separately, enabling custom processing.
        </p>

        <CodeExample
          title="Tagged Templates"
          code={`// Tag function receives (strings, ...values)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : "");
  }, "");
}

const name = "Alice";
const age = 25;
const result = highlight\`My name is \${name} and I'm \${age}\`;
console.log(result);
// My name is <mark>Alice</mark> and I'm <mark>25</mark>

// Practical example: HTML escaping
function escape(strings, ...values) {
  const escapeHtml = (str) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return str.replace(/[&<>"']/g, m => map[m]);
  };
  
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? escapeHtml(values[i]) : "");
  }, "");
}

const userInput = "<script>alert('xss')</script>";
const safe = escape\`User input: \${userInput}\`;
console.log(safe);
// User input: &lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt;

// Real libraries use this: styled-components, graphql template tags, etc.
`}
          explanation="Tagged templates let you create functions that process template literals, enabling custom formatting and security features."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Best Practices</h2>
        <ul className="space-y-4 mb-8">
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Use template literals over concatenation:</strong> More readable, fewer errors
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Keep interpolations simple:</strong> Move complex logic to variables first
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Watch whitespace in multi-line:</strong> Often included unintentionally
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Use for HTML/SQL templates:**Really clean and readable</strong>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Consider tagged templates for complex processing:</strong> Like HTML escaping
            </div>
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Common Pitfalls</h2>

        <CodeExample
          title="Things to Watch Out For"
          code={`// PITFALL 1: Forgetting $ in interpolation
const name = "Bob";
const wrong = \`Hello {name}\`; // "Hello {name}" (literal braces!)
const right = \`Hello \${name}\`; // "Hello Bob"

// PITFALL 2: Backticks vs quotes
const text = "This won't work as template literal"; // Just a string
const template = \`This works as \${variable}\`; // Template literal

// PITFALL 3: Unwanted whitespace
const html = \`
  <div>
    Content
  </div>
\`; // Has leading/trailing whitespace and indentation

// Better:
const htmlClean = [
  "<div>",
  "  Content",
  "</div>"
].join("\\n");

// Or use trim():
const htmlTrimmed = \`
  <div>
    Content
  </div>
\`.trim();

// PITFALL 4: XSS vulnerability with user input
const userInput = "<script>alert('xss')</script>";
const unsafe = \`<div>\${userInput}</div>\`; // DANGEROUS!

// Always escape or use a template library
const safeHtml = escapeHtml(\`<div>\${userInput}</div>\`);
`}
          explanation="Common mistakes with template literals include forgetting $, confusion with backticks, whitespace issues, and security vulnerabilities."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Performance Notes</h2>
        <CodeExample
          title="Performance Comparison"
          code={`// Performance is similar for simple cases
// But string concatenation in loops can be slow

// SLOW - concatenation in loop
let slow = "";
for (let i = 0; i < 1000; i++) {
  slow += \`Item \${i},\`;
}

// FAST - join array
const items = [];
for (let i = 0; i < 1000; i++) {
  items.push(\`Item \${i}\`);
}
const fast = items.join(",");

// Template literals don't automatically optimize loops
// Use array + join for large string building
`}
          explanation="Template literals have similar performance to concatenation for simple cases, but use array.join() for building large strings."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Interview Q&A</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: What's the difference between template literals and regular strings?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Template literals use backticks, support \${} interpolation, preserve newlines, and allow direct expression embedding. Regular strings don't support interpolation and require concatenation or escape sequences for newlines.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: How do tagged templates work?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Tagged templates call a function with the template. The function receives an array of string parts and the interpolated values as separate arguments, allowing custom processing like HTML escaping or SQL injection prevention.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Summary</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>🎯 Template literals use backticks and support \${} interpolation</li>
            <li>🎯 They're cleaner than concatenation for complex strings</li>
            <li>🎯 Multi-line strings are supported natively</li>
            <li>🎯 Tagged templates enable custom string processing</li>
            <li>🎯 Always escape user input in templates for security</li>
            <li>🎯 Use array.join() for building very large strings</li>
            <li>🎯 They're the modern standard for string handling in JavaScript</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
