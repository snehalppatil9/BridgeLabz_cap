
var read = require('readline-sync');
const fs = require('fs');
const file = fs.readFileSync('company.json');
var access = require('../../Data_structure/implementation/LinkedList')
// Used to display data company.json file 


var jsonCompanyData = JSON.parse(file);
var list = new access.LinkedList;
for (var key in jsonCompanyData.company) {
    list.add(jsonCompanyData.company[key])
}


class companyShares {

    addData() {
        var flag = false;
        do {
            var name = read.question('Enter company name :');
            if (!isNaN(name)) {
                console.log("Please enter vaild company name ! (only letters)");
            }
            else {
                flag = true;
            }
        } while (!flag)

        var flag = false;
        do {
            var symbol = read.question('Enter the symbol :');
            if (!isNaN(symbol)) {
                console.log("Please enter vaild symbol! (only letters)");
            }
            else {
                flag = true;
                for (let i in jsonCompanyData.company) {
                    if (jsonCompanyData.company[i].symbol == symbol) {
                        console.log(" Exist");
                        flag = false;
                    }
                }
            }
        } while (!flag)

        var flag = false;
        do {
            var shares = read.question('Enter total number of shares :');
            if (isNaN(shares)) {
                console.log("Please enter vaild data ! (only numbers)");
            }
            else {
                flag = true;
            }
        } while (!flag)

        var flag = false;
        do {
            var price = read.question('Enter the price of shares : ')
            if (isNaN(price)) {
                console.log("Please enter vaild data ! (only numbers)");
            }
            else {
                flag = true;
            }
        } while (!flag)

        var enterValue = {
            name: name,
            symbol: symbol,
            shares: shares,
            price: price
        }

        list.add(enterValue);
        this.saveData();
        console.log('Company Information Added.');
    }




    removeData() {
        var array = [];
        array = list.printListStock();
        console.log(array);
        var curr = list.head;
        var deleteCompany = read.question('Enter the company symbol you want to delete :');
        let n = 0;
        var flag = true;
        while (curr && flag) {
            n++;
            if (curr.data.symbol === deleteCompany) {
                console.log('curr :', curr.data.symbol);
                list.removeAt(n);
                flag = false;
            }
            curr = curr.next;
        }
        if (flag) {
            console.log('Index not found');
        }

        console.log('Updated List');
        console.log();
        
        list.printListStock();
       
        this.saveData();
    }





    saveData() {
        var arr = [];
        arr = list.printListStock();
        console.log(arr);
        var b = { "company": arr }
        fs.writeFileSync('company.json', JSON.stringify(b), 'utf-8', function () { });
        console.log('Data saved to file');
    }


    displayData() {
        var array = [];
        array = list.printListStock();
        console.log(array);
    }
}


module.exports = {
    companyShares
}