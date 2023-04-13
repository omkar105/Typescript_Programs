"use strict";
//  Accept two numbers from user and display first number in second number of times.    //
exports.__esModule = true;
var NumDisplay = /** @class */ (function () {
    //Behaviour
    function NumDisplay(N1, N2) {
        this.No1 = N1;
        this.No2 = N2;
    }
    NumDisplay.prototype.Display = function () {
        var i = 0;
        for (i = 0; i < this.No2; i++) {
            console.log(this.No1);
        }
    };
    return NumDisplay;
}());
var PromptSync = require("prompt-sync");
var Prompt = PromptSync();
var Value1 = Prompt("Enter 1st Value : ");
var Value2 = Prompt("Enter 2st Value : ");
var obj = new NumDisplay(Value1, Value2);
obj.Display();
