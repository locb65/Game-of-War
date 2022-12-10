//Part2: create a working deck on cards in an array

const deck = deckOfCards();

  function deckOfCards() {
    const suits = ["spades", "diamonds", "clubs", "hearts"];
      const values = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const deck = new Array();
          for (let i=0; i<suits.length; i++) {
            for (let j=0; j<values.length; j++) {
              const card = {value: values[j], suit: suits[i]};
                deck.push(card);
          }
       }
    return deck;
 }
console.log(deck)

//Part2: Shuffle the deck
//shuffles the deck by picking 2 cards and shuffling those two cards
//this is repeated over 2000 repetitions

function shuffle(deck) {
  for (let i = 0; i < deck.length; i++) {
    let temp = deck[i]
    let random = Math.floor((Math.random() * deck.length));
    deck[i] = deck[random]; 
    deck[random] = temp
  }
} 

shuffle(deck)