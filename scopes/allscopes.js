// Global Scope
let globalVar = "I'm global";

function outerFunction() {
    // Local Scope (Function Scope)
    let outerVar = "I'm in outer function";
    
    function innerFunction() {
        // Local Scope (Function Scope) - nested
        let innerVar = "I'm in inner function";
        
        // Block Scope (inside if statement)
        if (true) {
            let blockVar = "I'm in block scope";
            const blockConst = "I'm also in block scope";
            
            console.log(globalVar);     // Accessible - global scope
            console.log(outerVar);      // Accessible - outer function scope  
            console.log(innerVar);      // Accessible - current function scope
            console.log(blockVar);      // Accessible - current block scope
            console.log(blockConst);    // Accessible - current block scope
        }
        
        // console.log(blockVar);   // ERROR - blockVar not accessible here
        // console.log(blockConst); // ERROR - blockConst not accessible here
    }
    
    innerFunction();
    
    // console.log(innerVar); // ERROR - innerVar not accessible here
    // console.log(blockVar); // ERROR - blockVar not accessible here
}

outerFunction();

// console.log(outerVar); // ERROR - outerVar not accessible here  
// console.log(innerVar); // ERROR - innerVar not accessible here