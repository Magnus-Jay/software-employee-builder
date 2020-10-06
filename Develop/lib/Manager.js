// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
      super(id, name, email)
      this.officeNumber = officeNumber;
      this.role = "Manager"
    }
    getOfficeNumber(){return this.officeNumber}
    
  }


  module.exports = Manager;