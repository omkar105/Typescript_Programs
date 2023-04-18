//  Write a program which accept number from user and return the count of odd digits. 
//  Input : 2395
//  Output : 3 

class OddDigit
{
    //Characteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Digits()
    {
        let iDigit : number = 0;
        let Count : number = 0;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10;
            if (iDigit % 2 != 0)
            {
                Count = Count + 1;
            }
            this.No1 = ~~(this.No1/10);
        }
        return Count
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please Enter Number : ");

var obj = new OddDigit(Value);

var iRet = obj.Digits();

console.log(iRet)
