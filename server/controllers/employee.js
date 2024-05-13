const Employee = require('../models/employee')
const logger = require("../utils/logger");

const registerEmployee = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ email: email });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (existingEmployee) {
      logger.info("Email already exists");
      return res.status(200).json({ success: false });
    }

    if (!emailRegex.test(email)) {
      logger.info("Invalid email format");
      return res.status(200).json({ success: false });
    }

    if (password.length < 8) {
      logger.info("Password should be at least 8 characters long");
      return res
        .status(200).json({ success: false });
    }

    if (password !== confirmPassword) {
      logger.info("Password and confirm password do not match");
      return res
        .status(200).json({ success: false });
    }

    const register = await Employee.create(req.body);
    logger.info("Registration successful");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginEmployee = async (req, res) => {
  const {email, password} = req.body;
  try {
    const username = await Employee.findOne({email: email})
    if (username) {
      if (username.password == password) {
        logger.info("Login Success");
        res.status(200).json({ success: true });
      } else {
        logger.info("The password is incorrect");
        res.status(200).json({ success: false })
      }
    } else {
      logger.info("No record exitsed")
      res.status(200).json({ success: false })
    }
  }
  catch(error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = { 
  registerEmployee,
  loginEmployee
};
