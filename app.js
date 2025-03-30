let gameSeq=[];
let userSeq=[];
let btns=["yellow","purple","red","green"];
let started=false;
let level=0;
let highestScore=0; // Initialize high score variable


let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started==false){
        started=true;
        console.log("game started");

        levelUp();

    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 100);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let randIndex = Math.floor(Math.random() * 4); // Fix the index range
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAnswer(idx){
   
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
                setTimeout(levelUp, 1000);
            }
        }
    else{
            if(level>highestScore){ h2.innerHTML=`Game Over! your highest score is <b>${level}</b> <br> Press Any Key to Restart`;}
            else{ h2.innerHTML=`Game Over! your highest score is <b>${highestScore}</b> <br> Press Any Key to Restart`;}
            console.log("wrong");
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="yellowgreen";
            }, 150);
            

            reset();
}}


function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAnswer(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}