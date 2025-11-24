//class 
class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
}

const c = new Car("Toyota", "Innova");
console.log(c);

//objects

const student = {
  name: "Shatakshi",
  age: 20,
  greet() {
    console.log("Hello!");
  }
};

student.greet();


//object using class 

class Student {
  constructor(name) {
    this.name = name;
  }
}

const s1 = new Student("Shatakshi");
console.log(s1.name);

//inheritance 
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();


//encapsulation 

class BankAccount {
  #balance = 0;  // private variable

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());

//Abstraction

class CoffeeMachine {
  start() {
    console.log("Starting machine...");
  }

  brewCoffee() {
    console.log("Brewing coffee...");
  }

  makeCoffee() {    // abstraction
    this.start();
    this.brewCoffee();
    console.log("Coffee ready!");
  }
}

const cm = new CoffeeMachine();
cm.makeCoffee();

//Polymorphism --Same method name, different behaviors.

class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {    // polymorphism
    return this.side * this.side;
  }
}

const sq = new Square(4);
console.log(sq.area());

//static methods

class MathTool {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathTool.add(5, 7));

//Constructor- Special method to initialize object properties. 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("Shatakshi", 21);
console.log(p);
