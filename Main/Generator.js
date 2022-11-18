const fs = require('fs');
const path = require('path');

//need to loop through the generatecardhtml until the user is done creating team members


const generateHTML = (employeeArr) =>{
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
  
  <body>
      <header class='header'>
          <h2>My Team</h2>
      </header>
  
      <main>
      ${employeeArr.map((employee)=>{
        return generateCard(employee)

      })}
  
      </main>
  
  </body>
  
  </html>`
}

const generateCard = (employee) =>{
  let listItem = '';
  const role = employee.getRole();

  if(role === 'Manager'){
    listItem = employee.getOfficeNumber();
  }else if(role === 'Intern'){
    listItem = employee.getSchool();
  }
  else{
    listItem = employee.getGithub();
  }

  return `<div class="card" style="width: 18rem;">
            <div class="card-header">
            ${employee.name}
            ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.getId()}</li>
              <li class="list-group-item">${employee.getEmail()}</li>
              <li class="list-group-item">${listItem}</li>
            </ul>
          </div>`
}


module.exports = generateHTML;
