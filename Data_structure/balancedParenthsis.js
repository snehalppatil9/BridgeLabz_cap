/************************************************************************
 * Execution :   default node : cmd> node balancedParentheses.js
 *              
 * Purpose   :   To read in Arithmetic Expression and print True or False to Show
 *               Arithmetic Expression is balanced or not.
 * 
 * @description
 * @file     :   balancedParentheses.js
 * @overview :   Take an Arithmetic Expression where parentheses are used to order the performance
 *               of operations. Ensure parentheses must appear in a balanced fashion.
 * @author   :   snehal patil<snehalppatil9@gmail.com>
 * @version  :   1.0
 * @since    :   22/3/2014
 **************************************************************************/

var access=require('./utility')
var result =access.balancedParenthesis();
console.log(result);
if (result) {
    console.log("Expression is balanced");
    return true;
}
else {
    console.log("Expression is not balanced");
    return false;
}