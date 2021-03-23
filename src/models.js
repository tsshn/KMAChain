/**
 * For a record book, not much metadata is needed.
 * For example, AcademicProgram only needs its name and number, and a faculty could just have full name,
 * and a shotName for convenience.
 */

class AcademicProgram {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

class Faculty {
    constructor(name, shortName) {
        this.name = name;
        this.shortName = shortName;
    }
}

const numberToLetterMark = (mark) => {
    if(mark >= 91 && mark <= 100) {
        return 'A';
    }
    else if (mark >= 81 && mark <= 90) {
        return 'B';
    }
    else if (mark >= 71 && mark <= 80) {
        return 'C';
    }
    else if (mark >= 66 && mark <= 70) {
        return 'D';
    }
    else if (mark >= 60 && mark <= 65) {
        return 'E';
    }
    else if (mark < 60) {
        return 'F';
    }
    else throw new Error('Mark ' + mark + ' is not a valid mark and cannot be converted to alphabetic representation')
}

class Mark {
    constructor(mark) {
        if(typeof(mark) == 'number') {
            this.numericMark = mark;
            this.alphabeticMark = numberToLetterMark(mark);
        }
        else if (typeof(mark) == 'string') {
            this.alphabeticMark = mark;
        }
        else throw new Error('Mark ' + mark + ' is not a number, nor a string');
    }
    getNumericMark() {
        if(typeof(this.numericMark) != 'undefined') {
            return this.numericMark;
        }
        else throw new Error('Numeric mark is not defined on this object, maybe you provided the mark in alphabetic form?');
    }
    getAlphabeticMark() {
        return this.alphabeticMark;
    }
}

// class Assignment {
//     constructor(name, shortDescription, ) {
//     }
// }
// TODO finish implementing models

module.exports = {
    Faculty: Faculty,
    AcademicProgram: AcademicProgram,
    Mark: Mark,
};