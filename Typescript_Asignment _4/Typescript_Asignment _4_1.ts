//  Write a program which accept number from user and display its multiplication of factors. 
//  Input : 12 
//  Output : 144 (1 * 2 * 3 * 4 * 6) 

class MultFactor
{
    //characteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Factor()
    {
        let Ans : number = 1;
        let i : number = 0;
        for (i = 0;i < (this.No1/2)+1; i++)
        {
            if (this.No1 % i == 0)
            {
                Ans = Ans * i;
            }
        }
        return Ans;
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()
var Value = prompt("please enter Number : ")
var Ret : number = 0;
var obj = new MultFactor(Value)
Ret = obj.Factor()
console.log(Ret)
