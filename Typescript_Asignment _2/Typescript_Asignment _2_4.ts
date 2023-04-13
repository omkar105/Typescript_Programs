//  Accept two numbers from user and display first number in second number of times.    //


class NumDisplay
{
    //charecteristics
    No1 : number
    No2 : number

    //Behaviour
    constructor(N1 : number, N2 : number)
    {
        this.No1 = N1;
        this.No2 = N2;
    }

    Display()
    {
        let i : number = 0;
        for (i = 0;i < this.No2; i++)
        {
            console.log(this.No1)
        }
    }
}

import * as PromptSync from "prompt-sync"

const Prompt = PromptSync()

var Value1 = Prompt("Enter 1st Value : ")
var Value2 = Prompt("Enter 2st Value : ")

var obj = new NumDisplay(Value1,Value2)
obj.Display()