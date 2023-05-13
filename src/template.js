const generateTeam = (team) => {
  const html = [];

  const createManager = (manager) => {
    return `
    <div class="card has-background-primary-light">
    <div class="card-content">
      <p class="title is-4 has-text-primary-dark">${manager.getName()}</p>
      <p class="subtitle is-6 has-text-primary-dark">Manager</p>
      <hr>
      <div class="content">
        <ul>
          <li>Employee ID: ${manager.getId()}</li>
          <li>Office Number: ${manager.officeNumber}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        </ul>
      </div>
    </div>
  </div>
`;
};

const createEngineer = (engineer) => {
return `
  <div class="card has-background-primary-light">
    <div class="card-content">
      <p class="title is-4 has-text-primary-dark">${engineer.getName()}</p>
      <p class="subtitle is-6 has-text-primary-dark">Engineer</p>
      <hr>
      <div class="content">
        <ul>
          <li>Employee ID: ${engineer.getId()}</li>
          <li>GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        </ul>
      </div>
    </div>
  </div>
`;
};

const createIntern = (intern) => {
return `
  <div class="card has-background-primary-light">
    <div class="card-content">
      <p class="title is-4 has-text-primary-dark">${intern.getName()}</p>
      <p class="subtitle is-6 has-text-primary-dark">Intern</p>
      <hr>
      <div class="content">
        <ul>
          <li>Employee ID: ${intern.getId()}</li>
          <li>School: ${intern.school}</li>
          <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        </ul>
      </div>
    </div>
  </div>

     `;
  };

 
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
  <title>Team Info</title>
</head>
<header>
<h1 class="is-size-1 card has-background-primary-light">Team info</h1>
</header>
<body>
 ${generateTeam(team)}
 </body>
 </html>`;
};
