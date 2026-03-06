import CodeExample from '@/components/CodeExample';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript async/await: Complete Guide with Examples | Learn JS',
  description: 'Master JavaScript async/await with comprehensive examples. Learn async functions, await keyword, error handling, and modern async patterns. 7,200 monthly searches.',
  keywords: ['javascript async await', 'async function', 'await keyword', 'asynchronous javascript', 'promise async await', 'javascript async'],
  openGraph: {
    title: 'JavaScript async/await: Complete Guide with Examples',
    description: 'Master JavaScript async/await with comprehensive examples. Learn async functions, await keyword, error handling, and modern async patterns.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript async/await: Complete Guide with Examples',
    description: 'Master JavaScript async/await with comprehensive examples. Learn async functions, await keyword, error handling, and modern async patterns.',
  },
//   jsonLd: {
//     '@context': 'https://schema.org',
//     '@type': 'Article',
//     headline: 'JavaScript async/await: Complete Guide with Examples',
//     description: 'Master JavaScript async/await with comprehensive examples. Learn async functions, await keyword, error handling, and modern async patterns.',
//     author: {
//       '@type': 'Organization',
//       name: 'Online JavaScript Compiler',
//     },
//     datePublished: '2024-01-01',
//     dateModified: '2024-01-01',
//   },
};

export default function AsyncAwaitPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        JavaScript async/await: A Complete Guide
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        async/await is a modern JavaScript feature that makes working with promises much easier.
        It allows you to write asynchronous code that looks and behaves like synchronous code,
        making it more readable and maintainable.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          What is async/await?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          async/await is syntactic sugar built on top of promises. It allows you to write
          asynchronous code that looks synchronous, making it easier to read and understand.
          The <code>async</code> keyword declares an asynchronous function, and <code>await</code>
          pauses execution until a promise resolves.
        </p>

        <CodeExample
          title="Basic async/await Example"
          code={`// Traditional Promise approach
function fetchUser() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(data => {
      console.log('User:', data);
      return data;
    });
}

// async/await approach
async function fetchUserAsync() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    console.log('User:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
fetchUserAsync();`}
          explanation="async/await makes asynchronous code look synchronous and easier to follow."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          async Functions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          An async function is a function declared with the <code>async</code> keyword.
          It always returns a promise, even if you return a primitive value.
        </p>

        <CodeExample
          title="async Function Declaration and Expression"
          code={`// async function declaration
async function getData() {
  return 'Hello, World!';
}

// async function expression
const getData2 = async function() {
  return 'Hello from expression!';
};

// async arrow function
const getData3 = async () => {
  return 'Hello from arrow function!';
};

// All return promises
getData().then(result => console.log(result)); // 'Hello, World!'
getData2().then(result => console.log(result)); // 'Hello from expression!'
getData3().then(result => console.log(result)); // 'Hello from arrow function!'

// Async function that returns a promise
async function processData() {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve('Processed'), 1000);
  });
  
  const result = await promise;
  return result.toUpperCase();
}

processData().then(result => console.log(result)); // 'PROCESSED'`}
          explanation="async functions always return promises and can be declared in multiple ways."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          The await Keyword
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The <code>await</code> keyword can only be used inside async functions.
          It pauses the execution of the async function until the promise resolves,
          then returns the resolved value.
        </p>

        <CodeExample
          title="Using await with Promises"
          code={`async function fetchMultipleResources() {
  console.log('Starting fetch...');
  
  // These run sequentially (not in parallel)
  const userResponse = await fetch('/api/user');
  const user = await userResponse.json();
  console.log('User loaded:', user.name);
  
  const postsResponse = await fetch('/api/posts');
  const posts = await postsResponse.json();
  console.log('Posts loaded:', posts.length);
  
  return { user, posts };
}

// Usage
fetchMultipleResources()
  .then(data => console.log('All data:', data))
  .catch(error => console.error('Error:', error));

// Parallel execution using Promise.all with await
async function fetchMultipleResourcesParallel() {
  console.log('Starting parallel fetch...');
  
  const [userResponse, postsResponse] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/posts')
  ]);
  
  const user = await userResponse.json();
  const posts = await postsResponse.json();
  
  console.log('Both loaded in parallel');
  return { user, posts };
}`}
          explanation="await pauses execution until promises resolve. Use Promise.all for parallel operations."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Error Handling with try/catch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          In async functions, use traditional try/catch blocks for error handling.
          This is much cleaner than chaining .catch() methods.
        </p>

        <CodeExample
          title="Error Handling in async/await"
          code={`// ❌ Without proper error handling
async function riskyOperation() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

// ✅ With proper error handling
async function safeOperation() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Operation failed:', error.message);
    
    // Handle different error types
    if (error.name === 'TypeError') {
      console.error('Network error');
    } else if (error.message.includes('HTTP error')) {
      console.error('Server error');
    }
    
    // Re-throw or return default value
    throw error;
  }
}

// Usage with error handling
async function main() {
  try {
    const data = await safeOperation();
    console.log('Success:', data);
  } catch (error) {
    console.error('Main operation failed:', error.message);
    // Handle error at higher level
  }
}

main();`}
          explanation="Use try/catch blocks in async functions for clean error handling."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Converting Promises to async/await
        </h2>

        <CodeExample
          title="Promise Chain to async/await"
          code={`// Original promise chain
function getUserData() {
  return fetch('/api/user')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    })
    .then(user => {
      return fetch(\`/api/posts?userId=\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
      return { user, posts };
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

// Converted to async/await
async function getUserDataAsync() {
  try {
    const userResponse = await fetch('/api/user');
    if (!userResponse.ok) {
      throw new Error('Failed to fetch user');
    }
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\`/api/posts?userId=\${user.id}\`);
    const posts = await postsResponse.json();
    
    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Usage
getUserDataAsync()
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Failed:', error));`}
          explanation="Convert complex promise chains to cleaner async/await syntax."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Sequential vs Parallel Execution
        </h2>

        <CodeExample
          title="Sequential vs Parallel Operations"
          code={`// Sequential execution (slower)
async function sequentialOperations() {
  console.time('Sequential');
  
  const user1 = await fetch('/api/users/1').then(r => r.json());
  const user2 = await fetch('/api/users/2').then(r => r.json());
  const user3 = await fetch('/api/users/3').then(r => r.json());
  
  console.timeEnd('Sequential');
  return [user1, user2, user3];
}

// Parallel execution (faster)
async function parallelOperations() {
  console.time('Parallel');
  
  const [user1, user2, user3] = await Promise.all([
    fetch('/api/users/1').then(r => r.json()),
    fetch('/api/users/2').then(r => r.json()),
    fetch('/api/users/3').then(r => r.json())
  ]);
  
  console.timeEnd('Parallel');
  return [user1, user2, user3];
}

// Mixed approach
async function mixedOperations() {
  // First, get user data
  const user = await fetch('/api/user').then(r => r.json());
  
  // Then fetch related data in parallel
  const [posts, comments] = await Promise.all([
    fetch(\`/api/posts?userId=\${user.id}\`).then(r => r.json()),
    fetch(\`/api/comments?userId=\${user.id}\`).then(r => r.json())
  ]);
  
  return { user, posts, comments };
}`}
          explanation="Use Promise.all() with await for parallel operations to improve performance."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Top-level await
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          In modern JavaScript (ES2022+), you can use await at the top level of modules,
          outside of async functions. This is useful for module initialization.
        </p>

        <CodeExample
          title="Top-level await in Modules"
          code={`// config.js
export const config = await fetch('/api/config').then(r => r.json());

// main.js
import { config } from './config.js';

// config is already resolved when imported
console.log('App config:', config);

// In browsers, use type="module"
&lt;script type="module"&gt;
  // Top-level await works here
  const data = await fetch('/api/data').then(r => r.json());
  console.log(data);
&lt;/script&gt;

// In Node.js (with --experimental-top-level-await)
const data = await fetch('/api/data').then(r => r.json());
console.log(data);`}
          explanation="Top-level await allows using await outside async functions in module contexts."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Async Iterators and Generators
        </h2>

        <CodeExample
          title="Async Generators"
          code={`// Async generator function
async function* asyncGenerator() {
  yield await Promise.resolve('First');
  yield await Promise.resolve('Second');
  yield await Promise.resolve('Third');
}

// Using async generator
async function processAsyncGenerator() {
  for await (const value of asyncGenerator()) {
    console.log(value);
  }
}

processAsyncGenerator();
// Output: First, Second, Third

// Async iterator example
class AsyncDataLoader {
  constructor(urls) {
    this.urls = urls;
  }
  
  async *[Symbol.asyncIterator]() {
    for (const url of this.urls) {
      const response = await fetch(url);
      const data = await response.json();
      yield data;
    }
  }
}

const loader = new AsyncDataLoader([
  '/api/users/1',
  '/api/users/2',
  '/api/users/3'
]);

async function loadAllData() {
  for await (const data of loader) {
    console.log('Loaded:', data);
  }
}

loadAllData();`}
          explanation="Async generators allow yielding promises and using for-await-of loops."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Common Patterns and Best Practices
        </h2>

        <CodeExample
          title="Retry Pattern with async/await"
          code={`async function retryAsync(fn, maxRetries = 3, delay = 1000) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries) {
        throw error;
      }
      console.log(\`Attempt \${i + 1} failed, retrying...\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage
const unreliableFetch = async () => {
  if (Math.random() > 0.7) {
    return { data: 'Success' };
  } else {
    throw new Error('Network error');
  }
};

retryAsync(unreliableFetch, 3, 500)
  .then(result => console.log('Final result:', result))
  .catch(error => console.error('All retries failed:', error));`}
          explanation="Implement retry logic for unreliable async operations using async/await."
        />

        <CodeExample
          title="Timeout Pattern"
          code={`function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeoutMs)
    )
  ]);
}

async function fetchWithTimeout(url, timeoutMs = 5000) {
  try {
    const response = await withTimeout(fetch(url), timeoutMs);
    return await response.json();
  } catch (error) {
    if (error.message === 'Timeout') {
      throw new Error(\`Request timed out after \${timeoutMs}ms\`);
    }
    throw error;
  }
}

// Usage
async function loadData() {
  try {
    const data = await fetchWithTimeout('/api/slow-endpoint', 3000);
    console.log('Data loaded:', data);
  } catch (error) {
    console.error('Failed to load data:', error.message);
  }
}`}
          explanation="Add timeout functionality to async operations to prevent hanging requests."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Real-World Example: API Service
        </h2>

        <CodeExample
          title="Complete API Service with async/await"
          code={`class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    return response.json();
  }

  async getUsers() {
    return this.request('/users');
  }

  async getUserById(id) {
    return this.request(\`/users/\${id}\`);
  }

  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  async updateUser(id, userData) {
    return this.request(\`/users/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }

  async deleteUser(id) {
    return this.request(\`/users/\${id}\`, {
      method: 'DELETE'
    });
  }

  // Batch operations
  async getMultipleUsers(ids) {
    const promises = ids.map(id => this.getUserById(id));
    return Promise.all(promises);
  }
}

// Usage
const api = new ApiService('https://jsonplaceholder.typicode.com');

async function demoApiUsage() {
  try {
    // Sequential operations
    const users = await api.getUsers();
    console.log('All users:', users.length);
    
    const firstUser = await api.getUserById(1);
    console.log('First user:', firstUser);
    
    // Parallel operations
    const [user2, user3] = await api.getMultipleUsers([2, 3]);
    console.log('Users 2 and 3:', user2, user3);
    
    // Create new user
    const newUser = await api.createUser({
      name: 'John Doe',
      email: 'john@example.com'
    });
    console.log('Created user:', newUser);
    
  } catch (error) {
    console.error('API operation failed:', error.message);
  }
}

demoApiUsage();`}
          explanation="Build a complete API service using async/await for all operations."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          async/await vs Promises: When to Use What
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Use async/await when:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
            <li>You need sequential async operations</li>
            <li>You want cleaner, more readable code</li>
            <li>You're working with complex promise chains</li>
            <li>You need try/catch error handling</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">Use Promises when:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
            <li>You need Promise.all(), Promise.race(), etc.</li>
            <li>You're working with callback-based APIs</li>
            <li>You need to return promises from non-async functions</li>
            <li>You want functional programming approaches</li>
          </ul>

          <CodeExample
            title="Mixing async/await and Promises"
            code={`// Perfectly valid to mix both approaches
async function complexOperation() {
  // Use async/await for sequential operations
  const user = await fetch('/api/user').then(r => r.json());
  
  // Use Promise.all for parallel operations
  const [posts, comments] = await Promise.all([
    fetch(\`/api/posts?userId=\${user.id}\`).then(r => r.json()),
    fetch(\`/api/comments?userId=\${user.id}\`).then(r => r.json())
  ]);
  
  // Use Promise.race for timeout
  const result = await Promise.race([
    processData(user, posts, comments),
    timeout(5000)
  ]);
  
  return result;
}

function timeout(ms) {
  return new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
}`}
            explanation="Mix async/await and promises for optimal async programming."
          />
        </div>
      </section>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-green-900 dark:text-green-100">
          Key Takeaways
        </h3>
        <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-2">
          <li><code>async</code> functions always return promises and enable <code>await</code></li>
          <li><code>await</code> pauses execution until promises resolve</li>
          <li>Use try/catch for error handling in async functions</li>
          <li>Combine Promise.all() with await for parallel operations</li>
          <li>async/await makes async code look synchronous and easier to read</li>
          <li>Mix async/await with promises when appropriate</li>
          <li>Always handle errors to prevent unhandled promise rejections</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Want to learn the fundamentals? Check out our{' '}
          <a href="/javascript/async/promises" className="text-blue-600 hover:underline">
            Promises guide
          </a>{' '}
          to understand the foundation of async JavaScript.
        </p>
      </div>
    </div>
  );
}