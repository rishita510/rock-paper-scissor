
let userscore=0;
let computerscore=0;
let choices=document.querySelectorAll(".rock,.paper,.scissor");
let decision=document.querySelector(".decision");
let score=document.querySelector("#player-score");
let compscore=document.querySelector("#computer-score");
let restart=document.querySelector(".restart")
const generatecompchoice=()=>{
    const option=["rock","paper","scissor"];
    const randomid=Math.floor((Math.random())*3);
    return option[randomid];
}
restart.addEventListener("click",()=>{
  userscore=0;
  score.innerHTML=userscore;
  computerscore=0;
  compscore.innerHTML=computerscore;
  decision.classList.add("hide");

})

const showwinner=(userwin,userchoice,computerchoice)=>{
  if(userwin==true){
    userscore++;
    score.innerHTML=userscore;
    decision.innerHTML=`you win! ${userchoice} beats ${computerchoice}`;
    decision.classList.remove("hide");
    decision.style.color="green";
    console.log("you win");
  }else{
    computerscore++;
    compscore.innerHTML=computerscore;
    decision.innerHTML=`you lose, ${computerchoice} beats ${userchoice}`;
    decision.classList.remove("hide");
    decision.style.color="red";
    console.log("you lose");
  }
}
const drawgame=()=>{
    console.log("draw game");
    decision.innerHTML="It's a draw";
}
const playgame=(userchoice)=>{
      console.log("userchoice is",userchoice);
      const computerchoice=generatecompchoice();
      console.log("computerchoice",computerchoice);
      if(computerchoice==userchoice){
        drawgame();
      }else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=computerchoice==="paper"?false:true;
        }else if(userchoice=="paper"){
            userwin=computerchoice==="scissor"?false:true;
        }else{
            userwin=computerchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,computerchoice);
      }
}
choices.forEach((choice) =>{
     choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("class");
      console.log("choice  was clicked",userchoice);
       playgame(userchoice);
    })
})