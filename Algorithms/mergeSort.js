var readlinesync=require('readline-sync');
var access=require('./algoUtility');
module.exports={
    
    mergeSort(num1){
        var a=[];
        console.log("Enter elements of array:");
        for(var i=0;i<num1;i++) {
          var ele=readlinesync.questionInt();
           a[i]=ele ;   
       }
        //console.log(a);
       access.merge(a);
      
    }
}