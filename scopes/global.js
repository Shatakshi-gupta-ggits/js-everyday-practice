// 1. Global Scope
// Variables declared outside the function or block have a global scope. We can access global variables from anywhere in the
// program. This is the default scope for variables in JavaScript and can be defined using the let, const, or var keyword.

// When to Use Global Scope :

// We use global scope for variables that must be accessible from anywhere outside the codebase.
// For example, utility libraries or functions with standard functionality across different modules or components.
// Configuration variables used throughout the application.
// Make sure to use it carefully to avoid potential conflicts with other parts of the cod


let globalVar = "good mornoo..";
function showGlobalVar(){
    document.write(gloablVar);
}
  showGlobalVar();
  document.write(globalVar);

