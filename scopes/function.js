// Function Scope
// Function scope is similar to local scope. Here, variables defined within a function are available inside that function and can’t be
// accessed from outside that function. With the creation of a new function, JS has a new scope. Also, variables defined in a function
// are not available in the global scope. Inside a function, variables defined using var, let, and const work similarly. Functions use curly
// braces to store the body.
// When to Use Function Scope
// For variables needed only within a specific function.
// For example, helper functions that are relevant only to a specific execution content of a function.
// Temporary variables used for calculations within a function.
// Variables with function scope are not accessible outside the function they are declared in, so it promotes encapsulation and
// avoids any unnecessary side effects.

function functionScopeExample() {
 var funcVar = "I am scoped to this function";
 console.log(funcVar);
}
functionScopeExample();
console.log(funcVar);