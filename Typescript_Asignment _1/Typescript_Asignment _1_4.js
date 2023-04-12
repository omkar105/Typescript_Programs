//  Accept one number and check whether is is divisible by 5 or not.    //
var Arithmatic = /** @class */ (function () {
    //Behaviour
    function Arithmatic(N) {
        this.No1 = N;
    }
    Arithmatic.prototype.Division = function () {
        if (this.No1 % 5 == 0) {
            console.log("Divisible by 5");
        }
        else {
            console.log("Not Divisible by 5");
        }
    };
    return Arithmatic;
}());
var obj = new Arithmatic(25);
obj.Division();
