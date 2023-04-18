"use strict";
//  Write a program which accept number from user and display its digits in reverse order. 
//  Input : 2395 
//  Output :5 
//          9 
//          3 
//          2 
exports.__esModule = true;
var Display = /** @class */ (function () {
    //Behaviour
    function Display(N) {
        this.No1 = N;
    }
    Display.prototype.Digits = function () {
        var iDigit = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            console.log(iDigit);
            this.No1 = ~~(this.No1 / 10);
        }
    };
    return Display;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Number : ");
var obj = new Display(Value);
obj.Digits();
