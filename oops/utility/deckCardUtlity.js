class Player {
    constructor(cards) {
        this.cards = cards;
    }
    /**
     * Function to sort the cards.
     */
    sortedCards() {
        var access = require('../../Algorithms/algoUtility')
        var sortedCards = [];
        sortedCards = access.bubble(this.cards)
        return sortedCards;
    }
}
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class QueueLinked {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    enqueue(element) {
        var n = new Node(element)
        if (this.head == null) {
            this.head = n;
            this.size++;
            return
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next
            }
            this.size++;
            current.next = n;
        }
    }
    dequeue() {
        if (this.size == 0) {
            console.log("Queue is empty");
            return;
        }
        var n = this.head.element;
        this.head = this.head.next;
        this.size--;
        return n;
    }
}
module.exports = {
    Player, QueueLinked,
    /*********************************** 9. DeckOfCards  *************************************************
                
        * @Statement : 9. DeckOfCards
        
        *******************************************************************************************************/
    deckOfCards() {
        try {
            var suits = ["♣", "♦", "♥", "♠"];
            var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
            /**
             * @Purpose : To calculate total number of cards
             */
            var totalCards = suits.length * ranks.length;
            //console.log(totalCards);
            
            /**
             * @Purpose : To create a deck of array
             * push :  Combines two or more arrays.
             */
            var cardArray = [];
            var temp = "";
            for (var i = 0; i < suits.length; i++) {
                for (var j = 0; j < ranks.length; j++) {
                    cardArray.push(temp + ranks[j] + suits[i]);
                }
              //  console.log(cardArray);
                
            }
            /**
             * @Purpose : To shuffle the deck
             */
            for (var shuffle = 0; shuffle < totalCards; shuffle++) {
                var num = Math.floor(Math.random() * totalCards);
                /**
                 * @Purpose : Performing swapping
                 */
                var temp = cardArray[shuffle];
                cardArray[shuffle] = cardArray[num];
                cardArray[num] = temp;
            }
           // console.log(cardArray);
            return cardArray;
          
            
        } catch (error) {
            console.log(error.message);
        }
    }
    
}