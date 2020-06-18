//if buttonHold2 click || turnRoll === 1 => switch activeif buttonHold1 click || turnRoll === 1 => switch active

// Biz Logic

function Player(currentRoll, turnScore, totalScore, isActive) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.isActive = isActive;
}

Player.prototype.rollDice = function() {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber
  if (randomNumber === 1) {
    this.turnScore = 0
    this.currentRoll = 1
    this.isActive = false
    activePlayerSwitch();
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
  if (player1.isActive === true){
    $(".btn-holdTwo").hide();
    $(".btn-rollTwo").hide();
    $(".btn-holdOne").show();
    $(".btn-rollOne").show(); 
  } else if (player2.isActive === true) {
    $(".btn-holdOne").hide();
    $(".btn-rollOne").hide();
    $(".btn-holdTwo").show();
    $(".btn-rollTwo").show();
  } 

}

function activePlayerSwitch () {
  if (player1.isActive === true) {
    player1.isActive === false
    player2.isActive === true
    activePlayer();
  } else if (player2.isActive === true) {
    player2.isActive === false
    player1.isActive === true
    activePlayer();
  }
}
// UI Logic

let player1 = new Player(0,0,0,true);
let player2 = new Player(0,0,0,false);

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
    // activePlayerSwitch();
    player1.rollDice();
  $('.player-1-roll').text(player1.currentRoll)
  $('.player-1-turn-total').text(player1.turnScore)
  })

  $(".btn-holdOne").click(function(event) {
    event.preventDefault();
    player1.gameScore();
    activePlayerSwitch();
    player1.currentRoll = 0
    player1.turnScore = 0
    $('.player-1-game-score').text("Player One total score: " + player1.totalScore)
  })

  $(".btn-rollTwo").click(function(event) {
    event.preventDefault();
    //activePlayerSwitch();
    player2.rollDice();
  $('.player-2-roll').text(player2.currentRoll)
  $('.player-2-turn-total').text(player2.turnScore)
  })

  $(".btn-holdTwo").click(function(event) {
    event.preventDefault();
    activePlayerSwitch();
    player2.gameScore();
    player2.currentRoll = 0
    player2.turnScore = 0
    $('.player-2-game-score').text("Player Two total score: " + player2.totalScore)
  });
});