var read = require('readline-sync');
var fileRead = require('fs');
class stockAccount {
    constructor() {

    }

    createAccount(objcust) {
        var flag = false;
        do {
            // To check name is string value or not
            var name = read.question("enter the name:");
            if (!isNaN(name)) {
                console.log("Please enter vaild name ! (only letters)");
            }
            else {
                flag = true;
                var object1 = objcust.customer;
                for (let i in object1) {
                    if (object1[i].name == name) {
                        console.log(" Exist");
                        flag = false;
                    }
                }
            }
        } while (!flag)

        var flag1 = true;
        do {
            // Math.random(id) returns the random id
            var id = Math.floor(Math.random(id) * 100);

            var shares = read.question("Enter how many shares you want to add:");
            console.log();

            if (!isNaN(shares)) {

                console.log(" Created ID is: " + id);
                console.log();
                /*  
                   @purpose : push the data into the file and print the information on terminal.
                */
                objcust.customer.push({
                    "name": name,
                    "id": id,
                    "share": shares
                })
                console.log("Customer information:");
                console.log();
                console.log(objcust.customer);
                console.log();

                // stringify is used to convert javascript object into string
                var data = fileRead.writeFileSync('customer.json', JSON.stringify(objcust));

                console.log("Account created Sucessfully.");
                flag1 = false;
            }
            else {
                console.log("Enter numbers only..........");
                flag1 = true;

            }

        } while (flag1);

    }







    buyShares(objcust, objcomp) {
        var flag = true;

        console.log(objcust);
        console.log();
        // store all the customer information in object variable
        var object = objcust.customer;
        do {
            var id1 = read.question("Enter Your ID:: ");
            console.log();
            if (!isNaN(id1)) {
                for (var i in object) {
                    if (object[i].id == id1) {
                        //indexOf() returns the position of the first occurrence of a specified value in a string.
                        var index = object.indexOf(object[i]);
                        var customerName = object[i].name;
                        console.log("Comapany Information");
                        console.log();
                        
                        console.log(objcomp);
                        var object1 = objcomp.company;
                        console.log();
                        
                        var sym = read.question("Enter Symbol of Company::  ");
                        console.log();
                        
                        if(isNaN(sym)){
                        for (let i in object1) {
                            if (object1[i].symbol == sym) {
                                console.log("See Company Detail!!!");
                                console.log();
                                
                                console.log(object1[i]);
                                console.log();
                                var name11 = object1[i].name;
                                var sym11 = object1[i].symbol;
                                var share = object1[i].share;
                                do {
                                    var num = read.questionInt("Enter number of Share You want to Buy::  ");
                                    
                                    if (num > share) {
                                        console.log("Please Enter Number of Share less than Company Share..")
                                    }
                                    else
                                        var flage = true;
                                
                                } while (!flage)

                                var p = " Customer Name is: " + customerName + "\r \n Company Name : " + name11 + " And Symbol is : " + sym11 + " \r \n And He/she Buy " + num + " Share"
                                console.log(p);
                                var n = parseInt(objcust.customer[index].share);
                                var n11 = parseInt(objcomp.company[i].share);
                                var number = parseInt(num);
                                var cusTotal = n + number;
                                var comToatal = n11 - number;
                                if (n11 > number) {
                                    objcust.customer[index].share = cusTotal;
                                    objcomp.company[i].share = comToatal;
                                    var x = fileRead.writeFileSync('customer.json', JSON.stringify(objcust));
                                    console.log(objcust);
                                    console.log();
                                    
                                    var y = fileRead.writeFileSync('company.json', JSON.stringify(objcomp));
                                    console.log(objcomp);
                                    console.log();
                                    

                                    var time = new Date();
                                    console.log("Time of Buying the Share is:: " + Math.floor(time.getSeconds()) + " sec")
                                    console.log();                                    
                                    console.log("Date of Buying the Share is:: " + Math.floor(time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear()));
                                    console.log();
                                    flag=false;
                                    flage=false;
                                    
                                }
                            }
                        }
                    }
                    else{
                        console.log("Symbol must be letter........");
                        flag=false;
                    }
                    }
                }
            }
            else {
                console.log("ID must be number...........");
                flag = true;
            }
        } while (flag);

    }
 
 
 
 
 
 
sellShares(objcust, objcomp) {
        var flag = true;

        console.log(objcust);
        var object = objcust.customer;
        do{
        var id1 = read.question("Enter Your ID:: ");
        if(!isNaN(id1)){
        for (let i in object) {
            if (object[i].id == id1) {
                var index = object.indexOf(object[i]);
                var customerName = object[i].name;
                console.log("    Comapany Information   ");
                console.log(objcomp);
                var object1 = objcomp.company;
                
                var sym = read.question("Enter Symbol of Company::  ");

                if(isNaN(sym)){
                for (let i in object1) {
                    if (object1[i].symbol == sym) {
                        console.log("See Company Detail!!!");
                        console.log(object1[i])
                        var name11 = object1[i].name;
                        var sym11 = object1[i].symbol;
                        var share = object1[i].share;

                        var num = read.question("Enter number of Share You want to Sell::  ");

                        var p = " Customer Name: " + customerName + "\r \n Company Name: " + name11 + " And  Symbol: " + sym11 + "  \r \n He  Sell " + num + "Share ";
                        console.log(p);



                        var n = parseInt(objcust.customer[index].share);
                        var n11 = parseInt(objcomp.company[i].share);
                        var number = parseInt(num);
                        var cusTotal = n - number;
                        var comToatal = n11 + number;
                        if (n11 > number) {
                            objcust.customer[index].share = cusTotal;
                            objcomp.company[i].share = comToatal;
                            var x = fileRead.writeFileSync('customer.json', JSON.stringify(objcust));
                            console.log(objcust);
                            var y = fileRead.writeFileSync('company.json', JSON.stringify(objcomp));
                            console.log(objcomp);

                            var time = new Date();
                            console.log("Time of Selling the Share is:: " + Math.floor(time.getHours()) + " sec");
                            console.log("Date of Selling the Share is:: " + Math.floor(time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear()));
                            flag=false;

                        }
                    }
                }
            }
            else{
                console.log("Symbol must be letter..........");
                
            }
            }
        }
    }
    else{
        console.log("ID must be Number...............");
        flag=true;
    }
    }while(flag);
    }

    print(objcust, objcomp) {
        console.log("Customer shares information :");
        console.log(objcust);
        console.log("Company shares information :");
        console.log(objcomp);
    }


}
module.exports = {
    stockAccount
}

