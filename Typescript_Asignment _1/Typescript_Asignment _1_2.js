//   Program to print 5 times “Marvellous” on screen.   //
var Show = /** @class */ (function () {
    //Behaviour
    function Show(D) {
        this.Data = D;
    }
    Show.prototype.Display = function () {
        var i = 0;
        for (i = 0; i < 5; i++) {
            console.log(this.Data);
        }
    };
    return Show;
}());
var obj = new Show("Marvellous");
obj.Display();
