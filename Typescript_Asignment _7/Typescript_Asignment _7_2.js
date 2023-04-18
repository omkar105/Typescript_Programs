"use strict";
//  Write a program which accept number from user and return the count of odd digits. 
//  Input : 2395
//  Output : 3 
exports.__esModule = true;
var OddDigit = /** @class */ (function () {
    //Behaviour
    function OddDigit(N) {
        this.No1 = N;
    }
    OddDigit.prototype.Digits = function () {
        var iDigit = 0;
        var Count = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit % 2 != 0) {
                Count = Count + 1;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        return Count;
    };
    return OddDigit;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Number : ");
var obj = new OddDigit(Value);
var iRet = obj.Digits();
console.log(iRet);
