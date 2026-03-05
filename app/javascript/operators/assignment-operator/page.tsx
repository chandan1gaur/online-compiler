import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Assignment Operators: =, +=, -=, *=, /=, %= & More",
  description:
    "Master JavaScript assignment operators: simple assignment (=), addition assignment (+=), subtraction assignment (-=), multiplication assignment (*=), division assignment (/=), modulo assignment (%=), and exponentiation assignment (**=).",
  keywords: [
    "javascript assignment operators",
    "simple assignment",
    "compound assignment",
    "addition assignment",
    "subtraction assignment",
    "multiplication assignment",
    "division assignment",
    "modulo assignment",
    "exponentiation assignment",
  ],
  openGraph: {
    title: "JavaScript Assignment Operators",
    description:
      "Master JavaScript assignment operators: simple and compound assignment with practical examples and best practices.",
    url: "/javascript/operators/assignment-operator",
    type: "article",
    images: ["/og-operators-assignment.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Assignment Operators",
    description:
      "Master JavaScript assignment operators: simple and compound assignment with practical examples and best practices.",
    images: ["/og-operators-assignment.svg"],
  },
  alternates: { canonical: "/javascript/operators/assignment-operator" },
};

const sections = [
  {
    heading: "Simple Assignment Operator",
    paragraphs: [
      "The simple assignment operator (=) assigns the value on its right to the variable on its left.",
      "It can assign any JavaScript value: primitives, objects, arrays, functions, etc.",
      "Assignment returns the assigned value, allowing chained assignments.",
      "Variables must be declared before assignment (except in loose mode for undeclared variables).",
      "The operator has right-to-left associativity, meaning multiple assignments are evaluated from right to left.",
    ],
    examples: [
      {
        title: "Simple Assignment Operator",
        code: `// Basic assignment
let x = 5;
let name = "JavaScript";
let isActive = true;
let data = { count: 0 };

// Assignment returns the value
let a = (b = 10); // Both a and b become 10
console.log(a, b); // 10, 10

// Multiple assignments (right-to-left)
let c, d, e;
c = d = e = 42;
console.log(c, d, e); // 42, 42, 42

// Object and array assignment (reference copy)
let original = [1, 2, 3];
let copy = original; // Both point to same array
copy.push(4);
console.log(original); // [1, 2, 3, 4] - original is modified!`,
        explanation: "Simple assignment (=) assigns values to variables and returns the assigned value, enabling chained assignments.",
      },
    ],
  },
  {
    heading: "Addition Assignment (+=)",
    paragraphs: [
      "Addition assignment (+=) adds the right operand to the left operand and assigns the result to the left operand.",
      "Equivalent to: variable = variable + value",
      "Works with both numbers and strings (concatenation).",
      "More concise and potentially more efficient than separate addition and assignment.",
      "Commonly used for counters, accumulators, and string building.",
    ],
    examples: [
      {
        title: "Addition Assignment (+=)",
        code: `let counter = 0;

// Numeric addition
counter += 5;     // counter = counter + 5; counter is now 5
counter += 10;    // counter is now 15
console.log(counter); // 15

// String concatenation
let message = "Hello";
message += " World";    // "Hello World"
message += "!";         // "Hello World!"
console.log(message);

// Accumulator pattern
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // More concise than sum = sum + i
}
console.log(sum); // 55

// Numeric array summing
let numbers = [10, 20, 30, 40, 50];
let total = 0;
for (let num of numbers) {
  total += num;
}
console.log(total); // 150`,
        explanation: "Addition assignment (+=) works with numbers and strings, making it versatile for accumulation and concatenation.",
      },
    ],
  },
  {
    heading: "Subtraction Assignment (-=)",
    paragraphs: [
      "Subtraction assignment (-=) subtracts the right operand from the left operand and assigns the result.",
      "Equivalent to: variable = variable - value",
      "Works only with numeric values; converts operands to numbers if needed.",
      "Useful for countdowns, decrements, and numeric adjustments.",
      "More readable than separate subtraction and assignment operations.",
    ],
    examples: [
      {
        title: "Subtraction Assignment (-=)",
        code: `let health = 100;

// Health reduction
health -= 20;    // health = health - 20; health is now 80
health -= 10;    // health is now 70
console.log(health); // 70

// Countdown
let countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown -= 1; // Equivalent to countdown--
}
console.log("Blast off!");

// Temperature adjustment
let temperature = 25;
temperature -= 5;  // Cool down by 5 degrees
console.log(\`Temperature: \${temperature}°C\`); // "Temperature: 20°C"

// Coordinate movement
let x = 50, y = 50;
x -= 10;  // Move left
y -= 5;   // Move up
console.log(\`Position: (\${x}, \${y})\`); // "Position: (40, 45)"`,
        explanation: "Subtraction assignment (-=) is perfect for decrements, countdowns, and value reductions.",
      },
    ],
  },
  {
    heading: "Multiplication Assignment (*=)",
    paragraphs: [
      "Multiplication assignment (*=) multiplies the left operand by the right operand and assigns the result.",
      "Equivalent to: variable = variable * value",
      "Performs numeric multiplication with automatic type conversion.",
      "Common in scaling operations, area calculations, and geometric transformations.",
      "More efficient than separate multiplication and assignment.",
    ],
    examples: [
      {
        title: "Multiplication Assignment (*=)",
        code: `let scale = 1.0;

// Scaling operations
scale *= 2;      // scale = scale * 2; scale is now 2.0
scale *= 1.5;    // scale is now 3.0
console.log(scale); // 3.0

// Area calculation
let width = 10, height = 5;
let area = width * height; // 50
area *= 2;      // Double the area
console.log(area); // 100

// Compound interest calculation
let principal = 1000;
let rate = 1.05; // 5% interest
principal *= rate; // Year 1
principal *= rate; // Year 2
console.log(principal); // 1102.5

// Geometric transformations
let x = 3, y = 4;
let distance = Math.sqrt(x * x + y * y); // 5
// Scale the vector by 2
x *= 2; y *= 2;
console.log(\`Scaled: (\${x}, \${y})\`); // "Scaled: (6, 8)"`,
        explanation: "Multiplication assignment (*=) is essential for scaling, area calculations, and geometric transformations.",
      },
    ],
  },
  {
    heading: "Division Assignment (/=)",
    paragraphs: [
      "Division assignment (/=) divides the left operand by the right operand and assigns the result.",
      "Equivalent to: variable = variable / value",
      "Handles division by zero by assigning Infinity or -Infinity.",
      "Useful for normalization, averaging, and proportional calculations.",
      "Be cautious of division by zero scenarios in your application logic.",
    ],
    examples: [
      {
        title: "Division Assignment (/=)",
        code: `let total = 100;

// Equal distribution
let share = total;
share /= 4;      // share = share / 4; share is now 25
console.log(share); // 25

// Average calculation
let sum = 0;
let count = 0;
let numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
  sum += num;
  count++;
}

let average = sum;
average /= count; // Divide by count to get average
console.log(average); // 30

// Normalization (0-1 scale)
let value = 75;
let maxValue = 100;
value /= maxValue; // Convert to 0-1 range
console.log(value); // 0.75

// Division by zero
let result = 10;
result /= 0;
console.log(result); // Infinity`,
        explanation: "Division assignment (/=) is useful for distribution, averaging, and normalization calculations.",
      },
    ],
  },
  {
    heading: "Modulo Assignment (%=)",
    paragraphs: [
      "Modulo assignment (%=) performs modulo operation and assigns the remainder to the left operand.",
      "Equivalent to: variable = variable % value",
      "Result has the same sign as the dividend (left operand).",
      "Useful for cyclic operations, bounds checking, and periodic calculations.",
      "Common in games, animations, and circular buffer implementations.",
    ],
    examples: [
      {
        title: "Modulo Assignment (%=)",
        code: `let angle = 450;

// Normalize angle to 0-360 range
angle %= 360;    // angle = angle % 360; angle is now 90
console.log(angle); // 90

// Time calculations
let totalSeconds = 3661; // 1 hour, 1 minute, 1 second
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600; // Remove hours
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log(\`\${hours}:\${minutes}:\${seconds}\`); // "1:1:1"

// Animation frame cycling
let frameCount = 8;
let currentFrame = 0;

function nextFrame() {
  currentFrame = (currentFrame + 1) % frameCount;
  return currentFrame;
}

console.log(nextFrame()); // 1
console.log(nextFrame()); // 2
// Cycles through 0-7

// Remainder operations
let value = 17;
value %= 5;      // value = 17 % 5
console.log(value); // 2`,
        explanation: "Modulo assignment (%=) is perfect for cyclic operations, bounds checking, and periodic calculations.",
      },
    ],
  },
  {
    heading: "Exponentiation Assignment (**=)",
    paragraphs: [
      "Exponentiation assignment (**=) raises the left operand to the power of the right operand.",
      "Equivalent to: variable = variable ** value",
      "Supports fractional and negative exponents.",
      "More concise than separate exponentiation and assignment.",
      "Useful in mathematical calculations, physics simulations, and algorithmic computations.",
    ],
    examples: [
      {
        title: "Exponentiation Assignment (**=)",
        code: `let base = 2;

// Power calculations
base **= 3;      // base = base ** 3; base is now 8
console.log(base); // 8

base **= 2;      // base is now 64 (8^2)
console.log(base); // 64

// Scientific calculations
let mass = 10;
let velocity = 5;
let kineticEnergy = 0.5 * mass;
kineticEnergy *= velocity ** 2; // KE = 0.5 * m * v^2
console.log(kineticEnergy); // 62.5

// Compound growth
let investment = 1000;
let annualRate = 1.07; // 7% growth
let years = 5;

investment *= annualRate ** years;
console.log(investment); // 1402.55 (after 5 years)

// Fractal calculations
let zoom = 1;
zoom **= 0.5;    // Zoom out (square root)
console.log(zoom); // 0.707...

zoom **= 2;      // Zoom back in
console.log(zoom); // 1`,
        explanation: "Exponentiation assignment (**=) handles power calculations, compound growth, and mathematical transformations.",
      },
    ],
  },
  {
    heading: "Operator Precedence and Associativity",
    paragraphs: [
      "Assignment operators have very low precedence, evaluated after most other operators.",
      "Right-associative: multiple assignments are evaluated from right to left.",
      "Compound assignments combine the operation precedence with assignment precedence.",
      "Use parentheses when combining assignments with other operations.",
      "Understanding precedence prevents unexpected evaluation order.",
    ],
    examples: [
      {
        title: "Assignment Precedence Examples",
        code: `let x = 5, y = 10, z = 15;

// Assignment has low precedence
let result = x + y * z;  // Multiplication first: 5 + (10 * 15) = 155
console.log(result); // 155

// Compound assignment precedence
x += y * z;  // Equivalent to x = x + (y * z)
console.log(x); // 5 + 150 = 155

// Right associativity
let a, b, c;
a = b = c = 42; // Evaluated as a = (b = (c = 42))
console.log(a, b, c); // 42, 42, 42

// Complex expressions
let value = 10;
value *= 2 + 3;  // value = value * (2 + 3) = 10 * 5 = 50
console.log(value); // 50

// Use parentheses for clarity
value = 10;
value *= (2 + 3); // Explicit precedence
console.log(value); // 50`,
        explanation: "Assignment operators have low precedence and right associativity. Use parentheses to clarify complex expressions.",
      },
    ],
  },
  {
    heading: "Type Coercion in Assignments",
    paragraphs: [
      "Compound assignment operators may perform type coercion during the operation.",
      "Addition assignment preserves string concatenation behavior.",
      "Other arithmetic assignments convert operands to numbers.",
      "Object and array assignments copy references, not values.",
      "Understanding coercion rules helps predict assignment behavior.",
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use compound assignments for concise, readable code when appropriate.",
      "Avoid chained assignments unless the intent is clear.",
      "Be aware of type coercion, especially with += and strings.",
      "Use explicit operations when the compound assignment would be confusing.",
      "Consider performance implications in tight loops.",
      "Document complex assignment chains for maintainability.",
    ],
  },
];

const mistakes = [
  {
    title: "Confusing chained assignments",
    fix: "Use separate assignments for clarity unless the chained behavior is intentional and well-documented.",
  },
  {
    title: "Unexpected type coercion with +=",
    fix: "Be explicit about string vs numeric operations. Use Number() conversion when needed.",
  },
  {
    title: "Modifying shared object references",
    fix: "Use spread syntax or Object.assign() for object copying when you want independent objects.",
  },
  {
    title: "Complex expressions without parentheses",
    fix: "Use parentheses to make operator precedence explicit in complex assignment expressions.",
  },
  {
    title: "Division by zero in /= operations",
    fix: "Validate divisors before division assignment to prevent Infinity values.",
  },
  {
    title: "Assuming compound assignments are faster",
    fix: "Use compound assignments for readability; performance difference is negligible in most cases.",
  },
  {
    title: "Modulo assignment with negative numbers",
    fix: "Be aware that modulo result sign follows the dividend. Add checks if you need positive results.",
  },
  {
    title: "Overusing compound assignments in complex logic",
    fix: "Break complex operations into separate statements for better readability and debugging.",
  },
];

const faqs = [
  {
    q: "What's the difference between = and == in JavaScript?",
    a: "Single = is assignment, double == is loose equality comparison. Assignment (=) assigns a value, equality (==) compares values.",
  },
  {
    q: "Why does x += 1 work but x + 1 doesn't change x?",
    a: "+= assigns the result back to x, while + alone just returns the sum without modifying x.",
  },
  {
    q: "Can I chain multiple assignments like a = b = c = 5?",
    a: "Yes, assignments are right-associative, so a = b = c = 5 assigns 5 to all three variables.",
  },
  {
    q: "Does += always concatenate strings?",
    a: "Only if the left operand is already a string. If it's a number, += performs addition.",
  },
  {
    q: "What's the precedence of assignment operators?",
    a: "Assignment operators have very low precedence, evaluated after almost all other operators.",
  },
  {
    q: "Are compound assignments faster than separate operations?",
    a: "In modern JavaScript engines, the performance difference is negligible. Use them for code clarity.",
  },
  {
    q: "What happens with %= and negative numbers?",
    a: "The result has the same sign as the dividend (left operand). -17 % 5 equals -2.",
  },
  {
    q: "Can I use assignment operators with const variables?",
    a: "No, const variables cannot be reassigned after declaration. Use let for variables that need reassignment.",
  },
  {
    q: "Do assignment operators work with BigInt?",
    a: "Yes, all compound assignment operators work with BigInt, but operands must be the same type.",
  },
  {
    q: "What's the return value of assignment operators?",
    a: "Assignment operators return the assigned value, which enables chained assignments.",
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

export default function JavascriptAssignmentOperatorsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Assignment Operators: =, +=, -=, *=, /=, %= & More
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Assignment operators assign values to variables. JavaScript provides a simple assignment operator (=) and several compound assignment operators that combine assignment with other operations. These operators are fundamental to variable manipulation and state management in JavaScript programs.
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
          Assignment operators are used in virtually every JavaScript program. They provide concise syntax for updating variable values and are essential for loops, accumulators, state management, and data manipulation. Understanding their behavior prevents bugs and improves code readability.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article key={section.heading} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
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
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Pitfalls</h2>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
