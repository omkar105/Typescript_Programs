//  Write a program which accept number from user and return difference between summation of all its factors and non factors.
//  Input : 12 
//  Output : -34 (16 - 50)

class SumFactor
{
    //charectristics
    No1 : number

    //behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Factor()
    {
        let Ans : number = 0;
        let i : number = 0;
        for (i = 0 ; i < this.No1; i++)
        {
            if (this.No1 % i == 0)
            {
                Ans = Ans + i
            }
            else
            {
                Ans = Ans - i
            }
        }
        return Ans
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please ENeter Value : ")

var obj = new SumFactor(Value)

var Ret : number  = obj.Factor()

console.log(Ret)