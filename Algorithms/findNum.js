var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
findNum() {
   // var n=readlinesync.questionInt("Enter the number:");
    var n=process.argv[2];
    access.findNumber(Number(n));
  }
}