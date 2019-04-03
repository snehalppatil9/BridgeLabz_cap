

class Data{
    /*constructor initializes the newly created object and
    
      call after the memory allocated to the object */
    constructor(n,w,p){
        this.n=n;
        this.w=w;
        this.p=p;
    }
    // calculate total value for each inventary
    total(){
        return this.w * this.p;
    }
}

//Rice class use the properties of Data class
class Rice extends Data{
    constructor(n,w,p){
    //super keyword access and call functions
        super(n,w,p);
    }
}

//Pulses class use the properties of Data class
class Pulses extends Data{
    constructor(n,w,p){
        //super keyword access and call functions
        super(n,w,p);
        }
}

//Wheat class use the properties of Data class
class Wheat extends Data{
    constructor(n,w,p){
        //super keyword access and call functions
        super(n,w,p);
        }
}

module.exports={
 
    //exports all the classes
    Rice,Pulses,Wheat
 }