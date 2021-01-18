class Player {
  constructor(id) {
    this.id = "Player " + id;
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
    if (this.hand.length > 0) {
      currentGame.centerPile.unshift(this.hand[0]);
      this.hand.shift();
    }
  }

  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
