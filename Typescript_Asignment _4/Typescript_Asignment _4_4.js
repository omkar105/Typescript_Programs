"use strict";
//  Write a program which accept number from user and return summation of all its non factors. 
//  Input : 12 
//  Output : 50
exports.__esModule = true;
var SumFactor = /** @class */ (function () {
    //behavior
    function SumFactor(N) {
        this.No1 = N;
    }
    SumFactor.prototype.Factor = function () {
        var i = 0;
        var Ans = 0;
        for (i = 1; i < this.No1; i++) {
            if (this.No1 % i != 0) {
                Ans = Ans + i;
            }
        }
        return Ans;
    };
    return SumFactor;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Ret = 0;
var Value = prompt("Please Eneter Number : ");
var obj = new SumFactor(Value);
Ret = obj.Factor();
console.log(Ret);
