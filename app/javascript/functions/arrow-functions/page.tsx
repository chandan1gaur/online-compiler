import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Arrow Functions - ES6 Arrow Function Syntax, Examples & Tutorial",
  description: "Master JavaScript arrow functions with complete guide. Learn ES6 arrow function syntax, this binding, fat arrow functions, and when to use arrow functions in JavaScript.",
  keywords: [
    "javascript arrow functions",
    "arrow function javascript",
    "es6 arrow functions",
    "arrow function syntax",
    "fat arrow functions",
    "javascript arrow function this",
    "arrow function binding",
    "es6 functions",
    "javascript functions",
    "arrow function examples",
    "arrow function vs regular function",
    "javascript arrow function tutorial",
    "arrow function parameters",
    "implicit return arrow function",
    "arrow function callback",
    "javascript arrow function best practices",
  ],
  openGraph: {
    title: "JavaScript Arrow Functions - Complete ES6 Guide",
    description: "Learn arrow functions in JavaScript: syntax, this binding, examples, and best practices for ES6 arrow functions.",
    url: "/javascript/functions/arrow-functions",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Arrow Functions Tutorial",
    description: "Master ES6 arrow function syntax, this binding, and practical examples in JavaScript.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/arrow-functions" },
};

const sections = [
  {
    heading: "What are Arrow Functions in JavaScript?",
    paragraphs: [
      "Arrow functions are a modern way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a concise syntax using the '=>' (fat arrow) operator and have different behavior regarding the 'this' keyword compared to traditional function expressions.",
      "Arrow functions in JavaScript are particularly useful for writing shorter function expressions, callbacks, and maintaining lexical scope for 'this' binding. They are widely used in modern JavaScript development and are essential for understanding ES6+ features.",
    ],
    examples: [
      {
        title: "Basic Arrow Function Syntax",
        code: `// Traditional function expression
const add1 = function(a, b) {
  return a + b;
};

// ES6 arrow function - equivalent
const add2 = (a, b) => {
  return a + b;
};

// Concise arrow function with implicit return
const add3 = (a, b) => a + b;

console.log(add1(5, 3)); // 8
console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8`,
        explanation: "Arrow functions can use explicit return with braces or implicit return without braces for single expressions.",
      },
    ],
  },
  {
    heading: "Arrow Function Syntax Variations",
    paragraphs: [
      "JavaScript arrow functions have multiple syntax forms depending on parameters and function body complexity. Understanding these variations is key to writing clean, readable code.",
    ],
    examples: [
      {
        title: "Different Arrow Function Syntax Forms",
        code: `// No parameters - parentheses required
const greet = () => "Hello, World!";
console.log(greet()); // Hello, World!

// Single parameter - parentheses optional
const square = x => x * x;
const square2 = (x) => x * x; // Also valid
console.log(square(5)); // 25

// Multiple parameters - parentheses required
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

// Multiple statements - braces and return required
const calculate = (a, b) => {
  const sum = a + b;
  const difference = a - b;
  return { sum, difference };
};
console.log(calculate(10, 3)); // { sum: 13, difference: 7 }

// Returning object literals - wrap in parentheses
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25)); // { name: "Alice", age: 25 }`,
        explanation: "Master these syntax variations to write concise and readable arrow functions in JavaScript.",
      },
    ],
  },
  {
    heading: "Arrow Functions and 'this' Binding",
    paragraphs: [
      "One of the most important differences between arrow functions and regular functions in JavaScript is how they handle the 'this' keyword. Arrow functions inherit 'this' from their surrounding lexical context, while regular functions have their own 'this' binding.",
      "This lexical scoping of 'this' in arrow functions makes them ideal for callbacks and methods where you want to preserve the context from the enclosing scope.",
    ],
    examples: [
      {
        title: "Arrow Function 'this' Binding Behavior",
        code: `const person = {
  name: "Alice",
  // Regular function - 'this' refers to the object
  greetRegular: function() {
    console.log("Regular function: " + this.name);
  },
  // Arrow function - 'this' refers to enclosing scope (global/window)
  greetArrow: () => {
    console.log("Arrow function: " + this.name);
  },
  // Method with setTimeout
  delayedGreet: function() {
    // Regular function in setTimeout loses 'this'
    setTimeout(function() {
      console.log("Regular timeout: " + this.name); // undefined
    }, 100);
    // Arrow function preserves 'this'
    setTimeout(() => {
      console.log("Arrow timeout: " + this.name); // Alice
    }, 100);
  }
};

person.greetRegular(); // Regular function: Alice
person.greetArrow(); // Arrow function: undefined
person.delayedGreet(); // After 100ms: Regular timeout: undefined, Arrow timeout: Alice`,
        explanation: "Arrow functions inherit 'this' from their lexical scope, making them perfect for callbacks and event handlers.",
      },
    ],
  },
  {
    heading: "When to Use Arrow Functions in JavaScript",
    paragraphs: [
      "Arrow functions excel in certain scenarios. Knowing when to use them versus regular functions is crucial for writing maintainable JavaScript code.",
    ],
    examples: [
      {
        title: "Arrow Functions with Array Methods",
        code: `const numbers = [1, 2, 3, 4, 5];

// map() with arrow function
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() with arrow function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce() with arrow function
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// forEach() with arrow function
numbers.forEach((num, index) => {
  console.log(\`Number at index \${index}: \${num}\`);
});`,
        explanation: "Arrow functions are perfect for array method callbacks due to their concise syntax.",
      },
      {
        title: "Arrow Functions in Event Handlers",
        code: `// DOM event handler with arrow function
const button = document.querySelector('#myButton');
button?.addEventListener('click', () => {
  console.log('Button clicked!');
  // 'this' would refer to the button element if using regular function
});

// React component example
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
};`,
        explanation: "Arrow functions are commonly used in event handlers and React components.",
      },
    ],
  },
  {
    heading: "Arrow Functions vs Regular Functions",
    paragraphs: [
      "While arrow functions are more concise, they have important differences from regular functions that affect when you should use each type.",
    ],
    bullets: [
      "Arrow functions don't have their own 'this' binding - they inherit from lexical context",
      "Arrow functions cannot be used as constructors with 'new' keyword",
      "Arrow functions don't have their own 'arguments' object - use rest parameters instead",
      "Arrow functions cannot be used as generators (no function* syntax)",
      "Regular functions are hoisted, arrow functions are not (they're block-scoped)",
      "Arrow functions cannot be used as object methods if you need 'this' to refer to the object",
    ],
  },
  {
    heading: "Advanced Arrow Function Patterns",
    paragraphs: [
      "Beyond basic usage, arrow functions enable powerful functional programming patterns in JavaScript.",
    ],
    examples: [
      {
        title: "Arrow Functions with Rest Parameters",
        code: `// Rest parameters with arrow functions
const sumAll = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10)); // 15

// Arrow function as higher-order function
const createMultiplier = (factor) => {
  return (number) => number * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`,
        explanation: "Arrow functions work seamlessly with rest parameters and enable elegant higher-order functions.",
      },
      {
        title: "Arrow Functions in Promises and Async Code",
        code: `// Arrow functions with Promises
const fetchUserData = (userId) => {
  return fetch(\`/api/users/\${userId}\`)
    .then(response => response.json())
    .then(data => {
      console.log('User data:', data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
};

// Async/await with arrow functions
const processUserData = async (userId) => {
  try {
    const userData = await fetchUserData(userId);
    const processedData = userData.map(user => ({
      ...user,
      fullName: \`\${user.firstName} \${user.lastName}\`
    }));
    return processedData;
  } catch (error) {
    console.error('Processing failed:', error);
    return null;
  }
};`,
        explanation: "Arrow functions are ideal for promise chains and async/await syntax.",
      },
    ],
  },
  {
    heading: "Best Practices for Arrow Functions",
    paragraphs: [
      "Follow these best practices to write clean, maintainable code with arrow functions in JavaScript.",
    ],
    bullets: [
      "Use arrow functions for short, simple callbacks and array methods",
      "Use regular functions for object methods that need 'this' binding",
      "Always use parentheses for multiple parameters or no parameters",
      "Use implicit return for simple expressions, explicit return for complex logic",
      "Wrap object literals in parentheses when returning them",
      "Consider readability - sometimes a regular function is clearer",
      "Use arrow functions in class methods when you want lexical 'this'",
    ],
  },
  {
    heading: "Browser Support and Performance",
    paragraphs: [
      "Arrow functions are well-supported in modern browsers and have excellent performance characteristics.",
    ],
    bullets: [
      "Supported in all modern browsers (Chrome 45+, Firefox 22+, Safari 10+, Edge 12+)",
      "Use Babel or TypeScript for older browser support",
      "Arrow functions have similar performance to regular functions",
      "Lexical 'this' binding can prevent common bugs and improve performance",
      "Minification tools can further optimize arrow function syntax",
    ],
  },
];

const mistakes = [
  {
    title: "Using arrow functions as object methods",
    fix: "If you need 'this' to refer to the object, use regular function expressions instead of arrow functions.",
  },
  {
    title: "Attempting to use arrow functions as constructors",
    fix: "Arrow functions cannot be used with the 'new' keyword. Use regular functions or class syntax for constructors.",
  },
  {
    title: "Forgetting parentheses for zero or multiple parameters",
    fix: "Always use parentheses for zero parameters: () => value, and for multiple parameters: (a, b) => value",
  },
  {
    title: "Incorrect object literal returns",
    fix: "When returning object literals, wrap them in parentheses: () => ({ key: value })",
  },
  {
    title: "Misunderstanding 'this' binding in arrow functions",
    fix: "Remember that arrow functions inherit 'this' from their lexical scope, not the calling context.",
  },
  {
    title: "Using arrow functions where regular functions are more readable",
    fix: "For complex functions with multiple statements, consider if a regular function with a descriptive name would be clearer.",
  },
];

const faqs = [
  {
    q: "What is the main difference between arrow functions and regular functions in JavaScript?",
    a: "Arrow functions inherit 'this' from their lexical context, while regular functions have their own 'this' binding. Arrow functions also cannot be used as constructors and don't have their own 'arguments' object.",
  },
  {
    q: "When should I use arrow functions vs regular functions?",
    a: "Use arrow functions for callbacks, array methods, and when you need lexical 'this' binding. Use regular functions for object methods, constructors, and when you need the 'arguments' object.",
  },
  {
    q: "Can I use arrow functions as methods in JavaScript objects?",
    a: "Technically yes, but it's not recommended if you need 'this' to refer to the object. Arrow functions will inherit 'this' from the surrounding scope, not the object itself.",
  },
  {
    q: "Do arrow functions have their own 'arguments' object?",
    a: "No, arrow functions don't have their own 'arguments' object. Use rest parameters (...args) instead to access all arguments passed to the function.",
  },
  {
    q: "Are arrow functions hoisted like regular functions?",
    a: "No, arrow functions are not hoisted. They are block-scoped like 'let' and 'const' variables, while regular function declarations are hoisted.",
  },
  {
    q: "Can arrow functions be used as generators?",
    a: "No, arrow functions cannot be used as generators. You cannot use the 'function*' syntax with arrow functions.",
  },
  {
    q: "How do I return an object literal from an arrow function?",
    a: "Wrap the object literal in parentheses: const func = () => ({ key: 'value' });",
  },
  {
    q: "Do arrow functions support default parameters?",
    a: "Yes, arrow functions support default parameters just like regular functions: const func = (a = 1, b = 2) => a + b;",
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

export default function ArrowFunctionsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Functions Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Arrow Functions - Complete ES6 Guide
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master ES6 arrow function syntax, understand 'this' binding, and learn when to use arrow functions vs regular functions in JavaScript.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try Arrow Functions
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why Arrow Functions Matter</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Arrow functions revolutionized JavaScript development with their concise syntax and predictable 'this' binding. They're essential for modern JavaScript, functional programming, and writing clean, maintainable code.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes with Arrow Functions</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Arrow Functions FAQ</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-4">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related JavaScript Function Topics</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
              { label: "Function Expression", href: "/javascript/functions/function-expression" },
              { label: "Callback Functions", href: "/javascript/functions/callback-functions" },
              { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
              { label: "IIFE", href: "/javascript/functions/iife" },
              { label: "Recursion", href: "/javascript/functions/recursion" },
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