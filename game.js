class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.cards = cards.slice(0, 52);
    this.shuffledDeck = []
    this.centerPile = [];
    this.player1Turn = true;
    this.endGame = false;
  }

  // setUp() {
  //   this.shuffle();
  //   this.deal();
  // }

  shuffle(cards) {
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
      if (player === this.player1) {
        this.player1.playCard()
        this.player1Turn = false;
      } else {
        this.player2.playCard()
        this.player1Turn = true;
      }
      console.log("centerPile", this.centerPile, "player1 hand", this.player1.hand, "player 2 hand", this.player2.hand)
    } else if (this.player1.hand.length === 0 && this.player2.hand.length > 0) {
      this.player1Turn = false;
      this.player2.playCard()
      this.endGame = 'player1'
      console.log(this.centerPile)
    } else if (this.player2.hand.length === 0 && this.player1.hand.length > 0) {
      this.player1Turn = true;
      this.player1.playCard()
      this.endGame = 'player2'
      console.log(this.centerPile)
    } else if (this.player1.hand.length === 0 && this.player2.hand.length === 0 && this.centerPile[0].includes("jack")) {
      if (this.player1Turn === true) {
        this.winPile(this.player1)
      } else {
        this.winPile(this.player2)
      }
    }
  }

  slapCard(player) {
    if (!this.endGame) {
      this.normalPlay(player)
    } else if (this.endGame === "player1") {
      this.endGamePlay(player, this.player1, this.player2);
    } else if (this.endGame === "player2") {
      this.endGamePlay(player, this.player2, this.player1);
    }
  }

 normalPlay(player) {
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
     this.loseCard(player)
   }
  }

  endGamePlay(player, currentLoser, currentWinner) {
    if (currentWinner.hand.length > 0) {
      if (this.centerPile.length > 0 && this.centerPile[0].includes("jack")) {
        if (player === currentLoser) {
          this.winPile(currentLoser)
          this.endGame = false
        } else if (player === currentWinner) {
          currentWinner.wins++
          this.reset()
        }
      } else {
        if (player === currentLoser) {
          currentWinner.wins++
          this.reset()
        } else if (player === currentWinner) {
          this.winPile(currentLoser);
          this.endGame = false
        }
      }
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

  loseCard(player) {
    if (player === this.player1) {
      this.player2.hand.push(player.hand[0])
    } else if (player === this.player2) {
      this.player1.hand.push(player.hand[0])
    }
    player.hand.shift()
    console.log(this.player1.hand, this.player2.hand)
  }

  reset() {
    this.shuffledDeck.push(this.player1.hand)
    this.shuffledDeck.push(this.player2.hand)
    this.shuffledDeck.push(this.centerPile)
    this.shuffle(this.shuffledDeck);
    this.deal()
    //Reset the deck once player.cards is empty
    //starts over shuffle deck and deal cards method
  }
}
