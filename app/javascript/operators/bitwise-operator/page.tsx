import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Bitwise Operators: &, |, ^, ~, <<, >>, >>> - Binary Operations",
  description:
    "Master JavaScript bitwise operators: AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), unsigned right shift (>>>). Learn binary operations, bit manipulation, and practical applications.",
  keywords: [
    "javascript bitwise operators",
    "bit manipulation",
    "binary operations",
    "bitwise AND",
    "bitwise OR",
    "bitwise XOR",
    "bit shifting",
    "binary arithmetic",
  ],
  openGraph: {
    title: "JavaScript Bitwise Operators",
    description:
      "Master JavaScript bitwise operators: AND, OR, XOR, NOT, and bit shifting operations with binary manipulation techniques.",
    url: "/javascript/operators/bitwise-operator",
    type: "article",
    images: ["/og-operators-bitwise.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Bitwise Operators",
    description:
      "Master JavaScript bitwise operators: AND, OR, XOR, NOT, and bit shifting operations with binary manipulation techniques.",
    images: ["/og-operators-bitwise.svg"],
  },
  alternates: { canonical: "/javascript/operators/bitwise-operator" },
};

const sections = [
  {
    heading: "Binary Number System",
    paragraphs: [
      "Bitwise operators work with binary (base-2) representations of numbers.",
      "Each bit represents a power of 2: 2^0=1, 2^1=2, 2^2=4, 2^3=8, etc.",
      "JavaScript numbers are 64-bit floating-point, but bitwise operations convert to 32-bit integers.",
      "Understanding binary is essential for bitwise operator behavior.",
      "Two's complement representation is used for negative numbers.",
    ],
  },
  {
    heading: "Bitwise AND Operator (&)",
    paragraphs: [
      "Bitwise AND compares each bit of two operands.",
      "Returns 1 if both bits are 1, 0 otherwise.",
      "Used for masking, extracting specific bits, and clearing flags.",
      "Commonly used to check if specific bits are set.",
      "Efficient for multiple boolean flag checks.",
    ],
    examples: [
      {
        title: "Bitwise AND (&) Operations",
        code: `// Basic AND operations
console.log(5 & 3);     // 1 (0b101 & 0b011 = 0b001)
console.log(12 & 10);   // 8 (0b1100 & 0b1010 = 0b1000)
console.log(15 & 7);    // 7 (0b1111 & 0b0111 = 0b0111)

// Bit masking - extract specific bits
const PERMISSION_READ = 1;    // 0b001
const PERMISSION_WRITE = 2;   // 0b010
const PERMISSION_EXECUTE = 4; // 0b100

const userPermissions = 5; // 0b101 (READ + EXECUTE)

console.log("Has read:", !!(userPermissions & PERMISSION_READ));     // true
console.log("Has write:", !!(userPermissions & PERMISSION_WRITE));   // false
console.log("Has execute:", !!(userPermissions & PERMISSION_EXECUTE)); // true

// Check multiple permissions
function hasPermission(userPerms, requiredPerms) {
  return (userPerms & requiredPerms) === requiredPerms;
}

console.log("Has read+execute:", hasPermission(userPermissions, PERMISSION_READ | PERMISSION_EXECUTE)); // true

// Extract color components (RGB)
function extractRGB(color) {
  const red = (color >> 16) & 0xFF;
  const green = (color >> 8) & 0xFF;
  const blue = color & 0xFF;
  return { red, green, blue };
}

const color = 0xFF3366;
console.log(extractRGB(color)); // { red: 255, green: 51, blue: 102 }`,
        explanation: "Bitwise AND is used for masking, permission checking, and extracting specific bits from values.",
      },
    ],
  },
  {
    heading: "Bitwise OR Operator (|)",
    paragraphs: [
      "Bitwise OR compares each bit of two operands.",
      "Returns 1 if either bit is 1, 0 if both are 0.",
      "Used for setting flags, combining permissions, and merging bit fields.",
      "Perfect for adding capabilities or enabling features.",
      "Common in configuration and permission systems.",
    ],
    examples: [
      {
        title: "Bitwise OR (|) Operations",
        code: `// Basic OR operations
console.log(5 | 3);     // 7 (0b101 | 0b011 = 0b111)
console.log(12 | 10);   // 14 (0b1100 | 0b1010 = 0b1110)
console.log(1 | 2 | 4); // 7 (combining flags)

// Setting permissions
const PERMISSION_READ = 1;
const PERMISSION_WRITE = 2;
const PERMISSION_EXECUTE = 4;

let userPermissions = PERMISSION_READ;
userPermissions = userPermissions | PERMISSION_WRITE;
console.log("Permissions:", userPermissions.toString(2)); // "11"

userPermissions = userPermissions | PERMISSION_EXECUTE;
console.log("Final permissions:", userPermissions.toString(2)); // "111"

// Combine multiple flags at once
const adminPermissions = PERMISSION_READ | PERMISSION_WRITE | PERMISSION_EXECUTE;
console.log("Admin permissions:", adminPermissions); // 7

// RGB color creation
function createRGB(red, green, blue) {
  return (red << 16) | (green << 8) | blue;
}

const redColor = createRGB(255, 0, 0);
const greenColor = createRGB(0, 255, 0);
const blueColor = createRGB(0, 0, 255);

console.log("Red:", redColor.toString(16));     // "ff0000"
console.log("Green:", greenColor.toString(16)); // "00ff00"
console.log("Blue:", blueColor.toString(16));   // "0000ff"`,
        explanation: "Bitwise OR is used for setting flags, combining permissions, and creating composite values from bit fields.",
      },
    ],
  },
  {
    heading: "Bitwise XOR Operator (^)",
    paragraphs: [
      "Bitwise XOR (exclusive OR) compares each bit of two operands.",
      "Returns 1 if bits are different, 0 if they are the same.",
      "Used for toggling bits, swapping values, and simple encryption.",
      "Excellent for finding differences between bit patterns.",
      "Useful basis for many cryptographic and checksum algorithms.",
    ],
    examples: [
      {
        title: "Bitwise XOR (^) Operations",
        code: `// Basic XOR operations
console.log(5 ^ 3);     // 6 (0b101 ^ 0b011 = 0b110)
console.log(12 ^ 10);   // 6 (0b1100 ^ 0b1010 = 0b0110)
console.log(15 ^ 7);    // 8 (0b1111 ^ 0b0111 = 0b1000)

// Toggle bits
let flags = 0b1010;
console.log("Initial:", flags.toString(2));

flags = flags ^ 0b0100; // Toggle bit 2
console.log("Toggled:", flags.toString(2));

flags = flags ^ 0b0100; // Toggle back
console.log("Toggled back:", flags.toString(2));

// Simple encryption/decryption using XOR cipher
function xorCipher(text, key) {
  return text.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) ^ key)
  ).join('');
}

const message = "Hello";
const key = 42;
const encrypted = xorCipher(message, key);
const decrypted = xorCipher(encrypted, key);

console.log("Original:", message);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);

// Find single number in array where others appear twice
function findSingle(arr) {
  let result = 0;
  for (const num of arr) {
    result ^= num;
  }
  return result;
}

console.log(findSingle([1, 2, 2, 3, 1])); // 3 (appears once)
console.log(findSingle([4, 1, 2, 1, 2])); // 4 (appears once)`,
        explanation: "Bitwise XOR is used for toggling bits, simple encryption, finding unique values, and checksums.",
      },
    ],
  },
  {
    heading: "Bitwise NOT Operator (~)",
    paragraphs: [
      "Bitwise NOT flips all bits of its operand.",
      "Converts 0 to 1 and 1 to 0.",
      "Used with other operators for bit clearing and masking.",
      "Important for two's complement arithmetic.",
      "Common in low-level programming and bit manipulation.",
    ],
    examples: [
      {
        title: "Bitwise NOT (~) Operations",
        code: `// Basic NOT operations
console.log(~5);      // -6 (flips all bits)
console.log(~0);      // -1
console.log(~-1);     // 0

// Clear bits using NOT and AND
let value = 0b1111; // 15
const mask = 0b0010; // Bit to clear
value = value & ~mask; // Clear bit 1
console.log(value.toString(2)); // "1101" (13)

// Check if bit is set
function isBitSet(number, bitPosition) {
  return !!(number & (1 << bitPosition));
}

console.log("Bit 0 set in 5:", isBitSet(5, 0)); // true
console.log("Bit 1 set in 5:", isBitSet(5, 1)); // false
console.log("Bit 2 set in 5:", isBitSet(5, 2)); // true

// Bounds checking with NOT
const arr = [10, 20, 30, 40, 50];
function isValidIndex(arr, index) {
  return index >= 0 && ~index < arr.length;
}

console.log(isValidIndex(arr, 2));  // true
console.log(isValidIndex(arr, 10)); // false
console.log(isValidIndex(arr, -1)); // false

// Get bitwise complement
function getBitComplement(number, bitWidth = 32) {
  const mask = (1 << bitWidth) - 1;
  return (~number) & mask;
}

console.log("Complement of 5:", getBitComplement(5, 4).toString(2)); // "1010"`,
        explanation: "Bitwise NOT flips all bits and is commonly used with other operators for bit clearing and complement operations.",
      },
    ],
  },
  {
    heading: "Left Shift Operator (<<)",
    paragraphs: [
      "Left shift moves bits to the left by specified positions.",
      "Fills rightmost bits with zeros.",
      "Equivalent to multiplication by powers of 2.",
      "Used for fast multiplication and bit field manipulation.",
      "Can cause overflow and sign changes in two's complement.",
    ],
    examples: [
      {
        title: "Left Shift (<<) Operations",
        code: `// Basic left shift
console.log(5 << 1);    // 10 (5 * 2^1 = 10)
console.log(5 << 2);    // 20 (5 * 2^2 = 20)
console.log(1 << 3);    // 8 (1 * 2^3 = 8)
console.log(3 << 4);    // 48 (3 * 2^4 = 48)

// Fast multiplication by powers of 2
function multiplyByPowerOf2(num, power) {
  return num << power;
}

console.log(multiplyByPowerOf2(10, 3)); // 80 (10 * 8)

// Bit field creation
const FLAG_A = 1 << 0; // 0b0001
const FLAG_B = 1 << 1; // 0b0010
const FLAG_C = 1 << 2; // 0b0100
const FLAG_D = 1 << 3; // 0b1000

console.log("FLAG_A:", FLAG_A); // 1
console.log("FLAG_B:", FLAG_B); // 2
console.log("FLAG_C:", FLAG_C); // 4
console.log("FLAG_D:", FLAG_D); // 8

// RGB color creation
function createRGBA(red, green, blue, alpha) {
  return (red << 24) | (green << 16) | (blue << 8) | alpha;
}

const color = createRGBA(255, 128, 64, 255);
console.log("RGBA color:", color.toString(16)); // "ff8040ff"

// Permission system using bit shifts
const PERMISSIONS = {
  READ: 1 << 0,
  WRITE: 1 << 1,
  EXECUTE: 1 << 2,
  DELETE: 1 << 3,
  ADMIN: 1 << 4
};

const moderatorPerms = PERMISSIONS.READ | PERMISSIONS.WRITE | PERMISSIONS.DELETE;
console.log("Moderator permissions:", moderatorPerms); // 11`,
        explanation: "Left shift multiplies by powers of 2 and is used for creating bit flags and fast arithmetic operations.",
      },
    ],
  },
  {
    heading: "Right Shift Operator (>>)",
    paragraphs: [
      "Right shift moves bits to the right by specified positions.",
      "Preserves sign bit (arithmetic shift).",
      "Equivalent to division by powers of 2 for positive numbers.",
      "Used for fast division and sign extension.",
      "Maintains sign for negative numbers in two's complement.",
    ],
    examples: [
      {
        title: "Right Shift (>>) Operations",
        code: `// Basic right shift (arithmetic)
console.log(10 >> 1);   // 5 (10 / 2^1 = 5)
console.log(20 >> 2);   // 5 (20 / 2^2 = 5)
console.log(16 >> 3);   // 2 (16 / 2^3 = 2)

// Division by powers of 2
function divideByPowerOf2(num, power) {
  return num >> power;
}

console.log(divideByPowerOf2(100, 2)); // 25 (100 / 4)

// Sign preservation
console.log(10 >> 1);   // 5 (positive stays positive)
console.log(-10 >> 1);  // -5 (negative stays negative)
console.log(-20 >> 2);  // -5 (sign preserved)

// Extract higher bits
function getHighByte(value) {
  return value >> 8;
}

function getHighWord(value) {
  return value >> 16;
}

const value = 0x12345678;
console.log("High byte:", getHighByte(value).toString(16));   // "34"
console.log("High word:", getHighWord(value).toString(16));  // "12"

// Color component extraction
function extractRed(color) {
  return (color >> 16) & 0xFF;
}

function extractGreen(color) {
  return (color >> 8) & 0xFF;
}

function extractBlue(color) {
  return color & 0xFF;
}

const pixelColor = 0xFF3366;
console.log("Red:", extractRed(pixelColor));     // 255
console.log("Green:", extractGreen(pixelColor)); // 51
console.log("Blue:", extractBlue(pixelColor));   // 102`,
        explanation: "Right shift performs signed division by powers of 2 and preserves the sign bit for negative numbers.",
      },
    ],
  },
  {
    heading: "Unsigned Right Shift Operator (>>>)",
    paragraphs: [
      "Unsigned right shift moves bits right without preserving sign.",
      "Fills leftmost bits with zeros.",
      "Treats operand as unsigned 32-bit integer.",
      "Used for logical shifts and unsigned division.",
      "Important for working with unsigned values and colors.",
    ],
    examples: [
      {
        title: "Unsigned Right Shift (>>>) Operations",
        code: `// Basic unsigned right shift
console.log(10 >>> 1);    // 5
console.log(-10 >>> 1);   // 2147483643 (large positive number)
console.log(-1 >>> 0);    // 4294967295 (all 32 bits set)

// Converting signed to unsigned
function toUnsigned32(num) {
  return num >>> 0;
}

console.log("Signed -1:", -1);
console.log("Unsigned -1:", toUnsigned32(-1)); // 4294967295

// Color manipulation (treating as unsigned)
function blendColors(color1, color2, ratio) {
  const r1 = (color1 >>> 16) & 0xFF;
  const g1 = (color1 >>> 8) & 0xFF;
  const b1 = color1 & 0xFF;
  
  const r2 = (color2 >>> 16) & 0xFF;
  const g2 = (color2 >>> 8) & 0xFF;
  const b2 = color2 & 0xFF;
  
  const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
  
  return (r << 16) | (g << 8) | b;
}

const red = 0xFF0000;
const blue = 0x0000FF;
const purple = blendColors(red, blue, 0.5);
console.log("Purple:", purple.toString(16)); // "800080"

// Bit rotation (circular shift)
function rotateLeft32(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function rotateRight32(value, amount) {
  return ((value >>> amount) | (value << (32 - amount))) >>> 0;
}

const num = 0b00000000000000000000000000001111; // 15
console.log("Original:", num.toString(2));
console.log("Rotate left 4:", rotateLeft32(num, 4).toString(2));
console.log("Rotate right 4:", rotateRight32(num, 4).toString(2));`,
        explanation: "Unsigned right shift treats numbers as unsigned and is essential for working with unsigned values, colors, and certain algorithms.",
      },
    ],
  },
  {
    heading: "Practical Applications",
    paragraphs: [
      "Flag systems and permission management.",
      "Color manipulation and graphics programming.",
      "Network protocols and data encoding.",
      "Cryptography and hash functions.",
      "Performance optimization for specific operations.",
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [
      "Remember that bitwise operators convert to 32-bit signed integers.",
      "Use unsigned right shift (>>>) for unsigned operations.",
      "Be careful with negative numbers and overflow behavior.",
      "Use helper functions to make bit operations more readable.",
      "Document complex bitwise operations for maintainability.",
      "Test edge cases thoroughly (negative numbers, large values, etc.).",
    ],
  },
];

const mistakes = [
  {
    title: "Forgetting 32-bit conversion",
    fix: "Remember that bitwise operators convert numbers to 32-bit signed integers. Large numbers may lose precision.",
  },
  {
    title: "Using bitwise operations on floating-point numbers",
    fix: "Bitwise operators truncate floating-point numbers to integers. Use Math.floor() when needed.",
  },
  {
    title: "Confusing signed and unsigned shifts",
    fix: "Use >> for signed division and >>> for unsigned operations. Be aware of sign extension behavior.",
  },
  {
    title: "Not handling negative numbers correctly",
    fix: "Understand two's complement representation. Negative numbers behave differently in bitwise operations.",
  },
  {
    title: "Using XOR for real encryption",
    fix: "XOR is a simple cipher and not secure for real cryptography. Use proper cryptographic libraries.",
  },
  {
    title: "Not masking results appropriately",
    fix: "Use appropriate masks (& with 0xFF, 0xFFFF, etc.) to extract the correct number of bits.",
  },
  {
    title: "Misunderstanding operator precedence",
    fix: "Bitwise operators have lower precedence than arithmetic operators. Use parentheses for clarity.",
  },
  {
    title: "Assuming bitwise operations are always faster",
    fix: "While often faster, modern engines optimize arithmetic well. Profile before optimizing.",
  },
];

const faqs = [
  {
    q: "Why do bitwise operators convert to 32-bit integers?",
    a: "JavaScript follows the IEEE 754 standard and converts to 32-bit signed integers for bitwise operations to ensure consistent behavior.",
  },
  {
    q: "What's the difference between >> and >>>?",
    a: ">> is signed right shift (preserves sign), >>> is unsigned right shift (fills with zeros). Use >>> for unsigned operations.",
  },
  {
    q: "Can I use bitwise operators on BigInt?",
    a: "Yes, BigInt supports bitwise operators (&, |, ^, ~, <<, >>, >>>) without the 32-bit limitation.",
  },
  {
    q: "Why does ~5 equal -6?",
    a: "~ flips all bits. In two's complement, ~5 = -6 because flipping the bits of 5 and interpreting as signed gives -6.",
  },
  {
    q: "How do I check if a number is even or odd using bitwise?",
    a: "Use num & 1. If result is 1, number is odd; if 0, number is even. This is faster than modulo.",
  },
  {
    q: "What's the maximum safe integer for bitwise operations?",
    a: "2^31 - 1 (2147483647) for signed 32-bit operations. Use BigInt for larger numbers.",
  },
  {
    q: "Why use bitwise operators for permissions?",
    a: "Bitwise operations allow storing multiple boolean flags in a single number, saving memory and enabling fast operations.",
  },
  {
    q: "How do I swap two variables using XOR?",
    a: "a = a ^ b; b = a ^ b; a = a ^ b; This works because XOR is associative and commutative.",
  },
  {
    q: "What's the most common use of bitwise NOT?",
    a: "~ is commonly used with & to clear specific bits: value & ~mask clears the bits set in mask.",
  },
  {
    q: "Are bitwise operations still relevant in modern JavaScript?",
    a: "Yes, they're useful for permissions, flags, graphics, performance optimization, and understanding low-level programming concepts.",
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

export default function JavascriptBitwiseOperatorsPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          JavaScript Bitwise Operators: &, |, ^, ~, {"<<"}, {">>"}, {">>>"} - Binary Operations
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Bitwise operators perform operations on binary representations of numbers. JavaScript provides AND (&), OR (|), XOR (^), NOT (~), and shift operators ({"<<"}, {">>"}, {">>>"}). These operators work at the bit level, making them powerful for low-level programming, flags, and performance optimizations.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          Bitwise operators are essential for systems programming, performance optimization, cryptography, graphics manipulation, and working with binary data. Understanding these operations enables efficient memory usage, fast calculations, and implementation of algorithms that require bit-level control. They're also crucial for understanding computer science fundamentals.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article key={section.heading} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {section.examples && section.examples.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.examples.map((ex) => (
                  <CodeExample
                    key={ex.title}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </article>
        ))}

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Pitfalls</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
