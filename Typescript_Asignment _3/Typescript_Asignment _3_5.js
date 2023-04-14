"use strict";
//  Accept on character from user and check whether that character is vowel (a,e,i,o,u) or not. 
//  Input : E Output : TRUE 
//  Input : d Output : FALSE
exports.__esModule = true;
var Display = /** @class */ (function () {
    //Behaviour
    function Display(C) {
        this.Char = C;
    }
    Display.prototype.vowel = function () {
        if ((this.Char.toLowerCase() == 'a') || (this.Char.toLowerCase() == 'e') || (this.Char.toLowerCase() == 'i') || (this.Char.toLowerCase() == 'o') || (this.Char.toLowerCase() == 'u')) {
            console.log("TRUE");
        }
        else {
            console.log("FALSE");
        }
    };
    return Display;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Str = prompt("Please enter Character : ");
var obj = new Display(Str);
obj.vowel();
