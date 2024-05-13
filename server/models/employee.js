const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 8
  }
});

const Employee = mongoose.model("employees", EmployeeSchema);
module.exports = Employee;
