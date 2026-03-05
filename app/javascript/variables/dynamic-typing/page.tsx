import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Dynamic Typing in JavaScript",
  description:
    "Understand JavaScript's dynamic typing system: pros and cons, common patterns, and how to write reliable code despite flexible types.",
  keywords: ["javascript dynamic typing", "dynamic types", "type safety"],
  openGraph: {
    title: "Dynamic Typing in JavaScript",
    description:
      "Understand JavaScript's dynamic typing system: pros and cons, common patterns, and how to write reliable code despite flexible types.",
    url: "/javascript/variables/dynamic-typing",
    type: "article",
    images: ["/og-variables-dynamic-typing.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Typing in JavaScript",
    description:
      "Understand JavaScript's dynamic typing system: pros and cons, common patterns, and how to write reliable code despite flexible types.",
    images: ["/og-variables-dynamic-typing.svg"],
  },
  alternates: { canonical: "/javascript/variables/dynamic-typing" },
};

export default function DynamicTypingPage() {
  return (
    <JsTutorialTemplate
      title="Dynamic Typing"
      intro="JavaScript is dynamically typed: variable types can change at runtime. This enables flexibility but requires careful validation. Dynamic typing means variables don't have fixed types - they can hold any value at any time, and their type is determined by the value they contain."
      why="Understanding dynamic typing helps you choose validation, testing, and API contracts to avoid runtime errors. It's fundamental to writing robust JavaScript code and deciding when to use TypeScript or other type checking solutions."
      sections={[
        {
          heading: "What is Dynamic Typing?",
          paragraphs: [
            "Dynamic typing means variable types are determined at runtime, not compile time. Variables can hold different types of values during execution.",
            "No type declarations are required - you can assign any value to any variable. The type is associated with the value, not the variable.",
            "Type checking happens during execution, which can lead to runtime errors if types don't match expectations.",
            "Contrast with static typing (TypeScript) where types are checked before execution.",
          ],
        },
        {
          heading: "Advantages of Dynamic Typing",
          paragraphs: [
            "Rapid prototyping: Write code quickly without type declarations or interfaces.",
            "Flexible APIs: Functions can accept various types, making them more versatile.",
            "Concise code: Less boilerplate compared to statically typed languages.",
            "Easy refactoring: Change data structures without updating type annotations.",
            "Duck typing: Objects are compatible based on their properties/methods, not their type.",
            "Runtime adaptability: Code can handle unexpected data formats gracefully.",
          ],
        },
        {
          heading: "Drawbacks and Risks",
          paragraphs: [
            "Runtime errors: Type mismatches discovered only when code executes.",
            "Harder debugging: Type-related bugs may not be caught by static analysis.",
            "Poor IDE support: Less autocomplete and refactoring assistance.",
            "API fragility: Functions may break silently when input types change.",
            "Maintenance burden: Large codebases become harder to understand and modify.",
            "Performance overhead: Some optimizations require static type information.",
          ],
        },
        {
          heading: "Common Patterns and Idioms",
          paragraphs: [
            "Type coercion: JavaScript automatically converts types in operations (+, ==, etc.).",
            "Duck typing: Check for properties/methods rather than types (if it walks like a duck...).",
            "Type guards: Runtime checks to narrow types within conditional blocks.",
            "Default parameters: Provide fallbacks for undefined or incorrect types.",
            "Polymorphic functions: Functions that work with multiple types.",
            "Type assertions: Explicitly telling the system about a value's type.",
          ],
        },
        {
          heading: "Type Checking Strategies",
          paragraphs: [
            "Explicit type checks: Use typeof, instanceof, Array.isArray() for validation.",
            "Property existence: Check if required properties exist on objects.",
            "Value validation: Verify values match expected formats or ranges.",
            "Schema validation: Use libraries like Joi or Yup for complex validation.",
            "Contract testing: Define and test API contracts between modules.",
            "Runtime assertions: Throw errors when types don't match expectations.",
          ],
        },
        {
          heading: "Defensive Programming Techniques",
          paragraphs: [
            "Input validation: Check function parameters before processing.",
            "Graceful degradation: Handle unexpected types without crashing.",
            "Default values: Provide sensible defaults for missing or invalid data.",
            "Error boundaries: Catch and handle type-related errors appropriately.",
            "Logging and monitoring: Track type mismatches in production.",
            "Unit testing: Test with various input types to ensure robustness.",
          ],
        },
        {
          heading: "When to Use Static Typing",
          paragraphs: [
            "Large codebases: Static types help maintainability and catch errors early.",
            "Team development: Type annotations serve as documentation and contracts.",
            "Complex data structures: Interfaces help define and validate object shapes.",
            "Performance-critical code: Static types enable better optimizations.",
            "API development: Types ensure consistent interfaces for consumers.",
            "Long-term maintenance: Static types reduce regression bugs.",
          ],
        },
        {
          heading: "Migration Strategies",
          paragraphs: [
            "Gradual adoption: Add TypeScript to existing JavaScript projects incrementally.",
            "Type assertions: Use 'as' keyword to tell TypeScript about dynamic types.",
            "Any types: Start with permissive types and gradually add specificity.",
            "Interface extraction: Define types based on runtime usage patterns.",
            "Type guards: Create functions that narrow types at runtime.",
            "Generic constraints: Use TypeScript generics for flexible yet type-safe code.",
          ],
        },
        {
          heading: "Best Practices",
          paragraphs: [
            "Validate inputs: Always check function parameters and external data.",
            "Use strict equality: Prefer === over == to avoid type coercion surprises.",
            "Document expectations: Comment functions with expected parameter types.",
            "Test thoroughly: Cover edge cases and unexpected input types.",
            "Consider TypeScript: For larger projects, static typing pays dividends.",
            "Use linters: Tools like ESLint can catch some type-related issues.",
            "Monitor errors: Track runtime type errors in production environments.",
            "Keep functions small: Smaller functions are easier to type and test.",
          ],
        },
      ]}
      examples={[
        {
          title: "Variable Type Changes",
          code: `let value = 42;
console.log(typeof value); // 'number'

value = 'Hello World';
console.log(typeof value); // 'string'

value = { name: 'JavaScript' };
console.log(typeof value); // 'object'

value = () => console.log('Function!');
console.log(typeof value); // 'function'`,
          explanation: "A single variable can hold different types throughout its lifetime.",
        },
        {
          title: "Duck Typing Example",
          code: `function processUser(user) {
  // Duck typing: if it has name and email, treat it as a user
  if (user && typeof user.name === 'string' && typeof user.email === 'string') {
    return \`Hello \${user.name}, your email is \${user.email}\`;
  }
  throw new Error('Invalid user object');
}

// Works with plain objects
console.log(processUser({ name: 'John', email: 'john@example.com' }));

// Also works with classes
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
console.log(processUser(new User('Jane', 'jane@example.com')));`,
          explanation: "Duck typing focuses on capabilities rather than inheritance.",
        },
        {
          title: "Type Guards",
          code: `function isStringArray(value) {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

function processStringArray(arr) {
  if (isStringArray(arr)) {
    // TypeScript would know arr is string[] here
    return arr.map(str => str.toUpperCase());
  }
  throw new Error('Expected array of strings');
}

console.log(processStringArray(['a', 'b', 'c'])); // ['A', 'B', 'C']
// processStringArray([1, 2, 3]); // Error`,
          explanation: "Type guards narrow types within conditional blocks.",
        },
        {
          title: "Defensive Function Parameters",
          code: `function calculateTotal(items, taxRate = 0.08) {
  // Validate inputs
  if (!Array.isArray(items)) {
    throw new Error('items must be an array');
  }
  
  if (typeof taxRate !== 'number' || taxRate < 0 || taxRate > 1) {
    throw new Error('taxRate must be a number between 0 and 1');
  }
  
  return items
    .filter(item => typeof item.price === 'number' && item.price > 0)
    .reduce((total, item) => total + item.price, 0) * (1 + taxRate);
}

const items = [
  { name: 'Widget', price: 10 },
  { name: 'Gadget', price: 20 },
  { name: 'Invalid', price: 'not a number' }
];

console.log(calculateTotal(items)); // 30.6 (with 8% tax)`,
          explanation: "Validate inputs and provide defaults to handle dynamic types safely.",
        },
        {
          title: "Polymorphic Functions",
          code: `function formatValue(value) {
  switch (typeof value) {
    case 'string':
      return \`"\${value}"\`;
    case 'number':
      return value.toFixed(2);
    case 'boolean':
      return value ? 'true' : 'false';
    case 'object':
      if (value === null) return 'null';
      if (Array.isArray(value)) return \`[\${value.length} items]\`;
      return \`{\${Object.keys(value).length} properties}\`;
    default:
      return String(value);
  }
}

console.log(formatValue('hello')); // "hello"
console.log(formatValue(42)); // "42.00"
console.log(formatValue([1, 2, 3])); // "[3 items]"
console.log(formatValue({ a: 1, b: 2 })); // "{2 properties}"`,
          explanation: "Functions can handle multiple types by checking types at runtime.",
        },
        {
          title: "Runtime Type Assertions",
          code: `function assertIsUser(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Expected object');
  }
  
  if (typeof obj.id !== 'number') {
    throw new Error('id must be a number');
  }
  
  if (typeof obj.name !== 'string') {
    throw new Error('name must be a string');
  }
  
  if (typeof obj.email !== 'string') {
    throw new Error('email must be a string');
  }
  
  return obj; // TypeScript would know this is User
}

const user = assertIsUser({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
});

console.log(\`User: \${user.name}\`);`,
          explanation: "Runtime assertions ensure objects match expected structure.",
        },
        {
          title: "Schema Validation",
          code: `function validateUser(user) {
  const schema = {
    id: 'number',
    name: 'string',
    email: 'string',
    age: 'number?'
  };
  
  for (const [key, typeSpec] of Object.entries(schema)) {
    const required = !typeSpec.endsWith('?');
    const expectedType = typeSpec.replace('?', '');
    
    if (required && !(key in user)) {
      throw new Error(\`Missing required field: \${key}\`);
    }
    
    if (key in user) {
      const actualType = typeof user[key];
      if (actualType !== expectedType) {
        throw new Error(\`Field \${key} must be \${expectedType}, got \${actualType}\`);
      }
    }
  }
  
  return true;
}

const validUser = { id: 1, name: 'John', email: 'john@test.com', age: 30 };
console.log(validateUser(validUser)); // true`,
          explanation: "Schema validation ensures data conforms to expected structure.",
        },
        {
          title: "Type-Safe API Wrapper",
          code: `class ApiClient {
  async getUser(id) {
    if (typeof id !== 'number' || id <= 0) {
      throw new Error('ID must be a positive number');
    }
    
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    
    // Validate response structure
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid response format');
    }
    
    if (typeof data.id !== 'number' || typeof data.name !== 'string') {
      throw new Error('Invalid user data structure');
    }
    
    return data;
  }
}

const api = new ApiClient();
// api.getUser('123'); // Error: ID must be number
// api.getUser(-1); // Error: ID must be positive`,
          explanation: "API clients should validate both inputs and responses.",
        },
      ]}
      mistakes={[
        { title: "Assuming variable types", fix: "Always validate inputs before using them in operations." },
        { title: "Using == instead of ===", fix: "Use strict equality to avoid unexpected type coercion." },
        { title: "Not handling null/undefined", fix: "Check for null and undefined explicitly in dynamic code." },
        { title: "Large functions without validation", fix: "Break down functions and validate inputs at each step." },
        { title: "Ignoring API response types", fix: "Validate external data before processing." },
        { title: "No error boundaries", fix: "Wrap dynamic operations in try-catch blocks." },
      ]}
      faqs={[
        { q: "Should I avoid dynamic typing?", a: "Not necessarily — it's powerful for flexibility, but add validation for reliability." },
        { q: "When should I use TypeScript?", a: "For large projects, teams, or when you need compile-time guarantees." },
        { q: "How do I handle APIs with dynamic data?", a: "Validate responses and use schema validation libraries." },
        { q: "Is dynamic typing slower?", a: "Slightly, due to runtime checks, but usually not performance-critical." },
        { q: "Can I make JavaScript statically typed?", a: "Use TypeScript, which compiles to JavaScript with type checking." },
        { q: "How to test dynamic code?", a: "Test with various input types and edge cases thoroughly." },
        { q: "What's duck typing?", a: "Checking capabilities rather than types — 'if it quacks like a duck...'." },
        { q: "How to migrate from dynamic to static?", a: "Gradually add TypeScript, starting with type assertions." },
      ]}
      related={[{ label: "Data Types", href: "/javascript/variables/data-types" }, { label: "Type Conversion", href: "/javascript/variables/type-conversion" }, { label: "typeof Operator", href: "/javascript/variables/typeof-operator" }]}
    />
  );
}
