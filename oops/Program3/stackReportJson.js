var util=require('../utility/stockUtility')

module.exports={

stockReport(obj){
try{

/* for loop is used for the printing the data and 
    
    calculate the value for every stock*/

for (var i = 0; i < obj.stock1.length ; i++) {
    
    var stockName = obj.stock1[i].stockName;
    var shares = obj.stock1[i].shares;
    var sharePrice = obj.stock1[i].sharePrice;
    //object of BridgeLabz class
    let product = new util.BridgeLabz(stockName,shares,sharePrice);
    var total = product.total();
    console.log((i+1)+"]  Stock Name  " + stockName +  "  Shares  " +  shares  + "  Share Price: "+  sharePrice)
    console.log();
    console.log("Total Price of Rice is " + total)
    console.log();

}

for (var i = 0; i < obj.stock1.length; i++) {
    
    var stockName = obj.stock1[i].stockName;
    var shares = obj.stock1[i].shares;
    var sharePrice = obj.stock1[i].sharePrice;
    //object of Capgemini class
    let product = new util.Capgemini(stockName,shares,sharePrice);
    var total = product.total();
    console.log((i+1)+"]  Stock Name  " + stockName +  "  Shares  " +  shares  + "  Share Price: "+  sharePrice)
    console.log();
    console.log("Total Price of Rice is " + total)
    console.log();

}

for (var i = 0; i < obj.stock1.length; i++) {
    
    var stockName = obj.stock1[i].stockName;
    var shares = obj.stock1[i].shares;
    var sharePrice = obj.stock1[i].sharePrice;
    //object of Tcs class
    let product = new util.TCS(stockName,shares,sharePrice);
    var total = product.total();
    console.log((i+1)+"]  Stock Name  " + stockName +  "  Shares  " +  shares  + "  Share Price: "+  sharePrice)
    console.log();
    console.log("Total Price of Rice is " + total)
    console.log();

}

for (var i = 0; i < obj.stock1.length; i++) {
    
    var stockName = obj.stock1[i].stockName;
    var shares = obj.stock1[i].shares;
    var sharePrice = obj.stock1[i].sharePrice;
    //object of Syntel class
    let product = new util.Syntel(stockName,shares,sharePrice);
    var total = product.total();
    console.log((i+1)+"]  Stock Name  " + stockName +  "  Shares  " +  shares  + "  Share Price: "+  sharePrice)
    console.log();
    console.log("Total Price of Rice is " + total)
    console.log();

}

for (var i = 0; i < obj.stock1.length; i++) {
    
    var stockName = obj.stock1[i].stockName;
    var shares = obj.stock1[i].shares;
    var sharePrice = obj.stock1[i].sharePrice;
    //object of Google class
    let product = new util.Google(stockName,shares,sharePrice);
    var total = product.total();
    console.log((i+1)+"]  Stock Name  " + stockName +  "  Shares  " +  shares  + "  Share Price: "+  sharePrice)
    console.log();
    console.log("Total Price of Rice is " + total)
    console.log();

}

}catch(err){
    console.log(err);
    
}
}
}