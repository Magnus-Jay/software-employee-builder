// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(id, name, email, github) {
      super(id, name, email)
      this.id = id;
      this.officeNumber = officeNumber;
      this.role = "Manager"
    }
    getofficeNumber(){return this.getofficeNumber}
    
  }


  module.exports = Manager;