"use strict";
//  Write a program which accept number from user and print its numbers line. 
//  Input : 4 
//  Output : -4 -3 -2 -1 0 1 2 3 4 
exports.__esModule = true;
var Display = /** @class */ (function () {
    //Behaviour
    function Display(N) {
        this.No1 = N;
    }
    Display.prototype.DisplayNum = function () {
        for (var i = -this.No1; i <= this.No1; i++) {
            process.stdout.write(i.toString() + ' ');
        }
    };
    return Display;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Number : ");
var obj = new Display(Value);
obj.DisplayNum();
