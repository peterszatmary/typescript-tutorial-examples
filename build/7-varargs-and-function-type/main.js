var Lecture7 = (function () {
    function Lecture7() {
        // function type
        this.hello = function (input) {
            console.log("hello " + input);
            return "hello " + input;
        };
        // object literal like parameter in function
        this.squareIt = function (rect) {
            return rect.h * rect.w;
        };
        // narrow version of squareIt
        this.squareItNarrow = function (rect) { return rect.h * rect.w; };
        this.squareItNarrowLog = function (rect) {
            var result = rect.h * rect.w;
            console.log(result);
            return result;
        };
        // array example
        this.arrayExample = function (toPrint) {
            for (var i = 0; i < toPrint.length; i++) {
                console.log(toPrint[i]);
            }
        };
        // tupple example
        this.tupleExample = function (num) {
            console.log(num[0] + "-" + num[1] + "-" + num[2]);
        };
        this.squareItNarrowInt = function (num) { return 4 * num; };
    }
    // varargs example
    Lecture7.prototype.varargs = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i - 0] = arguments[_i];
        }
        for (var i = 0; i < objects.length; i++) {
            console.log(objects[i]);
        }
    };
    return Lecture7;
}());
// executable
var lecture7 = new Lecture7();
lecture7.hello("world");
lecture7.varargs("one", "two");
lecture7.varargs("one");
var result = lecture7.squareItNarrowInt(2);
console.log(result);
var result2 = lecture7.squareIt({ h: 1, w: 2 });
console.log(result2);
var result3 = lecture7.squareItNarrow({ h: 4, w: 5 });
console.log(result3);
var arrayEx = ["first", "second", "third"];
lecture7.arrayExample(arrayEx);
lecture7.tupleExample([11, 22, 33]);
// typed object literal obj
var obj = { h: 3, w: 3 };
lecture7.squareItNarrowLog(obj);
var o = { h: 1, w: 2 };
lecture7.squareItNarrowLog(o);
//# sourceMappingURL=main.js.map