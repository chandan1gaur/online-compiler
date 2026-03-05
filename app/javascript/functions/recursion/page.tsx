import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Recursion - Recursive Functions",
  description: "Learn JavaScript recursion. Master writing recursive functions with base cases and call stacks.",
  keywords: [
    "javascript recursion",
    "recursive functions",
    "base case",
    "call stack",
    "javascript functions",
    "algorithm design",
  ],
  openGraph: {
    title: "JavaScript Recursion",
    description: "Learn recursive functions and master recursion patterns in JavaScript.",
    url: "/javascript/functions/recursion",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Recursion",
    description: "Master recursive functions and recursion patterns.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/functions/recursion" },
};

const sections = [
  {
    heading: "What is Recursion?",
    paragraphs: [
      "Recursion is when a function calls itself to solve smaller instances of the same problem. Every recursive function needs a base case to stop the recursion and prevent infinite loops.",
      "Recursion is useful for solving problems that have a naturally recursive structure, like tree traversal or mathematical calculations.",
    ],
    examples: [
      {
        title: "Basic Recursion",
        code: `// Simple recursion - countdown
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return; // BASE CASE - stop recursion
  }
  console.log(n);
  countdown(n - 1); // RECURSIVE CALL
}

countdown(3);
// Output:
// 3
// 2
// 1
// Done!

// Recursion with return value
function factorial(n) {
  if (n <= 1) {
    return 1; // BASE CASE
  }
  return n * factorial(n - 1); // RECURSIVE CALL
}

console.log(factorial(5)); // 120 (5*4*3*2*1)
console.log(factorial(0)); // 1`,
        explanation: "Recursion needs a base case to avoid infinite loops. The function calls itself with a simpler input.",
      },
    ],
  },
  {
    heading: "Base Cases and Recursive Cases",
    paragraphs: [
      "A recursive function has two parts: the base case that stops recursion, and the recursive case that calls the function again with a simpler problem.",
    ],
    examples: [
      {
        title: "Base and Recursive Cases",
        code: `// Sum of array elements
function sumArray(arr, index = 0) {
  // BASE CASE - stop condition
  if (index >= arr.length) {
    return 0;
  }
  
  // RECURSIVE CASE - combine current with rest
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Find maximum value
function findMax(arr, index = 0) {
  // BASE CASE - single element
  if (index === arr.length - 1) {
    return arr[index];
  }
  
  // RECURSIVE CASE - compare with rest
  const restMax = findMax(arr, index + 1);
  return arr[index] > restMax ? arr[index] : restMax;
}

console.log(findMax([3, 1, 4, 1, 5])); // 5

// String reverse
function reverseString(str) {
  // BASE CASE - empty or single character
  if (str.length <= 1) {
    return str;
  }
  
  // RECURSIVE CASE - last char + reversed rest
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString("hello")); // "olleh"`,
        explanation: "Base case stops recursion. Recursive case solves a smaller version of the problem.",
      },
    ],
  },
  {
    heading: "Common Recursion Patterns",
    paragraphs: [
      "Many problems naturally fit recursive patterns like tree traversal, divide and conquer, and search algorithms.",
    ],
    examples: [
      {
        title: "Recursion Patterns",
        code: `// Tree traversal (depth-first)
const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null }
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
};

function traverse(node) {
  if (node === null) {
    return; // BASE CASE
  }
  console.log(node.value);
  traverse(node.left); // RECURSIVE - left subtree
  traverse(node.right); // RECURSIVE - right subtree
}

traverse(tree); // 1, 2, 4, 5, 3

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n; // BASE CASE
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // RECURSIVE
}

console.log(fibonacci(10)); // 55

// Binary search
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // BASE CASE - not found
  }
  
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid; // BASE CASE - found
  }
  
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high); // RECURSIVE
  } else {
    return binarySearch(arr, target, low, mid - 1); // RECURSIVE
  }
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3`,
        explanation: "Recursion works well for hierarchical data and divide-and-conquer algorithms.",
      },
    ],
  },
  {
    heading: "Understanding the Call Stack",
    paragraphs: [
      "Recursion works by building up a call stack. Each recursive call adds to the stack, then returns values down the stack.",
    ],
    examples: [
      {
        title: "Call Stack Visual",
        code: `// Visualizing the call stack
function trace(n) {
  console.log("Enter: " + n);
  
  if (n <= 0) {
    console.log("Base case reached");
    return;
  }
  
  trace(n - 1); // Go deeper
  
  console.log("Exit: " + n); // Unwinding
}

trace(3);
// Output:
// Enter: 3
// Enter: 2
// Enter: 1
// Enter: 0
// Base case reached
// Exit: 1
// Exit: 2
// Exit: 3

// Example showing call stack depth
function depth(n = 0) {
  try {
    return 1 + depth(n + 1);
  } catch (e) {
    return n; // Stack overflow caught
  }
}

console.log(depth()); // Stack overflow limit reached`,
        explanation: "Function calls stack up until base case, then unwind returning values.",
      },
    ],
  },
  {
    heading: "Recursion vs Iteration",
    paragraphs: [
      "Both recursion and iteration can solve the same problems. Choose based on readability and performance.",
    ],
    examples: [
      {
        title: "Recursion vs Iteration",
        code: `// Problem: Sum array elements

// Recursive solution - elegant, but uses call stack
function sumRecursive(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + sumRecursive(arr, i + 1);
}

// Iterative solution - efficient, uses loop
function sumIterative(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Iterative with reduce - functional
function sumFunctional(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumRecursive(numbers)); // 15
console.log(sumIterative(numbers)); // 15
console.log(sumFunctional(numbers)); // 15

// When to use each:
// - Recursion: Tree/graph traversal, naturally recursive problems
// - Iteration: Simple loops, when stack depth matters
// - Functional reduce: Array transformations`,
        explanation: "Choose recursion for naturally recursive problems, iteration for simple loops.",
      },
    ],
  },
  {
    heading: "Tail Call Optimization",
    paragraphs: [
      "Tail call optimization (TCO) allows recursive functions to not grow the call stack if the recursive call is the last operation. JavaScript doesn't always support TCO, but it's good to be aware of.",
    ],
    examples: [
      {
        title: "Tail Recursion",
        code: `// Not tail recursive - multiplies after recursive call
function factorialNotTail(n, acc = 1) {
  if (n <= 1) return acc;
  return n * factorialNotTail(n - 1, acc); // Not the last operation
}

// Tail recursive - accumulates result, passes forward
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc; // Last operation returns result
  return factorialTail(n - 1, n * acc); // Tail call
}

console.log(factorialTail(5)); // 120

// Note: JavaScript doesn't always optimize tail calls
// But structuring code this way is good practice

// Example: tail recursive power function
function power(base, exponent, result = 1) {
  if (exponent === 0) return result;
  return power(base, exponent - 1, result * base); // Tail call
}

console.log(power(2, 10)); // 1024

// Practical: tail-recursive list processing
function processItems(items, index = 0, results = []) {
  if (index >= items.length) {
    return results;
  }
  const processed = items[index] * 2;
  results.push(processed);
  return processItems(items, index + 1, results); // Tail call
}

console.log(processItems([1, 2, 3, 4, 5]));
// [2, 4, 6, 8, 10]`,
        explanation: "Tail recursion is more efficient because the recursive call is the last operation.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Missing base case",
    fix: "Every recursive function must have a base case to stop recursion. Without it, you get infinite recursion and stack overflow.",
  },
  {
    title: "Not making progress toward base case",
    fix: "Each recursive call must make progress toward the base case. Otherwise, you'll have infinite recursion.",
  },
  {
    title: "Using recursion for simple loops",
    fix: "For simple iterations, use loops instead of recursion. Recursion uses more memory due to call stack.",
  },
];

const faqs = [
  {
    q: "What is recursion?",
    a: "Recursion is when a function calls itself to solve smaller instances of the same problem. It requires a base case to stop.",
  },
  {
    q: "What is a base case?",
    a: "A base case is the condition that stops recursion. Without a base case, recursion would be infinite.",
  },
  {
    q: "What is stack overflow?",
    a: "Stack overflow occurs when recursion is too deep and exceeds the call stack limit. This happens with infinite or very deep recursion.",
  },
  {
    q: "When should I use recursion?",
    a: "Use recursion for naturally recursive problems like tree traversal, or when the recursive solution is clearer than iteration.",
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

export default function RecursionPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Recursion
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master recursive functions and recursion patterns. Understand when and how to use recursion effectively.
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
          Recursion is fundamental to computer science and essential for solving many algorithm problems. Understanding recursion unlocks solutions to complex problems like tree traversal and dynamic programming.
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
              { label: "Function Declaration", href: "/javascript/functions/function-declaration" },
              { label: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
              { label: "Call Stack", href: "/javascript/how-javascript-works" },
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