/******************************************************************************
 *  Execution       :   default node          : cmd> node deckCards.js
 *                      
 *  Purpose         : To print the Cards the received by the 4 Players using 2D Array…
 * 
 *  @description    
 *  @file           : deckCards.js
 *  @overview       : To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades")
 *                    & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *                    Shuffle the cards using Random method and then distribute 9 Cards to 4 Players.
 *  @author         : Snehal Patil<snehalppatil9@gmail.com>
 *  @version        : 1.0
 *  @since          : 29/03/2019
 *
 ******************************************************************************/

var deckUtility = require('../utility/deckCardUtlity');
function deckCards() {
    try {
        /**	
         * @Purpose - To get the deck of cards
         */
        var cardArray = deckUtility.deckOfCards();
        /**
         * @Purpose - To distribute 9 Cards to 4 Players
         *            1) var arr = [ [player1], [player2], [player3], [player4] ] 
         */
        var arr = [[], [], [], []];
        var noOfCards = 0;
        for (let players = 0; players < 4; players++) {
            for (let cards = 0; cards < 9; cards++) {
                arr[players][cards] = cardArray[cards + noOfCards];
            }
            noOfCards = noOfCards + 9;
        }
        console.log();
        /**
         * @Purpose - To print shuffled deck of cards of each player
         */
        for (let player = 0; player < arr.length; player++) {
            console.log("Deck of cards of player " + (player + 1) + " is: " + " [" + arr[player] + "]");
        }
        console.log();
    } catch (error) {
        console.log(error.message);
    }
}
deckCards();