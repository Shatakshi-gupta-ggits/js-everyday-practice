class Car {
  #fuel = 100;

  start() {
    console.log(this.#fuel > 0 ? "Started! 🚗" : "No fuel! ⛽");
  }

  drive() {
    this.#fuel -= 10;
    console.log(this.#fuel > 0 ? `Driving... ${this.#fuel}%` : "Out of fuel!");
  }

  refuel() {
    this.#fuel = 100;
    console.log("Tank full! ⛽");
  }
}

// Usage
const car = new Car();
car.start();  // "Started! 🚗"
car.drive();  // "Driving... 90%"
car.drive();  // "Driving... 80%" 