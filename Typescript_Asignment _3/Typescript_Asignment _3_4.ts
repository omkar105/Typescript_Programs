//  Accept one character from user and convert case of that character. 
//  Input : a Output : A 
//  Input : D Output : d 

class Uppsercase
{
    //characteristics
    Char : string

    //Behaviour
    constructor(C : string)
    {
        this.Char = C;
    }

    DisplayUppercase()
    {
        console.log(this.Char.toUpperCase())
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Str = prompt("Please Enter String : ")

var obj = new Uppsercase(Str)

obj.DisplayUppercase()