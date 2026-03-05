import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript IIFE - Immediately Invoked Function Expression",
  description: "Learn JavaScript IIFE. Master creating private scopes and avoiding global variable pollution.",
  keywords: [
    "javascript iife",
    "immediately invoked function expression",
    "private scope",
    "javascript functions",
    "module pattern",
  ],
  openGraph: {
    title: "JavaScript IIFE",
    description: "Learn IIFE to create private scopes and module patterns.",
    url: "/javascript/functions/iife",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript IIFE",
    description: "Master IIFE for private scopes and the module pattern.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/iife" },
};

const sections = [
  {
    heading: "What is IIFE?",
    paragraphs: [
      "IIFE stands for Immediately Invoked Function Expression. It's a function that runs immediately after it's defined. The main purpose is to create a private scope and avoid polluting the global namespace.",
      "IIFEs were especially important before ES6 modules, but they're still useful for encapsulation.",
    ],
    examples: [
      {
        title: "Basic IIFE Syntax",
        code: `// IIFE - the function runs immediately
(function() {
  console.log("This runs immediately!");
})();

// Output: This runs immediately!

// IIFE with a different syntax style
!function() {
  console.log("Another immediate function");
}();

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name);
})("Alice");

// Output: Hello, Alice

// IIFE returning a value
const result = (function() {
  return 5 + 3;
})();

console.log(result); // 8`,
        explanation: "IIFE immediately executes, creating its own scope.",
      },
    ],
  },
  {
    heading: "Creating Private Scopes",
    paragraphs: [
      "The main benefit of IIFE is creating a private scope. Variables declared inside an IIFE are not accessible outside.",
    ],
    examples: [
      {
        title: "Private Variables",
        code: `// Without IIFE - pollutes global scope
var globalVar = "global";
var counter = 0;

// With IIFE - variables are private
(function() {
  var privateVar = "private";
  let counter = 0;
  
  console.log(privateVar); // "private"
})();

// These are not accessible
// console.log(privateVar); // ReferenceError
// console.log(counter); // 0 (different counter)

// IIFE with multiple variables
(function() {
  const name = "Alice";
  const age = 25;
  const email = "alice@example.com";
  
  console.log(name + " (" + age + "): " + email);
  // Output: Alice (25): alice@example.com
})();

// None of these are accessible outside

// Mix private and global
const appName = "MyApp"; // Global

(function() {
  const appVersion = "1.0"; // Private
  
  console.log(appName + " v" + appVersion);
  // Output: MyApp v1.0
})();

console.log(appName); // "MyApp" - accessible
// console.log(appVersion); // ReferenceError - not accessible`,
        explanation: "IIFE creates an isolated scope, preventing global namespace pollution.",
      },
    ],
  },
  {
    heading: "The Module Pattern",
    paragraphs: [
      "IIFE enables the module pattern, where you create public and private members. This is useful for organizing code.",
    ],
    examples: [
      {
        title: "Module Pattern with IIFE",
        code: `// Module pattern - public and private members
const Calculator = (function() {
  // Private variables
  let memory = 0;
  
  // Private function
  function validateNumber(num) {
    return typeof num === "number";
  }
  
  // Public methods (return object with public API)
  return {
    add: function(x) {
      if (validateNumber(x)) {
        memory += x;
      }
      return memory;
    },
    subtract: function(x) {
      if (validateNumber(x)) {
        memory -= x;
      }
      return memory;
    },
    getMemory: function() {
      return memory;
    },
    reset: function() {
      memory = 0;
    }
  };
})();

// Using the module
console.log(Calculator.add(10)); // 10
console.log(Calculator.add(5)); // 15
console.log(Calculator.subtract(3)); // 12
console.log(Calculator.getMemory()); // 12
Calculator.reset();
console.log(Calculator.getMemory()); // 0

// Private function and variable not accessible
// console.log(Calculator.memory); // undefined
// console.log(Calculator.validateNumber(5)); // undefined

// Practical example: App configuration
const AppConfig = (function() {
  // Private configuration
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    debug: false
  };
  
  // Private helper
  function parseUrl(url) {
    return new URL(url);
  }
  
  return {
    getApiUrl: function() {
      return config.apiUrl;
    },
    getTimeout: function() {
      return config.timeout;
    },
    setDebug: function(value) {
      config.debug = value;
    },
    isDebug: function() {
      return config.debug;
    }
  };
})();

console.log(AppConfig.getApiUrl());
// https://api.example.com

console.log(AppConfig.getTimeout());
// 5000`,
        explanation: "Module pattern creates public API while keeping implementation private.",
      },
    ],
  },
  {
    heading: "IIFE with Parameters",
    paragraphs: [
      "IIFEs can accept parameters, useful for passing global objects or using strict mode.",
    ],
    examples: [
      {
        title: "IIFE Parameters",
        code: `// IIFE with global object passed
(function(window, undefined) {
  // Safer to reference globals explicitly
  console.log(typeof window); // "object"
})(window);

// IIFE with multiple parameters
(function(name, version) {
  console.log(name + " v" + version);
})("MyLib", "2.0");

// Output: MyLib v2.0

// IIFE with dependencies
const Module = (function(jQuery, $) {
  // Both jQuery and $ are the same
  // More explicit about dependencies
  return {
    doSomething: function() {
      // Use jQuery here
    }
  };
})(jQuery, jQuery);

// Using strict mode in IIFE
(function() {
  "use strict";
  
  x = 10; // Error: x is not defined
  // Safer than global scope
})();

// Safer global reference pattern
(function(global) {
  // global refers to window in browser
  // or global in Node.js
  global.myGlobal = "I'm global";
})(typeof window !== "undefined" ? window : global);`,
        explanation: "Parameters make IIFE safer by creating local references to globals.",
      },
    ],
  },
  {
    heading: "Modern Alternatives to IIFE",
    paragraphs: [
      "With ES6, modules and block scope are preferred over IIFE, but IIFE is still valid and useful in certain contexts.",
    ],
    examples: [
      {
        title: "IIFE vs Modern Alternatives",
        code: `// Old way with IIFE
const Counter1 = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
})();

// Modern way with ES6 module
// counter.js file:
// let count = 0;
// export const increment = () => ++count;
// export const get = () => count;

// When ES6 modules aren't available:
// Use IIFE to prevent global pollution

// Block scope (but no return value)
{
  const privateVar = "only in block";
  console.log(privateVar);
}
// console.log(privateVar); // ReferenceError

// Both work, but IIFE for encapsulation with return value
// Block scope for simple isolation`,
        explanation: "ES6 modules are preferred, but IIFE is still useful.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting the parentheses at the end",
    fix: "IIFE must have () at the end to invoke: (function(){})(); not (function(){})",
  },
  {
    title: "Using var in IIFE unnecessarily",
    fix: "Use const/let inside IIFE for better scoping, or use blocks with const/let instead.",
  },
  {
    title: "Not using IIFE for module encapsulation",
    fix: "If you need private members, use IIFE module pattern or ES6 modules.",
  },
];

const faqs = [
  {
    q: "What does IIFE stand for?",
    a: "IIFE stands for Immediately Invoked Function Expression. It's a function that executes immediately after being defined.",
  },
  {
    q: "Why use IIFE?",
    a: "IIFE creates a private scope, prevents global namespace pollution, and enables the module pattern for organizing code.",
  },
  {
    q: "What's the difference between (function(){}()) and (function(){})?",
    a: "The first one (with ()) at the end immediately invokes the function. The second one just defines it.",
  },
  {
    q: "Should I still use IIFE in ES6+?",
    a: "ES6 modules and block scope are preferred, but IIFE is still useful for creating public/private APIs and when modules aren't available.",
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

export default function IIFEPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript IIFE (Immediately Invoked Function Expression)
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master IIFE to create private scopes and implement the module pattern.
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
          IIFE is a powerful pattern for code organization and encapsulation. Understanding IIFE is essential for reading existing code and implementing the module pattern.
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
              { label: "Closures", href: "/javascript/closures" },
              { label: "Scope", href: "/javascript/this-keyword" },
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