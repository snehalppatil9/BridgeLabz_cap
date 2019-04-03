var util=require('../utility/invetryManagerJson')
module.exports={
inventaryManager(obj)
{
    try{
    /* for loop is used for the printing the data and 
        
        calculate the value for every inventary*/
    for (var i = 0; i < obj.Stock1.length; i++) {
        
            var stockName = obj.Stock1[i].stockName;
            var shares = obj.Stock1[i].shares;
            var sharePrice = obj.Stock1[i].sharePrice;
        
            let product = new util.SBI(stockName,shares,sharePrice);//object of SBI class
            var total = product.total();
            console.log((i+1)+"] Name of Bank " + stockName +  "  shares  " +  shares  + " share price is:"+  sharePrice)
            console.log();
            console.log("Total price of SBI is " + total)
            console.log();
    
    }
    
    for (var i = 0; i < obj.Stock1.length; i++) {
        var stockName = obj.Stock1[i].stockName;
        var shares = obj.Stock1[i].shares;
        var sharePrice = obj.Stock1[i].sharePrice;
    
        let product = new util.BankOfBaroda(stockName,shares,sharePrice);//object of SBI class
        var total = product.total();
        console.log((i+1)+"] Name of bank " + stockName +  " Weight is " + shares + " share price is" + sharePrice ) 
        console.log();
        console.log("Total share price of Bank of baroda " + total)
        console.log();
    
    }
    
    for (var i = 0; i < obj.Stock1.length; i++) {
        var stockName = obj.Stock1[i].stockName;
        var shares = obj.Stock1[i].shares;
        var sharePrice = obj.Stock1[i].sharePrice;
    
        let product = new util.corporationBank(stockName,shares,sharePrice);//object of SBI class
        var total = product.total();
        console.log((i+1)+"] Name of bank " + stockName +  " shares are " +  shares  + " share price is" + sharePrice);
        console.log();
        console.log("Total sharePrice of corporation bank  is " + total)
        console.log();
    
    }
    }
    catch(err){
        console.log(err);
        
    }

}
}
