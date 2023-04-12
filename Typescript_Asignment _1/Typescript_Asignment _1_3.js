//  Program to print 5 to 1 numbers on screen.  //
var Show = /** @class */ (function () {
    //Behaviour
    function Show(D) {
        this.Data = D;
    }
    Show.prototype.Display = function () {
        var i = 0;
        while (this.Data > i) {
            console.log(this.Data);
            this.Data--;
        }
    };
    return Show;
}());
var obj = new Show(5);
obj.Display();
