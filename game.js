class Game {
  constructor() {
    this.player1 = new Player;
    this.player2 = new Player;
    this.cards = [];
    this.centerPile = [];
    // player1Turn = true;
  }
  shuffleDeck() {
    // Takes this.cards and reorgs it
  }

  addToCenter() {
    //Takes a card and pushes to centerPile array
  }

  deal() {
    //Deals this.cards aray 50/50 to each player changing their hand property
  }

  checkPlayerTurn(this.player) {
    //keep track of players turn using this.player1Turn
  }

  dealCard(this.player) {
    // this.player deal card to center pile
  }

  slapCard(this.player) {
    // big if else based on center pile array
    //updates player.wins based on which player slaps
  }

  reset() {
    //Reset the deck once player.cards is empty
    //starts over shuffle deck and deal cards method
  }
}

//Data model should be an array of every deck ex. blue-07, "red-07.png"
