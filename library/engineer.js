const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(firstName, lastName, id, email, github) {
    super(firstName, lastName, id, email)
    this.role = "Engineer"
    this.github = github;
    }
getRole() {
        return `${this.role}`
    }
getGithub() {
    return `${this.github}`
}
}
module.exports = Engineer