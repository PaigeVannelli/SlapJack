class Game {
  constructor() {
    this.player1 = new Player;
    this.player2 = new Player;
    this.cards = cards.slice(0, 52);
    //clone array - assign by value
    // this.cards = ["blue-01", "blue-02", "blue-03", "blue-04", "blue-05",
    // "blue-06", "blue-07", "blue-08", "blue-09", "blue-10", "blue-jack",
    // "blue-queen", "blue-king", "gold-01", "gold-02", "gold-03", "gold-04",
    // "gold-05", "gold-06", "gold-07", "gold-08", "gold-09", "gold-10",
    // "gold-jack", "gold-queen", "gold-king", "green-01", "green-02",
    // "green-03", "green-04", "green-05", "green-06", "green-07",
    // "green-08", "green-09", "green-10", "green-jack", "green-queen",
    // "green-king", "red-01", "red-02", "red-03", "red-04",
    // "red-05", "red-06", "red-07", "red-08", "red-09", "red-10",
    // "red-jack", "red-queen", "red-king"];
    this.centerPile = [];
    this.player1Turn = true;
  }

  shuffleDeck() {
    var shuffledDeck = []
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
    shuffledDeck = this.cards;
    return shuffledDeck
  }

  addToCenter() {
    //Takes a card and pushes to centerPile array
  }

  deal() {
    //Deals this.cards aray 50/50 to each player changing their hand property
  }

  checkPlayerTurn() {
    //keep track of players turn using this.player1Turn
  }

  dealCard() {
    // this.player deal card to center pile
  }

  slapCard() {
    // big if else based on center pile array
    //if card number === next card number - interpolate? Or rename?
    // ["blue-01", "red-01"] - should I make these an object??
    //iterate through the string and check the last two numbers ===
    //if those things match (HOW??) make slapable = true
    // if it's true and someone slaps
    // else continue game
    //if it's not true fine player a card
    //updates player.wins based on which player slaps
  }

  reset() {
    //Reset the deck once player.cards is empty
    //starts over shuffle deck and deal cards method
  }
}

//Data model should be an array of every deck ex. blue-07, "red-07.png"
