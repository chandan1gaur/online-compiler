import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Destructuring - Complete Guide to Array and Object Destructuring",
  description: "Master JavaScript destructuring with comprehensive guide covering array destructuring, object destructuring, nested destructuring, default values, and advanced patterns.",
  keywords: [
    "javascript destructuring",
    "array destructuring",
    "object destructuring",
    "es6 destructuring",
    "javascript spread operator",
    "rest parameters",
    "destructuring assignment",
    "javascript array destructuring",
    "object destructuring javascript",
    "nested destructuring",
  ],
  openGraph: {
    title: "JavaScript Destructuring - Complete Guide to Array and Object Destructuring",
    description: "Master JavaScript destructuring with comprehensive guide covering array destructuring, object destructuring, nested destructuring, default values, and advanced patterns.",
    url: "/javascript/es6/destructuring",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Destructuring Tutorial",
    description: "Complete guide to understanding JavaScript destructuring - arrays, objects, and advanced patterns.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/es6/destructuring" },
};

const sections = [
  {
    heading: "What is Destructuring in JavaScript?",
    paragraphs: [
      "Destructuring is a JavaScript expression that allows you to unpack values from arrays, or properties from objects, into distinct variables. It was introduced in ES6 (ECMAScript 2015) and provides a more concise and readable way to extract data from complex structures.",
      "Destructuring makes it easier to work with function parameters, return values, and data manipulation. It's particularly useful when working with APIs, configuration objects, and complex data structures.",
      "There are two main types of destructuring: array destructuring and object destructuring, each with their own syntax and use cases.",
    ],
    examples: [
      {
        title: "Basic Destructuring Concept",
        code:`// Traditional approach
const user = { name: 'Alice', age: 30 };
const name = user.name;
const age = user.age;

// Destructuring approach
const { name, age } = user;

console.log(name, age); // "Alice", 30

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first, second, third); // "red", "green", "blue"`,
        explanation: "Destructuring provides a cleaner syntax for extracting values from arrays and objects compared to traditional property access.",
      },
    ],
  },
  {
    heading: "Array Destructuring",
    paragraphs: [
      "Array destructuring allows you to unpack elements from arrays into distinct variables. You can skip elements, use rest parameters, and provide default values.",
    ],
    examples: [
      {
        title: "Basic Array Destructuring",
        code:`const numbers = [1, 2, 3, 4, 5];

// Basic destructuring
const [first, second, third] = numbers;
console.log(first, second, third); // 1, 2, 3

// Skip elements
const [, , thirdValue] = numbers;
console.log(thirdValue); // 3

// Rest parameter
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [a = 10, b = 20, c = 30] = [1];
console.log(a, b, c); // 1, 20, 30`,
        explanation: "Array destructuring allows flexible unpacking of array elements with skipping, rest parameters, and default values.",
      },
      {
        title: "Swapping Variables with Array Destructuring",
        code:`let x = 10;
let y = 20;

// Traditional swap
let temp = x;
x = y;
y = temp;
console.log(x, y); // 20, 10

// Destructuring swap
[x, y] = [y, x];
console.log(x, y); // 10, 20 (back to original)

// Multiple variable swap
let a = 1, b = 2, c = 3;
[a, b, c] = [c, a, b];
console.log(a, b, c); // 3, 1, 2`,
        explanation: "Array destructuring provides an elegant way to swap variable values without temporary variables.",
      },
      {
        title: "Array Destructuring in Function Returns",
        code:`// Function returning multiple values
function getCoordinates() {
  return [40.7128, -74.0060]; // New York coordinates
}

const [latitude, longitude] = getCoordinates();
console.log(\`Latitude: \${latitude}, Longitude: \${longitude}\`);

// Function with rest parameters
function sum(first, ...rest) {
  return rest.reduce((acc, num) => acc + num, first);
}

const numbers = [1, 2, 3, 4, 5];
const [first, ...remaining] = numbers;
console.log(sum(first, ...remaining)); // 15`,
        explanation: "Array destructuring works well with functions that return arrays or use rest parameters.",
      },
    ],
  },
  {
    heading: "Object Destructuring",
    paragraphs: [
      "Object destructuring allows you to extract properties from objects and assign them to variables with the same name as the property, or with custom variable names.",
    ],
    examples: [
      {
        title: "Basic Object Destructuring",
        code:`const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  profession: 'Developer'
};

// Basic destructuring
const { name, age } = person;
console.log(name, age); // "Alice", 30

// Custom variable names
const { name: fullName, age: years } = person;
console.log(fullName, years); // "Alice", 30

// Default values
const { name, country = 'USA' } = person;
console.log(name, country); // "Alice", "USA"

// Nested object destructuring
const user = {
  id: 1,
  profile: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

const { profile: { firstName, lastName } } = user;
console.log(firstName, lastName); // "John", "Doe"`,
        explanation: "Object destructuring allows extracting properties with custom names, default values, and nested object access.",
      },
      {
        title: "Rest Properties in Object Destructuring",
        code:`const user = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  city: 'New York',
  country: 'USA'
};

// Extract specific properties
const { name, email, ...rest } = user;
console.log(name); // "Alice"
console.log(email); // "alice@example.com"
console.log(rest); // { age: 30, city: "New York", country: "USA" }

// Function parameters with rest
function printUser({ name, age, ...otherInfo }) {
  console.log(\`Name: \${name}, Age: \${age}\`);
  console.log('Other info:', otherInfo);
}

printUser(user);
// Output:
// Name: Alice, Age: 30
// Other info: { email: "alice@example.com", city: "New York", country: "USA" }`,
        explanation: "Rest properties allow collecting remaining object properties into a new object, useful for function parameters and data manipulation.",
      },
    ],
  },
  {
    heading: "Advanced Destructuring Patterns",
    paragraphs: [
      "Destructuring supports complex patterns including nested structures, computed property names, and dynamic destructuring.",
    ],
    examples: [
      {
        title: "Nested Destructuring",
        code:`const company = {
  name: 'Tech Corp',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  employees: [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' }
  ]
};

// Nested object destructuring
const {
  name: companyName,
  address: {
    city,
    coordinates: { lat, lng }
  },
  employees: [firstEmployee]
} = company;

console.log(companyName); // "Tech Corp"
console.log(city); // "San Francisco"
console.log(lat, lng); // 37.7749, -122.4194
console.log(firstEmployee); // { name: "Alice", role: "Developer" }

// Array of objects destructuring
const [{ name: firstName }, { name: secondName }] = company.employees;
console.log(firstName, secondName); // "Alice", "Bob"`,
        explanation: "Nested destructuring allows extracting values from deeply nested objects and arrays in a single statement.",
      },
      {
        title: "Computed Property Names",
        code:`const propertyName = 'color';
const shape = {
  [propertyName]: 'red',
  size: 'large',
  type: 'circle'
};

// Destructuring with computed property names
const { [propertyName]: shapeColor, size, type } = shape;
console.log(shapeColor, size, type); // "red", "large", "circle"

// Dynamic destructuring
function extractProperty(obj, propName) {
  const { [propName]: value } = obj;
  return value;
}

const car = { brand: 'Toyota', model: 'Camry', year: 2020 };
console.log(extractProperty(car, 'brand')); // "Toyota"
console.log(extractProperty(car, 'year')); // 2020`,
        explanation: "Computed property names allow dynamic property extraction using variables or expressions.",
      },
      {
        title: "Destructuring in Loops",
        code:`const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Destructuring in for...of loops
for (const { id, name, age } of users) {
  console.log(\`\${name} (ID: \${id}) is \${age} years old\`);
}

// Array destructuring in loops
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (const [first, second, third] of matrix) {
  console.log(\`Row: \${first}, \${second}, \${third}\`);
}

// Map destructuring
const userMap = new Map([
  ['alice', { age: 25, city: 'NYC' }],
  ['bob', { age: 30, city: 'LA' }]
]);

for (const [username, { age, city }] of userMap) {
  console.log(\`\${username}: \${age} years old in \${city}\`);
}`,
        explanation: "Destructuring works in loops to easily extract values from arrays, objects, and other iterable structures.",
      },
    ],
  },
  {
    heading: "Destructuring in Function Parameters",
    paragraphs: [
      "Destructuring is particularly powerful in function parameters, allowing you to extract values directly from arguments.",
    ],
    examples: [
      {
        title: "Object Destructuring in Parameters",
        code:`// Traditional approach
function createUser(options) {
  const name = options.name;
  const age = options.age || 18;
  const city = options.city || 'Unknown';

  return \`\${name}, \${age} years old from \${city}\`;
}

// Destructuring approach
function createUser({ name, age = 18, city = 'Unknown' }) {
  return \`\${name}, \${age} years old from \${city}\`;
}

const user1 = createUser({ name: 'Alice', age: 25, city: 'NYC' });
const user2 = createUser({ name: 'Bob' }); // uses defaults

console.log(user1); // "Alice, 25 years old from NYC"
console.log(user2); // "Bob, 18 years old from Unknown"

// API response handling
function processAPIResponse({ data, status, message }) {
  if (status === 'success') {
    return \`Processed \${data.length} items\`;
  }
  return \`Error: \${message}\`;
}

const response = {
  status: 'success',
  data: [1, 2, 3, 4, 5],
  message: null
};

console.log(processAPIResponse(response)); // "Processed 5 items"`,
        explanation: "Function parameter destructuring provides clean, readable function signatures and automatic default value handling.",
      },
      {
        title: "Array Destructuring in Parameters",
        code:`// Array destructuring in parameters
function calculate(a, b, ...rest) {
  return [a + b, ...rest];
}

const [sum, ...others] = calculate(1, 2, 3, 4, 5);
console.log(sum, others); // 3, [3, 4, 5]

// Destructuring array parameters
function processCoordinates([x, y, z = 0]) {
  return \`Point at (\${x}, \${y}, \${z})\`;
}

const point2D = [10, 20];
const point3D = [5, 15, 25];

console.log(processCoordinates(point2D)); // "Point at (10, 20, 0)"
console.log(processCoordinates(point3D)); // "Point at (5, 15, 25)"

// Multiple array parameters
function mergeArrays([first1, ...rest1], [first2, ...rest2]) {
  return [first1, first2, ...rest1, ...rest2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 4, 2, 3, 5, 6]`,
        explanation: "Array destructuring in function parameters allows flexible handling of array arguments with rest parameters and defaults.",
      },
    ],
  },
  {
    heading: "Destructuring with Spread Operator",
    paragraphs: [
      "The spread operator (...) works closely with destructuring to provide powerful data manipulation capabilities.",
    ],
    examples: [
      {
        title: "Spread with Array Destructuring",
        code:`const numbers = [1, 2, 3, 4, 5];

// Extract first element, rest go to array
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// Skip elements with spread
const [, second, , fourth, ...remaining] = numbers;
console.log(second, fourth); // 2, 4
console.log(remaining); // [5]

// Clone and modify arrays
const original = [1, 2, 3];
const modified = [0, ...original, 4];
console.log(modified); // [0, 1, 2, 3, 4]

// Swap with spread
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1`,
        explanation: "Spread operator with array destructuring enables flexible array manipulation, cloning, and value extraction.",
      },
      {
        title: "Spread with Object Destructuring",
        code:`const user = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  city: 'NYC'
};

// Extract and collect remaining properties
const { name, ...userInfo } = user;
console.log(name); // "Alice"
console.log(userInfo); // { age: 30, email: "alice@example.com", city: "NYC" }

// Clone and modify objects
const updatedUser = { ...user, age: 31, country: 'USA' };
console.log(updatedUser);
// { name: "Alice", age: 31, email: "alice@example.com", city: "NYC", country: "USA" }

// Merge objects
const defaults = { theme: 'light', language: 'en' };
const userPrefs = { theme: 'dark' };
const config = { ...defaults, ...userPrefs };
console.log(config); // { theme: "dark", language: "en" }

// Function arguments
function updateUser(id, { name, age, ...updates }) {
  return { id, name, age, ...updates };
}

const result = updateUser(1, { name: 'Bob', age: 25, email: 'bob@test.com' });
console.log(result); // { id: 1, name: "Bob", age: 25, email: "bob@test.com" }`,
        explanation: "Object spread with destructuring enables powerful object manipulation, cloning, merging, and property extraction.",
      },
    ],
  },
  {
    heading: "Common Destructuring Patterns and Use Cases",
    paragraphs: [
      "Destructuring is used extensively in modern JavaScript for various patterns and real-world scenarios.",
    ],
    examples: [
      {
        title: "React Props Destructuring",
        code:`// Traditional props
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <span>{props.role}</span>
    </div>
  );
}

// Destructured props
function UserCard({ name, email, role, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}

// With default props
function Button({ text, onClick, disabled = false, variant = 'primary' }) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Usage
<UserCard
  name="Alice"
  email="alice@example.com"
  role="Developer"
  avatar="avatar.jpg"
/>`,
        explanation: "React component props destructuring provides cleaner component signatures and easier prop handling.",
      },
      {
        title: "API Response Handling",
        code:`// Fetch API with destructuring
async function fetchUser(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const { data: user, status } = await response.json();

  if (status === 'success') {
    const { name, email, profile: { avatar, bio } } = user;
    return { name, email, avatar, bio };
  }

  throw new Error('Failed to fetch user');
}

// Configuration objects
const config = {
  database: {
    host: 'localhost',
    port: 5432,
    credentials: {
      username: 'admin',
      password: 'secret'
    }
  },
  cache: {
    ttl: 3600,
    maxSize: 100
  }
};

// Extract nested config values
const {
  database: {
    host,
    port,
    credentials: { username, password }
  },
  cache: { ttl: cacheTTL }
} = config;

console.log(\`Connecting to \${host}:\${port} as \${username}\`);`,
        explanation: "Destructuring simplifies API response handling and configuration object management.",
      },
      {
        title: "Module Imports with Aliases",
        code:`// Named imports with destructuring-like syntax
import { useState, useEffect, useContext } from 'react';

// Destructuring in import (conceptually similar)
const { readFile, writeFile } = require('fs');

// Custom destructuring for utilities
const utils = {
  formatDate: (date) => date.toLocaleDateString(),
  formatCurrency: (amount) => \`$\${amount.toFixed(2)}\`,
  debounce: (func, delay) => { /* implementation */ }
};

// Extract specific utilities
const { formatDate, formatCurrency } = utils;

// Create custom utility bundles
const { formatDate: dateFormatter, formatCurrency: moneyFormatter } = utils;

// Usage
console.log(dateFormatter(new Date())); // "12/25/2023"
console.log(moneyFormatter(123.456)); // "$123.46"`,
        explanation: "Destructuring patterns apply to module imports, utility functions, and custom API design.",
      },
    ],
  },
  {
    heading: "Destructuring Best Practices and Gotchas",
    paragraphs: [
      "While destructuring is powerful, there are important considerations and potential pitfalls to avoid.",
    ],
    examples: [
      {
        title: "Destructuring Gotchas",
        code:`// 1. Reference vs Value
const obj = { a: 1, b: 2 };
const { a, ...rest } = obj;

// Modifying rest doesn't affect original
rest.c = 3;
console.log(obj); // { a: 1, b: 2 }
console.log(rest); // { b: 2, c: 3 }

// 2. Primitive values can't be destructured
const str = "hello";
// const [first, second] = str; // This doesn't work as expected
const chars = [...str]; // Spread works
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

// 3. Destructuring undefined/null throws error
const user = null;
// const { name } = user; // TypeError: Cannot destructure property 'name' of null

// Safe destructuring
const safeUser = user || {};
const { name = 'Anonymous' } = safeUser;
console.log(name); // "Anonymous"

// 4. Array destructuring with sparse arrays
const sparse = [1, , 3];
const [first, second, third] = sparse;
console.log(first, second, third); // 1, undefined, 3`,
        explanation: "Understanding destructuring limitations and edge cases prevents runtime errors and unexpected behavior.",
      },
      {
        title: "Performance Considerations",
        code:`// Avoid deep destructuring in hot paths
const data = { a: { b: { c: { d: 1 } } } };

// This creates intermediate objects
const { a: { b: { c: { d } } } } = data;

// Better for performance-critical code
const d = data.a.b.c.d;

// Use destructuring for clarity when performance isn't critical
function processUser({ profile: { name, email }, settings: { theme } }) {
  // Clear intent, acceptable performance cost
  return \`\${name} uses \${theme} theme\`;
}

// Consider readability vs performance trade-offs
// For frequently called functions, prefer explicit property access
function fastProcessUser(user) {
  return \`\${user.profile.name} uses \${user.settings.theme} theme\`;
}`,
        explanation: "Balance destructuring's readability benefits with performance considerations in critical code paths.",
      },
    ],
  },
  {
    heading: "Interview Questions about Destructuring",
    paragraphs: [
      "Destructuring is a common topic in JavaScript interviews, especially for mid-level positions.",
    ],
    examples: [
      {
        title: "Classic Destructuring Interview Question",
        code:`// What will this output?
const obj = { a: 1, b: 2 };
const arr = [3, 4];

const { a, b } = obj;
const [c, d] = arr;

console.log(a, b, c, d); // 1, 2, 3, 4

// What about this?
const { a: x, b: y } = obj;
const [c: z, d: w] = arr; // SyntaxError: Invalid destructuring assignment

// Correct syntax for array aliasing
const [z, w] = arr;
console.log(x, y, z, w); // 1, 2, 3, 4`,
        explanation: "Array destructuring doesn't support property renaming like object destructuring does.",
      },
      {
        title: "Advanced Destructuring Patterns",
        code:`// Swap values without temp variable
let x = 10, y = 20;
[x, y] = [y, x];
console.log(x, y); // 20, 10

// Extract nested values
const user = {
  profile: {
    name: { first: 'John', last: 'Doe' },
    contacts: [{ type: 'email', value: 'john@example.com' }]
  }
};

const {
  profile: {
    name: { first, last },
    contacts: [{ value: email }]
  }
} = user;

console.log(\`\${first} \${last}: \${email}\`); // "John Doe: john@example.com"

// Default values in nested destructuring
const config = {};
const {
  db: { host = 'localhost', port = 5432 } = {},
  cache: { ttl = 3600 } = {}
} = config;

console.log(host, port, ttl); // "localhost", 5432, 3600`,
        explanation: "Advanced destructuring patterns demonstrate deep understanding of the feature's capabilities.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Trying to destructure primitives",
    fix: "Only use destructuring with objects and arrays. For strings, use spread syntax if needed.",
  },
  {
    title: "Destructuring null or undefined",
    fix: "Always provide default values or check for null/undefined before destructuring.",
  },
  {
    title: "Deep destructuring in performance-critical code",
    fix: "Use explicit property access for deeply nested values in hot code paths.",
  },
  {
    title: "Forgetting that destructuring creates references",
    fix: "Remember that object destructuring creates references, not copies, unless using spread.",
  },
  {
    title: "Using array destructuring syntax for objects",
    fix: "Use curly braces {} for objects and square brackets [] for arrays.",
  },
  {
    title: "Not providing defaults for potentially undefined values",
    fix: "Always consider providing default values in destructuring assignments.",
  },
];

const faqs = [
  {
    q: "What is destructuring in JavaScript?",
    a: "Destructuring is an ES6 feature that allows unpacking values from arrays or properties from objects into distinct variables using concise syntax.",
  },
  {
    q: "What's the difference between array and object destructuring?",
    a: "Array destructuring uses square brackets [] and assigns by position, while object destructuring uses curly braces {} and assigns by property name.",
  },
  {
    q: "Can I use default values with destructuring?",
    a: "Yes, you can provide default values using the = syntax in both array and object destructuring.",
  },
  {
    q: "What's the rest syntax (...) in destructuring?",
    a: "The rest syntax collects remaining elements/properties into a new array or object, useful for extracting partial data.",
  },
  {
    q: "Can I destructure nested objects and arrays?",
    a: "Yes, destructuring supports arbitrary nesting levels for both objects and arrays.",
  },
  {
    q: "Does destructuring create copies or references?",
    a: "Object destructuring creates references to the original object properties, while array destructuring can create new arrays with spread syntax.",
  },
  {
    q: "Can I use destructuring in function parameters?",
    a: "Yes, destructuring in function parameters provides clean syntax for extracting values from argument objects or arrays.",
  },
  {
    q: "Is destructuring supported in all browsers?",
    a: "Modern browsers support destructuring, but for older browsers, you'll need transpilation (Babel) or polyfills.",
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

export default function DestructuringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-full px-4 pt-0 pb-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          JavaScript Destructuring - Complete Guide to Array and Object Destructuring
        </h1>
        <p className="text-lg mb-8 text-center">
          Master JavaScript destructuring with comprehensive examples covering array destructuring, object destructuring,
          nested patterns, default values, and advanced use cases.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Understanding JavaScript Destructuring</h2>

          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{section.heading}</h3>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300">
                  {p}
                </p>
              ))}
              {section.examples && section.examples.length > 0 && (
                <div className="space-y-6">
                  {section.examples.map((ex, exIdx) => (
                    <CodeExample
                      key={exIdx}
                      title={ex.title}
                      code={ex.code}
                      explanation={ex.explanation}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Common Destructuring Mistakes</h2>
          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700 dark:text-red-400">
                  {mistake.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <strong>Solution:</strong> {mistake.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Destructuring FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "ES6 Features", href: "/javascript/es6" },
              { label: "Spread & Rest", href: "/javascript/es6/spread-rest" },
              { label: "Arrow Functions", href: "/javascript/es6/arrow-functions" },
              { label: "Template Literals", href: "/javascript/strings/template-literals" },
              { label: "Objects", href: "/javascript/objects" },
              { label: "Arrays", href: "/javascript/arrays" },
              { label: "Interview Questions", href: "/javascript/interview-questions" },
              { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Destructuring unpacks values from arrays and objects into distinct variables</li>
            <li>Array destructuring uses [] and assigns by position, object destructuring uses {} and assigns by property name</li>
            <li>Rest syntax (...) collects remaining elements/properties into new arrays/objects</li>
            <li>Default values prevent undefined errors when destructuring incomplete structures</li>
            <li>Nested destructuring allows extracting values from complex, deeply nested data structures</li>
            <li>Destructuring improves code readability and is essential for modern JavaScript development</li>
          </ul>
        </div>
      </div>
    </>
  );
}