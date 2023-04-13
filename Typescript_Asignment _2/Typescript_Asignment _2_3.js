"use strict";
//  Accept on number from user if number is less than 10 then print “Hello” otherwise print “Demo”  //
exports.__esModule = true;
var Show = /** @class */ (function () {
    //Behaviour
    function Show(N) {
        this.No1 = N;
    }
    Show.prototype.Display = function () {
        if (this.No1 < 10) {
            console.log("Hello");
        }
        else {
            console.log("Demo");
        }
    };
    return Show;
}());
var PromptSync = require("prompt-sync");
var Prompt = PromptSync();
var Value = Prompt("Enter Number : ");
var obj = new Show(Value);
obj.Display();
