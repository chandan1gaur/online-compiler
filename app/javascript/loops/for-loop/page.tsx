import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript for Loop - Iteration Control",
  description: "Learn JavaScript for loop with examples. Master iteration control, counting, and array traversal with for loops.",
  keywords: [
    "javascript for loop",
    "for loop javascript",
    "iteration javascript",
    "loop control",
    "javascript loops",
    "array iteration",
  ],
  openGraph: {
    title: "JavaScript for Loop - Iteration Control",
    description: "Learn JavaScript for loop with examples. Master iteration control, counting, and array traversal.",
    url: "/javascript/loops/for-loop",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript for Loop",
    description: "Learn JavaScript for loop with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/loops/for-loop" },
};

const sections = [
  {
    heading: "What is a for Loop?",
    paragraphs: [
      "The for loop is the most common type of loop in JavaScript. It allows you to execute a block of code repeatedly for a specified number of times.",
      "It's particularly useful when you know exactly how many times you want to iterate, or when you need to iterate over arrays with index access.",
    ],
    examples: [
      {
        title: "Basic for Loop",
        code: `for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4`,
        explanation: "This loop runs 5 times, with i starting at 0 and incrementing by 1 each time until i < 5 is false.",
      },
    ],
  },
  {
    heading: "for Loop Syntax",
    paragraphs: [
      "The for loop has three parts in its parentheses: initialization, condition, and increment/decrement.",
      "Each part is separated by semicolons and controls different aspects of the loop execution.",
    ],
    examples: [
      {
        title: "for Loop Structure",
        code: `for (initialization; condition; increment/decrement) {
  // code to execute each iteration
}`,
        explanation: "The three parts work together: initialize counter, check condition, update counter.",
      },
      {
        title: "Parts Breakdown",
        code: `for (let i = 0;     // 1. Initialization - runs once at start
     i < 10;        // 2. Condition - checked before each iteration
     i++) {         // 3. Increment - runs after each iteration

  console.log(i);  // Loop body - executes while condition is true
}`,
        explanation: "Understanding each part helps you control loop behavior precisely.",
      },
    ],
  },
  {
    heading: "Common for Loop Patterns",
    paragraphs: [
      "Different initialization, condition, and increment patterns serve different purposes.",
    ],
    examples: [
      {
        title: "Counting Up",
        code: `// Count from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}`,
        explanation: "Start at 1, go up to and including 10, increment by 1.",
      },
      {
        title: "Counting Down",
        code: `// Count from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}`,
        explanation: "Start at 10, go down to 1, decrement by 1.",
      },
      {
        title: "Even Numbers",
        code: `// Print even numbers from 0 to 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}`,
        explanation: "Increment by 2 to get only even numbers.",
      },
      {
        title: "Custom Increment",
        code: `// Count by 5s
for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}`,
        explanation: "Any increment value works - here we count by 5s.",
      },
    ],
  },
  {
    heading: "Array Iteration with for Loops",
    paragraphs: [
      "for loops are excellent for iterating over arrays when you need the index or want to modify the array.",
    ],
    examples: [
      {
        title: "Iterate with Index",
        code: `let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}

// Output:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: orange`,
        explanation: "Access both index (i) and value (fruits[i]) in each iteration.",
      },
      {
        title: "Modify Array Elements",
        code: `let numbers = [1, 2, 3, 4, 5];

// Double each number
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}

console.log(numbers); // [2, 4, 6, 8, 10]`,
        explanation: "Modify array elements directly using their indices.",
      },
      {
        title: "Reverse Array",
        code: `let arr = [1, 2, 3, 4, 5];

// Swap elements from start and end
for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log(arr); // [5, 4, 3, 2, 1]`,
        explanation: "Reverse array by swapping elements from both ends moving toward the center.",
      },
    ],
  },
  {
    heading: "Nested for Loops",
    paragraphs: [
      "for loops can be nested inside each other to handle multi-dimensional data or complex iterations.",
    ],
    examples: [
      {
        title: "Multiplication Table",
        code: `// Print multiplication table 1-5
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(\`\${i} × \${j} = \${i * j}\`);
  }
  console.log("---"); // separator
}`,
        explanation: "Outer loop controls rows, inner loop controls columns.",
      },
      {
        title: "2D Array Iteration",
        code: `let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(\`matrix[\${i}][\${j}] = \${matrix[i][j]}\`);
  }
}`,
        explanation: "Iterate through each element of a 2D array using nested loops.",
      },
    ],
  },
  {
    heading: "for vs Other Loops",
    paragraphs: [
      "Different loop types serve different purposes. Choose based on your specific needs.",
    ],
    bullets: [
      "Use for when you know the number of iterations or need index access",
      "Use for...of for simple array iteration without indices",
      "Use for...in for object property iteration",
      "Use while when the number of iterations is unknown",
      "Use do...while when you need at least one execution",
    ],
    examples: [
      {
        title: "for vs for...of",
        code: `let fruits = ["apple", "banana", "orange"];

// Use for when you need index
for (let i = 0; i < fruits.length; i++) {
  console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}

// Use for...of for simple iteration
for (let fruit of fruits) {
  console.log(fruit);
}`,
        explanation: "Choose the right loop type for your specific use case.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Following best practices makes your for loops more readable and less error-prone.",
    ],
    bullets: [
      "Use meaningful variable names (i, j, k are conventional for indices)",
      "Cache array length in the condition to avoid recalculating",
      "Use const for loop variables when not modifying them",
      "Keep loop bodies small and focused",
      "Consider for...of or array methods for simple iterations",
      "Add comments for complex loop logic",
    ],
    examples: [
      {
        title: "Cache Array Length",
        code: `let arr = [1, 2, 3, 4, 5];

// Good: Cache length
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// Avoid: Recalculate length each iteration
for (let i = 0; i < arr.length; i++) { // arr.length recalculated each time
  console.log(arr[i]);
}`,
        explanation: "Caching array length improves performance, especially for large arrays.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Off-by-one errors",
    fix: "Be careful with loop bounds. Use < for arrays, <= for counting to a number.",
  },
  {
    title: "Infinite loops",
    fix: "Ensure the loop condition will eventually become false.",
  },
  {
    title: "Modifying loop counter inside loop",
    fix: "Avoid changing the loop variable inside the loop body unless intentional.",
  },
];

const faqs = [
  {
    q: "When should I use a for loop instead of for...of?",
    a: "Use for loop when you need the index, want to modify the array, or need more control over iteration.",
  },
  {
    q: "Can I declare the loop variable with const?",
    a: "No, because the variable needs to be reassigned each iteration. Use let instead.",
  },
  {
    q: "What happens if I don't include all three parts of the for loop?",
    a: "You can omit parts, but semicolons are still required. For example: for(;;) creates an infinite loop.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function JavascriptForLoopPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript for Loop</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master the classic for loop in JavaScript. Learn iteration control, array traversal, and efficient counting patterns.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try for Loops
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          for loops are fundamental to programming. They allow you to repeat operations efficiently, process arrays, and handle iterative tasks that would be impractical to write out manually.
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
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
              { label: "while Loop", href: "/javascript/loops/while-loop" },
              { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
              { label: "break Statement", href: "/javascript/loops/break-statement" },
              { label: "continue Statement", href: "/javascript/loops/continue-statement" },
              { label: "Nested Loops", href: "/javascript/loops/nested-loops" },
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