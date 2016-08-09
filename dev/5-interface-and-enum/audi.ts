function printCar(car : VehicleInterface, equipment : VehicleEquipment) {
    console.log(
        "=> name = " + car.name + " " +
        "=> speed = " + car.speed + " " +
        "=> price = " + car.getPrice(equipment) + " " +
        "=> sport = " + car.sport)
}

interface VehicleInterface { // interface example
    speed : number
    name : string
    sport? : boolean
    getPrice : (equipment : VehicleEquipment) => number
    // or
    // getPrice(equipment : VehicleEquipment) : number
}

enum VehicleEquipment { // enum example
    NONE,
    FULL
}


class Audi implements VehicleInterface { // class implementing interface example
    speed : number = 230
    name : string = "Audi R8"
    sport :  boolean = true
    getPrice = (equipment : VehicleEquipment) => VehicleEquipment.NONE == equipment ? 1000 : 3500
}

class BMW implements VehicleInterface { // class implementing interface example
    speed:number = 220
    name:string = "BMW"
    getPrice = (equipment : VehicleEquipment) => VehicleEquipment.NONE == equipment ? 2200 : 4500
}



let car : VehicleInterface = new Audi()
printCar(car, null)
car = new BMW()
printCar(car, VehicleEquipment.FULL)

