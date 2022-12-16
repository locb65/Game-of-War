//Part1: create a working deck on cards in an array
const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
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
    makeDeck() {
        for(let i = 0; i < suit.length; i++) {
            for(let j = 0; j < rank.length; j++) {
              const newCard = new Card(suit[i], rank[j], score [j])
              this.deck.push(newCard)
      }
    }
  }

//Edited the draw() to reshuffle side deck into main deck.

     draw(){
      if(this.deck.length == 0 && this.sideDeck.length > 0) {
        this.deck = this.sideDeck 
        this.sideDeck = []
        this.shuffle()
    }
    return this.deck.shift()
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

  // Part4: Game Logic

  flipCard(playerDecks, warPile) {
    if(playerDecks.playerOne.determineWinner() && playerDecks.deck.determineWinner()) {
        console.log("This war never ends! It's a Tie")
          return
    }
        console.log('Player One deck total is ' + (playerDecks.playerOne.deck.length + playerDecks.playerOne.sideDeck.length))
        console.log('Player Two deck total is ' + (playerDecks.playerTwo.deck.length + playerDecks.playerTwo.sideDeck.length))

// Made players played card to compare winner of hand.

    let playerOneCard = playerDecks.playerOne.draw()
    let playerTwoCard = playerDecks.playerTwo.draw()
      console.log(this.cardToStr(playerOneCard) + ' Versus ' + this.cardToStr(playerTwoCard))

// check for if playerOneCard is bigger that playerTwo Card

    if(playerOneCard.score > playerTwoCard.score) {
      if (warPile != null) {
        playerDecks.playerOne.sideDeck.push(...warPile.deck)
      }
      playerDecks.playerOne.sideDeck.push(playerOneCard, playerTwoCard)

// console.log(playerOneCard, playerTwoCard)

        console.log("🎊🎊🎊🎊 Player One wins this hand! 🎊🎊🎊🎊" )
        console.log('===============================================================')
        if(playerDecks.playerTwo.determineWinner()) {
          console.log('😄😄😄😄 Player One Wins the WARRRRRRR!!!!!!! 😄😄😄😄')
            return
      }
    } 
//  Checks whether Player Two card is larger than player One and resolves

    else if (playerOneCard.score < playerTwoCard.score) {
      if (warPile != null){
        playerDecks.playerTwo.sideDeck.push(...warPile.deck)
      }
      playerDecks.playerTwo.sideDeck.push(playerOneCard, playerTwoCard)
        // console.log(playerOneCard, playerTwoCard)
        console.log("🥳🥳🥳🥳 Player Two wins this hand! 🥳🥳🥳🥳")
        console.log('===============================================================')
        if(playerDecks.playerOne.determineWinner()) {
          console.log('🎉🎉🎉🎉Player Two Wins the WARRRRRRR!!!!!!! 🎉🎉🎉🎉')
          return
      }
    } 
//check for tie scenario and possible retie to do war.

    else if (playerOneCard.score = playerTwoCard.score) {
// 
      if (warPile == null) {
        warPile = new Deck
  }
      console.log(" 💣💣💣💣 I Declare War 💣💣💣💣")
      for (let i = 0; i < 3; i++) {

//Checks for whether there is enough cards in main deck to complete war
// if not then will shuffle side deck back into main deck. 
// if no cards ramin then it will compare the last available card to resolve tie. 

        if (!playerDecks.playerOne.isFinalCard()) {
          let temp = playerDecks.playerOne.draw()
          warPile.deck.push(temp)
      }
        if (!playerDecks.playerTwo.isFinalCard()) {
          let temp2 = playerDecks.playerTwo.draw()
          warPile.deck.push(temp2)

// created a console.log to to mimic facedown cards being played during war.
      }
    }

  console.log(warPile.deck)

      if (playerDecks.playerOne.determineWinner()) {
        playerDecks.playerOne.deck.push(playerOneCard)
        warPile.deck.push(playerTwoCard)
    } else if (playerDecks.playerTwo.determineWinner()) {
        playerDecks.playerTwo.deck.push(playerTwoCard)
        warPile.deck.push(playerOneCard)
      } else {
        warPile.deck.push(playerOneCard, playerTwoCard)
      }
      this.flipCard(playerDecks, warPile)
  }
    return playerDecks
  }

  //added method to determine final card in deck.

  isFinalCard() {
    return this.deck.length <= 1 && this.sideDeck.length == 0  
  }

  //added method to determine winning condition/losing condition

  determineWinner() {
    return this.deck.length ==0 && this.sideDeck.length ==0
  }

  //added method to display cards played with rank and suit

  cardToStr(card) {
    return card.rank + " of " + card.suit
  }
}

//Created a test Deck to test bugs
// let testDeck = new Deck
// let testDeck2 = new Deck
// testDeck2.makeDeck()
// testDeck.makeDeck()
// let testPLayerONe = new Deck
// testPLayerONe.deck = testDeck.deck
// let testPLayerONeone = new Deck
// testPLayerONeone.deck = testDeck2.deck
// testPLayerONeone.deck.pop()
// let players = {
//   playerOne: testPLayerONe,
//   playerTwo: testPLayerONeone,
// }
// testDeck.flipCard(players)
// // testPLayerONe.deck.push(testDeck.deck[0])
// // testPLayerONeone.deck.push(testDeck.deck[0])
// // testPLayerONeone.deck.concat(testDeck.deck.splice(0, 4))
// // testPLayerONe.deck.concat(testDeck.deck.splice(0, 2))
// // testDeck.flipCard(players)
//Check for game is running.
let deck = new Deck;
deck.makeDeck()
deck.shuffle()
deck.deal()
let playerDecks = deck.deal()
console.log(playerDecks.playerOne)
console.log(playerDecks.playerTwo)
while (!playerDecks.playerOne.determineWinner() && !playerDecks.playerTwo.determineWinner()) {
  deck.flipCard(playerDecks)
} 
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
// deck.flipCard(playerDecks)
