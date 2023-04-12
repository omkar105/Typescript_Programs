//       Accept one number from user and print that number of * on screen.      //

class Show
{
    //charactristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Display()
    {
        let i : number = 0
        for(i = 0; i < this.No1; i++)
        {
            console.log("*")
        }
    }
}

var obj = new Show(10)
obj.Display()