"use strict";
//  Write a program which accept number from user and return the count of digits in between 3 and 7. 
//  Input : 2395 
//  Output : 1
exports.__esModule = true;
var CountDigits = /** @class */ (function () {
    //Behaviour
    function CountDigits(N) {
        this.No1 = N;
    }
    CountDigits.prototype.Digit = function () {
        var iDigit = 0;
        var Count = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if ((iDigit > 3) && (iDigit < 7)) {
                Count = Count + 1;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        return Count;
    };
    return CountDigits;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter NUmber : ");
var obj = new CountDigits(Value);
var iRet = obj.Digit();
console.log(iRet);
