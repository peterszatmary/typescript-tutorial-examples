function printCar(car, equipment) {
    console.log("=> name = " + car.name + " " +
        "=> speed = " + car.speed + " " +
        "=> price = " + car.getPrice(equipment) + " " +
        "=> sport = " + car.sport);
}
var VehicleEquipment;
(function (VehicleEquipment) {
    VehicleEquipment[VehicleEquipment["NONE"] = 0] = "NONE";
    VehicleEquipment[VehicleEquipment["FULL"] = 1] = "FULL";
})(VehicleEquipment || (VehicleEquipment = {}));
var Audi = (function () {
    function Audi() {
        this.speed = 230;
        this.name = "Audi R8";
        this.sport = true;
        this.getPrice = function (equipment) { return VehicleEquipment.NONE == equipment ? 1000 : 3500; };
    }
    return Audi;
}());
var BMW = (function () {
    function BMW() {
        this.speed = 220;
        this.name = "BMW";
        this.getPrice = function (equipment) { return VehicleEquipment.NONE == equipment ? 2200 : 4500; };
    }
    return BMW;
}());
var car = new Audi();
printCar(car, null);
car = new BMW();
printCar(car, VehicleEquipment.FULL);
//# sourceMappingURL=audi.js.map