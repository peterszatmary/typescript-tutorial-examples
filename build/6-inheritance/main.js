var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// instance of example
function checkType(vehicle) {
    if (vehicle instanceof Ford) {
        return "It is Ford";
    }
    else if (vehicle instanceof Ferrari) {
        return "It is Ferrari";
    }
    else {
        return "It is unknown";
    }
}
// example of abstract class
var Vehicle = (function () {
    function Vehicle(_name, _sport) {
        var _this = this;
        // protected ones
        this.name = "Basic name";
        this.sport = false;
        // overriden toString in Object
        this.toString = function () {
            return "Vehicle = [ name : " + _this.name + " , sport : " + _this.sport + " , " +
                "speed : " + _this.getSpeed() + " , price : " + _this.getPrice() + "]";
        };
        this.name = _name;
        this.sport = _sport;
    }
    return Vehicle;
}());
var Ferrari = (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari() {
        _super.call(this, "My Ferrari", true);
    }
    Ferrari.prototype.getSpeed = function () {
        return 250;
    };
    Ferrari.prototype.getPrice = function () {
        return 5600;
    };
    return Ferrari;
}(Vehicle));
var Ford = (function (_super) {
    __extends(Ford, _super);
    function Ford() {
        _super.call(this, "My Ford", false);
    }
    Ford.prototype.getSpeed = function () {
        return 190;
    };
    Ford.prototype.getPrice = function () {
        return 3000;
    };
    return Ford;
}(Vehicle));
// executable
var vehicle = new Ferrari();
console.log(checkType(vehicle));
console.log(vehicle);
console.log(vehicle.toString());
vehicle = new Ford();
console.log(checkType(vehicle));
console.log(vehicle);
console.log(vehicle.toString());
//# sourceMappingURL=main.js.map