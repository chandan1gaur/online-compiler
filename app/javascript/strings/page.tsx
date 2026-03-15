import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript String Methods: Complete Guide",
  description:
    "Learn essential JavaScript string methods like slice, split, includes, replace, trim, and more with examples.",
  keywords: ["string methods", "javascript strings", "slice", "split", "replace", "trim"],
  openGraph: {
    title: "JavaScript String Methods",
    description:
      "Learn essential JavaScript string methods like slice, split, includes, replace, trim, and more with examples.",
    url: "/javascript/strings",
    type: "article",
    images: ["/og-strings.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript String Methods",
    description:
      "Learn essential JavaScript string methods like slice, split, includes, replace, trim, and more with examples.",
    images: ["/og-strings.svg"],
  },
  alternates: { canonical: "/javascript/strings" },
};

const sections = [
  {
    heading: "Access & Inspect",
    paragraphs: [
      "Use these methods to read characters or compare strings without changing them.",
      "They are ideal for parsing, validation, and quick checks.",
    ],
    bullets: [
      "at(index): read a character (supports negative indexes). Example: `'JavaScript'.at(-1) // 't'`",
      "charAt(index): character at a position. Example: `'code'.charAt(1) // 'o'`",
      "charCodeAt(index): UTF-16 code unit. Example: `'A'.charCodeAt(0) // 65`",
      "codePointAt(index): full Unicode code point. Example: `'💖'.codePointAt(0) // 128150`",
      "localeCompare(other): compare for sorting. Example: `'a'.localeCompare('b') // -1`",
      "toString() / valueOf(): return string value (rarely needed, but available).",
    ],
  },
  {
    heading: "Search & Match",
    paragraphs: [
      "Find text with simple queries or regular expressions.",
      "Use these methods for filters, validations, and quick lookups.",
    ],
    bullets: [
      "includes(text): true/false containment. Example: `'hello'.includes('ell') // true`",
      "startsWith(text) / endsWith(text): prefix/suffix checks. Example: `'file.txt'.endsWith('.txt')`",
      "indexOf(text) / lastIndexOf(text): position of text. Example: `'a-b-a'.lastIndexOf('a') // 4`",
      "search(regex): index of regex match. Example: `'abc123'.search(/\\d+/) // 3`",
      "match(regex): returns match array. Example: `'2024'.match(/\\d+/) // ['2024']`",
      "matchAll(regex): iterator of all matches. Example: `Array.from('a1b2'.matchAll(/\\d/g))`",
    ],
  },
  {
    heading: "Extract & Split",
    paragraphs: [
      "Extract parts of a string or split it into pieces.",
      "These are common when parsing input, URLs, or CSV data.",
    ],
    bullets: [
      "slice(start, end): substring with negatives allowed. Example: `'abcdef'.slice(1, 4) // 'bcd'`",
      "substring(start, end): like slice but swaps arguments and no negatives.",
      "split(delimiter): array of parts. Example: `'a,b,c'.split(',') // ['a','b','c']`",
    ],
  },
  {
    heading: "Modify & Format",
    paragraphs: [
      "Transform text to new strings. Remember strings are immutable.",
      "Use these to clean input, format UI labels, or normalize data.",
    ],
    bullets: [
      "concat(...parts): combine strings. Example: `'Hello'.concat(' ', 'JS')`",
      "repeat(count): repeat a string. Example: `'ha'.repeat(3) // 'hahaha'`",
      "replace(search, value): replace first match. Example: `'a-a'.replace('-', ':') // 'a:a'`",
      "replaceAll(search, value): replace every match. Example: `'a-a'.replaceAll('-', ':')`",
      "padStart(len, fill) / padEnd(len, fill): pad to length. Example: `'7'.padStart(3, '0') // '007'`",
      "trim() / trimStart() / trimEnd(): remove surrounding whitespace.",
      "toLowerCase() / toUpperCase(): basic casing.",
      "toLocaleLowerCase() / toLocaleUpperCase(): locale-aware casing.",
    ],
  },
  {
    heading: "Unicode & Normalization",
    paragraphs: [
      "When working with accented characters or emoji, Unicode matters.",
      "Normalization ensures visually identical characters compare correctly.",
    ],
    bullets: [
      "normalize(form): normalize Unicode. Example: `'e\\u0301'.normalize('NFC')`",
    ],
  },
  {
    heading: "Static Helpers (String)",
    paragraphs: [
      "These are called on the String object, not on instances.",
      "They are useful for creating strings from numbers or templates.",
    ],
    bullets: [
      "String.fromCharCode(...codes): UTF-16 codes to string. Example: `String.fromCharCode(72, 73) // 'HI'`",
      "String.fromCodePoint(...points): Unicode code points. Example: `String.fromCodePoint(0x1f4a9) // '💩'`",
      "String.raw`...`: raw template string (keeps backslashes). Example: String.raw`C:\\new`",
    ],
  },
];

const examples = [
  {
    title: "Character access (at, charAt)",
    code: `const word = "JavaScript";\nconsole.log(word.at(0)); // J\nconsole.log(word.at(-1)); // t\nconsole.log(word.charAt(4)); // S`,
    explanation: "Read characters by index. at() supports negative indexing.",
  },
  {
    title: "Unicode inspection (charCodeAt, codePointAt)",
    code: `const letter = "A";\nconsole.log(letter.charCodeAt(0)); // 65\n\nconst emoji = "💖";\nconsole.log(emoji.codePointAt(0)); // 128150`,
    explanation: "Use charCodeAt for UTF-16 units and codePointAt for full Unicode code points.",
  },
  {
    title: "Search basics (includes, startsWith, endsWith)",
    code: `const file = "report.final.pdf";\nconsole.log(file.includes("final")); // true\nconsole.log(file.startsWith("report")); // true\nconsole.log(file.endsWith(".pdf")); // true`,
    explanation: "Fast checks for containment and prefixes/suffixes.",
  },
  {
    title: "Finding positions (indexOf, lastIndexOf, search)",
    code: `const text = "a-b-a-c";\nconsole.log(text.indexOf("a")); // 0\nconsole.log(text.lastIndexOf("a")); // 4\nconsole.log(text.search(/c/)); // 6`,
    explanation: "Use indexOf/lastIndexOf for string search and search for regex.",
  },
  {
    title: "Regex matches (match, matchAll)",
    code: `const input = "A1 B22 C333";\nconsole.log(input.match(/\\d+/g)); // ['1','22','333']\n\nconst all = Array.from(input.matchAll(/(\\w)(\\d+)/g));\nconsole.log(all.map((m) => m[0]));`,
    explanation: "match returns arrays; matchAll gives an iterator for all matches with groups.",
  },
  {
    title: "Extracting substrings (slice, substring)",
    code: `const word = "javascript";\nconsole.log(word.slice(0, 4)); // java\nconsole.log(word.slice(-6)); // script\nconsole.log(word.substring(4, 10)); // script`,
    explanation: "slice supports negative indexes; substring does not.",
  },
  {
    title: "Split strings into arrays",
    code: `const csv = "red,green,blue";\nconst parts = csv.split(",");\nconsole.log(parts); // ['red','green','blue']`,
    explanation: "split is perfect for CSV or path parsing.",
  },
  {
    title: "Replace and replaceAll",
    code: `const msg = "2024-03-15";\nconsole.log(msg.replace("-", "/")); // 2024/03-15\nconsole.log(msg.replaceAll("-", "/")); // 2024/03/15`,
    explanation: "replace only changes the first match; replaceAll changes all.",
  },
  {
    title: "Padding and repeating",
    code: `const id = "7";\nconsole.log(id.padStart(4, "0")); // 0007\nconsole.log(id.padEnd(4, "0")); // 7000\nconsole.log("ha".repeat(3)); // hahaha`,
    explanation: "padStart/padEnd format IDs or columns; repeat is good for UI effects.",
  },
  {
    title: "Trimming whitespace",
    code: `const raw = "  hello  ";\nconsole.log(raw.trim()); // "hello"\nconsole.log(raw.trimStart()); // "hello  "\nconsole.log(raw.trimEnd()); // "  hello"`,
    explanation: "Trim user input before validation or storage.",
  },
  {
    title: "Case conversion",
    code: `const name = "İstanbul";\nconsole.log(name.toUpperCase());\nconsole.log(name.toLocaleUpperCase("tr-TR"));`,
    explanation: "Locale-aware methods handle special casing rules.",
  },
  {
    title: "Normalization and comparison",
    code: `const a = "e\\u0301";\nconst b = "é";\nconsole.log(a === b); // false\nconsole.log(a.normalize("NFC") === b.normalize("NFC")); // true\nconsole.log("b".localeCompare("a")); // 1`,
    explanation: "Normalize for safe comparisons; localeCompare helps with sorting.",
  },
  {
    title: "Static helpers (String)",
    code: `console.log(String.fromCharCode(72, 73)); // HI\nconsole.log(String.fromCodePoint(0x1f60a)); // 😊\nconsole.log(String.raw\`C:\\new\`); // C:\\new`,
    explanation: "Use static helpers to build strings from codes or raw templates.",
  },
];

const mistakes = [
  { title: "Expecting mutation", fix: "String methods return new strings; originals stay unchanged." },
  { title: "Using indexOf for booleans", fix: "Use includes when you only need true or false." },
  { title: "Forgetting regex for replaceAll", fix: "Use replaceAll or a global regex for multiple matches." },
];

const faqs = [
  { q: "Are strings mutable?", a: "No, strings are immutable in JavaScript." },
  { q: "How do I check if a string contains text?", a: "Use includes or indexOf." },
  { q: "How do I split a string?", a: "Use split with a delimiter." },
  { q: "When should I use locale-aware casing?", a: "Use toLocaleLowerCase/UpperCase for user-facing text in specific locales." },
];

const related = [
  { label: "Template Literals", href: "/javascript/strings/template-literals" },
  { label: "String Interpolation", href: "/javascript/strings/interpolation" },
  { label: "Regex Overview", href: "/javascript/regex" },
];

export default function JavascriptStringMethodsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript String Methods"
      intro={[
        "JavaScript strings are at the heart of UI labels, form inputs, file paths, JSON, and network data. The moment you start building anything real, you need to find text, extract parts, clean whitespace, standardize casing, and safely validate user input. String methods are the toolbox that makes that work reliable and readable.",
        "Because strings are immutable, every method returns a new value instead of modifying the original. This makes string operations safer, but it also means you should store the result when you want the change. Knowing which methods to reach for keeps your code compact: use includes and startsWith for checks, slice and substring for extraction, split for parsing, replace/replaceAll for transformations, and trim for cleanup. When you work with emoji or accents, codePointAt and normalize help you avoid subtle Unicode bugs.",
        "This guide covers all commonly used instance methods and the core static helpers on String, with short explanations and examples. Use it as a practical reference while you code and as a reminder of the tradeoffs between similar methods like slice vs substring or replace vs replaceAll.",
      ]}
      why={[
        "Nearly every app handles text, from names and emails to UI labels.",
        "Knowing string methods makes this work easy and reliable.",
      ]}
      syntax={["str.slice(start, end)", "str.split(delimiter)", "str.replace(search, value)", "str.includes(text)"]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `let out = "";\nfor (const ch of str) {\n  if (ch !== "-") out += ch;\n}`,
        with: `const out = str.replaceAll("-", "");`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "Do string methods mutate?", a: "No, they return new strings." },
        { q: "includes vs indexOf?", a: "includes returns a boolean; indexOf returns a position." },
        { q: "How do you trim whitespace?", a: "Use trim, trimStart, or trimEnd." },
      ]}
      practice={{
        prompt: "Practice: Remove all spaces from a string and convert it to lowercase.",
        starterCode: `const text = "Hello World";\n// TODO: clean text\n`,
        solution: `const text = "Hello World";\nconst cleaned = text.replaceAll(" ", "").toLowerCase();\nconsole.log(cleaned);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run String Methods Demo",
        description: "Try different slice and split values.",
      }}
    />
  );
}
