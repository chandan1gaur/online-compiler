"use client";

import { useMemo, useState } from "react";

type Question = {
  id: number;
  prompt: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    prompt: "What prints to the console?",
    code: `function show() {
  console.log(firstName);
  console.log(lastName);
  var firstName = "Ari";
  let lastName = "Khan";
}

show();`,
    options: [
      "A: Ari and undefined",
      "B: Ari and ReferenceError",
      "C: undefined and ReferenceError",
      "D: ReferenceError and Khan",
    ],
    answerIndex: 2,
    explanation: "var is hoisted (undefined), let is in TDZ (ReferenceError). This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 2,
    prompt: "What prints to the console?",
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var", i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let", i), 1);
}`,
    options: [
      "A: var 0,1,2 and let 0,1,2",
      "B: var 0,1,2 and let 3,3,3",
      "C: var 3,3,3 and let 0,1,2",
      "D: var 3,3,3 and let 3,3,3",
    ],
    answerIndex: 2,
    explanation: "var shares one binding (3), let creates a new binding per loop. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 3,
    prompt: "What prints to the console?",
    code: `const ring = {
  r: 5,
  diameter() {
    return this.r * 2;
  },
  circumference: () => 2 * Math.PI * this.r,
};

console.log(ring.diameter());
console.log(ring.circumference());`,
    options: [
      "A: 10 and 31.41...",
      "B: 10 and NaN",
      "C: NaN and 31.41...",
      "D: NaN and NaN",
    ],
    answerIndex: 1,
    explanation: "Arrow function has no own this, so this.r is undefined. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 4,
    prompt: "What are the results?",
    code: `+false;
!"hello";`,
    options: [
      "A: 0 and false",
      "B: 1 and false",
      "C: false and false",
      "D: false and true",
    ],
    answerIndex: 0,
    explanation: "+false is 0, !\"hello\" is false.",
  },
  {
    id: 5,
    prompt: "Which expression returns true?",
    code: `const key = { size: "tiny" };
const item = { name: "mouse", tiny: true };`,
    options: [
      "A: item.key.size",
      "B: item[key.size]",
      "C: item[key['size']] is invalid",
      "D: All are invalid",
    ],
    answerIndex: 1,
    explanation: "key.size is \"tiny\", so item[\"tiny\"] is true.",
  },
  {
    id: 6,
    prompt: "What prints to the console?",
    code: `let obj1 = { msg: "Hi" };
let obj2;
obj2 = obj1;
obj1.msg = "Hey";
console.log(obj2.msg);`,
    options: ["A: Hey", "B: Hi", "C: undefined", "D: ReferenceError"],
    answerIndex: 0,
    explanation: "Both variables point to the same object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 7,
    prompt: "What prints to the console?",
    code: `let a = 4;
let b = new Number(4);
let c = 4;

console.log(a == b);
console.log(a === b);
console.log(b === c);`,
    options: [
      "A: true false true",
      "B: true false false",
      "C: false false true",
      "D: false true true",
    ],
    answerIndex: 1,
    explanation: "b is an object; loose equality true, strict false. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 8,
    prompt: "What prints to the console?",
    code: `class Gecko {
  static paint(newColor) {
    this.color = newColor;
    return this.color;
  }
}

const gary = new Gecko();
console.log(gary.paint("orange"));`,
    options: ["A: orange", "B: green", "C: undefined", "D: TypeError"],
    answerIndex: 3,
    explanation: "Static methods are on the class, not instances. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 9,
    prompt: "What happens here?",
    code: `"use strict";
let title;
titl = {}; // typo
console.log(titl);`,
    options: ["A: {}", "B: ReferenceError", "C: undefined", "D: TypeError"],
    answerIndex: 1,
    explanation: "In strict mode, assigning to an undeclared variable throws. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 10,
    prompt: "What happens here?",
    code: `function bark() {
  console.log("Woof!");
}

bark.kind = "dog";`,
    options: [
      "A: Nothing special; a property is added",
      "B: SyntaxError",
      "C: \"Woof!\" is logged",
      "D: ReferenceError",
    ],
    answerIndex: 0,
    explanation: "Functions are objects; you can add properties. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 11,
    prompt: "What prints to the console?",
    code: `function Person(first, last) {
  this.first = first;
  this.last = last;
}

const member = new Person("Ari", "Khan");
Person.fullName = function () {
  return this.first + " " + this.last;
};

console.log(member.fullName());`,
    options: ["A: TypeError", "B: SyntaxError", "C: Ari Khan", "D: undefined undefined"],
    answerIndex: 0,
    explanation: "fullName is on Person, not on the instance. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 12,
    prompt: "What prints to the console?",
    code: `"use strict";
function Person(first, last) {
  this.first = first;
  this.last = last;
}

const ari = new Person("Ari", "Khan");
const sam = Person("Sam", "Lee");

console.log(ari);
console.log(sam);`,
    options: [
      "A: Person {first: \"Ari\", last: \"Khan\"} and undefined",
      "B: Person {first: \"Ari\", last: \"Khan\"} and Person {...}",
      "C: Person {first: \"Ari\", last: \"Khan\"} and {}",
      "D: TypeError before logs",
    ],
    answerIndex: 3,
    explanation: "Calling without new in strict mode throws TypeError. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 13,
    prompt: "What is the correct order of event phases?",
    options: [
      "A: Target > Capturing > Bubbling",
      "B: Bubbling > Target > Capturing",
      "C: Target > Bubbling > Capturing",
      "D: Capturing > Target > Bubbling",
    ],
    answerIndex: 3,
    explanation: "Events travel capturing -> target -> bubbling. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 14,
    prompt: "Objects created with object literals have a prototype.",
    options: ["A: true", "B: false"],
    answerIndex: 0,
    explanation: "Object literals inherit from Object.prototype by default. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 15,
    prompt: "What prints to the console?",
    code: `function sum(a, b) {
  return a + b;
}

sum(1, "2");`,
    options: ["A: NaN", "B: TypeError", "C: \"12\"", "D: 3"],
    answerIndex: 2,
    explanation: "Number + string results in string concatenation. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 16,
    prompt: "What prints to the console?",
    code: `let n = 0;
console.log(n++);
console.log(++n);
console.log(n);`,
    options: ["A: 1 1 2", "B: 1 2 2", "C: 0 2 2", "D: 0 1 2"],
    answerIndex: 2,
    explanation: "Post-increment returns old value; pre-increment returns new value. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 17,
    prompt: "What prints to the console?",
    code: `function info(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const person = "Mia";
const age = 30;

info\`\${person} is \${age} years old\`;`,
    options: [
      "A: \"Mia\", 30, [\"\", \" is \", \" years old\"]",
      "B: [\"\", \" is \", \" years old\"], \"Mia\", 30",
      "C: \"Mia\", [\"\", \" is \", \" years old\"], 30",
      "D: 30, \"Mia\", [\"\", \" is \", \" years old\"]",
    ],
    answerIndex: 1,
    explanation: "Tagged templates pass an array of strings as the first arg. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 18,
    prompt: "What prints to the console?",
    code: `function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("Adult");
  } else if (data == { age: 18 }) {
    console.log("Still adult");
  } else {
    console.log("No age");
  }
}

checkAge({ age: 18 });`,
    options: ["A: Adult", "B: Still adult", "C: No age", "D: TypeError"],
    answerIndex: 2,
    explanation: "Object comparisons are by reference; both checks are false. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 19,
    prompt: "What prints to the console?",
    code: `function getAge(...args) {
  console.log(typeof args);
}

getAge(21);`,
    options: ["A: \"number\"", "B: \"array\"", "C: \"object\"", "D: \"NaN\""],
    answerIndex: 2,
    explanation: "Rest parameters are arrays; typeof array is \"object\".",
  },
  {
    id: 20,
    prompt: "What prints to the console?",
    code: `function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();`,
    options: ["A: 21", "B: undefined", "C: ReferenceError", "D: TypeError"],
    answerIndex: 2,
    explanation: "Strict mode forbids implicit globals. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 21,
    prompt: "What is the value of total?",
    code: `const total = eval("10*10+5");`,
    options: ["A: 105", "B: \"105\"", "C: TypeError", "D: \"10*10+5\""],
    answerIndex: 0,
    explanation: "eval executes the expression and returns 105. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 22,
    prompt: "How long is sessionStorage data available?",
    code: `sessionStorage.setItem("token", "abc");`,
    options: [
      "A: Forever",
      "B: Until the tab is closed",
      "C: Until the browser closes",
      "D: Until the computer shuts down",
    ],
    answerIndex: 1,
    explanation: "sessionStorage lives for the current tab session. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 23,
    prompt: "What prints to the console?",
    code: `var num = 8;
var num = 10;
console.log(num);`,
    options: ["A: 8", "B: 10", "C: SyntaxError", "D: ReferenceError"],
    answerIndex: 1,
    explanation: "var allows redeclaration; the last assignment wins. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 24,
    prompt: "What are the results?",
    code: `const obj = { 1: "a", 2: "b" };
const set = new Set([1, 2, 3]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);`,
    options: [
      "A: false true false true",
      "B: true true false true",
      "C: true false true true",
      "D: true true true true",
    ],
    answerIndex: 1,
    explanation: "Object keys are strings; Set is type-sensitive. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 25,
    prompt: "What prints to the console?",
    code: `const obj = { a: "one", b: "two", a: "three" };
console.log(obj);`,
    options: [
      "A: { a: \"one\", b: \"two\" }",
      "B: { b: \"two\", a: \"three\" }",
      "C: { a: \"three\", b: \"two\" }",
      "D: SyntaxError",
    ],
    answerIndex: 2,
    explanation: "Later properties overwrite earlier ones. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 26,
    prompt: "The global execution context creates the global object and a global this (in browsers).",
    options: ["A: true", "B: false", "C: depends"],
    answerIndex: 0,
    explanation: "In browsers, global this points to window. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 27,
    prompt: "What prints to the console?",
    code: `for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}`,
    options: ["A: 1 2", "B: 1 2 3", "C: 1 2 4", "D: 1 3 4"],
    answerIndex: 2,
    explanation: "continue skips 3, prints 1,2,4. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 28,
    prompt: "What prints to the console?",
    code: `String.prototype.sayPizza = () => "Pizza time!";
const name = "Noah";
console.log(name.sayPizza());`,
    options: ["A: \"Pizza time!\"", "B: TypeError", "C: SyntaxError", "D: undefined"],
    answerIndex: 0,
    explanation: "Primitives are boxed, so prototype method works. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 29,
    prompt: "What prints to the console?",
    code: `const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);`,
    options: ["A: 123", "B: 456", "C: undefined", "D: ReferenceError"],
    answerIndex: 1,
    explanation: "Both keys stringify to \"[object Object]\"; last wins.",
  },
  {
    id: 30,
    prompt: "What prints to the console?",
    code: `const first = () => console.log("First");
const second = () => setTimeout(() => console.log("Second"));
const third = () => console.log("Third");

second();
first();
third();`,
    options: [
      "A: First Second Third",
      "B: First Third Second",
      "C: Second First Third",
      "D: Second Third First",
    ],
    answerIndex: 1,
    explanation: "setTimeout runs after the current call stack. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 31,
    prompt: "What is event.target when clicking the button?",
    code: `<div onclick="console.log('outer')">
  <div onclick="console.log('inner')">
    <button onclick="console.log('button')">Click</button>
  </div>
</div>`,
    options: ["A: outer div", "B: inner div", "C: button", "D: array of elements"],
    answerIndex: 2,
    explanation: "event.target is the element that initiated the event. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 32,
    prompt: "When clicking the paragraph, what logs?",
    code: `<div onclick="console.log('div')">
  <p onclick="console.log('p')">Tap</p>
</div>`,
    options: ["A: p then div", "B: div then p", "C: p only", "D: div only"],
    answerIndex: 0,
    explanation: "Bubbling logs inner first, then outer. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 33,
    prompt: "What prints to the console?",
    code: `const person = { name: "Noah" };

function sayHi(age) {
  return this.name + " is " + age;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));`,
    options: [
      "A: undefined is 21, Noah is 21",
      "B: function, function",
      "C: Noah is 21, Noah is 21",
      "D: Noah is 21, function",
    ],
    answerIndex: 3,
    explanation: "call executes, bind returns a new function. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 34,
    prompt: "What prints to the console?",
    code: `function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());`,
    options: ["A: \"object\"", "B: \"number\"", "C: \"function\"", "D: \"undefined\""],
    answerIndex: 1,
    explanation: "0 is a number. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 35,
    prompt: "Which values are falsy?",
    code: `0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;`,
    options: [
      "A: 0, \"\", undefined",
      "B: 0, new Number(0), \"\", new Boolean(false), undefined",
      "C: 0, \"\", new Boolean(false), undefined",
      "D: All are falsy",
    ],
    answerIndex: 0,
    explanation: "Objects are truthy, even if they wrap falsy values. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 36,
    prompt: "What prints to the console?",
    code: `console.log(typeof typeof 1);`,
    options: ["A: \"number\"", "B: \"string\"", "C: \"object\"", "D: \"undefined\""],
    answerIndex: 1,
    explanation: "typeof 1 is \"number\"; typeof \"number\" is \"string\".",
  },
  {
    id: 37,
    prompt: "What prints to the console?",
    code: `const nums = [1, 2, 3];
nums[10] = 11;
console.log(nums);`,
    options: [
      "A: [1, 2, 3, null x 7, 11]",
      "B: [1, 2, 3, 11]",
      "C: [1, 2, 3, empty x 7, 11]",
      "D: SyntaxError",
    ],
    answerIndex: 2,
    explanation: "Setting index 10 creates empty slots. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 38,
    prompt: "What prints to the console?",
    code: `(() => {
  let x, y;
  try {
    throw new Error("oops");
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();`,
    options: ["A: 1 undefined 2", "B: undefined undefined undefined", "C: 1 1 2", "D: 1 undefined undefined"],
    answerIndex: 0,
    explanation: "catch param shadows outer x; y is assigned in outer scope. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 39,
    prompt: "Everything in JavaScript is either a primitive or an object.",
    options: ["A: true", "B: false", "C: only objects", "D: only functions"],
    answerIndex: 0,
    explanation: "Functions are objects; primitives are the other category. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 40,
    prompt: "What prints to the console?",
    code: `[[0, 1], [2, 3]].reduce(
  (acc, cur) => acc.concat(cur),
  [1, 2]
);`,
    options: [
      "A: [0, 1, 2, 3, 1, 2]",
      "B: [6, 1, 2]",
      "C: [1, 2, 0, 1, 2, 3]",
      "D: [1, 2, 6]",
    ],
    answerIndex: 2,
    explanation: "Initial value [1,2] is concatenated with each sub-array. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 41,
    prompt: "What prints to the console?",
    code: `!!null;
!!"";
!!1;`,
    options: ["A: false true false", "B: false false true", "C: false true true", "D: true true false"],
    answerIndex: 1,
    explanation: "null and empty string are falsy; 1 is truthy. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 42,
    prompt: "What does setInterval return in the browser?",
    code: `setInterval(() => console.log("Hi"), 1000);`,
    options: ["A: a unique id", "B: the milliseconds", "C: the callback", "D: undefined"],
    answerIndex: 0,
    explanation: "It returns a timer id that can be cleared. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 43,
    prompt: "What does this return?",
    code: `[..."Maya"];`,
    options: [
      "A: [\"M\", \"a\", \"y\", \"a\"]",
      "B: [\"Maya\"]",
      "C: [[], \"Maya\"]",
      "D: [[\"M\", \"a\", \"y\", \"a\"]]",
    ],
    answerIndex: 0,
    explanation: "Spread splits a string into characters. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 44,
    prompt: "What prints to the console?",
    code: `function* gen(i) {
  yield i;
  yield i * 2;
}

const g = gen(6);
console.log(g.next().value);
console.log(g.next().value);`,
    options: ["A: 0, 6", "B: 6, 12", "C: 12, 12", "D: 6, 6"],
    answerIndex: 1,
    explanation: "Generator yields i then i*2. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 45,
    prompt: "What prints to the console?",
    code: `const first = new Promise((res) => setTimeout(res, 400, "first"));
const second = new Promise((res) => setTimeout(res, 50, "second"));

Promise.race([first, second]).then((v) => console.log(v));`,
    options: ["A: first", "B: second", "C: first second", "D: second first"],
    answerIndex: 1,
    explanation: "Promise.race resolves with the first settled promise. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 46,
    prompt: "What prints to the console?",
    code: `let person = { name: "Ari" };
const members = [person];
person = null;

console.log(members);`,
    options: ["A: null", "B: [null]", "C: [{}]", "D: [{ name: \"Ari\" }]"],
    answerIndex: 3,
    explanation: "Array keeps reference to the original object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 47,
    prompt: "What prints to the console?",
    code: `const person = { name: "Ari", age: 21 };

for (const key in person) {
  console.log(key);
}`,
    options: ["A: {name}, {age}", "B: name, age", "C: Ari, 21", "D: [name, Ari], [age, 21]"],
    answerIndex: 1,
    explanation: "for...in iterates object keys. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 48,
    prompt: "What prints to the console?",
    code: `console.log(3 + 4 + "5");`,
    options: ["A: \"345\"", "B: \"75\"", "C: 12", "D: \"12\""],
    answerIndex: 1,
    explanation: "3+4=7, then string concat => \"75\".",
  },
  {
    id: 49,
    prompt: "What is the value of value?",
    code: `const value = parseInt("7*6", 10);`,
    options: ["A: 42", "B: \"42\"", "C: 7", "D: NaN"],
    answerIndex: 2,
    explanation: "parseInt stops at non-numeric character. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 50,
    prompt: "What prints to the console?",
    code: `[1, 2, 3].map((n) => {
  if (typeof n === "number") return;
  return n * 2;
});`,
    options: [
      "A: []",
      "B: [null, null, null]",
      "C: [undefined, undefined, undefined]",
      "D: [empty x 3]",
    ],
    answerIndex: 2,
    explanation: "Implicit return is undefined for each item. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 51,
    prompt: "What prints to the console?",
    code: `function update(person, year) {
  person.name = "Kai";
  year = "2000";
}

const person = { name: "Zoe" };
const birthYear = "1999";

update(person, birthYear);
console.log(person, birthYear);`,
    options: [
      "A: { name: \"Kai\" }, \"1999\"",
      "B: { name: \"Zoe\" }, \"2000\"",
      "C: { name: \"Kai\" }, \"2000\"",
      "D: { name: \"Zoe\" }, \"1999\"",
    ],
    answerIndex: 0,
    explanation: "Objects are mutated; primitives are passed by value. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 52,
    prompt: "What prints to the console?",
    code: `function boom() {
  throw "Boom!";
}

function test() {
  try {
    boom();
    console.log("ok");
  } catch (e) {
    console.log("caught:", e);
  }
}

test();`,
    options: [
      "A: ok",
      "B: caught: undefined",
      "C: caught: Boom!",
      "D: SyntaxError",
    ],
    answerIndex: 2,
    explanation: "The thrown string is caught and logged. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 53,
    prompt: "What prints to the console?",
    code: `function Car() {
  this.make = "Tesla";
  return { make: "Volvo" };
}

const car = new Car();
console.log(car.make);`,
    options: ["A: Tesla", "B: Volvo", "C: ReferenceError", "D: TypeError"],
    answerIndex: 1,
    explanation: "Returning an object from a constructor overrides this. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 54,
    prompt: "What prints to the console?",
    code: `(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);`,
    options: ["A: \"undefined\", \"number\"", "B: \"number\", \"number\"", "C: \"object\", \"number\"", "D: \"number\", \"undefined\""],
    answerIndex: 0,
    explanation: "x is block-scoped; y becomes global (non-strict). This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 55,
    prompt: "What prints to the console?",
    code: `class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log("Woof " + this.name);
};

const pet = new Dog("Rex");
pet.bark();

delete Dog.prototype.bark;
pet.bark();`,
    options: [
      "A: \"Woof Rex\", TypeError",
      "B: \"Woof Rex\", \"Woof Rex\"",
      "C: \"Woof Rex\", undefined",
      "D: TypeError, TypeError",
    ],
    answerIndex: 0,
    explanation: "The method is deleted from the prototype. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 56,
    prompt: "What prints to the console?",
    code: `const set = new Set([1, 1, 2, 3, 4]);
console.log(set);`,
    options: ["A: [1,1,2,3,4]", "B: [1,2,3,4]", "C: {1,1,2,3,4}", "D: {1,2,3,4}"],
    answerIndex: 3,
    explanation: "Set keeps unique values. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 57,
    prompt: "What prints to the console?",
    code: `// counter.js
let count = 10;
export default count;

// index.js
import counter from "./counter";
counter += 1;
console.log(counter);`,
    options: ["A: 10", "B: 11", "C: Error", "D: NaN"],
    answerIndex: 2,
    explanation: "ES module imports are read-only bindings. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 58,
    prompt: "What prints to the console?",
    code: `var name = "Ari";
age = 21;

console.log(delete name);
console.log(delete age);`,
    options: ["A: false, true", "B: true, true", "C: false, false", "D: undefined, undefined"],
    answerIndex: 0,
    explanation: "var bindings can't be deleted; implicit globals can. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 59,
    prompt: "What prints to the console?",
    code: `const numbers = [1, 2, 3, 4, 5];
const [x] = numbers;
console.log(x);`,
    options: ["A: [1,2,3,4,5]", "B: [1]", "C: 1", "D: [[1,2,3,4,5]]"],
    answerIndex: 2,
    explanation: "Destructuring takes the first element. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 60,
    prompt: "What prints to the console?",
    code: `const user = { name: "Ari", age: 22 };
const admin = { admin: true, ...user };
console.log(admin);`,
    options: [
      "A: { admin: true, user: { name: \"Ari\", age: 22 } }",
      "B: { admin: true, name: \"Ari\", age: 22 }",
      "C: { admin: true, user: [\"Ari\", 22] }",
      "D: { admin: true }",
    ],
    answerIndex: 1,
    explanation: "Spread copies properties onto the object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 61,
    prompt: "What prints to the console?",
    code: `const person = { name: "Ari" };
Object.defineProperty(person, "age", { value: 22 });

console.log(person);
console.log(Object.keys(person));`,
    options: [
      "A: {name, age} and [\"name\", \"age\"]",
      "B: {name, age} and [\"name\"]",
      "C: {name} and [\"name\", \"age\"]",
      "D: {name} and [\"age\"]",
    ],
    answerIndex: 1,
    explanation: "defineProperty defaults to non-enumerable. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 62,
    prompt: "What prints to the console?",
    code: `const settings = { user: "neo", level: 3, health: 90 };
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);`,
    options: [
      "A: \"{\\\"level\\\":3,\\\"health\\\":90}\"",
      "B: \"{\\\"user\\\":\\\"neo\\\"}\"",
      "C: \"[\\\"level\\\",\\\"health\\\"]\"",
      "D: \"{\\\"user\\\":\\\"neo\\\",\\\"level\\\":3,\\\"health\\\":90}\"",
    ],
    answerIndex: 0,
    explanation: "Replacer array keeps only those keys. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 63,
    prompt: "What prints to the console?",
    code: `let num = 10;
const inc = () => num++;
const incCopy = (n) => n++;

const a = inc();
const b = incCopy(a);

console.log(a);
console.log(b);`,
    options: ["A: 10, 10", "B: 10, 11", "C: 11, 11", "D: 11, 12"],
    answerIndex: 0,
    explanation: "Post-increment returns the old value. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 64,
    prompt: "What prints to the console?",
    code: `const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);`,
    options: ["A: 20, 40, 80, 160", "B: 20, 20, 20, 40", "C: 20, 20, 40, 80", "D: NaN, NaN, 20, 40"],
    answerIndex: 1,
    explanation: "Default param uses a fresh copy; passing value mutates it. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 65,
    prompt: "What prints to the console?",
    code: `[1, 2, 3, 4].reduce((x, y) => console.log(x, y));`,
    options: ["A: 1 2, 3 3, 6 4", "B: 1 2, 2 3, 3 4", "C: 1 undefined, 2 undefined, 3 undefined, 4 undefined", "D: 1 2, undefined 3, undefined 4"],
    answerIndex: 3,
    explanation: "Callback returns undefined, so accumulator becomes undefined. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 66,
    prompt: "Which constructor correctly extends the class?",
    code: `class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}`,
    options: ["A: 1", "B: 2", "C: 3", "D: 4"],
    answerIndex: 1,
    explanation: "You must call super() before using this. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 67,
    prompt: "What prints to the console?",
    code: `// index.js
console.log("index");
import { sum } from "./sum.js";
console.log(sum(1, 2));

// sum.js
console.log("sum");
export const sum = (a, b) => a + b;`,
    options: ["A: index, sum, 3", "B: sum, index, 3", "C: sum, 3, index", "D: index, undefined, sum"],
    answerIndex: 1,
    explanation: "ES module dependencies run before the importer. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 68,
    prompt: "What prints to the console?",
    code: `console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("x") === Symbol("x"));`,
    options: ["A: true, true, false", "B: false, true, false", "C: true, false, true", "D: true, true, true"],
    answerIndex: 0,
    explanation: "Symbols are always unique. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 69,
    prompt: "What prints to the console?",
    code: `const name = "Nova";
console.log(name.padStart(6));
console.log(name.padStart(2));`,
    options: [
      "A: \"Nova\", \"Nova\"",
      "B: \"  Nova\", \"  Nova\"",
      "C: \"  Nova\", \"Nova\"",
      "D: \"Nova\", \"No\"",
    ],
    answerIndex: 2,
    explanation: "padStart does nothing if target length is smaller. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 70,
    prompt: "What prints to the console?",
    code: `console.log("foo" + "bar");`,
    options: ["A: \"foobar\"", "B: 257548", "C: code points", "D: Error"],
    answerIndex: 0,
    explanation: "String concatenation joins them. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 71,
    prompt: "Which calls log the expected text?",
    code: `function* startGame() {
  const answer = yield "Do you like JS?";
  if (answer !== "Yes") return "Game over";
  return "You are awesome";
}

const game = startGame();
console.log(/* 1 */); // Do you like JS?
console.log(/* 2 */); // You are awesome`,
    options: [
      "A: game.next(\"Yes\").value and game.next().value",
      "B: game.next().value and game.next(\"Yes\").value",
      "C: game.next.value() and game.next.value(\"Yes\")",
      "D: game.next.value(\"Yes\") and game.next.value()",
    ],
    answerIndex: 1,
    explanation: "First next yields the question; second passes the answer. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 72,
    prompt: "What prints to the console?",
    code: "console.log(String.raw`Hello\\nworld`);",
    options: ["A: Hello world", "B: Hello\nworld", "C: Hello\\nworld", "D: Hello\\n\nworld"],
    answerIndex: 2,
    explanation: "String.raw keeps escape sequences literal. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 73,
    prompt: "What prints to the console?",
    code: `async function getData() {
  return await Promise.resolve("Done!");
}

const data = getData();
console.log(data);`,
    options: ["A: \"Done!\"", "B: Promise {<fulfilled>: \"Done!\"}", "C: Promise {<pending>}", "D: undefined"],
    answerIndex: 2,
    explanation: "getData returns a promise immediately. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 74,
    prompt: "What is logged?",
    code: `function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);`,
    options: ["A: [\"apple\", \"banana\"]", "B: 2", "C: true", "D: undefined"],
    answerIndex: 1,
    explanation: "push returns the new length. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 75,
    prompt: "What prints to the console?",
    code: `const box = { x: 10, y: 20 };
Object.freeze(box);

const shape = box;
shape.x = 100;
console.log(shape);`,
    options: ["A: { x: 100, y: 20 }", "B: { x: 10, y: 20 }", "C: { x: 100 }", "D: ReferenceError"],
    answerIndex: 1,
    explanation: "Frozen objects ignore mutations (in non-strict). This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 76,
    prompt: "What prints to the console?",
    code: `const { firstName: alias } = { firstName: "Ari" };
console.log(firstName);`,
    options: ["A: \"Ari\"", "B: \"alias\"", "C: undefined", "D: ReferenceError"],
    answerIndex: 3,
    explanation: "firstName is not defined in this scope. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 77,
    prompt: "Is this a pure function?",
    code: `function sum(a, b) {
  return a + b;
}`,
    options: ["A: Yes", "B: No"],
    answerIndex: 0,
    explanation: "It has no side effects and depends only on inputs. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 78,
    prompt: "What prints to the console?",
    code: `const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) return "From cache! " + cache[num];
    const result = num + 10;
    cache[num] = result;
    return "Calculated! " + result;
  };
};

const fn = add();
console.log(fn(10));
console.log(fn(10));
console.log(fn(5 * 2));`,
    options: [
      "A: Calculated! 20, Calculated! 20, Calculated! 20",
      "B: Calculated! 20, From cache! 20, Calculated! 20",
      "C: Calculated! 20, From cache! 20, From cache! 20",
      "D: Calculated! 20, From cache! 20, Error",
    ],
    answerIndex: 2,
    explanation: "The third call uses the cached key 10. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 79,
    prompt: "What prints to the console?",
    code: `const life = ["coffee", "code", "pizza"];

for (let i in life) console.log(i);
for (let v of life) console.log(v);`,
    options: [
      "A: 0 1 2 and coffee code pizza",
      "B: coffee code pizza and coffee code pizza",
      "C: coffee code pizza and 0 1 2",
      "D: 0 1 2 and {0:...,1:...,2:...}",
    ],
    answerIndex: 0,
    explanation: "for...in gives indices; for...of gives values. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 80,
    prompt: "What prints to the console?",
    code: `const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);`,
    options: ["A: [\"1 + 2\", \"1 * 2\", \"1 / 2\"]", "B: [\"12\", 2, 0.5]", "C: [3, 2, 0.5]", "D: [1, 1, 1]"],
    answerIndex: 2,
    explanation: "Each expression is evaluated before array creation. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 81,
    prompt: "What prints to the console?",
    code: `function sayHi(name) {
  return "Hi, " + name;
}

console.log(sayHi());`,
    options: ["A: Hi,", "B: Hi, undefined", "C: Hi, null", "D: ReferenceError"],
    answerIndex: 1,
    explanation: "Missing argument is undefined. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 82,
    prompt: "What prints to the console?",
    code: `var mood = "cool";

setTimeout(function () {
  const mood = "warm";
  const data = {
    mood: "fresh",
    getMood() {
      return this.mood;
    },
  };

  console.log(data.getMood());
  console.log(data.getMood.call({ mood: "ok" }));
}, 0);`,
    options: ["A: fresh and warm", "B: fresh and ok", "C: warm and ok", "D: cool and cool"],
    answerIndex: 1,
    explanation: "First call uses data as this; second uses the provided object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 83,
    prompt: "What prints to the console?",
    code: `const person = { name: "Ari", age: 21 };
let city = person.city;
city = "Oslo";
console.log(person);`,
    options: ["A: { name: \"Ari\", age: 21 }", "B: { name: \"Ari\", age: 21, city: \"Oslo\" }", "C: { name: \"Ari\", age: 21, city: undefined }", "D: \"Oslo\""],
    answerIndex: 0,
    explanation: "Assigning to a local variable doesn't change the object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 84,
    prompt: "What prints to the console?",
    code: `function checkAge(age) {
  if (age < 18) {
    const msg = "Too young";
  } else {
    const msg = "Old enough";
  }
  return msg;
}

console.log(checkAge(21));`,
    options: ["A: Too young", "B: Old enough", "C: ReferenceError", "D: undefined"],
    answerIndex: 2,
    explanation: "msg is block-scoped and not accessible outside the blocks. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 85,
    prompt: "What gets logged?",
    code: `fetch("https://example.com/api/user/1")
  .then((res) => res.json())
  .then((data) => console.log(data));`,
    options: ["A: The fetch response object", "B: The result of res.json()", "C: The result of the previous then", "D: Always undefined"],
    answerIndex: 1,
    explanation: "The second then logs the parsed JSON. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 86,
    prompt: "Which expression sets hasName to true without passing true?",
    code: `function getName(name) {
  const hasName = // ?
}`,
    options: ["A: !!name", "B: name", "C: new Boolean(name)", "D: name.length"],
    answerIndex: 0,
    explanation: "Double bang coerces to boolean. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 87,
    prompt: "What prints to the console?",
    code: `console.log("I want pizza"[0]);`,
    options: ["A: \"\"", "B: \"I\"", "C: SyntaxError", "D: undefined"],
    answerIndex: 1,
    explanation: "Index 0 is the first character. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 88,
    prompt: "What prints to the console?",
    code: `function sum(a, b = a) {
  console.log(a + b);
}

sum(10);`,
    options: ["A: NaN", "B: 20", "C: ReferenceError", "D: undefined"],
    answerIndex: 1,
    explanation: "b defaults to a. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 89,
    prompt: "What prints to the console?",
    code: `// module.js
export default () => "Hello";
export const name = "Ari";

// index.js
import * as data from "./module";
console.log(data);`,
    options: [
      "A: { default: function, name: \"Ari\" }",
      "B: { default: function }",
      "C: { default: \"Hello\", name: \"Ari\" }",
      "D: Global object",
    ],
    answerIndex: 0,
    explanation: "Namespace import includes default and named exports. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 90,
    prompt: "What prints to the console?",
    code: `class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);`,
    options: ["A: \"class\"", "B: \"function\"", "C: \"object\"", "D: \"string\""],
    answerIndex: 2,
    explanation: "Instances are objects. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 91,
    prompt: "What prints to the console?",
    code: `let list = [1, 2, 3].push(4);
console.log(list.push(5));`,
    options: ["A: [1,2,3,4,5]", "B: [1,2,3,5]", "C: [1,2,3,4]", "D: TypeError"],
    answerIndex: 3,
    explanation: "push returns a number; numbers have no push method. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 92,
    prompt: "What prints to the console?",
    code: `function givePizza() {
  return "Pizza!";
}
const giveChoco = () => "Chocolate!";

console.log(givePizza.prototype);
console.log(giveChoco.prototype);`,
    options: ["A: {} and {}", "B: {} and undefined", "C: {constructor} and {}", "D: {constructor} and undefined"],
    answerIndex: 3,
    explanation: "Normal functions have a prototype; arrow functions do not. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 93,
    prompt: "What prints to the console?",
    code: `const person = { name: "Ari", age: 21 };
for (const [k, v] of Object.entries(person)) {
  console.log(k, v);
}`,
    options: [
      "A: name Ari and age 21",
      "B: [\"name\",\"Ari\"] and [\"age\",21]",
      "C: [\"name\",\"age\"] and undefined",
      "D: Error",
    ],
    answerIndex: 0,
    explanation: "Object.entries returns [key, value] pairs. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 94,
    prompt: "What happens here?",
    code: `function getItems(list, ...rest, last) {
  return [...list, ...rest, last];
}

getItems(["a", "b"], "c", "d");`,
    options: ["A: [\"a\",\"b\",\"c\",\"d\"]", "B: [[\"a\",\"b\"],\"c\",\"d\"]", "C: [\"a\",\"b\",[\"c\"],\"d\"]", "D: SyntaxError"],
    answerIndex: 3,
    explanation: "A rest parameter must be the last parameter. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 95,
    prompt: "What prints to the console?",
    code: `function nums(a, b) {
  if (a > b) console.log("a bigger");
  else console.log("b bigger");
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));`,
    options: [
      "A: a bigger, 6 and b bigger, 3",
      "B: a bigger, undefined and b bigger, undefined",
      "C: undefined and undefined",
      "D: SyntaxError",
    ],
    answerIndex: 1,
    explanation: "Automatic semicolon insertion ends the return line. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 96,
    prompt: "What prints to the console?",
    code: `class Person {
  constructor() {
    this.name = "Ari";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sam";
  }
};

const member = new Person();
console.log(member.name);`,
    options: ["A: \"Ari\"", "B: \"Sam\"", "C: Error: cannot redeclare", "D: SyntaxError"],
    answerIndex: 1,
    explanation: "Person is reassigned to the new class. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 97,
    prompt: "What prints to the console?",
    code: `const info = { [Symbol("x")]: "y" };
console.log(info);
console.log(Object.keys(info));`,
    options: ["A: {Symbol(x):\"y\"} and [\"Symbol(x)\"]", "B: {} and []", "C: {x:\"y\"} and [\"x\"]", "D: {Symbol(x):\"y\"} and []"],
    answerIndex: 3,
    explanation: "Symbol keys are not returned by Object.keys. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 98,
    prompt: "What prints to the console?",
    code: `const getList = ([x, ...y]) => [x, y];
const getUser = (user) => { name: user.name, age: user.age };

const list = [1, 2, 3, 4];
const user = { name: "Ari", age: 21 };

console.log(getList(list));
console.log(getUser(user));`,
    options: [
      "A: [1,[2,3,4]] and SyntaxError",
      "B: [1,[2,3,4]] and { name: \"Ari\", age: 21 }",
      "C: [1,2,3,4] and { name: \"Ari\", age: 21 }",
      "D: Error and { name: \"Ari\", age: 21 }",
    ],
    answerIndex: 0,
    explanation: "getUser returns undefined because braces need an explicit return. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 99,
    prompt: "What prints to the console?",
    code: `const name = "Ari";
console.log(name());`,
    options: ["A: SyntaxError", "B: ReferenceError", "C: TypeError", "D: undefined"],
    answerIndex: 2,
    explanation: "You can't call a string as a function. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 100,
    prompt: "What is the value of output?",
    code: `const output = \`\${[] && "Not"}possible!
You should\${"" && "n't"} worry\`;`,
    options: [
      "A: possible! You should worry",
      "B: Notpossible! You should worry",
      "C: Notpossible! You shouldn't worry",
      "D: possible! You shouldn't worry",
    ],
    answerIndex: 1,
    explanation: "[] is truthy; empty string is falsy. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 101,
    prompt: "What prints to the console?",
    code: `const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);`,
    options: ["A: false null []", "B: null \"\" true", "C: {} \"\" []", "D: null null true"],
    answerIndex: 2,
    explanation: "OR returns the first truthy value. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 102,
    prompt: "What prints to the console?",
    code: `const wait = () => new Promise((res) => setTimeout(() => res("done"), 0));

function first() {
  wait().then((v) => console.log("first:", v));
  console.log("first: sync");
}

async function second() {
  console.log("second:", await wait());
  console.log("second: sync");
}

first();
second();`,
    options: [
      "A: first: sync, first: done, second: done, second: sync",
      "B: first: done, first: sync, second: done, second: sync",
      "C: first: sync, second: done, second: sync, first: done",
      "D: second: done, first: sync, second: sync, first: done",
    ],
    answerIndex: 0,
    explanation: "Sync logs first; timers resolve in order they were created. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 103,
    prompt: "What prints to the console?",
    code: `const set = new Set();
set.add(1);
set.add("Ari");
set.add({ name: "Ari" });

for (let item of set) {
  console.log(item + 2);
}`,
    options: ["A: 3, NaN, NaN", "B: 3, 7, NaN", "C: 3, Ari2, [object Object]2", "D: \"12\", Ari2, [object Object]2"],
    answerIndex: 2,
    explanation: "String + number concatenates; object + number stringifies. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 104,
    prompt: "What is the value of this expression?",
    code: `Promise.resolve(5);`,
    options: ["A: 5", "B: Promise {<pending>: 5}", "C: Promise {<fulfilled>: 5}", "D: Error"],
    answerIndex: 2,
    explanation: "Promise.resolve returns a fulfilled promise. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 105,
    prompt: "What prints to the console?",
    code: `function compare(a, b = person) {
  if (a !== b) console.log("Different");
  else console.log("Same");
}

const person = { name: "Ari" };
compare(person);`,
    options: ["A: Different", "B: Same", "C: ReferenceError", "D: SyntaxError"],
    answerIndex: 1,
    explanation: "Default parameter references the same object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 106,
    prompt: "What prints to the console?",
    code: `const config = {
  red: true,
  blue: false,
  green: true,
};

const colors = ["pink", "red", "blue"];

console.log(config.colors?.[1]);`,
    options: ["A: true", "B: false", "C: undefined", "D: TypeError"],
    answerIndex: 2,
    explanation: "config.colors is undefined; optional chaining returns undefined. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 107,
    prompt: "What prints to the console?",
    code: `console.log("hi" === "hi");`,
    options: ["A: true", "B: false"],
    answerIndex: 0,
    explanation: "Same strings are equal. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 108,
    prompt: "Which method mutates the original array?",
    code: `const items = ["spark", "leaf", "smile"];

items.map((x) => x + "x");
items.filter((x) => x !== "leaf");
items.find((x) => x !== "leaf");
items.reduce((acc, cur) => acc + "x", "");
items.slice(1, 2, "x");
items.splice(1, 2, "x");`,
    options: ["A: All of them", "B: map reduce slice splice", "C: map slice splice", "D: splice"],
    answerIndex: 3,
    explanation: "splice mutates; the others return new values. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 109,
    prompt: "What prints to the console?",
    code: `const menu = ["pizza", "chocolate", "avocado", "burger"];
const info = { favorite: menu[0] };

info.favorite = "pasta";

console.log(menu);`,
    options: [
      "A: [\"pizza\", \"chocolate\", \"avocado\", \"burger\"]",
      "B: [\"pasta\", \"chocolate\", \"avocado\", \"burger\"]",
      "C: [\"pasta\", \"pizza\", \"chocolate\", \"avocado\", \"burger\"]",
      "D: ReferenceError",
    ],
    answerIndex: 0,
    explanation: "Changing the object property does not mutate the original array. The array contents are unchanged. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 110,
    prompt: "What does JSON.parse do?",
    options: [
      "A: Parses JSON into a JavaScript value",
      "B: Parses a JavaScript object into JSON",
      "C: Parses any JavaScript value into JSON",
      "D: Parses JSON into a JavaScript object only",
    ],
    answerIndex: 0,
    explanation: "JSON.parse converts valid JSON text into the corresponding JavaScript value. It can return objects, arrays, numbers, strings, booleans, or null. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 111,
    prompt: "What prints to the console?",
    code: `let name = "Nora";

function getName() {
  console.log(name);
  let name = "Sasha";
}

getName();`,
    options: ["A: Nora", "B: Sasha", "C: undefined", "D: ReferenceError"],
    answerIndex: 3,
    explanation: "The inner let name is in the temporal dead zone until it is declared. Accessing it before initialization throws a ReferenceError. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 112,
    prompt: "What prints to the console?",
    code: `function* genOne() {
  yield ["a", "b", "c"];
}

function* genTwo() {
  yield* ["a", "b", "c"];
}

const one = genOne();
const two = genTwo();

console.log(one.next().value);
console.log(two.next().value);`,
    options: [
      "A: a and a",
      "B: a and undefined",
      "C: [\"a\", \"b\", \"c\"] and a",
      "D: a and [\"a\", \"b\", \"c\"]",
    ],
    answerIndex: 2,
    explanation: "yield returns the array as one value, while yield* delegates and yields each element. So the first yields the array, the second yields the first element. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 113,
    prompt: "What prints to the console?",
    code: `console.log(\`\${(x => x)("I enjoy")} to code\`);`,
    options: [
      "A: I enjoy to code",
      "B: undefined to code",
      "C: ${(x => x)(\"I enjoy\") to code",
      "D: TypeError",
    ],
    answerIndex: 0,
    explanation: "The arrow function returns the string, which is interpolated into the template literal. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 114,
    prompt: "What happens here?",
    code: `let config = {
  timer: setInterval(() => {
    console.log("Tick");
  }, 1000),
};

config = null;`,
    options: [
      "A: The interval stops immediately",
      "B: The interval runs once",
      "C: The interval keeps running every second",
      "D: Nothing happens because config is null",
    ],
    answerIndex: 2,
    explanation: "The interval id is stored in the object, but the timer itself continues until cleared. Setting config to null does not clear the interval. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 115,
    prompt: "Which call returns 'Hello world!'?",
    code: `const myMap = new Map();
const myFunc = () => "greeting";

myMap.set(myFunc, "Hello world!");

// 1
myMap.get("greeting");
// 2
myMap.get(myFunc);
// 3
myMap.get(() => "greeting");`,
    options: ["A: 1", "B: 2", "C: 2 and 3", "D: All of them"],
    answerIndex: 1,
    explanation: "Map keys are compared by reference. Only the exact function reference used as the key will match. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 116,
    prompt: "What prints to the console?",
    code: `const person = { name: "Nora", age: 20 };

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sara";
};

changeAge(person);
changeAgeAndName();

console.log(person);`,
    options: [
      "A: {name: \"Sara\", age: 21}",
      "B: {name: \"Sara\", age: 22}",
      "C: {name: \"Nora\", age: 21}",
      "D: {name: \"Nora\", age: 22}",
    ],
    answerIndex: 2,
    explanation: "changeAge mutates the passed object, but changeAgeAndName uses a fresh copy because no argument is passed. Only age increments once. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 117,
    prompt: "Which option returns 6?",
    code: `function sumValues(x, y, z) {
  return x + y + z;
}
`,
    options: [
      "A: sumValues([...1, 2, 3])",
      "B: sumValues([...[1, 2, 3]])",
      "C: sumValues(...[1, 2, 3])",
      "D: sumValues([1, 2, 3])",
    ],
    answerIndex: 2,
    explanation: "The spread operator expands the array into individual arguments. The other calls pass a single array. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 118,
    prompt: "What prints to the console?",
    code: `let num = 1;
const list = ["party", "hat", "smile", "wild"];

console.log(list[(num += 1)]);`,
    options: ["A: hat", "B: smile", "C: SyntaxError", "D: ReferenceError"],
    answerIndex: 1,
    explanation: "num becomes 2, so list[2] is " + '"smile"' + ". This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 119,
    prompt: "What prints to the console?",
    code: `const person = {
  firstName: "Nora",
  lastName: "Hill",
  pet: {
    name: "Milo",
    breed: "Hound",
  },
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());`,
    options: [
      "A: undefined undefined undefined undefined",
      "B: Milo undefined Nora Hill ReferenceError",
      "C: Milo null Nora Hill null",
      "D: null ReferenceError null ReferenceError",
    ],
    answerIndex: 1,
    explanation: "Optional chaining returns undefined for missing properties, but member is not defined, causing ReferenceError. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 120,
    prompt: "What prints to the console?",
    code: `const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
  console.log("We should buy bananas");
} else {
  console.log("No bananas needed");
}`,
    options: [
      "A: We should buy bananas",
      "B: No bananas needed",
      "C: undefined",
      "D: 1",
    ],
    answerIndex: 1,
    explanation: "indexOf returns 0 for the first element, which is falsy, so the else branch runs. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 121,
    prompt: "What prints to the console?",
    code: `const config = {
  languages: [],
  set language(lang) {
    return this.languages.push(lang);
  },
};

console.log(config.language);`,
    options: ["A: function language(lang) { ... }", "B: 0", "C: []", "D: undefined"],
    answerIndex: 3,
    explanation: "Accessing the setter without assigning does nothing and returns undefined. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 122,
    prompt: "What prints to the console?",
    code: `const name = "Nora Hill";

console.log(!typeof name === "object");
console.log(!typeof name === "string");`,
    options: ["A: false true", "B: true false", "C: false false", "D: true true"],
    answerIndex: 2,
    explanation: "typeof name is " + '"string"' + "; !" + '"string"' + " is false, so both comparisons are false. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 123,
    prompt: "What prints to the console?",
    code: `const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};

add(4)(5)(6);`,
    options: ["A: 4 5 6", "B: 6 5 4", "C: 4 function function", "D: undefined undefined 6"],
    answerIndex: 0,
    explanation: "Each call returns a new function until the last call provides z. The log prints 4 5 6. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 124,
    prompt: "What prints to the console?",
    code: `async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();`,
    options: ["A: Promise {1} Promise {2} Promise {3}", "B: Promise {<pending>} Promise {<pending>} Promise {<pending>}", "C: 1 2 3", "D: undefined undefined undefined"],
    answerIndex: 2,
    explanation: "for await resolves each yielded promise before logging. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 125,
    prompt: "What prints to the console?",
    code: `const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};

myFunc(1, 2, 3);`,
    options: ["A: 1 2 3", "B: {1:1} {2:2} {3:3}", "C: {1: undefined} undefined undefined", "D: undefined undefined undefined"],
    answerIndex: 3,
    explanation: "The function expects an object; passing numbers means destructuring from undefined, so x,y,z are undefined. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 126,
    prompt: "What prints to the console?",
    code: `function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "mile-per-hour",
  }).format(speed);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return \`The driver drove \${formattedSpeed} and has to pay \${formattedAmount}\`;
}

console.log(getFine(130, 300));`,
    options: [
      "A: The driver drove 130 and has to pay 300",
      "B: The driver drove 130 mph and has to pay $300.00",
      "C: The driver drove undefined and has to pay undefined",
      "D: The driver drove 130.00 and has to pay 300.00",
    ],
    answerIndex: 1,
    explanation: "Intl.NumberFormat formats numbers with units and currency according to locale. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 127,
    prompt: "What prints to the console?",
    code: `const spooky = ["ghost", "pumpkin", "web"];
({ item: spooky[3] } = { item: "skull" });

console.log(spooky);`,
    options: [
      "A: [\"ghost\", \"pumpkin\", \"web\"]",
      "B: [\"ghost\", \"pumpkin\", \"web\", \"skull\"]",
      "C: [\"ghost\", \"pumpkin\", \"web\", { item: \"skull\" }]",
      "D: [\"ghost\", \"pumpkin\", \"web\", \"[object Object]\"]",
    ],
    answerIndex: 1,
    explanation: "Destructuring assigns to spooky[3], extending the array. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 128,
    prompt: "What prints to the console?",
    code: `const name = "Nora Hill";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));`,
    options: [
      "A: true false true false",
      "B: true false false false",
      "C: false false true false",
      "D: false true false true",
    ],
    answerIndex: 2,
    explanation: "Number.isNaN is strict and returns false for non-numbers; isNaN coerces strings and can return true. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 129,
    prompt: "What prints to the console?",
    code: `const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = "Nora Hill";
}

getInfo();`,
    options: ["A: \"number\"", "B: \"string\"", "C: undefined", "D: ReferenceError"],
    answerIndex: 3,
    explanation: "The inner const is in the temporal dead zone until declared, so accessing it throws. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 130,
    prompt: "What prints to the console?",
    code: `const myPromise = Promise.resolve("Great data");

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error("Oops");
  } finally {
    console.log("Finally!");
  }
})();`,
    options: [
      "A: Great data",
      "B: Finally!",
      "C: Great data Finally!",
      "D: Oops Finally!",
    ],
    answerIndex: 2,
    explanation: "The promise resolves, then finally runs, so both logs appear. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 131,
    prompt: "What prints to the console?",
    code: `const items = ["a", ["b", "b", ["c", "c"]]];

console.log(items.flat(1));`,
    options: [
      "A: [\"a\", [\"b\", \"b\", [\"c\", \"c\"]]]",
      "B: [\"a\", \"b\", \"b\", [\"c\", \"c\"]]",
      "C: [\"a\", [\"b\", \"b\", \"c\", \"c\"]]",
      "D: [\"a\", \"b\", \"b\", \"c\", \"c\"]",
    ],
    answerIndex: 1,
    explanation: "flat(1) flattens only one level of nesting. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 132,
    prompt: "What prints to the console?",
    code: `class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);`,
    options: ["A: 0", "B: 1", "C: 2", "D: 3"],
    answerIndex: 3,
    explanation: "Both variables reference the same object, so the count is incremented three times. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 133,
    prompt: "What prints to the console?",
    code: `const myPromise = Promise.resolve(Promise.resolve("Promise"));

function funcOne() {
  setTimeout(() => console.log("Timeout 1"), 0);
  myPromise.then((res) => res).then((res) => console.log(res + " 1"));
  console.log("Last line 1");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(res + " 2");
  setTimeout(() => console.log("Timeout 2"), 0);
  console.log("Last line 2");
}

funcOne();
funcTwo();`,
    options: [
      "A: Promise 1, Last line 1, Promise 2, Last line 2, Timeout 1, Timeout 2",
      "B: Last line 1, Timeout 1, Promise 1, Last line 2, Promise 2, Timeout 2",
      "C: Last line 1, Promise 2, Last line 2, Promise 1, Timeout 1, Timeout 2",
      "D: Timeout 1, Promise 1, Last line 1, Promise 2, Timeout 2, Last line 2",
    ],
    answerIndex: 0,
    explanation: "Sync logs happen first, then microtasks (promises), then timeouts. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 134,
    prompt: "How can we invoke sum from index.js?",
    code: `// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from "./sum";`,
    options: ["A: sum(4)", "B: sum.sum(4)", "C: sum.default(4)", "D: Default isn't imported with *"],
    answerIndex: 2,
    explanation: "A namespace import stores the default export as the default property. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 135,
    prompt: "What prints to the console?",
    code: `const handler = {
  set: () => console.log("Added a new property!"),
  get: () => console.log("Accessed a property!"),
};

const person = new Proxy({}, handler);

person.name = "Nora";
person.name;`,
    options: ["A: Added a new property!", "B: Accessed a property!", "C: Added a new property! Accessed a property!", "D: Nothing"],
    answerIndex: 2,
    explanation: "Setting triggers set, getting triggers get. Both logs run. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 136,
    prompt: "Which option will modify the person object?",
    code: `const person = { name: "Nora Hill" };

Object.seal(person);`,
    options: [
      "A: person.name = \"Evan Bacon\"",
      "B: person.age = 21",
      "C: delete person.name",
      "D: Object.assign(person, { age: 21 })",
    ],
    answerIndex: 0,
    explanation: "Sealed objects allow changing existing properties but prevent adding or deleting. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 137,
    prompt: "Which option will modify the person object?",
    code: `const person = {
  name: "Nora Hill",
  address: {
    street: "100 Main St",
  },
};

Object.freeze(person);`,
    options: [
      "A: person.name = \"Evan Bacon\"",
      "B: delete person.address",
      "C: person.address.street = \"101 Main St\"",
      "D: person.pet = { name: \"Milo\" }",
    ],
    answerIndex: 2,
    explanation: "Object.freeze is shallow; nested objects can still be mutated. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 138,
    prompt: "What prints to the console?",
    code: `const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);`,
    options: ["A: 2 4 and 3 6", "B: 2 NaN and 3 NaN", "C: 2 Error and 3 6", "D: 2 4 and 3 Error"],
    answerIndex: 0,
    explanation: "Default value uses num at call time; both calls work and log 2 4, 3 6. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 139,
    prompt: "What prints to the console?",
    code: `class Counter {
  #number = 10;

  increment() {
    this.#number++;
  }

  getNum() {
    return this.#number;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.#number);`,
    options: ["A: 10", "B: 11", "C: undefined", "D: SyntaxError"],
    answerIndex: 3,
    explanation: "Private fields cannot be accessed outside the class. This results in a syntax error. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 140,
    prompt: "What is missing here?",
    code: `const teams = [
  { name: "Team 1", members: ["Paul", "Lisa"] },
  { name: "Team 2", members: ["Laura", "Tim"] },
];

function* getMembers(members) {
  for (let i = 0; i < members.length; i++) {
    yield members[i];
  }
}

function* getTeams(teams) {
  for (let i = 0; i < teams.length; i++) {
    // missing
  }
}

const obj = getTeams(teams);
obj.next();
obj.next();`,
    options: [
      "A: yield getMembers(teams[i].members)",
      "B: yield* getMembers(teams[i].members)",
      "C: return getMembers(teams[i].members)",
      "D: return yield getMembers(teams[i].members)",
    ],
    answerIndex: 1,
    explanation: "yield* delegates iteration to another generator. This produces each member. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 141,
    prompt: "What prints to the console?",
    code: `const person = {
  name: "Nora Hill",
  hobbies: ["coding"],
};

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);`,
    options: [
      "A: [\"coding\"]",
      "B: [\"coding\", \"dancing\"]",
      "C: [\"coding\", \"dancing\", \"baking\"]",
      "D: [\"coding\", \"running\", \"dancing\", \"baking\"]",
    ],
    answerIndex: 2,
    explanation: "The first call uses a new array. The next two mutate the default hobbies array. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 142,
    prompt: "What prints to the console?",
    code: `class Bird {
  constructor() {
    console.log("I'm a bird.");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink.");
    super();
  }
}

const pet = new Flamingo();`,
    options: [
      "A: I'm pink.",
      "B: I'm pink. I'm a bird.",
      "C: I'm a bird. I'm pink.",
      "D: Nothing",
    ],
    answerIndex: 1,
    explanation: "The subclass constructor runs first, then super calls the parent constructor. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 143,
    prompt: "Which option results in an error?",
    code: `const items = ["tree", "santa", "gift", "star"];

/* 1 */ items.push("reindeer");
/* 2 */ items.splice(0, 2);
/* 3 */ items = [...items, "toast"];
/* 4 */ items.length = 0;`,
    options: ["A: 1", "B: 1 and 2", "C: 3 and 4", "D: 3"],
    answerIndex: 3,
    explanation: "Reassigning a const variable throws. The others are allowed. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 144,
    prompt: "What must be added to make [...person] yield [\"Nora Hill\", 21]?",
    code: `const person = {
  name: "Nora Hill",
  age: 21,
};

[...person];`,
    options: [
      "A: Nothing, objects are iterable",
      "B: *[Symbol.iterator]() { for (let x in this) yield* this[x] }",
      "C: *[Symbol.iterator]() { yield* Object.values(this) }",
      "D: *[Symbol.iterator]() { for (let x in this) yield this }",
    ],
    answerIndex: 2,
    explanation: "Objects aren't iterable by default. Implementing Symbol.iterator to yield values makes it work. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 145,
    prompt: "What prints to the console?",
    code: `let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);`,
    options: ["A: 1", "B: 2", "C: 3", "D: 4"],
    answerIndex: 2,
    explanation: "Only 1,2,3 are truthy; 0 is falsy. Count becomes 3. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 146,
    prompt: "What prints to the console?",
    code: `function getFruit(fruits) {
  console.log(fruits?.[1]?.[1]);
}

getFruit([["orange", "banana"], ["pineapple"]]);
getFruit();
getFruit([["pineapple"], ["orange", "banana"]]);`,
    options: [
      "A: null, undefined, banana",
      "B: [], null, banana",
      "C: [], [], banana",
      "D: undefined, undefined, banana",
    ],
    answerIndex: 3,
    explanation: "Optional chaining returns undefined when a path is missing. The third call accesses [1][1] = banana. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 147,
    prompt: "What prints to the console?",
    code: `class Calc {
  constructor() {
    this.count = 0;
  }
  increase() {
    this.count++;
  }
}

const calc = new Calc();
new Calc().increase();

console.log(calc.count);`,
    options: ["A: 0", "B: 1", "C: undefined", "D: ReferenceError"],
    answerIndex: 0,
    explanation: "increase was called on a different instance; calc remains 0. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 148,
    prompt: "What prints to the console?",
    code: `const user = {
  email: "e@mail.com",
  password: "12345",
};

const updateUser = ({ email, password }) => {
  if (email) {
    Object.assign(user, { email });
  }
  if (password) {
    user.password = password;
  }
  return user;
};

const updatedUser = updateUser({ email: "new@mail.com" });

console.log(updatedUser === user);`,
    options: ["A: false", "B: true", "C: TypeError", "D: ReferenceError"],
    answerIndex: 1,
    explanation: "updateUser returns the same user object reference. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 149,
    prompt: "What prints to the console?",
    code: `const fruit = ["banana", "orange", "apple"];

fruit.slice(0, 1);
fruit.splice(0, 1);
fruit.unshift("grape");

console.log(fruit);`,
    options: [
      "A: [\"banana\", \"orange\", \"apple\"]",
      "B: [\"orange\", \"apple\"]",
      "C: [\"grape\", \"orange\", \"apple\"]",
      "D: [\"grape\", \"banana\", \"orange\", \"apple\"]",
    ],
    answerIndex: 2,
    explanation: "splice removes the first element; unshift adds to front. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 150,
    prompt: "What prints to the console?",
    code: `const animals = {};
let dog = { emoji: "dog" };
let cat = { emoji: "cat" };

animals[dog] = { ...dog, name: "Mara" };
animals[cat] = { ...cat, name: "Sara" };

console.log(animals[dog]);`,
    options: [
      "A: { emoji: \"dog\", name: \"Mara\" }",
      "B: { emoji: \"cat\", name: \"Sara\" }",
      "C: undefined",
      "D: ReferenceError",
    ],
    answerIndex: 1,
    explanation: "Object keys are stringified; both keys collide, so the last assignment wins. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 151,
    prompt: "What prints to the console?",
    code: `const user = {
  email: "my@mail.com",
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("new@mail.com");
console.log(user.email);`,
    options: ["A: my@mail.com", "B: new@mail.com", "C: undefined", "D: ReferenceError"],
    answerIndex: 0,
    explanation: "Arrow functions don't have their own this, so this.email refers to the outer scope. The object property is unchanged. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 152,
    prompt: "What prints to the console?",
    code: `const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");
const p3 = Promise.reject("Third");
const p4 = Promise.resolve("Fourth");

const runPromises = async () => {
  const res1 = await Promise.all([p1, p2]);
  const res2 = await Promise.all([p3, p4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));`,
    options: [
      "A: [[\"First\", \"Second\"], [\"Fourth\"]]",
      "B: [[\"First\", \"Second\"], [\"Third\", \"Fourth\"]]",
      "C: [[\"First\", \"Second\"]]",
      "D: \"Third\"",
    ],
    answerIndex: 3,
    explanation: "Promise.all rejects when any promise rejects, so the catch logs 'Third'. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 153,
    prompt: "Which method name should be used?",
    code: `const keys = ["name", "age"];
const values = ["Nora", 22];

const method = /* ?? */;
Object[method](keys.map((_, i) => [keys[i], values[i]]));`,
    options: ["A: entries", "B: values", "C: fromEntries", "D: forEach"],
    answerIndex: 2,
    explanation: "Object.fromEntries converts pairs into an object. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 154,
    prompt: "What prints to the console?",
    code: `const createMember = ({ email, address = {} }) => {
  const valid = /.+\@.+\..+/.test(email);
  if (!valid) throw new Error("Valid email pls");
  return {
    email,
    address: address ? address : null,
  };
};

const member = createMember({ email: "my@mail.com" });
console.log(member);`,
    options: [
      "A: { email: \"my@mail.com\", address: null }",
      "B: { email: \"my@mail.com\" }",
      "C: { email: \"my@mail.com\", address: {} }",
      "D: { email: \"my@mail.com\", address: undefined }",
    ],
    answerIndex: 2,
    explanation: "address defaults to an empty object, which is truthy, so it is returned as {}. This result follows from how JavaScript evaluates the code shown.",
  },
  {
    id: 155,
    prompt: "What prints to the console?",
    code: `let randomValue = { name: "Nora" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}`,
    options: ["A: It's not a string!", "B: Yay it's a string!", "C: TypeError", "D: undefined"],
    answerIndex: 1,
    explanation: "typeof randomValue is \"number\"; !" + '"number"' + " is false, so the else branch runs. This result follows from how JavaScript evaluates the code shown.",
  },
];

export default function OutputBasedQuestions() {
  const initial = useMemo(() => questions.map(() => ({ picked: -1, revealed: false })), []);
  const [states, setStates] = useState(initial);

  const onPick = (index: number, optionIndex: number) => {
    setStates((prev) =>
      prev.map((item, i) => (i === index ? { picked: optionIndex, revealed: true } : item))
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-10 dark:from-slate-900 dark:to-slate-800">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
            JavaScript Interview Practice
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            JavaScript Output Based Questions
          </h1>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
            Click an option to reveal the correct answer and a short explanation.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {questions.map((q, idx) => {
            const state = states[idx];
            const letters = ["A", "B", "C", "D"];

            const correctLetter = letters[q.answerIndex] || "A";
            return (
              <article
                key={q.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                    {q.id}. {q.prompt}
                  </h2>
                </div>
                {q.code ? (
                  <pre className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-slate-950 p-3 text-xs text-slate-100 dark:border-slate-700">
                    <code>{q.code}</code>
                  </pre>
                ) : null}
                <div className="mt-4 grid gap-2">
                  {q.options.map((opt, optionIndex) => {
                    const picked = state.picked === optionIndex;
                    const isCorrect = optionIndex === q.answerIndex;
                    const show = state.revealed;
                    const base =
                      "w-full rounded-md border px-3 py-2 text-left text-sm font-semibold transition";
                    const theme = show
                      ? isCorrect
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200"
                        : picked
                        ? "border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-900/30 dark:text-rose-200"
                        : "border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800";
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => onPick(idx, optionIndex)}
                        className={`${base} ${theme}`}
                        aria-pressed={picked}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {state.revealed ? (
                  <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      Answer: {correctLetter}
                    </p>
                    <p className="mt-1">{q.explanation}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
