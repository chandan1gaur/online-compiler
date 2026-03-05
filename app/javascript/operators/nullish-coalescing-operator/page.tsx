import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Nullish Coalescing Operator (??): Null/Undefined Defaults",
  description:
    "Master the JavaScript nullish coalescing operator (??): providing default values only for null and undefined. Understand the key differences from the logical OR operator (||) and learn practical use cases.",
  keywords: [
    "javascript nullish coalescing operator",
    "nullish coalescing",
    "?? operator",
    "null coalescing",
    "undefined coalescing",
    "default values",
    "null safety",
    "undefined handling",
    "null vs undefined",
    "operator precedence",
  ],
  openGraph: {
    title: "JavaScript Nullish Coalescing Operator (??)",
    description:
      "Master the nullish coalescing operator (??): providing safe defaults for null and undefined values with practical examples.",
    url: "/javascript/operators/nullish-coalescing-operator",
    type: "article",
    images: ["/og-operators-nullish-coalescing.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Nullish Coalescing Operator (??)",
    description:
      "Master the nullish coalescing operator (??): providing safe defaults for null and undefined values with practical examples.",
    images: ["/og-operators-nullish-coalescing.svg"],
  },
  alternates: { canonical: "/javascript/operators/nullish-coalescing-operator" },
};

const sections = [
  {
    heading: "Nullish Coalescing Operator (??) Fundamentals",
    paragraphs: [
      "The nullish coalescing operator (??) returns the left operand if it's neither null nor undefined; otherwise, it returns the right operand.",
      "It was introduced in ES2020 (ES11) and provides a cleaner way to handle null and undefined values.",
      "Unlike the logical OR operator (||), ?? doesn't treat falsy values like 0, empty strings, or false as nullish.",
      "Useful when you need to distinguish between 'no value' (null/undefined) and 'false-like but valid values'.",
      "Reduces boilerplate code compared to traditional type checks and conditional statements.",
    ],
    examples: [
      {
        title: "Basic Nullish Coalescing Operator",
        code: `// Basic nullish coalescing
let user = null;
let defaultUser = user ?? "Guest";
console.log(defaultUser); // "Guest"

user = undefined;
defaultUser = user ?? "Guest";
console.log(defaultUser); // "Guest"

// With actual values
user = "Alice";
defaultUser = user ?? "Guest";
console.log(defaultUser); // "Alice"

// The key difference: falsy values are NOT nullish
let count = 0;
let defaultCount = count ?? 10;
console.log(defaultCount); // 0 (not 10, because 0 is not nullish)

let name = "";
let defaultName = name ?? "Anonymous";
console.log(defaultName); // "" (empty string is not nullish)

let active = false;
let defaultActive = active ?? true;
console.log(defaultActive); // false (false is not nullish)`,
        explanation: "The nullish coalescing operator (??) only treats null and undefined as nullish, preserving other falsy values.",
      },
    ],
  },
  {
    heading: "Difference Between ?? and || Operators",
    paragraphs: [
      "The logical OR operator (||) returns the right operand if the left is ANY falsy value.",
      "Falsy values include: null, undefined, 0, empty string, NaN, and false.",
      "The nullish coalescing operator (??) returns the right operand ONLY if the left is null or undefined.",
      "This distinction is crucial for APIs, configuration defaults, and numeric operations.",
      "Choosing the right operator prevents unexpected behavior with legitimate falsy values.",
    ],
    examples: [
      {
        title: "?? vs || Operator Comparison",
        code: `// Scenario 1: Zero values
let population = 0;
let usa_por = population || "N/A";  // "N/A" - treats 0 as falsy
let usa_pnc = population ?? "N/A";  // 0 - preserves 0 as valid

console.log("Using ||:", usa_por);   // "N/A" (incorrect!)
console.log("Using ??:", usa_pnc);   // 0 (correct)

// Scenario 2: Empty strings
let response = "";
let or_result = response || "No response";     // "No response"
let nc_result = response ?? "No response";     // "" (empty string is valid)

console.log("Using ||:", or_result);  // "No response" (might be wrong)
console.log("Using ??:", nc_result);  // "" (preserves empty string)

// Scenario 3: Boolean false
let isVisible = false;
let or_visible = isVisible || true;   // true (overrides intentional false)
let nc_visible = isVisible ?? true;   // false (preserves intentional false)

console.log("Using ||:", or_visible); // true (unexpected!)
console.log("Using ??:", nc_visible); // false (correct)

// Scenario 4: API response percentages
function fetchCompletionRate() {
  return 0; // 0% complete
}

let rate = fetchCompletionRate();
console.log(rate || 100);  // 100 (wrong - treats 0% as missing)
console.log(rate ?? 100);  // 0 (correct - 0% is a valid state)`,
        explanation: "Use ?? for null/undefined defaults and || for any falsy value defaults. Choose based on whether falsy values are valid.",
      },
    ],
  },
  {
    heading: "Use Cases: Defaults and Configuration",
    paragraphs: [
      "Configuration handling: Apply defaults while preserving explicit false or 0 values.",
      "API responses: Handle null/undefined data without overwriting legitimate zeros or empty strings.",
      "Database values: Distinguish between 'not set' (null) and 'explicitly set to zero'.",
      "User preferences: Preserve false/0 settings that users intentionally configured.",
      "Function parameters: Provide sensible defaults without hiding valid falsy values.",
    ],
    examples: [
      {
        title: "Real-World Use Cases",
        code: `// Configuration defaults
const config = {
  timeout: 0,        // Explicitly set to 0 milliseconds
  retries: null,     // Not specified
  debug: false,      // Explicitly disabled
};

// BAD: Using || loses intentional 0 and false
const bad_timeout = config.timeout || 5000;    // 5000 (wrong!)
const bad_debug = config.debug || true;        // true (wrong!)

// GOOD: Using ?? preserves valid falsy values
const timeout = config.timeout ?? 5000;        // 0 (correct)
const retries = config.retries ?? 3;           // 3 (default)
const debug = config.debug ?? true;            // false (correct)

console.log("Timeout:", timeout); // 0
console.log("Retries:", retries); // 3
console.log("Debug:", debug);     // false

// API response handling
const apiResponse = {
  count: 0,          // 0 is valid (no items)
  message: "",       // Empty string is valid
  error: null,       // null means no error
};

// Preserve 0 count and empty message
const itemCount = apiResponse.count ?? "Unknown";     // 0
const statusMsg = apiResponse.message ?? "Loading..."; // ""
const errorMsg = apiResponse.error ?? "No error";     // "No error"

console.log("Items:", itemCount);       // 0
console.log("Status:", statusMsg);      // ""
console.log("Error:", errorMsg);        // "No error"

// User preferences
const userSettings = {
  notifications: false,  // User explicitly disabled
  fontSize: 0,          // User set to default/auto
  theme: null,          // Not set, use system default
};

const notificationsOn = userSettings.notifications ?? true;  // false
const customFontSize = userSettings.fontSize ?? "inherit";   // 0
const themeColor = userSettings.theme ?? "system";           // "system"

console.log("Notifications:", notificationsOn); // false
console.log("Font size:", customFontSize);      // 0
console.log("Theme:", themeColor);              // "system"`,
        explanation: "Use ?? for configuration and preferences to preserve intentional false and zero values while applying defaults for null/undefined.",
      },
    ],
  },
  {
    heading: "Operator Precedence and Chaining",
    paragraphs: [
      "Nullish coalescing has higher precedence than logical OR (||) and AND (&&).",
      "Cannot combine ?? with || or && without parentheses due to precedence restrictions.",
      "Can chain multiple ?? operators: value1 ?? value2 ?? value3 ?? default",
      "Left-associative: chains evaluate from left to right.",
      "Use parentheses to clarify complex expressions mixing different operators.",
    ],
    examples: [
      {
        title: "Precedence and Chaining Examples",
        code: `// Chaining nullish coalescing
let primary = null;
let secondary = undefined;
let tertiary = "value";
let fallback = "default";

let result = primary ?? secondary ?? tertiary ?? fallback;
console.log(result); // "value" (first non-nullish)

// Evaluates left to right
let a = null;
let b = null;
let c = 0;      // This is not nullish
let d = "final";

result = a ?? b ?? c ?? d;
console.log(result); // 0 (c is the first non-nullish)

// Precedence with other operators
let x = 5;
let y = 10;

// ?? has higher precedence than ||
// This means: x != null ? x : (y || 20)
let r1 = x ?? y || 20;
console.log(r1); // 5

// WITH NULL: returns y || 20
x = null;
r1 = x ?? y || 20;
console.log(r1); // 10 (or 20 if y is falsy)

// Using parentheses for clarity
let config = {
  port: null,
  timeout: 0,
}

// Without parentheses causes precedence warning
// const server = createServer(config.port ?? 3000 || 8080);

// With parentheses: clear intent
const port = config.port ?? (config.timeout || 3000);
console.log(port); // 0 (config.timeout is not nullish)

// Multiple chains with different values
let env_var = undefined;
let system_var = null;
let hardcoded = false;
let ultimate_default = "production";

let environment = env_var ?? system_var ?? hardcoded ?? ultimate_default;
console.log(environment); // false (hardcoded is not nullish)`,
        explanation: "Chain ?? operators to test multiple values. Use parentheses when mixing ?? with other operators.",
      },
    ],
  },
  {
    heading: "Short-Circuit Behavior",
    paragraphs: [
      "The ?? operator uses short-circuit evaluation: right operand is only evaluated if left is nullish.",
      "Prevents unnecessary function calls and side effects.",
      "Right operand is never evaluated if left side is neither null nor undefined.",
      "Critical for performance with expensive operations on the right side.",
      "Important when right side has side effects like console.log or API calls.",
    ],
    examples: [
      {
        title: "Short-Circuit Evaluation",
        code: `// Functions with side effects
let callCount = 0;

function getDefaultName() {
  callCount++;
  console.log("getDefaultName called!");
  return "Anonymous";
}

// Left is null - right function IS called
let user1 = null;
let name1 = user1 ?? getDefaultName();
console.log(name1);       // "Anonymous"
console.log(callCount);   // 1

// Left is undefined - right function IS called
let user2 = undefined;
let name2 = user2 ?? getDefaultName();
console.log(name2);       // "Anonymous"
console.log(callCount);   // 2

// Left has a value - right function is NOT called (short-circuit)
let user3 = "Alice";
let name3 = user3 ?? getDefaultName();
console.log(name3);       // "Alice"
console.log(callCount);   // 2 (didn't increment!)

// Practical example: expensive operations
function fetchDataFromAPI() {
  console.log("Fetching from API...");
  return "data from server";
}

let cachedData = { value: 0 }; // Has a value

// Short-circuit prevents API call
const result = cachedData.value ?? fetchDataFromAPI();
console.log(result); // 0 (API wasn't called)

// When cache has null, API is called
cachedData = { value: null };
const result2 = cachedData.value ?? fetchDataFromAPI();
console.log(result2); // "data from server" (API was called)

// Chained calls - stops at first non-nullish
let attempts = 0;

function attempt1() { attempts++; return null; }
function attempt2() { attempts++; return undefined; }
function attempt3() { attempts++; return "success"; }

const value = attempt1() ?? attempt2() ?? attempt3();
console.log(value);     // "success"
console.log(attempts);  // 3 (all were called)

// vs.
attempts = 0;
const value2 = attempt1() ?? attempt3() ?? attempt2();
console.log(value2);    // "success"
console.log(attempts);  // 2 (last function wasn't called)`,
        explanation: "Short-circuit evaluation makes ?? efficient by avoiding unnecessary function calls when the left operand isn't nullish.",
      },
    ],
  },
  {
    heading: "Combining with Other Operators",
    paragraphs: [
      "Often combined with optional chaining (?.) to safely access nested properties.",
      "Works well with nullish checks in conditionals.",
      "Use with spread operator for default object/array values.",
      "Combine with ternary operator for complex conditionals.",
      "Commonly used in React components for prop defaults.",
    ],
    examples: [
      {
        title: "Combining ?? with Other Operators",
        code: `// Optional chaining (?.) with nullish coalescing (??)
const user = {
  profile: {
    name: "Alice",
    settings: {
      theme: null,
    }
  }
};

// Safe access with fallback
const theme = user?.profile?.settings?.theme ?? "light";
console.log(theme); // "light"

// With undefined or null objects
const nullUser = null;
const userName = nullUser?.profile?.name ?? "Unknown";
console.log(userName); // "Unknown"

// Object defaults with nullish coalescing
const apiResponse = {
  user: undefined,
  items: [],
  count: 0,
};

const userData = apiResponse.user ?? { id: 0, name: "Guest" };
const itemList = apiResponse.items ?? [];
const totalCount = apiResponse.count ?? -1;

console.log(userData);   // { id: 0, name: "Guest" }
console.log(itemList);   // []
console.log(totalCount); // 0

// Spread operator with nullish coalescing
const baseConfig = {
  timeout: 5000,
  retries: 3,
};

const userConfig = {
  timeout: undefined,
  retries: 0,
};

// Merge configs, using nullish coalescing for each property
const finalConfig = {
  timeout: userConfig.timeout ?? baseConfig.timeout,  // 5000
  retries: userConfig.retries ?? baseConfig.retries,  // 3
};

console.log(finalConfig);
// { timeout: 5000, retries: 3 }

// In conditionals with nullish coalescing
let value = null;

if ((value ?? "default") === "default") {
  console.log("Using default");
}

// Ternary with nullish coalescing
const status = value !== null && value !== undefined 
  ? value 
  : "default";

// Simpler with ??
const simpler = value ?? "default";

// React component prop defaults
function Button({ label, onClick, disabled }) {
  return (
    <button 
      onClick={onClick ?? (() => {})}
      disabled={disabled ?? false}
    >
      {label ?? "Click me"}
    </button>
  );
}`,
        explanation: "Combine ?? with optional chaining (?.), spread operator, and conditionals for powerful null-safe patterns.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Use ?? when you specifically want null/undefined defaults, not || when you want to replace any falsy value.",
      "Combine with optional chaining (?.) for safe nested property access.",
      "Be explicit about which values are nullish vs falsy in comments.",
      "Use ?? in configuration and API response handling to preserve valid zeros and empty strings.",
      "Prefer ?? over typeof checks or explicit null/undefined comparisons for cleaner code.",
      "Document when you intentionally use || over ?? for team understanding.",
    ],
  },
];

const mistakes = [
  {
    title: "Confusing ?? with ||",
    fix: "Use ?? only for null/undefined defaults. Use || only when you want to replace ALL falsy values (0, '', false, NaN).",
  },
  {
    title: "Using ?? with falsy but valid values",
    fix: "Remember that 0, empty strings, and false are NOT nullish. If these are valid values, use ?? not ||.",
  },
  {
    title: "Operator precedence issues with mixed operators",
    fix: "Use parentheses when combining ?? with || or &&. JavaScript doesn't allow mixing without parentheses.",
  },
  {
    title: "Not understanding null vs undefined distinction",
    fix: "Both null and undefined are treated as nullish. Use ?? === to check for exact null or undefined if needed.",
  },
  {
    title: "Overusing ?? in simple cases",
    fix: "For string and object properties, simple ?? is cleaner than typeof checks, but don't overuse.",
  },
  {
    title: "Forgetting short-circuit evaluation",
    fix: "Right operand isn't evaluated if left is non-nullish. Avoid side effects on the right side.",
  },
  {
    title: "Not using with optional chaining",
    fix: "Combine ?? with ?. for safe property access: obj?.prop ?? defaultValue",
  },
  {
    title: "Misunderstanding in React props",
    fix: "Distinguish between component default props (destructuring) and runtime null handling (??)",
  },
];

const faqs = [
  {
    q: "What's the difference between ?? and ||?",
    a: "?? checks only for null/undefined (nullish), while || checks for any falsy value (null, undefined, 0, '', false, NaN).",
  },
  {
    q: "Why would I use ?? instead of ||?",
    a: "Use ?? when you want to preserve falsy values like 0 or empty strings as valid defaults.",
  },
  {
    q: "Can I chain multiple ?? operators?",
    a: "Yes! value1 ?? value2 ?? value3 ?? default chains left to right, returning the first non-nullish value.",
  },
  {
    q: "Does ?? have side effects on the right operand?",
    a: "No, the right operand is only evaluated if the left is null or undefined (short-circuit evaluation).",
  },
  {
    q: "Can I combine ?? with || in the same expression?",
    a: "Yes, but you must use parentheses due to operator precedence: (value ?? default1) || default2",
  },
  {
    q: "What operators can I combine with ??",
    a: "You can combine ?? with optional chaining (?.), spread operator, and other operators, but mixing with || or && requires parentheses.",
  },
  {
    q: "How does ?? differ from obj?.prop || default?",
    a: "obj?.prop returns the value (which could be falsy), then || replaces falsy values. obj?.prop ?? default only replaces null/undefined.",
  },
  {
    q: "Is ?? supported in all JavaScript environments?",
    a: "No, ?? is ES2020 (ES11). Check browser compatibility or use transpilers like Babel for older environments.",
  },
  {
    q: "When should I use ?? in React components?",
    a: "Use ?? for runtime prop defaults: const value = props.count ?? 0. Use destructuring with defaults for simpler cases.",
  },
  {
    q: "Can ?? be used with function parameters?",
    a: "Not directly in parameter defaults (use = instead), but you can use it in function bodies: let param = userParam ?? default",
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

export default function NullishCoalescingPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Nullish Coalescing Operator (??): Null/Undefined Handling
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          The nullish coalescing operator (??) returns the right operand when the left operand is null or undefined.
          Unlike OR operator (||), it only checks for null/undefined, not other falsy values like 0 or empty strings.
          This makes it ideal for providing safe defaults while preserving legitimate falsy values in your application.
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
          The nullish coalescing operator is essential for modern JavaScript development, especially when working with
          APIs, configuration objects, and function parameters. Understanding ?? versus || prevents bugs where valid
          falsy values (0, false, '') get replaced with defaults. This operator is fundamental to writing robust,
          defensive code.
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