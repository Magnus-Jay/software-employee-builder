// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")

class Intern extends Intern {
    constructor(id, name, email, github) {
      super(id, name, email)
      this.id = id;
      this.school = school;
      this.role = "Intern"
    }
    getSchool(){return this.school}
    
  }


  module.exports = Intern;