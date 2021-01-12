class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }
  saveWinsToStorage() {
    //This should take this.wins and save to local storage
  }
}
