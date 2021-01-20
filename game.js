class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.cards = cards.slice(0, 52);
    this.shuffledDeck = []
    this.centerPile = [];
    this.player1Turn = true;
    this.canSlap = true;
    this.message = ""
    this.endGame = false;
    this.gameOver = false;
  }

  shuffle(cards) {
    var cardsLength = cards.length
    while (cardsLength) {
      var randomIndex = Math.floor(Math.random() * cardsLength--);
      var lastCard = cards[cardsLength];
      cards[cardsLength] = cards[randomIndex];
      cards[randomIndex] = lastCard;
    }
    return cards
  }

  deal() {
    this.player1.hand = this.cards.splice(0, 26)
    this.player2.hand = this.cards.splice(0, 26)
  }

  checkPlayerTurn() {
    return this.player1Turn;
  }

  addToCenter(player) {
    if (this.endGame === false && this.centerPile.length < 52) {
      player.playCard()
      this.player1Turn = !this.player1Turn
    } else if (this.endGame === 'player1' && this.centerPile.length < 52) {
      this.player1Turn = false;
      this.player2.playCard()
    } else if (this.endGame === 'player2' && this.centerPile.length < 52) {
      this.player1Turn = true;
      this.player1.playCard()
    } else if (this.centerPile.length === 52) {
      if (this.player1Turn) {
        this.winPile(this.player1)
      } else {
        this.winPile(this.player2)
      }
    }
    this.checkEndGame();
  }

  checkEndGame() {
    if (this.player1.hand.length === 0 && this.player2.hand.length > 0) {
      this.endGame = 'player1';
    } else if (this.player2.hand.length === 0 && this.player1.hand.length > 0) {
      this.endGame = 'player2';
    }
  }

  slapCard(player) {
    if (!this.endGame) {
      this.regularSlap(player)
    } else if (this.endGame === "player1") {
      this.endGameSlap(player, this.player1, this.player2);
    } else if (this.endGame === "player2") {
      this.endGameSlap(player, this.player2, this.player1);
    }
  }

 regularSlap(player) {
   if (this.centerPile.length > 0 && this.centerPile[0].includes("jack")) {
     this.winSlap(player, 'JACK')
   } else if (this.centerPile.length > 1 && this.centerPile[0].slice(-2) === this.centerPile[1].slice(-2)) {
     this.winSlap(player, 'DOUBLE')
   } else if (this.centerPile.length > 2 && this.centerPile[0].slice(-2) === this.centerPile[2].slice(-2)) {
     this.winSlap(player, 'SANDWICH')
   } else {
     this.loseCard(player)
     this.message = `BAD SLAP! ${player.id} loses a card.`
   }
  }

  winSlap(player, typeOfWin) {
    this.winPile(player)
    this.message = `${typeOfWin}! ${player.id} takes the pile`;
    this.delaySlap();
  }

  endGameSlap(player, currentLoser, currentWinner) {
    if (this.centerPile[0].includes("jack")) {
      if (player === currentLoser) {
        this.slapBackIn(currentLoser)
      } else if (player === currentWinner) {
        this.winGame(currentWinner)
      }
    } else {
      if (player === currentLoser) {
        this.winGame(currentWinner)
      } else if (player === currentWinner) {
        this.slapBackIn(currentLoser)
      }
    }
  }

  winPile(player) {
    for (var i = 0; i < this.centerPile.length; i++) {
      player.hand.push(this.centerPile[i])
    }
    this.shuffle(player.hand)
    this.centerPile = [];
  }

  loseCard(player) {
    if (player === this.player1) {
      this.player2.hand.push(player.hand[0])
    } else if (player === this.player2) {
      this.player1.hand.push(player.hand[0])
    }
    player.hand.shift()
  }

  delaySlap() {
    this.canSlap = false;
    setTimeout(this.allowSlap.bind(this), 700);
  }

  allowSlap() {
    this.canSlap = true;
    console.log(this)
  }

  slapBackIn(currentLoser) {
    this.winPile(currentLoser)
    this.message = `JACK! ${currentLoser.id} takes the pile.`
    this.endGame = false
    this.delaySlap();
  }

  winGame(currentWinner) {
    currentWinner.wins++;
    currentWinner.saveWinsToStorage();
    this.message = `${currentWinner.id} wins! Press enter for new game`;
    this.reset();
  }

  reset() {
    this.gameOver = true;
  }
}
