//   Program to print 5 times “Marvellous” on screen.   //

class Show
{
    //charateristics
    Data : string
    
    //Behaviour
    constructor(D : string)
    {
        this.Data = D;
    }

    Display()
    {
        let i : number = 0
        for(i = 0 ;i < 5; i++)
        {
            console.log(this.Data)

        }
    }
}

var obj = new Show("Marvellous")
obj.Display()

