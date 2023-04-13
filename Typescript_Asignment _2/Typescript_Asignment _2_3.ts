//  Accept on number from user if number is less than 10 then print “Hello” otherwise print “Demo”  //

class Show
{
    //charecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N
    }

    Display()
    {
        if (this.No1 < 10)
        {
            console.log("Hello")
        }
        else
        {
            console.log("Demo")
        }
    }
}

import * as PromptSync from "prompt-sync"

const Prompt = PromptSync()

var Value = Prompt("Enter Number : ");

var obj = new Show(Value);

obj.Display()