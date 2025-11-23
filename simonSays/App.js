//key press- start game 
//button flash- level 1

//game seq[]
//user Seq []

//btn press - check user <--> game
/// if same level up
// else GameOvER

let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'green', 'blue'];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", ()=>{
   if(started === false){
    console.log("Game started");
    started = true;
   } 
    
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   }, 1000);

}

function userFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   }, 1000);

}

function levelUp(){
   level++;
    h2.innerText = `Level ${level}`;
   
    let randomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    //random btn choose
    console.log(randIdx);
    console.log(randColor);
   console.log(randBtn);
   console.log(gameSeq);
   gameFlash(randBtn);
    btnFlash(randbtn);
}

function btnPress(){
   console.log(this);
let btn = this;
   userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click", btnPress);

}