const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return "Intern"
  }
  getEmployeeHtml() {
    return `
    <div class="card" style="width: 20rem">
    <div class="card-body">
        <h5 class="card-name">${this.name}</h5>
        <h6 class="card-position mb-4">${this.getRole()}</h6>
        <p class="card-text">${this.id}</p>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
    </div>
  </div>
    `
    }
     
}

module.exports = Intern;