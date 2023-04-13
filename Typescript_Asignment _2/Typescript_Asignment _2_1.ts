//  Accept one number from user and print that number of * on screen.   //

class Show
{
    //charactrristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Display()
    {
        let i : number = 0;
        for (i = 0; i < this.No1; i++)
        {
            console.log("*")
        }
    }
}

import * as PromptSync from 'prompt-sync'

const Prompt = PromptSync();

var Value = Prompt("Enter Number  : ");

var obj = new Show(Value);

obj.Display()
