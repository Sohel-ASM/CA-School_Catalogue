class School {
    constructor(name, level, numbeOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(input) {
        if (input.isNaN()) {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        } else {
            this._numberOfStudents = input;
        }
    }

}
