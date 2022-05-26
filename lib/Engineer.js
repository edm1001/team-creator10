
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
      }
      getGithub() {
        return this.github;
      }
    
      getRole() {
        return "Engineer";
      }
      getEmployeeHtml() {
        return `
        <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-name">${this.name}</h5>
        <h6 class="card-position mb-4">${this.getRole()}</h6>
        <p class="card-text">${this.i}</p>
        <a href="https://www.github.com/${this.github}"class="card-link">GitHub</a>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
    </div>
  </div>
        `
        }
}
//return the extra params, github / Id
module.exports = Engineer;