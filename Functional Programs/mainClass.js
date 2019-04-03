var access = require('./funutility');
var readlinesync =require('readline-sync');
console.log("1. String Replace\n2. FlipCoin\n3. Leap Year\n4. power of 2\n5. Harmonic Number\n6. Factors\n7. Gambler");
console.log("8. Coupon Numbers\n9. 2D Array\n10. Sum of three Integer adds to ZERO\n11. Distance\n12. permutation of a String\n13. Simulate Stopwatch Program\n14. Cross Game or Tic­Tac­Toe Game");
console.log("15. Quadratic\n16. WindChill")
var flag=true;
while(flag){
    var opt=readlinesync.question("Enter ur choice:");
    switch(opt){
        case '1':
        access.stringReplace();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '2':
        access.flipCoin();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;


        case '3':
        access.leapYear();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '4':
        access.powerOf2();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '5':
        access.harmonicNumber();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        
        case '6':
        access.factors();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '7':
        access.gambler();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '8':
        access.couponNum();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '9':
        access.array2D();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '10':
        access.sum3Int();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '11':
        access.distance();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
        
        
        case '12':
        var string=readlinesync.question("Enter a string");
        var result=access.permutation(string);
        console.log(result);
        ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
  
  
        case '13':
        access.stopWatch();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
  
  
        case '14':
        access.ticTacToe();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
  
  
        case '15':
        access.quadratic();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
  
  
        case '16':
        access.windChill();
        var ch=readlinesync.question("Do u want to continue Y/N:");
        if(ch=='Y' || ch=='y'){
            flag=true;
        }
        else{
        flag=false;
        }
        break;
  
  
        default:
        console.log('default.');
        break;
    }
}
