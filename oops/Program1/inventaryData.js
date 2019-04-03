/******************************************************************************
 *  Execution       :   default node          : cmd> node inventory.js
 *                      
 *  Purpose         : To create the JSON from Inventory Object and output the JSON String.
 * 
 *  @description    
 *  @file           : inventoryData.js
 *  @overview       : To create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 *                    name, weight, price per kg. Get JSON Object in Java or NSDictionary in iOS. Create Inventory 
 *                    Object from JSON. Calculate the value for every Inventory. 
 *  @author         : Snehal Patil<snehalppatil9@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/03/2019
 *
 ******************************************************************************/



var access = require('../Program1/inventaryDataUtility')
try {
    //reading the inventary JSON file
    const fileStream = require('fs');
    const inventaryData = fileStream.readFileSync('inventaryData.json', 'utf8');
    //  converts the data text into the json objects
    var obj = JSON.parse(inventaryData);
    //console.log(obj);
    access.inventaryData(obj);
}
catch (err) {
    console.log(err);

}
