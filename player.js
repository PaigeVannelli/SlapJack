class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
    // this.isTurn = null;
  }
  playCard(player) {
    // console.log(player)
    if (this.hand.length > 0) {
      game.centerPile.unshift(this.hand[0]);
      this.hand.shift();
    } else if (this.hand.length === 0) {
      this.isTurn = false;
    }
  }
  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
