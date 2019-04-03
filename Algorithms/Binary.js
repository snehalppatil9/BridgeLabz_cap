var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
BinarySwap() {
    var n=readlinesync.question("Enter the number:");
    access.binaryCon(n);
  }
}