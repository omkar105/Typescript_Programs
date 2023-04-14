"use strict";
// Write a program which accept one number from user and print that number of even numbers on screen 
// Input : 7 
// Output: 2 4 6 8 10 12 14
exports.__esModule = true;
var even = /** @class */ (function () {
    //Beharviour
    function even(N) {
        this.No1 = N;
    }
    even.prototype.DisplayEven = function () {
        var i = 0;
        for (i = 1; i <= this.No1; i++) {
            console.log(i * 2);
        }
    };
    return even;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter the Value : ");
var obj = new even(Value);
obj.DisplayEven();
