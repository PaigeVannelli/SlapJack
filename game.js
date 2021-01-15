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
      console.log("centerPile", this.centerPile, "player 2 hand", this.player2.hand)
    } else if (this.player1.hand.length === 0 && this.player2.hand.length > 0) {
      this.player1Turn = false;
      this.player2.playCard()
      this.endGame = 'player1'
      // console.log("failed on first", this.centerPile)
    } else if (this.player2.hand.length === 0 && this.player1.hand.length > 0) {
      this.player1Turn = true;
      this.player1.playCard()
      this.endGame = 'player2'
      console.log(this.centerPile)
    } else if (this.player1.hand.length === 0 && this.player2.hand.length === 0) {
      // this.shuffledDeck = this.shuffle(this.centerPile)
      // this.deal();
      // I need to see who plays the last card becuase they should get the pile
      // use the win pile function on the right player?
    }
  }

  // playCard() {
  //   // this.player deal card to center pile
  // }

  slapCard(player) {
    if (!this.endGame) {
      this.normalPlay(player)
    } else if (this.endGame === "player1") {
      // if (this.player2.hand.length > 0) {
      //   if (this.centerPile.length > 0 && this.centerPile[0].includes("jack")) {
      //     console.log("Jack")
      //     if (player === this.player1) {
      //       this.winPile(this.player1)
      //       this.endGame = false
      //     } else if (player === this.player2) {
      //       console.log("player 2 wins!")
      //     }
      //   } else {
      //     console.log("bad slap")
      //     if (player === this.player1) {
      //       console.log("player 2 wins")
      //       // this.endGame = false
      //       // Reset the deck
      //     } else if (player === this.player2) {
      //       this.winPile(this.player1);
      //       this.endGame = false
      //     }
      //   }
      // } else if (this.player2.hand.length === 0) {
      //   console.log("player 2 out of cards", this.centerPile)
      //   this.player2.hand.push(this.centerPile.shuffle())
      //   console.log("after shuffle", this.centerPile)
      // }
      this.endGamePlay(player, this.player1, this.player2);

    } else if (this.endGame === "player2") {
      // if (this.player1.hand.length > 0) {
      //   console.log("endGame2", this.endGame)
      //   if (this.centerPile.length > 0 && this.centerPile[0].includes("jack")) {
      //     console.log("Jack")
      //     if (player === this.player2) {
      //       this.winPile(this.player2)
      //       this.endGame = false
      //     } else if (player === this.player1) {
      //       console.log("player 1 wins!")
      //     }
      //   } else {
      //     console.log("bad slap")
      //     if (player === this.player2) {
      //       console.log("player 1 wins")
      //       // this.endGame = false
      //       // Reset the deck
      //     } else if (player === this.player1) {
      //       this.winPile(this.player2);
      //       this.endGame = false
      //     }
      //   }
      // //   else if ()
      // // //if no jack is slapped and the winners array hits 0
      // // //the winner then winsCards, end game is still going and they keep playing
      // } else {
      //   console.log("player 1 out of cards", this.centerPile)
      //   this.player1.hand.push(this.centerPile.shuffle())
      //   console.log("after shuffle", this.centerPile)
      // }
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
     this.losePile(player)
   }
  }

  endGamePlay(player, currentLoser, currentWinner) {
    if (currentWinner.hand.length > 0) {
      if (this.centerPile.length > 0 && this.centerPile[0].includes("jack")) {
        // console.log("Jack")
        if (player === currentLoser) {
          this.winPile(currentLoser)
          this.endGame = false
          console.log(`${currentLoser} gets the cards`, currentLoser.hand)
        } else if (player === currentWinner) {
          console.log(`${currentWinner} wins`)
        }
      } else {
        console.log("bad slap")
        if (player === this.currentLoser) {
          console.log(`${currentWinner} wins`)
          // this.endGame = false
          // Reset the deck
        } else if (player === this.currentWinner) {
          this.winPile(this.currentLoser);
          this.endGame = false
        }
      }
    }
  }
  // if (this.player1.hand.length === 0)
  //We want only to check for jacks
  //if there is a jack we need to figure out which player slapped it
  // We are passing in which player slapped in our event listener
  //if it's the loser they winCards()
  //if it's the winner the game ends and they win a point

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
