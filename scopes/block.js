// Variables declared inside a specific block (represented by {}) are not accessible from outside the block. It doesn’t work with the var
// keyword, so you can use only let or const keywords with it.

// When to USe Block Scope
// For variables with scope limited to a specific block of the code, such as for loops, while loops, and if statements.
// For example, temporary variables used for conditionally executing code blocks.
// Loop iterators relevant only within a loop.
// Variables with block scope are accessible only within the block they are declared in, which provides more control over variable
// lifetime and visibility.



let globalVar = "I am a global variable.";

if (true) {
  let blockVar = "I am a block-scoped variable.";
  const blockConst = "I am a block-scoped constant.";
  var functionVar = "I am a function-scoped variable (or global if outside a function).";

  console.log(globalVar);   // Output: I am a global variable.
  console.log(blockVar);    // Output: I am a block-scoped variable.
  console.log(blockConst);  // Output: I am a block-scoped constant.
  console.log(functionVar); // Output: I am a function-scoped variable (or global if outside a function).
}

console.log(globalVar);   // Output: I am a global variable.
console.log(functionVar); // Output: I am a function-scoped variable (or global if outside a function).

// The following lines will cause ReferenceErrors because blockVar and blockConst are not accessible outside their block.
// console.log(blockVar);
// console.log(blockConst);