// required files
var readReplace=require('../utility/replaceFileUtility');
var read=require('readline-sync');
module.exports={
replaceFile(fileRead){
try{

// isNaN is used for the validation
var flag=true;
do{
    var name=read.question("Enter the name:");
    console.log();
    
    if(isNaN(name)){
        var fullName=read.question("Enter the full name:");
        console.log();

        var flag1=true;
        do{
        if(isNaN(fullName)){
            var num=read.question("Enter the Mobile Number:");
            console.log();

            var flag2=true;
                     
            do{
            // To check mobile length is 10-digit or not     
            if(num.length==10 && !isNaN(num)){
                var date=new Date();
                var day = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
                var replace = readReplace.replaceFile(name, fullName, num, day, fileRead)
                console.log(replace);
                flag2=false;
                flag1=false;
                flag=false;
                console.log();

                
            }
            
            else{
                console.log("Mobile Number Must be Number.........");
                console.log();

                flag2=false;
            }
       
        }while(flag2);
    }
    else{
            console.log("Enter only String Values.............");
            console.log();

            flag1=false;      
    }
  
    }while(flag1);
    }
    else{
        console.log(("Enter only String Values..........."));
        console.log();

        flag=false;
    }
}while(flag);


}catch(err){
    console.log(err);
    
}
}
}