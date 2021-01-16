 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //
 window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCards)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //
var currentGame

function setUpGame() {
  currentGame = new Game()
  currentGame.shuffle(currentGame.cards);
  currentGame.deal();
}

function playCards(event) {
  if (event.key === 'q' && currentGame.checkPlayerTurn()) {
    currentGame.addToCenter(currentGame.player1);
    displayCenterCard();
  } else if (event.key === 'p' && !currentGame.checkPlayerTurn()) {
    currentGame.addToCenter(currentGame.player2);
    displayCenterCard();
  } else if (event.key === 'f') {
    currentGame.slapCard(currentGame.player1);
    clearCenterCard(currentGame.player1);
    displayPlayerWins();
  } else if (event.key === 'j') {
    currentGame.slapCard(currentGame.player2);
    clearCenterCard(currentGame.player2);
    displayPlayerWins();
  } else if (event.key === 'Enter' && currentGame.gameOver) {
      setUpGame();
  }
}

function displayCenterCard() {
   var centerCard = document.getElementById("centerCardDisplay")
   centerCard.classList.remove("invisible")
   centerCard.src = `./assets/${currentGame.centerPile[0]}.png`
}

function clearCenterCard(player) {
  var winner
  // winner = (player === currentGame.player1) ? "Player 1" | "Player 2"
  if (player === currentGame.player1) {
    winner = "Player 1"
  } else {
    winner = "Player 2"
  }
  if (currentGame.message !== 'BAD SLAP') {
    document.getElementById("winMessage").innerText = `${currentGame.message}! ${winner} takes the pile`;
    document.getElementById("centerCardDisplay").classList.add("invisible")
    hideMessage()
  } else {
    document.getElementById("winMessage").innerText = `BAD SLAP`;
    hideMessage()
  }
}

function hideMessage() {
  setTimeout(function() {
    document.getElementById("winMessage").innerText = ""
  }, 2000);
}

function displayPlayerWins() {
  document.getElementById("player1Wins").innerText = `${currentGame.player1.wins} wins`
  document.getElementById("player2Wins").innerText = `${currentGame.player2.wins} wins`
}

// Check to make sure the gams is starting over properly
//check that things are reseting on enter? Do you need to add a conditional that game over === false?
// start DOM display
// 1. update center card
// 2. update header based on wins and winner
// 3. update wins below upon win
//Update Center cards
// should happen every time a player hit p or q
//have the display target the top card on the pile and interpolate in the inner html

// it's not RESETING!
