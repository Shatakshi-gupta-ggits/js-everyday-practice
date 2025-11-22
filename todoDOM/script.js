let btn = document.querySelector("button");
let ul= document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);


let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("delete")

item.appendChild(delBtn);
    console.log(inp.value);
    inp.value="";
});

ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    // console.log("button clicked");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("delete");
    } else {
        console.log("don't delete");
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         console.log("element deleted");

//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }