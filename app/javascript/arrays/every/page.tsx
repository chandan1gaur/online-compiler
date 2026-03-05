import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript some() and every() Methods | Online Compiler',
  description: 'Learn to check array conditions with some() and every(). Test if any or all elements satisfy a condition.',
  keywords: 'some method, every method, array testing, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript some() and every() - Test Array Elements',
    description: 'Check array conditions efficiently.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/some',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript some() and every()',
    description: 'Test array elements with some() and every().',
  },

};

export default function SomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            JavaScript some() & every()
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Test array elements with boolean-returning methods to check conditions efficiently.
          </p>
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">some() Method</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The some() method checks if at least one element in the array passes the test. Returns true if any element matches, false otherwise.
          </p>
          <CodeExample
            title="some() Method Example"
            code={`const numbers = [2, 4, 6, 7, 8];
const hasOdd = numbers.some(n => n % 2 !== 0);
console.log(hasOdd); // true (7 is odd)`}
            explanation="Using some() to check if at least one element matches a condition"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">every() Method</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The every() method checks if all elements in the array pass the test. Returns true only if all elements match, false if any doesn't.
          </p>
          <CodeExample
            title="every() Method Example"
            code={`const numbers = [2, 4, 6, 8];
const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven); // true (all are even)`}
            explanation="Using every() to check if all elements match a condition"
          />
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Practical Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Check if Any User is Admin</h3>
              <CodeExample
                title="Check if Any User is Admin"
                code={`const users = [
  { name: 'Alice', role: 'user' },
  { name: 'Bob', role: 'admin' },
  { name: 'Charlie', role: 'user' }
];

const hasAdmin = users.some(user => user.role === 'admin');
console.log(hasAdmin); // true`}
                explanation="Using some() to check if at least one user has admin role"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Check if All Students Passed</h3>
              <CodeExample
                title="Check if All Students Passed"
                code={`const scores = [75, 82, 91, 88, 79];
const minScore = 70;
const allPassed = scores.every(score => score >= minScore);
console.log(allPassed); // true`}
                explanation="Using every() to check if all scores meet the minimum requirement"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Validate Email in List</h3>
              <CodeExample
                title="Validate Email in List"
                code={`const emails = ['user@example.com', 'admin@test.org', 'invalid.email'];
const isValidEmail = (email) => email.includes('@');

const hasInvalid = emails.some(email => !isValidEmail(email));
console.log(hasInvalid); // true (invalid.email has no @)`}
                explanation="Using some() to check if any email is invalid"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Check All Prices are Above Minimum</h3>
              <CodeExample
                title="Check All Prices are Above Minimum"
                code={`const prices = [19.99, 29.99, 39.99, 9.99];
const minPrice = 10;
const allAffordable = prices.every(price => price >= minPrice);
console.log(allAffordable); // false (9.99 < 10)`}
                explanation="Using every() to check if all prices meet the minimum requirement"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">some() vs every() Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Method</th>
                  <th className="px-4 py-3 font-bold">Stops When</th>
                  <th className="px-4 py-3 font-bold">Returns true if</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">some()</td>
                  <td className="px-4 py-3">Finds first match</td>
                  <td className="px-4 py-3">At least ONE matches</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600">every()</td>
                  <td className="px-4 py-3">Finds first non-match</td>
                  <td className="px-4 py-3">ALL elements match</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Performance Notes</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-900 dark:text-blue-200 text-sm">
              <strong>💡 Tip:</strong> Both some() and every() are optimized to stop iterating once they have a definitive answer:
              <br/>- some() stops as soon as it finds a matching element
              <br/>- every() stops as soon as it finds a non-matching element
            </p>
          </div>
        </section>

        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Confusing some() and every()</h3>
              <CodeExample
                title="Confusing some() and every()"
                code={`const arr = [1, 2, 3, 4, 5];

// some: is there at least one even number?
console.log(arr.some(n => n % 2 === 0)); // true (2, 4)

// every: are ALL numbers even?
console.log(arr.every(n => n % 2 === 0)); // false (1, 3, 5 odd)`}
                explanation="Understanding the difference between some() and every() methods"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ Using some() When You Need filter()</h3>
              <CodeExample
                title="Using some() When You Need filter()"
                code={`const arr = [1, 2, 3, 4, 5];

// Wrong - some() only tells you if at least one matches
arr.some(n => n > 3); // true, but you lose the values

// Better - filter() gives you all matching elements
const result = arr.filter(n => n > 3); // [4, 5]`}
                explanation="Using the wrong method for the task - some() vs filter()"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What happens with an empty array?</h3>
              <CodeExample
                title="Empty Array Behavior"
                code={`const empty = [];
console.log(empty.some(n => n > 5)); // false
console.log(empty.every(n => n > 5)); // true`}
                explanation="How some() and every() behave with empty arrays"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Are some() and every() fast?</h3>
              <p className="text-slate-700 dark:text-slate-300">Yes! They stop early once they know the answer. some() stops at first true, every() stops at first false.</p>
            </div>
          </div>
        </section>

        <div className="mb-12">
          <a href="/javascript/arrays" className="inline-block bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
            ← Back to Arrays Overview
          </a>
        </div>
      </article>
    </div>
  );
}
