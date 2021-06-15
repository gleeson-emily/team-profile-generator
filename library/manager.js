const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(firstName, lastName, id, email, officeNumber) {
    super(firstName, lastName, id, email, role)
    officeNumber = this.officeNumber 
    this.role = "Manager";
}
getOfficeNumber(office) {
    if (office != "0123456789") {
        return "Please enter a valid office number."
    } else {
        office = this.officeNumber;
        return `${this.officeNumber}`
    }
}
}
module.exports = Manager;