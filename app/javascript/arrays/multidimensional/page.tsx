import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript Multidimensional Arrays - Nested Arrays | Online Compiler',
  description: 'Learn to work with multidimensional arrays. Master creating, accessing, and manipulating nested arrays with practical examples.',
  keywords: 'multidimensional arrays, nested arrays, 2D arrays, matrix, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript Multidimensional Arrays',
    description: 'Master nested and 2D arrays in JavaScript.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/multidimensional',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Multidimensional Arrays',
    description: 'Work with nested arrays.',
  },
};

export default function MultidimensionalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Concepts
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript Multidimensional Arrays
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Create and work with nested arrays (arrays containing arrays) for complex data structures.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What are Multidimensional Arrays?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            A multidimensional array is an array that contains other arrays. The most common type is a 2D array (array of arrays), which represents a matrix or table structure.
          </p>
          <CodeExample
            code={`// 2D Array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 3D Array
const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
];`}
            language="javascript"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Creating Multidimensional Arrays</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Create a 2D Array</h3>
              <CodeExample
                code={`// Literal syntax
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Dynamically create a 2D array
const rows = 3;
const cols = 4;
const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(0));
console.log(newGrid);
// [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Create with Different Data Types</h3>
              <CodeExample
                code={`const mixed = [
  [1, 'a'],
  [true, { name: 'John' }],
  [[1, 2], [3, 4]]
];`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Accessing Elements</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Access 2D Array Elements</h3>
              <CodeExample
                code={`const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1 (row 0, col 0)
console.log(matrix[1][2]); // 6 (row 1, col 2)
console.log(matrix[2][0]); // 7 (row 2, col 0)`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Access 3D Array Elements</h3>
              <CodeExample
                code={`const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
];

console.log(cube[0][0][0]); // 1
console.log(cube[1][1][1]); // 8`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Iterating Through Multidimensional Arrays</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Nested forEach Loops</h3>
              <CodeExample
                code={`const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matrix.forEach((row, rowIndex) => {
  row.forEach((element, colIndex) => {
    console.log(\`[\${rowIndex}][\${colIndex}] = \${element}\`);
  });
});`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Nested for Loops</h3>
              <CodeExample
                code={`const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Using map() on 2D Array</h3>
              <CodeExample
                code={`const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

const doubled = matrix.map(row => 
  row.map(element => element * 2)
);

console.log(doubled);
// [[2, 4, 6], [8, 10, 12]]`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Real-World Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Transpose a Matrix</h3>
              <CodeExample
                code={`const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

const transposed = matrix[0].map((_, colIndex) =>
  matrix.map(row => row[colIndex])
);

console.log(transposed);
// [[1, 4], [2, 5], [3, 6]]`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Tic-Tac-Toe Game Board</h3>
              <CodeExample
                code={`const board = [
  ['X', 'O', ''],
  ['', 'X', 'O'],
  ['O', '', 'X']
];

// Check a cell
const cell = board[0][1]; // 'O'

// Update a cell
board[1][1] = 'X';`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2D Coordinates</h3>
              <CodeExample
                code={`const points = [
  [10, 20],
  [30, 40],
  [50, 60]
];

points.forEach(([x, y]) => {
  console.log(\`Point: (\${x}, \${y})\`);
});
// Point: (10, 20)
// Point: (30, 40)
// Point: (50, 60)`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Sharing Reference Instead of Copying</h3>
              <CodeExample
                code={`// Wrong - all rows point to the same array
const grid = Array(3).fill(Array(3).fill(0));
grid[0][0] = 1;
console.log(grid[1][0]); // 1 (unexpected!)

// Correct
const grid = Array(3).fill(null).map(() => Array(3).fill(0));
grid[0][0] = 1;
console.log(grid[1][0]); // 0`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Wrong Index Order</h3>
              <CodeExample
                code={`const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

// Wrong - thinking [column][row]
console.log(matrix[3][0]); // undefined

// Correct - [row][column]
console.log(matrix[0][2]); // 3`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I flatten a multidimensional array?</h3>
              <CodeExample
                code={`const matrix = [[1, 2], [3, 4], [5, 6]];
const flat = matrix.flat(); // [1, 2, 3, 4, 5, 6]
const flat2 = matrix.flat(Infinity);`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I copy a 2D array?</h3>
              <CodeExample
                code={`const original = [[1, 2], [3, 4]];

// Shallow copy (copies outer array, inner arrays still referenced)
const shallow = [...original];

// Deep copy (copies everything)
const deep = JSON.parse(JSON.stringify(original));
// or
const deep = original.map(row => [...row]);`}
                language="javascript"
              />
            </div>
          </div>
        </section>

        <div className="mb-12">
          <a href="/javascript/arrays" className="inline-block bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
            ← Back to Arrays Overview
          </a>
        </div>
      </article>
    </div>
  );
}
