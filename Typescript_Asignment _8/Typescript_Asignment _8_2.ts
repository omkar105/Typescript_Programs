//  Write a program which accept number from user and print numbers till that number. 
//  Input : 8 
//  Output : 1 2 3 4 5 6 7 8 

class Display
{
    //charecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    DisplayNumber()
    {
        for (let i : number = 1;i <= this.No1; i++)
        {
            process.stdout.write((i.toString())+' ');
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please eneter Number : ");

var obj = new Display(Value);

obj.DisplayNumber()

