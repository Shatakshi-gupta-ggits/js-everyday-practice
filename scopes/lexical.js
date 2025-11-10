// Lexical Scope

// A variable is determined by its place or position in the code. When a variable is declared within a
// function, it can be accessed only within that block or nested block. That variable is said to have lexical scope, which is also known
// as compile-time scope or static scope.

// When to Use Lexical Scope:
//1.t is inherent in JS and is automatically applied according to the placement of a code within the source file.
// For example, variables declared in the outer scope are accessible to nested functions. This allows maintaining access to
// variables even after the outer function returns.
// It allows powerful programming patterns, such as closures, which encapsulate state and create reusable code.


function outerFunction() {
 let outerVar = "I am from the outer function";
 function innerFunction() {
 console.log(outerVar);
 }
 innerFunction();
}
outerFunction()