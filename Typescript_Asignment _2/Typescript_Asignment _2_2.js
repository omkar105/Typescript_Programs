"use strict";
// Accept one number from user and print that number of * on screen.    //
exports.__esModule = true;
var Show = /** @class */ (function () {
    //Behaviour
    function Show(N) {
        this.No1 = N;
    }
    Show.prototype.Display = function () {
        while (this.No1 > 0) {
            console.log("*");
            this.No1--;
        }
    };
    return Show;
}());
var PromptSync = require("prompt-sync");
var Prompt = PromptSync();
var Value = Prompt("Please Enter Number : ");
var obj = new Show(Value);
obj.Display();
