const inquirer = require('inquirer');
const fs = require('fs');
const codeTemplate = require('./src/codetemplate.js')
const employeeList = []



const questions = [
    {
    type: "list",
    name: "role",
    message: "Welcome to the Team Profile Generator! Which employee would you like to add?",
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
       } else if (idInput.includes(NaN)) {
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
            if (officeNumberInput.includes(NaN)) {
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
                return false
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        when: ({role}) => {
            if (role === "Intern") {
                return true
            } else {
                return false
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true
            } else {
                console.log("Please enter a school name.")
                return false
            }
        }
},
    {
        type: "confirm",
        name: "addMore",
        message: "Would you like to add another employee?",
        default: true,
        validate: addMoreInput => {
            if (addMoreInput === false)
            {
                return;
            }
        }
    }
]




function writePage(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("Page successfully created!");
   }
    )}


 function userQuestions() {
                   inquirer.prompt(questions)
                    .then((response) => {
                   employeeList.push(response);
                   console.log(employeeList)
                   if (response.addMore === true) {
                       console.log(response.addMore)
                       return userQuestions(); 
                   } else {
                       console.log(employeeList)
                        const answers = codeTemplate.codeTemplate(JSON.stringify(employeeList))
                        console.log(answers)
                        console.log(`${response.firstName}`);
                        writePage(`${response.firstName}.html`, answers)
                   };
               });
        };




userQuestions();



    // .then((response) => {
    //     const answers = codeTemplate.addEmployeeCards(response)
    //     writePage(`ourteam.html`, answers)
    // })


    // userQuestions(questions)
    // .then((response) => {
    //     const answers = codeTemplate.addEmployeeCard(response);
    //     writePage(`${response.Manager.firstNameInput}.html`, answers)
    // });



 
