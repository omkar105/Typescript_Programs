"use strict";
//  Accept one number from user and print that number of * on screen.   //
exports.__esModule = true;
var Show = /** @class */ (function () {
    //Behaviour
    function Show(N) {
        this.No1 = N;
    }
    Show.prototype.Display = function () {
        var i = 0;
        for (i = 0; i < this.No1; i++) {
            console.log("*");
        }
    };
    return Show;
}());
var PromptSync = require("prompt-sync");
var Prompt = PromptSync();
var Value = Prompt("Enter Number  : ");
var obj = new Show(Value);
obj.Display();
