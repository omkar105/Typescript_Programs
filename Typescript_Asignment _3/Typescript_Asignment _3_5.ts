//  Accept on character from user and check whether that character is vowel (a,e,i,o,u) or not. 
//  Input : E Output : TRUE 
//  Input : d Output : FALSE

class Display
{
    //charecteristics
    Char : string

    //Behaviour
    constructor(C : string)
    {
        this.Char = C;
    }

    vowel()
    {
        if ((this.Char.toLowerCase() == 'a') || (this.Char.toLowerCase() == 'e') || (this.Char.toLowerCase() == 'i')|| (this.Char.toLowerCase() == 'o')|| (this.Char.toLowerCase() == 'u'))
        {
            console.log("TRUE")
        }
        else
        {
            console.log("FALSE")
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Str = prompt("Please enter Character : ")

var obj = new Display(Str)

obj.vowel()