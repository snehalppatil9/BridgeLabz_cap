/************************************************************************
 * Execution :   default node : cmd> node binaryTree.js
 *              
 * Purpose   :   To find the number of binary search tree.
 * 
 * @description
 * @file     :   binaryTree.js
 * @overview :   To accept the number from the user and find the binary tree by using the formula
 *               factorial=(2n)!/(n+1)n!.
 * @author   :   Snehal Patil<snehalppatil9@gmail.com>
 * @version  :   1.0
 * @since    :  23/02/2019
 **************************************************************************/

var path=require('./implementation/binaryTree');
var readline=require('readline-sync');
var number = readline.questionFloat("Enter the number :");
var factorial = path.factorization(number);
var factorial1 = path.factorization(number * 2);
var factorial2 = path.factorization(number + 1);
/**
 * To output calculation formula.
 */
var output = factorial1 / (factorial2 * factorial);
console.log(output);