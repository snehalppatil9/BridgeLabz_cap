/******************************************************************************
 *  Execution       :   default node          : cmd> node deckOfCards.js
 *                      
 *  Purpose         : To print the Cards the received by the 4 Players using 2D Array…
 * 
 *  @description    
 *  @file           : deckOfCards.js
 *  @overview       : create a Player Object having Deck of Cards, and  having ability to
                      Sort by Rank and maintain the cards in a Queue implemented using Linked List.
                      Do not use any Collection Library. Further the Player are also arranged in Queue.
                      
 *  @author         : Snehal Patil<snehalppatil9@gmail.com>
 *  @version        : 1.0
 *  @since          : 29/03/2019
 *
 ******************************************************************************/



var deckCardUtlity = require('../utility/deckCardUtlity')
/**
* 1) Create a new pathLinllist object which implements QueueLinked.
*/
var pathLinllist = new deckCardUtlity.QueueLinked;
function main() {
  try {
    var totalCards = deckCardUtlity.deckOfCards();
    var player1Cards = [];
    var player2Cards = [];
    var player3Cards = [];
    var player4Cards = [];
    /**
     * Loop to distribute 13 cards from the total cards.
     */
    for (let player1 = 0; player1 < totalCards.length; player1++) {
      if (player1 >= 0 && player1 < 13) {
        player1Cards[player1] = totalCards[player1];
      } else if (player1 >= 13 && player1 < 26) {
        player2Cards[player1 - 13] = totalCards[player1];
      } else if (player1 >= 26 && player1 < 39) {
        player3Cards[player1 - 26] = totalCards[player1];
      } else {
        player4Cards[player1 - 39] = totalCards[player1];
      }
    }
    /**
     * Create 4 player objects by passing 13 cards to each of them.
     */
    playerOne = new deckCardUtlity.Player(player1Cards);
    playerTwo = new deckCardUtlity.Player(player2Cards);
    playerThree = new deckCardUtlity.Player(player3Cards);
    playerFour = new deckCardUtlity.Player(player4Cards);
    /**
     * Invoke sortedCards function to get the sortedcards.
     */
    var sortedCards1 = playerOne.sortedCards();
    var sortedCards2 = playerTwo.sortedCards();
    var sortedCards3 = playerThree.sortedCards();
    var sortedCards4 = playerFour.sortedCards();

    /**
     * Enqueue each set of sortedCards to the queue
     */
    pathLinllist.enqueue(sortedCards1);
    pathLinllist.enqueue(sortedCards2);
    pathLinllist.enqueue(sortedCards3);
    pathLinllist.enqueue(sortedCards4);
    /**
     * Dequeue the cards and print it to the console.
     */
    console.log("\nCards recieved by player 1 :" + pathLinllist.dequeue());
    console.log("Cards recieved by player 2 :" + pathLinllist.dequeue());
    console.log("Cards recieved by player 3 :" + pathLinllist.dequeue());
    console.log("Cards recieved by player 4 :" + pathLinllist.dequeue());
    console.log();
  } catch (error) {
    console.log(error.message);
  }
}
main();