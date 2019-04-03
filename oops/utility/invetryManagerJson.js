class Data{
    constructor(stockName,shares,sharePrice)
    {
        this.stockName=stockName;
        this.shares=shares;
        this.sharePrice=sharePrice;
    }
    total(){
        return this.shares * this.sharePrice;
    }
}




//SBI class use the properties of Data class
class SBI extends Data{
    constructor(stockName,shares,sharePrice){
    //super keyword access and call functions
        super(stockName,shares,sharePrice);
    }
}

//Bank Of Baroda class use the properties of Data class
class BankOfBaroda extends Data{
    constructor(stockName,shares,sharePrice){
        //super keyword access and call functions
        super(stockName,shares,sharePrice);
        }
}

//coporation bank class use the properties of Data class
class corporationBank extends Data{
    constructor(stockName,shares,sharePrice){
        //super keyword access and call functions
        super(stockName,shares,sharePrice);
        }
}

module.exports={
 
    //exports all the classes
   SBI,BankOfBaroda,corporationBank
 }