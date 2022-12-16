//Part1: create a working deck on cards in an array

const suit = ['Hearts', 'Spades', ' Clubs', 'Diamonds'];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card {
    constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
    }
}

class Deck {
    constructor() {
        this.deck = []
        this.sideDeck = []
    }
    makeDeck(){
        for(let i = 0; i < suit.length; i++) {
            for(let j = 0; j < rank.length; j++) {
              const newCard = new Card(suit[i], rank[j], score [j])
              this.deck.push(newCard)
            }
        }
        return this.deck
    }
// //Part2: Shuffle the deck
// //shuffles the deck by picking a card and randomly placing it at a random index
shuffle() {
  for (let i = 0; i < this.deck.length; i++) {
    let temp = this.deck[i]
    let random = Math.floor((Math.random() * this.deck.length));
    this.deck[i] = this.deck[random]; 
    this.deck[random] = temp
  }
  return this.deck
} 
//Part3: Deal the deck
  deal() {
    let playerOne = new Deck
    let playerTwo = new Deck
      for(let i = 0; i < this.deck.length; i++) {
        if (i % 2 == 0) {
          playerOne.deck.push(this.deck[i])
        }else{
          playerTwo.deck.push(this.deck[i])
       } 
    }
    return {playerOne, playerTwo}
  }

}
let deck = new Deck;
deck.makeDeck()
deck.shuffle()
deck.deal()
let playerDecks = deck.deal()
console.log(playerDecks.playerOne)
console.log(playerDecks.playerTwo)
