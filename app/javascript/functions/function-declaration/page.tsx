import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Function Declaration - Creating Functions",
  description: "Learn JavaScript function declaration syntax. Master creating reusable functions with proper parameters and return values.",
  keywords: [
    "javascript function declaration",
    "function declaration",
    "function syntax",
    "javascript functions",
    "defining functions",
  ],
  openGraph: {
    title: "JavaScript Function Declaration",
    description: "Learn function declaration syntax and best practices in JavaScript.",
    url: "/javascript/functions/function-declaration",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Function Declaration",
    description: "Learn JavaScript function declaration with examples.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/function-declaration" },
};

const sections = [
  {
    heading: "What is Function Declaration?",
    paragraphs: [
      "Function declaration is the most traditional way to define a function in JavaScript. It uses the function keyword followed by the function name, parameters in parentheses, and the code block in curly braces.",
      "Function declarations are hoisted to the top of their scope, meaning you can call them before they are defined in your code. This is one key difference from function expressions.",
    ],
    examples: [
      {
        title: "Basic Function Declaration",
        code: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Hello, Alice!`,
        explanation: "The function keyword declares a function named 'greet' that takes one parameter.",
      },
    ],
  },
  {
    heading: "Function Declaration Syntax",
    paragraphs: [
      "The syntax consists of the function keyword, function name, parameters in parentheses, and the body in curly braces.",
    ],
    examples: [
      {
        title: "Complete Syntax Breakdown",
        code: `function add(a, b) {  // function keyword, name, parameters
  const sum = a + b;  // function body
  return sum;         // return value
}

// Call the function
const result = add(5, 3); // result = 8`,
        explanation: "Every part serves a purpose: function keyword, name for calling, parameters for input, body for logic, return for output.",
      },
    ],
  },
  {
    heading: "Parameters and Arguments",
    paragraphs: [
      "Parameters are placeholders for values you want to use in the function. Arguments are the actual values you pass when calling the function.",
    ],
    examples: [
      {
        title: "Parameters vs Arguments",
        code: `// Parameters (in definition)
function multiply(x, y) {
  return x * y;
}

// Arguments (in function call)
console.log(multiply(4, 5));  // 20
console.log(multiply(10, 2)); // 20

// Multiple parameters
function describe(name, age, city) {
  return name + " is " + age + " years old and lives in " + city;
}

console.log(describe("John", 30, "NYC")); // John is 30 years old and lives in NYC`,
        explanation: "Functions can take multiple parameters to accept different inputs.",
      },
    ],
  },
  {
    heading: "Function Hoisting",
    paragraphs: [
      "Function declarations are hoisted, meaning they're moved to the top of their scope before code execution. You can call them before they appear in code.",
    ],
    examples: [
      {
        title: "Hoisting Example",
        code: `// You can call the function BEFORE it's declared
console.log(sayHi("World")); // Hello, World!

// Function declaration (gets hoisted)
function sayHi(name) {
  return "Hello, " + name + "!";
}

// This works but isn't shown before - it's hoisted by JavaScript interpreter`,
        explanation: "Function declarations are hoisted to the top of their scope, so they can be called before they're written in code.",
      },
      {
        title: "Hoisting vs Function Expression",
        code: `// Function declaration - HOISTED, works before declaration
console.log(add(2, 3)); // 5

function add(a, b) {
  return a + b;
}

// Function expression - NOT hoisted, error if called before
console.log(multiply(2, 3)); // ReferenceError: multiply is not defined

const multiply = function(a, b) {
  return a * b;
};`,
        explanation: "Only function declarations are hoisted. Function expressions are not hoisted.",
      },
    ],
  },
  {
    heading: "Scope and Closures",
    paragraphs: [
      "Functions create their own scope. Variables declared inside a function are only accessible within that function, unless they reference outer scopes.",
    ],
    examples: [
      {
        title: "Function Scope",
        code: `function outer() {
  const color = "blue"; // outer scope
  
  function inner() {
    const size = "large"; // inner scope
    console.log(color); // can access outer scope
  }
  
  inner();
  console.log(size); // ReferenceError: size is not defined
}

outer();
console.log(color); // ReferenceError: color is not defined`,
        explanation: "Variables in inner functions can access outer scopes, but outer scopes can't access inner variables.",
      },
    ],
  },
  {
    heading: "Return Values",
    paragraphs: [
      "Functions can return values using the return keyword. If no return statement is specified, the function returns undefined.",
    ],
    examples: [
      {
        title: "Return Statement",
        code: `function isEven(num) {
  if (num % 2 === 0) {
    return true;  // Explicitly return true
  }
  return false;   // Explicitly return false
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false

function noReturn() {
  console.log("This function has no return");
}

const result = noReturn(); // undefined
console.log(result); // undefined`,
        explanation: "Use return to send values back from functions. Without return, the function returns undefined.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Write clear, reusable functions with meaningful names and single responsibilities.",
    ],
    bullets: [
      "Use descriptive function names that explain what they do",
      "Keep functions focused on a single responsibility",
      "Use parameters instead of relying on global variables",
      "Always return consistent types (don't return string sometimes and number other times)",
      "Document complex functions with comments",
      "Keep functions reasonably small (<20 lines is ideal)",
      "Avoid side effects when possible (functions that modify external state)",
    ],
  },
];

const mistakes = [
  {
    title: "Missing return statement",
    fix: "If you want to return a value, explicitly use return. Without it, function returns undefined.",
  },
  {
    title: "Forgetting parameters",
    fix: "If a function needs data, define it as a parameter instead of relying on global variables.",
  },
  {
    title: "Too many parameters",
    fix: "If a function has more than 3-4 parameters, consider using an object to group related parameters.",
  },
];

const faqs = [
  {
    q: "When should I use function declaration vs function expression?",
    a: "Use function declaration for regular functions. Use function expression when you need flexibility, like passing functions as arguments or storing in variables.",
  },
  {
    q: "Can function declarations be called before they're defined?",
    a: "Yes, because they're hoisted. Function expressions cannot be called before they're defined.",
  },
  {
    q: "What if a function has no return statement?",
    a: "The function returns undefined by default when there's no explicit return statement.",
  },
  {
    q: "Can I declare a function inside another function?",
    a: "Yes, you can declare nested functions. They have their own scope and can access the outer function's variables.",
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

export default function FunctionDeclarationPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Function Declaration
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn to create and use function declarations. Master parameters, return values, hoisting, and best practices.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try in Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Function declarations are the foundation of reusable code. They let you write code once and use it many times with different inputs, making programs clearer and reducing duplication.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">FAQ</h2>
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
              { label: "Function Expression", href: "/javascript/functions/function-expression" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Parameters", href: "/javascript/functions/parameters-arguments" },
              { label: "Callback Functions", href: "/javascript/functions/callback-functions" },
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