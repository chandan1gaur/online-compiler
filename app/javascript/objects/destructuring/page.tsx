import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object Destructuring - Complete Guide to Object Unpacking",
  description: "Master JavaScript object destructuring with comprehensive guide covering basic syntax, nested destructuring, default values, rest parameters, and advanced patterns.",
  keywords: [
    "javascript object destructuring",
    "object unpacking",
    "destructuring assignment",
    "es6 destructuring",
    "object destructuring syntax",
    "nested destructuring",
    "default values destructuring",
    "rest parameters objects",
    "destructuring patterns",
    "javascript object patterns"
  ],
  openGraph: {
    title: "JavaScript Object Destructuring - Complete Guide",
    description: "Master JavaScript object destructuring with comprehensive guide covering basic syntax, nested destructuring, default values, rest parameters, and advanced patterns.",
    url: "/javascript/objects/destructuring",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Destructuring Guide",
    description: "Master JavaScript object destructuring with comprehensive guide covering basic syntax, nested destructuring, default values, rest parameters, and advanced patterns.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/destructuring" },
};

const destructuringSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object Destructuring - Complete Guide to Object Unpacking",
  "description": "Master JavaScript object destructuring with comprehensive guide covering basic syntax, nested destructuring, default values, rest parameters, and advanced patterns.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ObjectDestructuringPage() {
  return (
    <>
      <Script id="destructuring-schema" type="application/ld+json">
        {JSON.stringify(destructuringSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object Destructuring: Complete Guide to Object Unpacking
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object destructuring is a powerful JavaScript feature that allows you to extract properties
          from objects and bind them to variables. This syntax provides a clean, readable way to work
          with object properties and is essential for modern JavaScript development.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Basic Object Destructuring</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Basic Syntax and Usage</h3>
          <p className="text-slate-700 mb-4">
            The basic syntax uses curly braces to specify which properties to extract from an object.
          </p>

          <CodeExample
            title="Basic Object Destructuring Syntax"
            code={`// Basic destructuring
const user = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Extract properties into variables
const { name, age, city } = user;

console.log(name); // 'John'
console.log(age);  // 30
console.log(city); // 'New York'

// Equivalent to:
const name2 = user.name;
const age2 = user.age;
const city2 = user.city;

// Destructuring with different variable names
const { name: userName, age: userAge } = user;
console.log(userName); // 'John'
console.log(userAge);  // 30

// Partial destructuring - only extract what you need
const { name: fullName } = user;
console.log(fullName); // 'John'

// Destructuring in function parameters
function greetUser({ name, age }) {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

console.log(greetUser(user)); // 'Hello, John! You are 30 years old.'

// Destructuring with arrays (for comparison)
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // 1 2 3

// Mixed destructuring
const data = {
  user: { name: 'Alice', age: 25 },
  scores: [85, 92, 78]
};

const {
  user: { name: userName2, age: userAge2 },
  scores: [math, science, history]
} = data;

console.log(userName2, userAge2); // 'Alice' 25
console.log(math, science, history); // 85 92 78`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Default Values</h3>
          <p className="text-slate-700 mb-4">
            Provide default values for properties that might be undefined.
          </p>

          <CodeExample
            title="Destructuring with Default Values"
            code={`// Basic default values
const config = { theme: 'dark' };

// Provide defaults for missing properties
const { theme, language = 'en', timeout = 5000 } = config;

console.log(theme);    // 'dark'
console.log(language); // 'en' (default)
console.log(timeout);  // 5000 (default)

// Default values with different variable names
const { theme: selectedTheme = 'light' } = config;
console.log(selectedTheme); // 'dark' (from object)

// Complex default objects
const settings = {};

const {
  user = { name: 'Anonymous', role: 'guest' },
  features = ['basic']
} = settings;

console.log(user.name); // 'Anonymous'
console.log(features);  // ['basic']

// Default values in function parameters
function createUser({
  name = 'User',
  age = 18,
  email,
  active = true
} = {}) {
  return { name, age, email, active };
}

console.log(createUser({ name: 'John', email: 'john@example.com' }));
// { name: 'John', age: 18, email: 'john@example.com', active: true }

console.log(createUser()); // { name: 'User', age: 18, email: undefined, active: true }

// Conditional defaults based on other values
function processData(options = {}) {
  const {
    input,
    output = input ? input.toUpperCase() : 'DEFAULT',
    format = 'text'
  } = options;

  return { input, output, format };
}

console.log(processData({ input: 'hello' }));
// { input: 'hello', output: 'HELLO', format: 'text' }

console.log(processData({}));
// { input: undefined, output: 'DEFAULT', format: 'text' }

// Default values with computed properties
const env = 'development';

const config2 = {
  [env]: {
    debug: true,
    apiUrl: 'http://localhost:3000'
  }
};

const {
  [env]: {
    debug = false,
    apiUrl = 'https://api.example.com',
    timeout = 5000
  } = {}
} = config2;

console.log(debug, apiUrl, timeout); // true 'http://localhost:3000' 5000

// Advanced default patterns
function parseOptions(options = {}) {
  const defaults = {
    method: 'GET',
    headers: {},
    timeout: 30000,
    retries: 0
  };

  // Deep merge defaults
  const merged = {
    ...defaults,
    ...options,
    headers: {
      ...defaults.headers,
      ...options.headers
    }
  };

  return merged;
}

const requestOptions = parseOptions({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
});

console.log(requestOptions);
// {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   timeout: 30000,
//   retries: 0
// }`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Nested Object Destructuring</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Nested Object Patterns</h3>
          <p className="text-slate-700 mb-4">
            Extract properties from nested objects using nested destructuring patterns.
          </p>

          <CodeExample
            title="Nested Object Destructuring"
            code={`// Basic nested destructuring
const user = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
  },
  preferences: {
    theme: 'dark',
    notifications: {
      email: true,
      sms: false
    }
  }
};

// Extract nested properties
const {
  name,
  address: {
    city,
    zipCode
  },
  preferences: {
    theme,
    notifications: {
      email
    }
  }
} = user;

console.log(name);    // 'John Doe'
console.log(city);    // 'New York'
console.log(zipCode); // '10001'
console.log(theme);   // 'dark'
console.log(email);   // true

// Partial nested destructuring
const {
  address: { street }
} = user;
console.log(street); // '123 Main St'

// Nested destructuring with defaults
const config = {
  database: {
    host: 'localhost'
    // port is missing
  }
};

const {
  database: {
    host,
    port = 5432,
    credentials: {
      username = 'admin',
      password = 'secret'
    } = {}
  }
} = config;

console.log(host);     // 'localhost'
console.log(port);     // 5432 (default)
console.log(username); // 'admin' (default)
console.log(password); // 'secret' (default)

// Complex nested structures
const company = {
  name: 'Tech Corp',
  departments: {
    engineering: {
      manager: 'Alice',
      teams: {
        frontend: ['Bob', 'Charlie'],
        backend: ['David', 'Eve']
      }
    },
    sales: {
      manager: 'Frank',
      regions: ['North', 'South']
    }
  }
};

const {
  departments: {
    engineering: {
      teams: {
        frontend: [lead, ...others],
        backend
      }
    },
    sales: {
      regions: [primaryRegion]
    }
  }
} = company;

console.log(lead);          // 'Bob'
console.log(others);        // ['Charlie']
console.log(backend);       // ['David', 'Eve']
console.log(primaryRegion); // 'North'

// API response destructuring
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 123,
      profile: {
        firstName: 'John',
        lastName: 'Doe',
        avatar: {
          url: 'https://example.com/avatar.jpg',
          size: { width: 100, height: 100 }
        }
      }
    },
    posts: [
      { id: 1, title: 'Hello World' },
      { id: 2, title: 'Advanced JS' }
    ]
  }
};

const {
  data: {
    user: {
      profile: {
        firstName,
        lastName,
        avatar: {
          url: avatarUrl,
          size: { width: avatarWidth }
        }
      }
    },
    posts: [firstPost, secondPost]
  }
} = apiResponse;

console.log(firstName);   // 'John'
console.log(avatarUrl);   // 'https://example.com/avatar.jpg'
console.log(avatarWidth); // 100
console.log(firstPost.title); // 'Hello World'

// Error handling with nested destructuring
function safeExtract(obj) {
  const {
    data: {
      user: {
        profile: {
          name = 'Unknown'
        } = {}
      } = {}
    } = {}
  } = obj || {};

  return name;
}

console.log(safeExtract(apiResponse)); // 'John'
console.log(safeExtract(null)); // 'Unknown'
console.log(safeExtract({})); // 'Unknown'

// Destructuring in loops
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'moderator' }
];

for (const { id, name, role } of users) {
  console.log(\`\${name} (\${role}) has ID: \${id}\`);
}

// Destructuring with computed property names
const key = 'dynamicKey';
const obj = {
  [key]: {
    nested: {
      value: 'found it'
    }
  }
};

const { [key]: { nested: { value } } } = obj;
console.log(value); // 'found it'`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Rest and Spread with Destructuring</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Rest Parameters in Destructuring</h3>
          <p className="text-slate-700 mb-4">
            Use rest syntax to collect remaining properties into a new object.
          </p>

          <CodeExample
            title="Rest Parameters in Object Destructuring"
            code={`// Basic rest syntax
const user = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA',
  email: 'john@example.com'
};

// Extract specific properties, rest go into 'other'
const { name, age, ...other } = user;

console.log(name);  // 'John'
console.log(age);   // 30
console.log(other); // { city: 'New York', country: 'USA', email: 'john@example.com' }

// Rest with different variable names
const { name: fullName, ...userInfo } = user;
console.log(fullName); // 'John'
console.log(userInfo); // { age: 30, city: 'New York', country: 'USA', email: 'john@example.com' }

// Selective extraction with rest
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
  debug: true,
  cache: false,
  logLevel: 'info'
};

// Extract important config, rest into 'otherOptions'
const { apiUrl, timeout, ...otherOptions } = config;
console.log(apiUrl); // 'https://api.example.com'
console.log(timeout); // 5000
console.log(otherOptions); // { retries: 3, debug: true, cache: false, logLevel: 'info' }

// Rest in nested destructuring
const data = {
  user: {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  },
  settings: {
    theme: 'dark',
    language: 'en',
    notifications: true
  },
  metadata: {
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15'
  }
};

const {
  user: { name, ...userDetails },
  settings: { theme, ...otherSettings },
  ...rest
} = data;

console.log(name); // 'Alice'
console.log(userDetails); // { age: 25, email: 'alice@example.com' }
console.log(theme); // 'dark'
console.log(otherSettings); // { language: 'en', notifications: true }
console.log(rest); // { metadata: { createdAt: '2024-01-01', updatedAt: '2024-01-15' } }

// Function parameters with rest destructuring
function processUser({ id, name, ...otherProps }) {
  console.log(\`Processing user \${name} with ID \${id}\`);
  return {
    processed: true,
    originalProps: otherProps
  };
}

const user2 = {
  id: 123,
  name: 'Bob',
  age: 30,
  role: 'admin',
  active: true
};

const result = processUser(user2);
console.log(result);
// {
//   processed: true,
//   originalProps: { age: 30, role: 'admin', active: true }
// }

// Rest for excluding properties
function excludeProperties(obj, ...excludeKeys) {
  const { [excludeKeys.join(',')]: excluded, ...rest } = obj;
  return rest;
}

// Better approach for excluding multiple properties
function excludeProps(obj, excludeKeys) {
  const result = { ...obj };
  excludeKeys.forEach(key => delete result[key]);
  return result;
}

const original = { a: 1, b: 2, c: 3, d: 4 };
console.log(excludeProps(original, ['b', 'd'])); // { a: 1, c: 3 }

// Rest with computed property names
const dynamicKey = 'special';
const obj = {
  a: 1,
  b: 2,
  [dynamicKey]: 3,
  c: 4
};

const { [dynamicKey]: special, ...others } = obj;
console.log(special); // 3
console.log(others); // { a: 1, b: 2, c: 4 }

// Advanced rest patterns
function splitObject(obj, keys) {
  const picked = {};
  const rest = { ...obj };

  keys.forEach(key => {
    if (key in obj) {
      picked[key] = obj[key];
      delete rest[key];
    }
  });

  return { picked, rest };
}

const testObj = { x: 1, y: 2, z: 3, w: 4 };
const { picked, rest } = splitObject(testObj, ['x', 'z']);
console.log(picked); // { x: 1, z: 3 }
console.log(rest); // { y: 2, w: 4 }

// Rest in array destructuring (for comparison)
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = numbers;
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]

// Combining object and array destructuring
const complex = {
  items: [1, 2, 3, 4, 5],
  metadata: { total: 5, page: 1 }
};

const {
  items: [head, ...tail],
  metadata: { total, ...otherMeta }
} = complex;

console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
console.log(total); // 5
console.log(otherMeta); // { page: 1 }`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Spread Syntax with Objects</h3>
          <p className="text-slate-700 mb-4">
            Use spread syntax to copy properties and create new objects.
          </p>

          <CodeExample
            title="Spread Syntax in Object Creation"
            code={`// Basic object spreading
const baseConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

const devConfig = {
  ...baseConfig,
  debug: true,
  apiUrl: 'http://localhost:3000' // Override
};

console.log(devConfig);
// { apiUrl: 'http://localhost:3000', timeout: 5000, debug: true }

// Shallow copying
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };

console.log(copy.a); // 1
console.log(copy.b === original.b); // true (same reference)

// Merging multiple objects
const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark', fontSize: 14 };
const systemPrefs = { lang: 'fr', timezone: 'UTC' };

const finalConfig = {
  ...defaults,
  ...userPrefs,
  ...systemPrefs
};

console.log(finalConfig);
// { theme: 'dark', lang: 'fr', fontSize: 14, timezone: 'UTC' }

// Adding properties conditionally
const env = 'production';
const isProduction = env === 'production';

const config = {
  apiUrl: 'https://api.example.com',
  ...(isProduction && {
    cache: true,
    compression: true
  }),
  ...(!isProduction && {
    debug: true,
    hotReload: true
  })
};

console.log(config);
// { apiUrl: 'https://api.example.com', cache: true, compression: true }

// Spread with computed properties
const key = 'dynamicKey';
const value = 'dynamicValue';

const obj = {
  staticKey: 'staticValue',
  [key]: value,
  ...{ anotherKey: 'anotherValue' }
};

console.log(obj);
// { staticKey: 'staticValue', dynamicKey: 'dynamicValue', anotherKey: 'anotherValue' }

// Spread in function calls
function createUser(name, options = {}) {
  return {
    id: Date.now(),
    name,
    createdAt: new Date(),
    ...options
  };
}

const user1 = createUser('Alice', { role: 'admin', active: true });
const user2 = createUser('Bob'); // Uses default empty options

console.log(user1);
// { id: 1234567890, name: 'Alice', createdAt: Date, role: 'admin', active: true }

// Spread for object transformation
const transformObject = (obj, transforms) => {
  return {
    ...obj,
    ...Object.fromEntries(
      Object.entries(transforms).map(([key, transform]) => [
        key,
        transform(obj[key])
      ])
    )
  };
};

const data = { name: 'john', age: 25 };
const transformed = transformObject(data, {
  name: (v) => v.toUpperCase(),
  age: (v) => v + 5
});

console.log(transformed); // { name: 'JOHN', age: 30 }

// Spread vs Object.assign
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Using spread
const mergedSpread = { ...obj1, ...obj2 };
console.log(mergedSpread); // { a: 1, b: 3, c: 4 }

// Using Object.assign
const mergedAssign = Object.assign({}, obj1, obj2);
console.log(mergedAssign); // { a: 1, b: 3, c: 4 }

// Spread is more concise and works in more contexts

// Spread with arrays (for comparison)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread in array destructuring
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

// Advanced spread patterns
function mergeDeep(target, source) {
  const result = { ...target };

  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = mergeDeep(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });

  return result;
}

const deep1 = { a: { b: 1 }, c: 2 };
const deep2 = { a: { d: 3 }, e: 4 };
const deepMerged = mergeDeep(deep1, deep2);
console.log(deepMerged); // { a: { b: 1, d: 3 }, c: 2, e: 4 }

// Spread for immutability
const state = { count: 0, items: [1, 2, 3] };

function addItem(state, item) {
  return {
    ...state,
    items: [...state.items, item]
  };
}

const newState = addItem(state, 4);
console.log(newState.items); // [1, 2, 3, 4]
console.log(state.items); // [1, 2, 3] (unchanged)

// Spread with destructuring for property manipulation
const original = { a: 1, b: 2, c: 3, d: 4 };

const { c, d, ...partial } = original;
const modified = { ...partial, c: c * 10, d: d * 10 };

console.log(modified); // { a: 1, b: 2, c: 30, d: 40 }

// Spread in template literals (not directly, but related)
const obj = { name: 'World', greeting: 'Hello' };
const message = \`\${obj.greeting}, \${obj.name}!\`;
console.log(message); // 'Hello, World!'`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Advanced Destructuring Patterns</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Computed Property Names</h3>
          <p className="text-slate-700 mb-4">
            Use computed property names in destructuring patterns.
          </p>

          <CodeExample
            title="Computed Property Names in Destructuring"
            code={`// Basic computed property destructuring
const key = 'dynamicKey';
const obj = {
  staticKey: 'static',
  [key]: 'dynamic',
  anotherKey: 'another'
};

const { [key]: dynamicValue, staticKey } = obj;
console.log(dynamicValue); // 'dynamic'
console.log(staticKey); // 'static'

// Computed properties with expressions
const prefix = 'user';
const suffix = 'Name';

const data = {
  [\`\${prefix}\${suffix.charAt(0).toUpperCase() + suffix.slice(1)}\`]: 'John',
  [\`\${prefix}Age\`]: 30
};

const { [prefix + suffix.charAt(0).toUpperCase() + suffix.slice(1)]: name, userAge } = data;
console.log(name); // 'John'
console.log(userAge); // 30

// Dynamic key extraction
function extractByKeys(obj, keys) {
  const result = {};
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

const source = { a: 1, b: 2, c: 3, d: 4 };
const extracted = extractByKeys(source, ['a', 'c']);
console.log(extracted); // { a: 1, c: 3 }

// Computed destructuring in loops
const configs = [
  { type: 'database', host: 'localhost', port: 5432 },
  { type: 'cache', host: 'redis', port: 6379 },
  { type: 'api', host: 'api.example.com', port: 443 }
];

for (const config of configs) {
  const { type, ...connection } = config;
  console.log(\`\${type}: \`, connection);
}

// Advanced computed patterns
const envVars = {
  'NODE_ENV': 'development',
  'API_URL': 'http://localhost:3000',
  'DB_HOST': 'localhost',
  'DB_PORT': '5432'
};

const configKeys = ['NODE_ENV', 'API_URL'];
const dbKeys = ['DB_HOST', 'DB_PORT'];

const {
  [configKeys[0]]: env,
  [configKeys[1]]: apiUrl,
  [dbKeys[0]]: dbHost,
  [dbKeys[1]]: dbPort
} = envVars;

console.log(env, apiUrl, dbHost, dbPort); // 'development' 'http://localhost:3000' 'localhost' '5432'

// Computed properties with symbols
const symbolKey = Symbol('secret');
const objWithSymbol = {
  normalKey: 'normal',
  [symbolKey]: 'secret value'
};

const { [symbolKey]: secret, ...publicProps } = objWithSymbol;
console.log(secret); // 'secret value'
console.log(publicProps); // { normalKey: 'normal' }

// Dynamic destructuring function
function dynamicDestructure(obj, pattern) {
  const result = {};

  for (const [key, alias] of Object.entries(pattern)) {
    if (key in obj) {
      result[alias] = obj[key];
    }
  }

  return result;
}

const pattern = {
  name: 'fullName',
  age: 'years',
  city: 'location'
};

const person = { name: 'Alice', age: 25, city: 'NYC', country: 'USA' };
const extracted2 = dynamicDestructure(person, pattern);
console.log(extracted2); // { fullName: 'Alice', years: 25, location: 'NYC' }

// Computed destructuring with validation
function safeExtract(obj, keys) {
  const result = {};

  keys.forEach(key => {
    try {
      const { [key]: value = undefined } = obj || {};
      result[key] = value;
    } catch (error) {
      result[key] = undefined;
    }
  });

  return result;
}

console.log(safeExtract({ a: 1, b: 2 }, ['a', 'c'])); // { a: 1, c: undefined }
console.log(safeExtract(null, ['a'])); // { a: undefined }

// Nested computed destructuring
const nestedObj = {
  users: {
    'user_123': { name: 'John', role: 'admin' },
    'user_456': { name: 'Jane', role: 'user' }
  }
};

const userId = 'user_123';
const {
  users: {
    [userId]: {
      name: extractedName,
      role: extractedRole
    }
  }
} = nestedObj;

console.log(extractedName, extractedRole); // 'John' 'admin'`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Destructuring in Different Contexts</h3>
          <p className="text-slate-700 mb-4">
            Destructuring can be used in various JavaScript contexts beyond variable declarations.
          </p>

          <CodeExample
            title="Destructuring in Different Contexts"
            code={`// Destructuring in function parameters
function createUser({
  name,
  age = 18,
  email,
  preferences: {
    theme = 'light',
    notifications = true
  } = {}
} = {}) {
  return {
    name,
    age,
    email,
    preferences: { theme, notifications }
  };
}

const user = createUser({
  name: 'Alice',
  email: 'alice@example.com',
  preferences: { theme: 'dark' }
});

console.log(user);
// { name: 'Alice', age: 18, email: 'alice@example.com', preferences: { theme: 'dark', notifications: true } }

// Destructuring in arrow functions
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

const names = users.map(({ name }) => name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

const adults = users.filter(({ age }) => age >= 30);
console.log(adults); // [{ id: 2, ... }, { id: 3, ... }]

// Destructuring in array methods
const userData = users.map(({ id, name, age }) => ({
  userId: id,
  displayName: name,
  isAdult: age >= 18
}));

console.log(userData);
// [
//   { userId: 1, displayName: 'Alice', isAdult: true },
//   { userId: 2, displayName: 'Bob', isAdult: true },
//   { userId: 3, displayName: 'Charlie', isAdult: true }
// ]

// Destructuring in promises/callbacks
function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: 'John Doe',
        profile: { avatar: 'avatar.jpg', bio: 'Developer' }
      });
    }, 100);
  });
}

fetchUserData(123).then(({
  name,
  profile: { avatar, bio }
}) => {
  console.log(\`User: \${name}\`);
  console.log(\`Avatar: \${avatar}\`);
  console.log(\`Bio: \${bio}\`);
});

// Destructuring in try-catch (not directly supported, but similar)
function safeParseJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return { success: true, data: parsed };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

const { success, data, error } = safeParseJSON('{"name": "test"}');
if (success) {
  console.log('Parsed:', data);
} else {
  console.log('Error:', error);
}

// Destructuring in class constructors
class User {
  constructor({ name, age, email, ...otherProps }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.metadata = otherProps;
  }

  toString() {
    return \`\${this.name} (\${this.age})\`;
  }
}

const userFromClass = new User({
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  role: 'admin',
  active: true
});

console.log(userFromClass.toString()); // 'Alice (25)'
console.log(userFromClass.metadata); // { role: 'admin', active: true }

// Destructuring in loops
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Book', price: 20, category: 'books' },
  { id: 3, name: 'Mouse', price: 25, category: 'electronics' }
];

// for...of with destructuring
for (const { name, price, category } of products) {
  console.log(\`\${name} (\${category}): $\${price}\`);
}

// forEach with destructuring
products.forEach(({ name, price }) => {
  console.log(\`\${name} costs $\${price}\`);
});

// Destructuring in reduce
const totalByCategory = products.reduce((acc, { category, price }) => {
  acc[category] = (acc[category] || 0) + price;
  return acc;
}, {});

console.log(totalByCategory); // { electronics: 1024, books: 20 }

// Destructuring in conditional statements
function processOrder(order) {
  const {
    items,
    customer: { name: customerName },
    total,
    status = 'pending'
  } = order;

  if (status === 'completed' && total > 100) {
    console.log(\`Processing large order for \${customerName}\`);
  }

  return { customerName, itemCount: items.length, total };
}

// Destructuring with import/export (ES6 modules)
import { useState, useEffect } from 'react'; // Destructuring import
const [count, setCount] = useState(0); // Array destructuring

// Destructuring in template literals (indirectly)
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const { firstName, lastName, age } = person;
const greeting = \`Hello, \${firstName} \${lastName}! You are \${age} years old.\`;
console.log(greeting); // 'Hello, John Doe! You are 30 years old.'

// Destructuring in switch statements
function handleEvent(event) {
  const { type, payload } = event;

  switch (type) {
    case 'USER_LOGIN':
      const { userId, username } = payload;
      console.log(\`User \${username} logged in with ID \${userId}\`);
      break;

    case 'ORDER_PLACED':
      const { orderId, total } = payload;
      console.log(\`Order \${orderId} placed for $\${total}\`);
      break;

    default:
      console.log('Unknown event type');
  }
}

handleEvent({
  type: 'USER_LOGIN',
  payload: { userId: 123, username: 'alice' }
});

// Destructuring in async/await
async function fetchAndProcessUser(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const { data: { user: { name, email } } } = await response.json();

  return { name, email };
}

// Destructuring in generators
function* userGenerator() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  for (const { id, name } of users) {
    yield { id, name };
  }
}

for (const { id, name } of userGenerator()) {
  console.log(\`Generated: \${id} - \${name}\`);
}

// Destructuring in proxy handlers
const handler = {
  get(target, prop) {
    const { [prop]: value, ...rest } = target;
    console.log(\`Accessing \${prop}: \${value}\`);
    return value;
  }
};

const proxy = new Proxy({ a: 1, b: 2 }, handler);
console.log(proxy.a); // 'Accessing a: 1' then 1`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">5. Common Patterns and Best Practices</h2>

          <h3 className="text-xl font-medium text-slate-800 mb-4">Practical Patterns</h3>
          <p className="text-slate-700 mb-4">
            Common destructuring patterns used in real-world JavaScript applications.
          </p>

          <CodeExample
            title="Common Destructuring Patterns"
            code={`// 1. Configuration objects
function createServer({
  port = 3000,
  host = 'localhost',
  ssl = false,
  middleware = [],
  routes = {}
} = {}) {
  return {
    port,
    host,
    ssl,
    middleware: [...middleware],
    routes: { ...routes }
  };
}

const server = createServer({
  port: 8080,
  ssl: true,
  middleware: ['cors', 'helmet'],
  routes: { '/api': 'apiHandler' }
});

// 2. API response handling
function handleApiResponse(response) {
  const {
    status,
    data: {
      user,
      posts = [],
      pagination: {
        page = 1,
        totalPages = 1,
        hasNext = false
      } = {}
    },
    error
  } = response;

  if (status === 'success') {
    return { user, posts, pagination: { page, totalPages, hasNext } };
  } else {
    throw new Error(error);
  }
}

// 3. Event handling
function handleClick(event) {
  const {
    target,
    currentTarget,
    clientX,
    clientY,
    altKey,
    ctrlKey,
    shiftKey
  } = event;

  console.log(\`Clicked at (\${clientX}, \${clientY})\`);
  if (altKey) console.log('Alt key was pressed');
}

// 4. React component props (conceptual)
function UserCard({ user, onEdit, className = '' }) {
  const {
    name,
    avatar,
    bio,
    stats: {
      followers = 0,
      following = 0
    } = {}
  } = user;

  return (
    \`<div className={className}>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <div>Followers: {followers}, Following: {following}</div>
      <button onClick={() => onEdit(user)}>Edit</button>
    </div>\`
  );
}

// 5. Redux action creators
const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    payload: { text, id: Date.now() }
  };
}

function toggleTodo(id) {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: { id }
  };
}

// Reducer with destructuring
function todosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_TODO:
      const { text, id } = payload;
      return [...state, { id, text, completed: false }];

    case actionTypes.TOGGLE_TODO:
      const { id: toggleId } = payload;
      return state.map(todo =>
        todo.id === toggleId ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
}

// 6. URL parsing
function parseUrl(url) {
  const urlObj = new URL(url);
  const {
    protocol,
    hostname,
    port,
    pathname,
    searchParams
  } = urlObj;

  return {
    protocol,
    host: hostname,
    port: port || (protocol === 'https:' ? '443' : '80'),
    path: pathname,
    query: Object.fromEntries(searchParams)
  };
}

const parsed = parseUrl('https://example.com:8080/api/users?page=1&limit=10');
console.log(parsed);
// {
//   protocol: 'https:',
//   host: 'example.com',
//   port: '8080',
//   path: '/api/users',
//   query: { page: '1', limit: '10' }
// }

// 7. Date destructuring
function formatDate(date) {
  const {
    getFullYear: year,
    getMonth: month,
    getDate: day,
    getHours: hours,
    getMinutes: minutes,
    getSeconds: seconds
  } = date;

  return \`\${year()}-\${String(month() + 1).padStart(2, '0')}-\${String(day()).padStart(2, '0')} \${String(hours()).padStart(2, '0')}:\${String(minutes()).padStart(2, '0')}:\${String(seconds()).padStart(2, '0')}\`;
}

console.log(formatDate(new Date())); // '2024-01-15 14:30:25'

// 8. Module imports with destructuring
// import { useState, useEffect, useContext } from 'react';
// import { combineReducers, createStore } from 'redux';

// 9. Environment configuration
const env = process.env;

const {
  NODE_ENV = 'development',
  PORT = '3000',
  DATABASE_URL,
  REDIS_URL,
  JWT_SECRET
} = env;

const config = {
  isProduction: NODE_ENV === 'production',
  port: parseInt(PORT, 10),
  database: { url: DATABASE_URL },
  redis: { url: REDIS_URL },
  jwt: { secret: JWT_SECRET }
};

// 10. File system operations
const fs = require('fs').promises;

async function readConfigFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const config = JSON.parse(content);

    const {
      server: {
        port = 3000,
        host = 'localhost'
      } = {},
      database: {
        type = 'sqlite',
        connection = {}
      } = {}
    } = config;

    return { port, host, database: { type, connection } };
  } catch (error) {
    console.error('Error reading config:', error);
    return null;
  }
}

// 11. HTTP request handling
function handleHttpRequest(req, res) {
  const {
    method,
    url,
    headers,
    body
  } = req;

  const {
    'content-type': contentType,
    'user-agent': userAgent,
    authorization
  } = headers;

  console.log(\`\${method} \${url}\`);
  console.log(\`Content-Type: \${contentType}\`);
  console.log(\`User-Agent: \${userAgent}\`);

  // Process request...
}

// 12. Validation with destructuring
function validateUser(userData) {
  const {
    name,
    email,
    age,
    address: {
      street,
      city,
      zipCode
    } = {}
  } = userData;

  const errors = [];

  if (!name || typeof name !== 'string') {
    errors.push('Name is required and must be a string');
  }

  if (!email || !email.includes('@')) {
    errors.push('Valid email is required');
  }

  if (age !== undefined && (typeof age !== 'number' || age < 0)) {
    errors.push('Age must be a positive number');
  }

  return {
    isValid: errors.length === 0,
    errors,
    data: { name, email, age, address: { street, city, zipCode } }
  };
}

const validation = validateUser({
  name: 'John',
  email: 'john@example.com',
  age: 30,
  address: { street: '123 Main St', city: 'NYC', zipCode: '10001' }
});

console.log(validation.isValid); // true

// 13. Sorting with destructuring
const items = [
  { name: 'Apple', price: 1.50, category: 'fruit' },
  { name: 'Banana', price: 0.75, category: 'fruit' },
  { name: 'Carrot', price: 0.50, category: 'vegetable' }
];

// Sort by price
items.sort(([, a], [, b]) => a - b); // Wait, this is array destructuring
// For objects:
items.sort(({ price: a }, { price: b }) => a - b);
console.log(items);

// 14. Grouping with destructuring
function groupBy(array, keyFn) {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    (groups[key] = groups[key] || []).push(item);
    return groups;
  }, {});
}

const grouped = groupBy(items, ({ category }) => category);
console.log(grouped);
// { fruit: [...], vegetable: [...] }

// 15. Debounce/throttle with destructuring
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedLog = debounce(({ message, level = 'info' }) => {
  console.log(\`[\${level.toUpperCase()}] \${message}\`);
}, 300);

debouncedLog({ message: 'This will be debounced', level: 'warn' });`}
          />

          <h3 className="text-xl font-medium text-slate-800 mb-4">Performance Considerations</h3>
          <p className="text-slate-700 mb-4">
            Understanding when and how to use destructuring for optimal performance.
          </p>

          <CodeExample
            title="Destructuring Performance and Best Practices"
            code={`// Performance comparison: destructuring vs property access
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Method 1: Multiple property access
console.time('property-access');
for (let i = 0; i < 1000000; i++) {
  const a = obj.a;
  const b = obj.b;
  const c = obj.c;
}
console.timeEnd('property-access');

// Method 2: Destructuring
console.time('destructuring');
for (let i = 0; i < 1000000; i++) {
  const { a, b, c } = obj;
}
console.timeEnd('destructuring');

// Results: Property access is usually faster for simple cases

// When destructuring is better
// 1. Function parameters - clearer intent
function processUser({ name, age, email }) {
  // vs
  function processUser(user) {
    const name = user.name;
    const age = user.age;
    const email = user.email;
  }
}

// 2. Multiple return values
function getUserAndPosts(userId) {
  // Simulate API calls
  return {
    user: { id: userId, name: 'John' },
    posts: [{ id: 1, title: 'Post 1' }]
  };
}

const { user, posts } = getUserAndPosts(123);

// 3. Configuration objects
function createApp(config) {
  const {
    port = 3000,
    host = 'localhost',
    ssl = false,
    middleware = []
  } = config;

  // Implementation
}

// Best practices

// 1. Use destructuring for clarity, not just performance
// Good
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age} years old\`;
}

// Avoid over-destructuring
function badExample(props) {
  const {
    user: {
      profile: {
        personal: {
          name: {
            first,
            last
          },
          age
        },
        settings: {
          theme
        }
      }
    },
    data: {
      items
    }
  } = props;

  // This creates too many intermediate variables
}

// Better approach
function goodExample(props) {
  const { user, data } = props;
  const { profile, settings } = user;
  const { personal } = profile;
  const { name, age } = personal;
  const { first, last } = name;
  const { items } = data;

  // Or use optional chaining
  const firstName = props?.user?.profile?.personal?.name?.first;
}

// 2. Provide defaults at the right level
// Good
function createUser({
  name = 'Anonymous',
  profile = {},
  settings = {}
} = {}) {
  const {
    age = 18,
    email
  } = profile;

  const {
    theme = 'light',
    notifications = true
  } = settings;

  return { name, age, email, theme, notifications };
}

// 3. Use rest sparingly in performance-critical code
const largeObj = {};
for (let i = 0; i < 10000; i++) {
  largeObj[\`prop\${i}\`] = i;
}

// This creates a new object with 9999 properties
console.time('rest-destructuring');
const { prop1, ...rest } = largeObj;
console.timeEnd('rest-destructuring');

// 4. Prefer specific destructuring over generic
// Good
const { name, age } = user;

// Avoid
const props = user; // Then access props.name, props.age

// 5. Use destructuring in loops efficiently
const users = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: \`User \${i}\`,
  age: 20 + (i % 50)
}));

// Efficient
console.time('efficient-loop');
for (const { id, name } of users) {
  // Only destructure what you need
}
console.timeEnd('efficient-loop');

// Less efficient
console.time('inefficient-loop');
for (const user of users) {
  const { id, name, age } = user; // Destructure inside loop
}
console.timeEnd('inefficient-loop');

// 6. Cache destructured values when used multiple times
function processData(data) {
  const { items, metadata } = data;
  const { total, page } = metadata;

  // Use items and total multiple times
  items.forEach(item => {
    console.log(\`Processing item \${item.id} of \${total}\`);
  });
}

// 7. Avoid destructuring in hot paths if not needed
// For performance-critical code, sometimes direct access is better
function fastPath(obj) {
  return obj.a + obj.b + obj.c; // Faster than destructuring
}

function clearPath(obj) {
  const { a, b, c } = obj; // Clearer but slightly slower
  return a + b + c;
}

// 8. Use destructuring for immutable updates
const state = { user: { name: 'John', age: 30 }, settings: { theme: 'dark' } };

// Good - immutable update
const newState = {
  ...state,
  user: {
    ...state.user,
    age: 31
  }
};

// 9. Combine destructuring with validation
function safeProcess(obj) {
  const {
    name = 'Unknown',
    age = 0,
    email = null
  } = obj || {};

  if (typeof name !== 'string' || typeof age !== 'number') {
    throw new Error('Invalid data types');
  }

  return { name, age, email };
}

// 10. Use destructuring in error handling
try {
  const result = riskyOperation();
  const { success, data, error: operationError } = result;

  if (!success) {
    console.error('Operation failed:', operationError);
  } else {
    processData(data);
  }
} catch (error) {
  console.error('Exception:', error);
}

// 11. Performance monitoring
function withPerformanceMonitoring(fn, label) {
  return function(...args) {
    console.time(label);
    try {
      const result = fn.apply(this, args);
      console.timeEnd(label);
      return result;
    } catch (error) {
      console.timeEnd(label);
      throw error;
    }
  };
}

const monitoredFunction = withPerformanceMonitoring(
  function processLargeData({ items, filters }) {
    // Processing logic
    return items.filter(item => {
      const { category, price } = item;
      return filters.categories.includes(category) &&
             price >= filters.minPrice;
    });
  },
  'data-processing'
);

// 12. Memory considerations with large objects
const hugeObject = {};
for (let i = 0; i < 100000; i++) {
  hugeObject[\`key\${i}\`] = \`value\${i}\`;
}

// Avoid creating multiple copies
function processHugeObject(obj) {
  // Don't do: const { ...rest } = obj; - creates huge copy
  // Instead, work with the original object
  const neededKeys = ['key1', 'key2', 'key100'];
  const result = {};

  neededKeys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}

// 13. Destructuring with prototypes
function createEfficientClass() {
  const prototype = {
    method() {
      // Method implementation
    }
  };

  return function(props) {
    const instance = Object.create(prototype);
    Object.assign(instance, props);
    return instance;
  };
}

const createUser = createEfficientClass();
const user = createUser({ name: 'John', age: 30 });`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object destructuring is a powerful JavaScript feature that enables clean, readable code
            for extracting properties from objects. Mastering destructuring patterns improves code quality and developer experience.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Destructuring Syntax Summary</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Basic Destructuring</h4>
                <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                  const &#123; prop1, prop2 &#125; = object;
                </code>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">With Default Values</h4>
                <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                  const &#123; prop1 = default1, prop2 = default2 &#125; = object;
                </code>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">With Aliases</h4>
                <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                  const &#123; prop1: alias1, prop2: alias2 &#125; = object;
                </code>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Rest Syntax</h4>
                <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                  const &#123; prop1, ...rest &#125; = object;
                </code>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Nested Destructuring</h4>
                <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                  const &#123; prop1: &#123; nestedProp &#125; &#125; = object;
                </code>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps</h3>
            <p className="text-blue-800 mb-4">
              Now that you understand object destructuring, explore related concepts:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Array Destructuring:</strong> Similar patterns for arrays with different syntax</li>
              <li><strong>Optional Chaining:</strong> Safe property access with `?.` operator</li>
              <li><strong>Nullish Coalescing:</strong> Better defaults with `??` operator</li>
              <li><strong>Advanced Patterns:</strong> Combining destructuring with other ES6+ features</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}