function managerCard(manager) {
 
  return `
  <div class="col" id="employee-card">
  <div class="card text-white bg-info mb-3 mx-4" style="max-width: 25rem;">
      <div class="card-header"><h5 class="card-title">${manager.role}</h5></div>
      <div class="card-body">
        <p class="card-text">${manager.firstName} ${manager.lastName}</p>
        <p class="card-text">ID Number: ${manager.id}</p>
        <p class="card-text">Email: ${manager.email}</p>
        <p class="card-text">Office Number: ${manager.officeNumber}</p>
      </div>
  </div>
  </div>`
 
}

function engineerCard(engineer) {
 
 return `
 <div class="col" id="employee-card">
 <div class="card text-white bg-info mb-3 mx-4" style="max-width: 25rem;">
 <div class="card-header"><h5 class="card-title">${engineer.role}</h5></div>
  <div class="card-body">
      <p class="card-text">${engineer.firstName} ${engineer.lastName}</p>
       <p class="card-text">ID Number: ${engineer.id}</p>
        <p class="card-text">Email: ${engineer.email}</p>
        <p class="card-text">GitHub: ${engineer.github}</p>
   </div>
   </div>
   </div>`
 
}

function internCard(intern) {
 
  return `
  <div class="col" id="employee-card">
  <div class="card text-white bg-info mb-3 mx-4" style="max-width: 25rem;">
    <div class="card-header"><h5 class="card-title">${intern.role}</h5></div>
    <div class="card-body">
      <p class="card-text">${intern.firstName} ${intern.lastName}</p>
      <p class="card-text">ID Number: ${intern.id}</p>
      <p class="card-text">Email: ${intern.email}</p>
      <p class="card-text">Office Number: ${intern.school}</p>
    </div>
</div>
</div>`

}

function addEmployeeCard(employeeCards) { 
  console.log(employeeCards)
  let empCrds = "";
  employeeCards.forEach(employee => {
  switch (employee.getRole()) {
    case "Manager":
      empCrds += managerCard(employee)
      break;

    case "Engineer":
      empCrds += engineerCard(employee)
      break;

    case "Intern":
      empCrds += internCard(employee)
      break;

    default:
     break;

  };
})
  return empCrds;
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
    <div class="row row-cols-1 row-cols-md-3 g-4">
    ${addEmployeeCard(employeeCards)}
    </div>
    </body>
    </html>`
}


module.exports = codeTemplate;