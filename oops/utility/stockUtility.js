class stockData{
    constructor(stockName,shares,sharePrice)
    {
        this.stockName=stockName;
        this.shares=shares;
        this.sharePrice=sharePrice;
    }

    total(){

        //calculate the total value of stock
        return this.shares*this.sharePrice;
    }
}

class BridgeLabz extends stockData{
    constructor(stockName,shares,sharePrice){
    //super keyword access and call functions
        super(stockName,shares,sharePrice);
    }
}

class Capgemini extends stockData{
    constructor(stockName,shares,sharePrice){
    //super keyword access and call functions
        super(stockName,shares,sharePrice);
    }
}

class TCS extends stockData{
    constructor(stockName,shares,sharePrice){
    //super keyword access and call functions
        super(stockName,shares,sharePrice);
    }
}

class Syntel extends stockData{
    constructor(stockName,shares,sharePrice){
    //super keyword access and call functions
        super(stockName,shares,sharePrice);
    }
}

class Google extends stockData{
    constructor(stockName,shares,sharePrice){
    //super keyword access and call functions
        super(stockName,shares,sharePrice);
    }
}


module.exports={

    // Exports all the stocks class
   Google,Syntel,TCS,BridgeLabz,Capgemini

}