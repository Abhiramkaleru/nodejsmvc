const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller.js'); // Import the controller

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update a user
router.put('/:id', userController.updateUser);

// Route to delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
