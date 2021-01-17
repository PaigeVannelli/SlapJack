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
  if (event.key === 'q' && currentGame.checkPlayerTurn() && !currentGame.gameOver) {
    currentGame.addToCenter(currentGame.player1);
    displayCards();
  } else if (event.key === 'p' && !currentGame.checkPlayerTurn() && !currentGame.gameOver) {
    currentGame.addToCenter(currentGame.player2);
    displayCards();
  } else if (event.key === 'f') {
    currentGame.slapCard(currentGame.player1);
    showSlapDisplay(currentGame.player1)
  } else if (event.key === 'j') {
    currentGame.slapCard(currentGame.player2);
    showSlapDisplay(currentGame.player2)
  } else if (event.key === 'Enter' && currentGame.gameOver) {
    console.log("enter is working ")
    setUpGame();
    resetDisplay();
    console.log(currentGame)
  }
}

function displayCards() {
  displayCenterCard();
  hideEmptyDeck();
}

function displayCenterCard() {
  var centerCard = document.getElementById("centerCardDisplay")
  if (currentGame.centerPile.length > 0) {
   centerCard.src = `./assets/${currentGame.centerPile[0]}.png`
   centerCard.classList.remove("invisible")
   } else {
    centerCard.classList.add("invisible")
   }
}

function hideEmptyDeck() {
  if (currentGame.player1.hand.length === 0) {
    document.getElementById("player1Cards").classList.add("invisible")
  } else {
    document.getElementById("player1Cards").classList.remove("invisible")
  }
  if (currentGame.player2.hand.length === 0) {
    document.getElementById("player2Cards").classList.add("invisible")
  } else {
    document.getElementById("player2Cards").classList.remove("invisible")
  }
}

function showSlapDisplay(player) {
  clearCenterCard(player);
  displayPlayerWins();
  showPlayerDeck()
}

function clearCenterCard(player) {
  var winner
  // winner = (player === currentGame.player1) ? "Player 1" | "Player 2"
  if (player === currentGame.player1) {
    winner = "Player 1"
  } else {
    winner = "Player 2"
  }
  if (currentGame.message === 'JACK' || 'SANDWICH' || 'DOUBLE') {
    document.getElementById("winMessage").innerText = `${currentGame.message}! ${winner} takes the pile`;
    document.getElementById("centerCardDisplay").classList.add("invisible")
    hideMessage()
  } else if (currentGame.message === `BAD SLAP`) {
    document.getElementById("winMessage").innerText = `BAD SLAP`;
    hideMessage()
  } else {
    console.log(currentGame.message)
    // document.getElementById("winMessage").innerText = `${currentGame.message}!`
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

function showPlayerDeck() {
  if (currentGame.player1.hand.length > 0) {
    document.getElementById("player1Cards").classList.remove("invisible")
  }
  if (currentGame.player2.hand.length > 0)
  document.getElementById("player2Cards").classList.remove("invisible")
}

function resetDisplay() {
  if (currentGame.centerPile.length === 0) {
    document.getElementById("centerCardDisplay").classList.add("invisible");
  }
  if (currentGame.player1.hand.length > 0) {
    document.getElementById("player1Cards").classList.remove("invisible")
  }
  if (currentGame.player2.hand.length > 0)
  document.getElementById("player2Cards").classList.remove("invisible")
}

// BUGS
// Setup up player X wins! diplay message - none of the messages are diaplying correct
// Review your conditional! It's not running correctly
// Wins aren't saving - I'm reseting game - Can I just use local storage?
