const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');

const generateHTML = ({ name, id, officeNumber, email}) =>
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
    <h5 class="card-title">Manager ${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"Employee ID ${id}></h6>
    <p class="card-text">${}.</p>
    <a href="#" class="card-link">Email: ${email}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
 
</body>
</html>`;

inquirer
  .prompt([
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
      message: 'What is Managers email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is managers office number?',
    },
    {
      type: 'input',
      name: '',
      message: '?',
    },
    // {
    //   type: 'input',
    //   name: 'linkedin',
    //   message: 'Enter your LinkedIn URL.',
    // },
  ])

  

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


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
// ```