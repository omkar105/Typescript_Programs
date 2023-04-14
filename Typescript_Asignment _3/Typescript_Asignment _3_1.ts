// Write a program which accept one number from user and print that number of even numbers on screen 
// Input : 7 
// Output: 2 4 6 8 10 12 14

class even
{
    //charecteristics
    No1 : number

    //Beharviour
    constructor(N: number)
    {
        this.No1 = N;
    }

    DisplayEven()
    {
        let i : number = 0;
        for (i = 1; i <= this.No1; i++ )
        {
            console.log(i*2)
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please Enter the Value : ")

var obj = new even(Value)

obj.DisplayEven()






