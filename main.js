 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //
window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCards)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //
var currentGame

function setUpGame() {
  currentGame = new Game()
  currentGame.shuffle(currentGame.cards);
  currentGame.deal();
  resetDisplay();
  displayPlayerWins();
}

function playCards(event) {
  if (event.key === 'q' && currentGame.checkPlayerTurn() && !currentGame.gameOver) {
    currentGame.addToCenter(currentGame.player1);
    displayCards('player1');
  } else if (event.key === 'p' && !currentGame.checkPlayerTurn() && !currentGame.gameOver) {
    currentGame.addToCenter(currentGame.player2);
    displayCards('player2');
  } else if (event.key === 'f' && !currentGame.gameOver) {
    currentGame.slapCard(currentGame.player1);
    showSlapDisplay()
  } else if (event.key === 'j' && !currentGame.gameOver) {
    currentGame.slapCard(currentGame.player2);
    showSlapDisplay()
  } else if (event.key === 'Enter' && currentGame.gameOver) {
    setUpGame();
  }
}

function displayCards(player) {
  displayCenterCard(player);
  hideEmptyDeck();
}

function displayCenterCard(player) {
  if (currentGame.centerPile.length > 0) {
    document.getElementById("centerCardDisplay").src = `./assets/${currentGame.centerPile[0]}.png`;
    alternateShadow(player);
    makeInvisible("centerCardDisplay", false)
  } else {
    makeInvisible("centerCardDisplay", true)
  }
}

function alternateShadow(player) {
  if (player === 'player1') {
    document.getElementById("centerCardDisplay").classList.remove('player2-shadow')
  } else {
    document.getElementById("centerCardDisplay").classList.add('player2-shadow')
  }
}

function hideEmptyDeck() {
  if (currentGame.player1.hand.length === 0) {
    makeInvisible("player1Cards", true)
  } else {
    makeInvisible("player1Cards", false)
  }
  if (currentGame.player2.hand.length === 0) {
    makeInvisible("player2Cards", true)
  } else {
    makeInvisible("player2Cards", false)
  }
}

function showSlapDisplay() {
  clearCenterCard();
  displayWinMessage();
  displayPlayerWins();
  showPlayerDeck()
}

function clearCenterCard() {
  if (currentGame.centerPile.length === 0) {
    makeInvisible("centerCardDisplay", true);
    document.getElementById("centerCardDisplay").src = ''
  }
}

function displayWinMessage() {
  document.getElementById("winMessage").innerText = currentGame.message;
  hideMessage()
}

function hideMessage() {
  setTimeout(function() {
    document.getElementById("winMessage").innerText = ""
  }, 2000);
}

function displayPlayerWins() {
  var player1Wins = JSON.parse(localStorage.getItem('Player 1 wins'))
  var player2Wins = JSON.parse(localStorage.getItem('Player 2 wins'))
  document.getElementById("player1Wins").innerText = `${player1Wins || 0} wins`
  document.getElementById("player2Wins").innerText = `${player2Wins || 0} wins`
}

function showPlayerDeck() {
  if (currentGame.player1.hand.length) {
    makeInvisible("player1Cards", false);
  }
  if (currentGame.player2.hand.length) {
    makeInvisible("player2Cards", false);
  }
}

function resetDisplay() {
    makeInvisible("centerCardDisplay", true)
    makeInvisible("player1Cards", false)
    makeInvisible("player2Cards", false)
}

function makeInvisible(element, isInvisible) {
  if (isInvisible) {
    document.getElementById(element).classList.add("invisible");
  } else {
    document.getElementById(element).classList.remove("invisible");
  }
}

// BUGS
// Add shadows to cards and change shadow upon plays
// bad slap shortly after is dasappearing too fast
// add timeout to every slap message!
