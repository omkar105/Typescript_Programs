//  Write a program which accept number from user and return summation of all its non factors. 
//  Input : 12 
//  Output : 50

class SumFactor
{
    //CHarectristics
    No1 : number

    //behavior
    constructor(N : number)
    {
        this.No1 = N;
    }

    Factor()
    {
        let i : number = 0;
        let Ans : number = 0
        for (i = 1;i < this.No1; i++)
        {
            if (this.No1 % i != 0)
            {
                Ans = Ans + i;
            }
        }
        return Ans
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()
var Ret : number = 0
var Value = prompt("Please Eneter Number : ")

var obj = new SumFactor(Value)
Ret = obj.Factor()
console.log(Ret)
