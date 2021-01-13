class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }
  playCard() {
    //This should take a card from the players deck (as given by our game deal method)
    //shoudl pull the top card out of the array and push it into game.centerPile in the game
  }
  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
