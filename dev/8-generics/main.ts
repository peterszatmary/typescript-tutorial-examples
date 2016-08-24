class GenericType<T> {
    printItem(item : T) : void {
        console.info(item + " is there.")
    }

    returnItem(item : T) : T {
        return item
    }
}

class VehicleType {
    toString = () : string => {
        return "Vehicle"
    }
}

let t = new GenericType<string>()
t.printItem("string")
console.info(t.returnItem("string"))

let m = new GenericType<VehicleType>()
let vehicleType = new VehicleType()
m.printItem(vehicleType)
console.info(m.returnItem(vehicleType).toString())