# _Project Pig Dice_

#### _App that allows 2 players to play the dice game called Pig Dice, 6.18.2020_

#### By _**Matthew Craig, Mariel Hamson and Tristan Emmerson**_

## Description

| Behavior | Input | Output|
|----------|-------|-------|
| Player 1 clicks "roll" to roll the dice | Roll ("click") | Current roll: 3 |
| Player 1 has the option to roll again | Roll ("click") | Current roll: 4, turn score: 7 |
| Player 1 has the option to hold and end their turn. This will add their turn score to their total score. | Hold ("click") | Current roll: n/a, turn score: 7, total score: 7 |
| Player 2's turn starts | Roll ("click") | Current roll: 5, turn score: 5 |
| Player 2 has the option to roll again | Roll ("click") | Current roll: 2, turn score: 7 |
| Player 2 has the option to hold and end their turn | Hold ("click") | Current roll: n/a, turn score: 7 , total score: 7|
| If either player rolls a 1, their turn score is reset to 0, and their turn ends | 1 | current roll: 1, turn score: 0, total score: [sum of previous turn scores] |
| The first player to reach 100 points wins the game | total score: 95, turn score: 5 | total score: 100, YOU WIN!|

---

## Setup/Installation Requirements 
  ### Via GitHub Download

* _Navigate to www.github.com/marielhamson_
* _Find the pig-dice repository by search or scroll_
* _click Download repository_
* _Navigate to the project folder that you have just downloaded_
* _Open the index.html file in your preferred browser_


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_Please reach out to me at mariel.hamson@gmail.com if you have any questions or suggestions_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

### License

*MIT Licensing*

Copyright (c) 2020 **_Mariel Hamson, Matthew Craig and Tristan Emmerson_**