//  Write a program which accept number from user and return multiplication of all digits. 
//  Input : 2395 
//  Output : 270 

class DigitMult
{
    //CHarecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Multiplication()
    {
        let iDigit : number = 0;
        let Result : number = 1;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10;
            if (iDigit == 0)
            {
                iDigit = 1
            } 
            Result = Result * iDigit
            this.No1 = ~~(this.No1 / 10)
        }
        return Result
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please ENeter Number : ")

var obj = new DigitMult(Value)

var iRet = obj.Multiplication()

console.log(iRet)