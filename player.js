class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];

  }
  playCard() {

    //IF THE PLAYERS ARRAY IS ZERO WRITE LOGIC FOR TRUE FALSE UNCHAINGING
    // console.log(player.hand.length)
    if (this.hand.length > 0) {
      currentGame.centerPile.unshift(this.hand[0]);
      this.hand.shift();
    }
  }
  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
