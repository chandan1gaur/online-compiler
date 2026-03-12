import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Top 100 JavaScript Interview Questions & Answers with Code Examples",
  description: "Master JavaScript interviews with the top 100 frequently asked coding problems. Comprehensive answers, code examples, and explanations covering beginner to advanced concepts.",
  keywords: [
    "top 100 javascript interview questions",
    "javascript interview questions and answers",
    "javascript interview questions with answers",
    "javascript interview questions with code",
    "javascript coding interview questions",
    "javascript coding interview problems",
    "javascript coding challenges",
    "javascript interview coding problems",
    "javascript interview code examples",
    "javascript interview practice questions",
    "javascript interview preparation",
    "javascript interview prep",
    "js interview questions",
    "js interview questions and answers",
    "js coding interview questions",
    "frontend interview questions",
    "frontend javascript interview questions",
    "javascript problem solving",
    "javascript algorithms",
    "javascript algorithm problems",
    "javascript algorithm challenges",
    "data structures and algorithms in javascript",
    "javascript arrays interview questions",
    "array manipulation problems",
    "array methods interview questions",
    "javascript strings interview questions",
    "string algorithm problems",
    "javascript objects interview questions",
    "object manipulation problems",
    "javascript map interview questions",
    "javascript set interview questions",
    "javascript recursion interview questions",
    "javascript sorting algorithms",
    "javascript searching algorithms",
    "javascript time complexity",
    "javascript space complexity",
    "big o notation javascript",
    "javascript coding patterns",
    "two sum javascript",
    "kadane algorithm javascript",
    "binary search javascript",
    "merge sort javascript",
    "quick sort javascript",
    "bubble sort javascript",
    "string palindrome javascript",
    "anagram javascript",
    "frequency counter javascript",
    "sliding window javascript",
    "two pointers javascript",
    "hash map javascript",
    "map reduce filter interview questions",
    "es6 interview questions",
    "modern javascript interview questions",
    "javascript promises interview questions",
    "async await interview questions",
    "closures interview questions",
    "hoisting interview questions",
    "scope interview questions",
    "this keyword interview questions",
    "event loop interview questions",
    "prototype interview questions",
    "call apply bind interview questions",
    "javascript debouncing",
    "javascript throttling",
    "javascript deep clone",
    "javascript shallow vs deep copy",
    "javascript interview questions for beginners",
    "javascript interview questions for experienced",
    "javascript interview questions for freshers",
    "javascript interview questions for senior developers",
    "javascript interview questions 2025",
    "javascript interview questions 2026",
    "online javascript compiler",
    "javascript online editor",
    "run javascript online",
    "javascript playground",
  ],
  openGraph: {
    title: "Top 100 JavaScript Interview Questions & Answers",
    description: "Master JavaScript interviews with the top 100 frequently asked coding problems.",
    url: "/javascript/interview-questions",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 100 JavaScript Interview Questions & Answers",
    description: "Master JavaScript interviews with the top 100 frequently asked coding problems.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/interview-questions" },
};

export default function JavascriptInterviewQuestionsPage() {
  const unused_beginnerQuestions = [
    {
      title: "1. Remove Duplicates from Array",
      code: `const arr = [1, 2, 2, 3, 4, 4, 5];

// Method 1: Using Set (O(n) time, O(n) space)
const removeDuplicates1 = (arr) => [...new Set(arr)];
console.log(removeDuplicates1(arr)); // [1, 2, 3, 4, 5]

// Method 2: Using filter and indexOf (O(n²) time)
const removeDuplicates2 = (arr) => 
  arr.filter((item, index) => arr.indexOf(item) === index);

// Method 3: Using reduce (O(n) time)
const removeDuplicates3 = (arr) => 
  arr.reduce((acc, item) => 
    acc.includes(item) ? acc : [...acc, item], []);`,
      explanation: "Remove duplicates from array. Set is most efficient O(n). filter is O(n²). Choose based on performance."
    },
    {
      title: "2. Reverse an Array",
      code: `const arr = [1, 2, 3, 4, 5];

// Method 1: Using reverse() - mutates original
const reversed1 = [...arr].reverse();
console.log(reversed1); // [5, 4, 3, 2, 1]

// Method 2: Using spread operator with reverse
const reversed2 = arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1] - modified!

// Method 3: Using reduceRight
const reversed3 = arr.reduceRight((acc, item) => [...acc, item], []);

// Method 4: Using a loop
const reversed4 = (arr) => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};`,
      explanation: "Reverse array. Use spread + reverse for non-mutating approach. reverse() modifies original array."
    },
    {
      title: "3. Find Maximum and Minimum Elements",
      code: `const arr = [3, 7, 2, 9, 1, 5];

// Method 1: Using Math.max/min with spread (O(n))
const max1 = Math.max(...arr);
const min1 = Math.min(...arr);
console.log(max1, min1); // 9, 1

// Method 2: Using reduce (O(n) one-pass)
const findMaxMin = (arr) => 
  arr.reduce((acc, item) => ({
    max: Math.max(acc.max, item),
    min: Math.min(acc.min, item)
  }), { max: -Infinity, min: Infinity });

// Method 3: Manual loop (O(n))
const findMaxMin2 = (arr) => {
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { max, min };
};`,
      explanation: "Find max/min. Math.max/min is simple. Reduce is more efficient one-pass approach."
    },
    {
      title: "4. Check if String is Palindrome",
      code: `const isPalindrome = (str) => {
  // Remove non-alphanumeric and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('hello')); // false

// Two pointer approach (more efficient)
const isPalindrome2 = (str) => {
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
};`,
      explanation: "Check palindrome. Clean string first. Two-pointer is O(n) with O(1) space."
    },
    {
      title: "5. Sum All Array Elements",
      code: `const arr = [1, 2, 3, 4, 5];

// Method 1: Using reduce (idiomatic)
const sum1 = arr.reduce((acc, num) => acc + num, 0);
console.log(sum1); // 15

// Method 2: Using for loop
const sum2 = (arr) => {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
};

// Method 3: Using forEach
const sum3 = (arr) => {
  let sum = 0;
  arr.forEach(num => sum += num);
  return sum;
};

// Method 4: Sum specific property in array of objects
const users = [{ age: 25 }, { age: 30 }, { age: 35 }];
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 90`,
      explanation: "Sum array elements. Reduce is idiomatic and works with objects too."
    },
    {
      title: "6. Find Duplicate Numbers",
      code: `const arr = [1, 2, 2, 3, 4, 4, 4, 5];

// Method 1: Using filter and Set (O(n))
const findDuplicates1 = (arr) => {
  return [...new Set(arr.filter((item, index) => 
    arr.indexOf(item) !== index))];
};
console.log(findDuplicates1(arr)); // [2, 4]

// Method 2: Using a Set to track (O(n) time, space)
const findDuplicates2 = (arr) => {
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach(item => {
    if (seen.has(item)) duplicates.add(item);
    else seen.add(item);
  });
  return Array.from(duplicates);
};

// Method 3: Using object for frequency
const findDuplicates3 = (arr) => {
  const count = {};
  arr.forEach(item => count[item] = (count[item] || 0) + 1);
  return Object.keys(count).filter(key => count[key] > 1).map(Number);
};`,
      explanation: "Find duplicate elements. Set approach is cleanest. Frequency counting shows pattern."
    },
    {
      title: "7. Flatten a Nested Array",
      code: `const nested = [1, [2, [3, [4, 5]]], 6];

// Method 1: Using flat() method (simplest)
const flattened1 = nested.flat(Infinity);
console.log(flattened1); // [1, 2, 3, 4, 5, 6]

// Method 2: Using recursion
const flatten2 = (arr) => {
  const result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flatten2(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// Method 3: Using reduce with recursion
const flatten3 = (arr) => 
  arr.reduce((acc, item) => 
    acc.concat(Array.isArray(item) ? flatten3(item) : item), []);`,
      explanation: "Flatten nested arrays. flat() is simplest. Recursion is classic approach."
    },
    {
      title: "8. Merge Two Sorted Arrays",
      code: `const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

// Method 1: Two pointer merge (optimal O(n+m))
const merge = (arr1, arr2) => {
  const result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
};
console.log(merge(arr1, arr2)); // [1, 2, 3, 4, 5, 6]

// Method 2: Using spread and sort (O(n log n))
const merged = [...arr1, ...arr2].sort((a, b) => a - b);
console.log(merged); // [1, 2, 3, 4, 5, 6]`,
      explanation: "Merge sorted arrays. Two-pointer is O(n+m) optimal. Spread+sort is O(n log n) simpler."
    },
    {
      title: "9. Reverse a String",
      code: `const str = 'Hello World';

// Method 1: Using split, reverse, join
const reversed1 = str.split('').reverse().join('');
console.log(reversed1); // 'dlroW olleH'

// Method 2: Using spread operator
const reversed2 = [...str].reverse().join('');

// Method 3: Using for loop (O(n) backwards)
const reversed3 = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// Method 4: Using reduce
const reversed4 = str.split('').reduce((rev, char) => char + rev, '');`,
      explanation: "Reverse string. split+reverse+join is common. Spread operator is modern approach."
    },
    {
      title: "10. Count Character Frequency",
      code: `const str = 'hello';
const arr = ['a', 'b', 'a', 'c'];

// Method 1: Using reduce with object
const charFreq = (str) => {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};
console.log(charFreq('hello')); // { h: 1, e: 1, l: 2, o: 1 }

// Method 2: Using Array reduce
const arrFreq = arr.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(arrFreq); // { a: 2, b: 1, c: 1 }

// Method 3: Using Map for better organization
const freqMap = (str) => {
  const map = new Map();
  [...str].forEach(char => {
    map.set(char, (map.get(char) || 0) + 1);
  });
  return map;
};`,
      explanation: "Count frequencies. Object approach simple. Map approach better for non-string keys."
    },
  ];

  const unused_intermediateQuestions = [
    {
      title: "11. Group Array by Property",
      code: `const users = [
  { id: 1, category: 'admin', name: 'John' },
  { id: 2, category: 'user', name: 'Jane' },
  { id: 3, category: 'admin', name: 'Bob' }
];

// Method 1: Using reduce with object
const groupBy = (arr, key) => 
  arr.reduce((acc, obj) => {
    const groupKey = obj[key];
    acc[groupKey] = acc[groupKey] || [];
    acc[groupKey].push(obj);
    return acc;
  }, {});

console.log(groupBy(users, 'category'));
// { admin: [...], user: [...] }

// Method 2: Using Map for non-string keys
const groupByMap = (arr, key) => {
  const map = new Map();
  arr.forEach(obj => {
    const groupKey = obj[key];
    if (!map.has(groupKey)) map.set(groupKey, []);
    map.get(groupKey).push(obj);
  });
  return map;
};`,
      explanation: "Group array elements by property. Reduce is idiomatic. Map handles complex key types."
    },
    {
      title: "12. Binary Search",
      code: `const arr = [1, 3, 5, 7, 9, 11, 13];

// Method 1: Iterative approach
const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
console.log(binarySearch(arr, 7)); // 3

// Method 2: Recursive approach
const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) 
    return binarySearchRecursive(arr, target, mid + 1, right);
  return binarySearchRecursive(arr, target, left, mid - 1);
};`,
      explanation: "Binary search in sorted array. O(log n) time complexity. Iterative or recursive approach."
    },
    {
      title: "13. Bubble Sort",
      code: `const arr = [64, 34, 25, 12, 22, 11, 90];

// Method 1: Simple bubble sort
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// Method 2: Optimized with early exit
const bubbleSortOptimized = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};`,
      explanation: "Bubble sort. O(n²) time complexity. Optimized version checks for early exit."
    },
    {
      title: "14. Quick Sort",
      code: `const arr = [64, 34, 25, 12, 22, 11, 90];

// Quick sort implementation
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
};

console.log(quickSort(arr)); // [11, 12, 22, 25, 34, 64, 90]

// In-place quick sort
const quickSortInPlace = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSortInPlace(arr, low, pi - 1);
    quickSortInPlace(arr, pi + 1, high);
  }
  return arr;
};`,
      explanation: "Quick sort. Average O(n log n), worst O(n²). Simple version uses extra space, in-place is optimal."
    },
    {
      title: "15. Merge Sort",
      code: `const arr = [64, 34, 25, 12, 22, 11, 90];

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return [...result, ...left.slice(i), ...right.slice(j)];
};

console.log(mergeSort(arr)); // [11, 12, 22, 25, 34, 64, 90]`,
      explanation: "Merge sort. Guaranteed O(n log n) time. Stable sort. Requires O(n) extra space."
    },
    {
      title: "16. Insertion Sort",
      code: `const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  
  return arr;
};

console.log(insertionSort([64, 34, 25, 12, 22])); // [12, 22, 25, 34, 64]`,
      explanation: "Insertion sort. O(n²) worst, O(n) best. Stable. Used for small arrays."
    },
    {
      title: "17. Selection Sort",
      code: `const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  
  return arr;
};

console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]`,
      explanation: "Selection sort. O(n²) always. Not stable. Fewer swaps than bubble."
    },
    {
      title: "18. Heap Sort",
      code: `const heapSort = (arr) => {
  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(n, largest);
    }
  };
  
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr.length, i);
  }
  
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }
  
  return arr;
};`,
      explanation: "Heap sort. O(n log n) guaranteed. Max-heap to sort ascending."
    },
    {
      title: "19. Counting Sort",
      code: `const countingSort = (arr, max) => {
  const count = Array(max + 1).fill(0);
  const result = [];
  
  for (let num of arr) {
    count[num]++;
  }
  
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  
  return result;
};

console.log(countingSort([4, 2, 3, 1, 2], 4)); // [1, 2, 2, 3, 4]`,
      explanation: "Counting sort. O(n+k) where k is max value. Non-comparative sort."
    },
    {
      title: "20. Radix Sort",
      code: `const radixSort = (arr) => {
  const getMax = (arr) => Math.max(...arr);
  
  let max = getMax(arr);
  let exp = 1;
  
  while (Math.floor(max / exp) > 0) {
    countingSortByDigit(arr, exp);
    exp *= 10;
  }
  
  return arr;
};

const countingSortByDigit = (arr, exp) => {
  const count = Array(10).fill(0);
  const temp = Array(arr.length);
  
  for (let num of arr) {
    count[Math.floor(num / exp) % 10]++;
  }
  
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    temp[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
};`,
      explanation: "Radix sort. O(nk) where k is number of digits. Stable sort."
    },
  ];

  const unused_advancedQuestions = [
    {
      title: "16. Fibonacci Number",
      code: `// Method 1: Naive recursion (inefficient)
const fib1 = (n) => {
  if (n <= 1) return n;
  return fib1(n - 1) + fib1(n - 2);
};

// Method 2: Memoization (O(n) time)
const fib2 = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
};

// Method 3: Dynamic programming (O(n) time, space)
const fib3 = (n) => {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// Method 4: Space optimized (O(1) space)
const fib4 = (n) => {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};`,
      explanation: "Calculate fibonacci. Memoization or DP for efficiency. Space-optimized uses O(1) space."
    },
    {
      title: "17. Longest Increasing Subsequence",
      code: `const arr = [10, 9, 2, 5, 3, 7, 101, 18];

const lengthOfLIS = (arr) => {
  const n = arr.length;
  const dp = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
};

console.log(lengthOfLIS(arr)); // 4 [2, 3, 7, 101]

// Method 2: Using binary search (O(n log n))
const lengthOfLIS2 = (arr) => {
  const tails = [];
  
  for (let num of arr) {
    let left = 0, right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
  }
  
  return tails.length;
};`,
      explanation: "Find longest increasing subsequence. DP is O(n²), binary search version O(n log n)."
    },
    {
      title: "18. Edit Distance (Levenshtein)",
      code: `const editDistance = (word1, word2) => {
  const m = word1.length, n = word2.length;
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1]
        );
      }
    }
  }
  return dp[m][n];
};

console.log(editDistance('horse', 'ros')); // 3`,
      explanation: "Minimum edits to transform string. Dynamic programming O(m*n) solution."
    },
    {
      title: "19. Rotate Array Right",
      code: `const arr = [1, 2, 3, 4, 5];

// Method 1: Slice and concat
const rotate1 = (arr, k) => {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
};

// Method 2: Reverse approach
const rotate2 = (arr, k) => {
  k = k % arr.length;
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++; end--;
    }
  };
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
};

console.log(rotate1(arr, 2)); // [4, 5, 1, 2, 3]`,
      explanation: "Rotate array right by k positions. Slice is O(n) simple. Reverse is O(n) space-optimal."
    },
    {
      title: "20. Longest Substring Without Repeating",
      code: `const lengthOfLongestSubstring = (s) => {
  const charIndex = {};
  let maxLen = 0;
  let start = 0;
  
  for (let end = 0; end < s.length; end++) {
    if (charIndex[s[end]] !== undefined && charIndex[s[end]] >= start) {
      start = charIndex[s[end]] + 1;
    }
    charIndex[s[end]] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }
  
  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 ('abc')
console.log(lengthOfLongestSubstring('pwwkew')); // 3 ('wke')`,
      explanation: "Find longest substring without repeating. Sliding window O(n) approach."
    },
    {
      title: "21. Container With Most Water",
      code: `const maxArea = (height) => {
  let maxArea = 0;
  let left = 0, right = height.length - 1;
  
  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;
    maxArea = Math.max(maxArea, area);
    
    if (height[left] < height[right]) left++;
    else right--;
  }
  
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49`,
      explanation: "Max area between two lines. Two-pointer approach O(n) time."
    },
    {
      title: "22. Merge K Sorted Lists",
      code: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  return mergeHelper(lists, 0, lists.length - 1);
};

const mergeHelper = (lists, left, right) => {
  if (left === right) return lists[left];
  if (left > right) return null;
  
  const mid = Math.floor((left + right) / 2);
  const l1 = mergeHelper(lists, left, mid);
  const l2 = mergeHelper(lists, mid + 1, right);
  
  return merge(l1, l2);
};

const merge = (l1, l2) => {
  const dummy = new ListNode(0);
  let current = dummy;
  
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  
  current.next = l1 || l2;
  return dummy.next;
};`,
      explanation: "Merge K sorted lists using divide and conquer. O(n log k) complexity."
    },
    {
      title: "23. Word Ladder Length",
      code: `const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  
  const queue = [[beginWord, 1]];
  
  while (queue.length) {
    const [word, length] = queue.shift();
    
    if (word === endWord) return length;
    
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        
        if (wordSet.has(newWord)) {
          queue.push([newWord, length + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  
  return 0;
};`,
      explanation: "Word ladder with BFS. Find shortest path from beginWord to endWord. O(n*l²*26)."
    },
    {
      title: "24. LRU Cache",
      code: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1`,
      explanation: "Least Recently Used Cache. Map maintains insertion order. O(1) get/put."
    },
    {
      title: "25. Median of Two Sorted Arrays",
      code: `const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  
  let low = 0, high = nums1.length;
  
  while (low <= high) {
    const cut1 = Math.floor((low + high) / 2);
    const cut2 = Math.floor((nums1.length + nums2.length + 1) / 2) - cut1;
    
    const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    const right1 = cut1 === nums1.length ? Infinity : nums1[cut1];
    const right2 = cut2 === nums2.length ? Infinity : nums2[cut2];
    
    if (left1 <= right2 && left2 <= right1) {
      const even = (nums1.length + nums2.length) % 2 === 0;
      return even 
        ? (Math.max(left1, left2) + Math.min(right1, right2)) / 2
        : Math.max(left1, left2);
    } else if (left1 > right2) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
  }
};`,
      explanation: "Median of two sorted arrays. Binary search O(log(min(m,n))) time."
    },
    {
      title: "26. Permutations",
      code: `const permute = (nums) => {
  const result = [];
  
  const backtrack = (current, remaining) => {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }
    
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      backtrack(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
      current.pop();
    }
  };
  
  backtrack([], nums);
  return result;
};

console.log(permute([1, 2, 3]));
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]`,
      explanation: "Generate all permutations. Backtracking approach. O(n! * n) time."
    },
    {
      title: "27. Combinations",
      code: `const combine = (n, k) => {
  const result = [];
  
  const backtrack = (start, current) => {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    
    for (let i = start; i <= n; i++) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  };
  
  backtrack(1, []);
  return result;
};

console.log(combine(4, 2));
// [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]`,
      explanation: "Generate all combinations. Backtracking. O(C(n,k) * k) time."
    },
    {
      title: "28. Word Break",
      code: `const wordBreak = (s, wordDict) => {
  const set = new Set(wordDict);
  const memo = {};
  
  const helper = (index) => {
    if (index in memo) return memo[index];
    if (index === s.length) return true;
    
    for (let i = index + 1; i <= s.length; i++) {
      const word = s.slice(index, i);
      if (set.has(word) && helper(i)) {
        return memo[index] = true;
      }
    }
    
    return memo[index] = false;
  };
  
  return helper(0);
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // true
console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true`,
      explanation: "Word break with dynamic programming. O(n²) time, O(n) space."
    },
    {
      title: "29. Coin Change Combinations",
      code: `const change = (amount, coins) => {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  
  return dp[amount];
};

console.log(change(5, [1, 2, 5])); // 4 (5, 2+2+1, 2+1+1+1, 1+1+1+1+1)

// Coin change (minimum coins)
const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
};`,
      explanation: "Coin change combinations and minimum coins. Dynamic programming approaches."
    },
    {
      title: "30. Regular Expression Matching",
      code: `const isMatch = (s, p) => {
  const memo = {};
  
  const helper = (i, j) => {
    const key = i + ',' + j;
    if (key in memo) return memo[key];
    
    // Base case: pattern is empty
    if (j === p.length) return i === s.length;
    
    const charMatch = i < s.length && (p[j] === '.' || p[j] === s[i]);
    
    // Star matching
    if (j + 1 < p.length && p[j + 1] === '*') {
      const res = (charMatch && helper(i + 1, j)) || helper(i, j + 2);
      return memo[key] = res;
    }
    
    // Regular character
    const res = charMatch && helper(i + 1, j + 1);
    return memo[key] = res;
  };
  
  return helper(0, 0);
};

console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true`,
      explanation: "Regex matching with '.' and '*'. Dynamic programming with memoization."
    },
  ];

  const unused_mapSetProblems = [
    {
      title: "31. Two Sum with Map",
      code: `const twoSum = (nums, target) => {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]`,
      explanation: "Two sum with Map for O(n) lookup. Store complement to find indices."
    },
    {
      title: "32. Set Union and Intersection",
      code: `const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

// Union
const union = (a, b) => [...new Set([...a, ...b])];
console.log(union(arr1, arr2)); // [1, 2, 3, 4, 5, 6]

// Intersection
const intersection = (a, b) => {
  const setB = new Set(b);
  return [...new Set(a)].filter(x => setB.has(x));
};
console.log(intersection(arr1, arr2)); // [3, 4]

// Difference
const difference = (a, b) => {
  const setB = new Set(b);
  return [...new Set(a)].filter(x => !setB.has(x));
};
console.log(difference(arr1, arr2)); // [1, 2]`,
      explanation: "Set operations: union, intersection, difference using Sets."
    },
    {
      title: "33. Contain Duplicate III",
      code: `const containsNearbyAlmostDuplicate = (nums, indexDiff, valueDiff) => {
  if (indexDiff < 1 || valueDiff < 0) return false;
  
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const bucket = Math.floor(nums[i] / (valueDiff + 1));
    
    if (map.has(bucket) || 
        (map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= valueDiff) ||
        (map.has(bucket + 1) && Math.abs(nums[i] - map.get(bucket + 1)) <= valueDiff)) {
      return true;
    }
    
    map.set(bucket, nums[i]);
    
    if (i >= indexDiff) {
      map.delete(Math.floor(nums[i - indexDiff] / (valueDiff + 1)));
    }
  }
  
  return false;
};`,
      explanation: "Contains duplicate with index and value constraints. Bucketing approach."
    },
    {
      title: "34. Valid Parentheses",
      code: `const isValidParentheses = (s) => {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  
  for (let char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  
  return stack.length === 0;
};

console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('(]')); // false
console.log(isValidParentheses('([{}])')); // true`,
      explanation: "Valid parentheses with Map for matching pairs. Stack for nesting."
    },
    {
      title: "35. Next Greater Element",
      code: `const nextGreaterElement = (nums1, nums2) => {
  const map = new Map();
  const stack = [];
  
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  
  return nums1.map(num => map.get(num) ?? -1);
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]`,
      explanation: "Next greater element using monotonic stack and Map."
    },
    {
      title: "36. Largest Rectangle in Histogram",
      code: `const largestRectangleArea = (heights) => {
  const stack = [];
  let maxArea = 0;
  
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  
  while (stack.length) {
    const h = heights[stack.pop()];
    const w = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, h * w);
  }
  
  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10`,
      explanation: "Largest rectangle using monotonic stack. O(n) time."
    },
    {
      title: "37. Trapping Rain Water",
      code: `const trap = (height) => {
  if (!height.length) return 0;
  
  const leftMax = Array(height.length);
  const rightMax = Array(height.length);
  
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  
  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const level = Math.min(leftMax[i], rightMax[i]);
    water += level - height[i];
  }
  
  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6`,
      explanation: "Trapping rain water. Pre-compute max heights left and right."
    },
    {
      title: "38. Top K Frequent Elements",
      code: `const topKFrequent = (nums, k) => {
  const map = new Map();
  
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);
};

// Bucket sort approach
const topKFrequent2 = (nums, k) => {
  const map = new Map();
  const buckets = Array(nums.length + 1);
  
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  for (let [num, freq] of map) {
    if (!buckets[freq]) buckets[freq] = [];
    buckets[freq].push(num);
  }
  
  return buckets.reverse().flat().slice(0, k);
};`,
      explanation: "Top K frequent elements. Sort or bucket sort approach."
    },
    {
      title: "39. LFU Cache",
      code: `class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.freq = new Map();
    this.minFreq = 0;
    this.freqList = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    this.increaseFreq(key);
    return this.cache.get(key);
  }
  
  put(key, value) {
    if (this.capacity === 0) return;
    
    if (this.cache.has(key)) {
      this.cache.set(key, value);
      this.increaseFreq(key);
      return;
    }
    
    if (this.cache.size === this.capacity) {
      const list = this.freqList.get(this.minFreq);
      const lruKey = list.shift();
      if (list.length === 0) this.freqList.delete(this.minFreq);
      this.cache.delete(lruKey);
      this.freq.delete(lruKey);
    }
    
    this.cache.set(key, value);
    this.freq.set(key, 1);
    this.minFreq = 1;
    if (!this.freqList.has(1)) this.freqList.set(1, []);
    this.freqList.get(1).push(key);
  }
  
  increaseFreq(key) {
    const freq = this.freq.get(key);
    this.freqList.get(freq).splice(this.freqList.get(freq).indexOf(key), 1);
    if (this.freqList.get(freq).length === 0) {
      this.freqList.delete(freq);
      if (this.minFreq === freq) this.minFreq++;
    }
    
    this.freq.set(key, freq + 1);
    if (!this.freqList.has(freq + 1)) this.freqList.set(freq + 1, []);
    this.freqList.get(freq + 1).push(key);
  }
}`,
      explanation: "Least Frequently Used Cache with frequency tracking."
    },
    {
      title: "40. Subarray Sum Equals K",
      code: `const subarraySum = (nums, k) => {
  const map = new Map();
  map.set(0, 1);
  
  let sum = 0, count = 0;
  
  for (let num of nums) {
    sum += num;
    
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  
  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2`,
      explanation: "Subarray sum equals k using prefix sum and Map. O(n) time."
    },
    {
      title: "41. Most Common Word",
      code: `const mostCommonWord = (paragraph, banned) => {
  const bannedSet = new Set(banned.map(w => w.toLowerCase()));
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, ' ')
    .split(/\\s+/)
    .filter(w => w && !bannedSet.has(w));
  
  const map = new Map();
  let max = 0, result = '';
  
  for (let word of words) {
    const count = (map.get(word) || 0) + 1;
    map.set(word, count);
    if (count > max) {
      max = count;
      result = word;
    }
  }
  
  return result;
};`,
      explanation: "Most common word excluding banned words using Map."
    },
  ];

  const unused_objectStringProblems = [
    // existing object/string problems already defined above
  ];

  // --- new categorized lists based on user request ---
  const arrayQuestions = [
    // 1 Reverse an array
    {
      title: "Reverse an Array",
      code: `const reverseArray = (arr) => [...arr].reverse();
console.log(reverseArray([1,2,3])); // [3,2,1]

// manual loop
const rev = (arr) => {
  const res = [];
  for (let i = arr.length-1; i >= 0; i--) res.push(arr[i]);
  return res;
};`,
      explanation: "Use built-in reverse or manual loop. spread + reverse avoids mutating original."
    },
    // 2 Find largest number in array
    {
      title: "Find Largest Number",
      code: `const arr = [5, 2, 9, 1];
const max1 = Math.max(...arr);
const max2 = arr.reduce((a,b)=>a>b?a:b, -Infinity);
let m = arr[0]; for(let x of arr) if(x > m) m = x;
console.log(max1, max2, m);`,
      explanation: "Math.max with spread is concise; reduce or loop works too."
    },
    // 3 Find smallest number
    {
      title: "Find Smallest Number",
      code: `const arr = [5, 2, 9, 1];
const min = Math.min(...arr);
// or reduce
const min2 = arr.reduce((a,b)=>a<b?a:b, Infinity);
console.log(min, min2);`,
      explanation: "Math.min or reduce/loop."
    },
    // 4 Remove duplicates
    {
      title: "Remove Duplicates",
      code: `const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
// filter/indexOf
const uniq2 = arr.filter((x,i)=>arr.indexOf(x)===i);
console.log(unique, uniq2);`,
      explanation: "Set is simplest O(n); filter is O(n²)."
    },
    // 5 Flatten nested array
    {
      title: "Flatten Nested Array",
      code: `const flat = (arr) => arr.flat(Infinity);
// recursive
const flat2 = a=>a.reduce((r,x)=>r.concat(Array.isArray(x)?flat2(x):x),[]);
console.log(flat([1,[2,3]]), flat2([1,[2,3]]));
`,
      explanation: "flat(Infinity) or recursive reduce."
    },
    // 6 Second largest
    {
      title: "Second Largest Number",
      code: `const arr = [7, 3, 9, 1, 9, 5];
const arr2 = [...arr];
arr2.sort((a,b)=>b-a);
const second = arr2[1];
// single pass
let max=-Infinity, secondMax=-Infinity;
for(let x of arr){
  if(x>max){secondMax=max;max=x;} 
  else if(x>secondMax && x!==max) secondMax=x;
}
console.log(second, secondMax);`,
      explanation: "Sort or one-pass tracking two maximums."
    },
    // 7 Merge arrays without duplicates
    {
      title: "Merge Two Arrays Without Duplicates",
      code: `const a = [1, 2, 3];
const b = [3, 4, 5];
const merge = (a,b)=>[...new Set([...a,...b])];
// using filter
const merge2 = [...a];
b.forEach(x=>{ if(!merge2.includes(x)) merge2.push(x);});
console.log(merge([1,2],[2,3]), merge2);`,
      explanation: "Set union or manual filter inclusion."
    },
    // 8 Sort ascending/descending
    {
      title: "Sort Array Asc/Desc",
      code: `let arr1=[3,1,2];
console.log(arr1.sort((a,b)=>a-b)); // asc
console.log(arr1.sort((a,b)=>b-a)); // desc`,
      explanation: "Use sort with comparator. Beware mutating original."
    },
    // 9 Sort array of objects by property
    {
      title: "Sort Array of Objects by Property",
      code: `let objs=[{age:30,name:'Bob'},{age:20,name:'Alice'}];
console.log(objs.sort((a,b)=>a.age-b.age));
// descending
console.log(objs.sort((a,b)=>b.name.localeCompare(a.name)));`,
      explanation: "Comparator over object fields; use localeCompare for strings."
    },
    // 10 Chunk array
    {
      title: "Chunk Array into Smaller Arrays",
      code: `const chunk = (arr,size)=>{
  const res=[];for(let i=0;i<arr.length;i+=size)res.push(arr.slice(i,i+size));return res;};
console.log(chunk([1,2,3,4,5],2));`,
      explanation: "Slice in loop or reduce-based approach."
    },
    // 11 Rotate left by k
    {
      title: "Rotate Array Left by k Positions",
      code: `const rotateLeft=(arr,k)=>{
  k=k%arr.length;return arr.slice(k).concat(arr.slice(0,k));};
console.log(rotateLeft([1,2,3,4],2));`,
      explanation: "Use slice and concat or reverse technique."
    },
    // 12 Rotate right by k
    {
      title: "Rotate Array Right by k Positions",
      code: `const rotateRight=(arr,k)=>{
  k=k%arr.length;return arr.slice(-k).concat(arr.slice(0,-k));};
console.log(rotateRight([1,2,3,4],2));`,
      explanation: "Mirror of left rotation."
    },
    // 13 Intersection of two arrays
    {
      title: "Find Intersection of Two Arrays",
      code: `const intersection=(a,b)=>[...new Set(a)].filter(x=>new Set(b).has(x));
console.log(intersection([1,2,3],[2,3,4]));
`,
      explanation: "Use Set for membership check."
    },
    // 14 Difference between two arrays
    {
      title: "Find Difference Between Two Arrays",
      code: `const difference=(a,b)=>a.filter(x=>!new Set(b).has(x));
console.log(difference([1,2,3],[2,3]));`,
      explanation: "Filter those not in second set."
    },
    // 15 Check duplicates
    {
      title: "Check if Array Contains Duplicates",
      code: `const hasDup=arr=>new Set(arr).size!==arr.length;
console.log(hasDup([1,2,2]), hasDup([1,2,3]));
`,
      explanation: "Compare set size with length."
    },
    // 16 Find missing number
    {
      title: "Find Missing Number in Array",
      code: `const missing=(arr)=>{
  const n=arr.length;return (n*(n+1))/2 - arr.reduce((a,b)=>a+b,0);
};
console.log(missing([1,2,4,5]));`,
      explanation: "Use formula or XOR approach."
    },
    // 17 Remove falsy values
    {
      title: "Remove Falsy Values from Array",
      code: `const compact=arr=>arr.filter(Boolean);
console.log(compact([0,1,false,2,'',3]));`,
      explanation: "Filter with Boolean to remove false,0,'',null,undefined,NaN."
    },
    // 18 Frequency of elements
    {
      title: "Find Frequency of Elements in Array",
      code: `const freq=arr=>arr.reduce((m,x)=>(m[x]= (m[x]||0)+1,m),{});
console.log(freq([1,2,2,3]));`,
      explanation: "Use reduce to build frequency map."
    },
    // 19 Convert array to object
    {
      title: "Convert Array to Object",
      code: `const toObj=arr=>Object.assign({},arr);
// or with keys
const toObj2=(arr,keys)=>Object.fromEntries(arr.map((v,i)=>[keys[i],v]));
console.log(toObj(["a","b"]));
console.log(toObj2([1,2],["x","y"]));`,
      explanation: "Assign or fromEntries with keys."
    },
    // 20 Convert array of objects to single object
    {
      title: "Convert Array of Objects to Single Object",
      code: `// assume [{k:1,v:2},{k:3,v:4}]
const arrToObj = arr=>Object.fromEntries(arr.map(o=>[o.k,o.v]));
console.log(arrToObj([{k:1,v:2},{k:3,v:4}]));`,
      explanation: "Use fromEntries after mapping."
    },
    // 21 Group array objects by property
    {
      title: "Group Array Objects by Property",
      code: `const groupBy=(arr,key)=>arr.reduce((r,o)=>{(r[o[key]]||(r[o[key]]=[])).push(o);return r;},{});
console.log(groupBy([{type:'a',val:1},{type:'b',val:2},{type:'a',val:3}], 'type'));`,
      explanation: "Use reduce to bucket by key."
    },
    // 22 Sum all numbers
    {
      title: "Sum All Numbers in Array",
      code: `const sum=arr=>arr.reduce((a,b)=>a+b,0);
console.log(sum([1,2,3,4]));`,
      explanation: "Simple reduce sum."
    },
    // 23 Find pairs with given sum
    {
      title: "Find Pairs with Given Sum (Two Sum)",
      code: `// map-based
const pairs=(arr,target)=>{
  const m=new Map();const res=[];
  for(let x of arr){
    if(m.has(target-x))res.push([target-x,x]);
    m.set(x,true);
  }
  return res;
};
console.log(pairs([1,2,3,4],5));`,
      explanation: "Use map to record seen numbers."
    },
    // 24 Remove specific element
    {
      title: "Remove Specific Element from Array",
      code: `const removeElem=(arr,val)=>arr.filter(x=>x!==val);
console.log(removeElem([1,2,3,2],2));`,
      explanation: "Filter out unwanted value."
    },
    // 25 Shuffle an array randomly
    {
      title: "Shuffle an Array Randomly",
      code: `const shuffle=(arr)=>{
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
};
console.log(shuffle([1,2,3,4,5]));`,
      explanation: "Fisher–Yates shuffle for uniform randomness."
    },
    // 26 Maximum sum subarray
    {
      title: "Maximum Sum Subarray (Kadane’s Algorithm)",
      code: `const maxSubArray=(arr)=>{
  let maxSoFar=arr[0],maxEnding=arr[0];
  for(let i=1;i<arr.length;i++){
    maxEnding=Math.max(arr[i],maxEnding+arr[i]);
    maxSoFar=Math.max(maxSoFar,maxEnding);
  }
  return maxSoFar;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));`,
      explanation: "Kadane's algorithm O(n) time."
    },
    // 27 Move all zeros to end
    {
      title: "Move All Zeros to End of Array",
      code: `const moveZeros=(arr)=>{
  const res=arr.filter(x=>x!==0);
  return res.concat(Array(arr.length-res.length).fill(0));
};
console.log(moveZeros([0,1,0,3,12]));`,
      explanation: "Filter zeros and append. In-place two-pointer also possible."
    },
    // 28 Flatten array using recursion
    {
      title: "Flatten Array Using Recursion",
      code: `const flatten=(arr)=>arr.reduce((a,x)=>a.concat(Array.isArray(x)?flatten(x):x),[]);
console.log(flatten([1,[2,[3]]]));`,
      explanation: "Recursive reduce flatten."
    },
    // 29 Implement custom map()
    {
      title: "Implement Custom map()",
      code: `Array.prototype.myMap = function(fn) {
  const res=[];
  for(let i=0;i<this.length;i++){
    res.push(fn(this[i],i,this));
  }
  return res;
};
console.log([1,2,3].myMap(x=>x*2));`,
      explanation: "Polyfill for map using loop."
    },
    // 30 Implement custom filter()
    {
      title: "Implement Custom filter()",
      code: `Array.prototype.myFilter = function(fn) {
  const res=[];
  for(let i=0;i<this.length;i++){
    if(fn(this[i],i,this)) res.push(this[i]);
  }
  return res;
};
console.log([1,2,3,4].myFilter(x=>x%2===0));`,
      explanation: "Polyfill for filter using loop."
    },
  ];

  const stringQuestions = [
    // 1 Reverse a string
    {
      title: "Reverse a String",
      code: `const reverse = s=>s.split('').reverse().join('');
console.log(reverse('hello'));`,
      explanation: "Split/join or loop."
    },
    // 2 Check palindrome
    {
      title: "Check if String is Palindrome",
      code: `const isPal = s => s===s.split('').reverse().join('');
console.log(isPal('racecar'), isPal('hello'));`,
      explanation: "Compare with reversed string."
    },
    // 3 Count vowels
    {
      title: "Count Vowels in a String",
      code: `const countVowels = s => (s.match(/[aeiou]/gi)||[]).length;
console.log(countVowels('beautiful'));`,
      explanation: "Regex match."
    },
    // 4 Count consonants
    {
      title: "Count Consonants in a String",
      code: `const countCons = s => (s.match(/[^aeiou\W\d_]/gi)||[]).length;
console.log(countCons('hello world'));`,
      explanation: "Regex excluding vowels and non-letters."
    },
    // 5 Capitalize first letter of each word
    {
      title: "Capitalize First Letter of Each Word",
      code: `const titleCase = s => s.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
console.log(titleCase('hello world'));`,
      explanation: "Split on spaces and upper-case first char."
    },
    // 6 Find longest word
    {
      title: "Find Longest Word in String",
      code: `const longest = s=>s.split(' ').reduce((a,b)=>b.length>a.length?b:a,"");
console.log(longest('find the longest word in this sentence'));`,
      explanation: "Split and reduce by length."
    },
    // 7 Remove duplicate characters
    {
      title: "Remove Duplicate Characters from String",
      code: `const uniq = s=>[...new Set(s)].join('');
console.log(uniq('banana'));`,
      explanation: "Use Set to filter duplicates."
    },
    // 8 Check anagrams
    {
      title: "Check if Two Strings are Anagrams",
      code: `const isAnagram=(a,b)=>a.split('').sort().join('')===b.split('').sort().join('');
console.log(isAnagram('listen','silent'), isAnagram('hello','world'));`,
      explanation: "Sort both strings to compare."
    },
    // 9 First non-repeating char
    {
      title: "Find First Non-Repeating Character",
      code: `const firstNonRepeat = s => {
  for(let i=0;i<s.length;i++) if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return s[i];
  return null;
};
console.log(firstNonRepeat('swiss'));`,
      explanation: "Loop and check index positions."
    },
    // 10 Most frequent char
    {
      title: "Find Most Frequent Character in String",
      code: `const mostFreq = s => {
  const m={}; for(let c of s)m[c]=(m[c]||0)+1;
  return Object.keys(m).reduce((a,b)=>m[a]>m[b]?a:b);
};
console.log(mostFreq('programming'));`,
      explanation: "Build frequency map."
    },
    // 11 Reverse words in sentence
    {
      title: "Reverse Words in a Sentence",
      code: `const revWords = s=>s.split(' ').reverse().join(' ');
console.log(revWords('hello world from js'));`,
      explanation: "Split by spaces, reverse array."
    },
    // 12 Check only numbers
    {
      title: "Check if String Contains Only Numbers",
      code: `const isNum = s=>/^\d+$/.test(s);
console.log(isNum('12345'), isNum('123a'));`,
      explanation: "Regex digit-only."
    },
    // 13 Check only alphabets
    {
      title: "Check if String Contains Only Alphabets",
      code: `const isAlpha = s=>/^[a-zA-Z]+$/.test(s);
console.log(isAlpha('Hello'), isAlpha('Hello123'));`,
      explanation: "Regex letters-only."
    },
    // 14 Truncate with ellipsis
    {
      title: "Truncate String with Ellipsis",
      code: `const truncate=(s,n)=>s.length>n? s.slice(0,n-3)+'...':s;
console.log(truncate('This is a long string',10));`,
      explanation: "Slice and append ellipsis if too long."
    },
    // 15 snake_case to camelCase
    {
      title: "Convert snake_case to camelCase",
      code: `const toCamel = s=>s.replace(/_([a-z])/g,(m,p)=>p.toUpperCase());
console.log(toCamel('hello_world'));`,
      explanation: "Use regex replace."
    },
    // 16 camelCase to snake_case
    {
      title: "Convert camelCase to snake_case",
      code: `const toSnake = s=>s.replace(/([A-Z])/g,'_$1').toLowerCase();
console.log(toSnake('helloWorld'));`,
      explanation: "Insert underscore before capitals."
    },
    // 17 Repeat string n times
    {
      title: "Repeat String n Times",
      code: `const repeat = (s,n)=>s.repeat(n);
console.log(repeat('ha',3));`,
      explanation: "Use built-in repeat."
    },
    // 18 Check starts with substring
    {
      title: "Check if String Starts with Substring",
      code: `const starts = (s,sub)=>s.indexOf(sub)===0;
console.log(starts('javascript','java'));`,
      explanation: "Use startsWith or indexOf."
    },
    // 19 Check ends with substring
    {
      title: "Check if String Ends with Substring",
      code: `const ends = (s,sub)=>s.slice(-sub.length)===sub;
console.log(ends('javascript','script'));`,
      explanation: "Use endsWith or slice."
    },
    // 20 Remove spaces
    {
      title: "Remove Spaces from String",
      code: `const removeSpaces = s=>s.replace(/\s+/g,'');
console.log(removeSpaces('a b c'));`,
      explanation: "Regex to remove whitespace."
    },
    // 21 Count occurrences substring
    {
      title: "Count Occurrences of Substring",
      code: `const countSub=(s,sub)=>s.split(sub).length-1;
console.log(countSub('hellohello','hello'));`,
      explanation: "Split by substring."
    },
    // 22 Replace all occurrences substring
    {
      title: "Replace All Occurrences of Substring",
      code: `const replaceAll=(s,find,rep)=>s.split(find).join(rep);
console.log(replaceAll('foo foo foo','foo','bar'));`,
      explanation: "Split and join as alternative to regex."
    },
    // 23 Check valid email
    {
      title: "Check if String is Valid Email",
      code: `const isEmail = s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
console.log(isEmail('test@example.com'), isEmail('bad@com'));`,
      explanation: "Simple regex email validation."
    },
    // 24 Convert to title case
    {
      title: "Convert String to Title Case",
      code: `const titleCase = s=>s.toLowerCase().split(' ').map(w=>w.replace(/^[a-z]/,c=>c.toUpperCase())).join(' ');
console.log(titleCase('hello world'));`,
      explanation: "Lowercases then capitalizes each word."
    },
    // 25 Generate random string
    {
      title: "Generate Random String",
      code: `const randStr = len => Math.random().toString(36).substring(2,2+len);
console.log(randStr(8));`,
      explanation: "Use base36 representation of random number."
    },
  ];

  const objectQuestions = [
    // 1 Deep clone object
    {
      title: "Deep Clone an Object",
      code: `const deepClone = obj => JSON.parse(JSON.stringify(obj));
// or recursive
function clone(o){
  if(o===null||typeof o!=='object') return o;
  if(Array.isArray(o)) return o.map(clone);
  const res={};
  for(let k in o) res[k]=clone(o[k]);
  return res;
}
const original={a:1,b:{c:2}};
console.log(deepClone(original), clone(original));`,
      explanation: "JSON methods or recursive function. Beware functions and dates."
    },
    // 2 Merge two objects
    {
      title: "Merge Two Objects",
      code: `const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = {...obj1, ...obj2};
// or Object.assign({},obj1,obj2);
console.log({...{a:1},{b:2}});`,
      explanation: "Spread or assign; later properties override."
    },
    // 3 Check if object is empty
    {
      title: "Check if Object is Empty",
      code: `const isEmpty = obj => Object.keys(obj).length===0;
console.log(isEmpty({}), isEmpty({a:1}));`,
      explanation: "Keys length zero means empty."
    },
    // 4 Convert object to array
    {
      title: "Convert Object to Array",
      code: `const obj = { x: 1, y: 2 };
const arr = Object.entries(obj);
// values only: Object.values(obj);
console.log(arr, Object.values(obj));`,
      explanation: "entries, keys, or values."
    },
    // 5 Convert array to object using key
    {
      title: "Convert Array to Object Using Key",
      code: `const toObj = arr => Object.fromEntries(arr.map(o=>[o.id,o]));
console.log(toObj([{id:'a',val:1},{id:'b',val:2}]));`,
      explanation: "Use fromEntries with chosen key."
    },
    // 6 Get nested property safely
    {
      title: "Get Nested Property Safely",
      code: `const get = (obj,path)=>path.split('.').reduce((o,k)=>o?o[k]:undefined,obj);
console.log(get({a:{b:2}},'a.b'), get({a:{b:2}},'a.c'));`,
      explanation: "Reduce through path. Optional chaining also works."
    },
    // 7 Flatten nested object
    {
      title: "Flatten Nested Object",
      code: `const flattenObj = (obj, pref='') =>
  Object.keys(obj).reduce((res,k)=>{
    const val=obj[k];
    const key=pref?pref+'.'+k:k;
    if(typeof val==='object'&&val!==null) Object.assign(res,flattenObj(val,key));
    else res[key]=val;
    return res;
  },{});
console.log(flattenObj({a:{b:1},c:2}));
`,
      explanation: "Recursive flatten with dot notation keys."
    },
    // 8 Count number of keys
    {
      title: "Count Number of Keys in Object",
      code: `const count= obj => Object.keys(obj).length;
console.log(count({a:1,b:2}));`,
      explanation: "Simple keys length."
    },
    // 9 Remove property from object
    {
      title: "Remove Property from Object",
      code: `const removeKey=(obj,key)=>{
  const {[key]:_,...rest}=obj; return rest;
};
console.log(removeKey({a:1,b:2},'a'));`,
      explanation: "Destructure to exclude key."
    },
    // 10 Find difference between two objects
    {
      title: "Find Difference Between Two Objects",
      code: `const diff=(a,b)=>{
  const res={};
  for(let k in a) if(a[k]!==b[k]) res[k]=a[k];
  return res;
};
console.log(diff({a:1,b:2},{a:1,b:3}));`,
      explanation: "Compare values and capture mismatches from first object."
    },
    // 11 Check if two objects equal
    {
      title: "Check if Two Objects are Equal",
      code: `const eq = (a,b)=>JSON.stringify(a)===JSON.stringify(b);
console.log(eq({x:1},{x:1}), eq({x:1},{x:2}));`,
      explanation: "Simple string comparison; not reliable for functions/order."
    },
    // 12 Group objects by property
    {
      title: "Group Objects by Property",
      code: `const groupBy=(arr,key)=>arr.reduce((r,o)=>{(r[o[key]]||(r[o[key]]=[])).push(o);return r;},{});
console.log(groupBy([{type:'a'},{type:'b'},{type:'a'}],'type'));`,
      explanation: "Same as earlier array grouping but for objects."
    },
    // 13 Convert object values to array
    {
      title: "Convert Object Values to Array",
      code: `const vals = obj => Object.values(obj);
console.log(vals({a:1,b:2}));`,
      explanation: "Built-in values method."
    },
    // 14 Swap keys and values in object
    {
      title: "Swap Keys and Values in Object",
      code: `const swap = obj=>Object.fromEntries(Object.entries(obj).map(([k,v])=>[v,k]));
console.log(swap({a:1,b:2}));`,
      explanation: "Use entries map."
    },
    // 15 Get unique values from object array
    {
      title: "Get Unique Values from Object Array",
      code: `const unique=arr=>[...new Set(arr.map(o=>o.value))];
console.log(unique([{value:1},{value:2},{value:1}]));`,
      explanation: "Map property then Set."
    },
    // 16 Sort object by values
    {
      title: "Sort Object by Values",
      code: `const sortByValue = obj => Object.fromEntries(
  Object.entries(obj).sort((a,b)=>a[1]-b[1])
);
console.log(sortByValue({a:2,b:1,c:3}));`,
      explanation: "Sort entries then back to object."
    },
    // 17 Remove undefined properties
    {
      title: "Remove Undefined Properties from Object",
      code: `const clean = obj=>Object.fromEntries(
  Object.entries(obj).filter(([k,v])=>v!==undefined)
);
console.log(clean({a:1,b:undefined,c:2}));`,
      explanation: "Filter entries where value !== undefined."
    },
    // 18 Pick specific keys
    {
      title: "Pick Specific Keys from Object",
      code: `const pick=(obj,keys)=>Object.fromEntries(
  keys.map(k=>[k,obj[k]])
);
console.log(pick({a:1,b:2,c:3},['a','c']));`,
      explanation: "Create object with selected keys."
    },
    // 19 Omit specific keys
    {
      title: "Omit Specific Keys from Object",
      code: `const omit=(obj,keys)=>Object.fromEntries(
  Object.entries(obj).filter(([k])=>!keys.includes(k))
);
console.log(omit({a:1,b:2,c:3},['b']));`,
      explanation: "Filter out unwanted keys."
    },
    // 20 Implement object deep freeze
    {
      title: "Implement Object Deep Freeze",
      code: `const deepFreeze = obj => {
  Object.freeze(obj);
  Object.keys(obj).forEach(k=>{
    if(typeof obj[k]==="object" && obj[k]!==null) deepFreeze(obj[k]);
  });
  return obj;
};
const o={a:1,b:{c:2}};deepFreeze(o); o.b.c=3; console.log(o);`,
      explanation: "Recursively freeze all nested objects."
    },
  ];

  const setQuestions = [
    // 1 Remove duplicates via Set
    { title: "Remove Duplicates Using Set", code: `const arr = [1, 2, 2, 3];
const uniq=[...new Set(arr)];
console.log(uniq);`, explanation: "Simple set conversion." },
    // 2 Union of two sets
    { title: "Find Union of Two Sets", code: `const union=(a,b)=>new Set([...a,...b]);
console.log(union(new Set([1,2]), new Set([2,3])));`, explanation: "Spread into new Set." },
    // 3 Intersection of two sets
    { title: "Find Intersection of Two Sets", code: `const inter=(a,b)=>new Set([...a].filter(x=>b.has(x)));
console.log(inter(new Set([1,2]), new Set([2,3])));`, explanation: "Filter membership." },
    // 4 Difference between sets
    { title: "Find Difference Between Sets", code: `const diff=(a,b)=>new Set([...a].filter(x=>!b.has(x)));
console.log(diff(new Set([1,2,3]), new Set([2])));`, explanation: "Filter not in second." },
    // 5 Check if set contains value
    { title: "Check if Set Contains Value", code: `const has=(s,v)=>s.has(v);
console.log(has(new Set([1,2,3]),2));`, explanation: "Use has method." },
    // 6 Convert set to array
    { title: "Convert Set to Array", code: `const s = new Set([1, 2, 3]);
const arr=[...s];
console.log(arr);`, explanation: "Spread into array." },
    // 7 Count unique elements using Set
    { title: "Count Unique Elements Using Set", code: `const arr = [1, 2, 2, 3];
const count= new Set(arr).size;
console.log(count);`, explanation: "Size property." },
    // 8 Remove duplicates from string using Set
    { title: "Remove Duplicates from String Using Set", code: `const str = "banana";
const uniqStr=[...new Set(str)].join('');
console.log(uniqStr);`, explanation: "Convert to set then join." },
    // 9 Common elements between arrays via Set
    { title: "Find Common Elements Between Arrays Using Set", code: `const common=(a,b)=>[...new Set(a)].filter(x=>new Set(b).has(x));
console.log(common([1,2,3],[2,3,4]));`, explanation: "Intersection via sets." },
    // 10 Check if array elements are unique
    { title: "Check if Array Elements Are Unique", code: `const unique=arr=>new Set(arr).size===arr.length;
console.log(unique([1,2,2]), unique([1,2,3]));`, explanation: "Compare sizes." }
  ];
  const mapQuestions = [
    // 1 Count frequency using Map
    { title: "Count Frequency Using Map", code: `const freq=(arr)=>{
  const m=new Map();
  arr.forEach(x=>m.set(x,(m.get(x)||0)+1));
  return m;
};
console.log(freq([1,2,2,3]));`, explanation: "Map stores counts." },
    // 2 Group array elements using Map
    { title: "Group Array Elements Using Map", code: `const group=(arr,key)=>{
  const m=new Map();
  arr.forEach(o=>{
    const k=o[key];
    if(!m.has(k)) m.set(k,[]);
    m.get(k).push(o);
  });
  return m;
};
console.log(group([{id:1,cat:'a'},{id:2,cat:'b'},{id:3,cat:'a'}],'cat'));`, explanation: "Map buckets by key."
    },
    // 3 Convert object to Map
    { title: "Convert Object to Map", code: `const obj = { a: 1, b: 2 };
const map=new Map(Object.entries(obj));
console.log(map);`, explanation: "Entries to Map constructor."
    },
    // 4 Convert Map to object
    { title: "Convert Map to Object", code: `const map = new Map([['a',1],['b',2]]);
const obj=Object.fromEntries(map);
console.log(obj);`, explanation: "fromEntries with Map."
    },
    // 5 Implement caching using Map
    { title: "Implement Caching Using Map", code: `const cache=new Map();
function memo(fn){
  return function(arg){
    if(cache.has(arg)) return cache.get(arg);
    const res=fn(arg);
    cache.set(arg,res);
    return res;
  };
}
const square=memo(x=>x*x);
console.log(square(4), square(4));`, explanation: "Simple memoization."
    },
    // 6 Find duplicate elements using Map
    { title: "Find Duplicate Elements Using Map", code: `const duplicates=(arr)=>{
  const m=new Map();
  arr.forEach(x=>m.set(x,(m.get(x)||0)+1));
  return [...m.entries()].filter(([k,v])=>v>1).map(([k])=>k);
};
console.log(duplicates([1,2,2,3,3,3]));`, explanation: "Use map to count then filter."
    },
    // 7 Count character frequency in string using Map
    { title: "Count Character Frequency in String Using Map", code: `const charFreq=s=>{
  const m=new Map();
  for(let c of s) m.set(c,(m.get(c)||0)+1);
  return m;
};
console.log(charFreq('abbc'));`, explanation: "Map counts characters."
    },
    // 8 Store user sessions using Map
    { title: "Store User Sessions Using Map", code: `const sessions=new Map();
function createSession(id,data){sessions.set(id,data);} 
function getSession(id){return sessions.get(id);} 
createSession('u1',{name:'Alice'});
console.log(getSession('u1'));`, explanation: "Map works as in-memory store."
    },
    // 9 Implement LRU cache using Map
    { title: "Implement LRU Cache Using Map", code: `class LRU {
  constructor(limit=5){this.limit=limit;this.map=new Map();}
  get(key){
    if(!this.map.has(key)) return null;
    const val=this.map.get(key);
    this.map.delete(key);
    this.map.set(key,val);
    return val;
  }
  put(key,val){
    if(this.map.has(key)) this.map.delete(key);
    else if(this.map.size===this.limit) this.map.delete(this.map.keys().next().value);
    this.map.set(key,val);
  }
}
const cache = new LRU(2);
cache.put('a',1);
cache.put('b',2);
cache.get('a');
cache.put('c',3);
console.log(cache.get('b')); // should be null because b was least recently used`, explanation: "Map preserves insertion order; delete+set moves to end."
    },
    // 10 Merge two Maps
    { title: "Merge Two Maps", code: `const mergeMaps=(m1,m2)=>new Map([...m1,...m2]);
console.log(mergeMaps(new Map([[1,'a']]), new Map([[2,'b']])));`, explanation: "Spread entries."
    },
  ];

  const utilityQuestions = [
    { title: "Implement Debounce Function", code: `function debounce(fn,delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer=setTimeout(()=>fn.apply(this,args),delay);
  };
}
const debounced = debounce(x=>console.log('called',x),100);
debounced(1);
debounced(2);`, explanation: "Delays invocation until after delay."
    },
    { title: "Implement Throttle Function", code: `function throttle(fn,limit){
  let inThrottle;
  return function(...args){
    if(!inThrottle){
      fn.apply(this,args);
      inThrottle=true;
      setTimeout(()=>inThrottle=false,limit);
    }
  };
}
const throttled = throttle(x=>console.log('throt',x),100);
throttled(1);
throttled(2);`, explanation: "Allows call at most once per limit."
    },
    { title: "Implement Deep Equality Check", code: `function deepEqual(a,b){
  if(a===b) return true;
  if(typeof a!="object"||typeof b!="object"||a==null||b==null) return false;
  const ka=Object.keys(a), kb=Object.keys(b);
  if(ka.length!==kb.length) return false;
  for(let k of ka){
    if(!deepEqual(a[k],b[k])) return false;
  }
  return true;
}
console.log(deepEqual({a:1},{a:1}), deepEqual({a:1},{a:2}));`, explanation: "Recursive comparison of properties." },
    { title: "Implement Custom reduce()", code: `Array.prototype.myReduce=function(fn,initial){
  let acc=initial!==undefined?initial:this[0];
  let start=initial!==undefined?0:1;
  for(let i=start;i<this.length;i++) acc=fn(acc,this[i],i,this);
  return acc;
};
console.log([1,2,3].myReduce((a,b)=>a+b,0));`, explanation: "Simple reduce polyfill."
    },
    { title: "Implement Promise.all()", code: `function promiseAll(promises){
  return new Promise((resolve,reject)=>{
    const results=[];let count=0;
    promises.forEach((p,i)=>{
      Promise.resolve(p).then(r=>{
        results[i]=r;count++;
        if(count===promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
promiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log);`, explanation: "Collects all results, rejects on first failure."
    },
  ];
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are the best JavaScript interview coding problems?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Array manipulation, string algorithms, binary search, sorting algorithms, and dynamic programming problems are most commonly asked in JavaScript interviews."
              }
            },
            {
              "@type": "Question",
              name: "How to prepare for JavaScript coding interviews?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Practice array methods, understand data structure manipulation, learn common algorithms like sorting and searching, and understand time/space complexity analysis."
              }
            },
            {
              "@type": "Question",
              name: "Do JavaScript interview questions include ES6 and async/await?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Modern interviews frequently cover ES6+ features, promises, async/await, closures, and the event loop alongside algorithms."
              }
            },
            {
              "@type": "Question",
              name: "What JavaScript topics are most important for frontend interviews?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Arrays, strings, objects, map/set, DOM basics, async programming, and common coding patterns like two pointers, hashing, and sliding window."
              }
            }
          ]
        })}
      </Script>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Top 100 JavaScript Interview Coding Problems
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Master JavaScript interviews with 100+ practical coding problems covering arrays, strings, objects, Map/Set, algorithms, and dynamic programming. Learn multiple solution approaches with complexity analysis.
        </p>
        <div className="mb-12 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Popular searches this page covers</p>
          <p className="mt-2">
            JavaScript interview questions and answers, JS coding interview questions, array and string problems,
            object manipulation, map and set questions, two sum, binary search, sorting algorithms, recursion,
            promises, async/await, and time complexity.
          </p>
        </div>

        {/*
          Global numbering across all sections:
          Array -> String -> Object -> Set -> Map -> Utility
        */}
        {(() => {
          const arrayOffset = 0;
          const stringOffset = arrayOffset + arrayQuestions.length;
          const objectOffset = stringOffset + stringQuestions.length;
          const setOffset = objectOffset + objectQuestions.length;
          const mapOffset = setOffset + setQuestions.length;
          const utilityOffset = mapOffset + mapQuestions.length;

          return (
            <>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Array Coding Questions (1-30)
          </h2>
          <div className="space-y-8">
            {arrayQuestions.map((q, idx) => (
              <CodeExample key={idx} index={arrayOffset + idx + 1} {...q} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            String Coding Questions (31-55)
          </h2>
          <div className="space-y-8">
            {stringQuestions.map((q, idx) => (
              <CodeExample key={idx} index={stringOffset + idx + 1} {...q} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Object Coding Questions (56-75)
          </h2>
          <div className="space-y-8">
            {objectQuestions.map((q, idx) => (
              <CodeExample key={idx} index={objectOffset + idx + 1} {...q} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Set Coding Questions (76-85)
          </h2>
          <div className="space-y-8">
            {setQuestions.map((q, idx) => (
              <CodeExample key={idx} index={setOffset + idx + 1} {...q} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Map Coding Questions (86-95)
          </h2>
          <div className="space-y-8">
            {mapQuestions.map((q, idx) => (
              <CodeExample key={idx} index={mapOffset + idx + 1} {...q} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Common Frontend Utility Coding Questions (96-100)
          </h2>
          <div className="space-y-8">
            {utilityQuestions.map((q, idx) => (
              <CodeExample key={idx} index={utilityOffset + idx + 1} {...q} />
            ))}
          </div>
        </section>
            </>
          );
        })()}
      </div>
    </main>
  );
}
