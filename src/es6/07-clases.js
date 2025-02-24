class User {
    constructor(name) {
        console.log("Nuevo Usuario")
        this._name = name;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    greeting() {
        return "Hola";
    }
}

const gndx = new User("ana");
console.log(gndx.greeting());
gndx.name = "Sebastian";
console.log(gndx.name);


