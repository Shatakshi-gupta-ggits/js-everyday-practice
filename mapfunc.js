const newArray = array.map((currentValue, index, array) => {
    // return transformed value
});

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6, 8, 10]

// Square each number
const squared = numbers.map(num => num * num);
// Result: [1, 4, 9, 16, 25]

// Convert numbers to strings
const strings = numbers.map(num => `Number: ${num}`);
// Result: ["Number: 1", "Number: 2", ...]

