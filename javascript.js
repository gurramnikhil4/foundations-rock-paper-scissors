function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

let choiceArray=["Rock","Paper","Scissors"];
let playerArray=["Nobody","Computer","User"];

function playRound(playerSelection,computerSelection){
let outputMatrix=[[0,2,1],[1,0,2],[2,1,0]];

return outputMatrix[playerSelection][computerSelection];
}

let playerScore=0, computerScore=0;

let currentScore=document.createElement('div');
document.body.appendChild(currentScore);


let inputButtonArray=document.querySelectorAll('button');
function buttonResult(e){
    userChoice=e.target.textContent;
    if(userChoice=="Rock")userChoice=0;
    if(userChoice=="Paper")userChoice=1;
    if(userChoice=="Scissors")userChoice=2;

    const computerChoice=getComputerChoice();
    const result=playRound(userChoice,computerChoice);

    if(result==1)computerScore++;
    else if(result==2)playerScore++;
    currentScore.textContent=`Computer:${computerScore} Player:${playerScore}`

    if(computerScore==5||playerScore==5){
    let winner=computerScore==5?1:2;
    alert(`${playerArray[winner]} Won!`);
    computerScore=0;
    playerScore=0;
    }
}

inputButtonArray.forEach(function(inputButton){
    inputButton.addEventListener("click",buttonResult);
});