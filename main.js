 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //
 window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCard)

window.addEventListener("keydown", slapCard)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //
var game = new Game

function setUpGame() {
  game.shuffledDeck = game.shuffle(game.cards);
  game.deal();
}

function playCard(event) {
  if (event.key === 'q' && game.player1Turn) {
    game.addToCenter(game.player1)
  } else if (event.key === 'p' && !game.player1Turn) {
    game.addToCenter(game.player2)
  }
}

function slapCard()  {
  if (event.key === "f") {
    game.slapCard(game.player1);
    // game.winPile(game.player1)
  } else if (event.key === "j") {
    game.slapCard(game.player2)
  }
}
