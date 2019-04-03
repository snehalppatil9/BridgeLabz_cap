/************************************************************
 * Execution    :   cmd> node stackStock.js
 *   
 * Purpose      :   To add and remove the company info from the list of company shares.
 * 
 * @description :   List of CompanyShares in a stack and new CompanyShares can
 *                  be added or removed easily.
 *                  
 * @file        :  stackStock.js
 * @overview    :   To add and remove the company info from the list of company shares.
 * @author      :  Snehal Patil<snehalppatil9@gmail.com>
 * @version     :   1.0
 * @since       :  28/03/2019
 * 
 * **********************************************************/


var read =require('readline-sync');
var util = require('../utility/stackStockUtility');
var file = require('fs');
var stackList =require('../../Data_structure/implementation/stackList')

 var comp = file.readFileSync('/home/admin9/Desktop/Bridgelabz/oops/Program5/company.json','utf8');
 var cust = file.readFileSync('/home/admin9/Desktop/Bridgelabz/oops/Program5/customer.json','utf8');
 var tran = file.readFileSync('stackStock.json','utf8')

obj1 =JSON.parse(cust);
obj2 = JSON.parse(comp);
obj3 = JSON.parse(tran);
var util1 = new util.StockAccount()
stack1 = new stackList.Stack();
stack2 = new stackList.Stack();

 
function Stock()
{
    var flag=true;
    do{
    console.log("*******Stock Account *******");
    console.log("1: To Create New Account");
    console.log("2: To Buy Shares ");
    console.log("3: To Sell Shares");
    console.log("4: To Print Details of comp and cust");
    console.log("5: Exit");

var ch= read.questionInt("Enter your choies:: ")

    switch(parseInt(ch)){
        case 1: 
        util1.createAccount(obj1);
        Stock();
        break;

        case 2:
        util1.buyShares(obj1,obj2,obj3);
        Stock()
        break;

        case 3:
        util1.sellShares(obj1,obj2);
        Stock()
        break;

        case 4:
        util1.print(obj1,obj2);
        Stock()
        break;

        case 5:
        console.log("Thank You!!");
        flag=false;
        break;

        default:
        console.log("Please enter a valid option!!");
        
    }
}while(flag);
}
Stock()