const inquirer = require('inquirer');
const fs = require('fs');
const pushEmployees = [];
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// import manager intern engineer
const generateHTML = ({ name, id, officeNumber, email, school, gitHub}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<header>Team info</header>
<body>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager: ${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"Employee ID ${id}></h6>
    <p class="card-text">${officeNumber}.</p>
    <a href="#" class="card-link">Email: ${email}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card-body">
    <h5 class="card-title">Engineer: ${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"Employee ID ${id}></h6>
    <p class="card-text"></p>
    <a href="#" class="card-link">Email: ${email}</a>
    <a href="#" class="card-link">GitHub: ${github}</a>
  </div>
</div>
<div class="card-body">
    <h5 class="card-title">Manager: ${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"Employee ID ${id}></h6>
    <p class="card-text">${school}.</p>
    <a href="#" class="card-link">Email: ${email}</a>
    <a href="#" class="card-link"></a>
  </div>
</div>
 
</body>
</html>`;

const managerInfo = () => {
 return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their Employee ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is Their email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their office number?',
    },
    
  ])

.then(managerInput => {
const {name, id, email, officeNumber} = managerInput;
const manager = new manager (name, id, email, officeNumber);
pushEmployees.push(manager);

})

};
   const createTeam = () => {
return inquirer.prompt([
{
  type: 'list',
  name: 'role',
  message: 'Choose the employee role.',
  choices: ['Engineer', 'Intern']
},
{
  type: 'input',
 name: 'name',
  message: 'What is the name of the employee?',
},
{
  type: 'input',
  name: 'id',
  message: 'What is the employee ID?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is the employee email?',
},
{
  type: 'input',
  name: 'github',
  message: "what is the employee's github username.",
  when: (input) => input.role === "Engineer",
},
{
  type: 'input',
  name: 'school',
  message: "Please enter the intern's school",
  when: (input) => input.role === "Intern",
},
{
type: 'confirm',
name: 'confirmTeam',
message: 'Would you like to add more team members?',
default: false 
}

 ]) 

 .then(employeesInfo => {
      let { name, id, email, role, github, school, confirmTeam } = employeesInfo; 
      let employee; 
      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);
          console.log(employee);
      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);
          console.log(employee);
      }
      pushEmployees.push(employee); 

      if (confirmTeam) {

          return getTeam(pushEmployees); 
      } else {

          return pushEmployees;
      }
  })
   


  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
   }

//   AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles
// ```

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
