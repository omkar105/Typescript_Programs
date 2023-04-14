"use strict";
//  Accept one character from user and convert case of that character. 
//  Input : a Output : A 
//  Input : D Output : d 
exports.__esModule = true;
var Uppsercase = /** @class */ (function () {
    //Behaviour
    function Uppsercase(C) {
        this.Char = C;
    }
    Uppsercase.prototype.DisplayUppercase = function () {
        console.log(this.Char.toUpperCase());
    };
    return Uppsercase;
}());
var Prompt = require("prompt-sync");
var prompt = Prompt();
var Str = prompt("Please Enter String : ");
var obj = new Uppsercase(Str);
obj.DisplayUppercase();
