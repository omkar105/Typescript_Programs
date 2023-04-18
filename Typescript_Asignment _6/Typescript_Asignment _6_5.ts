//  Write a program which accept number from user and count frequency of such a digits which are less than 6.
//  Input : 2395 
//  Output : 3 

class Frequency
{
    //Charecteristics
    No1 : number

    //Beahviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Display()
    {
        let iDigit : number = 0;
        let Cont : number = 0;
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10
            if (iDigit < 6)
            {
                Cont = Cont + 1
            }
            this.No1 = ~~(this.No1 / 10)
        }
        return Cont
    }
}

import * as Prompt from "prompt-sync"

const prompt = Prompt();

var Value = prompt("Please Enter Value : ")

var obj = new Frequency(Value)

var iRet : number = obj.Display()

console.log(iRet)