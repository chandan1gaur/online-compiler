import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object Properties - Access, Definition, and Manipulation Guide",
  description: "Master JavaScript object properties with comprehensive guide covering property access, definition, descriptors, getters/setters, and advanced property manipulation techniques.",
  keywords: [
    "javascript object properties",
    "property access",
    "property descriptors",
    "getters setters",
    "object.defineProperty",
    "property enumeration",
    "configurable enumerable writable",
    "object property manipulation",
    "javascript property methods",
    "object property best practices"
  ],
  openGraph: {
    title: "JavaScript Object Properties - Complete Guide",
    description: "Master JavaScript object properties with comprehensive guide covering property access, definition, descriptors, getters/setters, and advanced property manipulation techniques.",
    url: "/javascript/objects/properties",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Properties Guide",
    description: "Master JavaScript object properties with comprehensive guide covering property access, definition, descriptors, getters/setters, and advanced property manipulation techniques.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/properties" },
};

const propertySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object Properties - Complete Guide",
  "description": "Master JavaScript object properties with comprehensive guide covering property access, definition, descriptors, getters/setters, and advanced property manipulation techniques.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectPropertiesPage() {
  return (
    <>
      <Script id="property-schema" type="application/ld+json">
        {JSON.stringify(propertySchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object Properties: Complete Guide to Access, Definition, and Manipulation
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object properties are the building blocks of JavaScript objects. Understanding property access patterns,
          descriptors, and manipulation techniques is crucial for writing robust and maintainable code. This comprehensive
          guide covers everything from basic property access to advanced property descriptors and performance optimization.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Property Access Patterns</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Dot Notation vs Bracket Notation</h3>
          <p className="text-slate-700 mb-4">
            JavaScript provides two primary ways to access object properties: dot notation and bracket notation.
            Each has its use cases and performance characteristics.
          </p>

          <CodeExample
            title="Basic Property Access"
            code={`// Object with various property types
const user = {
  name: "John Doe",
  age: 30,
  "full-name": "John Doe Smith",
  42: "The answer",
  isActive: true
};

// Dot notation - for valid identifiers
console.log(user.name);        // "John Doe"
console.log(user.age);         // 30
console.log(user.isActive);    // true

// Bracket notation - for dynamic keys and special characters
console.log(user["full-name"]); // "John Doe Smith"
console.log(user[42]);         // "The answer"

// Dynamic property access
const propertyName = "name";
console.log(user[propertyName]); // "John Doe"

// Computed property names
const prefix = "user";
const obj = {
  [prefix + "Name"]: "John",
  [prefix + "Age"]: 30
};
console.log(obj.userName); // "John"
console.log(obj.userAge);  // 30`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Access Performance</h3>
          <p className="text-slate-700 mb-4">
            Understanding the performance implications of different property access methods is crucial for optimization.
          </p>

          <CodeExample
            title="Property Access Performance Comparison"
            code={`const obj = { a: 1, b: 2, c: 3 };

// Dot notation - fastest for known properties
console.time('dot-notation');
for (let i = 0; i < 1000000; i++) {
  const value = obj.a;
}
console.timeEnd('dot-notation');

// Bracket notation - slightly slower due to string operations
console.time('bracket-notation');
for (let i = 0; i < 1000000; i++) {
  const value = obj['a'];
}
console.timeEnd('bracket-notation');

// Dynamic bracket notation - slowest
console.time('dynamic-bracket');
const prop = 'a';
for (let i = 0; i < 1000000; i++) {
  const value = obj[prop];
}
console.timeEnd('dynamic-bracket');

// Results (approximate):
// dot-notation: ~5ms
// bracket-notation: ~8ms
// dynamic-bracket: ~12ms`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Safe Property Access</h3>
          <p className="text-slate-700 mb-4">
            Handling cases where properties might not exist is essential for robust code.
          </p>

          <CodeExample
            title="Safe Property Access Patterns"
            code={`const user = {
  profile: {
    name: "John",
    settings: {
      theme: "dark"
    }
  }
};

// Traditional approach - prone to errors
function getUserTheme(user) {
  if (user && user.profile && user.profile.settings && user.profile.settings.theme) {
    return user.profile.settings.theme;
  }
  return 'light';
}

// Using optional chaining (ES2020)
function getUserThemeSafe(user) {
  return user?.profile?.settings?.theme ?? 'light';
}

// Using logical operators
function getUserThemeLogical(user) {
  return user && user.profile && user.profile.settings && user.profile.settings.theme || 'light';
}

// Using try-catch for complex nested access
function getNestedValue(obj, path) {
  try {
    return path.split('.').reduce((current, key) => current[key], obj);
  } catch (error) {
    return undefined;
  }
}

console.log(getUserTheme(user));        // "dark"
console.log(getUserThemeSafe(user));    // "dark"
console.log(getUserThemeLogical(user)); // "dark"
console.log(getNestedValue(user, 'profile.settings.theme')); // "dark"
console.log(getNestedValue(user, 'profile.email')); // undefined`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Property Definition and Initialization</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Object Literal Syntax</h3>
          <p className="text-slate-700 mb-4">
            The most common way to create objects with properties is using object literal syntax.
          </p>

          <CodeExample
            title="Object Literal Property Definition"
            code={`// Basic object literal
const person = {
  name: "Alice",
  age: 25,
  isStudent: false
};

// Properties with different value types
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  enabled: true,
  metadata: null,
  settings: undefined
};

// Computed property names
const propName = "dynamicProperty";
const obj = {
  [propName]: "dynamic value",
  ["computed-" + "key"]: "another value",
  [Symbol("symbol-key")]: "symbol value"
};

console.log(obj.dynamicProperty);     // "dynamic value"
console.log(obj["computed-key"]);     // "another value"
console.log(obj[Symbol("symbol-key")]); // "symbol value"

// Method definitions
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Dynamic Property Addition</h3>
          <p className="text-slate-700 mb-4">
            Objects in JavaScript are mutable, allowing properties to be added or modified after creation.
          </p>

          <CodeExample
            title="Dynamic Property Manipulation"
            code={`// Starting with an empty object
const dynamicObj = {};

// Adding properties dynamically
dynamicObj.name = "Dynamic Object";
dynamicObj["created-at"] = new Date();
dynamicObj[Symbol("id")] = 12345;

// Adding methods dynamically
dynamicObj.greet = function() {
  return \`Hello from \${this.name}\`;
};

dynamicObj.updateName = function(newName) {
  this.name = newName;
  this["last-updated"] = new Date();
};

console.log(dynamicObj.name);           // "Dynamic Object"
console.log(dynamicObj.greet());        // "Hello from Dynamic Object"

dynamicObj.updateName("Updated Object");
console.log(dynamicObj.name);           // "Updated Object"
console.log(dynamicObj["last-updated"]); // Date object

// Using Object.assign for bulk property addition
const baseConfig = { timeout: 5000 };
const userConfig = { retries: 3, enabled: true };

const finalConfig = Object.assign({}, baseConfig, userConfig);
console.log(finalConfig); // { timeout: 5000, retries: 3, enabled: true }

// Spread syntax for property merging (ES2018)
const mergedConfig = { ...baseConfig, ...userConfig, debug: false };
console.log(mergedConfig); // { timeout: 5000, retries: 3, enabled: true, debug: false }

// Conditional property addition
const environment = "production";
const appConfig = {
  apiUrl: "https://api.example.com",
  ...(environment === "development" && {
    debug: true,
    logLevel: "verbose"
  }),
  ...(environment === "production" && {
    cache: true,
    compression: true
  })
};

console.log(appConfig);
// Production: { apiUrl: "...", cache: true, compression: true }
// Development: { apiUrl: "...", debug: true, logLevel: "verbose" }`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Shorthand and Computed Properties</h3>
          <p className="text-slate-700 mb-4">
            ES6 introduced convenient syntax for property definition and computed property names.
          </p>

          <CodeExample
            title="Property Shorthand and Computed Properties"
            code={`// Property shorthand
function createUser(name, age, email) {
  return {
    name,        // same as name: name
    age,         // same as age: age
    email,       // same as email: email
    createdAt: new Date(),
    isActive: true
  };
}

const user = createUser("John", 30, "john@example.com");
console.log(user);
// { name: "John", age: 30, email: "john@example.com", createdAt: Date, isActive: true }

// Method shorthand
const calculator = {
  value: 0,

  add(num) {           // same as add: function(num) { ... }
    this.value += num;
    return this;
  },

  subtract(num) {
    this.value -= num;
    return this;
  },

  getValue() {
    return this.value;
  }
};

const result = calculator.add(5).subtract(2).add(10).getValue();
console.log(result); // 13

// Computed property names
const actions = ['create', 'read', 'update', 'delete'];

const permissions = {
  userId: 123,
  role: 'admin'
};

actions.forEach(action => {
  permissions[\`\${action}Permission\`] = true;
});

console.log(permissions);
// {
//   userId: 123,
//   role: 'admin',
//   createPermission: true,
//   readPermission: true,
//   updatePermission: true,
//   deletePermission: true
// }

// Dynamic object creation with computed properties
function createApiEndpoints(baseUrl, resources) {
  const endpoints = {};

  resources.forEach(resource => {
    endpoints[\`\${resource}\`] = \`\${baseUrl}/\${resource}\`;
    endpoints[\`\${resource}List\`] = \`\${baseUrl}/\${resource}s\`;
    endpoints[\`create\${resource.charAt(0).toUpperCase() + resource.slice(1)}\`] = \`\${baseUrl}/\${resource}\`;
  });

  return endpoints;
}

const api = createApiEndpoints('https://api.example.com', ['user', 'post', 'comment']);
console.log(api);
// {
//   user: 'https://api.example.com/user',
//   userList: 'https://api.example.com/users',
//   createUser: 'https://api.example.com/user',
//   post: 'https://api.example.com/post',
//   postList: 'https://api.example.com/posts',
//   createPost: 'https://api.example.com/post',
//   comment: 'https://api.example.com/comment',
//   commentList: 'https://api.example.com/comments',
//   createComment: 'https://api.example.com/comment'
// }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Property Descriptors</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Understanding Property Descriptors</h3>
          <p className="text-slate-700 mb-4">
            Every property in JavaScript has an associated property descriptor that controls its behavior.
          </p>

          <CodeExample
            title="Property Descriptor Structure"
            code={`const obj = { name: "John", age: 30 };

// Get property descriptor
const nameDescriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(nameDescriptor);
// {
//   value: "John",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Get all property descriptors
const allDescriptors = Object.getOwnPropertyDescriptors(obj);
console.log(allDescriptors);
// {
//   name: { value: "John", writable: true, enumerable: true, configurable: true },
//   age: { value: 30, writable: true, enumerable: true, configurable: true }
// }

// Descriptor attributes:
// - value: The value of the property
// - writable: Can the value be changed?
// - enumerable: Does it appear in for...in loops and Object.keys()?
// - configurable: Can the descriptor be changed or property deleted?

// Example with different descriptor settings
const config = {};

Object.defineProperty(config, 'apiKey', {
  value: 'secret-key-123',
  writable: false,      // Cannot be changed
  enumerable: false,    // Won't appear in Object.keys()
  configurable: false   // Cannot be reconfigured or deleted
});

console.log(config.apiKey);           // "secret-key-123"
console.log(Object.keys(config));     // []

// Trying to change the value (will fail silently in strict mode)
config.apiKey = 'new-key';
console.log(config.apiKey);           // Still "secret-key-123"

// Trying to delete (will fail)
delete config.apiKey;
console.log(config.apiKey);           // Still "secret-key-123" (in non-strict mode)`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Creating Properties with Descriptors</h3>
          <p className="text-slate-700 mb-4">
            Object.defineProperty() allows fine-grained control over property behavior.
          </p>

          <CodeExample
            title="Advanced Property Definition with Descriptors"
            code={`// Creating read-only properties
const constants = {};

Object.defineProperty(constants, 'PI', {
  value: 3.14159,
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(constants, 'E', {
  value: 2.71828,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(constants.PI);     // 3.14159
console.log(Object.keys(constants)); // ['PI', 'E']

// Attempting to change (fails silently)
constants.PI = 3.14;
console.log(constants.PI);     // Still 3.14159

// Creating computed properties with getters/setters
const rectangle = {
  _width: 10,
  _height: 20
};

Object.defineProperty(rectangle, 'width', {
  get() {
    console.log('Getting width');
    return this._width;
  },
  set(value) {
    console.log('Setting width to', value);
    if (value > 0) {
      this._width = value;
    } else {
      throw new Error('Width must be positive');
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(rectangle, 'height', {
  get() {
    console.log('Getting height');
    return this._height;
  },
  set(value) {
    console.log('Setting height to', value);
    if (value > 0) {
      this._height = value;
    } else {
      throw new Error('Height must be positive');
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(rectangle, 'area', {
  get() {
    return this._width * this._height;
  },
  enumerable: true,
  configurable: false
});

console.log(rectangle.width);   // Getting width \n 10
console.log(rectangle.area);    // 200

rectangle.width = 15;           // Setting width to 15
console.log(rectangle.area);    // 300

// Creating non-enumerable properties (like built-in methods)
const utils = {};

Object.defineProperty(utils, 'version', {
  value: '1.0.0',
  writable: false,
  enumerable: false,  // Won't show up in iterations
  configurable: false
});

Object.defineProperty(utils, 'internalId', {
  value: Symbol('utils-id'),
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(utils.version);           // "1.0.0"
console.log(Object.keys(utils));      // []

// But we can still access it
console.log(utils.hasOwnProperty('version')); // true

// Multiple property definition
const config = {};

Object.defineProperties(config, {
  'apiUrl': {
    value: 'https://api.example.com',
    writable: true,
    enumerable: true,
    configurable: false
  },
  'timeout': {
    value: 5000,
    writable: true,
    enumerable: true,
    configurable: true
  },
  'debug': {
    value: false,
    writable: true,
    enumerable: false,  // Hidden from enumeration
    configurable: true
  }
});

console.log(Object.keys(config));  // ['apiUrl', 'timeout']
console.log(config.debug);         // false (but not in keys)`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Descriptor Use Cases</h3>
          <p className="text-slate-700 mb-4">
            Property descriptors enable powerful patterns for data management and API design.
          </p>

          <CodeExample
            title="Practical Property Descriptor Patterns"
            code={`// 1. Immutable configuration object
function createConfig(initialConfig) {
  const config = {};

  Object.keys(initialConfig).forEach(key => {
    Object.defineProperty(config, key, {
      value: initialConfig[key],
      writable: false,
      enumerable: true,
      configurable: false
    });
  });

  return config;
}

const appConfig = createConfig({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3
});

console.log(appConfig.apiUrl); // "https://api.example.com"
// appConfig.apiUrl = 'new-url'; // Would fail

// 2. Reactive properties (simple observer pattern)
function createReactiveObject(target) {
  const handlers = new Map();

  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      const oldValue = obj[prop];
      obj[prop] = value;

      // Notify subscribers
      const handler = handlers.get(prop);
      if (handler) {
        handler(value, oldValue, prop);
      }

      return true;
    }
  });

  proxy.subscribe = function(prop, callback) {
    handlers.set(prop, callback);
  };

  return proxy;
}

const reactiveUser = createReactiveObject({
  name: 'John',
  age: 30
});

reactiveUser.subscribe('age', (newValue, oldValue, prop) => {
  console.log(\`\${prop} changed from \${oldValue} to \${newValue}\`);
});

reactiveUser.age = 31; // "age changed from 30 to 31"

// 3. Lazy loading properties
function createLazyObject(loader) {
  const cache = new Map();

  return new Proxy({}, {
    get(target, prop) {
      if (!cache.has(prop)) {
        console.log(\`Loading \${prop}...\`);
        cache.set(prop, loader(prop));
      }
      return cache.get(prop);
    }
  });
}

const lazyData = createLazyObject((key) => {
  // Simulate expensive operation
  return \`Loaded data for \${key}: \${Math.random()}\`;
});

console.log(lazyData.users);    // "Loading users..." then "Loaded data for users: 0.123..."
console.log(lazyData.users);    // Returns cached value without loading
console.log(lazyData.posts);    // "Loading posts..." then new data

// 4. Property validation
function createValidatedObject(schema) {
  const obj = {};

  Object.keys(schema).forEach(key => {
    const validator = schema[key];

    Object.defineProperty(obj, key, {
      get() {
        return obj[\`_\${key}\`];
      },
      set(value) {
        if (validator(value)) {
          obj[\`_\${key}\`] = value;
        } else {
          throw new Error(\`Invalid value for \${key}: \${value}\`);
        }
      },
      enumerable: true,
      configurable: true
    });
  });

  return obj;
}

const person = createValidatedObject({
  name: (value) => typeof value === 'string' && value.length > 0,
  age: (value) => typeof value === 'number' && value >= 0 && value <= 150,
  email: (value) => typeof value === 'string' && value.includes('@')
});

person.name = 'John';      // OK
person.age = 30;           // OK
person.email = 'john@example.com'; // OK

// person.age = -5;        // Error: Invalid value for age: -5
// person.name = '';       // Error: Invalid value for name:

console.log(person); // { name: 'John', age: 30, email: 'john@example.com' }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Property Enumeration and Iteration</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Enumeration Methods</h3>
          <p className="text-slate-700 mb-4">
            Different methods enumerate properties in various ways, affecting which properties are included.
          </p>

          <CodeExample
            title="Property Enumeration Methods Comparison"
            code={`const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Add non-enumerable property
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false
});

// Add symbol property
const symbolKey = Symbol('symbolProp');
obj[symbolKey] = 'symbol value';

// 1. Object.keys() - only enumerable string properties
console.log(Object.keys(obj)); // ['name', 'age', 'city']

// 2. Object.values() - values of enumerable string properties
console.log(Object.values(obj)); // ['John', 30, 'New York']

// 3. Object.entries() - [key, value] pairs of enumerable string properties
console.log(Object.entries(obj)); // [['name', 'John'], ['age', 30], ['city', 'New York']]

// 4. for...in loop - enumerable string properties (including prototype chain)
console.log('for...in:');
for (const key in obj) {
  console.log(\`\${key}: \${obj[key]}\`);
}
// Output:
// name: John
// age: 30
// city: New York

// 5. Object.getOwnPropertyNames() - all own string properties (enumerable or not)
console.log(Object.getOwnPropertyNames(obj)); // ['name', 'age', 'city', 'hidden']

// 6. Object.getOwnPropertySymbols() - all own symbol properties
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(symbolProp)]

// 7. Reflect.ownKeys() - all own properties (string and symbol)
console.log(Reflect.ownKeys(obj)); // ['name', 'age', 'city', 'hidden', Symbol(symbolProp)]

// Practical example: comprehensive property iteration
function getAllProperties(obj) {
  const result = {
    enumerable: [],
    nonEnumerable: [],
    symbols: [],
    inherited: []
  };

  // Get own properties
  const ownKeys = Reflect.ownKeys(obj);
  ownKeys.forEach(key => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (typeof key === 'symbol') {
      result.symbols.push({ key, value: obj[key], descriptor });
    } else if (descriptor.enumerable) {
      result.enumerable.push({ key, value: obj[key], descriptor });
    } else {
      result.nonEnumerable.push({ key, value: obj[key], descriptor });
    }
  });

  // Get inherited enumerable properties
  for (const key in obj) {
    if (!ownKeys.includes(key)) {
      result.inherited.push({ key, value: obj[key] });
    }
  }

  return result;
}

const analysis = getAllProperties(obj);
console.log('Analysis:', analysis);
// {
//   enumerable: [
//     { key: 'name', value: 'John', descriptor: {...} },
//     { key: 'age', value: '30', descriptor: {...} },
//     { key: 'city', value: 'New York', descriptor: {...} }
//   ],
//   nonEnumerable: [
//     { key: 'hidden', value: 'secret', descriptor: {...} }
//   ],
//   symbols: [
//     { key: Symbol(symbolProp), value: 'symbol value', descriptor: {...} }
//   ],
//   inherited: [] (assuming no inherited properties)
// }`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Advanced Property Iteration Patterns</h3>
          <p className="text-slate-700 mb-4">
            Mastering property iteration enables powerful data processing and transformation patterns.
          </p>

          <CodeExample
            title="Advanced Property Iteration Techniques"
            code={`// 1. Safe property iteration with error handling
function safeIterate(obj, callback) {
  try {
    const keys = Object.keys(obj);
    for (const key of keys) {
      try {
        callback(key, obj[key], obj);
      } catch (error) {
        console.warn(\`Error processing property \${key}:\`, error);
      }
    }
  } catch (error) {
    console.error('Error during iteration:', error);
  }
}

const data = {
  name: 'John',
  age: 30,
  settings: { theme: 'dark' },
  processData: function() { return 'processed'; }
};

safeIterate(data, (key, value) => {
  if (typeof value === 'function') {
    console.log(\`\${key} is a function\`);
  } else {
    console.log(\`\${key}: \${JSON.stringify(value)}\`);
  }
});

// 2. Deep property iteration
function deepIterate(obj, callback, path = []) {
  Object.keys(obj).forEach(key => {
    const currentPath = [...path, key];
    const value = obj[key];

    callback(key, value, currentPath.join('.'), obj);

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      deepIterate(value, callback, currentPath);
    }
  });
}

const nestedObj = {
  user: {
    profile: {
      name: 'John',
      age: 30,
      preferences: {
        theme: 'dark',
        notifications: true
      }
    },
    settings: {
      privacy: 'public'
    }
  },
  metadata: {
    version: '1.0'
  }
};

deepIterate(nestedObj, (key, value, path) => {
  console.log(\`\${path}: \${value}\`);
});
// Output:
// user: [object Object]
// user.profile: [object Object]
// user.profile.name: John
// user.profile.age: 30
// user.profile.preferences: [object Object]
// user.profile.preferences.theme: dark
// user.profile.preferences.notifications: true
// user.settings: [object Object]
// user.settings.privacy: public
// metadata: [object Object]
// metadata.version: 1.0

// 3. Property filtering and transformation
function filterProperties(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(key, value))
  );
}

function transformProperties(obj, transformer) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => transformer(key, value))
  );
}

const sampleData = {
  id: 123,
  name: 'John Doe',
  email: 'john@example.com',
  password: 'secret123',
  createdAt: '2024-01-01',
  isActive: true,
  tags: ['user', 'premium']
};

// Filter out sensitive properties
const publicData = filterProperties(sampleData,
  (key, value) => !['password', 'email'].includes(key)
);
console.log(publicData);
// { id: 123, name: 'John Doe', createdAt: '2024-01-01', isActive: true, tags: [...] }

// Transform property names to camelCase
const camelCaseData = transformProperties(sampleData,
  (key, value) => [key.replace(/([A-Z])/g, '_$1').toLowerCase(), value]
);
console.log(camelCaseData);
// { id: 123, name: 'john doe', email: 'john@example.com', ... }

// 4. Property statistics and analysis
function analyzeObject(obj) {
  const stats = {
    totalProperties: 0,
    enumerableProperties: 0,
    nonEnumerableProperties: 0,
    symbolProperties: 0,
    methodCount: 0,
    primitiveCount: 0,
    objectCount: 0,
    arrayCount: 0,
    nullUndefinedCount: 0,
    propertyTypes: {},
    propertyNameLengths: []
  };

  const allKeys = Reflect.ownKeys(obj);

  allKeys.forEach(key => {
    stats.totalProperties++;

    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    const value = obj[key];

    if (typeof key === 'symbol') {
      stats.symbolProperties++;
    } else if (descriptor.enumerable) {
      stats.enumerableProperties++;
    } else {
      stats.nonEnumerableProperties++;
    }

    if (typeof value === 'function') {
      stats.methodCount++;
    } else if (value === null || value === undefined) {
      stats.nullUndefinedCount++;
    } else if (Array.isArray(value)) {
      stats.arrayCount++;
    } else if (typeof value === 'object') {
      stats.objectCount++;
    } else {
      stats.primitiveCount++;
    }

    const type = typeof value;
    stats.propertyTypes[type] = (stats.propertyTypes[type] || 0) + 1;

    if (typeof key === 'string') {
      stats.propertyNameLengths.push(key.length);
    }
  });

  return stats;
}

const complexObj = {
  id: 123,
  name: 'Test Object',
  data: [1, 2, 3],
  config: { enabled: true },
  process: function() { return 'done'; },
  [Symbol('meta')]: 'symbol data'
};

Object.defineProperty(complexObj, 'hidden', {
  value: 'secret',
  enumerable: false
});

const stats = analyzeObject(complexObj);
console.log('Object Analysis:', stats);
// {
//   totalProperties: 7,
//   enumerableProperties: 5,
//   nonEnumerableProperties: 1,
//   symbolProperties: 1,
//   methodCount: 1,
//   primitiveCount: 2,
//   objectCount: 2,
//   arrayCount: 1,
//   nullUndefinedCount: 0,
//   propertyTypes: { number: 1, string: 2, object: 2, function: 1 },
//   propertyNameLengths: [2, 4, 4, 6, 7, 6]
// }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">5. Property Inheritance and Prototypes</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Prototype Chain Property Access</h3>
          <p className="text-slate-700 mb-4">
            Understanding how property access works with the prototype chain is crucial for effective object-oriented programming.
          </p>

          <CodeExample
            title="Prototype Chain Property Access"
            code={`// Creating a prototype chain
const animal = {
  type: 'animal',
  speak() {
    return 'Some sound';
  }
};

const dog = Object.create(animal);
dog.name = 'Buddy';
dog.breed = 'Golden Retriever';
dog.speak = function() {
  return 'Woof!';
};

const puppy = Object.create(dog);
puppy.age = 3;

// Property access through prototype chain
console.log(puppy.name);     // "Buddy" (from dog)
console.log(puppy.breed);    // "Golden Retriever" (from dog)
console.log(puppy.type);     // "animal" (from animal)
console.log(puppy.age);      // 3 (own property)

console.log(puppy.speak());  // "Woof!" (overridden in dog)
console.log(puppy.hasOwnProperty('name'));     // true
console.log(puppy.hasOwnProperty('type'));     // false (inherited)

// Checking property ownership
function getPropertyInfo(obj, prop) {
  const hasOwn = obj.hasOwnProperty(prop);
  const inPrototype = prop in obj && !hasOwn;
  const descriptor = hasOwn ? Object.getOwnPropertyDescriptor(obj, prop) : null;

  return {
    property: prop,
    hasOwnProperty: hasOwn,
    inherited: inPrototype,
    descriptor: descriptor,
    value: obj[prop]
  };
}

console.log(getPropertyInfo(puppy, 'name'));
// { property: 'name', hasOwnProperty: true, inherited: false, descriptor: {...}, value: 'Buddy' }

console.log(getPropertyInfo(puppy, 'type'));
// { property: 'type', hasOwnProperty: false, inherited: true, descriptor: null, value: 'animal' }

// Property shadowing
const parent = {
  value: 10,
  getValue() {
    return this.value;
  }
};

const child = Object.create(parent);
child.value = 20;  // Shadows parent's value property

console.log(child.value);        // 20 (own property)
console.log(child.getValue());   // 20 (method from parent, but this.value refers to child's value)
console.log(parent.value);       // 10 (unchanged)

// Deleting shadowed properties
delete child.value;
console.log(child.value);        // 10 (now accessing parent's property)

// Prototype property enumeration
console.log('Own properties:', Object.keys(child));        // ['value']
console.log('All enumerable:', Object.keys(child.__proto__)); // ['value', 'getValue']

// Getting the prototype
console.log(Object.getPrototypeOf(child) === parent);      // true
console.log(child.__proto__ === parent);                   // true (non-standard, but works)

// Setting prototype (not recommended for performance)
const newParent = { newProp: 'new value' };
Object.setPrototypeOf(child, newParent);
console.log(child.newProp);  // "new value"
console.log(child.value);    // undefined (lost connection to old prototype)`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Access Optimization</h3>
          <p className="text-slate-700 mb-4">
            Understanding prototype chain performance and optimization techniques.
          </p>

          <CodeExample
            title="Prototype Chain Performance and Optimization"
            code={`// Performance comparison: own vs inherited properties
const baseObj = {
  inheritedProp: 'inherited',
  inheritedMethod() {
    return 'inherited result';
  }
};

const childObj = Object.create(baseObj);
childObj.ownProp = 'own';

// Measure access time for inherited property
console.time('inherited-property-access');
for (let i = 0; i < 1000000; i++) {
  const value = childObj.inheritedProp;
}
console.timeEnd('inherited-property-access');

// Measure access time for own property
console.time('own-property-access');
for (let i = 0; i < 1000000; i++) {
  const value = childObj.ownProp;
}
console.timeEnd('own-property-access');

// Results: Own properties are slightly faster than inherited ones

// Property access caching for performance
function createPropertyCache(obj) {
  const cache = new Map();

  return new Proxy(obj, {
    get(target, prop) {
      if (!cache.has(prop)) {
        let current = target;
        let value;
        let found = false;

        // Walk the prototype chain
        while (current && !found) {
          if (current.hasOwnProperty(prop)) {
            value = current[prop];
            found = true;
          }
          current = Object.getPrototypeOf(current);
        }

        cache.set(prop, { value, found });
      }

      return cache.get(prop).value;
    }
  });
}

const cachedObj = createPropertyCache(childObj);
console.log(cachedObj.inheritedProp); // First access: walks prototype chain
console.log(cachedObj.inheritedProp); // Second access: uses cache

// Optimizing property access in hot code paths
function optimizedPropertyAccess(obj, prop) {
  // Check if property exists in object or its prototype chain
  if (prop in obj) {
    // For known properties, use direct access
    return obj[prop];
  }

  // For dynamic properties, use more expensive lookup
  return obj[prop];
}

// Property access patterns for different scenarios
const scenarios = {
  // Scenario 1: Known property structure
  staticAccess(obj) {
    return obj.name + ' ' + obj.age; // Fast: direct property access
  },

  // Scenario 2: Dynamic property access
  dynamicAccess(obj, prop) {
    return obj[prop]; // Slower: bracket notation with variable
  },

  // Scenario 3: Safe property access with optional chaining
  safeAccess(obj) {
    return obj?.user?.profile?.name ?? 'Unknown'; // Modern approach
  },

  // Scenario 4: Cached property access for repeated access
  cachedAccess(obj) {
    const cache = {};
    return function(prop) {
      if (!(prop in cache)) {
        cache[prop] = obj[prop];
      }
      return cache[prop];
    };
  }
};

// Usage examples
const testObj = {
  name: 'John',
  age: 30,
  user: {
    profile: {
      name: 'Jane'
    }
  }
};

console.log(scenarios.staticAccess(testObj));   // "John 30"
console.log(scenarios.dynamicAccess(testObj, 'name')); // "John"
console.log(scenarios.safeAccess(testObj));     // "Jane"

const cachedGetter = scenarios.cachedAccess(testObj);
console.log(cachedGetter('name'));  // "John" (first access)
console.log(cachedGetter('name'));  // "John" (cached access)

// Property access in different contexts
const PropertyAccessor = {
  // Direct property access
  direct(obj, prop) {
    return obj[prop];
  },

  // Safe property access with fallbacks
  safe(obj, prop, fallback = undefined) {
    try {
      const value = obj[prop];
      return value !== undefined ? value : fallback;
    } catch {
      return fallback;
    }
  },

  // Deep property access
  deep(obj, path, fallback = undefined) {
    try {
      return path.split('.').reduce((current, key) => {
        if (current && typeof current === 'object') {
          return current[key];
        }
        throw new Error('Invalid path');
      }, obj);
    } catch {
      return fallback;
    }
  },

  // Typed property access
  typed(obj, prop, type, fallback = undefined) {
    const value = obj[prop];
    return typeof value === type ? value : fallback;
  }
};

// Usage
const data = {
  user: {
    profile: {
      name: 'John',
      age: 30
    }
  },
  settings: {
    theme: 'dark'
  }
};

console.log(PropertyAccessor.direct(data, 'settings'));        // { theme: 'dark' }
console.log(PropertyAccessor.safe(data, 'missing', 'default')); // "default"
console.log(PropertyAccessor.deep(data, 'user.profile.name'));  // "John"
console.log(PropertyAccessor.typed(data, 'user', 'object'));    // { profile: {...} }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">6. Advanced Property Patterns</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Getters and Setters</h3>
          <p className="text-slate-700 mb-4">
            Getters and setters provide computed properties and validation capabilities.
          </p>

          <CodeExample
            title="Advanced Getters and Setters Patterns"
            code={`// 1. Computed properties with getters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  get diagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }

  // Setter with validation
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      throw new Error('Width must be positive');
    }
  }

  get width() {
    return this._width;
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      throw new Error('Height must be positive');
    }
  }

  get height() {
    return this._height;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area);      // 200
console.log(rect.perimeter); // 60
console.log(rect.diagonal);  // 22.360679774997898

rect.width = 15;
console.log(rect.area);      // 300

// 2. Data binding with getters/setters
function createObservable(target) {
  const observers = new Map();

  return new Proxy(target, {
    get(obj, prop) {
      // Track property access for dependency tracking
      console.log(\`Accessing \${prop}\`);
      return obj[prop];
    },

    set(obj, prop, value) {
      const oldValue = obj[prop];
      obj[prop] = value;

      // Notify observers
      const observer = observers.get(prop);
      if (observer) {
        observer.forEach(callback => callback(value, oldValue, prop));
      }

      return true;
    }
  });
}

function observe(obj, prop, callback) {
  if (!obj._observers) {
    obj._observers = new Map();
  }
  if (!obj._observers.has(prop)) {
    obj._observers.set(prop, []);
  }
  obj._observers.get(prop).push(callback);
}

const observable = createObservable({ count: 0, name: 'Test' });

observe(observable, 'count', (newVal, oldVal) => {
  console.log(\`Count changed from \${oldVal} to \${newVal}\`);
});

observable.count = 5; // "Accessing count" then "Count changed from 0 to 5"

// 3. Lazy evaluation with getters
class LazyCalculator {
  constructor() {
    this._cache = new Map();
  }

  get expensiveComputation() {
    if (!this._cache.has('expensiveComputation')) {
      console.log('Performing expensive computation...');
      // Simulate expensive operation
      const result = Array.from({ length: 1000000 }, (_, i) => i)
        .reduce((sum, num) => sum + num, 0);
      this._cache.set('expensiveComputation', result);
    }
    return this._cache.get('expensiveComputation');
  }

  clearCache() {
    this._cache.clear();
  }
}

const calc = new LazyCalculator();
console.log(calc.expensiveComputation); // First access: computes
console.log(calc.expensiveComputation); // Second access: uses cache

// 4. Property validation and transformation
function createValidatedObject(schema) {
  const obj = {};

  Object.keys(schema).forEach(key => {
    const config = schema[key];
    const privateKey = \`_\${key}\`;

    Object.defineProperty(obj, key, {
      get() {
        return obj[privateKey];
      },
      set(value) {
        // Apply transformation
        if (config.transform) {
          value = config.transform(value);
        }

        // Apply validation
        if (config.validate && !config.validate(value)) {
          throw new Error(\`Invalid value for \${key}: \${value}\`);
        }

        obj[privateKey] = value;

        // Trigger callback if provided
        if (config.onChange) {
          config.onChange(value, obj[privateKey]);
        }
      },
      enumerable: true,
      configurable: true
    });
  });

  return obj;
}

const user = createValidatedObject({
  name: {
    validate: (value) => typeof value === 'string' && value.length > 0,
    transform: (value) => value.trim()
  },
  age: {
    validate: (value) => typeof value === 'number' && value >= 0 && value <= 150,
    onChange: (newVal) => console.log(\`Age changed to: \${newVal}\`)
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    transform: (value) => value.toLowerCase().trim()
  }
});

user.name = '  John Doe  ';  // Trimmed automatically
user.age = 30;               // Triggers onChange callback
user.email = 'JOHN@EXAMPLE.COM'; // Lowercased and validated

console.log(user.name);   // "John Doe"
console.log(user.email);  // "john@example.com"`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Privacy and Encapsulation</h3>
          <p className="text-slate-700 mb-4">
            Creating private properties and methods for better encapsulation.
          </p>

          <CodeExample
            title="Property Privacy and Encapsulation Techniques"
            code={`// 1. Using closures for private properties
function createCounter() {
  let _count = 0; // Private variable

  return {
    increment() {
      _count++;
      return _count;
    },
    decrement() {
      _count--;
      return _count;
    },
    getCount() {
      return _count;
    },
    // No direct access to _count
  };
}

const counter = createCounter();
console.log(counter.getCount());  // 0
counter.increment();
counter.increment();
console.log(counter.getCount());  // 2
// counter._count = 100; // Would create a new property, not affect private _count

// 2. Using Symbols for private properties
const PRIVATE_PROPS = {
  count: Symbol('count'),
  data: Symbol('data')
};

class PrivateCounter {
  constructor() {
    this[PRIVATE_PROPS.count] = 0;
  }

  increment() {
    this[PRIVATE_PROPS.count]++;
    return this[PRIVATE_PROPS.count];
  }

  getCount() {
    return this[PRIVATE_PROPS.count];
  }
}

const privateCounter = new PrivateCounter();
console.log(privateCounter.getCount()); // 0
privateCounter.increment();
console.log(privateCounter.getCount()); // 1

// Symbols are not accessible without the symbol reference
console.log(Object.keys(privateCounter)); // []
console.log(privateCounter.count); // undefined

// 3. Using WeakMap for truly private data
const privateData = new WeakMap();

class SecureAccount {
  constructor(balance = 0) {
    privateData.set(this, { balance });
  }

  deposit(amount) {
    const data = privateData.get(this);
    if (amount > 0) {
      data.balance += amount;
    }
  }

  withdraw(amount) {
    const data = privateData.get(this);
    if (amount > 0 && amount <= data.balance) {
      data.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return privateData.get(this).balance;
  }
}

const account = new SecureAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(200);
console.log(account.getBalance()); // 1300

// No way to access private data
console.log(Object.keys(account)); // []
console.log(account.balance); // undefined

// 4. Property freezing and sealing
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  debug: false
};

// Object.freeze() - prevents adding/removing/changing properties
Object.freeze(config);
// config.newProp = 'test'; // Fails silently
// config.apiUrl = 'new-url'; // Fails silently
// delete config.timeout; // Fails silently

console.log(Object.isFrozen(config)); // true

// Object.seal() - prevents adding/removing properties but allows changes
const settings = {
  theme: 'dark',
  language: 'en'
};

Object.seal(settings);
settings.theme = 'light'; // OK
// settings.newSetting = 'test'; // Fails
// delete settings.language; // Fails

console.log(Object.isSealed(settings)); // true

// Deep freezing for nested objects
function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

const nestedConfig = {
  api: {
    url: 'https://api.example.com',
    timeout: 5000
  },
  ui: {
    theme: 'dark'
  }
};

deepFreeze(nestedConfig);
// nestedConfig.api.url = 'new-url'; // Fails
// nestedConfig.ui.newProp = 'test'; // Fails

console.log(Object.isFrozen(nestedConfig)); // true
console.log(Object.isFrozen(nestedConfig.api)); // true

// 5. Property existence and type checking
function analyzeProperty(obj, prop) {
  const analysis = {
    exists: prop in obj,
    hasOwn: obj.hasOwnProperty(prop),
    value: obj[prop],
    type: typeof obj[prop],
    constructor: obj[prop]?.constructor?.name,
    enumerable: false,
    writable: false,
    configurable: false
  };

  if (analysis.hasOwn) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    analysis.enumerable = descriptor.enumerable;
    analysis.writable = descriptor.writable;
    analysis.configurable = descriptor.configurable;
  }

  return analysis;
}

const testObj = {
  name: 'Test',
  count: 42,
  data: [1, 2, 3]
};

Object.defineProperty(testObj, 'hidden', {
  value: 'secret',
  enumerable: false
});

console.log(analyzeProperty(testObj, 'name'));
// {
//   exists: true,
//   hasOwn: true,
//   value: 'Test',
//   type: 'string',
//   constructor: 'String',
//   enumerable: true,
//   writable: true,
//   configurable: true
// }

console.log(analyzeProperty(testObj, 'hidden'));
// {
//   exists: true,
//   hasOwn: true,
//   value: 'secret',
//   type: 'string',
//   constructor: 'String',
//   enumerable: false,
//   writable: false,
//   configurable: false
// }

console.log(analyzeProperty(testObj, 'nonexistent'));
// {
//   exists: false,
//   hasOwn: false,
//   value: undefined,
//   type: 'undefined',
//   constructor: undefined,
//   enumerable: false,
//   writable: false,
//   configurable: false
// }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">7. Performance Considerations</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Access Optimization</h3>
          <p className="text-slate-700 mb-4">
            Optimizing property access patterns for better performance in critical code paths.
          </p>

          <CodeExample
            title="Property Access Performance Optimization"
            code={`// 1. Property access caching
function createPropertyCache(obj) {
  const cache = new Map();

  return new Proxy(obj, {
    get(target, prop) {
      if (!cache.has(prop)) {
        cache.set(prop, target[prop]);
      }
      return cache.get(prop);
    },
    set(target, prop, value) {
      cache.set(prop, value);
      target[prop] = value;
      return true;
    }
  });
}

const cachedObj = createPropertyCache({
  a: 1, b: 2, c: 3, d: 4, e: 5
});

// First access caches, subsequent accesses are faster
console.time('cached-access');
for (let i = 0; i < 100000; i++) {
  const sum = cachedObj.a + cachedObj.b + cachedObj.c;
}
console.timeEnd('cached-access');

// 2. Avoiding repeated property lookups
function processUser(user) {
  // Bad: repeated property access
  if (user.profile && user.profile.name && user.profile.age > 18) {
    return user.profile.name.toUpperCase();
  }
  return null;
}

function processUserOptimized(user) {
  // Good: cache property lookups
  const profile = user.profile;
  if (profile && profile.name && profile.age > 18) {
    return profile.name.toUpperCase();
  }
  return null;
}

// 3. Property existence checking performance
const testObj = { a: 1, b: 2, c: undefined };

// Different ways to check property existence
console.time('in-operator');
for (let i = 0; i < 1000000; i++) {
  const exists = 'a' in testObj;
}
console.timeEnd('in-operator');

console.time('hasOwnProperty');
for (let i = 0; i < 1000000; i++) {
  const exists = testObj.hasOwnProperty('a');
}
console.timeEnd('hasOwnProperty');

console.time('undefined-check');
for (let i = 0; i < 1000000; i++) {
  const exists = testObj.a !== undefined;
}
console.timeEnd('undefined-check');

// Results: 'in' operator is fastest, hasOwnProperty is slowest

// 4. Optimizing object property access in loops
const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: \`Item \${i}\`,
  value: Math.random()
}));

// Bad: repeated property access in loop
console.time('slow-loop');
const slowResults = data.map(item => ({
  id: item.id,
  displayName: item.name.toUpperCase(),
  computedValue: item.value * 2
}));
console.timeEnd('slow-loop');

// Good: destructure in loop for better performance
console.time('fast-loop');
const fastResults = data.map(({ id, name, value }) => ({
  id,
  displayName: name.toUpperCase(),
  computedValue: value * 2
}));
console.timeEnd('fast-loop');

// 5. Property access patterns for large objects
function createLargeObject(size) {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[\`prop\${i}\`] = Math.random();
  }
  return obj;
}

const largeObj = createLargeObject(10000);

// Method 1: Direct property access
console.time('direct-access');
for (let i = 0; i < 1000; i++) {
  const value = largeObj[\`prop\${i}\`];
}
console.timeEnd('direct-access');

// Method 2: Cached property access
console.time('cached-access-large');
const cachedProps = {};
for (let i = 0; i < 1000; i++) {
  const key = \`prop\${i}\`;
  if (!(key in cachedProps)) {
    cachedProps[key] = largeObj[key];
  }
  const value = cachedProps[key];
}
console.timeEnd('cached-access-large');

// 6. Memory-efficient property storage
class MemoryEfficientStorage {
  constructor() {
    this._data = new Map();
    this._metadata = new WeakMap();
  }

  set(key, value, options = {}) {
    this._data.set(key, value);

    if (options.expires || options.tags) {
      this._metadata.set(key, {
        expires: options.expires,
        tags: options.tags,
        created: Date.now()
      });
    }
  }

  get(key) {
    const metadata = this._metadata.get(key);

    if (metadata?.expires && Date.now() > metadata.expires) {
      this.delete(key);
      return undefined;
    }

    return this._data.get(key);
  }

  delete(key) {
    this._data.delete(key);
    this._metadata.delete(key);
  }

  clearExpired() {
    const now = Date.now();
    for (const [key, metadata] of this._metadata) {
      if (metadata.expires && now > metadata.expires) {
        this.delete(key);
      }
    }
  }
}

const storage = new MemoryEfficientStorage();

// Store with expiration
storage.set('tempData', 'expires soon', {
  expires: Date.now() + 5000, // 5 seconds
  tags: ['temporary', 'cache']
});

console.log(storage.get('tempData')); // "expires soon"
// After 5 seconds: undefined

// 7. Property access monitoring and profiling
function createProfiledObject(obj) {
  const accessCounts = new Map();
  const accessTimes = new Map();

  return new Proxy(obj, {
    get(target, prop) {
      const start = performance.now();

      accessCounts.set(prop, (accessCounts.get(prop) || 0) + 1);

      const value = target[prop];

      const end = performance.now();
      accessTimes.set(prop, (accessTimes.get(prop) || 0) + (end - start));

      return value;
    }
  });
}

const profiledObj = createProfiledObject({
  a: 1, b: 2, c: 3, d: 4, e: 5
});

// Access properties multiple times
for (let i = 0; i < 100; i++) {
  const value = profiledObj.a + profiledObj.b + profiledObj.c;
}

// Get access statistics
console.log('Access counts:', Object.fromEntries(accessCounts));
console.log('Access times:', Object.fromEntries(accessTimes));

// 8. Optimizing property access in V8
// V8 optimizes objects with consistent property order
const optimizedObj = {
  id: 1,
  name: 'Optimized',
  value: 100,
  active: true
};

// Avoid adding properties dynamically in performance-critical code
// Instead, pre-allocate all properties

// Bad: Dynamic property addition
const badObj = {};
for (let i = 0; i < 100; i++) {
  badObj[\`prop\${i}\`] = i;
}

// Good: Pre-allocated properties
const goodObj = {};
const propNames = Array.from({ length: 100 }, (_, i) => \`prop\${i}\`);
propNames.forEach(prop => {
  goodObj[prop] = undefined; // Pre-allocate
});
for (let i = 0; i < 100; i++) {
  goodObj[\`prop\${i}\`] = i;
}

// Using Object.create for prototype optimization
const prototype = {
  sharedMethod() {
    return 'shared';
  }
};

const instance1 = Object.create(prototype);
instance1.ownProp = 'instance1';

const instance2 = Object.create(prototype);
instance2.ownProp = 'instance2';

// Both instances share the same prototype method
console.log(instance1.sharedMethod === instance2.sharedMethod); // true`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">8. Best Practices and Common Patterns</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Property Access Best Practices</h3>
          <p className="text-slate-700 mb-4">
            Following best practices ensures maintainable and performant code.
          </p>

          <CodeExample
            title="Property Access Best Practices"
            code={`// 1. Use const for object properties when possible
const config = {
  readonly: 'value',
  apiUrl: 'https://api.example.com'
};

// For mutable objects, use Object.freeze for immutability
const immutableConfig = Object.freeze({
  apiUrl: 'https://api.example.com',
  timeout: 5000
});

// 2. Prefer dot notation for known properties
const user = { name: 'John', age: 30 };
console.log(user.name); // Preferred
console.log(user['name']); // Acceptable but less readable

// Use bracket notation for dynamic properties
const prop = 'name';
console.log(user[prop]); // Correct usage

// 3. Use hasOwnProperty for property existence checks
const obj = { prop: 'value' };
console.log(obj.hasOwnProperty('prop')); // true
console.log(obj.hasOwnProperty('toString')); // false (inherited)

// 4. Use Object.keys/values/entries for iteration
const data = { a: 1, b: 2, c: 3 };

// Instead of for...in (which includes prototype properties)
for (const key in data) {
  if (data.hasOwnProperty(key)) {
    console.log(key, data[key]);
  }
}

// Use Object.keys for cleaner iteration
Object.keys(data).forEach(key => {
  console.log(key, data[key]);
});

// 5. Use destructuring for multiple property access
function processUser(user) {
  const { name, age, email } = user;
  return \`\${name} (\${age}) - \${email}\`;
}

// 6. Use default values in destructuring
function getConfig(options = {}) {
  const {
    apiUrl = 'https://api.example.com',
    timeout = 5000,
    retries = 3
  } = options;

  return { apiUrl, timeout, retries };
}

// 7. Use rest/spread for object manipulation
const original = { a: 1, b: 2, c: 3 };

// Create copy with modifications
const modified = { ...original, c: 30, d: 4 };

// Extract specific properties
const { a, b, ...rest } = original;
console.log(rest); // { c: 3 }

// 8. Use Object.assign for merging (or spread syntax)
const defaults = { theme: 'light', language: 'en' };
const userPrefs = { theme: 'dark' };
const config = Object.assign({}, defaults, userPrefs);

// Modern approach with spread
const modernConfig = { ...defaults, ...userPrefs };

// 9. Use property descriptors for advanced behavior
const smartObj = {};

Object.defineProperty(smartObj, 'computedValue', {
  get() {
    return Math.random();
  },
  enumerable: true
});

console.log(smartObj.computedValue); // Different value each time

// 10. Use Symbols for private properties
const PRIVATE_KEY = Symbol('private');

class PrivateClass {
  constructor() {
    this[PRIVATE_KEY] = 'secret';
  }

  getSecret() {
    return this[PRIVATE_KEY];
  }
}

const instance = new PrivateClass();
console.log(instance.getSecret()); // "secret"
console.log(instance[PRIVATE_KEY]); // "secret" (accessible but "private")

// 11. Use WeakMap for truly private data
const privateStore = new WeakMap();

class TrulyPrivate {
  constructor(secret) {
    privateStore.set(this, { secret });
  }

  getSecret() {
    return privateStore.get(this).secret;
  }
}

const privateInstance = new TrulyPrivate('top secret');
console.log(privateInstance.getSecret()); // "top secret"
// No way to access the secret from outside

// 12. Use Object.freeze/seal for immutability
const constants = Object.freeze({
  PI: 3.14159,
  E: 2.71828,
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER
});

// constants.PI = 3.14; // Fails silently

// 13. Use property existence checks properly
function hasProperty(obj, prop) {
  return obj != null && prop in obj;
}

function hasOwnProperty(obj, prop) {
  return obj != null && obj.hasOwnProperty(prop);
}

// 14. Avoid prototype pollution
const obj = {};
// Don't do this:
obj.__proto__.polluted = true; // Dangerous!

// Instead, use Object.create for inheritance
const parent = { shared: 'value' };
const child = Object.create(parent);
child.own = 'property';

// 15. Use Map for complex key types
const map = new Map();
const objKey = { id: 1 };
map.set(objKey, 'value');
console.log(map.get(objKey)); // "value"

// Regular objects can't use objects as keys
const regularObj = {};
// regularObj[objKey] = 'value'; // Converts to "[object Object]"

// 16. Use Set for unique value collections
const uniqueValues = new Set([1, 2, 2, 3, 3, 3]);
console.log([...uniqueValues]); // [1, 2, 3]

// 17. Prefer for...of over for...in for arrays
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value); // 1, 2, 3
}

// Use for...in for objects
for (const key in obj) {
  console.log(key, obj[key]);
}

// 18. Use Array methods over manual loops when possible
const numbers = [1, 2, 3, 4, 5];

// Instead of:
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// Use:
const doubledModern = numbers.map(n => n * 2);

// 19. Use optional chaining for safe property access
const data = { user: { profile: { name: 'John' } } };
console.log(data.user?.profile?.name); // "John"
console.log(data.admin?.profile?.name); // undefined

// 20. Use nullish coalescing for default values
const config = { timeout: 0 };
const timeout = config.timeout ?? 5000; // 0 (not 5000)
const oldTimeout = config.timeout || 5000; // 5000 (wrong!)

console.log(timeout, oldTimeout);`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-slate-700 mb-4">
            JavaScript object properties are fundamental to effective programming. Understanding property access patterns,
            descriptors, inheritance, and performance optimization enables you to write more robust and efficient code.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-slate-700">
              <li><strong>Dot vs Bracket Notation:</strong> Use dot notation for known properties, bracket notation for dynamic access</li>
              <li><strong>Property Descriptors:</strong> Control property behavior with writable, enumerable, and configurable flags</li>
              <li><strong>Getters/Setters:</strong> Create computed properties and validation logic</li>
              <li><strong>Prototype Chain:</strong> Understand inheritance and property lookup performance</li>
              <li><strong>Performance:</strong> Cache property access, use destructuring, and optimize for V8</li>
              <li><strong>Best Practices:</strong> Use const, Object.freeze, proper enumeration, and safe access patterns</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand object properties, explore related topics:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Object Methods:</strong> Learn about built-in methods like Object.keys(), Object.assign()</li>
              <li><strong>Object Destructuring:</strong> Master ES6 destructuring syntax</li>
              <li><strong>Optional Chaining:</strong> Safe property access with modern syntax</li>
              <li><strong>Property Shorthand:</strong> Concise object property definitions</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}