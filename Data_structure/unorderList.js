/************************************************************************
 * Execution :   default node : cmd> node unOrderedList.js
 *              
 * Purpose   :   To read from file the list of Words and take user input to search a Text.
 * 
 * @description
 * @file     :   unorderedList.js
 * @overview :   Read the Text from a file, split it into words and arrange it as Linked List.
 *               Take a user input to search a Word in the List. If the Word is not found then 
 *               add it to the list, and if it found then remove the word from the List. In the
 *               end save the list into a file.
 * @author   :   snehal patil<snehalppatil9@gmail.com>
 * @version  :   1.0
 * @since    :   22/3/2019
 **************************************************************************/



var access=require('./utility');
access.unorderedList();
