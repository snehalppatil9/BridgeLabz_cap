var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
MonthlyPayment() {
    var P=readlinesync.question("Enter the principal loan amount:");
    var R=readlinesync.question("Enter the percent interest compounded monthly:");
    var Y=readlinesync.question("Enter the to pay off:");
	access.MonthlyPayment(P,Y,R);
}
}