

module.exports = 
{

/***************************************** Linked List Implementation *******************************
        1. UnOrdered List
        2. Ordered List
**************************************** Linked List Implementation ********************************/
fileRead(path)
{
    /*A streaming implementation for working with File objects in the browser.
    Streams can be readable, writable, or both.*/

     /*
        1. UTF stands for Unicode Transformation Format. 
            The '8' means it uses 8-bit blocks to represent a character.
        2. The trim() function removes whitespace and other predefined characters 
            from both sides of a string.

    */
    var fileStream = require('fs');
    var fs = fileStream.readFileSync(path, 'utf8');
    var array = fs.trim().split(' ');
    //console.log('Total array =' +array);
    
    return array;
},

fileWrite(fileName, data)
{
 
    var fileStream = require('fs');
    fileStream.writeFile(fileName, data, function(error)
    {
        if(error)
        {
            return console.log(error); 
        }
    });
},

}
	
	
	

