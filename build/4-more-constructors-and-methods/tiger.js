// you cannot have multiple constructors or overloaded methods like in other
// languages. but you can make this trick with "?" right after parameter
var Tiger = (function () {
    /**
     *
     * @param _nameParam
     * @param _ageParam
     * @param _vaccination
     */
    function Tiger(_nameParam, _ageParam, _vaccination) {
        var _this = this;
        /**
         * lambda version (in typescript called arrow function) of calculateNextVaccination with ternary operator
         *
         * call this like
         *
         * lambdacalculateNextVaccination()
         * lambdacalculateNextVaccination(20
         * )
         * @param cf
         */
        this.lambdaCalculateNextVaccination = function (cf) { return (cf == undefined || cf == 0) ? _this._age : cf + 1; };
        this._name = _nameParam;
        this._age = _ageParam;
        this._vaccination = _vaccination;
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tiger.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tiger.prototype, "vaccination", {
        get: function () {
            return this._vaccination;
        },
        set: function (vaccination) {
            this._vaccination = vaccination;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * calculateNextVaccination()
     * calculateNextVaccination(20)
     *
     * @param coeficient
     * @returns {number}
     */
    Tiger.prototype.calculateNextVaccination = function (coeficient) {
        if (coeficient == undefined || coeficient == 0) {
            return this._age;
        }
        else {
            return coeficient + 1;
        }
    };
    return Tiger;
}());
var tiger1 = new Tiger("Tiger1");
console.log("tiger1 => name = " + tiger1.name + ", age = " + tiger1.age + ", vaccination = " + tiger1.vaccination);
console.log(tiger1.calculateNextVaccination());
console.log(tiger1.calculateNextVaccination(23));
console.log(tiger1.lambdaCalculateNextVaccination());
console.log(tiger1.lambdaCalculateNextVaccination(23));
var tiger2 = new Tiger("Tiger2", 14);
console.log("tiger2 => name = " + tiger2.name + ", age = " + tiger2.age + ", vaccination = " + tiger2.vaccination);
console.log(tiger2.calculateNextVaccination());
console.log(tiger2.calculateNextVaccination(12));
console.log(tiger2.lambdaCalculateNextVaccination());
console.log(tiger2.lambdaCalculateNextVaccination(12));
var tiger3 = new Tiger("Tiger3", 10, true);
console.log("tiger3 => name = " + tiger3.name + ", age = " + tiger3.age + ", vaccination = " + tiger3.vaccination);
console.log(tiger3.calculateNextVaccination());
console.log(tiger3.calculateNextVaccination(9));
console.log(tiger3.lambdaCalculateNextVaccination());
console.log(tiger3.lambdaCalculateNextVaccination(9));
//# sourceMappingURL=tiger.js.map