const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(firstName, lastName, id, email, school) {
        super(firstName, lastName, id, email)

        this.role = "Intern";
        this.school = school;
    }

getRole() {
        return `${this.role}`
    }
getSchool() {
    return `${this.school}`;
}
}
module.exports = Intern