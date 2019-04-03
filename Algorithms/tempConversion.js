var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
tempCon() {
    var F=readlinesync.question("Enter the temperature in fahrenheit:");
    var C=readlinesync.question("Enter the temperature in Celsius:");
    access.TempConversion(F,C);
}
}