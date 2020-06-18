// Biz Logic

function Player(currentRoll, turnScore, totalScore) {
  this.currentRoll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
}
let player1 = new Player();

Player.prototype.rollDice = function() {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber
  if (randomNumber === 1) {
    this.turnScore = 0
    this.currentRoll = 1
  } else {this.turnScore += randomNumber}
  return this.currentRoll;
}

Player.prototype.gameScore = function(){
  this.totalScore += this.turnScore
    if (this.totalScore >= 100) {
      alert("you win")
    } else {return false}

  return this.totalScore;
}
