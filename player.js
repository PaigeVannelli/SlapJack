class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];

  }
  playCard(player) {

    //IF THE PLAYERS ARRAY IS ZERO WRITE LOGIC FOR TRUE FALSE UNCHAINGING
    // console.log(player.hand.length)
    if (this.hand.length > 0) {
      game.centerPile.unshift(this.hand[0]);
      this.hand.shift();
    } else if (this.hand.length === 0) {
      if (player.id === 1) {
        game.player1Turn = false;
      } else if (player.id === 2) {
        game.player1Turn = true;
      }
      // console.log("test", player.id)
    }
  }
  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
