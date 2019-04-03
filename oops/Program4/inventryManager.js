/******************************************************************************
 *  Execution       :   default node          : cmd> node inventoryManager.js
 *                      
 *  Purpose         : To create the JSON from Inventory Object and output the JSON String.
 * 
 *  @description    
 *  @file           : inventoryManager.js
 *  @overview       : The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
 *                    The InventoryManager will call each Inventory Object in its list to calculate the 
 *                    Inventory Price and then call the Inventory Object to return the JSON String.
 *                    The main program will be with InventoryManager.
 *  @author         : Snehal Patil<snehalppatil9@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/03/2019
 *
 ******************************************************************************/

var access=require('../Program4/inventryManagerUtility')

try{
//reading the inventary file

const fileStream=require('fs');
const inventaryData=fileStream.readFileSync('inventryManager.json','utf8');
/* 
    converts the data text into the json objects
*/
var obj=JSON.parse(inventaryData);
access.inventaryManager(obj);
}
catch(err){
    console.log(err);
    
}


