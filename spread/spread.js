// The spread syntax in JavaScript, denoted by three dots (...), allows an iterable (like an array or a string) or the properties of an object to be expanded into individual elements or key-value pairs. It is a powerful feature introduced in ES6 for concise and readable code. 

//Expanding Iterables into Function Arguments.
    function sum(a, b, c) {
      return a + b + c;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers)); // Output: 6

   //combining arrays.
        const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combinedArr = [...arr1, ...arr2]; // Output: [1, 2, 3, 4]
    const newArr = [0, ...arr1, 5]; // Output: [0, 1, 2, 5]

    // Creating Copies of Arrays and Objects.
        const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray]; // Output: [1, 2, 3]

    const originalObject = { a: 1, b: 2 };
    const copiedObject = { ...originalObject }; // Output: { a: 1, b: 2 }

    //Adding Properties to Objects.
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 }; // Output: { a: 1, b: 2, c: 3 }

    //Converting Strings to Arrays of Characters.
    const str = "hello";
    const charArray = [...str]; // Output: ['h', 'e', 'l', 'l', 'o']
    