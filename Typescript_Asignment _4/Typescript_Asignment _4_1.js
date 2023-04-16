"use strict";
//  Write a program which accept number from user and display its multiplication of factors. 
//  Input : 12 
//  Output : 144 (1 * 2 * 3 * 4 * 6) 
exports.__esModule = true;
var MultFactor = /** @class */ (function () {
    //Behaviour
    function MultFactor(N) {
        this.No1 = N;
    }
    MultFactor.prototype.Factor = function () {
        var Ans = 1;
        var i = 0;
        for (i = 0; i < (this.No1 / 2) + 1; i++) {
            if (this.No1 % i == 0) {
                Ans = Ans * i;
            }
        }
        return Ans;
    };
    return MultFactor;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("please enter Number : ");
var Ret = 0;
var obj = new MultFactor(Value);
Ret = obj.Factor();
console.log(Ret);
