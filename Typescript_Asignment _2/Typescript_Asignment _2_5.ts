//  Accept number from user and check whether number is even or odd.    //

class EvenOddDisplay
{
    //Characteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Display()
    {
        if(this.No1 % 2 == 0 )
        {
            console.log("Number is Even")
        }
        else
        {
            console.log("Number is Odd")
        }
    }
}

import * as PromptSync from "prompt-sync"

const Prompt = PromptSync()

var Value = Prompt("Please Enter Number : ")

var obj = new EvenOddDisplay(Value)

obj.Display()