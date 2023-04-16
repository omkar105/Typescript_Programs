"use strict";
//  Write a program which accept number from user and count frequency of such a digits which are less than 6.
//  Input : 2395 
//  Output : 3 
exports.__esModule = true;
var Frequency = /** @class */ (function () {
    //Beahviour
    function Frequency(N) {
        this.No1 = N;
    }
    Frequency.prototype.Display = function () {
        var iDigit = 0;
        var Cont = 0;
        while (this.No1 > 0) {
            iDigit = this.No1 % 10;
            if (iDigit < 6) {
                Cont = Cont + 1;
            }
            this.No1 = ~~(this.No1 / 10);
        }
        return Cont;
    };
    return Frequency;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Value = prompt("Please Enter Value : ");
var obj = new Frequency(Value);
var iRet = obj.Display();
console.log(iRet);
