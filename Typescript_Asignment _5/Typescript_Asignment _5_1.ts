//  Write a program which accept number from user and display its digits in reverse order. 
//  Input : 2395 
//  Output :5 
//          9 
//          3 
//          2 


class Display
{
    //charectreristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Digits()
    {
        let iDigit : number = 0
        while(this.No1 > 0)
        {
            iDigit = this.No1 % 10
            console.log(iDigit)
            this.No1 = ~~(this.No1 / 10) //~~ give only integer value  
        }
    }
}
 import * as Prompt from 'prompt-sync'

 const prompt = Prompt()

 var Value = prompt("Please Enter Number : ")

 var obj = new Display(Value)

 obj.Digits()