import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JavaScript Module Pattern - Encapsulation & Closures | Online Compiler',
  description: 'Master the Module Pattern in JavaScript. Learn how to create private and public encapsulation using closures for better code organization.',
  keywords: 'module pattern, IIFE, encapsulation, closure-based modules, JavaScript design patterns, privacy',
  openGraph: {
    title: 'JavaScript Module Pattern Guide',
    description: 'Understand how to use closures to create private and public interfaces.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/closures/module-pattern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Module Pattern',
    description: 'Learn encapsulation with closures and IIFEs.',
  },
};

export default function ModulePatternPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="w-full px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Advanced Patterns
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Module Pattern: Creating Encapsulation with Closures
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            The Module Pattern leverages closures to create private and public interfaces, enabling data encapsulation and namespace management. It's a powerful design pattern that forms the foundation of modern modular JavaScript development.
          </p>
        </div>

        {/* What is the Module Pattern */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the Module Pattern?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The Module Pattern uses closures to create private scope and expose a selective public interface. It combines Immediately Invoked Function Expressions (IIFE) with closures to create self-contained modules with controlled access to internal state and functionality.
          </p>
          <CodeExample
            title='Basic Module Pattern'
            code={`const Counter = (function() {
  // Private variables
  let count = 0;
  
  // Private functions
  function log(msg) {
    console.log('[Counter] ' + msg);
  }
  
  // Public API (returned object)
  return {
    increment: function() {
      count++;
      log('Count is now: ' + count);
      return count;
    },
    
    get: function() {
      return count;
    },
    
    reset: function() {
      count = 0;
      log('Count reset');
    }
  };
})();

// Usage
Counter.increment(); // [Counter] Count is now: 1
Counter.increment(); // [Counter] Count is now: 2
console.log(Counter.get()); // 2
Counter.reset();  // [Counter] Count reset

// Private members are inaccessible
// console.log(Counter.count); // undefined`}
            explanation="The module creates a private scope with hidden count variable. Only methods in the returned object can access it."
          />
        </section>

        {/* Core Concepts */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Core Concepts</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">IIFE (Immediately Invoked Function Expression)</h3>
              <CodeExample
                title='IIFE Creates Module Scope'
                code={`// IIFE: Function defined and called immediately
(function() {
  let privateVar = 'private';
  console.log(privateVar); // 'private' - only accessible here
})();

// console.log(privateVar); // ReferenceError

// Module returns public interface
const Module = (function() {
  let privateVar = 'private';
  
  return {
    getPrivate: function() {
      return privateVar; // Closure accesses privateVar
    }
  };
})();

console.log(Module.getPrivate()); // 'private'`}
                explanation="IIFE creates a temporary scope. Returning an object creates closures that remember that scope."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Data Privacy and Encapsulation</h3>
              <CodeExample
                title='Private Variables Cannot Be Modified Externally'
                code={`const BankAccount = (function() {
  let balance = 1000; // Truly private, cannot be accessed directly
  
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        console.log('Deposited: ' + amount);
      }
    },
    
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log('Withdrew: ' + amount);
      }
    },
    
    getBalance: function() {
      return balance;
    }
  };
})();

BankAccount.deposit(500);   // Deposited: 500
BankAccount.withdraw(200);  // Withdrew: 200
console.log(BankAccount.getBalance()); // 1300

// Cannot hack the account
// BankAccount.balance = 1000000; // Doesn't work
// BankAccount.balance is undefined`}
                explanation="Private variables like balance cannot be accessed or modified from outside. Only the public methods can modify them."
              />
            </div>
          </div>
        </section>

        {/* Module Patterns */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Module Pattern Variations</h2>
          
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Revealing Module Pattern</h3>
          <CodeExample
            title='Define Functions, Reveal Only Public'
            code={`const Calculator = (function() {
  // Private: Define all functions first
  function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function validateNumbers(x, y) {
    return typeof x === 'number' && typeof y === 'number';
  }
  
  // Public: Reveal only what's needed
  return {
    add: function(x, y) {
      if (!validateNumbers(x, y)) throw new Error('Invalid input');
      return add(x, y);
    },
    
    subtract: function(x, y) {
      if (!validateNumbers(x, y)) throw new Error('Invalid input');
      return subtract(x, y);
    },
    
    multiply: function(x, y) {
      if (!validateNumbers(x, y)) throw new Error('Invalid input');
      return multiply(x, y);
    }
  };
})();

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.subtract(10, 4)); // 6
// Calculator.validateNumbers(5, 3); // TypeError`}
            explanation="All functions are defined privately. The return statement selectively reveals only those needed in the public API."
          />
        </section>

        {/* Advanced Examples */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Advanced Module Patterns</h2>
          
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Singleton Pattern</h3>
          <CodeExample
            title='Module Ensures Single Instance'
            code={`const DatabaseConnection = (function() {
  let instance = null;
  
  function createConnection() {
    return {
      id: Math.random().toString(36).slice(2, 9),
      connected: true,
      query: function(sql) {
        console.log('Executing: ' + sql);
        return 'results';
      }
    };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createConnection();
        console.log('Connection created: ' + instance.id);
      }
      return instance;
    }
  };
})();

// Always returns same instance
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true - Same object!`}
            explanation="The module pattern naturally creates singletons. Each module is instantiated once and reused."
          />

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 mt-8">Module with Dependencies</h3>
          <CodeExample
            title='Passing Dependencies as Parameters'
            code={`// User module
const UserModule = (function() {
  let users = [];
  return {
    add: (name) => users.push(name),
    getAll: () => users.slice(),
    count: () => users.length
  };
})();

// Authentication using UserModule dependency
const AuthModule = (function(userService) {
  let authenticated = false;
  const validUsers = ['admin', 'user'];
  
  return {
    login: function(name) {
      if (validUsers.includes(name)) {
        authenticated = true;
        userService.add(name);
        console.log(name + ' logged in');
      }
    },
    
    isAuthenticated: function() {
      return authenticated;
    },
    
    getLoggedInCount: function() {
      return userService.count();
    }
  };
})(UserModule); // Pass dependency as parameter

// Usage
AuthModule.login('admin');
AuthModule.login('user');
console.log(AuthModule.getLoggedInCount()); // 2`}
            explanation="Modules can accept dependencies as parameters. This enables better testing and loose coupling."
          />

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 mt-8">Augmentation Pattern</h3>
          <CodeExample
            title='Extending Existing Modules'
            code={`// Base module
const StringUtils = (function() {
  return {
    trim: (str) => str.trim(),
    toLowerCase: (str) => str.toLowerCase(),
    toUpperCase: (str) => str.toUpperCase()
  };
})();

// Augment the module without modifying original
(function(utils) {
  utils.capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  utils.reverse = function(str) {
    return str.split('').reverse().join('');
  };
  
  utils.isPalindrome = function(str) {
    const clean = str.toLowerCase().replace(/\\s/g, '');
    return clean === utils.reverse(clean);
  };
})(StringUtils);

// Usage
console.log(StringUtils.capitalize('hello')); // 'Hello'
console.log(StringUtils.reverse('world')); // 'dlrow'
console.log(StringUtils.isPalindrome('racecar')); // true`}
            explanation="Augmentation allows extending modules without modifying original code. Create new features externally."
          />
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Module Pattern Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Exposing Private Variables</h3>
              <CodeExample
                title='Mistake: Accidentally Exposing Internals'
                code={`// WRONG - Exposes internals
const BadModule = (function() {
  let secretData = 'secret';
  let internalState = {};
  
  return {
    secret: secretData, // Exposes private variable!
    state: internalState, // Reference to internal object!
  };
})();

// Can modify internals from outside
BadModule.secret = 'hacked';
BadModule.state.pwned = true;

// CORRECT - Control what's exposed
const GoodModule = (function() {
  let secretData = 'secret';
  
  return {
    getSecret: function() {
      return secretData; // Read-only access
    },
    
    getState: function() {
      return { ...secretData }; // Return copy, not reference
    }
  };
})();`}
                explanation="Only expose methods, not variables. Return copies or read-only access to prevent external modification."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Memory Leaks from Closures</h3>
              <CodeExample
                title='Mistake: Holding References Too Long'
                code={`// PROBLEM - Closure holds large data even when unused
const Module = (function() {
  let largeArray = new Array(1000000).fill('data'); // Large object
  
  return {
    getValue: function() {
      return 42; // Doesn't use largeArray, but it's still held!
    },
    
    cleanup: function() {
      // Cleanup not provided - no way to free memory
    }
  };
})();

// SOLUTION - Provide cleanup and proper scoping
const ModuleFixed = (function() {
  let largeData = null;
  
  return {
    load: function() {
      largeData = new Array(1000000).fill('data');
    },
    
    getValue: function() {
      return 42;
    },
    
    unload: function() {
      largeData = null; // Free memory
    }
  };
})();`}
                explanation="Closures capture their entire scope. Provide cleanup methods to free unused variables."
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Overcomplicating Simple Code</h3>
              <CodeExample
                title='Mistake: Using Modules for Simple Functions'
                code={`// OVERCOMPLICATION - Simple function doesn't need Module Pattern
const MathModule = (function() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
  };
})();

// BETTER - Keep it simple for simple cases
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Use Module Pattern ONLY for:
// - Data privacy needs
// - Complex state management
// - Namespace organization
// - Preventing global pollution`}
                explanation="Use Module Pattern when you need encapsulation. For simple utilities, keep it straightforward."
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">Module Pattern Best Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use IIFE to create module scope immediately</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Keep private variables and functions hidden - return only what's needed</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use Revealing Module Pattern for clarity - define all functions, reveal selectively</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Accept dependencies as parameters for testability</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Provide cleanup methods if module holds large resources</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use for complex state or when standard functions don't suffice</span>
            </li>
          </ul>
        </section>

        {/* Module Pattern vs ES6 */}
        <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-4">Module Pattern vs ES6 Modules</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-100 dark:bg-blue-900/40">
                <tr>
                  <th className="px-4 py-3 font-bold">Feature</th>
                  <th className="px-4 py-3 font-bold">Module Pattern</th>
                  <th className="px-4 py-3 font-bold">ES6 Modules</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-blue-200 dark:border-blue-800">
                  <td className="px-4 py-3 font-bold">Syntax</td>
                  <td className="px-4 py-3">IIFE (function)</td>
                  <td className="px-4 py-3">import/export keywords</td>
                </tr>
                <tr className="border-t border-blue-200 dark:border-blue-800">
                  <td className="px-4 py-3 font-bold">Encapsulation</td>
                  <td className="px-4 py-3">Closures</td>
                  <td className="px-4 py-3">Language level</td>
                </tr>
                <tr className="border-t border-blue-200 dark:border-blue-800">
                  <td className="px-4 py-3 font-bold">Static Analysis</td>
                  <td className="px-4 py-3">Not possible</td>
                  <td className="px-4 py-3">Full support</td>
                </tr>
                <tr className="border-t border-blue-200 dark:border-blue-800">
                  <td className="px-4 py-3 font-bold">Tree Shaking</td>
                  <td className="px-4 py-3">Not supported</td>
                  <td className="px-4 py-3">Full support</td>
                </tr>
                <tr className="border-t border-blue-200 dark:border-blue-800">
                  <td className="px-4 py-3 font-bold">Browser Support</td>
                  <td className="px-4 py-3">All versions</td>
                  <td className="px-4 py-3">Modern browsers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/javascript/closures" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Closures</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Foundation of Module Pattern</p>
            </Link>
            <Link href="/javascript/functions" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Functions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">IIFE and function fundamentals</p>
            </Link>
            <Link href="/javascript/scope" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Scope</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Understanding scope levels</p>
            </Link>
            <Link href="/javascript/objects" className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition">
              <h3 className="font-bold text-slate-900 dark:text-white">Objects</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Building the public API</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">When should I use the Module Pattern?</h3>
              <p className="text-slate-700 dark:text-slate-300">Use it when you need data privacy, complex state management, or organizing code into namespaces. For simple utilities, ES6 modules are often better.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What's the difference between Module Pattern and ES6 modules?</h3>
              <p className="text-slate-700 dark:text-slate-300">Module Pattern uses closures and IIFEs. ES6 modules use native language features with import/export, better tree-shaking, and static analysis support.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can I modify private variables from outside a module?</h3>
              <p className="text-slate-700 dark:text-slate-300">No, truly private variables cannot be accessed externally. Only public methods can access and modify them. This is the power of the Module Pattern.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">How do I test private functions?</h3>
              <p className="text-slate-700 dark:text-slate-300">Private functions are tested indirectly through the public API. If you need direct testing, consider exposing them or using a different architecture.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What about memory leaks with Module Pattern?</h3>
              <p className="text-slate-700 dark:text-slate-300">Modules hold their entire closure scope. If they reference large objects, that memory cannot be garbage collected. Provide cleanup methods when needed.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Can modules have multiple instances?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes. By default, modules are singletons. To create multiple instances, wrap the module in a factory function.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}