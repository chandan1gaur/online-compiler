import CodeExample from '@/components/CodeExample';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript Promises: Complete Guide with Examples | Learn JS',
  description: 'Master JavaScript Promises with comprehensive examples. Learn promise states, chaining, error handling, Promise.all, Promise.race, and async patterns. 7,200 monthly searches.',
  keywords: ['javascript promises', 'promise tutorial', 'async javascript', 'promise chaining', 'promise methods', 'javascript async'],
  openGraph: {
    title: 'JavaScript Promises: Complete Guide with Examples',
    description: 'Master JavaScript Promises with comprehensive examples. Learn promise states, chaining, error handling, Promise.all, Promise.race, and async patterns.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Promises: Complete Guide with Examples',
    description: 'Master JavaScript Promises with comprehensive examples. Learn promise states, chaining, error handling, Promise.all, Promise.race, and async patterns.',
  },
//   jsonLd: {
//     '@context': 'https://schema.org',
//     '@type': 'Article',
//     headline: 'JavaScript Promises: Complete Guide with Examples',
//     description: 'Master JavaScript Promises with comprehensive examples. Learn promise states, chaining, error handling, Promise.all, Promise.race, and async patterns.',
//     author: {
//       '@type': 'Organization',
//       name: 'Online JavaScript Compiler',
//     },
//     datePublished: '2024-01-01',
//     dateModified: '2024-01-01',
//   },
};

export default function PromisesPage() {
  return (
    <>
      <Script
        id="json-ld-promises"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript Promises: Complete Guide with Examples',
            description: 'Master JavaScript Promises with comprehensive examples. Learn promise states, chaining, error handling, Promise.all, Promise.race, and async patterns.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />
      <div className="w-full px-4 pt-0 pb-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        JavaScript Promises: A Complete Guide
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Promises are a fundamental concept in JavaScript for handling asynchronous operations.
        They represent a value that may be available now, or in the future, or never.
        Understanding promises is crucial for modern JavaScript development.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          What are Promises?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A Promise is an object representing the eventual completion or failure of an asynchronous operation.
          It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.
        </p>

        <CodeExample
          title="Basic Promise Creation"
          code={`// Creating a simple promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve('Operation completed successfully!');
    } else {
      reject('Operation failed!');
    }
  }, 1000);
});

// Using the promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));`}
          explanation="This example shows how to create a basic promise that resolves or rejects after a timeout."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Promise States
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A promise can be in one of three states:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
          <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected</li>
          <li><strong>Fulfilled:</strong> Operation completed successfully</li>
          <li><strong>Rejected:</strong> Operation failed</li>
        </ul>

        <CodeExample
          title="Promise States Example"
          code={`const promise = new Promise((resolve, reject) => {
  console.log('Promise created - State: Pending');
  
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      resolve('Success!'); // State: Fulfilled
    } else {
      reject('Error!'); // State: Rejected
    }
  }, 1000);
});

promise
  .then(result => console.log('Fulfilled:', result))
  .catch(error => console.log('Rejected:', error));`}
          explanation="This demonstrates how a promise transitions from pending to either fulfilled or rejected."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Promise Methods: then(), catch(), finally()
        </h2>

        <CodeExample
          title="Using then(), catch(), and finally()"
          code={`const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
      // reject(new Error('Network error'));
    }, 1000);
  });
};

fetchData()
  .then(data => {
    console.log('Data received:', data);
    return data.name.toUpperCase();
  })
  .then(processedData => {
    console.log('Processed data:', processedData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Operation completed (success or failure)');
  });`}
          explanation="then() handles success, catch() handles errors, and finally() runs regardless of outcome."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Promise Chaining
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Promises can be chained to perform sequential asynchronous operations.
          Each then() returns a new promise, allowing for clean sequential code.
        </p>

        <CodeExample
          title="Promise Chaining Example"
          code={`const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'User ' + id }), 500);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Post 1', 'Post 2', 'Post 3']), 500);
  });
};

const getComments = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Comment 1', 'Comment 2']), 500);
  });
};

// Chaining promises
getUser(1)
  .then(user => {
    console.log('User:', user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
    return getComments(1);
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => console.error('Error:', error));`}
          explanation="This shows how to chain promises to perform sequential async operations."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Promise.all() - Running Promises in Parallel
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Promise.all() takes an array of promises and returns a single promise that resolves
          when all promises in the array have resolved, or rejects if any promise rejects.
        </p>

        <CodeExample
          title="Promise.all() Example"
          code={`const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Third'), 500));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises resolved:', results);
    // Output: ['First', 'Second', 'Third']
  })
  .catch(error => {
    console.error('One promise rejected:', error);
  });

// With error handling
const promises = [
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/comments')
];

Promise.all(promises)
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    console.log('All data loaded:', data);
  })
  .catch(error => {
    console.error('Failed to load data:', error);
  });`}
          explanation="Promise.all() waits for all promises to resolve or rejects if any fail."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Promise.race() - First to Complete
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Promise.race() returns a promise that resolves or rejects as soon as one of the
          promises in the array resolves or rejects.
        </p>

        <CodeExample
          title="Promise.race() Example"
          code={`const slowPromise = new Promise(resolve => 
  setTimeout(() => resolve('Slow'), 3000));

const fastPromise = new Promise(resolve => 
  setTimeout(() => resolve('Fast'), 1000));

const failingPromise = new Promise((resolve, reject) => 
  setTimeout(() => reject('Failed'), 500));

Promise.race([slowPromise, fastPromise])
  .then(result => console.log('Winner:', result)) // 'Fast'
  .catch(error => console.error('Error:', error));

// With timeout example
const timeout = (ms) => new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), ms));

const fetchWithTimeout = (url, timeoutMs) => {
  return Promise.race([
    fetch(url),
    timeout(timeoutMs)
  ]);
};

fetchWithTimeout('/api/data', 5000)
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Request failed:', error.message));`}
          explanation="Promise.race() resolves with the first promise that completes."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Promise.allSettled() - Wait for All to Complete
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Promise.allSettled() waits for all promises to settle (either resolve or reject)
          and returns an array of objects describing each promise's outcome.
        </p>

        <CodeExample
          title="Promise.allSettled() Example"
          code={`const promises = [
  Promise.resolve('Success 1'),
  Promise.reject('Error 1'),
  Promise.resolve('Success 2'),
  new Promise(resolve => setTimeout(() => resolve('Success 3'), 1000))
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index + 1} fulfilled:\`, result.value);
      } else {
        console.log(\`Promise \${index + 1} rejected:\`, result.reason);
      }
    });
  });

// Output:
// Promise 1 fulfilled: Success 1
// Promise 2 rejected: Error 1
// Promise 3 fulfilled: Success 2
// Promise 4 fulfilled: Success 3`}
          explanation="Promise.allSettled() provides results for all promises, regardless of success or failure."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Error Handling Best Practices
        </h2>

        <CodeExample
          title="Proper Error Handling"
          code={`// ❌ Bad: No error handling
function riskyOperation() {
  return fetch('/api/data');
}

// ✅ Good: Proper error handling
function safeOperation() {
  return fetch('/api/data')
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch failed:', error);
      // Handle error appropriately
      throw error; // Re-throw if needed
    });
}

// Using async/await with try/catch
async function safeAsyncOperation() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Operation failed:', error);
    throw error;
  }
}`}
          explanation="Always handle errors properly in promise chains and async functions."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Converting Callbacks to Promises
        </h2>

        <CodeExample
          title="Promisifying Callback-based Functions"
          code={`// Original callback-based function
function readFile(path, callback) {
  // Simulate async file reading
  setTimeout(() => {
    if (Math.random() > 0.1) {
      callback(null, 'File content');
    } else {
      callback(new Error('File not found'));
    }
  }, 1000);
}

// Convert to promise
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Usage
readFilePromise('/path/to/file.txt')
  .then(content => console.log('File content:', content))
  .catch(error => console.error('Error:', error.message));

// Utility function for promisifying
function promisify(originalFunction) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      originalFunction(...args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const readFileAsync = promisify(readFile);
readFileAsync('/path/to/file.txt')
  .then(content => console.log(content));`}
          explanation="Convert callback-based functions to promise-based for better async handling."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Common Promise Patterns
        </h2>

        <CodeExample
          title="Retry Pattern"
          code={`function retryPromise(fn, maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(retriesLeft) {
      fn()
        .then(resolve)
        .catch(error => {
          if (retriesLeft > 0) {
            setTimeout(() => attempt(retriesLeft - 1), delay);
          } else {
            reject(error);
          }
        });
    }
    attempt(maxRetries);
  });
}

// Usage
const unreliableFetch = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.7) {
      resolve('Success');
    } else {
      reject(new Error('Network error'));
    }
  });
};

retryPromise(unreliableFetch, 3, 500)
  .then(result => console.log('Final result:', result))
  .catch(error => console.error('All retries failed:', error));`}
          explanation="Implement retry logic for unreliable async operations."
        />

        <CodeExample
          title="Timeout Pattern"
          code={`function withTimeout(promise, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs);
  });
  
  return Promise.race([promise, timeoutPromise]);
}

// Usage
const slowOperation = new Promise(resolve => 
  setTimeout(() => resolve('Done'), 3000));

withTimeout(slowOperation, 2000)
  .then(result => console.log(result))
  .catch(error => console.error(error.message)); // 'Operation timed out'`}
          explanation="Add timeout functionality to promises to prevent hanging operations."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Real-World Example: API Calls
        </h2>

        <CodeExample
          title="Complete API Example with Promises"
          code={`class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }
      return response.json();
    });
  }

  getUsers() {
    return this.request('/users');
  }

  getUserById(id) {
    return this.request(\`/users/\${id}\`);
  }

  createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  updateUser(id, userData) {
    return this.request(\`/users/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }

  deleteUser(id) {
    return this.request(\`/users/\${id}\`, {
      method: 'DELETE'
    });
  }
}

// Usage
const api = new ApiService('https://jsonplaceholder.typicode.com');

// Chain multiple API calls
api.getUsers()
  .then(users => {
    console.log('Users:', users.slice(0, 3));
    return api.getUserById(1);
  })
  .then(user => {
    console.log('User details:', user);
    return api.updateUser(1, { name: 'Updated Name' });
  })
  .then(updatedUser => {
    console.log('Updated user:', updatedUser);
  })
  .catch(error => {
    console.error('API Error:', error.message);
  });`}
          explanation="Build a complete API service using promises for all HTTP operations."
        />
      </section>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
          Key Takeaways
        </h3>
        <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-2">
          <li>Promises represent future values and help manage asynchronous operations</li>
          <li>Use <code>.then()</code> for success handling and <code>.catch()</code> for errors</li>
          <li><code>Promise.all()</code> runs promises in parallel, <code>Promise.race()</code> returns the first result</li>
          <li>Always handle errors to prevent uncaught promise rejections</li>
          <li>Promise chaining enables sequential async operations</li>
          <li>Consider async/await for cleaner syntax (covered in the next section)</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Ready to learn async/await? Check out the{' '}
          <a href="/javascript/async/async-await" className="text-blue-600 hover:underline">
            async/await guide
          </a>{' '}
          for modern asynchronous JavaScript.
        </p>
      </div>
    </div>
    </>
  );
}