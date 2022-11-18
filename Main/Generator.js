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
      <header class='header text-center p-4 m-2 bg-danger text-light'>
      <h2>My Team</h2>
      </header>
  
      <main class="row">
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
    listItem = 'Office Number: '+employee.getOfficeNumber();
  }else if(role === 'Intern'){
    listItem = 'School: '+  employee.getSchool();
  }
  else{
    listItem = 'Github: ' +employee.getGithub();
  }

  return `<div class="card bg-light m-4 mx-auto display-inline" style="width: 18rem;">
            <div class="card-header text-light bg-primary">
            <h4>${employee.name}</h4>
            <h4>${employee.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush m-3 border">
              <li class="list-group-item">ID: ${employee.getId()}</li>
              <li class="list-group-item">Email: ${employee.getEmail()}</li>
              <li class="list-group-item">${listItem}</li>
            </ul>
          </div>`
}


module.exports = generateHTML;
