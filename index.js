const gridContainer = document.querySelector('.grid-container');
let cards = [];
let firstCard ,  secondCard ;
let lockBoard = false;
let score = 0 ;

console.log(firstCard);

// /* updating the score */
// document.querySelector('.score').textContent = score;

// /* fetch data using fetch API */
// fetch('./data/cards.json')
//     .then((res) => res.json())
//     .then((data) => {
//         cards = [...data , ...data];
//         shuffleCards(cards);
//         createCards(cards);
//     });

// /* shuffle the cards */

// function shuffleCards(cards) {
//     let currentIndex = cards.length , 
//         temporaryValue , 
//         randomIndex;
//     while(currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = cards[currentIndex];
//         cards[currentIndex()]  = cards[randomIndex]; 
//         cards[randomIndex] = temporaryValue;
//     }
// }

// /* create the cards */

// function createCards(cards) {
//     for ( let card of cards ) {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         cardElement.setAttribute('data-name', card.name);
//         cardElement.innerHTML = `
//             <div class = "front">
//                 <img class = "front-image" src = ${card.image} />
//             </div>
//             <div class = "back"></div>
//             `;
//             gridContainer.appendChild(cardElement);
//             cardElement.addEventListener('click' , flipCard);
//     };

// funtion flipCard() {
//     if(lockBoard) return;
//     if(this == firstCard) return;
//     this.classList.add('flipped');
//     if(!firstCard) {
//         firstCard = this;
//         return;
//     }
//     secondCard = this;
//     checkForMatch(firstCard, secondCard);
// }
        
// }