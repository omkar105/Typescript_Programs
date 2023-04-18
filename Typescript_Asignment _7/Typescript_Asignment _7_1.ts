//  Write a program which accept number from user and return the count of even digits. 
//  Input : 2395 
//  Output : 1 

class EvenDigits
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
        let Counter : number = 0;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10;
            if (iDigit % 2 == 0)
            {
                Counter = Counter + 1;
            }
            this.No1 = ~~(this.No1/10)
        }
        return Counter
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please Enter Number : ")

var obj = new EvenDigits(Value)

var iRet : number = obj.Digit()

console.log(iRet)