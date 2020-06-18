//if buttonHold2 click || turnRoll === 1 => switch activeif buttonHold1 click || turnRoll === 1 => switch active

// Biz Logic

function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.isActive = isActive
}

Player.prototype.rollDice = function() {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber
  if (randomNumber === 1) {
    this.turnScore = 0
    this.currentRoll = 1
  } else {this.turnScore += randomNumber}
  return this.currentRoll;
};

Player.prototype.gameScore = function(){
  this.totalScore += this.turnScore
    if (this.totalScore >= 100) {
      alert("you win")
    } else { return this.totalScore 
};
};

function activePlayer () {
  if (player1.isActive === true) {
    $(".btn-holdTwo").hide();
    $(".btn-rollTwo").hide();
    $(".btn-holdOne").show()
    $(".btn-rollOne").show()
  } else {
    $(".btn-holdOne").hide()
    $(".btn-rollOne").hide()
    $(".btn-holdTwo").show();
    $(".btn-rollTwo").show();
  }
}
// UI Logic

let player1 = new Player();
let player2 = new Player();

let btnRollOne = document.querySelector('.btn-rollOne');
let btnHoldOne = document.querySelector('.btn-holdOne');
let btnRollTwo = document.querySelector('.btn-rollTwo');
let btnHoldTwo = document.querySelector('.btn-holdTwo');

$(document).ready(function() {
  $("#show-rules").click(function() {
    $("#rules").toggle();
  });

  $(".btn-rollOne").click(function(event) {
    event.preventDefault();
    player1.isActive = true
    activePlayer();
    player1.rollDice();
  $('.player-1-roll').text(player1.currentRoll)
  $('.player-1-turn-total').text(player1.turnScore)
  })

  $(".btn-holdOne").click(function(event) {
    event.preventDefault();
    player1.isActive = false
    player2.isActive = true
    activePlayer();
    player1.gameScore();
    player1.currentRoll = 0
    player1.turnScore = 0
    $('.player-1-game-score').text(player1.totalScore)


  $(".btn-rollTwo").click(function(event) {
    event.preventDefault();
    activePlayer();
    player2.rollDice();
  $('.player-2-roll').text(player2.currentRoll)
  $('.player-2-turn-total').text(player2.turnScore)
  })

  })

  $(".btn-holdTwo").click(function(event) {
    event.preventDefault();
    console.log(player1.isActive)
    player1.isActive = true
    player2.isActive = false
    console.log(player1.isActive)

    player2.gameScore();
    player2.currentRoll = 0
    player2.turnScore = 0
    $('.player-2-game-score').text(player2.totalScore)
  });
});