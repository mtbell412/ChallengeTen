const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./Generator');
const fs = require('fs');
let employeeArr = []


const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee?',
            choices: ['Engineer', 'Manager', 'Intern']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github link',
            when: ({ employeeType }) => {
                return (employeeType === 'Engineer')
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your officeNumber',
            when: ({ employeeType }) => {
                return (employeeType === 'Manager')
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend',
            when: ({ employeeType }) => {
                return (employeeType === 'Intern')
            }
        }
    ])
        .then((answers) => {
            let employee;
            if(answers.employeeType ==='Engineer'){
                employee = new Engineer(answers.name,answers.id,answers.email,answers.github);
            }else if(answers.employeeType ==='Manager'){
                employee = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
            } else{
                employee = new Intern(answers.name,answers.id,answers.email,answers.school);
            }
            
            employeeArr.push(employee);
            inquirer.prompt([{
                type: 'list',
                name: 'repeat',
                message: 'Would you like to add another employee',
                choices: ['Yes', 'No']
            }])
            .then((choice) => {
                if(choice.repeat === 'Yes'){
                    questions();
                }else{
                    //generate html
                    console.log(employeeArr);
                    const htmlPageContent = generateHTML(employeeArr);
                    fs.writeFile('index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
                }

            })

        });
}

questions();


