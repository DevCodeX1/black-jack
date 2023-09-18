let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame(){
if(sum <= 20){
    message = ("Do you want to draw another card? 🃏")
    
}else if(sum === 21){
    message =("Wohoo! You've got Black Jack 🎆")
    hasBlackJack = true
}else{
    message =("Bust You Lose! ☠️")
    isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)
console.log(message)
}