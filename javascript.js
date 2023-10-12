function getComputerChoice(){
    let index=Math.ceil(Math.random()*3);
    switch(index){
        case 1 :return "ROCK";
        case 2: return "PAPER";
        case 3: return "SCISSORS";
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toUpperCase();

    switch(playerSelection){
        case "ROCK":{
            if(computerSelection=="PAPER")
                return "You Lose! Paper beats Rock";
            else if(computerSelection=="SCISSORS")
                return "You WIN! Rock beats Scissors";
            else return "Draw!"
        }

        case "PAPER":{
            if(computerSelection=="ROCK")
                return "You Win! Paper beats Rock";
            else if(computerSelection=="SCISSORS")
                return "You Lose! Scissors beats Paper";
            else return "Draw!"
        }

        case "SCISSORS":{
            if(computerSelection=="PAPER")
                return "You Win! Scissors beats Paper";
            else if(computerSelection=="ROCK")
                return "You Lose! Rock beats Scissors";
            else return "Draw!"
        } 
    }

}

for(let count=0;count<5;count++){
let compterChoice=getComputerChoice();
let userChoice=prompt("Rock,Paper or Scissors?");
let result=playRound(userChoice,compterChoice);
console.log(result);
}