const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template');
const pushEmployees = [];
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');






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
const manager = new Manager (name, id, email, officeNumber);
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
  name: 'gitHub',
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
      let { name, id, email, role, gitHub, school, confirmTeam } = employeesInfo; 
      let employee; 
      if (role === "Engineer") {
          employee = new Engineer (name, id, email, gitHub);
      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);
      }
      pushEmployees.push(employee); 

      if (confirmTeam) {

          return createTeam(pushEmployees); 
      } else {

          return pushEmployees;
      }
  })
}



  function init() {
    managerInfo()
    .then(createTeam)
    .then((answers) => {
        return fs.writeFileSync("./dist/index.html", template(answers), "utf-8");
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
}


init();

