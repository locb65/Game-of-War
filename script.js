//Part: create a working deck on cards in an array

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