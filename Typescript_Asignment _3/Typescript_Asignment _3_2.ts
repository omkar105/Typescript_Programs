//  Write a program which accept number from user and print factors of that number. 
//  Input : 24 
//  Output: 1 2 4 6 8 12 


class factors
{
    //charestrics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Factor()
    {
        let i : number = 0;
        for (i = 1; i < (this.No1/2)+1; i++)
        {
            if (((this.No1 % i) == 0))
            {
                console.log(i)

            }

        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please Enter Value : ")

var obj = new factors(Value)

obj.Factor()