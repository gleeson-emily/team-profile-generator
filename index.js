const inquirer = require('inquirer');
const fs = require('fs');
const codeTemplate = require('./src/codetemplate.js')
const Manager = require('./library/manager');
const Engineer = require('./library/engineer.js');
const Intern = require('./library/intern.js');
const employeeList = []

const questions = [
    {
    type: "list",
    name: "role",
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
      if (!isNaN(parseInt(idInput))) {
           return true;
       } else {
           console.log("Please enter a number!")
           return false;
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
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log("Please enter a number!")
                return false;
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
                        switch(response.role){
                            case 'Manager':
                            const manager=new Manager(response.firstName,response.lastName,response.idNumber,response.emailAddress,response.officeNumber)
                            employeeList.push(manager)
                            break;
                            case 'Engineer':
                                const engineer=new Engineer(response.firstName,response.lastName,response.idNumber,response.emailAddress,response.github)
                                employeeList.push(engineer)
                                break;
                            case 'Intern':
                                const intern=new Intern(response.firstName,response.lastName,response.idNumber,response.emailAddress,response.school)
                                employeeList.push(intern)
                                break;
                            default:
                                break;
                        }
                   if (response.addMore === true) {
                       userQuestions(); 
                   } else {
                        const answers = codeTemplate(employeeList)
                        writePage(`${employeeList[0].firstName}-team.html`, answers)
                   };
               });
        };

function startQuestion() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'startQuiz',
        message: 'Welcome to the Team Profile Generator! Would you like to build a webpage for your team?',
        default: true,
    }])
    .then((response) => {
        if(response = true){
            userQuestions();
        }
        else {
            return;
        }
    })
}


startQuestion();







 
