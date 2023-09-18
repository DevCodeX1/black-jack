let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum")
let cardsEl = document.getElementById("cards-el")



function startGame(){
    if(sum <= 20){
        message = ("Do you want to draw a new card? 🃏")
        
    }else if(sum === 21){
        message =("You've got Black Jack 🎆")
        hasBlackJack = true
    }else{
        message =("Bust You Lose! ☠️")
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${firstCard}_${secondCard}`
}

function newCard(){
    console.log("new card")
    let card = 7;
    sum += card
    startGame()

}