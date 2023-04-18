"use strict";
//  Write a program which accept number from user and print that number of $ & * on screen. 
//  Input : 5 
//  Output : $ * $ * $ * $ * $ * 
exports.__esModule = true;
var Display = /** @class */ (function () {
    //Behaviour
    function Display(N) {
        this.No1 = N;
    }
    Display.prototype.DisplaySymbol = function () {
        for (var i = 0; i < this.No1; i++) {
            process.stdout.write("$ * ");
        }
    };
    return Display;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please enter Number : ");
var obj = new Display(Value);
obj.DisplaySymbol();
