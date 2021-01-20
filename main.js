 // ~~~~~~~~~~~~~ VARIABLES ~~~~~~~~~~~~~ //

var currentGame

 // ~~~~~~~~~~~ EVENT LISTENERS~~~~~~~~~ //

window.addEventListener("load", setUpGame)

window.addEventListener("keydown", playCards)

// ~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~ //

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
  } else if (event.key === 'f' && !currentGame.gameOver && currentGame.canSlap) {
    currentGame.slapCard(currentGame.player1);
    showSlapDisplay()
  } else if (event.key === 'j' && !currentGame.gameOver && currentGame.canSlap) {
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
    $(".center-card-image").attr("src", `./assets/${currentGame.centerPile[0]}.png`)
    alternateShadow(player);
    makeInvisible("centerCardDisplay", false)
  } else {
    makeInvisible("centerCardDisplay", true)
    $(".center-card").css("box-shadow", "0 0 30px #787878")
  }
}

function alternateShadow(player) {
  if (player === 'player1') {
    $(".center-card").css("box-shadow", "0 0 30px #4682B4")
  } else {
    $(".center-card").css("box-shadow", "0 0 30px #77a8a8")
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
    $('#centerCardDisplay').attr('src', '')
  }
}

function displayWinMessage() {
  $('h1').text(`${currentGame.message}`)
  if (!currentGame.message.includes("wins")) {
    hideMessage()
  }
}

function hideMessage() {
  setTimeout(function() {
    $('h1').text('')
  }, 2000);
}

function displayPlayerWins() {
  var player1Wins = JSON.parse(localStorage.getItem('Player 1 wins'))
  var player2Wins = JSON.parse(localStorage.getItem('Player 2 wins'))
  $('#player1Wins').text(`${player1Wins || 0} wins`)
  $('#player2Wins').text(`${player2Wins || 0} wins`)
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
    $('h1').text('')
}

function makeInvisible(element, isInvisible) {
  if (isInvisible) {
    $(`#${element}`).addClass("invisible");
  } else {
    $(`#${element}`).removeClass("invisible");
  }
}
