// Here are **short and simple JavaScript codes** for **all types of inheritance**.
// (JavaScript supports only *single inheritance* directly, but we can simulate others.)

// ---

// # ✅ **1. Single Inheritance**

// One parent → one child

// ```js
class A {
  show() { console.log("A"); }
}
class B extends A {}

new B().show();

// # ✅ **2. Multilevel Inheritance**

// A → B → C

class A {
  showA() { console.log("A"); }
}
class B extends A {
  showB() { console.log("B"); }
}
class C extends B {
  showC() { console.log("C"); }
}

new C().showA();

// ---

// # ✅ **3. Hierarchical Inheritance**

// One parent → many children


class Animal {
  speak() { console.log("Animal sound"); }
}
class Dog extends Animal {}
class Cat extends Animal {}

new Dog().speak();
new Cat().speak();

// # ⚠️ JavaScript does **NOT** support Multiple Inheritance directly.

// But we can simulate it using **mixins**.


// # ✅ **4. Multiple Inheritance (Using Mixins)**

// Two parents → one child (simulated)

const CanRun = {
  run() { console.log("Running"); }
};

const CanJump = {
  jump() { console.log("Jumping"); }
};

class Animal {}

Object.assign(Animal.prototype, CanRun, CanJump);

const a = new Animal();
a.run();
a.jump();

// # 📌 Optional but useful: Hybrid & Multipath Inheritance

// (These are just combinations of the above and simulated using classes + mixins.)

// ---

// # ✅ **5. Hybrid Inheritance (Simulated)**

// Mix of hierarchical + multilevel.

class A { sayA() { console.log("A"); } }
class B extends A {}
class C extends A {}

class D extends B {
  sayD() { console.log("D"); }
}

new D().sayA();

