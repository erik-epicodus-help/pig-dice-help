//if buttonHold2 click || turnRoll === 1 => switch activeif buttonHold1 click || turnRoll === 1 => switch active

// Biz Logic

function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.isActive = isActive;
}

Player.prototype.rollDice = function () {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber
  if (randomNumber === 1) {
    this.turnScore = 0
    this.currentRoll = 1
    // on 19, we call "activePlayer", which will display buttons and set the "active" state of each player accordingly. (line 39)
    activePlayer()
  } else { this.turnScore += randomNumber }
  return this.currentRoll;
};

Player.prototype.gameScore = function () {
  this.totalScore += this.turnScore
  if (this.totalScore >= 100) {
    alert("you win")
  } else {
    return this.totalScore
  };
};

// This properly sets the active state of the player from true to false, or vice versa. That's it!
Player.prototype.switchActive = function () {
  this.isActive = !this.isActive
}

// Here, I switched which buttons get shown and which are hidden, because the logic is checking for the "active" state of each player at the time that this function is called. If it's called, we want to switch from the currently active to the currently de-active. So, if player1 is active, we show 2's buttons and hide 1's. 
function activePlayer() {
  if (player1.isActive === true && player2.isActive === false) {

    $(".btn-holdTwo").show();
    $(".btn-rollTwo").show();
    $(".btn-holdOne").hide();
    $(".btn-rollOne").hide();

    // Went back to adding these, which is needed because if we modify player1 or player2's "isActive" property, it should be via a prototype method. This method is defined on line 34.
    player1.switchActive()
    player2.switchActive()
  } else if (player2.isActive === true && player1.isActive === false) {

    $(".btn-holdOne").show();
    $(".btn-rollOne").show();
    $(".btn-holdTwo").hide();
    $(".btn-rollTwo").hide();
    player1.switchActive()
    player2.switchActive()
  }
}

// UI Logic

// We create players, and send in parameters to make sure the players start with the correct active status. 
let player1 = new Player(0, 0, 0, true);
let player2 = new Player(0, 0, 0, false);

let btnRollOne = document.querySelector('.btn-rollOne');
let btnHoldOne = document.querySelector('.btn-holdOne');
let btnRollTwo = document.querySelector('.btn-rollTwo');
let btnHoldTwo = document.querySelector('.btn-holdTwo');

$(document).ready(function () {
  // activePlayer()
  $("#show-rules").click(function () {
    $("#rules").toggle();
  });

  // The reason I show and hide buttons here is so that ONLY player 1 can choose to roll. This is so that our game board's state matches the state of our players upon creation. Player1 is true initially, so only player 1 can roll. This will also help prevent bugs from player2 rolling accidentally first.
  $(".btn-holdOne").show();
  $(".btn-rollOne").show();
  $(".btn-holdTwo").hide();
  $(".btn-rollTwo").hide();

  $(".btn-rollOne").click(function (event) {
    event.preventDefault();
    // activePlayerSwitch();
    player1.rollDice();
    $('.player-1-roll').text(player1.currentRoll)
    $('.player-1-turn-total').text(player1.turnScore)
  })

  $(".btn-holdOne").click(function (event) {
    event.preventDefault();
    player1.gameScore();
    activePlayer();
    player1.currentRoll = 0
    player1.turnScore = 0
    $('.player-1-game-score').text("Player One total score: " + player1.totalScore)
  })

  $(".btn-rollTwo").click(function (event) {
    event.preventDefault();
    //activePlayerSwitch();
    player2.rollDice();
    $('.player-2-roll').text(player2.currentRoll)
    $('.player-2-turn-total').text(player2.turnScore)
  })

  $(".btn-holdTwo").click(function (event) {
    event.preventDefault();

    player2.gameScore();
    activePlayer();
    player2.currentRoll = 0
    player2.turnScore = 0
    $('.player-2-game-score').text("Player Two total score: " + player2.totalScore)
  });
});