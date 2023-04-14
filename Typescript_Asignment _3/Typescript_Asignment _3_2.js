"use strict";
//  Write a program which accept number from user and print factors of that number. 
//  Input : 24 
//  Output: 1 2 4 6 8 12 
exports.__esModule = true;
var evenfactor = /** @class */ (function () {
    //Behaviour
    function evenfactor(N) {
        this.No1 = N;
    }
    evenfactor.prototype.Factor = function () {
        var i = 0;
        for (i = 1; i < (this.No1 / 2) + 1; i++) {
            if (((this.No1 % i) == 0)) {
                console.log(i);
            }
        }
    };
    return evenfactor;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Value : ");
var obj = new evenfactor(Value);
obj.Factor();
