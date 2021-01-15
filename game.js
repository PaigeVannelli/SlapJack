class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.cards = cards.slice(0, 52);
    this.shuffledDeck = []
    this.centerPile = [];
    this.player1Turn = true;
  }

  // setUp() {
  //   this.shuffle();
  //   this.deal();
  // }

  shuffle(cards) {
    // var shuffledDeck = []
    var cardLength = cards.length
    while (cardLength) {
      var randomIndex = Math.floor(Math.random() * cardLength--);
      //getting a random index number based on array length
      var lastCard = cards[cardLength];
      //getting the 52nd card in the array
      cards[cardLength] = cards[randomIndex];
      // last element in the deck is now in a random spot
      cards[randomIndex] = lastCard;
      //placeholder is our last card in the array
    }
    return cards
    // this.shuffledDeck = this.cards;
    // var cardLength = this.cards.length
    // while (cardLength) {
    //   var randomIndex = Math.floor(Math.random() * cardLength--);
    //   //getting a random index number based on array length
    //   var lastCard = this.cards[cardLength];
    //   //getting the 52nd card in the array
    //   this.cards[cardLength] = this.cards[randomIndex];
    //   // last element in the deck is now in a random spot
    //   this.cards[randomIndex] = lastCard;
    //   //placeholder is our last card in the array
    // }
    // this.shuffledDeck = this.cards;
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
    if (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
    // console.log(this.player1, this.player2)
      if (player === this.player1) {
        this.player1.playCard(player)
        this.player1Turn = false;
      } else {
        this.player2.playCard(player)
        this.player1Turn = true;
      }
      // console.log("centerPile", this.centerPile, "player 1 hand", this.player2.hand)
    } else if (this.player1.hand.length === 0 && this.player2.hand.length > 0) {
      this.player1Turn = false;
      // console.log("failed on first", this.player1Turn )
      this.player2.playCard(player)
    } else if (this.player2.hand.length === 0 && this.player1.hand.length > 0) {
      this.player1Turn = true;
      // console.log("failed on second", this.player1Turn)
      this.player1.playCard(player)
    } else if (this.player1.hand.length === 0 && this.player2.hand.length === 0) {
      this.shuffledDeck = this.shuffle(this.centerPile)
      this.deal();
      // console.log(this.player1.hand)
    }
  }

  // playCard() {
  //   // this.player deal card to center pile
  // }

  slapCard(player) {
    if (this.centerPile.length > 0 && this.centerPile[0].includes("jack")) {
      console.log("Jack")
      this.winPile(player)
    } else if (this.centerPile.length > 1 && this.centerPile[0].slice(-2) === this.centerPile[1].slice(-2)) {
      console.log("Double")
      this.winPile(player)
    } else if (this.centerPile.length > 2 && this.centerPile[0].slice(-2) === this.centerPile[2].slice(-2)) {
      console.log("Sandwich")
      this.winPile(player)
    } else {
      console.log("bad slap")
      this.losePile(player)
    }
  }

  winPile(player) {
    var wonCards = this.shuffle(this.centerPile)
    for (var i = 0; i < wonCards.length; i++) {
      if (player === this.player1) {
        this.player1.hand.push(wonCards[i])
      } else if (player === this.player2) {
        this.player2.hand.push(wonCards[i])
      }
    }
    this.centerPile = [];
    console.log(this.player1.hand, this.player2.hand)
  }

  losePile(player) {
    var wonCards = this.shuffle(this.centerPile)
    for (var i = 0; i < wonCards.length; i++) {
      if (player === this.player1) {
        this.player2.hand.push(wonCards[i])
      } else if (player === this.player2) {
        this.player1.hand.push(wonCards[i])
      }
    }
    this.centerPile = [];
    console.log(this.player1.hand, this.player2.hand)
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
