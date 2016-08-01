var Elephant2 = (function () {
    /**
     *
     * if constructor parameter is public you dont have to declare it in class, is already
     * visible like this._name but vidible also outside class scope !!
     *
     * @param _nameParam
     * @param _ageParam
     * @param _vaccination
     */
    function Elephant2(_nameParam, _ageParam, _vaccination) {
        this._name = _nameParam;
        this._age = _ageParam;
        this._vaccination = _vaccination;
    }
    Object.defineProperty(Elephant2.prototype, "name", {
        /**
         * getter example
         * @returns {string}
         */
        get: function () {
            return this._name;
        },
        /**
         * setter example
         * @param name
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elephant2.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elephant2.prototype, "vaccination", {
        get: function () {
            return this._vaccination;
        },
        set: function (vaccination) {
            this._vaccination = vaccination;
        },
        enumerable: true,
        configurable: true
    });
    return Elephant2;
}());
var elephant2 = new Elephant2("elephant 2", 10, true);
console.log("elephant => name = " + elephant2.name + ", age = " + elephant2.age + ", vaccination = " + elephant2.vaccination);
//# sourceMappingURL=elephant2.js.map