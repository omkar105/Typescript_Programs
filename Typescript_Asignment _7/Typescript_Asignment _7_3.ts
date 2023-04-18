//  Write a program which accept number from user and return the count of digits in between 3 and 7. 
//  Input : 2395 
//  Output : 1

class CountDigits
{
    //Charecteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Digit()
    {
        let iDigit : number = 0;
        let Count : number = 0;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10;
            if ((iDigit > 3) && (iDigit < 7))
            {
                Count = Count + 1;
            }
            this.No1 = ~~(this.No1 / 10)
        }
        return Count
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please Enter NUmber : ")

var obj = new CountDigits(Value);

var iRet = obj.Digit()

console.log(iRet)