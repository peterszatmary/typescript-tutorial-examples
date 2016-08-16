// narrow with interface
interface SquareInterface {
    (x : number) : number
}

class Lecture7 {

    // function type
    hello : Function = (input : string) => {
        console.log("hello " + input)
        return "hello " + input
    }

    // varargs example
    varargs(...objects : string[]) : void {
        for (let i = 0; i < objects.length; i++) {
            console.log(objects[i])
        }
    }

    // object literal like parameter in function
    squareIt = function(rect : {h : number, w : number}) {
        return rect.h * rect.w;
    }

    // narrow version of squareIt
    squareItNarrow = (rect : {h : number, w : number}) => rect.h * rect.w

    squareItNarrowLog = (rect : {h : number, w : number}) => {
        let result : number = rect.h * rect.w
        console.log(result)
        return result
    }

    // array example
    arrayExample = (toPrint : string[]) => {
        for (let i = 0; i < toPrint.length; i++) {
            console.log(toPrint[i])
        }
    }

    // tupple example
    tupleExample = (num : [number, number, number]) => {
        console.log(num[0] + "-" + num[1] + "-" + num[2])
    }

    squareItNarrowInt : SquareInterface = (num) => 4 * num
}

// executable
let lecture7 : Lecture7 = new Lecture7()
lecture7.hello("world")
lecture7.varargs("one", "two")
lecture7.varargs("one")

let result : number = lecture7.squareItNarrowInt(2)
console.log(result)

let result2 : number = lecture7.squareIt({h : 1, w : 2})
console.log(result2)

let result3 : number = lecture7.squareItNarrow({h : 4, w : 5})
console.log(result3)

let arrayEx : string[] = ["first","second","third"]
lecture7.arrayExample(arrayEx)

lecture7.tupleExample([11,22,33])

// typed object literal obj
let obj : {h : number, w : number} = {h : 3, w : 3}
lecture7.squareItNarrowLog(obj)

// declaring new Object type Obj
type Obj = {h : number, w : number}
let o : Obj = {h : 1, w  :2}
lecture7.squareItNarrowLog(o)

