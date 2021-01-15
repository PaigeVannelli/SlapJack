 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //
 window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCard)

window.addEventListener("keydown", slapCard)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //
var game = new Game

function setUpGame() {
  game.shuffle();
  game.deal();
}

function playCard(event) {
  if (event.key === 'q' && game.player1Turn) {
    game.addToCenter(game.player1)
  } else if (event.key === 'p' && !game.player1Turn) {
    game.addToCenter(game.player2)
  }
}

function slap
