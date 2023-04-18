"use strict";
//  Write a program which accept number from user and return multiplication of all digits. 
//  Input : 2395 
//  Output : 270 
exports.__esModule = true;
var DigitMult = /** @class */ (function () {
    //Behaviour
    function DigitMult(N) {
        this.No1 = N;
    }
    DigitMult.prototype.Multiplication = function () {
        var iDigit = 0;
        var Result = 1;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit == 0) {
                iDigit = 1;
            }
            Result = Result * iDigit;
            this.No1 = ~~(this.No1 / 10);
        }
        return Result;
    };
    return DigitMult;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please ENeter Number : ");
var obj = new DigitMult(Value);
var iRet = obj.Multiplication();
console.log(iRet);
