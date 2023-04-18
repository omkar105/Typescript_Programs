//  Write a program which accept number from user and print that number of $ & * on screen. 
//  Input : 5 
//  Output : $ * $ * $ * $ * $ * 

class Display
{
    //CHarecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    DisplaySymbol()
    {
        for(let i : number = 0;i < this.No1; i++)
        {
            process.stdout.write("$ * ")
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please enter Number : ");

var obj = new Display(Value);

obj.DisplaySymbol()