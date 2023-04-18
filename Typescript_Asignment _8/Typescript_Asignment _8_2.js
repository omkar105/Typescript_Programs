"use strict";
//  Write a program which accept number from user and print numbers till that number. 
//  Input : 8 
//  Output : 1 2 3 4 5 6 7 8 
exports.__esModule = true;
var Display = /** @class */ (function () {
    //Behaviour
    function Display(N) {
        this.No1 = N;
    }
    Display.prototype.DisplayNumber = function () {
        for (var i = 1; i <= this.No1; i++) {
            process.stdout.write((i.toString()) + ' ');
        }
    };
    return Display;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please eneter Number : ");
var obj = new Display(Value);
obj.DisplayNumber();
