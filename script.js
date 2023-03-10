
let playerScore
let computerScore


function  getComputerChoice() {
    let random = Math.floor(Math.random() * 3)+ 1
    if(random == 1){
        computerSelection = "rock"
    } else if( random == 2){
        computerSelection = "paper"
    } else if( random == 3){
        computerSelection = "scissors"
    }
    return computerSelection
}


function singleRound(playerSelection, computerSelection){
    
    if( playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return "Player Won!!! Rock beats Scissors, Good Job!"

    } else if( playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
        return "Player Won!!! Paper beats Rock, Good Job!"

    } else if( playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        return "Player Won!!! Scissors beats Paper, Good Job!"

    } else if( playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        return "The Computer Won!!! Paper beats Rock, Bad Luck!"

    } else if( playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return "The Computer Won!!! Scissors beats Paper, Bad Luck!"

    } else if( playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++
        return "The Computer Won!!! Rock beats Scissors, Bad Luck!"

    } else  return "oh!! It is a DRAW"

}


function game(){
    for( let i = 0; i<5; i++ ){

        const playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playerSelection)
        console.log(computerSelection)
        singleRound(playerSelection, computerSelection)
    }
    if( playerScore > computerScore ){
        return "The Player has Won the Game!!! Good Job :) "
    }else if( playerScore == computerScore){
        return "It is a Tie!!!"
    }   else{ return "The computer has Won the Game! You have to Improve your Choosing game!"}
}

console.log(game())