class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Student { name: ${this.name}, age: ${this.age} }`;
  }
}

const s = new Student("Shatakshi", 20);


console.log('Name:', s.name);
console.log('Age:', s.age);

console.log(s.getInfo());
// console.log('Object:', JSON.stringify(s));