// example of abstract class
abstract class Vehicle {

    // protected ones
    protected name : string = "Basic name"
    protected sport : boolean = false

    // not protected atributes but abstract methods, mixed just for explanation
    public abstract getSpeed() : number
    public abstract getPrice() : number

    constructor(_name : string, _sport? : boolean) {
        this.name = _name
        this.sport = _sport
    }

    // overriden toString in Object
    toString = () : string => {
        return "Vehicle = [ name : " + this.name + " , sport : " + this.sport + " , " +
            "speed : " + this.getSpeed() + " , price : " + this.getPrice() + "]"
    }
}


class Ferrari extends Vehicle {

    constructor() {
        super("My Ferrari", true)
    }

    getSpeed() : number {
        return 250;
    }

    getPrice() : number {
        return 5600;
    }
}

class Ford extends Vehicle {

    constructor() {
        super("My Ford", false)
    }

    getSpeed() : number {
        return 190;
    }

    getPrice() : number {
        return 3000;
    }
}


// executable
let vehicle : Vehicle = new Ferrari()
console.log(vehicle)
console.log(vehicle.toString())
vehicle = new Ford()
console.log(vehicle)
console.log(vehicle.toString())