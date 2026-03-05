import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Logical Operators: &&, ||, ! - Short-Circuit Evaluation",
  description:
    "Master JavaScript logical operators: AND (&&), OR (||), NOT (!). Learn short-circuit evaluation, truthy/falsy values, guard clauses, and logical operator patterns.",
  keywords: [
    "javascript logical operators",
    "AND operator",
    "OR operator",
    "NOT operator",
    "short-circuit evaluation",
    "truthy falsy",
    "guard clauses",
  ],
  openGraph: {
    title: "JavaScript Logical Operators",
    description:
      "Master JavaScript logical operators: AND (&&), OR (||), NOT (!) with short-circuit evaluation and practical patterns.",
    url: "/javascript/operators/logical-operator",
    type: "article",
    images: ["/og-operators-logical.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Logical Operators",
    description:
      "Master JavaScript logical operators: AND (&&), OR (||), NOT (!) with short-circuit evaluation and practical patterns.",
    images: ["/og-operators-logical.svg"],
  },
  alternates: { canonical: "/javascript/operators/logical-operator" },
};

const sections = [
  {
    heading: "Logical AND Operator (&&)",
    paragraphs: [
      "The logical AND operator (&&) returns true if both operands are truthy.",
      "Uses short-circuit evaluation - stops evaluating if first operand is falsy.",
      "Returns the first falsy operand or the last operand if all are truthy.",
      "Commonly used for guard clauses and conditional execution.",
      "Essential for validation chains and safe property access.",
    ],
    examples: [
      {
        title: "Logical AND (&&) Operator",
        code: `// Basic AND operations
console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false
console.log(false && false);   // false

// Guard clause prevents errors if user is null/undefined
function processUser(user) {
  if (user && user.name && user.age > 18) {
    return \`Processing \${user.name}\`;
  }
  return "Invalid user";
}

console.log(processUser({ name: "John", age: 25 })); // "Processing John"
console.log(processUser(null));                      // "Invalid user"

// Safe property access
const data = { user: { profile: { name: "Alice" } } };
const userName = data && data.user && data.user.profile && data.user.profile.name;
console.log(userName); // "Alice"

// Conditional execution
const result = user && user.isAdmin && performAdminTask();
console.log(result); // true if all conditions met`,
        explanation: "AND operator returns the first falsy value or the last truthy value, with short-circuit evaluation.",
      },
    ],
  },
  {
    heading: "Logical OR Operator (||)",
    paragraphs: [
      "The logical OR operator (||) returns true if at least one operand is truthy.",
      "Uses short-circuit evaluation - stops evaluating if first operand is truthy.",
      "Returns the first truthy operand or the last operand if all are falsy.",
      "Frequently used for default values and fallback logic.",
      "Powerful for providing alternatives and handling undefined/null cases.",
    ],
    examples: [
      {
        title: "Logical OR (||) Operator",
        code: `// Basic OR operations
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false

// Default values
function greetUser(name) {
  const displayName = name || "Anonymous";
  return \`Hello, \${displayName}!\`;
}

console.log(greetUser("John")); // "Hello, John!"
console.log(greetUser());       // "Hello, Anonymous!"
console.log(greetUser(null));   // "Hello, Anonymous!"

// Configuration with fallbacks
const config = {
  theme: userConfig.theme || defaultConfig.theme || "light",
  language: navigator.language || "en",
  timeout: userSettings.timeout || 5000
};

// Multiple fallbacks
console.log(userValue || backupValue || systemDefault || "fallback");`,
        explanation: "OR operator returns the first truthy value or the last falsy value, commonly used for default values.",
      },
    ],
  },
  {
    heading: "Logical NOT Operator (!)",
    paragraphs: [
      "The logical NOT operator (!) negates the truthiness of its operand.",
      "Converts truthy values to false and falsy values to true.",
      "Double negation (!!) converts any value to its boolean equivalent.",
      "Often used in conditions to check for falsy values.",
      "Useful for boolean conversion and inverse logic.",
    ],
    examples: [
      {
        title: "Logical NOT (!) Operator",
        code: `// Basic NOT operations
console.log(!true);           // false
console.log(!false);          // true
console.log(!0);              // true (0 is falsy)
console.log(!"");             // true (empty string is falsy)
console.log(!"hello");        // false (non-empty is truthy)

// Double negation for boolean conversion
console.log(!!0);             // false
console.log(!!1);             // true
console.log(!!"text");        // true
console.log(!!null);          // false
console.log(!!{});            // true
console.log(!![]);            // true

// Inverse conditions
function isEmpty(value) {
  return !value;
}

// Toggle patterns
let isVisible = true;
isVisible = !isVisible; // Toggle
console.log(isVisible); // false`,
        explanation: "NOT operator negates truthiness. Double negation converts any value to strict boolean.",
      },
    ],
  },
  {
    heading: "Truthy and Falsy Values",
    paragraphs: [
      "JavaScript has specific values that are considered falsy in boolean contexts.",
      "Falsy values: false, 0, -0, 0n, '', null, undefined, NaN.",
      "All other values are truthy, including empty objects and arrays.",
      "Understanding truthy/falsy is crucial for logical operator behavior.",
      "Different from strict boolean true/false in conditional contexts.",
    ],
    examples: [
      {
        title: "Truthy and Falsy Values",
        code: `// Falsy values
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// Testing truthiness
console.log(!0);         // true (0 is falsy)
console.log(!"");        // true (empty string is falsy)
console.log(!null);      // true (null is falsy)
console.log(!{});        // false (objects are truthy)
console.log(![]);        // false (arrays are truthy)

// Practical implications
function processList(items) {
  if (!items) return "No items";
  if (!items.length) return "Empty list";
  return \`Processing \${items.length} items\`;
}

console.log(processList(null));     // "No items"
console.log(processList([]));       // "Empty list"
console.log(processList([1, 2]));   // "Processing 2 items"

// Careful with 0 and empty strings (valid values!)
function validateCount(count) {
  if (count == null) return "Required";
  if (typeof count !== "number") return "Must be number";
  return \`Valid: \${count}\`;
}

console.log(validateCount(0));  // "Valid: 0"`,
        explanation: "Understanding falsy values is crucial for logical operations. Only specific values are falsy in JavaScript.",
      },
    ],
  },
  {
    heading: "Short-Circuit Evaluation",
    paragraphs: [
      "Logical operators evaluate operands from left to right.",
      "AND stops at first falsy value, OR stops at first truthy value.",
      "Right-side operands may not execute if short-circuit occurs.",
      "Important for performance and avoiding errors in conditional chains.",
      "Enables safe property access and conditional execution patterns.",
    ],
    examples: [
      {
        title: "Short-Circuit Evaluation",
        code: `// AND short-circuit - stops at first falsy
console.log(false && functionNeverCalled());  // false (right side skipped)
console.log(true && functionCalled());        // runs function

// OR short-circuit - stops at first truthy
console.log(true || functionNeverCalled());   // true (right side skipped)
console.log(false || functionCalled());       // runs function

// Performance benefits
function expensiveCheck() {
  console.log("Running expensive validation...");
  return true;
}

function quickCheck() {
  console.log("Quick check");
  return false;
}

// Only runs expensive if quick check passes
if (quickCheck() && expensiveCheck()) {
  console.log("Validation passed");
}

// Safe property access (avoids errors)
const user = { profile: { name: "John" } };
const name = user && user.profile && user.profile.name;
console.log(name); // "John"`,
        explanation: "Short-circuit evaluation optimizes performance by skipping unnecessary operations and enables safe property access.",
      },
    ],
  },
  {
    heading: "Guard Clauses and Validation",
    paragraphs: [
      "Guard clauses use logical operators to check conditions before execution.",
      "Prevents errors by validating inputs before using them.",
      "Improves code readability by handling edge cases early.",
      "Common pattern for function parameter validation.",
      "Reduces nesting and improves code flow.",
    ],
    examples: [
      {
        title: "Guard Clauses for Validation",
        code: `// Function guard clauses
function calculateBMI(weight, height) {
  if (!weight || typeof weight !== "number" || weight <= 0) {
    throw new Error("Valid weight required");
  }
  
  if (!height || typeof height !== "number" || height <= 0) {
    throw new Error("Valid height required");
  }
  
  return weight / (height * height);
}

try {
  console.log(calculateBMI(70, 1.75)); // 22.857
  console.log(calculateBMI(0, 1.75));  // Error
} catch (error) {
  console.log(error.message);
}

// Object method guard clauses
class UserManager {
  addUser(user) {
    if (!user) throw new Error("User required");
    if (!user.id) throw new Error("ID required");
    if (!user.name) throw new Error("Name required");
    
    this.users.push(user);
  }
}

// Practical validation
function validateForm(data) {
  if (!data) return false;
  if (!data.email || !data.email.includes("@")) return false;
  if (!data.password || data.password.length < 8) return false;
  return true;
}`,
        explanation: "Guard clauses use logical operators to validate inputs early, preventing errors and improving code clarity.",
      },
    ],
  },
  {
    heading: "Default Values and Fallbacks",
    paragraphs: [
      "OR operator provides default values for undefined/null variables.",
      "Common pattern for configuration objects and optional parameters.",
      "Enables graceful degradation when values are missing.",
      "Used extensively in React props and configuration handling.",
      "Supports chaining multiple fallback options.",
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use explicit checks when 0 or '' are valid values.",
      "Understand short-circuit behavior to avoid side effect issues.",
      "Use guard clauses to improve code readability and safety.",
      "Prefer && for conditional execution, || for defaults.",
      "Use Boolean() or !! consistently for boolean conversion.",
      "Document intentional truthy/falsy reliance in logic.",
    ],
  },
];

const mistakes = [
  {
    title: "Confusing falsy values with false",
    fix: "Remember 0, '', null, undefined, NaN are falsy but not false. Use explicit type checks when needed.",
  },
  {
    title: "Not understanding short-circuit evaluation",
    fix: "Right-side operands may not execute. Don't rely on side effects in logical expressions.",
  },
  {
    title: "Using || for defaults when 0 or '' are valid",
    fix: "Use value != null ? value : default when 0 or empty strings are valid values.",
  },
  {
    title: "Misunderstanding operator precedence",
    fix: "Use parentheses in complex expressions with mixed logical and comparison operators.",
  },
  {
    title: "Not using guard clauses",
    fix: "Add guard clauses at function start to validate inputs and prevent errors.",
  },
  {
    title: "Relying on truthy/falsy for critical logic",
    fix: "Use explicit type and value checks for important business logic, not just truthiness.",
  },
  {
    title: "Not handling NaN properly",
    fix: "NaN is falsy but requires special handling. Use Number.isNaN() for NaN checks.",
  },
  {
    title: "Overusing double negation",
    fix: "Use Boolean(value) for clarity. Double negation (!!) is less readable.",
  },
];

const faqs = [
  {
    q: "What's the difference between && and || behavior?",
    a: "&& stops at first falsy, || stops at first truthy. This enables guard clauses and default values.",
  },
  {
    q: "How do I use || when 0 or empty string should be valid?",
    a: "Use value != null ? value : defaultValue instead of value || defaultValue.",
  },
  {
    q: "What's the difference between ! and !!?",
    a: "! negates truthiness, !! converts to boolean. !! is a pattern for boolean conversion.",
  },
  {
    q: "Why are empty objects {} and arrays [] truthy?",
    a: "Only specific values are falsy. Empty objects and arrays are truthy because they're valid references.",
  },
  {
    q: "What's the precedence of logical operators?",
    a: "! has highest, then &&, then ||. Use parentheses for complex expressions.",
  },
  {
    q: "Can I use logical operators in assignments?",
    a: "Yes, they return the actual operand values, not just booleans (except for !).",
  },
  {
    q: "How do I check if multiple conditions are true?",
    a: "Use && to chain conditions. All must be truthy for true result.",
  },
  {
    q: "What's the most efficient nullish check?",
    a: "Use value != null to check for both null and undefined.",
  },
  {
    q: "How do I avoid side effects in logical chains?",
    a: "Avoid function calls in logical expressions; understand short-circuit behavior.",
  },
  {
    q: "When should I use double negation (!!)?",
    a: "When you need to convert truthy/falsy to strict boolean. Use Boolean() for clarity.",
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

export default function LogicalOperatorsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Logical Operators: &&, ||, ! - Short-Circuit Evaluation
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Logical operators perform boolean operations on operands. JavaScript provides AND (&&), OR (||), and NOT (!)
          operators. These operators use short-circuit evaluation and work with truthy/falsy values, making them powerful
          for conditional logic and control flow.
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
          Logical operators are essential for conditional statements, validation, error handling, and complex
          decision-making. Understanding short-circuit evaluation and truthy/falsy concepts prevents bugs and enables
          writing more concise, efficient code. Logical operators are fundamental to JavaScript programming patterns.
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
