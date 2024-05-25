const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/passport');
const employeeController = require('../controller/employeeController');

// Create a new employee
router.post('/create', verifyToken, employeeController.createEmployee);

// Get all employees
router.get('/view', verifyToken, employeeController.getAllEmployees);

// Get an employee by ID
router.put('/view/manager', verifyToken, employeeController.getManager);

// Update an employee by ID
router.put('/update/:id', verifyToken, employeeController.updateEmployeeById);

// Delete an employee by ID
router.delete('/delete/:id', verifyToken, employeeController.deleteEmployeeById);

module.exports = router;
