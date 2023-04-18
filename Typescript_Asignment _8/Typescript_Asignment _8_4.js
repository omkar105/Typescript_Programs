"use strict";
//  Write a program which accepts N from user and print all odd numbers up to N. 
//  Input : 18 
//  Output : 1 3 5 7 9 11 13
exports.__esModule = true;
var Show = /** @class */ (function () {
    //Beahviour
    function Show(N) {
        this.No1 = N;
    }
    Show.prototype.OddNumber = function () {
        for (var i = 1; i < this.No1; i++) {
            if (i % 2 != 0) {
                process.stdout.write(i.toString() + ' ');
            }
        }
    };
    return Show;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please enter Number : ");
var obj = new Show(Value);
obj.OddNumber();
