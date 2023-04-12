// Class = Data + Functions
// Class = Characteristics + Behaviours
//  Program to divide two numbers   //
var Arithmatic = /** @class */ (function () {
    //Behaviours
    function Arithmatic(N1, N2) {
        console.log("Inside Constructor");
        this.No1 = N1;
        this.No2 = N2;
    }
    Arithmatic.prototype.Diveide = function () {
        var Result = 0;
        Result = this.No1 / this.No2;
        return Result;
    };
    return Arithmatic;
}());
var obj = new Arithmatic(10, 5);
var Ret = 0;
Ret = obj.Diveide();
console.log("Result is : " + Ret);
