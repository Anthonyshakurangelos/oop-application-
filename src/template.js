const generateTeam = (team) => {
const html = [];


    const createManager = (manager) => {
    return `
    <div class="card-body" style="width: 18rem;">
         <h5 class="card-title">Manager: ${manager.getName()}</h5>
         <h6 class="card-subtitle mb-2 "></h6>
         <p class="card-text">Employee ID ${manager.getId()}</p>
         <a href="#" class="card-link">Email: ${manager.getEmail()}</a>
         <a href="#" class="card-link">Office Number: ${manager.officeNumber}</a>
       </div>
     </div> 
    `
    }
     const createEngineer = (engineer) => {
     return `
     <div class="card-body" style="width: 18rem;">
    <h5 class="card-title">Engineer: ${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 "></h6>
    <p class="card-text">Employee ID ${engineer.getId()}</p>
    <a href="#" class="card-link">Email: ${engineer.getEmail()}</a>
    <a href="#" class="card-link">GitHub: ${engineer.gitHub}</a>
  </div>
</div>
     `
    } 

    const createIntern = (intern) => {
    return `  
<div class="card-body" style="width: 18rem;">
<h5 class="card-title">Intern: ${intern.getName()}</h5>
<h6 class="card-subtitle mb-2" ></h6>
<p class="card-text">Employee ID ${intern.getId()}</p>
<p class="card-text">School:${intern.school}</p>
<a href="#" class="card-link">Email: ${intern.getEmail()}</a>
<a href="#" class="card-link"></a>
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
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