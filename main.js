 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //
 window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCards)

// window.addEventListener("keydown", slapCard)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //
var currentGame

function setUpGame() {
  currentGame = new Game()
  currentGame.shuffledDeck = currentGame.shuffle(currentGame.cards);
  currentGame.deal();
}

function playCards(event) {
  if (event.key === 'q' && currentGame.player1Turn) {
    currentGame.addToCenter(currentGame.player1)
  } else if (event.key === 'p' && !currentGame.player1Turn) {
    currentGame.addToCenter(currentGame.player2)
  } else if (event.key === 'f') {
    currentGame.slapCard(currentGame.player1);
  } else if (event.key === 'j') {
    currentGame.slapCard(currentGame.player2)
  }
}
