const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(firstName, lastName, id, school) {
        super(firstName, lastName, id)

        this.role = "Intern";
        this.school = school;
    }

getSchool() {
    return `${this.school}`;
}
}
module.exports = Intern