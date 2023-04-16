"use strict";
//  Write a program which accept number from user and return difference between summation of all its factors and non factors.
//  Input : 12 
//  Output : -34 (16 - 50)
exports.__esModule = true;
var SumFactor = /** @class */ (function () {
    //behaviour
    function SumFactor(N) {
        this.No1 = N;
    }
    SumFactor.prototype.Factor = function () {
        var Ans = 0;
        var i = 0;
        for (i = 0; i < this.No1; i++) {
            if (this.No1 % i == 0) {
                Ans = Ans + i;
            }
            else {
                Ans = Ans - i;
            }
        }
        return Ans;
    };
    return SumFactor;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please ENeter Value : ");
var obj = new SumFactor(Value);
var Ret = obj.Factor();
console.log(Ret);
