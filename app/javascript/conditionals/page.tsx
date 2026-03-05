import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Conditionals: if/else, switch, and Ternary Complete Guide",
  description:
    "Master JavaScript conditionals: if/else, else if, switch, ternary operator. Learn guard clauses, boolean logic, and decision patterns.",
  keywords: [
    "javascript conditionals",
    "if else javascript",
    "switch statement",
    "ternary operator",
    "guard clauses",
    "boolean logic",
    "conditional statements",
  ],
  openGraph: {
    title: "JavaScript Conditionals Complete Guide",
    description: "Master all JavaScript conditional statements and decision patterns with examples.",
    url: "/javascript/conditionals",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Conditionals",
  },
  alternates: { canonical: "/javascript/conditionals" },
};

const sections = [
  {
    heading: "if Statements and Boolean Logic",
    paragraphs: [
      "The if statement runs code when a condition is true. The condition must be a boolean or value that coerces to boolean (truthy/falsy).",
      "Truthy values: non-zero numbers, non-empty strings, objects, arrays. Falsy values: false, 0, '', null, undefined, NaN. Everything else is truthy.",
      "Always use braces {} even for single-statement ifs. It prevents bugs when code changes later and improves consistency.",
    ],
    examples: [
      {
        title: "if Statement Basics",
        code: `// Simple if\nconst age = 18;\nif (age >= 18) {\n  console.log("You can vote");\n}\n\n// if with compound condition\nconst score = 75;\nconst timeRemaining = 5;\nif (score > 70 && timeRemaining > 0) {\n  console.log("Keep playing");\n}\n\n// if with negation\nconst isLoggedIn = false;\nif (!isLoggedIn) {\n  console.log("Please log in");\n}\n\n// if checking truthiness\nconst user = { name: "John" };\nif (user) {\n  console.log("User exists");\n}\n\n// if with undefined check\nlet data;\nif (data !== undefined) {\n  console.log("Data:", data);\n}\n\n// if with null coalescing\nconst value = null;\nif (value ?? false) {\n  console.log("Has value");\n}`,
        explanation: "if runs code when condition is true. Falsy: false, 0, '', null, undefined, NaN.",
      },
    ],
  },
  {
    heading: "if/else and else if Chains",
    paragraphs: [
      "else runs code when the if condition is false. else if checks another condition when the first if is false.",
      "Order matters: check most specific conditions first, then broader ones. This prevents early matches from skipping later conditions.",
      "Each if/else if/else is evaluated top-to-bottom. Once a condition is true, the rest are skipped.",
    ],
    examples: [
      {
        title: "if/else if/else Patterns",
        code: `// Simple if/else\nconst hour = new Date().getHours();\nif (hour < 12) {\n  console.log("Good morning");\n} else {\n  console.log("Good afternoon");\n}\n\n// if/else if/else chain\nconst grade = 85;\nlet letterGrade;\nif (grade >= 90) {\n  letterGrade = "A";\n} else if (grade >= 80) {\n  letterGrade = "B";\n} else if (grade >= 70) {\n  letterGrade = "C";\n} else {\n  letterGrade = "F";\n}\nconsole.log("Grade:", letterGrade);\n\n// Multi-condition check\nconst role = "admin";\nconst isActive = true;\nif (role === "admin" && isActive) {\n  console.log("Admin access granted");\n} else if (role === "editor") {\n  console.log("Editor access granted");\n} else {\n  console.log("Reader access granted");\n}\n\n// Checking multiple states\nconst account = { balance: 50, frozen: false };\nif (account.frozen) {\n  console.log("Account is frozen");\n} else if (account.balance < 0) {\n  console.log("Account overdrawn");\n} else if (account.balance < 10) {\n  console.log("Account low");\n} else {\n  console.log("Account healthy");\n}`,
        explanation:
          "else if chains check conditions in order. First true condition runs; others are skipped. Always end with else for defaults.",
      },
    ],
  },
  {
    heading: "Guard Clauses (Early Returns)",
    paragraphs: [
      "Guard clauses are if statements at the start of a function that return early, avoiding deep nesting. This pattern dramatically improves readability.",
      "Instead of: if (valid) { ... lots of code ... }, use: if (!valid) return; ... code continues. Reduces indentation and mental load.",
      "Guard clauses make the happy path clearer and errors obvious at the start of functions. Highly recommended for readable code.",
    ],
    examples: [
      {
        title: "Guard Clauses Pattern",
        code: `// ❌ AVOID: Deep nesting (hard to read)\nfunction processOrder(order) {\n  if (order) {\n    if (order.items.length > 0) {\n      if (order.customer) {\n        console.log("Processing...", order.id);\n        return true;\n      }\n    }\n  }\n  return false;\n}\n\n// ✓ CORRECT: Guard clauses (clear flow)\nfunction processOrder(order) {\n  if (!order) return false;\n  if (order.items.length === 0) return false;\n  if (!order.customer) return false;\n  \n  console.log("Processing...", order.id);\n  return true;\n}\n\n// Real-world example\nfunction getAccessLevel(user) {\n  // Guard clauses handle errors first\n  if (!user) return "none";\n  if (!user.isActive) return "suspended";\n  if (!user.email) return "incomplete";\n  if (user.role === "admin") return "full";\n  if (user.role === "editor") return "edit";\n  return "read";\n}\n\n// API validation\nfunction validateAndStore(data) {\n  if (!data) return { error: "No data" };\n  if (typeof data.id !== "number") return { error: "Invalid ID" };\n  if (!data.name || typeof data.name !== "string") {\n    return { error: "Invalid name" };\n  }\n  // Data is valid, proceed\n  saveToDatabase(data);\n  return { success: true };\n}`,
        explanation:
          "Guard clauses eliminate nesting by returning early. Makes code flow clear and errors obvious.",
      },
    ],
  },
  {
    heading: "switch Statements",
    paragraphs: [
      "switch compares a single value against multiple cases. Best when matching one variable against many fixed values (status codes, commands, types).",
      "Each case can have code that runs. break stops execution; without break, code 'falls through' to the next case.",
      "Always include a default case for unexpected values. This prevents silent failures and handles future values gracefully.",
    ],
    examples: [
      {
        title: "switch Statement Patterns",
        code: `// Basic switch\nconst day = 3;\nlet dayName;\nswitch (day) {\n  case 1:\n    dayName = "Monday";\n    break;\n  case 2:\n    dayName = "Tuesday";\n    break;\n  case 3:\n    dayName = "Wednesday";\n    break;\n  default:\n    dayName = "Unknown";\n}\nconsole.log(dayName);\n\n// Switch with string matching\nconst action = "delete";\nlet operation;\nswitch (action) {\n  case "create":\n    operation = "Insert";\n    break;\n  case "read":\n    operation = "Select";\n    break;\n  case "update":\n    operation = "Modify";\n    break;\n  case "delete":\n    operation = "Remove";\n    break;\n  default:\n    operation = "Unknown";\n}\nconsole.log(operation);\n\n// Intentional fallthrough\nconst priority = "high";\nlet timeout;\nswitch (priority) {\n  case "urgent":\n  case "high":\n    timeout = 1000;\n    break;\n  case "medium":\n    timeout = 5000;\n    break;\n  case "low":\n    timeout = 10000;\n    break;\n  default:\n    timeout = 30000;\n}\nconsole.log("Timeout:", timeout);\n\n// Switch with complex logic\nconst userType = "premium";\nswitch (userType) {\n  case "admin":\n    grantAdminRights();\n    sendAdminNotice();\n    break;\n  case "premium":\n    grantPremiumRights();\n    break;\n  case "free":\n    grantBasicRights();\n    break;\n  default:\n    console.log("Unknown user type");\n}`,
        explanation: "switch matches value against cases. break prevents fallthrough. Always include default. Use for discrete values.",
      },
    ],
  },
  {
    heading: "Ternary Operator (Conditional Expression)",
    paragraphs: [
      "The ternary operator (? :) is an if/else as an expression that returns a value. Syntax: condition ? valueIfTrue : valueIfFalse.",
      "Use for simple, clear decisions. Don't nest ternaries deeply - they become unreadable. Multiple conditions usually work better with if/else.",
      "Ternary operators are perfect for assigning values conditionally and for inline logic in JSX/templates.",
    ],
    examples: [
      {
        title: "Ternary Operator Examples",
        code: `// Simple assignment\nconst age = 20;\nconst status = age >= 18 ? "adult" : "minor";\nconsole.log(status);\n\n// Ternary in template strings\nconst score = 75;\nconsole.log(\n  "You are " + (score > 50 ? "passing" : "failing")\n);\n\n// Multiple ternaries (avoid deep nesting!)\nconst role = "editor";\nconst permissions = role === "admin" ? "all" : role === "editor" ? "edit" : "view";\nconsole.log(permissions);\n\n// ✓ BETTER: Use if/else for multiple conditions\nlet permissions2;\nif (role === "admin") {\n  permissions2 = "all";\n} else if (role === "editor") {\n  permissions2 = "edit";\n} else {\n  permissions2 = "view";\n}\n\n// Ternary with function calls\nconst isValid = (value) => value && value.length > 0;\nconst result = isValid(user.name) ? processName(user.name) : "No name";\n\n// Common: class assignment\nconst isActive = true;\nconst classes = isActive ? "status-active" : "status-inactive";\n\n// Ternary with expressions\nconst value = 10;\nconst doubled = value > 5 ? value * 2 : value;\nconsole.log(doubled);`,
        explanation: "Ternary returns value based on condition. Best for simple choices. Use if/else for complex logic.",
      },
    ],
  },
  {
    heading: "Logical Operators and Short-Circuiting",
    paragraphs: [
      "Logical operators: && (AND), || (OR), ! (NOT). They combine conditions and short-circuit (stop early) when result is determined.",
      "&&: Returns first falsy value or last value. Stops once a falsy is found. OR: Returns first truthy value. Stops once a truthy is found.",
      "Short-circuiting is useful for defaults (x || defaultValue) and guarding against errors (x && x.property).",
    ],
    examples: [
      {
        title: "Logical Operators and Short-Circuiting",
        code: `// AND (&&): All must be true\nconst user = { loggedIn: true, verified: true };\nif (user.loggedIn && user.verified) {\n  console.log("Welcome!");\n}\n\n// OR (||): At least one must be true\nconst isWeekend = false;\nconst isHoliday = true;\nif (isWeekend || isHoliday) {\n  console.log("No work today!");\n}\n\n// NOT (!): Inverts boolean\nconst isDisabled = false;\nif (!isDisabled) {\n  console.log("Feature enabled");\n}\n\n// Short-circuit with OR (default values)\nconst username = null;\nconst name = username || "Guest";\nconsole.log(name); // "Guest"\n\n// Short-circuit with AND (safe property access)\nconst data = null;\nif (data && data.value) {\n  console.log(data.value);\n} // Doesn't error, just skips\n\n// Complex conditions\nconst person = { age: 25, license: true, insurance: true };\nif (person.age >= 18 && person.license && person.insurance) {\n  console.log("Can drive");\n}\n\n// Combining all\nconst hasPermission = true;\nconst isBlocked = false;\nconst canAccess = hasPermission && !isBlocked;\nif (canAccess) {\n  console.log("Access granted");\n}\n\n// De Morgan's laws\nif (!(a && b)) {\n  console.log("Either a or b is false");\n}\nif (!a || !b) {\n  console.log("Same as above");\n}`,
        explanation: "&&, ||, ! combine conditions. They short-circuit for efficiency. && stops at first falsy; || stops at first truthy.",
      },
    ],
  },
  {
    heading: "Nullish Coalescing and Optional Chaining",
    paragraphs: [
      "Nullish coalescing (??) returns right side only if left is null or undefined. Different from || which treats 0, '', false as falsy.",
      "Optional chaining (?.) safely accesses nested properties, returning undefined if any point is null/undefined instead of erroring.",
      "These are modern alternatives to guard clauses and reduce errors when working with optional data.",
    ],
    examples: [
      {
        title: "Nullish Coalescing and Optional Chaining",
        code: `// Nullish coalescing (??)\nconst value = 0;\nconst result = value ?? "default"; // 0 is not nullish\nconsole.log(result); // 0\n\nconst empty = null;\nconst result2 = empty ?? "default"; // null is nullish\nconsole.log(result2); // \"default\"\n\n// Compare to || (treats 0, '', false as falsy)\nconst zero = 0;\nconsole.log(zero || 5); // 5 (bad!)\nconsole.log(zero ?? 5); // 0 (good!)\n\n// Optional chaining (?.)\nconst user = null;\nconsole.log(user?.name); // undefined (doesn't error)\nconsole.log(user.name); // ERROR!\n\n// Nested optional chaining\nconst response = {\n  data: {\n    user: {\n      profile: {\n        avatar: \"url\",\n      },\n    },\n  },\n};\n\nconsole.log(response?.data?.user?.profile?.avatar); // \"url\"\nconsole.log(response?.data?.admin?.role); // undefined\n\n// Optional chaining with arrays\nconst items = null;\nconsole.log(items?.[0]); // undefined (doesn't error)\n\n// Optional method calling\nconst obj = {\n  method: () => \"called\",\n};\n\nconst obj2 = null;\nconsole.log(obj.method?.()); // \"called\"\nconsole.log(obj2.method?.()); // undefined\n\n// Combining ?? and ?.\nconst settings = { theme: null };\nconst theme = settings?.theme ?? "light";\nconsole.log(theme); // \"light\"`,
        explanation: "?? handles null/undefined. ?. safely accesses nested properties. Modern alternatives to || and manual checks.",
      },
    ],
  },
  {
    heading: "Practical Decision Patterns",
    paragraphs: [
      "Real-world code often needs to make complex decisions. Good patterns: validation first, then main logic; lookup objects for mappings; helper functions for clarity.",
      "Avoid deep nesting and multiple boolean flags. Extract logic into well-named functions that express intent clearly.",
      "Test all branches: happy path, error cases, edge cases (null, empty, negative numbers). Good conditional code handles all scenarios.",
    ],
    examples: [
      {
        title: "Real-World Decision Patterns",
        code: `// Pattern 1: Validation with guards\nfunction submitForm(formData) {\n  if (!formData) return { error: "No form data" };\n  if (!formData.email) return { error: "Email required" };\n  if (!formData.email.includes("@")) return { error: "Invalid email" };\n  if (!formData.password || formData.password.length < 8) {\n    return { error: "Password must be 8+ chars" };\n  }\n  // All valid, proceed\n  saveData(formData);\n  return { success: true };\n}\n\n// Pattern 2: Lookup object instead of switch\nconst statusColors = {\n  pending: "yellow",\n  active: "green",\n  failed: "red",\n  unknown: "gray",\n};\n\nconst getColor = (status) => statusColors[status] ?? statusColors.unknown;\n\n// Pattern 3: Conditional with OR for defaults\nconst getUserMessage = (user) => {\n  return user?.message || user?.defaultMessage || "No message";\n};\n\n// Pattern 4: Complex logic in helper function\nfunction shouldShowAd(user) {\n  if (!user) return false;\n  if (user.isPremium) return false;  // No ads for premium\n  if (user.hasAdBlock) return false; // Respect blocker\n  if (user.adConsent === false) return false; // User opted out\n  return true; // Safe to show\n}\n\n// Pattern 5: Ternary for map values\nconst items = [1, 2, 3, 4, 5];\nconst labels = items.map(\n  (item) => (item % 2 === 0 ? "even" : "odd")\n);\n\n// Pattern 6: Boolean extraction\nconst canDelete = (user, post) => {\n  if (!user || !post) return false;\n  if (user.isAdmin) return true;\n  if (user.id === post.authorId) return true;\n  if (user.isModerator && !post.isPinned) return true;\n  return false;\n};\n\nconsole.log(canDelete({ id: 1, isAdmin: true }, { authorId: 2 })); // true`,
        explanation: "Use validation first, lookup objects, helper functions, and guard clauses for clean decision code.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Missing break in switch",
    fix: "Unintended fallthrough. Use break after each case unless fallthrough is intentional and documented.",
  },
  {
    title: "Deep nesting of conditionals",
    fix: "Use guard clauses, extract functions, or use early returns to reduce nesting.",
  },
  {
    title: "Wrong condition order in if/else if",
    fix: "Check specific conditions before broad ones. Otherwise broad condition matches first.",
  },
  {
    title: "Using == instead of ===",
    fix: "Use === to avoid type coercion bugs. 0 == false is true; 0 === false is false.",
  },
  {
    title: "Forgetting default case in switch",
    fix: "Default handles unexpected values safely. Without it, undefined values cause silent bugs.",
  },
];

const faqs = [
  {
    q: "When should I use if/else vs switch?",
    a: "Use if/else for complex conditions and ranges. Use switch for matching one value against many fixed options.",
  },
  {
    q: "Is == ever okay to use?",
    a: "Rarely. === is always safer. == causes unexpected type coercion bugs. Only use == for null checks: x == null.",
  },
  {
    q: "Can I use and/or instead of &&/||?",
    a: "No, JavaScript uses && and || only. Some languages have 'and'/'or' but JavaScript doesn't.",
  },
  {
    q: "What does const x = y || 'default' do?",
    a: "If y is falsy (false, 0, '', null, undefined, NaN), x gets 'default'. Otherwise, x gets y.",
  },
  {
    q: "Should I nest ternary operators?",
    a: "Avoid nesting. One level is okay: a ? b : c. Multiple levels: use if/else instead for clarity.",
  },
  {
    q: "How do I check if something is null?",
    a: "Use value === null or value == null. Use ?? for null/undefined, || for any falsy. Use optional chaining: obj?.prop",
  },
  {
    q: "Can I use else after an if in a loop?",
    a: "Yes, else after if works anywhere. The else matches the nearest if regardless of loops or other nesting.",
  },
  {
    q: "What are truthy and falsy values?",
    a: "Falsy: false, 0, '', null, undefined, NaN. Everything else is truthy. In if statements, truthy runs the block.",
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

export default function JavascriptConditionalsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Conditionals: Complete Reference
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Master JavaScript conditionals: if/else, switch, ternary operator, logical operators. Learn guard clauses, decision patterns, and
          safe property access with optional chaining.
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
          Conditionals control program flow based on data and state. Correct conditional logic is essential for validation, permissions,
          business rules, and responsive interfaces. Poor conditionals cause bugs and security issues.
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
