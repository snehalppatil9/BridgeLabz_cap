var readlinesync=require('readline-sync');
var access=require('./algoUtility');
module.exports={
    
    binarySort(num){
        var array=[];
        console.log("Enter elements of array:");
        for(var i=0;i<num;i++) {
        var ele=readlinesync.questionInt();
           array[i]=ele ;   
       }
        //console.log(a);
       var search=readlinesync.questionInt("Enter element to be searched:")
       access.binary(array, search,num);
    }
}