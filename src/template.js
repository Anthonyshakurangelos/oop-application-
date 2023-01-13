const generateTeam = (team) => {
const html = [];


    const createManager = (manager) => {
    return `

    <div class="card-content">
    <div class="media">
      <div class="media-left">
      <div class="media-content">
        <p class="title is-4">Manager:</p>
        <p class="subtitle is-6">${manager.getName()}</p>
      </div>
    </div>
    <div class="content">
      <h6>Employee ID:${manager.getId()}</h6>
      <h6>Office Number:${manager.officeNumber} </h6>.
      <a href="#"></a> <a href="#">Email: ${manager.getEmail()} </a>
      <br>
    </div>
  </div>
</div>

    `
    }
     const createEngineer = (engineer) => {
     return `

     <div class="card-content">
     <div class="media">
       <div class="media-left">
       <div class="media-content">
         <p class="title is-4">Engineer:</p>
         <p class="subtitle is-6">${engineer.name}</p>
       </div>
     </div>
     <div class="content">
       <h6>Employee ID:${engineer.getId()}</h6>
       <h6>GitHub:${engineer.gitHub} </h6>.
       <a href="#"></a> <a href="#">Email: ${engineer.getEmail()} </a>
       <br>
     </div>
   </div>
 </div>

     `
    } 

    const createIntern = (intern) => {
    return `  
    
    <div class="card-content">
      <div class="media">
        <div class="media-left">
        <div class="media-content">
          <p class="title is-4">Intern</p>
          <p class="subtitle is-6">${intern.getName()}</p>
        </div>
      </div>
      <div class="content">
        <h6>Employee ID:${intern.getId()}</h6>
        <h6>School:${intern.school} </h6>.
        <a href="#"></a> <a href="#">Email: ${intern.getEmail()} </a>
        <br>
      </div>
    </div>
  </div>

    `
    }

    html.push(team.filter((employee)=>employee.getRole()==="Manager").map((manager)=> createManager(manager)))
    html.push(team.filter((employee)=>employee.getRole()==="Engineer").map((engineer)=> createEngineer(engineer)).join(""))
    html.push(team.filter((employee)=>employee.getRole()==="Intern").map((intern)=> createIntern(intern)).join(""))

   



   return html.join("");
}

module.exports = (team) => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
  <title>Document</title>
</head>
<header>
<h1>Team info</h1>
</header>
<body>
 ${generateTeam(team)}
 </body>
 </html>`;
}