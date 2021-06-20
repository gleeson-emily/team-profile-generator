const Employee = require('../library/employee.js');
const Manager = require('../library/manager.js');
const Engineer = require('../library/engineer.js');
const Intern = require('../library/intern.js');
let employeeCards = [];


function managerCard() {
  let manager = new Manager(response.firstName, response.lastName, response.idNumber, response.emailAddress, response.role, response.officeNumber);
  newCard = `
    <div class="container-fluid" id="employee-card">
       <div class="container">
       <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
         <div class="card-header"><h5 class="card-title">${manager.role}</h5></div>
         <div class="card-body">
           <p class="card-text">${manager.firstName} ${manager.lastName}</p>
           <p class="card-text">ID Number: ${manager.idNumber}</p>
           <p class="card-text">Email: ${manager.emailAddress}</p>
           <p class="card-text">Office Number: ${manager.officeNumber}</p>
         </div>
     </div>
 </div>`
  console.log(newCard)
  employeeCards.push(newCard);
}

function engineerCard() {
  info = new Engineer(response.firstName, response.lastName, response.idNumber, response.emailAddress, response.role, response.github);
  newCard = `
     <div class="container-fluid" id="employee-card">
     <div class="container">
     <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
     <div class="card-header"><h5 class="card-title">${info.role}</h5></div>
      <div class="card-body">
          <p class="card-text">${info.firstName} ${info.lastName}</p>
           <p class="card-text">ID Number: ${info.idNumber}</p>
            <p class="card-text">Email: ${info.emailAddress}</p>
            <p class="card-text">GitHub: ${info.github}</p>
                     </div>
                 </div>
             </div>`
  console.log(newCard)
  employeeCards.push(newCard);
}

function internCard() {
  intern = new Intern(response.firstName, response.lastName, response.idNumber, response.emailAddress, response.role, response.school);
  newCard = `
    <div class="container-fluid" id="employee-card">
       <div class="container">
       <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
         <div class="card-header"><h5 class="card-title">${intern.role}</h5></div>
         <div class="card-body">
           <p class="card-text">${intern.firstName} ${intern.lastName}</p>
           <p class="card-text">ID Number: ${intern.idNumber}</p>
           <p class="card-text">Email: ${intern.emailAddress}</p>
           <p class="card-text">Office Number: ${intern.school}</p>
         </div>
     </div>
 </div>`
  console.log(newCard)
  employeeCards.push(newCard);
}

function addEmployeeCard(employeeCards) { 
  let empCrds = "";
  employeeCards.forEach (employee => {
  switch (employee.getRole()) {
    case employee.getRole() === "Manager":
      empCrds += managerCard(employee)
      break;

    case employee.getRole() === "Engineer":
      empCrds += engineerCard(employee)
      break;

    case employee.getRole() === "Intern":
      empCrds += internCard(employee)
      break;

    default:
      info = new Employee(response.firstName, response.lastName, response.idNumber, response.emailAddress, response.role);

  };
})
  return employeeCards;
};


const codeTemplate = employeeCards => {
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
    ${addEmployeeCard(employeeCards)}
    </body>
    </html>`
}


module.exports = { codeTemplate };