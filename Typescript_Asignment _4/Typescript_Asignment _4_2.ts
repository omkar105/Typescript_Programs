//  Write a program which accept number from user and display its factors in decreasing order. 
//  Input : 12 
//  Output : 6 4 3 2 1


class ReverseFactor
{
    //Charecteristics
    No1 : number

    //Behaviour
    constructor(N: number)
    {
        this.No1 = N;
    }

    Factor()
    {
        let i : number = 0;

        for (i = this.No1/2; i > 0;i--)
        {
            if (this.No1 % i == 0)
            {
                console.log(i)
            }
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();
var Value = prompt("Please enter number: ")

var obj = new ReverseFactor(Value)
obj.Factor()
