//       Accept one number from user and print that number of * on screen.      //
var Show = /** @class */ (function () {
    //Behaviour
    function Show(N) {
        this.No1 = N;
    }
    Show.prototype.Display = function () {
        var i = 0;
        for (i = 0; i < this.No1; i++) {
            console.log("*");
        }
    };
    return Show;
}());
var obj = new Show(10);
obj.Display();
