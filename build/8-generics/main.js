var GenericType = (function () {
    function GenericType() {
    }
    GenericType.prototype.printItem = function (item) {
        console.info(item + " is there.");
    };
    GenericType.prototype.returnItem = function (item) {
        return item;
    };
    return GenericType;
}());
var VehicleType = (function () {
    function VehicleType() {
        this.toString = function () {
            return "Vehicle";
        };
    }
    return VehicleType;
}());
var t = new GenericType();
t.printItem("string");
console.info(t.returnItem("string"));
var m = new GenericType();
var vehicleType = new VehicleType();
m.printItem(vehicleType);
console.info(m.returnItem(vehicleType).toString());
//# sourceMappingURL=main.js.map