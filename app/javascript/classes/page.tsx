import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Classes & Inheritance - OOP Guide | Online Compiler",
  description:
    "Master JavaScript classes and inheritance. Learn ES6 classes, constructors, methods, getters/setters, static members, prototypal inheritance, super keyword, and design patterns.",
  keywords: [
    "javascript classes",
    "es6 classes",
    "inheritance",
    "class constructor",
    "prototypal inheritance",
    "super keyword",
    "static methods",
    "getters setters",
    "oop javascript",
  ],
  openGraph: {
    title: "JavaScript Classes & Inheritance - Complete Guide",
    description:
      "Learn JavaScript classes, inheritance, and object-oriented programming patterns with practical examples.",
    url: "/javascript/classes",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Classes & Inheritance",
    description: "Master ES6 classes, inheritance, and OOP patterns in JavaScript.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/classes" },
};

export default function JavaScriptClassesPage() {
  return (
    <>
      <Script
        id="json-ld-classes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript Classes & Inheritance - OOP Guide',
            description: 'Master JavaScript classes and inheritance. Learn ES6 classes, constructors, methods, getters/setters, static members, prototypal inheritance, super keyword, and design patterns.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />
      <main className="w-full px-4 pt-0 pb-12">
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">JavaScript Classes & Inheritance: Complete OOP Guide</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-lg font-semibold mb-2">What You'll Learn:</p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ ES6 class syntax and how it works</li>
            <li>✅ Constructors and initialization</li>
            <li>✅ Instance methods and properties</li>
            <li>✅ Inheritance with extends and super</li>
            <li>✅ Static methods and properties</li>
            <li>✅ Getters and setters</li>
            <li>✅ Private fields with #</li>
            <li>✅ Prototypal inheritance under the hood</li>
            <li>✅ Common OOP patterns in JavaScript</li>
            <li>✅ Interview questions about classes</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">What are JavaScript Classes?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Classes in JavaScript are syntactic sugar over prototypal inheritance. Introduced in ES6 (2015), they provide a cleaner, more intuitive syntax for creating objects and implementing inheritance. While classes look like traditional class-based OOP, JavaScript still uses prototypes under the hood.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Classes make it easier to organize code, create reusable blueprints for objects, and establish inheritance hierarchies. They're essential for building larger applications with proper OOP structure.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Class Syntax & Basics</h2>

        <CodeExample
          title="Basic Class Definition"
          code={`// ES6 Class syntax
class Animal {
  // Constructor - runs when creating new instance
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Instance method
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
  
  // Another method
  getInfo() {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

// Creating instances
const dog = new Animal("Buddy", 3);
dog.speak(); // "Buddy makes a sound"
console.log(dog.getInfo()); // "Buddy is 3 years old"

// Each instance has its own properties
const cat = new Animal("Whiskers", 2);
cat.speak(); // "Whiskers makes a sound"

// Instances are objects with all methods available
console.log(dog instanceof Animal); // true
`}
          explanation="Classes act as blueprints for creating objects. Each instance has its own properties but shares methods."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Understanding the Constructor</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The constructor is a special method that runs automatically when you create a new instance of the class using the `new` keyword. It's perfect for initializing instance properties and performing setup tasks.
        </p>

        <CodeExample
          title="Constructor Deep Dive"
          code={`class User {
  constructor(username, email) {
    // Initialize instance properties
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
    this.isActive = true;
    
    console.log(\`New user \${username} created\`);
  }
  
  login() {
    console.log(\`\${this.username} logged in\`);
  }
}

// Constructor runs automatically
const user1 = new User("john_doe", "john@example.com");
// Output: "New user john_doe created"

// Each instance has independent properties
const user2 = new User("jane_smith", "jane@example.com");
// Output: "New user jane_smith created"

console.log(user1.email); // "john@example.com"
console.log(user2.email); // "jane@example.com"

// Forgetting 'new' is a common error
// const user3 = User("bad", "bad@example.com"); // Error! (in strict mode)
`}
          explanation="Constructors initialize instance properties when new instances are created."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Inheritance with extends & super</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Inheritance allows one class to inherit properties and methods from another class. Use `extends` to create a subclass and `super` to access parent class methods and properties.
        </p>

        <CodeExample
          title="Class Inheritance"
          code={`// Parent class (base class)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

// Child class (subclass) inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  // Override parent method
  speak() {
    console.log(\`\${this.name} barks\`);
  }
  
  // New method specific to Dog
  fetch() {
    console.log(\`\${this.name} brings back the ball\`);
  }
}

const dog = new Dog("Rex", "Golden Retriever");
console.log(dog.name); // "Rex" (from parent)
console.log(dog.breed); // "Golden Retriever" (own property)
dog.speak(); // "Rex barks" (overridden method)
dog.fetch(); // "Rex brings back the ball" (own method)

// Another child class
class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  
  speak() {
    console.log(\`\${this.name} meows\`);
  }
}

const cat = new Cat("Whiskers", "orange");
cat.speak(); // "Whiskers meows"
`}
          explanation="Inheritance creates a hierarchy of classes where child classes reuse and extend parent class functionality."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Static Methods & Properties</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Static methods and properties belong to the class itself, not to instances. They're useful for utility functions or shared data that all instances should access.
        </p>

        <CodeExample
          title="Static Members"
          code={`class Counter {
  static count = 0; // Static property - shared by all instances
  
  constructor(name) {
    this.name = name;
    Counter.count++; // Increment class counter
  }
  
  static getCount() {
    return \`Total instances created: \${Counter.count}\`;
  }
  
  static reset() {
    Counter.count = 0;
    console.log("Counter reset");
  }
}

const c1 = new Counter("First");
console.log(Counter.count); // 1

const c2 = new Counter("Second");
console.log(Counter.count); // 2

const c3 = new Counter("Third");
console.log(Counter.count); // 3

// Call static method
console.log(Counter.getCount()); // "Total instances created: 3"

// Static methods are called on the class
Counter.reset(); // "Counter reset"
console.log(Counter.count); // 0

// Instances cannot call static methods
// c1.getCount(); // Error!

// Real-world example: Date class
console.log(Date.now()); // Current timestamp (static method)
const now = new Date();
`}
          explanation="Static methods and properties are shared by all instances and called on the class, not instances."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Getters & Setters</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Getters and setters allow you to define custom behavior when accessing or modifying properties. They look like properties but execute functions, enabling validation and computed properties.
        </p>

        <CodeExample
          title="Getters and Setters"
          code={`class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName; // Convention: underscore for private-like
    this._lastName = lastName;
    this._age = age;
  }
  
  // Getter - accessed like property
  get fullName() {
    return \`\${this._firstName} \${this._lastName}\`;
  }
  
  // Setter - allows assignment like property
  set fullName(name) {
    const [first, last] = name.split(" ");
    this._firstName = first;
    this._lastName = last;
  }
  
  // Age getter
  get age() {
    return this._age;
  }
  
  // Age setter with validation
  set age(value) {
    if (value < 0 || value > 150) {
      console.log("Invalid age");
      return;
    }
    this._age = value;
  }
}

const person = new Person("John", "Doe", 30);

// Use getter like property (no parentheses)
console.log(person.fullName); // "John Doe"

// Use setter like property assignment
person.fullName = "Jane Smith";
console.log(person._firstName); // "Jane"
console.log(person._lastName); // "Smith"

// Setter with validation
person.age = 35; // Valid, sets age
console.log(person.age); // 35

person.age = 200; // Invalid
console.log(person.age); // Still 35 (unchanged)
`}
          explanation="Getters and setters let you define computed or validated properties that feel like normal property access."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Private Fields with #</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Private fields, introduced in ES2022, are truly private at the language level. They're prefixed with # and cannot be accessed outside the class, unlike the _convention approach.
        </p>

        <CodeExample
          title="Private Fields"
          code={`class BankAccount {
  #balance = 0; // Private field - truly inaccessible outside class
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`Deposited \$\${amount}. New balance: \$\${this.#balance}\`);
    }
  }
  
  withdraw(amount) {
    if (this.#balance >= amount && amount > 0) {
      this.#balance -= amount;
      console.log(\`Withdrew \$\${amount}. New balance: \$\${this.#balance}\`);
    }
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50); // "Deposited $50. New balance: $150"
account.withdraw(30); // "Withdrew $30. New balance: $120"

console.log(account.getBalance()); // 120

// Cannot access private field
// console.log(account.#balance); // SyntaxError!
// account.#balance = 999; // SyntaxError! Cannot modify

// Benefits:
// 1. Truly private (syntax error to access)
// 2. Prevents accidental external modification
// 3. Encapsulation enforced at language level
`}
          explanation="Private fields with # provide true privacy enforced by JavaScript itself, not just convention."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">super Keyword Deep Dive</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The `super` keyword allows you to call parent class methods and access parent class properties. It's essential for effective inheritance.
        </p>

        <CodeExample
          title="Using super Keyword"
          code={`class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  
  getInfo() {
    return \`\${this.brand} (\${this.year})\`;
  }
  
  drive() {
    console.log("Vehicle is driving");
  }
}

class Car extends Vehicle {
  constructor(brand, year, doors) {
    super(brand, year); // Call parent constructor
    this.doors = doors;
  }
  
  // Override method but use parent version
  getInfo() {
    const parentInfo = super.getInfo(); // Call parent method
    return \`\${parentInfo} - \${this.doors} doors\`;
  }
  
  drive() {
    super.drive(); // Call parent method
    console.log("Car is driving smoothly");
  }
}

const car = new Car("Toyota", 2023, 4);
console.log(car.getInfo()); // "Toyota (2023) - 4 doors"

car.drive();
// Output:
// "Vehicle is driving"
// "Car is driving smoothly"

// super must be called in child constructor
// Forgetting super causes ReferenceError when accessing this
`}
          explanation="super lets you call parent class methods and constructors, enabling method chaining in inheritance hierarchies."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Classes Under the Hood - Prototypes</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Classes are syntactic sugar over JavaScript's prototypal inheritance. Understanding how classes compile to prototypes helps you debug and understand JavaScript better.
        </p>

        <CodeExample
          title="Classes vs Prototypes Equivalence"
          code={`// CLASS WAY (modern, recommended)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} speaks\`);
  }
}

// PROTOTYPE WAY (old, equivalent to class above)
function AnimalOld(name) {
  this.name = name;
}

AnimalOld.prototype.speak = function() {
  console.log(\`\${this.name} speaks\`);
};

// Both work identically:
const a1 = new Animal("Dog");
const a2 = new AnimalOld("Dog");

a1.speak(); // "Dog speaks"
a2.speak(); // "Dog speaks"

console.log(a1 instanceof Animal); // true
console.log(a2 instanceof AnimalOld); // true

// Classes are the preferred modern syntax
// They're cleaner and less error-prone
`}
          explanation="Classes are syntactic sugar over prototypal inheritance. Both approaches work, but classes are more intuitive."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Common OOP Patterns in JavaScript</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">1. Singleton Pattern</h3>
        <CodeExample
          title="Singleton Pattern"
          code={`class Database {
  static instance = null;
  
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connected = false;
    Database.instance = this;
  }
  
  connect() {
    this.connected = true;
    console.log("Database connected");
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true (same instance)
db1.connect();
console.log(db2.connected); // true (same object)
`}
          explanation="Singleton pattern ensures only one instance of a class exists throughout the application."
        />

        <h3 className="text-2xl font-bold mt-8 mb-4">2. Factory Pattern</h3>
        <CodeExample
          title="Factory Pattern"
          code={`class User {}
class Admin {}

class UserFactory {
  static createUser(role) {
    if (role === "admin") {
      return new Admin();
    } else {
      return new User();
    }
  }
}

const user = UserFactory.createUser("user");
const admin = UserFactory.createUser("admin");

console.log(user instanceof User); // true
console.log(admin instanceof Admin); // true
`}
          explanation="Factory pattern creates objects without specifying exact classes, centralizing object creation logic."
        />

        <h2 className="text-3xl font-bold mt-12 mb-4">Interview Q&A</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: What's the difference between classes and constructor functions?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Classes are syntactic sugar over constructor functions. Both use prototypal inheritance under the hood. Classes are the modern, cleaner approach and are hoisted differently than constructor functions.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: When should you use inheritance?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Use inheritance when you have "is-a" relationships (Dog is an Animal). For "has-a" relationships, use composition instead. Prefer composition over inheritance to avoid deep hierarchies.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-lg mb-3">Q: What happens if you forget the `new` keyword?</p>
            <p className="text-gray-700 dark:text-gray-300">
              A: Classes require `new` and will throw an error if used without it. Constructor functions called without `new` will have `this` bound to the global object, potentially creating global variables. Always use `new`.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Summary</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>🎯 Classes provide clean OOP syntax over prototypal inheritance</li>
            <li>🎯 Constructors initialize instances with properties</li>
            <li>🎯 Methods are functions that belong to class instances</li>
            <li>🎯 Use `extends` and `super` for inheritance</li>
            <li>🎯 Static members belong to the class, not instances</li>
            <li>🎯 Getters and setters provide computed/validated properties</li>
            <li>🎯 Private fields with # ensure true privacy</li>
            <li>🎯 Understand prototypes to debug class issues</li>
            <li>🎯 Prefer composition over complex inheritance hierarchies</li>
          </ul>
        </div>
      </article>
    </main>
    </>
  );
}
