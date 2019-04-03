/******************************************************************************
 *  Execution       :   default node          : cmd> node stockReport.js
 *                      
 *  Purpose         : To Print the Stock Report.
 * 
 *  @description    
 *  @file           : stockReport.js
 *  @overview       : program to read in Stock Names, Number of Share, Share Price. Print a Stock
 *                    Report with total value of each Stock and the total value of Stock.
 *  @author         : Snehal Patil<snehalppatil9@gmail.com@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/03/2019
 *
 ******************************************************************************/


var access=require('./stackReportJson')
try{
const readFile=require('fs');
const stockFile=readFile.readFileSync('stockReport.json','utf-8');
//console.log(stockFile);
var obj=JSON.parse(stockFile);

access.stockReport(obj);
}
catch(err){
    console.log(err);
    
}