const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('events');
const employeeList = []

const questions = [{
    type: "list",
    name: "position",
    message: "Which employee would you like to add?",
    choices: 
        () => {
        if(employeeList.some(employee => employee.role === "Manager")) {
            return ["Engineer", "Intern"]
        } else {
            return ["Manager", "Engineer", "Intern"]
        }
    } 
},  {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?",
    validate: firstNameInput => {
        if (firstNameInput) {
            return true
        } else {
            console.log("Please enter a first name.")
            return false
        }
    }
},
{   type: "input",
    name: "lastName",
    message: "What is the employee's last name?",
    validate: lastNameInput => {
        if(lastNameInput) {
            return true
        } else {
            console.log("Please enter a last name.")
            return false
        }
    }

}, 
{
    type: "input",
    name: "idNumber",
    message: "What is the employee's ID number?",
    validate: idInput => {
       if (idInput === employeeList.some(employee => employee.id)) {
           console.log("Please enter a different ID number.")
           return false;
       } else if (idInput = NaN) {
           console.log("Please enter a number.")
           return false;
       } else {
           return true;
       }
       }
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is the employee's email address?",
        validate: emailInput => {
            if (emailInput.includes("@")) {
                return true
            } else {
                console.log("Please enter a valid email address.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when: ({ role }) => {
            if (role === "Manager") {
                return true
            } else {
                return false
            }
        },
        validate: officeNumberInput => {
            if (officeNumberInput == NaN) {
                console.log("Please enter a valid number.")
                return false
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: ({role}) => {
            if (role === "Engineer") {
                return true
            } else {
                return false
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log("Please enter a GitHub username.")
            }
        }
    },
{
},

]