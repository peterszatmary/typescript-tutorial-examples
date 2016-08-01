class Elephant2 {

    // access keywords, object atribute (property)
    private _name : string

    private _age : number

    private _vaccination : boolean


    /**
     *
     * if constructor parameter is public you dont have to declare it in class, is already
     * visible like this._name but vidible also outside class scope !!
     *
     * @param _nameParam
     * @param _ageParam
     * @param _vaccination
     */
    constructor(_nameParam : string, _ageParam : number, _vaccination : boolean) {
        this._name = _nameParam
        this._age = _ageParam
        this._vaccination = _vaccination
    }

    /**
     * getter example
     * @returns {string}
     */
    get name() : string {
        return this._name
    }

    get age() : number {
        return this._age
    }

    get vaccination() : boolean {
        return this._vaccination
    }

    /**
     * setter example
     * @param name
     */
    set name(name : string) {
        this._name = name
    }

    set age(age : number) {
        this._age = age
    }

    set vaccination(vaccination : boolean) {
        this._vaccination = vaccination
    }

}

let elephant2 : Elephant2 = new Elephant2("elephant 2", 10, true);
console.log("elephant => name = " + elephant2.name + ", age = " + elephant2.age + ", vaccination = " + elephant2.vaccination);