/******************************************************************************
 *  Execution       :   default node          : cmd> node commercialData.js
 *                      
 *  Purpose         : To Print the Stock Report.
 * 
 *  @description    
 *  @file           : commercialData.js
 *  @overview       : program to read in Stock Names, Number of Share, Share Price. Print a Stock
 *                    Report with total value of each Stock and the total value of Stock.
 *  @author         : Snehal Patil<snehalppatil9@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/03/2019
 *
 ******************************************************************************/


var read = require('readline-sync');
var util = require('../utility/custcomUtility');
var readFile = require('fs');
var comp = readFile.readFileSync('company.json', 'utf8');
var cust = readFile.readFileSync('customer.json', 'utf8');
var objcomp = JSON.parse(comp);
var objcust = JSON.parse(cust);
var stockAcc = new util.stockAccount();
function stock() {

    try {

        var flag = true;
        do {
            console.log("1] create new account");
            console.log("2] add shares of stock to account");
            console.log("3] subtract shares of stock from account");
            console.log("4] Print the details");
            console.log("5] Exit");
            var ch = read.questionInt("Enter your choice:");
            console.log();

           
                switch (ch) {
                    case 1:
                        stockAcc.createAccount(objcust);
                        //flag=false;
                        break;

                    case 2:
                        stockAcc.buyShares(objcust, objcomp);
                        //flag=false;
                        break;

                    case 3:
                        stockAcc.sellShares(objcust, objcomp);
                        //flag=false;
                        break;

                    case 4:
                        stockAcc.print(objcust, objcomp);
                        //flag=false;
                        break;

                    default:
                        console.log("Please enter valid choice.");
                        console.log();



                }
            
        } while (flag);
    }
    catch (err) {
        console.log(err);

    }
}
stock();

