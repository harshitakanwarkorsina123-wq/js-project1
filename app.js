let userseq=[];
let gameseq=[];
let btns=["aqua","brown","orange","red"];


let started=false;
let level=0;


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started == false){
    console.log("game is statred");
    started = true;


    levelUp();
}
});
             
 function gameflash(btn){ 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

 }
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
      let randIdx=Math.floor(Math.random()*4);
      let randColor=btns[randIdx];
      let randbtn=document.querySelector(`.${randColor}`);
    //   console.log(randIdx);
    //   console.log(randColor);
    //   console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
      gameflash(randbtn);
     
   }


   function checkAnswer(idx){
    // console.log("curr level:",level);

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            if(level == 4){
          h2.innerHTML=`<i>Congurtulations,your  level ${level} is Complete</i> <br>press any key to start`;
            document.querySelector("body").style.backgroundColor="green";

         setTimeout(function () {
             document.querySelector("body").style.backgroundColor="white";
            //  reset();
     }, 200);
     reset();
     return;
    }
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your Score was <b> ${level} </b> <br>press any key to start`;
   
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
           document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}
   

function preesBtn() {
    // console.log(this);
    let btn=this;
    userFlash(btn);

userColor=btn.getAttribute("id");
userseq.push(userColor);
// console.log(userColor);

checkAnswer(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",preesBtn);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}
