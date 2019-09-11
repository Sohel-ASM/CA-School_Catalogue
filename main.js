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
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students, typically between the ages of ${this.level} level.`);
    }
    static pickSubstituteTeacher(substituteTeacher) {
        let randomNumber = Math.floor(Math.random() * (substituteTeacher.length));
        let pickTeacher = substituteTeacher[randomNumber];
        return pickTeacher;
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

const lorraineHansbury = new PrimarySchool('Loarraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

let substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli', 'Shannon Grey', ];

console.log('Substitute Teacher: ' + School.pickSubstituteTeacher(substituteTeachers));

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

const centralCatholic = new MiddleSchool('Central Catholic Middle School', 500);

console.log(centralCatholic.quickFacts());
