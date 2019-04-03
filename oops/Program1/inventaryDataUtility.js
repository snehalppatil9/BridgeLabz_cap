
var util=require('../utility/inventaryDataJson')

module.exports={
inventaryData(obj)
{
try{
/* for loop is used for the printing the data and 
    
    calculate the value for every inventary*/
for (var i = 0; i < obj.Rice.length; i++) {
    
        var n = obj.Rice[i].name;
        var w = obj.Rice[i].weight;
        var p = obj.Rice[i].price;
    
        let product = new util.Rice(n, w, p);//object of Rice class
        var total = product.total();
        console.log((i+1)+"] Name of Rice is " + n + " And " + " Weight is " +  w  + "Price is:"+ p)
        console.log();
        console.log("Total Price of Rice is " + total)
        console.log();

}

for (var i = 0; i < obj.Pulses.length; i++) {
    var n = obj.Pulses[i].name;
    var w = obj.Pulses[i].weight;
    var p = obj.Pulses[i].price;

    let product = new util.Pulses(n, w, p);//object of Pulses class
    var total = product.total();
    console.log((i+1)+"] Name of Pulses is " + n + " And " + " Weight is " + w + "Price is" + p ) 
    console.log();
    console.log("Total Price of Pulses is " + total)
    console.log();

}

for (var i = 0; i < obj.Wheat.length; i++) {
    var n = obj.Wheat[i].name;
    var w = obj.Wheat[i].weight;
    var p = obj.Wheat[i].price;

    let product = new util.Wheat(n, w, p);//object of Wheat class
    var total = product.total();
    console.log((i+1)+"] Name of Wheat is " + n + " And " + " Weight is " +  w  + "Price is")
    console.log();
    console.log("Total Price of Wheat is " + total)
    console.log();

}
}
catch(err){
    console.log(err);
    
}
}
}