import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Ternary Operator: Conditional Expressions - Complete Guide",
  description:
    "Master the JavaScript ternary operator (? :). Learn conditional expressions, nested ternary operators, arrow functions, and best practices for readable conditional code.",
  keywords: [
    "javascript ternary operator",
    "conditional operator",
    "ternary conditional",
    "? : operator",
    "conditional expressions",
    "nested ternary",
  ],
  openGraph: {
    title: "JavaScript Ternary Operator",
    description:
      "Master the ternary operator (? :) for concise conditional expressions and inline decisions.",
    url: "/javascript/operators/ternary-operator",
    type: "article",
    images: ["/og-operators-ternary.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Ternary Operator",
    description:
      "Master the ternary operator (? :) for concise conditional expressions and inline decisions.",
    images: ["/og-operators-ternary.svg"],
  },
  alternates: { canonical: "/javascript/operators/ternary-operator" },
};

const sections = [
  {
    heading: "Ternary Operator Fundamentals",
    paragraphs: [
      "The ternary operator (? :) evaluates a condition and returns one of two values based on result.",
      "Syntax: condition ? valueIfTrue : valueIfFalse.",
      "Most concise way to write simple if/else logic inline.",
      "Only conditional operator that takes three operands.",
      "Returns an actual value, not just a statement.",
    ],
    examples: [
      {
        title: "Ternary Operator Basics",
        code: `// Simple ternary condition
const age = 25;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// With variables
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // "B"

// Function returns
function getStatus(age) {
  return age >= 18 ? "can vote" : "cannot vote";
}
console.log(getStatus(20)); // "can vote"
console.log(getStatus(15)); // "cannot vote"

// In JSX/React
const user = { premium: true };
const badge = user.premium ? "✓ Premium" : "";
console.log(badge); // "✓ Premium"

// Comparison to if/else
let message1;
if (score >= 50) {
  message1 = "pass";
} else {
  message1 = "fail";
}

// Same with ternary (more concise)
const message2 = score >= 50 ? "pass" : "fail";
console.log(message1 === message2); // true`,
        explanation: "The ternary operator provides a concise way to choose between two values based on a condition.",
      },
    ],
  },
  {
    heading: "Assignment and Variable Initialization",
    paragraphs: [
      "Most common use: assigning different values based on condition.",
      "Cleaner than if/else for simple value assignment.",
      "Works in const declarations for immutable defaults.",
      "Can be used in function arguments.",
      "Powerful in destructuring with defaults.",
    ],
    examples: [
      {
        title: "Assignment with Ternary",
        code: `// Simple assignment
const age = 25;
const ticket = age < 65 ? 10 : 5;
console.log(ticket); // 10

// In const declaration
const user = { name: "Alice", role: "admin" };
const canDelete = user.role === "admin" ? true : false;

// Function parameters
function formatPrice(price, isPremium) {
  return isPremium ? "$" + price : price + " credits";
}
console.log(formatPrice(100, true));   // "$100"
console.log(formatPrice(100, false));  // "100 credits"

// Array element
const scores = [85, 92, 78];
const status = scores[0] >= 80 ? "pass" : "fail";
console.log(status); // "pass"

// Object property
const config = {
  debug: process.env.NODE_ENV === "development" ? true : false,
  timeout: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 5000,
  theme: localStorage.getItem("theme") ?? "light"
};

console.log(config);

// Multiple assignments
let result, message;
const value = 10;
result = value > 5 ? "high" : "low";
message = value > 5 ? "Value is high" : "Value is low";
console.log(result, message); // "high", "Value is high"`,
        explanation: "Ternary operators are ideal for assigning different values based on conditions.",
      },
    ],
  },
  {
    heading: "Nested Ternary Operators",
    paragraphs: [
      "Multiple ternary operators can be chained for complex logic.",
      "Each true branch can contain another ternary operator.",
      "Can become hard to read with too much nesting.",
      "Alternative: use if/else or switch for complex logic.",
      "Consider readability over cleverness.",
    ],
    examples: [
      {
        title: "Nested Ternary Operators",
        code: `// Simple nesting
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

// Temperature categorization
const temp = 25;
const comfort = temp < 10 ? "cold" : temp < 20 ? "cool" : temp < 30 ? "comfortable" : "hot";
console.log(comfort); // "comfortable"

// User permissions
const user = { role: "user", verified: true };
const access = user.role === "admin" ? "full" : 
               user.role === "moderator" ? "moderate" : 
               user.verified ? "limited" : "none";
console.log(access); // "limited"

// Nested with multiple conditions
const age = 25;
const income = 50000;
const loanEligible = age >= 18 ? 
  (income >= 30000 ? "approved" : "insufficient income") : 
  "too young";
console.log(loanEligible); // "approved"

// Complex but readable example
const status = age < 13 ? "child" : 
               age < 18 ? "minor" : 
               age < 65 ? "adult" : 
               "senior";
console.log(status); // "adult"

// When nesting gets too complex, use if/else instead
// Instead of this:
// const result = a ? b ? c ? d : e : f : g;
// Use:
let result;
if (a) {
  if (b) {
    result = c ? d : e;
  } else {
    result = f;
  }
} else {
  result = g;
}`,
        explanation: "Nested ternary operators provide multi-way branching but can reduce readability.",
      },
    ],
  },
  {
    heading: "Common Use Cases",
    paragraphs: [
      "CSS class assignment in React components.",
      "Default values when nullish coalescing isn't sufficient.",
      "String formatting based on conditions.",
      "Array/object manipulation based on state.",
      "Return statements with conditional logic.",
    ],
    examples: [
      {
        title: "Real-World Patterns",
        code: `// React className assignment
const isActive = true;
const className = isActive ? "btn btn-active" : "btn btn-inactive";
console.log(className); // "btn btn-active"

// Template object
const user = { name: "John", premium: true };
const userCard = {
  title: user.premium ? "✓ Premium Member" : "Member",
  badge: user.premium ? "gold" : "silver",
  limit: user.premium ? 1000 : 100
};
console.log(userCard);

// String formatting
const count = 5;
const message = count === 1 ? "1 item" : count + " items";
console.log(message); // "5 items"

// Array filtering based on condition
const items = [1, 2, 3, 4, 5];
const isEvenFilter = (n) => n % 2 === 0;
const filtered = items.filter(n => 
  isEvenFilter(n) ? true : false
);

// Simpler:
const filtered2 = items.filter(n => isEvenFilter(n));
console.log(filtered2); // [2, 4]

// Default values
const userName = userInput ?? "Guest";
const userDisplay = userName ? userName : "Anonymous";

// Conditional array elements
const buttons = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  ...(user.isAdmin ? [{ label: "Admin", url: "/admin" }] : [])
];

console.log(buttons);

// Ternary in return statement
function canAccess(user) {
  return user.authenticated && user.role === "admin" ? 
    "full access" : 
    user.authenticated ? 
    "limited access" : 
    "no access";
}
console.log(canAccess({ authenticated: true, role: "admin" })); // "full access"`,
        explanation: "Ternary operators are powerful for conditional assignments, React components, and formatting.",
      },
    ],
  },
  {
    heading: "When NOT to Use Ternary",
    paragraphs: [
      "Complex nested logic: use if/else or switch instead.",
      "Side effects: ternary for values, not statements.",
      "Multiple conditions: if/else clearer than deep nesting.",
      "Readability: when unclear at first glance, use if/else.",
      "Team preference: follow project conventions.",
    ],
    examples: [
      {
        title: "Ternary vs If/Else",
        code: `// BAD: Complex ternary (hard to read)
const result = a ? b ? c ? d : e : f ? g : h : i ? j : k;

// GOOD: Use if/else for complex logic
let result;
if (a) {
  if (b) {
    result = c ? d : e;
  } else {
    result = f ? g : h;
  }
} else {
  result = i ? j : k;
}

// BAD: Side effects in ternary (don't do this)
isAdmin ? console.log("Admin access") : console.log("Limited access");

// GOOD: Use if/else for side effects
if (isAdmin) {
  console.log("Admin access");
} else {
  console.log("Limited access");
}

// BAD: Ternary with no clear benefit
const isValid = validateEmail(email) ? true : false;

// GOOD: Assign the validation result directly
const isValid = validateEmail(email);

// GOOD: Ternary for simple value choice
const message = isValid ? "Email is valid" : "Invalid email";

// BAD: Multiple side effects
const status = 
  age < 18 ? (alert("Too young"), "minor") : 
  age < 65 ? (log("Adult"), "adult") : 
  (log("Senior"), "senior");

// GOOD: Use if/else
let status;
if (age < 18) {
  alert("Too young");
  status = "minor";
} else if (age < 65) {
  log("Adult");
  status = "adult";
} else {
  log("Senior");
  status = "senior";
}`,
        explanation: "Use if/else for complex logic, side effects, and when ternary reduces readability.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use for simple, single-line conditions.",
      "Keep ternary operators readable and scannable.",
      "Combine with nullish coalescing (??) for defaults.",
      "Use parentheses in complex expressions.",
      "Prefer if/else over deeply nested ternary operators.",
      "Document non-obvious ternary logic.",
    ],
  },
];

const mistakes = [
  {
    title: "Deeply nested ternary operators",
    fix: "Use if/else or switch for complex multi-way logic. Ternary is for simple true/false choices.",
  },
  {
    title: "Using ternary with side effects",
    fix: "Ternary is for value selection. Use if/else for statements and side effects.",
  },
  {
    title: "Returning true/false unnecessarily",
    fix: "Don't use: isValid ? true : false. Just use: isValid.",
  },
  {
    title: "Not using parentheses for clarity",
    fix: "Add parentheses in complex expressions: (a && b) ? c : d.",
  },
  {
    title: "Chaining ternary without readability",
    fix: "Use formatting and line breaks to keep nested ternary readable.",
  },
  {
    title: "Overusing ternary when if/else is clearer",
    fix: "Readability matters more than conciseness. Use what your team can understand.",
  },
  {
    title: "Forgetting ternary returns a value",
    fix: "Ternary must be assigned or used in an expression, not as a statement.",
  },
];

const faqs = [
  {
    q: "What's the syntax for the ternary operator?",
    a: "condition ? valueIfTrue : valueIfFalse. It returns one of two values based on the condition.",
  },
  {
    q: "Can I use ternary with multiple conditions?",
    a: "Yes, you can nest ternary operators, but it becomes hard to read. Use if/else for complex logic.",
  },
  {
    q: "How is ternary different from if/else?",
    a: "Ternary is an operator that returns a value; if/else is a statement. Use ternary for assignments, if/else for control flow.",
  },
  {
    q: "Should I return true/false with ternary?",
    a: "No, just return the boolean directly. Don't use: condition ? true : false.",
  },
  {
    q: "Can I use ternary with side effects?",
    a: "Technically yes, but avoid it. Ternary is for value selection; use if/else for statements.",
  },
  {
    q: "How do I make nested ternary readable?",
    a: "Use line breaks and indentation: condition ? valueA : condition2 ? valueB : valueC.",
  },
  {
    q: "Can I combine ternary with nullish coalescing?",
    a: "Yes, value ?? default works well with ternary for conditional display.",
  },
  {
    q: "Is ternary operator performant?",
    a: "Yes, ternary is very efficient. Performance considerations are negligible compared to readability.",
  },
  {
    q: "Can ternary operators be used in arrow functions?",
    a: "Yes, arrow functions can use ternary: items.map(item => item.active ? item.name : '').",
  },
  {
    q: "What's the operator precedence of ternary?",
    a: "Ternary has very low precedence, lower than most operators. Use parentheses for clarity.",
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

export default function TernaryPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Ternary Operator (? :): Conditional Expressions
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          The ternary operator (? :) is the only JavaScript operator that takes three operands. It provides a concise way to write simple conditional expressions inline, choosing between two values based on a condition. It's powerful for assignments but should be used carefully to maintain readability.
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
          The ternary operator is one of the most commonly used operators in JavaScript. It's essential for React development, conditional rendering, and writing concise assignment statements. Understanding when and how to use it properly improves code readability and efficiency.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
