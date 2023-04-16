"use strict";
//  Write a program which accept number from user and check whether it contains 0 in it or not. 
//  Input : 2395 
//  Output : There is no Zero 
exports.__esModule = true;
var CheckZero = /** @class */ (function () {
    //Behaviour
    function CheckZero(N) {
        this.No1 = N;
    }
    CheckZero.prototype.Display = function () {
        var iDigit = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit == 0) {
                return iDigit;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        return iDigit;
    };
    return CheckZero;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please ENter Value : ");
var obj = new CheckZero(Value);
var iRet = obj.Display();
if (iRet == 0) {
    console.log("There is Zero ");
}
else {
    console.log("There is no Zero ");
}
