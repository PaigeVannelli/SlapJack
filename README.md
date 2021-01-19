
---
SlapJack - Solo Project
---
## Contributors

* Paige Vannelli

## Overview

Now that you’ve got the main foundations down to build out a frontend application, it’s time to prove to yourself that you own those skills! You’re going to be building a SlapJack card game from scratch!

## Learning Goals

* Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * localStorage to persist data
  * event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

## Technologies Used  

* JavaScript
* CSS
* HTML

## Set Up and Instructions

To view the code, please ask to be a collaborator and then go to the GitHub repo (https://github.com/PaigeVannelli/SlapJack).

## Functionality

Users are able to play through games of slapjack. Users will also be able to keep track of player wins.

Player 1 controls are:
 * q to deal
 * f to slap

Player 2 controls are:
  * p to deal
  * j to slap

Enter will reset the game once a player has won.

Gameplay:

Players alternate turns playing cards face-up into the central pile (ex a player can’t deal twice in a row)
Any player can slap at any time, with several outcomes!

If a player slaps when a Jack is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.

![](./assets/slapsjack.gif)

If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.

![](./assets/slapdouble.gif)

If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.

![](./assets/slapsandwich.gif)

If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.

![](./assets/badslap.gif)

If one player loses all their cards, they have one chance to not lose and continue the game:

The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!)

If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed

When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.

![](./assets/slapbackin.gif)

If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!

![](./assets/slapjackwingame.gif)

The only way the player who still has cards can win is by slapping the Jack before the player without cards left does

![](./assets/badslapwingame.gif)


## Future Additions

To further the goal of this project, we would like to -
* Add a slap timeout. When one player has a successful slap, prevent slapping for both players for half a second.
* Add a button that takes you to instructions
* Implement jQuery

## Progression

For a description of project details and breakdown, visit [the project page](https://frontend.turing.io/projects/module-1/slapjack.html) on the curriculum site.


## Project Board

To view breakdown of steps taken, visit: [the project board](https://github.com/PaigeVannelli/SlapJack/projects/1)
