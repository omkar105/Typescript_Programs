//  Write a program which accept N and print first 5 multiples of N. 
//  Input : 4 
//  Output : 4 8 12 16 20

class Show
{
    //Charecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    DisplayMultiple()
    {
        for(let i : number = 1;i <= 5;i++)
        {
            process.stdout.write((i * this.No1).toString()+ ' ')
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please enter Number : ");

var obj = new Show(Value);

obj.DisplayMultiple()
