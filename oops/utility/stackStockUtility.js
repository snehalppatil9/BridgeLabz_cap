var read = require('readline-sync');

var file = require('fs');
var util11 = require('../../Data_structure/implementation/stackList')



class StockAccount {
    constructor() {

        this.stack1 = new util11.Stack();
        this.stack2 = new util11.Stack();
        this.id1;
        this.sym;
        this.time = new Date();

        this.d = (this.time.getDate()) + "/" + (this.time.getMonth() + 1) + "/" + (this.time.getFullYear());
        this.type = "Buy";
        this.count = 0
    }


    createAccount(obj1) {

        var flag = false;
        do {
            // To check name is string value or not
            var name = read.question("enter the name:");
            if (!isNaN(name)) {
                console.log("Please enter vaild name ! (only letters)");
            }
            else {
                flag = true;
                var object1 = obj1.customer;
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

            var id = Math.round(Math.random() * 100);
            var share = read.question("How many Share you want to Add::  ");
            if (!isNaN(share)) {
                console.log();
                console.log("Your Id is:: " + id);
                console.log();
                obj1.customer.push({
                    "name": name,
                    "id": id,
                    "share": share
                })
                console.log(obj1.customer);
                var data = file.writeFileSync('/home/admin9/Desktop/Bridgelabz/oops/Program5/customer.json', JSON.stringify(obj1))
                console.log("Account Created Sucessfully!!!!");
                flag1=false;
            }
            else {
                console.log("Share must be number.");
                flag1 = true;
            }
        } while(flag1);
    }

   
   
    buyShares(obj1, obj2, obj3) {


        var flag1 = true;
        console.log(obj1);
        var object = obj1.customer;

        do {

            this.id1 = read.question("Enter Your ID:: ");

            if (!isNaN(this.id1)) {
                for (var i in object) {
                    if (object[i].id == this.id1) {
                        var index = obj1.customer.indexOf(object[i]);
                        var customerName = object[i].name;
                        console.log();
                        console.log("******Comapany Information*****");
                        console.log();
                        console.log(obj2);
                        var object1 = obj2.company;

                        console.log();
                        this.sym = read.question("Enter Symbol of Company::  ");
                        if (isNaN(this.sym)) {
                            //this.stack1.push(sym);
                            console.log();
                            for (let i in object1) {
                                if (object1[i].symbol == this.sym) {
                                    console.log();
                                    console.log("See Company Detail!!!");
                                    console.log(object1[i])
                                    var name11 = object1[i].name;
                                    var sym11 = object1[i].symbol;
                                    var share = object1[i].share;

                                    console.log();
                                    var num = read.question("Enter number of Share You want to Buy::  ");
                                    if (!isNaN(num)) {
                                        if (num > share) {
                                            console.log("Please Enter Number of Share less than Company Share..")
                                            flag=true;
                                            }
                                            else{
                                            var p = " Customer Name is: " + customerName + "\r \n Company Name : " + name11 + " And Symbol is : " + sym11 + " \r \n And He/she Buy " + num + " Share"
                                            console.log(p);
                                            var n = parseInt(obj1.customer[index].share);
                                            var n11 = parseInt(obj2.company[i].share);
                                            var number = parseInt(num);
                                            var cusTotal = n + number;
                                            var comToatal = n11 - number;
                                            if (n11 > number) {
                                                obj1.customer[index].share = cusTotal;
                                                obj2.company[i].share = comToatal;
                                                var x = file.writeFileSync('/home/admin9/Desktop/Bridgelabz/oops/Program5/customer.json', JSON.stringify(obj1));
                                                var y = file.writeFileSync('/home/admin9/Desktop/Bridgelabz/oops/Program5/company.json', JSON.stringify(obj2));
                                                this.count++;



                                                var time = new Date();
                                                console.log()
                                                this.hms = (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
                                                console.log("Time of Buying the Share is:: " + this.hms)
                                                console.log()
                                                this.d = (time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear());
                                                console.log("Date of Buying the Share is:: " + this.d);

                                                console.log("Thank You for Buying!!!!! ");
                                                console.log()
                                                if (this.count > 0) {
                                                    console.log();
                                                    for (let i = this.count; i <= this.count; i++) {
                                                        //  var buy = "Buy"

                                                        obj3.transaction = {
                                                            symbol: this.sym,
                                                            customerId: this.id1,
                                                            type: this.type,
                                                            date: this.d
                                                        }
                                                        for (var key in obj3.transaction) {
                                                            this.stack1.push(obj3.transaction[key])
                                                        }
                                                        //obj3.transaction = this.stack1;
                                                        this.stack1.push(obj3.transaction)
                                                        console.log("Stack info")
                                                        console.log(obj3.transaction);
                                                        file.writeFileSync('stackStock.json', JSON.stringify(obj3.transaction))
                                                        //flag1=false;
                                                    }

                                                }


                                            }
                                        }
                                    }
                                    else {
                                        //console.log("share must be number............");
                                        
                                        flag1 = true;
                                    }
                                }

                                else{
                                    //console.log("Symbol does not exist..............");
                                    flag1=true;
                                }

                            }

                          
                        }
                        else {
                            console.log("Symbol must be alphabet.............");
                            flag1 = true;
                        }
                    }
                }
            }
            else {
                console.log("ID must be number.....");
                flag1 = true;
            }
            flag1=false;    
        } while (flag1);

    }




    sellShares(obj1, obj2) {
        var flag = false;

        console.log(obj1);
        var object = obj1.customer;

        var id1 = read.question("Enter Your ID:: ");

        for (let i in object) {
            if (object[i].id == id1) {
                var index = obj1.customer.indexOf(object[i]);
                var customerName = object[i].name;
                console.log();
                console.log("*************    Comapany Information   ***************");
                console.log();
                console.log(obj2);
                var object1 = obj2.company;
                console.log();
                var sym = read.question("Enter Symbol of Company::  ");
                this.stack2.push(sym);
                console.log();
                for (let i in object1) {
                    if (object1[i].symbol == sym) {
                        console.log("See Company Detail!!!");
                        console.log(object1[i])
                        var name11 = object1[i].name;
                        var sym11 = object1[i].symbol;
                        var share = object1[i].share;
                        var price = object1[i].price;

                        var num = read.question("Enter number of Share You want to Sell::  ");

                        var p = " Customer Name: " + customerName + "\r \n Company Name: " + name11 + " And  Symbol: " + sym11 + "  \r \n He/She  Sell " + num + "  Share ";
                        console.log(p);



                        var n = parseInt(obj1.customer[index].share);
                        var n11 = parseInt(obj2.company[i].share);
                        var number = parseInt(num);
                        var cusTotal = n - number;
                        var comToatal = n11 + number;
                        if (n11 > number) {
                            obj1.customer[index].share = cusTotal;
                            obj2.company[i].share = comToatal;
                            var x = file.writeFileSync('customer.json', JSON.stringify(obj1));
                            var y = file.writeFileSync('company.json', JSON.stringify(obj2));

                            // var time = new Date();
                            // console.log();
                            // this.hms = (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
                            // console.log("Time of Selling the Share is:: " + this.hms);
                            // this.d = (time.getDate()) + "/" + (time.getMonth() + 1) + "/" + (time.getFullYear())
                            // console.log("Date of Selling the Share is:: " + this.d);
                            // console.log();
                            //console.log("sell Stock Symbol is:: "+this.stack2.pop());
                            console.log()
                            this.count++;
                            console.log("Thank You for Selling!!!!! ");
                            if (this.count > 0) {
                                console.log();
                                for (let i = this.count; i <= this.count; i++) {
                                    //  var buy = "Buy"
                                    var type = "sell"
                                    obj3.transaction = {
                                        symbol: sym,
                                        customerId: id1,
                                        type: type,
                                        date: this.d
                                    }
                                    for (var key in obj3.transaction) {
                                        this.stack2.push(obj3.transaction[key])
                                    }
                                    //obj3.transaction = this.stack1;
                                    this.stack2.push(obj3.transaction)
                                    console.log("Transction Details:: ")
                                    console.log();
                                    console.log("stack info")
                                    console.log(obj3.transaction);
                                    file.writeFileSync('stackStock.json', JSON.stringify(obj3.transaction))
                                }

                            }

                        }
                    }
                }

            }
        }


    }
    print(obj1, obj2) {
        console.log("Customer shares information :");
        console.log()
        console.log(obj1);
        console.log("Company shares information :");
        console.log()
        console.log(obj2);
    }


}
module.exports = {
    StockAccount
}
