var readlinesync=require('readline-sync');
var access=require('./algoUtility');
module.exports={
    
    bubbleSort(num){
        var a=[];
        console.log("Enter elements of array:");
        for(var i=0;i<num;i++) {
          var ele=readlinesync.questionInt();
           a[i]=ele ;   
       }
        console.log(a);
       access.bubble(a);
    }
}