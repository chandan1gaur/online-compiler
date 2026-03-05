import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Loops: for, while, do-while, for-of Complete Guide",
  description:
    "Master JavaScript loops: for, while, do-while, for-of, for-in. Learn loop control with break/continue, array iteration patterns, and best practices.",
  keywords: [
    "javascript loops",
    "for loop",
    "while loop",
    "do-while loop",
    "for-of loop",
    "for-in loop",
    "array iteration",
    "break continue",
    "nested loops",
  ],
  openGraph: {
    title: "JavaScript Loops Complete Guide",
    description: "Master all JavaScript loop types with practical examples and best practices.",
    url: "/javascript/loops",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Loops Guide",
  },
  alternates: { canonical: "/javascript/loops" },
};

const loopTypesQuickRef = [
  {
    title: "for Loop",
    description: "Traditional loop for a known number of iterations",
    href: "/javascript/loops/for-loop",
    color: "cyan",
    use: "Array iteration, known counts",
  },
  {
    title: "while Loop",
    description: "Loop while condition is true",
    href: "/javascript/loops/while-loop",
    color: "blue",
    use: "Condition-based iteration",
  },
  {
    title: "do...while Loop",
    description: "Execute at least once, then check condition",
    href: "/javascript/loops/do-while-loop",
    color: "purple",
    use: "Guaranteed execution, menus",
  },
  {
    title: "break Statement",
    description: "Exit loop immediately",
    href: "/javascript/loops/break-statement",
    color: "orange",
    use: "Early termination",
  },
  {
    title: "continue Statement",
    description: "Skip to next iteration",
    href: "/javascript/loops/continue-statement",
    color: "amber",
    use: "Filtering, skipping",
  },
  {
    title: "Nested Loops",
    description: "Loops within loops",
    href: "/javascript/loops/nested-loops",
    color: "rose",
    use: "2D arrays, matrices",
  },
];

const sections = [
  {
    heading: "The Classic for Loop",
    paragraphs: [
      "The for loop is the most traditional and flexible loop in JavaScript. Perfect when you need to repeat something a known number of times. It's especially useful for array access by index.",
      "The for loop structure has three parts: initialization (setup counter), condition (when to stop), and increment (update counter each time). Control over the loop variable makes it ideal for backward iteration or custom stepping patterns.",
      "The for loop works by initializing a variable, checking if the condition is true, running the code block, then updating the variable. This repeats until the condition is false.",
    ],
    examples: [
      {
        title: "Basic for Loop Patterns",
        code: `// Repeat 5 times\nfor (let i = 0; i < 5; i++) {\n  console.log("Iteration", i);\n}\n\n// Iterate over array by index\nconst fruits = ["apple", "banana", "cherry"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(i + 1 + ". " + fruits[i]);\n}\n\n// Count backwards\nfor (let i = 5; i > 0; i--) {\n  console.log(i);\n}\n\n// Step by 2\nfor (let i = 0; i < 10; i += 2) {\n  console.log(i); // 0, 2, 4, 6, 8\n}\n\n// Nested loop (table)\nfor (let row = 1; row <= 3; row++) {\n  for (let col = 1; col <= 3; col++) {\n    console.log(row + "," + col);\n  }\n}`,
        explanation:
          "for loop syntax: for (initialization; condition; update). Runs while condition is true. Perfect for indexed access.",
      },
    ],
  },
  {
    heading: "The while Loop",
    paragraphs: [
      "The while loop repeats code as long as a condition is true. It's best for condition-driven loops where you don't know the iteration count in advance.",
      "Useful for user input validation, polling servers, state machines, and any scenario where the loop should continue based on a condition rather than a fixed count.",
      "Be careful with while loops: always ensure the condition will eventually become false, otherwise you'll create an infinite loop that hangs the program.",
    ],
    examples: [
      {
        title: "while Loop Patterns",
        code: `// Simple countdown\nlet count = 3;\nwhile (count > 0) {\n  console.log(count);\n  count--;\n}\n\n// User input validation\nlet userInput = "";\nwhile (userInput !== "exit") {\n  userInput = prompt("Type 'exit' to quit:");\n  if (userInput && userInput !== "exit") {\n    console.log("You typed:", userInput);\n  }\n}\n\n// Processing items from queue\nconst queue = [1, 2, 3, 4, 5];\nwhile (queue.length > 0) {\n  const item = queue.shift();\n  console.log("Processing:", item);\n}\n\n// Polling until condition met\nlet attempts = 0;\nlet dataReady = false;\nwhile (!dataReady && attempts < 5) {\n  console.log("Attempt", attempts + 1);\n  attempts++;\n  // Simulate: dataReady = checkServer();\n}\n\n// Infinite loop (careful!)\nlet running = true;\nwhile (running) {\n  // Do something\n  if (someCondition) running = false;\n}`,
        explanation:
          "while runs as long as condition is true. Must update condition inside loop to prevent infinite loops.",
      },
    ],
  },
  {
    heading: "The do-while Loop",
    paragraphs: [
      "The do-while loop is like while, but it runs the code at least once before checking the condition. Perfect for situations where you need one guaranteed execution.",
      "Common use cases include menu loops (always show menu once), form validation (validate once before retry), and retry logic (always try once before giving up).",
      "The key difference: while checks first, do-while does first then checks. This makes do-while less common but very useful when appropriate.",
    ],
    examples: [
      {
        title: "do-while Patterns",
        code: `// Menu that always shows at least once\nlet choice = "";\ndo {\n  console.log("1. Play  2. Settings  3. Quit");\n  choice = prompt("Select option:");\n  console.log("You selected:", choice);\n} while (choice !== "3");\n\n// Form validation (try at least once)\nlet validAge = false;\ndo {\n  const age = prompt("Enter your age:");\n  if (age >= 0 && age <= 150) {\n    validAge = true;\n    console.log("Age accepted:", age);\n  } else {\n    console.log("Invalid, try again");\n  }\n} while (!validAge);\n\n// Retry pattern\nlet success = false;\nlet attempts = 0;\ndo {\n  attempts++;\n  console.log("Attempt", attempts);\n  // Simulate: success = tryServerConnection();\n  if (attempts === 3) success = true;\n} while (!success && attempts < 5);\n\n// Roll dice until 6\nlet roll;\ndo {\n  roll = Math.floor(Math.random() * 6) + 1;\n  console.log("Rolled:", roll);\n} while (roll !== 6);`,
        explanation:
          "do-while guarantees at least one execution. Perfect for menus and validation where you must run once.",
      },
    ],
  },
  {
    heading: "The for-of Loop (Modern & Cleanest)",
    paragraphs: [
      "The for-of loop is the modern, cleanest way to iterate over arrays and other iterables. It's much simpler than for when you don't need index access.",
      "Works with arrays, strings, Set, Map, and any iterable. You get the actual values directly, not string indexes like for-in. Can use break and continue just like traditional loops.",
      "Recommended for most array iteration: cleaner code, fewer index-related bugs, and works with all iterable types. Use traditional for only when you specifically need the index.",
    ],
    examples: [
      {
        title: "for-of Examples",
        code: `// Iterate array values\nconst numbers = [10, 20, 30, 40];\nfor (const num of numbers) {\n  console.log("Number:", num);\n}\n\n// Iterate string characters\nconst message = "Hello";\nfor (const char of message) {\n  console.log("Char:", char);\n}\n\n// Skip with continue\nconst users = ["Alice", "", "Bob", "", "Carol"];\nfor (const user of users) {\n  if (!user) continue;\n  console.log("User:", user);\n}\n\n// Exit with break\nconst items = [1, 2, 3, 4, 5];\nfor (const item of items) {\n  if (item === 3) break;\n  console.log(item);\n}\n\n// With destructuring\nconst pairs = [["a", 1], ["b", 2], ["c", 3]];\nfor (const [letter, num] of pairs) {\n  console.log(letter + " = " + num);\n}\n\n// Iterate Map entries\nconst map = new Map([["name", "John"], ["age", 30]]);\nfor (const [key, value] of map) {\n  console.log(key + ": " + value);\n}\n\n// Using with index (when needed)\nconst list = ["a", "b", "c"];\nfor (const [index, item] of list.entries()) {\n  console.log(index + ": " + item);\n}`,
        explanation:
          "for-of is cleanest for values. Use list.entries() for index if needed. Handles break/continue perfectly.",
      },
    ],
  },
  {
    heading: "Break and Continue Control Flow",
    paragraphs: [
      "break exits the loop entirely and skips to the code after the loop. continue skips the rest of the current iteration and jumps to the next one. Both are crucial for controlling complex loop logic.",
      "Use break to exit early when you find what you're looking for or a condition is met. Use continue to skip unwanted iterations, like filtering even numbers or empty values.",
      "These statements reduce unnecessary execution and make code clearer by expressing intent directly. A well-placed break avoids processing 1000 items after finding your target at item 5.",
    ],
    examples: [
      {
        title: "Break and Continue Patterns",
        code: `// BREAK: Exit when found\nconst numbers = [1, 2, 3, 4, 5];\nlet found = false;\nfor (const num of numbers) {\n  if (num === 3) {\n    found = true;\n    break;\n  }\n}\nconsole.log("Found:", found);\n\n// CONTINUE: Skip even numbers\nconst list = [1, 2, 3, 4, 5, 6];\nfor (const item of list) {\n  if (item % 2 === 0) continue;\n  console.log("Odd:", item);\n}\n\n// COMBINE: Complex filtering\nfor (let i = 0; i < 100; i++) {\n  if (i < 10) continue;    // Skip first 10\n  if (i > 50) break;       // Stop after 50\n  if (i % 2 !== 0) continue; // Skip odd\n  console.log(i); // Even from 10-50\n}\n\n// Search pattern\nconst array = ["apple", "banana", "cherry"];\nlet index = -1;\nfor (let i = 0; i < array.length; i++) {\n  if (array[i] === "cherry") {\n    index = i;\n    break;\n  }\n}\nconsole.log("Found at index:", index);\n\n// Skip invalid entries\nconst data = ["valid", null, undefined, "valid", ""];\nfor (const item of data) {\n  if (!item) continue;\n  console.log("Processing:", item);\n}`,
        explanation:
          "break exits completely. continue skips to next. Use together for nuanced iteration control.",
      },
    ],
  },
  {
    heading: "for-in Loop (For Objects)",
    paragraphs: [
      "The for-in loop iterates over object keys (properties). It's useful for objects but not recommended for arrays because you get string indexes, not values.",
      "Important: for-in includes inherited enumerable properties from the prototype chain, which can cause unexpected results. Always use hasOwnProperty() or Object.keys() to filter if needed.",
      "For modern code, prefer: for-of for arrays, Object.keys()/Object.entries() for objects. for-in is useful for legacy code or dynamic property access.",
    ],
    examples: [
      {
        title: "for-in for Objects (Not Arrays)",
        code: `// ✓ CORRECT: Use for-in with objects\nconst person = { name: "John", age: 30, city: "NYC" };\nfor (const key in person) {\n  console.log(key + ": " + person[key]);\n}\n\n// ✗ AVOID: for-in with arrays (index is string)\nconst fruits = ["apple", "banana", "cherry"];\nfor (const index in fruits) {\n  console.log(index, fruits[index]);\n  console.log(typeof index); // "string", not number!\n}\n\n// ✓ CORRECT: Use for-of for arrays\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// Filter to own properties\nconst obj = { a: 1, b: 2 };\nfor (const key in obj) {\n  if (obj.hasOwnProperty(key)) {\n    console.log(key + ":", obj[key]);\n  }\n}\n\n// Modern alternative: Object.keys\nfor (const key of Object.keys(obj)) {\n  console.log(key + ":", obj[key]);\n}\n\n// Modern alternative: Object.entries\nfor (const [key, value] of Object.entries(obj)) {\n  console.log(key + ":", value);\n}`,
        explanation:
          "for-in for objects only. for-of for arrays. Use Object.keys/entries for safe object iteration.",
      },
    ],
  },
  {
    heading: "Nested Loops and Complex Patterns",
    paragraphs: [
      "Nested loops (loop inside loop) are useful for matrix operations, multi-dimensional data, and combinations. However, performance degrades quickly: n nested loops = O(n^n) complexity.",
      "Common patterns: matrix iteration (grid, tic-tac-toe), combinations (pairwise comparisons), flattening (nested arrays), searching (find matching pairs).",
      "When nesting gets too deep (3+ levels), consider extracting to functions, using array methods, or redesigning the data structure for clarity and performance.",
    ],
    examples: [
      {
        title: "Nested Loops and Alternatives",
        code: `// Nested for loop: Matrix\nconst matrix = [[1, 2], [3, 4], [5, 6]];\nfor (let r = 0; r < matrix.length; r++) {\n  for (let c = 0; c < matrix[r].length; c++) {\n    console.log("Position [" + r + "," + c + "]:", matrix[r][c]);\n  }\n}\n\n// Multiplication table\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i + " × " + j + " = " + (i * j));\n  }\n}\n\n// Check all pairs (combination search)\nconst arr = [1, 2, 3, 4, 5];\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = i + 1; j < arr.length; j++) {\n    if (arr[i] + arr[j] === 6) {\n      console.log("Pair found:", arr[i], arr[j]);\n    }\n  }\n}\n\n// Flatten nested array\nconst nested = [[1, 2], [3, 4], [5, 6]];\nconst flat = [];\nfor (const subArray of nested) {\n  for (const item of subArray) {\n    flat.push(item);\n  }\n}\n\n// BETTER: Use array methods\nconst flatBetter = nested.flat();\nconst flatEvenBetter = [].concat(...nested);`,
        explanation:
          "Nested loops can be powerful but slow (O(n²) or worse). Use array methods when possible for clarity.",
      },
    ],
  },
  {
    heading: "Loop Performance and Best Practices",
    paragraphs: [
      "Modern JavaScript engines optimize loops heavily. Performance differences between loop types are usually negligible in practice. Choose based on readability and correctness, not tiny performance differences.",
      "Real performance issues come from: heavy computation inside tight loops, accessing complex properties repeatedly, unnecessary DOM operations, or inefficient algorithms.",
      "Best practices: cache length if using it repeatedly, extract complex logic to functions, use appropriate array methods (map, filter, reduce), minimize side effects, and measure before optimizing.",
    ],
    examples: [
      {
        title: "Performance Best Practices",
        code: `// ❌ AVOID: Calling function in condition\nfor (let i = 0; i < getArray().length; i++) {\n  process(getArray()[i]);\n}\n\n// ✓ BETTER: Cache values\nconst arr = getArray();\nconst len = arr.length;\nfor (let i = 0; i < len; i++) {\n  process(arr[i]);\n}\n\n// ❌ AVOID: Complex logic in loop\nfor (const item of items) {\n  if (validate(item) && transform(item)) {\n    const result = calculate(item);\n    const final = format(result);\n    console.log(final);\n  }\n}\n\n// ✓ BETTER: Extract function\nconst processItem = (item) => {\n  if (!validate(item)) return null;\n  const transformed = transform(item);\n  const result = calculate(transformed);\n  return format(result);\n};\n\nfor (const item of items) {\n  const result = processItem(item);\n  if (result) console.log(result);\n}\n\n// ✓ BEST: Use array methods\nconst results = items\n  .filter(validate)\n  .map(transform)\n  .map(calculate)\n  .map(format);\n\nresults.forEach(console.log);\n\n// For reductions\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconst doubled = numbers.map(n => n * 2);\nconst even = numbers.filter(n => n % 2 === 0);`,
        explanation:
          "Modern engines auto-optimize. Prioritize readable, maintainable code. Use array methods for transformations.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Infinite loops from wrong conditions",
    fix: 'Ensure loop condition can become false. i++ not i-- when i < 10, etc.',
  },
  {
    title: "Using for-in for array iteration",
    fix: "for-in iterates keys (as strings). Use for-of for values or standard for.",
  },
  {
    title: "Modifying array while iterating",
    fix: "Collect changes, apply after loop, or iterate backwards if removing.",
  },
  {
    title: "Forgetting break/continue scope",
    fix: "break/continue only affect immediate loop, not outer nested loops.",
  },
  {
    title: "Off-by-one errors in ranges",
    fix: "Use < not <= carefully. for (i = 0; i < 5) runs 0-4, not 0-5.",
  },
];

const faqs = [
  {
    q: "Which loop is fastest?",
    a: "Modern engines optimize all types similarly. Choose based on code clarity and correctness, not performance.",
  },
  {
    q: "Can I use break outside a loop?",
    a: "No. break only works inside loops and switch statements. You'll get a syntax error otherwise.",
  },
  {
    q: "What's the difference between break and continue?",
    a: "break exits the entire loop. continue skips the rest of current iteration and goes to next one.",
  },
  {
    q: "Is forEach a loop?",
    a: "It's an array method. Use for-of or standard for when you need break/continue control.",
  },
  {
    q: "How do I loop backwards?",
    a: "Use for with i--, or reverse array: [...arr].reverse().forEach(). for-of doesn't go backwards.",
  },
  {
    q: "How do I avoid infinite loops?",
    a: "Verify condition changes each iteration, counters update, and loop variables change to eventually make condition false.",
  },
  {
    q: "When should I use do-while?",
    a: "When you need at least one execution: menus, validation retries, or guaranteed first run.",
  },
  {
    q: "Can I label loops for breaking nested ones?",
    a: "Yes: outerLoop: for(...) { for(...) { break outerLoop; } } breaks the outer loop.",
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

export default function JavascriptLoopsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Loops: Complete Reference
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master all JavaScript loop types: for, while, do-while, for-of, for-in. Learn loop control with break/continue,
          array iteration patterns, nested loops, and performance best practices.
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
          Loops are fundamental to all programming. They process data, build interfaces, automate tasks, and drive logic.
          Choosing the right loop type improves code clarity and prevents common bugs like infinite loops or index errors.
        </p>
      </div>

      {/* Quick Reference Cards */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loopTypesQuickRef.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-slate-200 bg-white p-4 hover:shadow-lg transition-all dark:border-slate-800 dark:bg-slate-900/80 hover:border-slate-400 dark:hover:border-slate-600"
            >
              <h3 className={`text-base font-bold text-${item.color}-700 dark:text-${item.color}-300 group-hover:text-${item.color}-800 dark:group-hover:text-${item.color}-200`}>
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.description}</p>
              <p className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="text-gray-500 dark:text-gray-400">Use for: </span>{item.use}
              </p>
              <div className={`mt-3 inline-flex text-xs font-semibold text-${item.color}-700 dark:text-${item.color}-300`}>
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-900/40">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">📚 Recommended Learning Path</h2>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-cyan-700 dark:bg-cyan-600 text-white text-xs font-bold">1</div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                <Link href="/javascript/loops/for-loop" className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-300">
                  for Loop
                </Link>
              </p>
              <p className="text-slate-600 dark:text-slate-400">Master the foundation - iteration, array access, and loop control</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-700 dark:bg-blue-600 text-white text-xs font-bold">2</div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                <Link href="/javascript/loops/while-loop" className="text-blue-700 hover:text-blue-800 dark:text-blue-300">
                  while Loop
                </Link>
              </p>
              <p className="text-slate-600 dark:text-slate-400">Learn condition-based iteration and when to use while over for</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-purple-700 dark:bg-purple-600 text-white text-xs font-bold">3</div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                <Link href="/javascript/loops/break-statement" className="text-orange-700 hover:text-orange-800 dark:text-orange-300">
                  break & continue
                </Link>
              </p>
              <p className="text-slate-600 dark:text-slate-400">Control loop flow with early exit and iteration skipping</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-rose-700 dark:bg-rose-600 text-white text-xs font-bold">4</div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                <Link href="/javascript/loops/nested-loops" className="text-rose-700 hover:text-rose-800 dark:text-rose-300">
                  Nested Loops
                </Link>
              </p>
              <p className="text-slate-600 dark:text-slate-400">Handle multi-dimensional data, matrices, and complex structures</p>
            </div>
          </div>
        </div>
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
