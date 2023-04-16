"use strict";
//  Write a program which accept number from user and display all its non factors. 
//  Input : 12 
//  Output : 5 7 8 9 10 11
exports.__esModule = true;
var display = /** @class */ (function () {
    //Beahviour
    function display(N) {
        this.No1 = N;
    }
    display.prototype.NonFactor = function () {
        var i = 0;
        for (i = 1; i <= this.No1; i++) {
            if (this.No1 % i != 0) {
                console.log(i);
            }
        }
    };
    return display;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please enter number : ");
var obj = new display(Value);
obj.NonFactor();
