// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const add = (a, b) => {
    return a + b;
};

// Even shorter (implicit return)
const add = (a, b) => a + b;





// No parameters
const greet = () => "Hello World!";

// Single parameter (parentheses optional)
const square = x => x * x;

// Multiple parameters
const multiply = (a, b) => a * b;

// Multiple lines
const process = (x, y) => {
    const sum = x + y;
    return sum * 2;
};