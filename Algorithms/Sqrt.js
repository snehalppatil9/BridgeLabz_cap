var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
Sqrt() {
    var c=readlinesync.question("Enter the number:");
    if(c<0){
        console.log("Enter non negative number......");
        this.Sqrt();
    }
    else{
       access.SqrtRoot(c);
    }
}
}