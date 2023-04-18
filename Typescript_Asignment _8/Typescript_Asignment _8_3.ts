//  Write a program which accept number from user and print its numbers line. 
//  Input : 4 
//  Output : -4 -3 -2 -1 0 1 2 3 4 

class Display
{
    //CHarecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    DisplayNum()
    {
        for(let i : number = -this.No1;i <= this.No1;i++)
        {
            process.stdout.write(i.toString()+ ' ');
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please Enter Number : ");

var obj = new Display(Value);

obj.DisplayNum()

