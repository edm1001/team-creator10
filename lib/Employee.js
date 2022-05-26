class Employee {
    //constructor to set user values to the employee card
    constructor(name, id, email){
        this.name= name;
        this.id=id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee"
    }
}
module.exports = Employee;