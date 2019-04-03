/************************************************************
 * Execution    :   cmd> node stocklinkedList.js
 *                   
 * 
 * Purpose      :   To add and remove the company info from the list of company shares.
 * 
 * @description :   List of CompanyShares in a Linked List and new CompanyShares can
 *                  be added or removed easily.
 *                  
 * @file        :  stocklinkedList.js
 * @overview    :   To add and remove the company info from the list of company shares.
 * @author      :  Snehal Patil<snehalppatil9@gmail.com>
 * @version     :   1.0
 * @since       :   28/03/2019
 * 
 * **********************************************************/



//Required File 

var read = require('readline-sync');
var access = require('../utility/stockLinkUtility')
var path = new access.companyShares;


function Stocklinkedlist() {
    try {
        flag=true;
        do {
            console.log(" \n ***************** Maintain the List of CompanyShares in a Linked List ************* \n ");
            var choice = read.questionInt(" 1. Add \n 2. Remove \n 3. Save \n 4. Display \n 5. Exit \n Enter ur choice : ");
            if(!isNaN(choice)){
            switch (choice) {
                case 1:
                    path.addData();
                    break;
                case 2:
                    path.removeData();
                    break;
                case 3:
                    path.saveData();
                    break;
                case 4:
                    path.displayData();
                    break;
                case 5:
                    return false;
                default:
                    console.log("Please enter correct choice !");
            }
        }
        else{
            console.log("Choice must be number................");
            flag=true;
        }
      } while(flag);
    }
    catch (err) {
        console.log(err.message);
    }
}
Stocklinkedlist();