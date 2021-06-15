class Employee {
    constructor (firstName, lastName, id, email, role) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.email = email
    this.role = role
}
getName() {
    return `${this.firstName} ${this.lastName}`;
    }

getId(enterId) {
    if (enterId = "") {
        console.log("Please enter an ID number.")
        return;
    } else if (enterId != "0123456789") {
        console.log("Please enter a number.")
        return;
    } else {
        enterId = this.id;
        return `${this.id}`;
    }
}

getEmail(enterEmail) {
    if (enterEmail = "") {
        console.log("Please enter an email address.")
        return 
    } else {
        enterEmail = this.email;
        return `${this.email}`;
    }
}
getRole() {
    role = "Employee";
    return `${this.role}`;
    };
}

 module.exports = Employee;

