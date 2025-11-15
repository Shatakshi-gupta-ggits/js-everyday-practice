// select all buttons (there are multiple in the page)
let btns = document.querySelectorAll("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "pink";
}

// Attach the handler reference (no parentheses) to each button
btns.forEach(btn => btn.addEventListener("click", changeColor));

// Attach to other single elements
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
