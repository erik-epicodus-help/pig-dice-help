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
// UI Logic

let player1 = new Player();
let player2 = new Player();

let btnRollOne = document.querySelector('.btn-rollOne');
let btnHoldOne = document.querySelector('.btn-holdOne');
let btnRollTwo = document.querySelector('.btn-rollTwo');
let btnHoldTwo = document.querySelector('.btn-holdTwo');

$(document).ready(function() {
  $(".btn-rollOne").click(function(event) {
    event.preventDefault();
    player1.rollDice();
  $('.player-1-roll').text(player1.currentRoll)
  $('.player-1-turn-total').text(player1.turnScore)
  })

  $(".btn-rollTwo").click(function(event) {
    event.preventDefault();
    player2.rollDice();
  $('.player-2-roll').text(player2.currentRoll)
  $('.player-2-turn-total').text(player2.turnScore)
  })

  $(".btn-holdOne").click(function(event) {
    event.preventDefault();
    player1.isActive = false
    player2.isActive = true
    player1.gameScore();
    player1.currentRoll = 0
    player1.turnScore = 0
    $('.player-1-game-score').text(player1.gameScore)


  })

  $(".btn-holdTwo").click(function(event) {
    event.preventDefault();
    player1.isActive = true
    player2.isActive = false
    player2.gameScore();
    player2.currentRoll = 0
    player2.turnScore = 0
    $('.player-2-game-score').text(player2.gameScore)


  })
});


// if buttonHold2 click || turnRoll === 1 => switch active
// if buttonHold1 click || turnRoll === 1 => switch active