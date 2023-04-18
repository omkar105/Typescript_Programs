"use strict";
//  Write a program which accept number from user and return the count of even digits. 
//  Input : 2395 
//  Output : 1 
exports.__esModule = true;
var EvenDigits = /** @class */ (function () {
    //Behaviour
    function EvenDigits(N) {
        this.No1 = N;
    }
    EvenDigits.prototype.Digit = function () {
        var iDigit = 0;
        var Counter = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit % 2 == 0) {
                Counter = Counter + 1;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        return Counter;
    };
    return EvenDigits;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Number : ");
var obj = new EvenDigits(Value);
var iRet = obj.Digit();
console.log(iRet);
