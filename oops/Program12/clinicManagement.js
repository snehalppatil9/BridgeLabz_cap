var access = require('../utility/clinicUtility');
var file = require('fs');
var read = require('readline-sync');

var data = file.readFileSync('ClinicNew.json');
var object = JSON.parse(data)

var patient = new access.Patient;
var doctor = new access.Doctor;
var clinic = new access.Clinic;

console.log("----- Clinique_Management -----\n");
console.log("Enter 1 : Search for Doctors");
console.log("Enter 2 : Search for Patients");
console.log("Enter 3 : Take Appointment from Doctors");
console.log("Enter 4 : Appointment Details");
console.log();
var flag=true;
do{
var number = read.question("Enter your Choice: ");
console.log();

switch(number){
    case 1:
    doctor.searchDoctor(object);
    break;

    case 2:
    doctor.searchPatient(object);
    break;

    case 3:
    doctor.appointment(object);
    break;

    case 4:
    doctor.showReport(object);
    break;

   default:
   console.log("Enter valid choice........");
   break;
   
}

}while(flag);