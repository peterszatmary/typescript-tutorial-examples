// you cannot have multiple constructors or overloaded methods like in other
// languages. but you can make this trick with "?" right after parameter
class Tiger {

    private _name : string
    private _age : number
    private _vaccination : boolean

    /**
     *
     * @param _nameParam
     * @param _ageParam
     * @param _vaccination
     */
    constructor(_nameParam : string, _ageParam? : number, _vaccination? : boolean) {
        this._name = _nameParam
        this._age = _ageParam
        this._vaccination = _vaccination
    }

    get name() : string {
        return this._name
    }

    get age() : number {
        return this._age
    }

    get vaccination() : boolean {
        return this._vaccination
    }

    set name(name : string) {
        this._name = name
    }

    set age(age : number) {
        this._age = age
    }

    set vaccination(vaccination : boolean) {
        this._vaccination = vaccination
    }

    /**
     *
     * calculateNextVaccination()
     * calculateNextVaccination(20)
     *
     * @param coeficient
     * @returns {number}
     */
    calculateNextVaccination(coeficient? : number) : number {
        if (coeficient == undefined || coeficient == 0) {
            return this._age
        } else {
            return coeficient + 1
        }
    }

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
    lambdaCalculateNextVaccination = (cf? : number) : number => (cf == undefined || cf == 0) ? this._age : cf + 1

}
let tiger1 : Tiger = new Tiger("Tiger1")
console.log("tiger1 => name = " + tiger1.name + ", age = " + tiger1.age + ", vaccination = " + tiger1.vaccination)
console.log(tiger1.calculateNextVaccination())
console.log(tiger1.calculateNextVaccination(23))
console.log(tiger1.lambdaCalculateNextVaccination())
console.log(tiger1.lambdaCalculateNextVaccination(23))

let tiger2 : Tiger = new Tiger("Tiger2", 14)
console.log("tiger2 => name = " + tiger2.name + ", age = " + tiger2.age + ", vaccination = " + tiger2.vaccination)
console.log(tiger2.calculateNextVaccination())
console.log(tiger2.calculateNextVaccination(12))
console.log(tiger2.lambdaCalculateNextVaccination())
console.log(tiger2.lambdaCalculateNextVaccination(12))

let tiger3 : Tiger = new Tiger("Tiger3", 10, true)
console.log("tiger3 => name = " + tiger3.name + ", age = " + tiger3.age + ", vaccination = " + tiger3.vaccination)
console.log(tiger3.calculateNextVaccination())
console.log(tiger3.calculateNextVaccination(9))
console.log(tiger3.lambdaCalculateNextVaccination())
console.log(tiger3.lambdaCalculateNextVaccination(9))