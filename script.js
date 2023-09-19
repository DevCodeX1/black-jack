
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum");
let cardsEl = document.getElementById("cards-el");
let credits = document.getElementById("credits-el");

let player = {
    name: "David",
    chips: 158
}

credits.textContent = `${player.name} $${player.chips}`


function getRandomCard(){
   let rCard = Math.floor(Math.random() * 13) + 1;
   if (rCard > 10){
    return 10;
   }else if (rCard === 1){
    return 11;
   }else{
    return rCard;
   }
   
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = `Sum: ${sum}`
    
    for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += ` ${cards[i]}`
    }
    
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
    
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){    
    let card = getRandomCard();
    sum += card
    cards.push(card)
    renderGame()
    }
}

