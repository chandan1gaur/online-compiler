import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Nested Loops - Multi-dimensional Iteration",
  description: "Learn JavaScript nested loops with examples. Master iterating over arrays, matrices, and complex data structures.",
  keywords: [
    "javascript nested loops",
    "nested for loops",
    "multidimensional arrays",
    "javascript loops",
    "matrix iteration",
  ],
  openGraph: {
    title: "JavaScript Nested Loops - Multi-dimensional Iteration",
    description: "Learn JavaScript nested loops with examples. Master iterating over complex data structures.",
    url: "/javascript/loops/nested-loops",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Nested Loops",
    description: "Learn JavaScript nested loops with examples and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/loops/nested-loops" },
};

const sections = [
  {
    heading: "What are Nested Loops?",
    paragraphs: [
      "Nested loops are loops inside other loops. The inner loop runs completely for each iteration of the outer loop.",
      "They're essential for working with multi-dimensional data structures like matrices, tables, and complex objects.",
    ],
    examples: [
      {
        title: "Basic Nested for Loops",
        code: `for (let i = 0; i < 3; i++) {
  console.log(\`Outer loop: \${i}\`);

  for (let j = 0; j < 2; j++) {
    console.log(\`  Inner loop: \${j}\`);
  }
}

// Output:
// Outer loop: 0
//   Inner loop: 0
//   Inner loop: 1
// Outer loop: 1
//   Inner loop: 0
//   Inner loop: 1
// Outer loop: 2
//   Inner loop: 0
//   Inner loop: 1`,
        explanation: "Inner loop completes all iterations for each outer loop iteration.",
      },
    ],
  },
  {
    heading: "Working with 2D Arrays",
    paragraphs: [
      "Nested loops are perfect for iterating through two-dimensional arrays (matrices).",
    ],
    examples: [
      {
        title: "Iterating 2D Array",
        code: `const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(\`matrix[\${i}][\${j}] = \${matrix[i][j]}\`);
  }
}

// Output:
// matrix[0][0] = 1
// matrix[0][1] = 2
// matrix[0][2] = 3
// matrix[1][0] = 4
// matrix[1][1] = 5
// matrix[1][2] = 6
// matrix[2][0] = 7
// matrix[2][1] = 8
// matrix[2][2] = 9`,
        explanation: "Access each element in a 2D array using nested loops.",
      },
      {
        title: "Matrix Operations",
        code: `function printMatrix(matrix) {
  for (let row of matrix) {
    let rowString = '';
    for (let cell of row) {
      rowString += cell + ' ';
    }
    console.log(rowString.trim());
  }
}

const gameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];

printMatrix(gameBoard);

// Output:
// X O X
// O X O
// X O X`,
        explanation: "Nested loops help format and display matrix data.",
      },
    ],
  },
  {
    heading: "Different Loop Type Combinations",
    paragraphs: [
      "You can mix different types of loops in nested structures.",
    ],
    examples: [
      {
        title: "for...of with for Loop",
        code: `const students = [
  { name: 'Alice', grades: [85, 92, 78] },
  { name: 'Bob', grades: [90, 88, 95] },
  { name: 'Charlie', grades: [75, 82, 88] }
];

for (const student of students) {
  console.log(\`\${student.name}'s grades:\`);

  for (let i = 0; i < student.grades.length; i++) {
    console.log(\`  Test \${i + 1}: \${student.grades[i]}\`);
  }
}`,
        explanation: "Combine for...of for objects with for loops for array indices.",
      },
      {
        title: "while with for Loop",
        code: `let rows = 3;
let cols = 4;
let counter = 1;

let i = 0;
while (i < rows) {
  let row = '';

  for (let j = 0; j < cols; j++) {
    row += counter + ' ';
    counter++;
  }

  console.log(row.trim());
  i++;
}

// Output:
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12`,
        explanation: "Mix while loops with for loops for different control patterns.",
      },
    ],
  },
  {
    heading: "Common Use Cases",
    paragraphs: [
      "Nested loops solve many real-world problems involving multi-dimensional data.",
    ],
    examples: [
      {
        title: "Finding Maximum in 2D Array",
        code: `function findMaxInMatrix(matrix) {
  let max = matrix[0][0];

  for (let row of matrix) {
    for (let value of row) {
      if (value > max) {
        max = value;
      }
    }
  }

  return max;
}

const scores = [
  [85, 92, 78, 90],
  [88, 95, 82, 87],
  [90, 88, 93, 85]
];

console.log("Highest score:", findMaxInMatrix(scores)); // 95`,
        explanation: "Search through all elements in a 2D array to find the maximum value.",
      },
      {
        title: "Matrix Transposition",
        code: `function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let j = 0; j < cols; j++) {
    transposed[j] = [];
    for (let i = 0; i < rows; i++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}

const original = [
  [1, 2, 3],
  [4, 5, 6]
];

const transposed = transposeMatrix(original);
console.log("Original:", original);
console.log("Transposed:", transposed);

// Output:
// Original: [[1, 2, 3], [4, 5, 6]]
// Transposed: [[1, 4], [2, 5], [3, 6]]`,
        explanation: "Swap rows and columns using nested loops.",
      },
      {
        title: "Pattern Generation",
        code: `function printPattern(size) {
  for (let i = 1; i <= size; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
      row += '* ';
    }

    console.log(row.trim());
  }
}

printPattern(5);

// Output:
// *
// * *
// * * *
// * * * *
// * * * * *`,
        explanation: "Generate patterns using nested loops with different iteration ranges.",
      },
      {
        title: "Multiplication Table",
        code: `function printMultiplicationTable(size) {
  for (let i = 1; i <= size; i++) {
    let row = '';

    for (let j = 1; j <= size; j++) {
      row += (i * j) + '\t';
    }

    console.log(row);
  }
}

printMultiplicationTable(5);

// Output:
// 1	2	3	4	5
// 2	4	6	8	10
// 3	6	9	12	15
// 4	8	12	16	20
// 5	10	15	20	25`,
        explanation: "Generate multiplication tables using nested loops.",
      },
    ],
  },
  {
    heading: "Performance Considerations",
    paragraphs: [
      "Nested loops can have performance implications, especially with large datasets.",
    ],
    examples: [
      {
        title: "Time Complexity",
        code: `// O(n²) - quadratic time complexity
function processLargeMatrix(matrix) {
  const start = Date.now();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Process each element
      matrix[i][j] *= 2;
    }
  }

  const end = Date.now();
  console.log(\`Processing took: \${end - start}ms\`);
}

// For a 1000x1000 matrix: 1,000,000 operations!
// For a 2000x2000 matrix: 4,000,000 operations!`,
        explanation: "Nested loops create exponential time complexity - be careful with large datasets.",
      },
      {
        title: "Early Termination",
        code: `function findInMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return [i, j]; // Found it! Exit early
      }
    }
  }
  return null;
}

const largeMatrix = Array(1000).fill().map(() =>
  Array(1000).fill().map(() => Math.floor(Math.random() * 1000))
);

console.log(findInMatrix(largeMatrix, 42)); // Fast even with 1M elements`,
        explanation: "Use early returns to avoid unnecessary iterations in nested loops.",
      },
    ],
  },
  {
    heading: "Control Flow in Nested Loops",
    paragraphs: [
      "break and continue behave differently in nested loops.",
    ],
    examples: [
      {
        title: "break in Nested Loops",
        code: `// break only exits inner loop
for (let i = 0; i < 3; i++) {
  console.log(\`Outer: \${i}\`);

  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      break; // Only exits inner loop
    }
    console.log(\`  Inner: \${j}\`);
  }
}

// Output:
// Outer: 0
//   Inner: 0
//   Inner: 1
// Outer: 1
//   Inner: 0
//   Inner: 1
// Outer: 2
//   Inner: 0
//   Inner: 1`,
        explanation: "break only exits the innermost loop, outer loop continues.",
      },
      {
        title: "Labeled break",
        code: `outerLoop: for (let i = 0; i < 3; i++) {
  console.log(\`Outer: \${i}\`);

  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Exit both loops
    }
    console.log(\`  Inner: \${j}\`);
  }
}

// Output:
// Outer: 0
//   Inner: 0
//   Inner: 1
//   Inner: 2
// Outer: 1
//   Inner: 0
//   Inner: 1`,
        explanation: "Use labeled breaks to exit multiple nested loops.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Write efficient and readable nested loop code.",
    ],
    bullets: [
      "Be aware of time complexity (O(n²) for 2D, O(n³) for 3D)",
      "Use meaningful variable names (row, col instead of i, j)",
      "Consider early termination to improve performance",
      "Extract complex nested logic into separate functions",
      "Use labels sparingly for breaking out of multiple loops",
      "Test with small datasets first to verify logic",
      "Consider alternative data structures for better performance",
    ],
  },
];

const mistakes = [
  {
    title: "Incorrect loop bounds",
    fix: "Use matrix.length for rows and matrix[i].length for columns in 2D arrays.",
  },
  {
    title: "Forgetting break only exits inner loop",
    fix: "Use labeled breaks or restructure code when you need to exit multiple loops.",
  },
  {
    title: "Poor performance with large datasets",
    fix: "Consider if nested loops are necessary or if there's a more efficient algorithm.",
  },
];

const faqs = [
  {
    q: "How many levels deep can loops be nested?",
    a: "There's no strict limit, but more than 3 levels becomes hard to read and maintain.",
  },
  {
    q: "What's the time complexity of nested loops?",
    a: "Two nested loops are O(n²), three nested loops are O(n³), etc.",
  },
  {
    q: "Can I mix different loop types when nesting?",
    a: "Yes, you can nest for, while, do...while, and for...of loops in any combination.",
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

export default function JavascriptNestedLoopsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">JavaScript Nested Loops</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Learn nested loops for multi-dimensional data. Master matrices, patterns, and complex iteration.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Try Nested Loops
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Nested loops are essential for working with multi-dimensional data structures like matrices, tables, and complex objects. They're fundamental for games, data processing, and algorithmic problems.
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
              { label: "for Loop", href: "/javascript/loops/for-loop" },
              { label: "while Loop", href: "/javascript/loops/while-loop" },
              { label: "do...while Loop", href: "/javascript/loops/do-while-loop" },
              { label: "break Statement", href: "/javascript/loops/break-statement" },
              { label: "continue Statement", href: "/javascript/loops/continue-statement" },
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