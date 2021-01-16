 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //
 window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCards)

// window.addEventListener("keydown", slapCard)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //
var currentGame

function setUpGame() {
  currentGame = new Game()
  currentGame.shuffle(currentGame.cards);
  currentGame.deal();
}

function playCards(event) {
  if (event.key === 'q' && currentGame.checkPlayerTurn()) {
    currentGame.addToCenter(currentGame.player1)
  } else if (event.key === 'p' && !currentGame.checkPlayerTurn()) {
    currentGame.addToCenter(currentGame.player2)
  } else if (event.key === 'f') {
    currentGame.slapCard(currentGame.player1);
  } else if (event.key === 'j') {
    currentGame.slapCard(currentGame.player2)
  } else if (event.key === 'Enter' && currentGame.gameOver) {
      setUpGame()
  }
}

// Check to make sure the gams is starting over properly
//check that things are reseting on enter? Do you need to add a conditional that game over === false?
// start DOM display
