const Employee = require('./employee.js')



class Manager extends Employee {
    constructor(firstName, lastName, id, email, officeNumber) {
    super(firstName, lastName, id, email)
    this.role = "Manager"
    this.officeNumber = officeNumber;
    }
getRole() {
        return `${this.role}`
    }
getOfficeNumber() {
    return `${this.officeNumber}`
}
}





module.exports = Manager;