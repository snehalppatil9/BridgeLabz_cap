var readlinesync = require('readline-sync');
module.exports =
{

//User Input and Replace String Template “Hello <<UserName>>, How are you?”

stringReplace() {
	var start = 0, end = 0;
	var str1 = "";
	var str = "Hello <<UserName>>,How are u?";
	var name = readlinesync.question("Enter ur name:");
	if(isNaN(name))
	{
		
	var len = name.length;
	if (len <= 3) {
	for (var i = 0; i < str.length; i++) {
	if ((str.charAt(i) != '<') && start == 0) {
		str1 = str1 + str.charAt(i);
	}
	else if (str.charAt(i) == '<' && start == 0) {
		str1 = str1 + name;
		start = 1;
	}
	else if (str.charAt(i) == '>') {
		end = 1;
	}
	else if (end == 1 && str.charAt(i) != '>') {
		str1 = str1 + str.charAt(i);
	}
	}
   //var str1 =str.replace("<<UserName>>",name );
	console.log(str1);
	}
	else {
	console.log("please enter valid username");
	}
}

else{
	console.log("Enter only string value.");
	
}
},


//Flip Coin and print percentage of Heads and Tails

flipCoin() {
    var head = 0, tail = 0;
	var n = readlinesync.questionInt("Enter the number of times to Flip Coin....");
	var r = require('random-number');
	for (var i = 0; i < n; i++) {
		var size = r();
	    console.log(size);
		if (size < 0.5) {
			head++;
		}
		else {
		    tail++;
		}
	}
	console.log("Heads:" + head);
	console.log("Tails:" + tail);
	var perhead = (head * 100 / n);
	var pertail = (tail * 100 / n);
	console.log("percentage of Heads vs tail:" + perhead);
	console.log("percentage of Tails vs head:" + pertail);
},

//Leap Year

leapYear() {
	var year, length = 0, temp = 1;
	var year = readlinesync.question("enter year");
	/*
	while(temp<=year) {
		length++;
		temp*=10;
	}
	if(length==4) */
	var n = year.length;
	if (n == 4) {
	if (year % 100 != 0 && year % 4 == 0 || year % 400 == 0) {
		console.log("year is leap");
	}
	else {
		console.log("year is not leap");
	}
	}
	else {
		console.log("enter 4 digit number");
	}
},

//Power of 2
powerOf2() {
	var num = readlinesync.question("enter the number:");
	if (num > 0 && num < 31) {
	for (var i = 0; i <= num; i++) {
		var pow1 = Math.pow(2, i);
		console.log("2^" + i + "=" + pow1);
	}
	}
	else {
		console.log("Invalid input");
	}
/*
	console.log(pow);
	while(num!=0)
	{
	pow=pow*2;
	num--;
	console.log(pow);
	}*/
},

//Harmonic Number

harmonicNumber() {
	var result = 0;
	var n = readlinesync.question("Enter the number:");
	for (var i = 1; i <= n; i++) {
	    result = result + (1 / i);
	}
	console.log(result);
},

//Computes the prime factorization of N

factors() {
	function isPrime(n) {
	for (var i = 2; i <= n / 2; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
	}

	function primeFactors(n) {
	for (var i = 2; i * i < n; i++) {
	var t = n % i;
		if (t == 0) {
			if (isPrime(i))
	    		console.log(i + " ");
		}
	}
	}

	var num = readlinesync.question("enter no to find prime factors");
	console.log("prime factors are ");
	primeFactors(num);
},

//Simulates a gambler\
gambler() {
	var stake, goal, trials;
	var wins = 0, lose = 0;
	var stake = readlinesync.question("Enter ur stake:");
	var goal = readlinesync.question("Enter ur goal:");
	var trials = readlinesync.question("Enter how many times u play:");
	for (var i = 0; i < trials; i++) {
	var cash = stake;
	var r = Math.random();
	console.log(r);
    	while (cash > 0 && cash != goal) {
			if (r < 0.5) {
	 		cash++;
			}
			else {
			cash--;
			}
			if (cash == goal) {
			wins++;
			}
			lose = trials - wins;
			}
	}
	console.log("you win game:" + wins);
	console.log("you lose game:" + lose);
	var perwins = (wins * 100 / trials);
	console.log("percentage of wins:" + perwins);
	var perlose = (lose * 100 / trials);
	console.log("percentage of lose:" + perlose);
},

//Given N distinct Coupon Numbers
couponNum() {
	var n = readlinesync.questionInt("Enter the number:");
	var n1;
	var arr = [];
	for (var i = 1; i <= n; i++) {
		var r = Math.random();
		n1 = r;
	//arr[i]=n1;
	//console.log("arr["+i+"]"+"="+n1);
    	if (arr[i] == n1) {
			console.log();
		}
		else {
			console.log(n1);
		}
	}
},


//A library for reading in 2D arrays 
array2D() {
	var m = readlinesync.question("enter the column size:");
	var n = readlinesync.question("enter the row size:");
	var arr = [];
	for (var i = 0; i < n; ++i) {
		var columns = [];
		for (var j = 0; j < m; ++j) {
			columns[j] = readlinesync.question();
		}
	arr[i] = columns;
	}
	console.log(arr);
},

//Sum of three Integer adds to ZERO
sum3Int() {
    var n = readlinesync.question("Enter the number:");
	var arr = [];
	for (var i = 0; i < n; i++) {
	arr[i] = readlinesync.question();
	}
	//console.log(arr);
	for (var i = 0; i < n - 2; i++) {
		for (var j = i + 1; j < n - 1; j++) {
			for (var k = i + 2; k < n; k++) {
				var sum = Math.round(arr[i]) + Math.round(arr[j]) + Math.round(arr[k]);
				//console.log(sum);
				if (sum == 0) {
					console.log(Math.round(arr[i]) + "," + Math.round(arr[j]) + "," + Math.round(arr[k]));
				}
			}
		}
	}
},

//takes two integer arguments x and y and prints the Euclidean distance
distance() {
	var x, y;
	var x = readlinesync.question("Enter the first points:");
	var y = readlinesync.question("Enter the second points:");
	var x1 = Math.pow(x, 2);
	var y1 = Math.pow(y, 2);
	var distance = Math.sqrt(x1 + y1);
	console.log("Euclidean Distance is:" + distance);
},

//static functions to return all permutation of a String using iterative method and Recursion method.
permutation(string1) {
	try {
	var res = [];
	if (string1.length === 1) {
		res.push(string1);
		return res;
	}
	for (var i = 0; i < string1.length; i++) {
		var firstChar = string1[i];
		//console.log(firstChar);
		
		var charsLeft = string1.substring(0, i) + string1.substring(i + 1);
		//console.log(charsLeft);
		
		var innerPermutations = this.permutation(charsLeft);
		//console.log(innerPermutations);
		
		for (var j = 0; j < innerPermutations.length; j++) {
	     	res.push(firstChar + innerPermutations[j]);
		}
	}
	return res;
	}
	catch (e) {
		console.log(e.message);
	}
},


//Simulate Stopwatch Program
stopWatch() {
	var ch = readlinesync.questionInt("Enter choice:");
	function start() {
		var date = new Date();
		start = date.getTime();
		console.log(start);
	}
	function stop() {
		var date1 = new Date();
		stop = date1.getTime();
		console.log(stop);
	}
	if (ch == 1) {
		start();
		var ch = readlinesync.questionInt("Enter choice:");
		if (ch == 2)
			stop();
			var elapsed = stop - start;
			console.log(Math.round(elapsed));
	}
},

//Cross Game or Tic­Tac­Toe Game
ticTacToe() 
{
			/*display();
			function display() {
				var arr = [];
				var x = 0;
				for (let i = 0; i < 3; i++) {
					arr.push([]);
					for (let j = 0; j < 3; j++) {
						arr[i][j] = x;
						//console.log(i+" "+j+" "+arr[i][j]);
						var turn=console.log("Enter a turn:");
						x++;
					}
				}

				console.log(arr);
			}*/
	var flag = false;
	var arr = intializeGame();
	console.log("Player 1 : Computer, Symbole : O");
	console.log("Player 2 : You, Symbole : x");
	
	var count = 1;
	while (count <= 9) {
		arr = ComputerPlayer(arr);
		count++;
	while (count > 4) {
		flag = check(arr);
		break;
	}
	if (flag) {
		console.log("Computer is the winner. Better luck next time");
		break;
		}
	else if (count == 8) {
		console.log("Draw match.. Try next!");
		break;
	}
	arr = userPlayer(arr);
	while (count > 4) {
		flag = check(arr);
		break;
	}
	if (flag) {
		console.log("Gosh!.. I knew it. You are the winner");
		break;
	}
		count++;
	}
	console.log("Game end");


	function intializeGame() {
		var game = [];
		for (let i = 0; i <= 2; i++) {
			game.push([]);
			for (let j = 0; j <= 2; j++)
				game[i][j] = '-';
		}
		return game;
	}

function random() {
	var value = Math.floor(Math.random() * 3);
	console.log(value + 1);
	return value;
}

function mark(game, x, y, value) {
	if (game[x][y] == '-')
		game[x][y] = value;
	for (let i = 0; i <= 2; i++) {
		var print = [];
		for (let j = 0; j <= 2; j++)
			print[j] = game[i][j];
		console.log(print);
	}
	return game;
}

function ComputerPlayer(game) {
	var arr;
	var flag = false;
	while (flag == false) {
		var x = random();
		var y = random();
		if (game[x][y] == '-') {
			arr = mark(game, x, y, 'O');
			flag = true;
		}
	}
	return game;
}

function userPlayer(game) {
	var flag = false;
	while (flag == false) {
		console.log("Enter the row value:");
		let x = readlinesync.questionInt('Enter the value of x within 1,2,3 : ') - 1;
		let y = readlinesync.questionInt('Enter the value of y within 1,2,3 : ') - 1;
		if (game[x][y] == '-') {
			mark(game, x, y, 'X');
			flag = true;
		}
		else
			console.log("Please enter the correct choice");
	}
	return game;
}

function check(game) {
	for (let i = 0; i <= 2; i++) {
		if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
			if (game[i][0] == 'O' || game[i][0] == 'X') {
				return true;
			}
		}
		if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
			if (game[0][i] == 'O' || game[0][i] == 'X') {
				return true;
			}
		}
	}
	var k = 0, l = 0;
	if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
		if (game[0][0] == 'O' || game[0][0] == 'X') {
			return true;
		}
	}
	if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
		if (game[0][0] == 'O' || game[0][0] == 'X') {
			return true;
		}
	}
	return false;
}
},


//find the roots of the equation
quadratic(){
var a=readlinesync.question("Enter the value of a:");
var b=readlinesync.question("Enter the value of b:");
var c=readlinesync.question("Enter the value of c:");
var delta=Math.pow(b,2)-4*a*c;
var root1=(-b+Math.sqrt(delta)/(2*a*c));
console.log("Root1 of x:"+root1);
var root2=(-b-Math.sqrt(delta)/(2*a*c));
console.log("Root2 of x:"+root2);
},

//Write a program WindChill.java that takes two double command­line arguments t and v
		
windChill() {
	var temp = readlinesync.question("Enter the Temperture:");
	var vel = readlinesync.question("Enter the Wind Speed:");
	if (!(temp > 50 || vel > 120 || vel < 3)) {
		var a = 35.74;
	    var b = 0.6215 * temp;
		var c = ((0.4275 * temp) - 35.75);
		var d = (Math.pow(vel, 0.16));
		var e = c * d;
		var wc = a + b + e;
		console.log(wc);
	}
	else {
		console.log("temp must be less than 50 and v is in between 3 to 120");	
	}
  }
}

