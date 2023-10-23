function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

let choiceArray=["Rock","Paper","Scissors"];
let playerArray=["Nobody","Computer","User"];

function playRound(playerSelection,computerSelection){
    return 2;
}

let inputButtonArray=document.querySelectorAll('button');

function buttonResult(e){
    userChoice=e.target.textContent;
    if(userChoice=="Rock")userChoice=0;
    if(userChoice=="Paper")userChoice=1;
    if(userChoice=="Scissors")userChoice=2;

    const computerChoice=getComputerChoice();
    const result=playRound(userChoice,computerChoice);

    let outputResult=document.createElement('div');
    outputResult.textContent=`${playerArray[result]} won!`;
    document.body.appendChild(outputResult);
}

inputButtonArray.forEach(function(inputButton){
    inputButton.addEventListener("click",buttonResult);
});