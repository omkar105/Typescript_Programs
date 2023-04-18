//  Write a program which accept number from user and check whether it contains 0 in it or not. 
//  Input : 2395 
//  Output : There is no Zero 

class CheckZero
{
    //Characteristics
    No1 : number 

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N ;
    }

    Display()
    {
        let iDigit : number = 0;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10
            if (iDigit == 0)
            {
                return iDigit;
            }
            this.No1 = ~~(this.No1 /10)
        }
        return iDigit
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please ENter Value : ")

var obj = new CheckZero(Value)

var iRet : number = obj.Display()

if (iRet == 0)
{
    console.log("There is Zero ")
}
else
{
    console.log("There is no Zero ")
}