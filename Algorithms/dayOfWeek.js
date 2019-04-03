var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
dayWeek() {
    var day=readlinesync.question("Enter the day:");
    console.log("enter 1.jan 2.feb 3.mar 4.apr 5.may.....");
    var month=readlinesync.question("Enter the month:");
    var year=readlinesync.question("Enter the year:");
	access.Calender(day,month,year);
}
}