import CodeExample from '@/components/CodeExample';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript Array Methods - push, pop, shift, unshift | Online Compiler',
  description: 'Learn JavaScript array methods: push, pop, shift, unshift. Master array manipulation with practical examples and best practices.',
  keywords: 'array methods, push, pop, shift, unshift, JavaScript tutorials',
  openGraph: {
    title: 'JavaScript Array Methods - push, pop, shift, unshift',
    description: 'Learn JavaScript array methods: push, pop, shift, unshift. Master array manipulation with practical examples.',
    type: 'article',
    url: 'https://www.online-compiler.com/javascript/arrays/array-methods',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JavaScript Array Methods',
    description: 'Master push, pop, shift, unshift with practical examples.',
  },
};

export default function ArrayMethodsPage() {
  const sections = [
    {
      title: 'push() - Add Elements to End',
      content: 'The push() method adds one or more elements to the end of an array and returns the new length of the array. It mutates the original array.',
      code: `const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Add multiple elements
fruits.push('mango', 'pineapple');
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'pineapple']

// Returns the new length
const length = fruits.push('grape');
console.log(length); // 6`,
    },
    {
      title: 'pop() - Remove Last Element',
      content: 'The pop() method removes the last element from an array and returns that element. It mutates the original array.',
      code: `const fruits = ['apple', 'banana', 'orange'];
const removed = fruits.pop();
console.log(removed); // 'orange'
console.log(fruits); // ['apple', 'banana']

// Pop on empty array
const empty = [];
console.log(empty.pop()); // undefined`,
    },
    {
      title: 'shift() - Remove First Element',
      content: 'The shift() method removes the first element from an array and returns that element. It mutates the original array and re-indexes all elements.',
      code: `const fruits = ['apple', 'banana', 'orange'];
const removed = fruits.shift();
console.log(removed); // 'apple'
console.log(fruits); // ['banana', 'orange']

// Shift on empty array
const empty = [];
console.log(empty.shift()); // undefined`,
    },
    {
      title: 'unshift() - Add Elements to Beginning',
      content: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length. It mutates the original array.',
      code: `const fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']

// Add multiple elements
fruits.unshift('mango', 'pineapple');
console.log(fruits); // ['mango', 'pineapple', 'apple', 'banana', 'orange']

// Returns the new length
const length = fruits.unshift('grape');
console.log(length); // 6`,
    },
  ];

  const useCases = [
    { title: 'Building a Queue', description: 'Use push() to add items and shift() to remove them (FIFO)' },
    { title: 'Building a Stack', description: 'Use push() to add items and pop() to remove them (LIFO)' },
    { title: 'Recent Items List', description: 'Use push() to add new items, pop() to show recent ones' },
    { title: 'Real-time Notifications', description: 'Use unshift() to add new notifications at the top' },
  ];

  const mistakes = [
    {
      title: 'Forgetting These Methods Mutate the Original Array',
      code: `const original = [1, 2, 3];
original.push(4);
console.log(original); // [1, 2, 3, 4] - original modified!

// If you need to preserve original:
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]`,
    },
    {
      title: 'Assuming Return Value Is the Array',
      code: `const arr = [1, 2, 3];
const result = arr.push(4); // Result is 4 (the length), not the array!

// Correct:
arr.push(4);
console.log(arr); // [1, 2, 3, 4]`,
    },
  ];

  const faqs = [
    { q: 'Do push and pop modify the original array?', a: 'Yes, both push() and pop() are mutating methods that modify the original array.' },
    { q: 'What do push() and unshift() return?', a: 'Both return the new length of the array after the operation.' },
    { q: 'How do I add elements to both ends?', a: 'Use push() for the end and unshift() for the beginning, or use concat(): const newArr = [1, ...existing, 2];' },
    { q: 'What\'s the performance difference?', a: 'push() and pop() are O(1) operations. shift() and unshift() are O(n) because they require re-indexing all elements.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            JavaScript Array Methods
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            push(), pop(), shift(), unshift()
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Master the fundamental array manipulation methods for adding and removing elements from arrays.
          </p>
        </div>

        {/* Methods Overview */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Method Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">Adding Elements</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                <strong>push():</strong> Add to end<br/>
                <strong>unshift():</strong> Add to beginning
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Removing Elements</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                <strong>pop():</strong> Remove from end<br/>
                <strong>shift():</strong> Remove from beginning
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Methods */}
        {sections.map((section, idx) => (
          <section key={idx} className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">{section.content}</p>
            <CodeExample title={section.title} code={section.code} explanation={section.content} />
          </section>
        ))}

        {/* Comparison */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Method Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold text-slate-900 dark:text-white">Method</th>
                  <th className="px-4 py-3 font-bold text-slate-900 dark:text-white">Position</th>
                  <th className="px-4 py-3 font-bold text-slate-900 dark:text-white">Returns</th>
                  <th className="px-4 py-3 font-bold text-slate-900 dark:text-white">Performance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">push()</td>
                  <td className="px-4 py-3">End</td>
                  <td className="px-4 py-3">New length</td>
                  <td className="px-4 py-3"><span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">O(1)</span></td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">pop()</td>
                  <td className="px-4 py-3">End</td>
                  <td className="px-4 py-3">Removed element</td>
                  <td className="px-4 py-3"><span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">O(1)</span></td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">unshift()</td>
                  <td className="px-4 py-3">Beginning</td>
                  <td className="px-4 py-3">New length</td>
                  <td className="px-4 py-3"><span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">O(n)</span></td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">shift()</td>
                  <td className="px-4 py-3">Beginning</td>
                  <td className="px-4 py-3">Removed element</td>
                  <td className="px-4 py-3"><span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">O(n)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real World Use Cases */}
        <section className="mb-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
          <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-200 mb-6">Real-World Use Cases</h2>
          <div className="space-y-4">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{useCase.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border border-red-200 dark:border-red-800">
          <h2 className="text-3xl font-bold text-red-900 dark:text-red-200 mb-6">Common Mistakes to Avoid</h2>
          <div className="space-y-6">
            {mistakes.map((mistake, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3">❌ {mistake.title}</h3>
                <CodeExample title={mistake.title} code={mistake.code} explanation="Common mistake to avoid" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">Best Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use <strong>push()</strong> and <strong>pop()</strong> for stack-like structures (Last-In-First-Out)</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Use <strong>push()</strong> and <strong>shift()</strong> for queue-like structures (First-In-First-Out)</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Avoid <strong>unshift()</strong> and <strong>shift()</strong> on large arrays (O(n) performance)</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Remember these methods mutate the original array - create a copy if you need to preserve it</span>
            </li>
            <li className="flex items-start gap-3 text-green-900 dark:text-green-200">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <span>Check array length before calling pop() or shift() to avoid undefined returns</span>
            </li>
          </ul>
        </section>

        {/* Back to Overview */}
        <div className="mb-12">
          <a href="/javascript/arrays" className="inline-block bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
            ← Back to Arrays Overview
          </a>
        </div>
      </article>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </div>
  );
}
