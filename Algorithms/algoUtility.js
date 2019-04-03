var readlinesync = require('readline-sync');
module.exports =
{

//An Anagram Detection Example

Anagram(str1, str2) {
    var n1, n2;
    n1 = str1.length;
    n2 = str2.length;
    if (n1 != n2) {
      console.log("Enter valid string");
      return true;
    }
    else {
        str11 = str1.split('');
        str11.sort();
        
        console.log(str11);
        str12 = str2.split('');
        str12.sort();
      
        console.log(str12);
        var str13 = "";
        var str14 = "";
        for (var i = 0; i < str11.length; i++) {
            str13 = str13 + str11[i];
            str14 = str14 + str12[i];
        }
        //console.log(str13);
        //console.log(str14);
        if (str13 === str14) {
           //console.log("string is anagram");
           return true;
        }
        else {
            //console.log("string is not anagram");
            return false;
        }
    }
},

//Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.
primeNum() {
    for (var i = 1; i <= 1000; i++) {
    var k = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                k = 1;
                break;
            }
        }
    if (k == 0) {
       console.log(i);
    }
    }
},

//Extend the above program to find the prime numbers that are Anagram and Palindrome
anaPali() {
    AnagramPalin();
    function checkPrime(num) {
    if (num == 0 || num == 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
    }

    function primePalindrome(i) {
        var rem, rev = 0;
        var sum = 0;
        temp = i;
        while (i > 0) {
            rem = i % 10;
            rev = rev * 10 + rem;
            i = Math.floor(i / 10);
        }
        if (temp == rev) {
           console.log(rev);
           return true;
        }
        else {
           return false;
        }
        }
        
        function anagram(s1, s2) {
           //var a=s1.length;
             if (s1.length != s2.length) {
             result = false;
        }
         var string1 = s1.toString().split("").sort().join("");
         var string2 = s2.toString().split("").sort().join("");
         result = (string1 === string2);
         if (result == true) {
           return true;
          }
         else {
           return false;
         }
        }

    function AnagramPalin() {
        var a = []
        var n = readlinesync.question("enter a range:");
        for (let i = 2; i < n; i++) {
            if (checkPrime(i)) {
             a.push(i);
            }
        }
        // console.log(a);
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j < a.length; j++) {
                if(anagram(a[i],a[j])){
                 console.log(a[i] + " and " + a[j] + " are anagram");
                 if (primePalindrome(a[i])){
                    console.log(a[i] + "  is palindrome");
                 }
                 if(primePalindrome(a[j])) {
                    console.log(a[i] + "  is palindrome");
                 }
              }
            }
        }
   }

},

//Insertion Sort

insertion(array) {
    //console.log(array);
    for (var i = 0; i < array.length; i++) {
        let key = array[i];
        j = i - 1;
        while (j > -1 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    //console.log("Insertion Sort:" + array);
    return array;
},


//Bubble Sort
bubble(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var temp1=parseInt(array[i]);
            var temp2=parseInt(array[j]);
            if (temp1 > temp2) {
                var temp;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        
    }
    //console.log("Bubble Sort:" + array);
    return array;
},

//Merge Sort
merge(array) {
    //console.log(array);
    var a3 = [];
    a3 = mergeSort1(array);
    console.log("Sorted array:");
    console.log(a3);
    // mergeSort();
    
    function mergeSort1(a2) {
        if (a2.length == 1) {
          return a2;
        }
    var mid = Math.floor(a2.length / 2);
    var left = a2.slice(0, mid);
    // console.log(left); 
    var right = a2.slice(mid);
    // console.log(right); 
    return merge1(mergeSort1(left), mergeSort1(right));
    }

    function merge1(left, right) {
        var result = [];
        var left1 = 0;
        var right1 = 0;
        while (left1 < left.length && right1 < right.length) {
            if (left[left1] < right[right1]) {
                result.push(left[left1]);
                left1++;
            }
            else {
               result.push(right[right1]);
               right1++;
            }
        }
        return result.concat(left.slice(left1)).concat(right.slice(right1));
    }
},

//Binary Search


binary(array, search, num) {
    var left = 0;
    var right = array.length - 1;
    var mid = Math.floor((right - left) / 2);
    var result = 0;
    while (left <= right) {
        if (search < array[mid]) {
           right = mid - 1;
        }
        else if (search > array[mid]) {
           left = mid + 1;
        }
        else {
            result = 1;
            break;
        }
    }
    if (result == 1) {
      console.log("Element found");
    }
    else {
      console.log("Element not found");
    }
},

//Find the Fewest Notes to be returned for Vending Machine

vendingMc() {
    var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
    var total = 0, I = 0;
    var n = notes.length;
    var value = readlinesync.question("Enter the amount :");
    Notes(value);
    function Notes(value) {
      if (Math.floor(value / notes[I] != 0)) {
           total = total + Math.floor((value / notes[I]));
           //console.log("total notes :" + total);
           console.log(notes[I] + "rs notes :" + Math.floor(value / notes[I]));
            value = value % notes[I];
      }
      I++;
      if (value == 0) {
        console.log("total notes :" + total);
        
      }

    Notes(value);
    }
},

//dayOfWeek static function that takes a date as input and prints the day of the week that date

Calender(d, m, y) {
    var y0 = y - Math.floor((14 - m) / 12);
    var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
    var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
    var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;
    console.log(d0);

},

//temperaturConversion static function, given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa


TempConversion(F, C) {
    console.log("Celsius to Fahrenheit:");
    var f = (C * (9 / 5)) + 32;
    console.log(f);
    console.log("Fahrenheit to Celsius:");
    var c = (F - 32) * (5 / 9);
    console.log(c);
},

//to calculate monthlyPayment that reads in three arguments P, Y, and R


MonthlyPayment(P, Y, R) {
    var n = 12 * Y;
    var r = R / (12 * 100);
    var dr = 1 - Math.pow(1 + r, (-n));
    var nr = P * r;
    var payment = nr / dr;
    console.log(payment);
},

// to compute the square root of a nonnegative number


SqrtRoot(c) {
    var t = c;
    var epsilon = 1e-15;
        while (Math.abs(t - (c / t)) > epsilon * t) {
           var t = (c / t + t) / 2;
        }
        console.log(t);
},

//toBinary that outputs the binary (base 2) representation of the decimal number typed as the input.
//i. Swap nibbles and find the new number.
//ii. Find the resultant number is the number is a power of 2.


binaryCon(n) {
var bin = [];
    while (n != 0) {
       bin = (n % 2) + bin;
       //console.log(bin);
       n = Math.floor(n / 2);
    }
    while (bin.length<8) {
        bin = 0 + bin;
    }
    console.log(bin);
    this.BinaryNibble(bin);
},

BinaryNibble(bin){
    var bin1=[];
    bin1=bin.substring(4,8)+bin.substring(0,4)
    console.log(bin1);
    var digit = parseInt(bin1, 2);
    console.log(digit);
    if (powerOf2(digit)){
        console.log("its power of 2");
    }
    else{
        console.log("not power of 2");
    }  
          
    function powerOf2(digit){
        var i=0;
        while(temp<digit){
           if (temp == digit) {
               return true;
           }
           i++;
        var temp=Math.pow(2,i);
        }
        return false;
    }
        
},

//Question to find your number

findNumber(n) {
    var low = 0;
    var high = n -1;
    while (low != high) {
        var mid = Math.floor((low+high) / 2);
        //console.log(mid);         
        console.log("enter 1 if no is between " + low + " - " + mid + "\nEnter 2 if no is between "
             + (mid + 1) + " - " + high);
        var c = readlinesync.question();
        if (c == 1) {
           high = mid;
        }
        else {
           low = mid + 1;
        }
                
    }
    console.log(low);
},


// To the Utility Class write the following static methods


//  binarySearch method for integer
start(){
    var date=new Date();
    var start=date.getTime();
    return start;
},

stop(){
    var date1=new Date();
    var stop=date1.getTime();
    return stop;
},
binaryInt()
{        
    var num1=readlinesync.question("Enter the size of array");
    var array=[];
    console.log("Enter elements of array:");
    for(var i=0;i<num1;i++) {
    var ele=readlinesync.questionInt();
    array[i]=ele;
    }
    try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
    
    } try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }
     try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }
    var key=readlinesync.questionInt("Enter the key element ");
     try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();t = 0;
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }
    var first = 0;
    try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }
    var last= parseInt(array.length-1);
    try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  } 
    var flag = 0;
    try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }
    var arrtime=[];  
    try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }     
    while(first<=last)
      try {
    var take = require("util");
    var primeCheck = require("../utility/primeCheck");
    var stackList = require("../Data_structure/implementation/stackList");
    var arr = [];
    var stack = new stackList.Stacks();
    for (let i = 0; i <= 1000; i++) {
      if (primeCheck.isPrime(i)){
          if(i>10){
            arr.push(i);
          }

      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (primeCheck.isAnagram(arr[i], arr[j])) {
          stack.push(Number(arr[i]));
          stack.push(Number(arr[j]));
        }
      }
    }
    var result = stack.print();
    console.log("Anagrams which are prime in reverse order :");
    console.log(result + "\n");
  } catch (error) {
    console.log(error.message);
  }
    {
        var middledle=Math.floor((first+last)/2);
        if(key==array[middledle])
        {
            flag=1;
            break;
        }
        else if(key>array[middledle])
        {
        first=middledle+1;
        }
        else if(key<array[middledle])
        {
         last=middledle-1;
        }
    }
    if(flag==1)
    {
        console.log("Key element found at index :"+middledle);
    }   
    else
    {
        console.log("Key element not found...!");
    }
   
    
    
}, 


 // binarySearch method for String

 binaryString()
{
    var num1=readlinesync.question("Enter the size of array");
    var array=[];
    console.log("Enter elements of array:");
    for(var i=0;i<num1;i++) {
    var ele=readlinesync.question();
    if(isNaN(ele)){
        array[i]=ele ;      
    }
    else{
        console.log("Enter alphabets.");
        
    }
    }
   
    var key =readlinesync.question("Enter the word to be searched = ");
    
    var first = 0;
    var last = parseInt(array.length-1);
    var flag = 0;

    while(first<=last)
    {
        var middledle=Math.floor((first+last)/2);
        if(key==array[middledle])
        {
            flag=1;
            break;
        }
        else if(key>array[middledle])
        {
        first=middledle+1;
        }
        else if(key<array[middledle])
        {
         last=middledle-1;
        }
    }
    if(flag==1)
    {
        console.log("Key element found at index :"+middledle);
    }   
    else
    {
        console.log("Key element not found...!");
    }
    
},


//  insertionSort method for integer

InsertionInt() 
{
    var size=readlinesync.question("Enter size of array:")
    
    var array = [];
    for (i = 0; i < size; i++) 
    {
        var elements =readlinesync.questionInt("Enter the elements in the array:")
        array[i] = elements;
    }
    console.log("Before Insertion Sort :" + array);
    

    var count = array.length;
    var key, i, j;
    
    for (i = 1; i < count; i++) 
    {
        key = array[i];
        j = i - 1;

        while ((j >= 0) && (array[j] > key)) 
        {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
        console.log(array);
    }
    console.log("After insertion Sort:"+array);
    
   
},


// insertionSort method for String

InsertionString() 
{
    var size=readlinesync.question("Enter size of array:")
    
    var array = [];
    for (i = 0; i < size; i++) 
    {
        var elements=readlinesync.question("Enter the elements in the array:")
        if (isNaN(elements))
            array[i] = elements;
        else
            console.log("Please enter only alphabets");
    }
    console.log("Before Insertion Sort :" + array);

    var count = array.length;
    var key, i, j;
    

    for (i = 1; i < count; i++) 
    {
        key = array[i];
        j = i - 1;

        while ((j >= 0) && (array[j] > key)) 
        {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
        console.log(array);
        
    }
    console.log("After Insertion Sort :" + array);
  
},

// bubbleSort method for integer
BubbleInt() 
{
    var num1=readlinesync.question("Enter the size of array");
    var array=[];
    console.log("Enter elements of array:");
    for(var i=0;i<num1;i++) {
    var ele=readlinesync.questionInt();
    array[i]=ele ;      
    } 
   
    var count = array.length;
    var i, j, temp;

    for (i = 0; i < count; i++) 
    {
        for (j = i + 1; j < count; j++) 
        {
            if (array[i] > array[j]) 
            {
                temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            }

        }
        console.log(array);
    }
    console.log("After bubble Sort");
    console.log(array);  
   
},

// bubbleSort method for String

BubbleString(array) 
{
    var num1=readlinesync.question("Enter the size of array");
    var array=[];
    console.log("Enter elements of array:");
    for(var i=0;i<num1;i++) {
    var ele=readlinesync.question();
    if(isNaN(ele)){
        array[i]=ele ;      
    }
    else{
        console.log("Enter alphabets.");
        
    }
    }
  
    var count = array.length;
    var i, j, temp;

    for (i = 0; i < count; i++) 
    {
        for (j = i + 1; j < count; j++) 
        {
            if (array[i] > array[j]) 
            {
                temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            }
        }
        console.log(array);
    }
    console.log("After bubble Sort");
    console.log(array);   
   
}
}




