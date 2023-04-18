//  Write a program which accept number from user and return difference between summation of even digits and summation of odd digits. 
//  Input : 2395 
//  Output : -15 (2 - 17)

class SumDigits
{
    //Charecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Digits()
    {
        let iDigit : number = 0;
        let SumEven : number = 0;
        let SumOdd : number = 0;
        let Result : number = 0;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10;
            if (iDigit % 2 == 0)
            {
                SumEven = SumEven + iDigit;
            }
            else
            {
                SumOdd = SumOdd + iDigit;
            }
            this.No1 = ~~(this.No1/10);
        }
        Result = SumEven - SumOdd
        return Result
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please Enter Number : ");

var obj = new SumDigits(Value);

var iRet = obj.Digits()

console.log(iRet)