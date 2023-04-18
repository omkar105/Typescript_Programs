//  Write a program which accepts N from user and print all odd numbers up to N. 
//  Input : 18 
//  Output : 1 3 5 7 9 11 13

class Show
{
    //Charecteristics
    No1 : number

    //Beahviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    OddNumber()
    {
        for(let i : number = 1;i < this.No1;i++)
        {
            if(i % 2 != 0)
            {
                process.stdout.write(i.toString()+ ' ')
            }
        }
    }
}

import * as Prompt from 'prompt-sync'

const prompt = Prompt();

var Value = prompt("Please enter Number : ")

var obj = new Show(Value);

obj.OddNumber()