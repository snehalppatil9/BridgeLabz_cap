var readlinesync=require('readline-sync');
var access=require('./algoUtility');
var arrtime=[];
do{
var Option =readlinesync.question('1. BinInt \n 2. BinStr \n Enter the choice:');

        
        switch(Option){
            case `1`:
            var start=access.start();
            console.log(start);
            console.log("binarySearch method for integer");
            access.binaryInt();
            var stop=access.stop();
            console.log(stop);
            
            var time1=stop-start;
            result=arrtime.push(time1);
            console.log(arrtime);
            
            break;

            case `2`:
            var start=access.start();
            console.log("binarySearch method for String");
            access.binaryString();
            var stop=access.stop();
            var time2=stop-start;
            result=arrtime.push(time2);
            console.log(arrtime);
            break;

            case `3`:
            var start=access.start();
            console.log("insertionSort method for integer");
            access.InsertionInt();
            var stop=access.stop();
            var time3=stop-start;
            result=arrtime.push(time3);
            console.log(arrtime);
            break;

            case `4`:
            var start=access.start();
            console.log("insertionSort method for String");
            access.InsertionString();
            var stop=access.stop();
            var time4=stop-start;
            result=arrtime.push(time4);
            console.log(arrtime);
            break;

            case `5`:
            var start=access.start();
            console.log("bubbleSort method for integer");
            access.BubbleInt();
            var stop=access.stop();
            var time5=stop-start;
            result=arrtime.push(time5);
            break;

            case `6`:
            var start=access.start();
            console.log("bubbleSort method for string");
            access.BubbleString();
            var stop=access.stop();
            var time6=stop-start;
            result=arrtime.push(time6);
            break;

            case '7':
            arrtime.sort(function(a,b){
                //return b-a;
                console.log("Elapsed time in decending order:"+(b-a));
                
            });

            
            break;

            default:
            console.log("Enter valid choice....");
            

        }
    
}while(Option !=7)
    

        
    
