/******************************************************************************
 *  Execution       : default node          : cmd> node replaceName.js
 *                      
 *  Purpose         : To print the Modified Message.
 * 
 *  @description    
 *  @file           : replaceName.js
 *  @overview       : To read in the following message: Hello <<name>>, We have your full name as 
 *                    <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let 
 *                    us know in case of any clarification Thank you BridgeLabz 01/01/2016. Use Regex 
 *                    to replace name, full name, Mobile#, and Date with proper value.
 *  @author         :  Snehal Patil<snehalppatil9@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/03/2019
 *
 ******************************************************************************/



var access=require('../Program2/replaceUtility');
try{

//reading the inventary JSON file

var fileStream=require('fs');
var fileRead=fileStream.readFileSync('replaceFile.txt','utf-8');
access.replaceFile(fileRead);
}
catch(err){
    console.log(err);
    
}