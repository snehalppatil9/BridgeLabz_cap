var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
toBinary() {
    var n=readlinesync.questionInt("Enter the number:");
    access.binaryCon(n);
  }
}