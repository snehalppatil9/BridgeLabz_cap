/******************************************************************************
 *  Execution       :   default node          : cmd> node addressBook.js
 *  
 *  @description    
 *  @file           : addressBook.js
 *  @overview       : To create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 *                    name, weight, price per kg. Get JSON Object in Java or NSDictionary in iOS. Create Inventory 
 *                    Object from JSON. Calculate the value for every Inventory. 
 *  @author         : Snehal Patil <snehalppatil9@gmail.com>
 *  @version        : 1.0
 *  @since          : 30/03/2019
 *
 ******************************************************************************/
var read = require('readline-sync')
var util = require('../utility/addressBookUtility')
var fs =require('fs')
var data = fs.readFileSync('addressBook.json','utf8');
var address = JSON.parse(data);

var a = new util.Address;
flag=true;
do{
console.log("********Address Book Detail**********")
console.log();
console.log('1: Add New Person')
console.log('2: List The Details Of Address Book')
console.log('3: Change The Information')
console.log('4: Delete Person Information')
console.log();

var choice = read.question("Enter Your Choice: ")
console.log();
switch(parseInt(choice))
{
case 1: 
   a.createProfile(address);
   console.log();
   break;

   case 2: 
   a.displayDetail(address);
   console.log();
   break;

   case 3: 
   a. updateProfile(address) 
   console.log();
   break;

   case 4: 
   a.deleteDetail(address)
   console.log();
   break;

   case 5: 
   console.log("Thank You!....")
   console.log();
   break;

   default:
   console.log("Please enter a valid option!!");
   console.log();
}
}while(flag);

