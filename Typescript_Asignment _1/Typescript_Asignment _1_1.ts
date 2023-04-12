// Class = Data + Functions
// Class = Characteristics + Behaviours

//  Program to divide two numbers   //

class Arithmatic
{
    //characteristics
    No1 : number
    No2 : number

    //Behaviours
    constructor(N1 : number,N2 : number)
    {
        this.No1 = N1;
        this.No2 = N2;
    }
    Diveide()
    {
        let Result : number = 0;
        Result = this.No1 / this.No2;
        return Result

    }
}

var obj = new Arithmatic(10,5);
var Ret : number = 0

Ret = obj.Diveide()

console.log("Result is : "+Ret)