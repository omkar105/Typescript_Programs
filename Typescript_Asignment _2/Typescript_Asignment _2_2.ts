// Accept one number from user and print that number of * on screen.    //

class Show
{
    //characteristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }
    Display()
    {
        while(this.No1 > 0)
        {
            console.log("*");
            this.No1--;
        }
    }
}
 import * as PromptSync from "prompt-sync"

 const Prompt = PromptSync()

 var Value = Prompt("Please Enter Number : ")

 var obj = new Show(Value)

 obj.Display()