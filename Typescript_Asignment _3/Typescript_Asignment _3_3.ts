//  Write a program which accept number from user and print even factors of that number. 
//  Input : 36 
//  Output: 2 6 12 18

class factor
{
    //charecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    EvenFactor()
    {
        let i :  number = 0

        for (i = 1; i <= (this.No1/2)+1; i++ )
        {
            if ((this.No1 % i == 0) && (i % 2 == 0))
            {
                console.log(i)
            }
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please enter Value : ")

var obj = new factor(Value)

obj.EvenFactor()