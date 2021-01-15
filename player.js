class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }
  playCard() {
    game.centerPile.unshift(this.hand[0]);
    this.hand.shift();
  }
  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
