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
    localStorage.setItem(`${this.id} wins`, JSON.stringify(this.wins));
  }
}
