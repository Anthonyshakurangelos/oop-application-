const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }


getGitHub() { 
  this.gitHub = gitHub;
}

getRole() {
    return 'Engineer';
}

}

module.exports = Engineer;