var read = require('readline-sync')

var file = require('fs')
var p = file.readFileSync('addressBook.json', 'utf8');

nameRestriction = /[A-Za-z]/g;
contactRestriction = /[0-9]{10}/g;

class Address {
    constructor(address) {
        this.address = address;
    }

    createProfile(address) {
        var fName = read.question("Enter the First Name:: ");
        console.log();

        while (nameRestriction.test(fName) == false) {
            console.log("No Special characters ..Invalid Name! ");
            fName = read.question("ReEnter First Name:: ");
            console.log();
        }
        var lName = read.question("Enter the Last Name :: ");
        console.log();
        while (nameRestriction.test(lName) == false) {
            console.log("No Special Characters....Invalid Name! ")
            lName = read.question("ReEnter the Last Name:: ")
            
        }
        console.log()
        console.log("******Address Details******")
        console.log()
        var street = read.question("Enter Street:: ")
        console.log();
        var city = read.question("Enter City :: ")
        console.log();
        while (nameRestriction.test(city) == false) {
            console.log("No Special characters ..Invalid City! ");
            city = read.question(" ReEnter City:: ")
            console.log();
        }

        var state = read.question("Enter the State:: ")
        console.log();
        while (nameRestriction.test(state) == false) {
            console.log("No Special characters ..Invalid State! ");
            state = read.question("ReEnter State:: ")
            console.log();
        }

        var nation = read.question("Enter Nationality:: ")
        console.log();
        while (nameRestriction.test(nation) == false) {
            console.log("No Special characters ..Invalid Nationality! ");
            nation = read.question(" ReEnter Nationality: ")
            console.log();
        }

        var zip = read.question("Enter the Zip Code:: ")
        console.log();
        while (contactRestriction.test(zip) == false && zip.length != 6) {
            console.log("Enter 6 digit Number..Invalid Zip Code! ");
            zip = read.question("ReEnter Zip Code:: ")
            console.log();
        }

        var phoneNum = read.question("Enter Phone Number:: ")
        console.log();
        while (contactRestriction.test(phoneNum) == false && phoneNum.length != 10) {
            console.log("Enter 10 digit Phone Number ..Invalid Name! ");
            phoneNum = read.question("ReEnter Phone Number:: ")
            console.log();
        }

        address.Person.push(
            {
                "Name": fName,
                "LastName": lName,
                "Address": {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nation,
                    "Zip Code": zip,
                    "PhoneNum": phoneNum
                }
            })
        file.writeFile('addressBook.json', JSON.stringify(address), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Your Information As Per Our Record IS:\n \r Name: " + fName + "\n \r Last Name: " + lName)
        console.log("Address:: " + street + "," + city + ',' + state + ',' + nation + ',' + zip)
        console.log("Phone Number is: " + phoneNum)
    }

    updateProfile(address) {
        var temp = -1;
        if (address.Person.length > 0) {
            for (let i = 0; i < address.Person.length; i++) {
                console.log("Address book Details:  ")
                console.log(address.Person[i]);
                console.log();
            }
            console.log()
            console.log("**Welcome**")
            console.log()
            var name = read.question("Enter the Name of the Profile:: ")
            console.log();
            for (var k = 0; k < address.Person.length; k++) {
                if (name == address.Person[k].Name) {
                    console.log("What Do you Want to do ? ")
                    console.log("1 : Update Address")
                    console.log("2 : Delete")
                    console.log("3 : Sort")
                    console.log("4 : Save")
                    console.log("5 : Exit")
                    console.log();
                    var key = read.question("Enter your Choice: ")
                    console.log();
                    switch (parseInt(key)) {
                        case 1:
                            /**
                             * Update Address
                             */
                            console.log("What Do You want to Update ?")
                            console.log("1 : Street")
                            console.log("2 : City")
                            console.log("3 : State")
                            console.log("4 : Nationality")
                            console.log("5 : Zip Code")
                            console.log("6 : Phone Number")
                            console.log();
                            var choice = read.question("Enter Your Choice: ")
                            switch (parseInt(choice)) {
                                case 1:
                                    //Street Update
                                    var sUpdate = read.question("Enter New Street:: ")
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": address.Person[k]["Address"].City,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    address.Person[k] = obj;
                                    save();
                                    break;
                                case 2:
                                    //City Update
                                    var cUpdate = read.question(" Enter New City :: ")
                                    while (nameRestriction.test(cUpdate) == false) {
                                        console.log("No Special characters ..Invalid City! ");
                                        cUpdate = read.question(" ReEnter New City:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    break;
                                //State Update
                                case 3:
                                    var stUpadate = read.question("Enter the New State:: ")
                                    while (nameRestriction.test(stUpadate) == false) {
                                        console.log("No Special characters ..Invalid State! ");
                                        stUpadate = read.question("ReEnter New State:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Address"].Street,
                                            "City": address.Person[k]["Address"].City,
                                            "State": stUpadate,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    break;
                                //Nationality Update

                                case 4:
                                    var nUpadte = read.question("Enter New Nationality:: ")
                                    while (nameRestriction.test(nUpadte) == false) {
                                        console.log("No Special characters ..Invalid Nationality! ");
                                        nUpadte = read.question(" ReEnter New Nationality: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Address"].Street,
                                            "City": address.Person[k]["Address"].City,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    address.Person[k] = obj;
                                    save()
                                    break;

                                //Zip Code Update
                                case 5:
                                    var zUpdate = read.question("Enter New Zip Code:: ")
                                    while (contactRestriction.test(zUpdate) == false && zip.length != 6) {
                                        console.log("Enter 6 digit Number..Invalid Zip Code! ");
                                        zUpdate = read.question("ReEnter New Zip Code:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Address"].Street,
                                            "City": address.Person[k]["Address"].City,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    svae()
                                    break;

                                //Phone number update

                                case 6:
                                    var pUpdate = read.question("Enter New Phone Number:: ")
                                    while (contactRestriction.test(pUpdate) == false && phoneNum.length != 10) {
                                        console.log("Enter 10 digit Phone Number ..Invalid Name! ");
                                        pUpdate = read.question("ReEnter New Phone Number:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Address"].Street,
                                            "City": address.Person[k]["Address"].City,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate,
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    file.writeFile('addressBook.json', JSON.stringify(address), 'utf-8');
                                    break;

                                case 7:
                                    console.log("Thank You.....")
                                    break;
                            }
                            break;


                        /**
                         * Delete Index
                         */
                        case 2:
                            var update = read.question("Enter the Name which You want to Delete: ")
                            for (let i = 0; i < address.Person.length; i++) {
                                if (address.Person[i].Name == update) {
                                    var index = address.Person.indexOf(address.Person[i])

                                    address.Person.splice(index, 1)
                                    
                                   

                                }

                            }
                            save()
                            console.log("Delete Sucessfully.......")
                            break;

                        /**
                         * Sort Last Name
                         */
                        case 3:
                            
                            var temp;
                            for (let i = 0; i < address.Person.length; i++) {
                                for (let j = 0; j < address.Person.length - 1; j++) {
                                    if (address.Person[j].LastName.localeCompare(address.Person[j + 1].LastName) == 1) {
                                        temp = address.Person[j];
                                        address.Person[j] = address.Person[j + 1];
                                        address.Person[j + 1] = temp;


                                    }
                                }
                            }
                            console.log(address)
                            // address.Person[k] = obj;
                            save()
                            // file.writeFile('addressBook.json', JSON.stringify(address), 'utf-8');
                            break;

                        /**
                         * Save new Updation
                         */
                        case 4:
                            function save() {
                                file.writeFile('addressBook.json', JSON.stringify(address), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                                //file.writeFile('addressBook.json', JSON.stringify(address), 'utf -8')

                            }
                            break;

                        case 5:

                            console.log('Thank You......')
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }



            }

        }
        else {

            console.log("Profile Unavilable ....Please create New One ")
            this.createProfile(address)

        }

    }


    displayDetail(address) {
        if (address.Person.length > 0) {
            for (let i = 0; i < address.Person.length; i++) {
                console.log(address.Person[i])
            }
        }
    }

    deleteDetail(address) {
       this.displayDetail(address);
       
        
        var update = read.question("Enter the Name which You want to Delete: ")
        for (let i = 0; i < address.Person.length; i++) {
            if (address.Person[i].Name == update) {
                var index = address.Person.indexOf(address.Person[i])

                address.Person.splice(index, 1)
                file.writeFile('addressBook.json', JSON.stringify(address), 'utf-8', function (err) {
                    if (err) throw err
                    console.log('File Saved!!')
                });
                
            }
            
        }
console.log("Delete Sucessfully.......")
}
}
module.exports = {
    Address
}