"use strict";
//  Write a program which accept number from user and return difference between summation of even digits and summation of odd digits. 
//  Input : 2395 
//  Output : -15 (2 - 17)
exports.__esModule = true;
var SumDigits = /** @class */ (function () {
    //Behaviour
    function SumDigits(N) {
        this.No1 = N;
    }
    SumDigits.prototype.Digits = function () {
        var iDigit = 0;
        var SumEven = 0;
        var SumOdd = 0;
        var Result = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit % 2 == 0) {
                SumEven = SumEven + iDigit;
            }
            else {
                SumOdd = SumOdd + iDigit;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        Result = SumEven - SumOdd;
        return Result;
    };
    return SumDigits;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Number : ");
var obj = new SumDigits(Value);
var iRet = obj.Digits();
console.log(iRet);
