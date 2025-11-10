// A variable declared inside a function and available only in the current code block has a local scope. We can access these variables
// only within the function in which they are defined. If we try to access them from another function, it will throw an error. As we can’t
// access these variables from outside the function, we can have a variable of the same name in another function.
// When to Use Local Scope
// For variables that can be accessed only within the function, they are declared in.
// Usually declared within functions, conditional statements, loops, or other code blocks.


function localvar(){
    let localVar= "I m shatakshi ";
    document.write(localVar);
}
localvar();
document.write(localVar); //not defined