// A callback function is a function that is passed as an argument to another function and executed later.

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished.

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);