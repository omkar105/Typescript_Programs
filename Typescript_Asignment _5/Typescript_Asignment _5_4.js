"use strict";
//  Write a program which accept number from user and count frequency of 4 in it. 
//  Input : 2395 
//  Output : 0
exports.__esModule = true;
var CheckFreq = /** @class */ (function () {
    //Behaviour
    function CheckFreq(N) {
        this.No1 = N;
    }
    CheckFreq.prototype.Frequency = function () {
        var iDigit = 0;
        var Counter = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit == 4) {
                Counter = Counter + 1;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        return Counter;
    };
    return CheckFreq;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Number : ");
var obj = new CheckFreq(Value);
var iRet = obj.Frequency();
console.log(iRet);
