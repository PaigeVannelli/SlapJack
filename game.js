class Game {
  constructor() {
    this.player1 = new Player;
    this.player2 = new Player;
    this.cards = cards.slice(0, 52);
    this.shuffledDeck = []
    this.centerPile = [];
    this.player1Turn = true;
  }

  // setUp() {
  //   this.shuffle();
  //   this.deal();
  // }

  shuffle() {
    // var shuffledDeck = []
    var cardLength = this.cards.length
    while (cardLength) {
      var randomIndex = Math.floor(Math.random() * cardLength--);
      //getting a random index number based on array length
      var lastCard = this.cards[cardLength];
      //getting the 52nd card in the array
      this.cards[cardLength] = this.cards[randomIndex];
      // last element in the deck is now in a random spot
      this.cards[randomIndex] = lastCard;
      //placeholder is our last card in the array
    }
    this.shuffledDeck = this.cards;
    // return shuffledDeck
  }

  deal() {
    //Deals this.cards aray 50/50 to each player changing their hand property
    this.player1.hand = this.shuffledDeck.splice(0, 26)
    this.player2.hand = this.shuffledDeck.splice(0, 26)
  }

  checkPlayerTurn() {
    return this.player1Turn;
  }

  addToCenter(player) {
    if (player === this.player1) {
      this.player1.playCard()
      this.player1Turn = false;
    } else {
      this.player2.playCard()
      this.player1Turn = true;
    }
    console.log(this.centerPile)
  }

  // playCard() {
  //   // this.player deal card to center pile
  // }

  slapCard() {
    if (this.centerPile[0].includes("jack")) {
      console.log("Jack")
    } else if (this.centerPile[0].slice(-2) === this.centerPile[1].slice(-2)) {
      console.log("Double")
    } else if (this.centerPile[0].slice(-2) === this.centerPile[2].slice(-2)) {
      console.log("Sandwich")
    }
  }

  reset() {
    //Reset the deck once player.cards is empty
    //starts over shuffle deck and deal cards method
  }
}

//Data model should be an array of every deck ex. blue-07, "red-07.png"
// big if else based on center pile array
//if card number === next card number - interpolate? Or rename?
// ["blue-01", "red-01"] - should I make these an object??
//iterate through the string and check the last two numbers ===
//if those things match (HOW??) make slapable = true
// if it's true and someone slaps
// else continue game
//if it's not true fine player a card
//updates player.wins based on which player slaps
