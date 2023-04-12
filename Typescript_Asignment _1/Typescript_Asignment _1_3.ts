//  Program to print 5 to 1 numbers on screen.  //

class Show
{
    //Characteristics
    Data : number

    //Behaviour
    constructor(D : number)
    {
        this.Data = D;
    }

    Display()
    {
        let i : number = 0;
        while(this.Data > i)
        {
            console.log(this.Data)
            this.Data--
        }
    }
}

var obj = new Show(5)
obj.Display()