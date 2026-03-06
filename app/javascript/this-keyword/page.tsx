import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript this Keyword - Complete Guide to Context and Binding",
  description: "Master JavaScript this keyword with comprehensive guide. Learn this binding in objects, functions, classes, arrow functions, call/apply/bind methods, and common pitfalls.",
  keywords: [
    "javascript this keyword",
    "this binding javascript",
    "javascript this context",
    "call apply bind javascript",
    "javascript this tutorial",
    "this keyword explained",
    "javascript function context",
    "lexical this",
    "dynamic this",
    "javascript this binding rules",
    "this in arrow functions",
    "this in classes",
    "javascript this interview questions",
  ],
  openGraph: {
    title: "JavaScript this Keyword - Complete Guide to Context and Binding",
    description: "Master JavaScript this keyword with comprehensive guide covering all binding rules, methods, and common pitfalls.",
    url: "/javascript/this-keyword",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript this Keyword Tutorial",
    description: "Complete guide to understanding this keyword in JavaScript - context, binding, and practical examples.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/this-keyword" },
};

const sections = [
  {
    heading: "What is the 'this' Keyword in JavaScript?",
    paragraphs: [
      "The 'this' keyword in JavaScript refers to the context or scope in which a function is executed. It's a reference to the object that is currently executing the code. The value of 'this' is determined by how a function is called, not where it's defined.",
      "'this' is one of the most confusing concepts in JavaScript because its value changes depending on the execution context. Understanding 'this' is crucial for working with object-oriented JavaScript, event handlers, and modern frameworks.",
    ],
    examples: [
      {
        title: "Basic this Behavior",
        code:`// Global context
console.log(this); // Window object (in browser)

// Inside a function
function showThis() {
  console.log(this);
}

showThis(); // Window object (non-strict) or undefined (strict mode)

// Inside an object method
const user = {
  name: 'Alice',
  greet() {
    console.log(this.name); // 'Alice'
  }
};

user.greet();`,
        explanation: "The value of 'this' depends on how the function is called, not where it's defined.",
      },
    ],
  },
  {
    heading: "this Binding Rules in JavaScript",
    paragraphs: [
      "JavaScript has four main rules for determining what 'this' refers to: default binding, implicit binding, explicit binding, and new binding. Understanding these rules is essential for mastering 'this'.",
    ],
    examples: [
      {
        title: "1. Default Binding (Global Context)",
        code:`function showThis() {
  console.log(this);
}

// In browser (non-strict mode)
showThis(); // Window object

// In Node.js
showThis(); // global object

// In strict mode
'use strict';
function showThisStrict() {
  console.log(this);
}
showThisStrict(); // undefined`,
        explanation: "In default binding, 'this' refers to the global object (Window in browsers) in non-strict mode, or undefined in strict mode.",
      },
      {
        title: "2. Implicit Binding (Object Method)",
        code:`const user = {
  name: 'Bob',
  age: 30,
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  },
  getAge() {
    return this.age;
  },
  nested: {
    name: 'Nested Bob',
    greet() {
      console.log(\`Hello from nested, I'm \${this.name}\`);
    }
  }
};

user.greet(); // "Hello, I'm Bob"
user.nested.greet(); // "Hello from nested, I'm Nested Bob"

const greetFunc = user.greet;
greetFunc(); // "Hello, I'm undefined" (lost context)`,
        explanation: "When a function is called as an object method, 'this' refers to the object. Context can be lost when method is assigned to a variable.",
      },
      {
        title: "3. Explicit Binding (call, apply, bind)",
        code:`function introduce(language) {
  console.log(\`Hi, I'm \${this.name} and I code in \${language}\`);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

// call() - invokes immediately with specified 'this'
introduce.call(person1, 'JavaScript'); // "Hi, I'm Alice and I code in JavaScript"
introduce.call(person2, 'Python'); // "Hi, I'm Bob and I code in Python"

// apply() - same as call but takes arguments as array
introduce.apply(person1, ['JavaScript']); // "Hi, I'm Alice and I code in JavaScript"

// bind() - returns new function with bound 'this'
const introduceAlice = introduce.bind(person1);
introduceAlice('React'); // "Hi, I'm Alice and I code in React"
introduceAlice('Node.js'); // "Hi, I'm Alice and I code in Node.js"`,
        explanation: "Explicit binding allows you to manually set what 'this' refers to using call(), apply(), or bind() methods.",
      },
      {
        title: "4. New Binding (Constructor Functions)",
        code:`function Person(name, age) {
  // 'this' refers to the new object being created
  this.name = name;
  this.age = age;

  this.introduce = function() {
    console.log(\`Hi, I'm \${this.name}, \${this.age} years old\`);
  };
}

// Using 'new' keyword creates new object and binds 'this' to it
const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

alice.introduce(); // "Hi, I'm Alice, 25 years old"
bob.introduce(); // "Hi, I'm Bob, 30 years old"

console.log(alice instanceof Person); // true`,
        explanation: "When a function is called with 'new', JavaScript creates a new object and 'this' refers to that new object.",
      },
    ],
  },
  {
    heading: "'this' in Arrow Functions vs Regular Functions",
    paragraphs: [
      "Arrow functions handle 'this' differently than regular functions. Arrow functions don't have their own 'this' binding and inherit 'this' from their lexical (surrounding) scope.",
      "This lexical scoping makes arrow functions predictable and useful for callbacks, but they cannot be used as constructors or object methods that need dynamic 'this'.",
    ],
    examples: [
      {
        title: "Arrow Function 'this' Behavior",
        code:`const user = {
  name: 'Charlie',
  // Regular function method
  greetRegular() {
    console.log(\`Regular: Hello, I'm \${this.name}\`);
  },
  // Arrow function method (not recommended)
  greetArrow: () => {
    console.log(\`Arrow: Hello, I'm \${this.name}\`);
  },
  // Method with callback
  delayedGreet() {
    // Regular function loses 'this'
    setTimeout(function() {
      console.log(\`Regular timeout: \${this.name}\`); // undefined
    }, 1000);

    // Arrow function preserves 'this'
    setTimeout(() => {
      console.log(\`Arrow timeout: \${this.name}\`); // Charlie
    }, 1000);
  }
};

user.greetRegular(); // "Regular: Hello, I'm Charlie"
user.greetArrow(); // "Arrow: Hello, I'm undefined"
user.delayedGreet(); // After 1s: Regular timeout: undefined, Arrow timeout: Charlie`,
        explanation: "Arrow functions inherit 'this' from their lexical scope, making them ideal for callbacks but unsuitable for methods needing object context.",
      },
    ],
  },
  {
    heading: "'this' in Classes and Constructor Functions",
    paragraphs: [
      "In ES6 classes, 'this' behaves similarly to constructor functions. Class methods have access to 'this' which refers to the instance. Arrow functions in classes can capture the instance 'this'.",
    ],
    examples: [
      {
        title: "'this' in ES6 Classes",
        code:`class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Regular method
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }

  // Method with arrow function callback
  delayedGreeting() {
    setTimeout(() => {
      console.log(\`Delayed: Hello, I'm \${this.name}\`);
    }, 1000);
  }

  // Static method
  static createUser(name, email) {
    // 'this' refers to the class itself
    return new this(name, email);
  }
}

const user = new User('Diana', 'diana@example.com');
user.greet(); // "Hello, I'm Diana"
user.delayedGreeting(); // After 1s: "Delayed: Hello, I'm Diana"

const user2 = User.createUser('Eve', 'eve@example.com');
console.log(user2.name); // "Eve"`,
        explanation: "In classes, 'this' refers to the instance. Static methods have 'this' referring to the class constructor.",
      },
    ],
  },
  {
    heading: "Common 'this' Pitfalls and Solutions",
    paragraphs: [
      "Misunderstanding 'this' binding leads to many JavaScript bugs. Here are common problems and their solutions.",
    ],
    examples: [
      {
        title: "Losing Context in Callbacks",
        code:`const button = {
  text: 'Click me',
  handleClick() {
    console.log(\`Button says: \${this.text}\`);
  },
  setupEvent() {
    // Problem: 'this' is lost in event handler
    // document.addEventListener('click', this.handleClick); // undefined

    // Solution 1: bind
    document.addEventListener('click', this.handleClick.bind(this));

    // Solution 2: arrow function
    document.addEventListener('click', () => this.handleClick());

    // Solution 3: wrapper function
    const self = this;
    document.addEventListener('click', function() {
      self.handleClick();
    });
  }
};`,
        explanation: "Event handlers and callbacks often lose the original context. Use bind(), arrow functions, or closure variables to preserve 'this'.",
      },
      {
        title: "Arrow Functions in Object Methods",
        code:`const calculator = {
  value: 0,
  // Problem: arrow function doesn't bind 'this'
  increment: () => {
    this.value++; // 'this' refers to global/window
  },
  // Solution: use regular function
  decrement() {
    this.value--; // 'this' refers to calculator object
  },
  // Alternative: class field with arrow
  multiply = (factor) => {
    this.value *= factor; // 'this' refers to calculator instance
  }
};

calculator.increment();
console.log(calculator.value); // 0 (unchanged)

calculator.decrement();
console.log(calculator.value); // -1

calculator.multiply(3);
console.log(calculator.value); // -3`,
        explanation: "Avoid arrow functions as object methods unless using class fields. Regular functions are better for dynamic 'this' binding.",
      },
    ],
  },
  {
    heading: "Advanced 'this' Concepts",
    paragraphs: [
      "Beyond basic binding rules, there are advanced scenarios involving 'this' in different JavaScript environments and patterns.",
    ],
    examples: [
      {
        title: "'this' in Different Execution Contexts",
        code:`// In browser vs Node.js
console.log(this); // Window (browser) or global (Node.js)

// In eval
function testEval() {
  eval('console.log(this)'); // Same as testEval's 'this'
}

// In with statement (deprecated)
const obj = { prop: 'value' };
with (obj) {
  console.log(this.prop); // 'this' is still the function context
}

// In strict mode vs non-strict
function strictVsNonStrict() {
  'use strict';
  console.log(this); // undefined

  function nested() {
    console.log(this); // undefined (strict mode propagates)
  }
  nested();
}

function nonStrict() {
  console.log(this); // global object

  function nested() {
    console.log(this); // global object
  }
  nested();
}`,
        explanation: "Execution context affects 'this' binding. Strict mode changes default binding from global to undefined.",
      },
      {
        title: "'this' in Event Handlers",
        code:`// DOM event handlers
const button = document.createElement('button');
button.textContent = 'Click me';

button.addEventListener('click', function() {
  console.log(this); // The button element
  console.log(this.textContent); // "Click me"
});

// Arrow function in event handler
button.addEventListener('click', () => {
  console.log(this); // Window/global (lexical scope)
});

// jQuery style event binding
const $button = $(button);
$button.on('click', function() {
  console.log(this); // The DOM element
  console.log($(this).text()); // jQuery wrapper
});`,
        explanation: "In DOM event handlers, 'this' refers to the element that triggered the event. Arrow functions don't get this binding.",
      },
    ],
  },
  {
    heading: "Interview Questions about 'this'",
    paragraphs: [
      "Questions about 'this' are very common in JavaScript interviews. Here are some typical problems and their solutions.",
    ],
    examples: [
      {
        title: "Classic Interview Question: What will this output?",
        code:`const obj = {
  name: 'Test',
  getName() {
    return this.name;
  }
};

const getName = obj.getName;
console.log(getName()); // What will this print?

// Answer: undefined (context lost)`,
        explanation: "When a method is assigned to a variable, it loses its object context. The function is called without any object, so 'this' is undefined in strict mode.",
      },
      {
        title: "Arrow Function Context Preservation",
        code:`function Timer() {
  this.seconds = 0;

  setInterval(function() {
    this.seconds++; // 'this' refers to global/window
    console.log(this.seconds);
  }, 1000);

  // Fixed version
  setInterval(() => {
    this.seconds++; // 'this' refers to Timer instance
    console.log(this.seconds);
  }, 1000);
}

const timer = new Timer();`,
        explanation: "Arrow functions preserve the lexical 'this' from their containing scope, making them perfect for callbacks that need access to the outer context.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Assuming 'this' always refers to the object containing the function",
    fix: "Remember that 'this' depends on how the function is called, not where it's defined.",
  },
  {
    title: "Using arrow functions as object methods",
    fix: "Use regular function syntax for object methods that need dynamic 'this' binding.",
  },
  {
    title: "Losing context when passing methods as callbacks",
    fix: "Use .bind(), arrow functions, or closure variables to preserve context.",
  },
  {
    title: "Forgetting that 'this' is undefined in strict mode for default binding",
    fix: "Always consider execution context and strict mode when working with 'this'.",
  },
  {
    title: "Misunderstanding arrow function lexical scoping",
    fix: "Arrow functions inherit 'this' from their lexical scope, not the calling context.",
  },
  {
    title: "Not using explicit binding when needed",
    fix: "Use call(), apply(), or bind() when you need to manually control 'this' context.",
  },
];

const faqs = [
  {
    q: "What does 'this' refer to in JavaScript?",
    a: "'this' refers to the execution context of a function - the object that is currently executing the code. Its value depends on how the function is called.",
  },
  {
    q: "What's the difference between arrow functions and regular functions regarding 'this'?",
    a: "Arrow functions don't have their own 'this' binding and inherit 'this' from their lexical scope. Regular functions get 'this' based on how they're called.",
  },
  {
    q: "When should I use bind()?",
    a: "Use bind() when you need to permanently set the 'this' context for a function, especially when passing methods as callbacks.",
  },
  {
    q: "Why is 'this' undefined in some cases?",
    a: "In strict mode, when a function is called without any context (default binding), 'this' is undefined instead of the global object.",
  },
  {
    q: "Can I change the value of 'this' inside a function?",
    a: "No, 'this' is immutable within a function. You can only control it through how you call the function or using bind/call/apply.",
  },
  {
    q: "How does 'this' work in event handlers?",
    a: "In DOM event handlers, 'this' refers to the element that triggered the event. Arrow functions in event handlers don't get this binding.",
  },
  {
    q: "What's lexical 'this'?",
    a: "Lexical 'this' means 'this' is determined by the location in the source code where the function is defined, not where it's called. Arrow functions use lexical 'this'.",
  },
  {
    q: "How do I preserve 'this' context in callbacks?",
    a: "Use arrow functions, .bind(), or create a closure variable (const self = this) to capture the context.",
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

export default function JavascriptThisKeywordPage() {
  return (
    <>
      <Script
        id="json-ld-this-keyword"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript this Keyword - Complete Guide to Context and Binding',
            description: 'Master JavaScript this keyword with comprehensive guide. Learn this binding in objects, functions, classes, arrow functions, call/apply/bind methods, and common pitfalls.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 pt-0 pb-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          JavaScript 'this' Keyword - Complete Guide to Context and Binding
        </h1>
        <p className="text-lg mb-8 text-center">
          Master the 'this' keyword in JavaScript with comprehensive examples covering all binding rules,
          common pitfalls, and practical solutions for real-world scenarios.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Understanding 'this' in JavaScript</h2>

          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{section.heading}</h3>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300">
                  {p}
                </p>
              ))}
              {section.examples && section.examples.length > 0 && (
                <div className="space-y-6">
                  {section.examples.map((ex, exIdx) => (
                    <CodeExample
                      key={exIdx}
                      title={ex.title}
                      code={ex.code}
                      explanation={ex.explanation}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Common Mistakes with 'this'</h2>
          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700 dark:text-red-400">
                  {mistake.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <strong>Solution:</strong> {mistake.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">'this' Keyword FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Functions", href: "/javascript/functions" },
              { label: "Objects", href: "/javascript/objects" },
              { label: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
              { label: "Classes", href: "/javascript/classes" },
              { label: "Interview Questions", href: "/javascript/interview-questions" },
              { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
  <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
    <li>'this' refers to the execution context, determined by how a function is called</li>
    <li>Four binding rules: default, implicit, explicit, and new</li>
    <li>Arrow functions use lexical 'this', regular functions use dynamic 'this'</li>
    <li>Use bind(), call(), apply() for explicit binding control</li>
    <li>Context loss is common in callbacks - use appropriate solutions</li>
    <li>Understanding 'this' is crucial for object-oriented JavaScript</li>
  </ul>
</div>

</article>
</>
);
}
