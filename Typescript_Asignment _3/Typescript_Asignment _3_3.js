"use strict";
//  Write a program which accept number from user and print even factors of that number. 
//  Input : 36 
//  Output: 2 6 12 18
exports.__esModule = true;
var factor = /** @class */ (function () {
    //Behaviour
    function factor(N) {
        this.No1 = N;
    }
    factor.prototype.EvenFactor = function () {
        var i = 0;
        for (i = 1; i <= (this.No1 / 2) + 1; i++) {
            if ((this.No1 % i == 0) && (i % 2 == 0)) {
                console.log(i);
            }
        }
    };
    return factor;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please enter Value : ");
var obj = new factor(Value);
obj.EvenFactor();
