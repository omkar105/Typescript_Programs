"use strict";
//  Write a program which accept N and print first 5 multiples of N. 
//  Input : 4 
//  Output : 4 8 12 16 20
exports.__esModule = true;
var Show = /** @class */ (function () {
    //Behaviour
    function Show(N) {
        this.No1 = N;
    }
    Show.prototype.DisplayMultiple = function () {
        for (var i = 1; i <= 5; i++) {
            process.stdout.write((i * this.No1).toString() + ' ');
        }
    };
    return Show;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please enter Number : ");
var obj = new Show(Value);
obj.DisplayMultiple();
