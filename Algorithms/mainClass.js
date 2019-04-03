var readlinesync =require('readline-sync');


console.log("1. An Anagram Detection Example\n2. Prime numbers.\n3. prime numbers that are Anagram and Palindrome");
console.log("4.Insertion Sort\n5. Bubble Sort\n6.Merge Sort\n7. Binary Search\n8. Vending Machine");
console.log("9. DayOfWeek\n10. Temperature Conversion\n11. Monthly Payment\n12. to compute the square root\n13. the binary (base 2) representation of the decimal number. ");
console.log("14.to find your number\n15.Swap nibbles & the number is a power of 2. ");
var flag=true;
while(flag){
    var opt=readlinesync.question("Enter ur choice:");
    switch(opt){
        case '1':
        var access = require('./anagram');
        access.detect();
        flag=false;
        break;
        
        case '2':
        var access1 = require('./primeNum');
        access1.find();
        flag=false;
        break;

        case '3':
        var access2 = require('./anagramPalim');
        access2.checkNum();
        flag=false;
        break;

        case '4':
        var access3 = require('./insertionSort');
        var num=readlinesync.question("Enter size of array:");
        access3.insertionSort(num);
        flag=false;
        break;

        case '5':
        var access4 = require('./bubbleSort');
        var num=readlinesync.questionInt("Enter size of array:");
        access4.bubbleSort(num);
        flag=false;
        break;

        case '6':
        var access5 = require('./mergeSort');
        var num=readlinesync.question("Enter size of array:");
        access5.mergeSort(num);
        flag=false;
        break;

        case '7':
        var access6 = require('./binarySort');
        var num=readlinesync.question("Enter size of array:");
        access6.binarySort(num);
        flag=false;
        break;

        case '8':
        var access7 = require('./algoUtility');
        access7.vendingMc();
        flag=false;
        break;
        
        case '9':
        var access8 = require('./dayOfWeek');
        access8.dayWeek();
        flag=false;
        break;

        case '10':
        var access9 = require('./tempConversion');
        access9.tempCon();
        flag=false;
        break;

        case '11':
        var access10 = require('./monthlyPayment');
        access10.MonthlyPayment();
        flag=false;
        break;

        case '12':
        var access11 = require('./Sqrt.js');
        access11.Sqrt();
        flag=false;
        break;

        case '13':
        var access12 = require('./toBinary');
        access12.toBinary();
        flag=false;
        break;

        case '14':
        var access13 = require('./findNum');
        access13.findNum();
        flag=false;
        break;

        case '15':
        var access14 = require('./Binary');
        access14.BinarySwap();
        flag=false;
        break;

       
        
        default:
        console.log('default.');
        break;
    }
}