"use strict";
//  Write a program which accept number from user and display its factors in decreasing order. 
//  Input : 12 
//  Output : 6 4 3 2 1
exports.__esModule = true;
var ReverseFactor = /** @class */ (function () {
    //Behaviour
    function ReverseFactor(N) {
        this.No1 = N;
    }
    ReverseFactor.prototype.Factor = function () {
        var i = 0;
        for (i = this.No1 / 2; i > 0; i--) {
            if (this.No1 % i == 0) {
                console.log(i);
            }
        }
    };
    return ReverseFactor;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please enter number: ");
var obj = new ReverseFactor(Value);
obj.Factor();
