//  Accept one number and check whether is is divisible by 5 or not.    //

class Arithmatic
{
    //charactristics
    No1 : number

    //Behaviour
    constructor(N : number)
    {
        this.No1 = N;
    }

    Division()
    {
        if (this.No1 % 5 == 0)
        {
            console.log("Divisible by 5")
        }
        else
        {
            console.log("Not Divisible by 5")
        }
    }
}

var obj = new Arithmatic(25)
obj.Division()