let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
   // alert("form submitted");

//    let inp = document.querySelector("input");
//    console.log(inp);
//    console.dir(inp);
//    console.log(imp.innerTest);
// let user1 = this.elements[0];
// let user = document.querySelector("user");
// let pass = document.querySelector("pss");

// console.log(user.value);
// console.log(pass.value);
// console.log(user1);

// alert(`Hi ${user.value}, your password is set to : ${pass.value}`);
// });

let user = document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("input changed");
    console.log("final value = ", this.value);

} );

// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value = ", this.value);

// } );

