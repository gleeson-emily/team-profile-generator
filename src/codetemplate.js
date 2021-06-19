const Employee = require('../library/employee.js');
const Manager = require('../library/manager.js');
const Engineer = require('../library/engineer.js');
const Intern = require('../library/intern.js');



function addEmployeeCard() {
    let employeeCards = "";
    let newCard = '';
    let roleInfo = '';
    console.log(({role}));
    
        switch ([{role}]) {
            case "Manager":
                newCard = new Manager(firstName, lastName, id, email);
                roleInfo = `Office Number: ${employeeInfo.getOfficeNumber()}`;
                break;

            case "Engineer":
                newCard = new Engineer(firstName, lastName, id, email);
                roleInfo = `GitHub: ${employeeInfo.getGithub()}`;
                break;
            
            case "Intern":
                newCard = new Intern(firstName, lastName, id, email);
                roleInfo = `School: ${employeeInfo.getSchool()}`;
                break;

            default:
                newCard = new Employee(firstName, lastName, id, email);
        
        };
  
   employeeCards += `
   <div class="container-fluid" id="employee-card">
      <div class="container">
      <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header"><h5 class="card-title">${role}</h5></div>
        <div class="card-body">
          <p class="card-text">${firstName} ${lastName}</p>
          <p class="card-text">ID Number: ${id}</p>
          <p class="card-text">Email: ${email}</p>
          <p class="card-text">${roleInfo}</p>
        </div>
    </div>
</div>`
    
    return employeeCards;};


   

function codeTemplate(response) { 
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Meet Our Team!</title>
</head>
<body> 
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4">Meet Our Team!</h1>
  </div>
    ${addEmployeeCard(response)}
    </body>
    </html>`
}

module.exports = {codeTemplate};