const Employee = require("../models/employees");
const User = require("../models/user");

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {

    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ success: true, employee });
  } catch (error) {
    res.status(400).json({ error: "please provide valid data" });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json({ success: true, employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an employee by ID
exports.getManager = async (req, res) => {
  try {
    const employee = await Employee.find({
      isManager: true,      
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ success: true, employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an employee by ID
exports.updateEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ success: true, employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an employee by ID
exports.deleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
