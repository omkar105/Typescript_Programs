"use strict";
//  Accept number from user and check whether number is even or odd.    //
exports.__esModule = true;
var EvenOddDisplay = /** @class */ (function () {
    //Behaviour
    function EvenOddDisplay(N) {
        this.No1 = N;
    }
    EvenOddDisplay.prototype.Display = function () {
        if (this.No1 % 2 == 0) {
            console.log("Number is Even");
        }
        else {
            console.log("Number is Odd");
        }
    };
    return EvenOddDisplay;
}());
var PromptSync = require("prompt-sync");
var Prompt = PromptSync();
var Value = Prompt("Please Enter Number : ");
var obj = new EvenOddDisplay(Value);
obj.Display();
