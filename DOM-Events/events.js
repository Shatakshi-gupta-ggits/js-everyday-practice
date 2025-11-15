//  let btn = document.querySelector("button");
//        console.dir(btn);

    //    btn.onClick = function(){
    //     alert("button was clicked");
    //    }

let btns = document.querySelectorAll("button");

for(let btn of btns){
    // btn.addEventListener("click", sayHello);
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log('you entered a mouse');
    }

   // console.dir(button);
}

function sayHello() {
    alert("Hello");
}