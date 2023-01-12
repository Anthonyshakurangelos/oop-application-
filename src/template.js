const generateTeam = (team) => {
const html = [];


    const createManager = (manager) => {
    return `
    <div class="card-body" style="width: 18rem;">
         <h5 class="card-title">Manager: ${manager.name}</h5>
         <h6 class="card-subtitle mb-2 text-muted"Employee ID ${manager.id}></h6>
         <p class="card-text"></p>
         <a href="#" class="card-link">Email: ${manager.email}</a>
         <a href="#" class="card-link">Office Number: ${manager.officeNumber}</a>
       </div>
     </div> 
    `
    }
     const createEngineer = (engineer) => {
     return `
     <div class="card-body" style="width: 18rem;">
    <h5 class="card-title">Engineer: ${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"Employee ID ${engineer.id}></h6>
    <p class="card-text"></p>
    <a href="#" class="card-link">Email: ${engineer.email}</a>
    <a href="#" class="card-link">GitHub: ${engineer.gitHub}</a>
  </div>
</div>
     `
    } 

    const createIntern = (intern) => {
    return `  
<div class="card-body" style="width: 18rem;">
<h5 class="card-title">Intern: ${intern.name}</h5>
<h6 class="card-subtitle mb-2 text-muted"Employee ID ${intern.id}></h6>
<p class="card-text">${intern.school}.</p>
<a href="#" class="card-link">Email: ${intern.email}</a>
<a href="#" class="card-link"></a>
</div>
</div>
    `
    }
    
    html.push(team.filter((employee)=>employee.getRole()==="Manager").map((manager)=> generateManager(manager)))
    html.push(team.filter((employee)=>employee.getRole()==="Engineer").map((engineer)=> generateEngineer(Engineer)))
    html.push(team.filter((employee)=>employee.getRole()==="Intern").map((intern)=> generateIntern(Intern)))

   



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
 
// </body>
// </html>`;
}