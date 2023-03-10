//We create the variables, also i set up a prompt to get the player choice

let player = parseInt(prompt("Choose 1 for Rock, 2 for Paper and 3 for Scissors"))
let pc 
let result

let playerLoses = 0
let pcLoses = 0

//I create a function where the PC with calculations and random numbers gets a number and the switch translates it into rock paper or scissors

function pcSelection(){
   let number = Math.floor(Math.random() * (3) + 1 )
    switch(number){
        case 1:
            return number = "Rock";   
        case 2:
            return number = "Paper"
        case 3:
            return number = "Scissors"
    }
} 

//Here I translates the choice of the player into rock, paper or scissors

function playerSelection(){
    
    switch(player){

        case 1:
            return player = "Rock";
        case 2:
            return player = "Paper"
        case 3:
            return player = "Scissors"
        }
        
}

//Here, i make the functions asign the choice into a variable

pc = pcSelection()
player = playerSelection()




//Here i compare both choices, i add the variables and create the switch's cases knowing the output of the sum of variables

function comparison(){
    switch(pc+player){

        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            result = "The PC has Won!!!!, "+pc+" beats "+player+"!!!";
            return 

        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            
            result = "You have Won!!!!, "+player+" beats "+pc+"!!!";
            return 
            
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockRock":
            result = "Oh, "+player+" and "+pc+" makes a Draw!!!!";
            return 

    }
}


//Finally, i add the result of the switch's cases to the result variable

result = comparison()
pcLoses = comparison()
playerLoses = comparison()

//Prints of the round
console.log("The player chooses " + player)
console.log("The pc chooses " + pc)
console.log(result)
//console.log("Pc has lost: " + pcLoses + "times, and the Player has lost: " + playerLoses + "times!" )