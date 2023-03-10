
let player = parseInt(prompt("Choose 1 for Rock, 2 for Paper and 3 for Scissors"))
let pc 
let result


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

pc = pcSelection()
player = playerSelection()

function comparison(){
    switch(pc+player){
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            return result = "The PC has Won!!!!"
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            return result = "You have Won!!!!"
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockRock":
            return result = "It is a Draw!!!!"

    }
}
result = comparison()


console.log(player)
console.log(pc)
console.log(result)