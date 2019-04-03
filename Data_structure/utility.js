/* all require files*/

var read = require('readline-sync');
var util = require('util')
var stacklist = require('../Data_structure/implementation/stackList')
var binaryTree=require('./implementation/binaryTree')
var queuelist=require('../Data_structure/implementation/queuelist')
var readwriteutility = require('../utility/readwriteutility');
var primeCheck=require('../utility/primeCheck');
var linkList = require('../Data_structure/implementation/LinkedList');
var bubbleSort=require('../Algorithms/algoUtility');
//object of linklist
var linklist = new linkList.LinkedList();

module.exports={

orderedList(){
      
    try {
        var stack=new stacklist.Stack();
        var data=readwriteutility.fileRead('sample1.txt')
        for (let index = 0; index < data.length; index++) {
    
            stack.push(parseInt(data[index]));
        }
        console.log("Before the sorting Element :" + data)
    
        data = bubbleSort.bubble(data);
    
        //console.log(data);
    
        for (let index = 0; index < data.length; index++)
    
            linklist.add(data[index]);
    
        var display = linklist.displayList();
    
        console.log("Arrange the element in Link List :" + display);
    
        var num = read.question("Enter the data you want to search :");
    
        var check = linklist.search(num);//calling searching function
        console.log(check);
    
        if (check) {
            linklist.removeEle(num);
        }
        else {
            linklist.addToPos(num);

        }
        var display = linklist.displayList();
        //display the elemets using linklist implementation
    
        console.log(display);
    
        readwriteutility.fileWrite('sample1.txt', display)
        //writting into the file
    
    } catch (err) {
        
        console.error(err);
    }
},
    
unorderedList(){
    
    
    try {
        var name = read.question("Enter the data you want to search ");
        if(isNaN(name)){
        var data =readwriteutility.fileRead('sample.txt');
        for (var i = 0; i < data.length; i++) {
            linklist.add(data[i]);
        }
        var display = linklist.displayList();
        console.log(display);
    
        var search = linklist.search(name);
        console.log(search);
    
        if (search) {
            linklist.removeEle(name);
        }
        else {
            linklist.add(name);
        }
    
        var display = linklist.displayList();
        console.log(display);
        readwriteutility.fileWrite('sample.txt', display)
    }
    else{
        console.log("Enter only valid strings......do not enter numbers...");
        
    }
    
    } catch (err) {
        console.error(err);
    }
    },
    

balancedParenthesis(){
try {
         
          var str = read.question("Enter the mathematical expression with parantheses : ");
          
          var ch;
          var stack=new stacklist.Stack;
          for (let i = 0; i < str.length; i++) {
              ch = str.charAt(i);
              if (ch == '(' || ch == '{' || ch == '[') {
                  stack.push(ch);
              }
              else {
                  switch (ch) {
                      case ')': if (stack.pop() != '(') {
                          return false;
                      }
                          break;
                      case '}': if (stack.pop() != '{') {
                          return false;
                      }
                          break;
                      case ']': if (stack.pop() != '[') {
                          return false;
                      }
                          break;
                  }
              }
          }
       
          if (stack.size == 0) {
              return true;
          }
          return false;
       
     
  } catch (err) {
      console.log(err);
  }
  
  
},


cashCounter(){
    
    function Queue() {
        var require = new queuelist.Queue;
        var totalbankcash = 100000;
        var flag = true
        var people = read.question("Enter the total number of people : ");
        var cash = totalbankcash;
        for (var i = 1; i <= people; i++) {
            var choice = read.question(" 1. To deposit the cash \n 2. To withdraw the cash \n 3. Exit \n");
            switch (choice) {
                case '1':
                    var amount = read.question("Enter total amount do you want to Deposit : ");
                    if (!isNaN(amount)) {
                        var put = require.enque(Number(+amount));
                        flag = true;
                        cash = Number(cash) + Number(amount);
                        console.log("After deposit the total amount in the bank : " + cash);
                    } else {
                        console.log('Please enter number only!');
                    }
                    break;
                case '2':
                    if (!isNaN(amount)) {
                        var amount = read.questionInt("Enter total amount do you want to Withdraw : ");
                        var get = require.deque(Number(-amount));
                        flag = true;
                        cash = Number(cash) - Number(amount);
                        console.log("After withdraw the total amount in the bank: " + cash);
                    } else {
                        console.log('Please enter number only!');
                    }
                    break;
                case '3':
                    return false;
                default:
                    console.log('Please enter correct choice!');
                    break;
            }
        }
    }
    Queue();
},



palindromeCheck(){

var d =new queuelist.Dequeue;
        var word = read.question("Enter the string = ");
        var result = d.palindromeChecker(word);
        if (result == false) {
            console.log("String is not a palindrome");
        }
        else {
            console.log("String is Palindrome");
        }
    
},   


dayOfWeek(d, m, y) {
    var y0 = y - Math.floor((14 - m) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
    var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
    return d0;
},


calender() {
  
var month = +process.argv[2];
var year = +process.argv[3];
      // var month =read.question("Enter Month:");
      // var year = read.question("Enter year");
      var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var a = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var day = this.dayOfWeek(1, month, year);
      console.log(day);
      var leap = binaryTree.findLeapYear(year);
      if (leap = true) {
          dates[2] = 29;
       }
     util.print(a[month-1]+" "+year);
      console.log();
      for (var i = 0; i < week.length; i++) {
          util.print(week[i] + "  ");
       }
      console.log();
      for (var i = 0; i < (day * 5); i++) {
          util.print(" ");
       }
  
      for (var i = 1; i <= dates[month]; i++) {
          if (i < 10) {
              util.print(" " + i + "   ");
           }
  
          if (i > 9) {
              util.print("" + i + "   ")
           }
          if ((i + day) % 7 == 0) {
              console.log();
           }
      }
      console.log("\n\n");
},


calenderStack(){
   try{
        var month = +process.argv[2];
        var year = +process.argv[3];
        var answer = this.dayOfWeek(Number(1), Number(month), Number(year));
        console.log(answer);
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var months=["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];
        var leap = binaryTree.findLeapYear(year);
        if (leap = true) {
            dates[2] = 29;
         }
        var dayQue=new queuelist.Queue;
        var dateQue=new queuelist.Queue;
        var stk=new stacklist.Stack;
        var stk1=new stacklist.Stack;
       for(let i=0; i<7;i++)
         {
            dayQue.enque(week[i]);
            stk.push(dayQue.deque());
         }
        for (let j=1;j<=dates[month]; j++)
         {
            dateQue.enque(j);
            stk1.push(dateQue.deque());
         }
            var rstk = stk.reversStack();
            var rstk1 = stk1.reversStack();
            for (let k = 0; k < 7; k++) {
                util.print(" " + rstk.pop());
             }
            console.log();
            for (let j = 0; j < (answer * 4 + 2); j++) {
                util.print(" ");
             }
            for (let j = 1; j <= dates[month]; j++) {
                var ch = rstk1.pop();
                if (ch < 10)
                util.print(ch, "   ");
                else {
                    util.print(ch, "  ");
                 }
                if ((answer + ch) % 7 == 0) {
                    console.log();
                    util.print(" ");
                 }
            }
    console.log("\n\n\n");
    }
    catch(err){
      console.log(err);
      
    }
    
},
  
  


weekDays(){
    try{
    
    var M = require('./implementation/binaryTree');
    var weekdays = new queuelist.Queue;
    var dateq = new queuelist.Queue;
    var month = read.questionInt("enter the month :");
    var year = read.questionInt("enter the year :");
    var d = this.dayOfWeek(1, month, year);
    console.log(d);
    var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
    if (d <= res.length) {
        console.log("The day falls on :" + res[d])
    }
    var days = weekdays.monthof(month);
    var t1 = M.findLeapYear(year);
    if (t1) {
        if (month == 2) {
            days = 29;
        }
    }
    for (let i = 0; i < res.length; i++) {
        weekdays.enque(res[i]);
    }
    for (let i = 1; i <= days; i++) {
        dateq.enque(i);
    }
    for (let i = 0; i < res.length; i++) {
        util.print(weekdays.deque() + "  ");
    }
    console.log()
    for (let i = 0; i < (d * 5); i++) {
        util.print(" ");
    }
    for (let i = 1; i <= days; i++) {
        if (i < 10) {
            util.print(" " + dateq.deque() + "   ");
        }
        if (i > 9) {
            util.print("" + dateq.deque() + "   ");
        }
        if ((d + i) % 7 == 0) {
            console.log();
        }
    }
    
    }
    catch(err){
      console.error(err);
    }
},
    
    

primeStack()
{

try {
   
    var arr = [];
    var stack = new stacklist.StackCalender();
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
    console.log("Anagrams which are prime in reverse order :");
    var result=stack.reversStack(arr);
   
    console.log(result);
    
  }
  
  catch (error) {
    console.log(error.message);
  }
},


primeQueue(){
    try {
        var arr = [];
        var queue = new queuelist.Queue();
        for (let i = 0; i < 1000; i++) {
          if (primeCheck.isPrime(i))
          {
            if(i>10){
              arr.push(i);
            }
          }
         
         }
        
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (primeCheck.isAnagram(arr[i], arr[j])) {          
              queue.enque(Number(arr[i]));
              queue.enque(Number(arr[j]));

            }
          }
        }   
        console.log(" Anagrams in the range 0 to 1000 are:\n" + arr);
      } 
      catch (error) {
        console.log(error.message);
      }
},


primeRange(){

 try {
  
 
  var array = [
    ["0-100 "],
    ["100-200  "],
    ["200-300 "],
    ["300-400 "],
    ["400-500 "],
    ["500-600 "],
    ["600-700 "],
    ["700-800 "],
    ["800-900 "],
    ["900-1000 "]
  ];
  var i = 0;
  var j = 1;
  var range = 100;
  var arr = [];
  var arr1 = [];
  for (let prime = 2; prime <= 1000; prime++) {
    if (primeCheck.isPrime(prime)) {
      if (prime <= range) {
        var a = "" + prime;
        var b = a.split("");
        b.sort();  
        var v = "";
        for (let i = 0; i < b.length; i++) {
          v = v + b[i];
         }
        if (!arr.includes(v)) {
          arr.push(v);
          array[i][j] = prime;
          j++;
         }
      } 
      else {
        var a1 = "" + prime;
        var b1 = a1.split("");
        b1.sort();
        var v1 = "";
        for (let i = 0; i < b1.length; i++) {
          v1 = v1 + b[i];
         }
        if (!arr1.includes(v1)) {
          arr1.push(v1);
          j = 1;
          range = range + 100;
          i++;
          array[i][j] = prime;
         }
      }
    }
  }
  
  var arr = primeCheck.dArray();
  console.log("The prime numbers that are not Anagram present in the given range " );
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      util.print(array[i][j] + " ");
     }
    console.log();
   }
}
 catch (error) {
  console.log(error.message);
}
}

}