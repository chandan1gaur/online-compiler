export type RoadmapLevel = "beginner" | "intermediate" | "advanced";

export type RoadmapTopic = {
  title: string;
  href?: string;
};

export type RoadmapSection = {
  id: number;
  title: string;
  level: RoadmapLevel;
  topics: RoadmapTopic[];
};

export const javascriptStartHere: RoadmapTopic[] = [
  { title: "JavaScript Compiler", href: "/javascript/online-compiler" },
];

export const javascriptRoadmapSections: RoadmapSection[] = [
  { id: 1, title: "JavaScript Fundamentals", level: "beginner", topics: [
      { title: "Introduction to JavaScript", href: "/javascript" },
      { title: "History of JavaScript", href: "/javascript/history-of-javascript" },
      { title: "How JavaScript Works", href: "/javascript/how-javascript-works" },
      { title: "JavaScript in Browser vs Node.js", href: "/javascript/javascript-in-browser-vs-nodejs" },
      { title: "Setting Up JavaScript Environment", href: "/javascript/setting-up-javascript-environment" },
      { title: "Writing Your First JavaScript Program", href: "/javascript/writing-your-first-javascript-program" },
      { title: "JavaScript Syntax", href: "/javascript/javascript-syntax" },
      { title: "Comments in JavaScript", href: "/javascript/comments-in-javascript" },
    ] },
  { id: 2, title: "Variables & Data Types", level: "beginner", topics: [
      { title: "var, let, and const", href: "/javascript/variables/var-let-const" },
      { title: "Variable Scope", href: "/javascript/variables/scope" },
      { title: "Hoisting", href: "/javascript/variables/hoisting" },
      { title: "Data Types in JavaScript", href: "/javascript/variables/data-types" },
      { title: "Primitive Types", href: "/javascript/variables/primitive-types" },
      { title: "Non-Primitive Types", href: "/javascript/variables/non-primitive-types" },
      { title: "Type Conversion", href: "/javascript/variables/type-conversion" },
      { title: "typeof Operator", href: "/javascript/variables/typeof-operator" },
      { title: "Dynamic Typing", href: "/javascript/variables/dynamic-typing" },
      { title: "Working with JSON", href: "/javascript/working-with-json" },
    ] },
  { id: 3, title: "Operators", level: "beginner", topics: [
      { title: "Operators Overview", href: "/javascript/operators" },
      { title: "Arithmetic Operators", href: "/javascript/operators/arithmetic-operator" },
      { title: "Assignment Operators", href: "/javascript/operators/assignment-operator" },
      { title: "Comparison Operators", href: "/javascript/operators/comparison-operator" },
      { title: "Logical Operators", href: "/javascript/operators/logical-operator" },
      { title: "Bitwise Operators", href: "/javascript/operators/bitwise-operator" },
      { title: "Ternary Operator", href: "/javascript/operators/ternary-operator" },
      { title: "Nullish Coalescing Operator", href: "/javascript/operators/nullish-coalescing-operator" },
      { title: "Optional Chaining Operator", href: "/javascript/operators/optional-chaining-operator" },
      { title: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
    ] },
  { id: 4, title: "Control Flow", level: "beginner", topics: [
      { title: "Conditionals Overview", href: "/javascript/conditionals" },
      { title: "if Statement", href: "/javascript/conditionals/if-statement" },
      { title: "if...else", href: "/javascript/conditionals/if-else" },
      { title: "else if Ladder", href: "/javascript/conditionals/else-if-ladder" },
      { title: "switch Statement", href: "/javascript/conditionals/switch-statement" },
      { title: "for Loop", href: "/javascript/loops/for-loop" },
      { title: "while Loop", href: "/javascript/loops/while-loop" },
      { title: "do...while Loop", href: "/javascript/loops/do-while-loop" },
      { title: "for...in Loop", href: "/javascript/loops/for-in-loop" },
      { title: "for...of Loop", href: "/javascript/loops/for-of-loop" },
      { title: "break Statement", href: "/javascript/loops/break-statement" },
      { title: "continue Statement", href: "/javascript/loops/continue-statement" },
      { title: "Nested Loops", href: "/javascript/loops/nested-loops" },
    ] },
  { id: 5, title: "Functions", level: "beginner", topics: [
      { title: "Functions Overview", href: "/javascript/functions" },
      { title: "Function Declaration", href: "/javascript/functions/function-declaration" },
      { title: "Function Expression", href: "/javascript/functions/function-expression" },
      { title: "Arrow Functions", href: "/javascript/functions/arrow-functions" },
      { title: "Parameters and Arguments", href: "/javascript/functions/parameters-arguments" },
      { title: "Default Parameters", href: "/javascript/functions/default-parameters" },
      { title: "Rest Parameters", href: "/javascript/functions/rest-parameters" },
      { title: "Spread Operator in Functions", href: "/javascript/functions/spread-operator" },
      { title: "Callback Functions", href: "/javascript/functions/callback-functions" },
      { title: "Higher-Order Functions", href: "/javascript/functions/higher-order-functions" },
      { title: "Pure Functions", href: "/javascript/functions/pure-functions" },
      { title: "IIFE", href: "/javascript/functions/iife" },
      { title: "Recursion", href: "/javascript/functions/recursion" },
    ] },
  { id: 6, title: "Arrays", level: "beginner", topics: [
      { title: "Arrays Overview", href: "/javascript/arrays" },
      { title: "Array Methods", href: "/javascript/arrays/array-methods" },
      { title: "map()", href: "/javascript/arrays/map" },
      { title: "filter()", href: "/javascript/arrays/filter" },
      { title: "reduce()", href: "/javascript/arrays/reduce" },
      { title: "find()", href: "/javascript/arrays/find" },
      { title: "findIndex()", href: "/javascript/arrays/findindex" },
      { title: "every()", href: "/javascript/arrays/every" },
      { title: "sort()", href: "/javascript/arrays/sort" },
      { title: "slice() & splice()", href: "/javascript/arrays/slice" },
      { title: "flat()", href: "/javascript/arrays/flat" },
      { title: "forEach()", href: "/javascript/arrays/foreach" },
      { title: "Array Destructuring", href: "/javascript/arrays/destructuring" },
      { title: "Multidimensional Arrays", href: "/javascript/arrays/multidimensional" },
    ] },
  { id: 7, title: "Objects", level: "beginner", topics: [
      { title: "Objects Overview", href: "/javascript/objects" },
      { title: "Object Properties", href: "/javascript/objects/properties" },
      { title: "Object Methods", href: "/javascript/objects/methods" },
      { title: "this Keyword", href: "/javascript/this-keyword" },
      { title: "Object Destructuring", href: "/javascript/objects/destructuring" },
      { title: "Object.keys()", href: "/javascript/objects/keys" },
      { title: "Object.values()", href: "/javascript/objects/values" },
      { title: "Object.entries()", href: "/javascript/objects/entries" },
      { title: "Object.assign()", href: "/javascript/objects/assign" },
      { title: "Spread in Objects", href: "/javascript/objects/spread" },
      { title: "Optional Chaining", href: "/javascript/objects/optional-chaining" },
      { title: "Property Shorthand", href: "/javascript/objects/shorthand" },
    ] },
  { id: 8, title: "Strings", level: "beginner", topics: [
      { title: "String Methods", href: "/javascript/strings" },
      { title: "Template Literals", href: "/javascript/strings/template-literals" },
      { title: "String Interpolation", href: "/javascript/strings/interpolation" },
    ] },
  { id: 9, title: "Regular Expressions", level: "intermediate", topics: [
      { title: "Regex Overview", href: "/javascript/regex" },
      { title: "Regex Patterns & Flags", href: "/javascript/regex/patterns" },
      { title: "Regex Methods", href: "/javascript/regex/methods" },
    ] },
  { id: 10, title: "DOM Manipulation", level: "beginner", topics: [
      { title: "DOM Overview", href: "/javascript/dom-manipulation" },
      { title: "Selecting Elements", href: "/javascript/dom-manipulation/selecting" },
      { title: "Modifying Elements", href: "/javascript/dom-manipulation/modifying" },
      { title: "Creating Elements", href: "/javascript/dom-manipulation/creating" },
      { title: "Event Handling", href: "/javascript/dom-manipulation/events" },
    ] },
  { id: 11, title: "Events", level: "beginner", topics: [
      { title: "Event Listeners", href: "/javascript/events" },
      { title: "Event Bubbling", href: "/javascript/events/bubbling" },
      { title: "Event Capturing", href: "/javascript/events/capturing" },
      { title: "Event Delegation", href: "/javascript/events/delegation" },
      { title: "Common Events", href: "/javascript/events/common" },
    ] },
  { id: 12, title: "ES6+ Features", level: "intermediate", topics: [
      { title: "let/const vs var", href: "/javascript/es6/let-const" },
      { title: "Arrow Functions", href: "/javascript/es6/arrow-functions" },
      { title: "Template Literals", href: "/javascript/es6/template-literals" },
      { title: "Destructuring", href: "/javascript/es6/destructuring" },
      { title: "Spread & Rest Operators", href: "/javascript/es6/spread-rest" },
      { title: "Default Parameters", href: "/javascript/es6/default-parameters" },
      { title: "ES6 Modules", href: "/javascript/es6/modules" },
      { title: "Promises", href: "/javascript/es6/promises" },
      { title: "Classes", href: "/javascript/es6/classes" },
    ] },
  { id: 13, title: "Asynchronous JavaScript", level: "intermediate", topics: [
      { title: "Callbacks", href: "/javascript/async/callbacks" },
      { title: "Promises", href: "/javascript/async/promises" },
      { title: "async/await", href: "/javascript/async/async-await" },
      { title: "Fetch API", href: "/javascript/async/fetch" },
      { title: "Timers", href: "/javascript/async/timers" },
    ] },
  { id: 14, title: "Closures & Scope", level: "intermediate", topics: [
      { title: "Closures", href: "/javascript/closures" },
      { title: "Lexical Scope", href: "/javascript/closures/lexical-scope" },
      { title: "Scope Chain", href: "/javascript/closures/scope-chain" },
      { title: "Module Pattern", href: "/javascript/closures/module-pattern" },
    ] },
  { id: 15, title: "Execution Context & Event Loop", level: "intermediate", topics: [
      { title: "Execution Context", href: "/javascript/execution-context" },
      { title: "Call Stack", href: "/javascript/execution-context/call-stack" },
      { title: "Event Loop", href: "/javascript/execution-context/event-loop" },
      { title: "Microtasks vs Macrotasks", href: "/javascript/execution-context/micro-macrotasks" },
    ] },
  { id: 16, title: "Object-Oriented Programming", level: "intermediate", topics: [
      { title: "Prototypal Inheritance", href: "/javascript/prototypes" },
      { title: "Prototype Chain", href: "/javascript/prototypes/chain" },
      { title: "Constructor Functions", href: "/javascript/classes/constructor" },
      { title: "Classes & Inheritance", href: "/javascript/classes" },
      { title: "Getters/Setters", href: "/javascript/classes/getters-setters" },
      { title: "this Keyword in Classes", href: "/javascript/this-keyword" },
    ] },
  { id: 17, title: "Error Handling", level: "intermediate", topics: [
      { title: "try...catch", href: "/javascript/error-handling/try-catch" },
      { title: "Throwing Errors", href: "/javascript/error-handling/throwing" },
      { title: "Custom Errors", href: "/javascript/error-handling/custom" },
      { title: "Error Types", href: "/javascript/error-handling/types" },
    ] },
  { id: 18, title: "Modules", level: "intermediate", topics: [
      { title: "ES6 Modules", href: "/javascript/modules/es6" },
      { title: "CommonJS", href: "/javascript/modules/commonjs" },
      { title: "AMD", href: "/javascript/modules/amd" },
      { title: "Dynamic Imports", href: "/javascript/modules/dynamic" },
    ] },
  { id: 19, title: "Performance & Optimization", level: "advanced", topics: [
      { title: "Debounce", href: "/javascript/performance/debounce" },
      { title: "Throttle", href: "/javascript/performance/throttle" },
      { title: "Memoization", href: "/javascript/performance/memoization" },
      { title: "Memory Leaks", href: "/javascript/performance/memory-leaks" },
    ] },
  { id: 20, title: "Advanced ES Features", level: "advanced", topics: [
      { title: "Generators", href: "/javascript/advanced/generators" },
      { title: "Symbols", href: "/javascript/advanced/symbols" },
      { title: "Proxy", href: "/javascript/advanced/proxy" },
      { title: "Reflect API", href: "/javascript/advanced/reflect" },
      { title: "WeakMap & WeakSet", href: "/javascript/advanced/weak-collections" },
    ] },
  { id: 21, title: "Browser APIs", level: "advanced", topics: [
      { title: "LocalStorage & SessionStorage", href: "/javascript/browser-apis/storage" },
      { title: "Web Workers", href: "/javascript/browser-apis/web-workers" },
      { title: "Geolocation API", href: "/javascript/browser-apis/geolocation" },
      { title: "Canvas API", href: "/javascript/browser-apis/canvas" },
      { title: "WebSockets", href: "/javascript/browser-apis/websockets" },
    ] },
  { id: 22, title: "Security", level: "advanced", topics: [
      { title: "XSS Prevention", href: "/javascript/security/xss" },
      { title: "CSRF Protection", href: "/javascript/security/csrf" },
      { title: "CORS", href: "/javascript/security/cors" },
      { title: "Content Security Policy", href: "/javascript/security/csp" },
    ] },
  { id: 23, title: "Testing", level: "advanced", topics: [
      { title: "Unit Testing", href: "/javascript/testing/unit" },
      { title: "Jest Framework", href: "/javascript/testing/jest" },
      { title: "Testing Best Practices", href: "/javascript/testing/best-practices" },
    ] },
  { id: 24, title: "Design Patterns", level: "advanced", topics: [
      { title: "Singleton Pattern", href: "/javascript/design-patterns/singleton" },
      { title: "Factory Pattern", href: "/javascript/design-patterns/factory" },
      { title: "Observer Pattern", href: "/javascript/design-patterns/observer" },
      { title: "Module Pattern", href: "/javascript/design-patterns/module" },
    ] },
  { id: 25, title: "Interview Preparation", level: "advanced", topics: [
      { title: "Top 100 JavaScript Coding Interview Questions", href: "/javascript/interview-questions" },
      { title: "JavaScript Output Based Questions", href: "/javascript/output-based-questions" },
      { title: "Hoisting Deep Dive", href: "/javascript/interview-questions/hoisting" },
      { title: "Closure Interview Questions", href: "/javascript/interview-questions/closures" },
      { title: "Event Loop Scenarios", href: "/javascript/interview-questions/event-loop" },
      { title: "Algorithm Challenges", href: "/javascript/interview-questions/algorithms" },
    ] },
];

export const roadmapLevelMeta: Record<RoadmapLevel, { label: string; classes: string }> = {
  beginner: {
    label: "Beginner",
    classes: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  },
  intermediate: {
    label: "Intermediate",
    classes: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  },
  advanced: {
    label: "Advanced",
    classes: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  },
};

export const javascriptRoadmapTopicCount = javascriptRoadmapSections.reduce((total, section) => total + section.topics.length, 0);
