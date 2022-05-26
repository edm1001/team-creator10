const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }


  getEmployeeHtml() {
    return `
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-position mb-4">${this.getRole()}</h6>
        <p class="card-text">ID: ${this.id}</p>
        <p class="card-text">Office Number: ${this.getOfficeNumber()}</p>
        <a href="mailto:${this.email}" class="card-link">${this.email}</a>
    </div>
    `
  }

}


module.exports = Manager;