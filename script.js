//declaro las variables

let player
let computer 

//les doy valor

//en esta funcion definire la eleccion del pc, esa formula es un standar, por lo que no hay problema
//al usarla,

function computerChoose(min, max){      
    let number = Math.floor(Math.random() * (max - min + 1) + min )
    return number
}

player = parseInt(prompt("choose one, 1 for Rock, 2 for Paper and 3 for Scissors"))

computer = computerChoose(1, 3)

function comparison( player, computer ){
    if( player == computer){
        result = "Is a tie!"
    }
}

if( player == 1){
    player = "Rock"
} else if( player == 2 ){
    player = "Paper"
} else if( player == 3 ){
    player = "Scissors"
}

if( computer == 1){
    computer = "Rock"
} else if( computer == 2 ){
    computer = "Paper"
} else if( computer == 3 ){
    computer = "Scissors"
}