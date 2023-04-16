//  Write a program which accept number from user and display all its non factors. 
//  Input : 12 
//  Output : 5 7 8 9 10 11

class display
{
    //Charactristics
    No1 : number

    //Beahviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    
    NonFactor()
    {
        let i : number = 0;
        for (i = 1; i <= this.No1;i++)
        {
            if (this.No1 % i != 0)
            {
                console.log(i)
            }

        }    
    }
}
import * as Prompt from 'prompt-sync'

const prompt = Prompt()

var Value = prompt("Please enter number : ")
var obj =  new display(Value)
obj.NonFactor()