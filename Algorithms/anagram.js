var readlinesync =require('readline-sync');
var access=require('./algoUtility')
module.exports=
{ 
detect() {
	var str1,str2;
	str1=readlinesync.question("Enter the string1:");
	str2=readlinesync.question("Enter the string2:");
	access.Anagram(str1,str2);
}
}