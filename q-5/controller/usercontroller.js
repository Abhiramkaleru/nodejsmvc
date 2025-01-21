const userModel = require('../model/usermodel.js'); 

// Get all users
const getAllUsers = (req, res) => {
  userModel.findAll((err, users) => {
    if (err) {
      return res.status(500).send({ message: 'Error retrieving users' });
    }
    return res.send(users);
  });
};

// Create a new user
const createUser = (req, res) => {
  const userData = req.body;
  userModel.create(userData, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error creating user' });
    }
    return res.status(201).send({ message: 'User created successfully', userId: result.insertId });
  });
};

// Update a user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  userModel.update(userId, userData, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error updating user' });
    }
    return res.send({ message: 'User updated successfully' });
  });
};

// Delete a user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  
  userModel.deleteUser(userId, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error deleting user' });
    }
    return res.send({ message: 'User deleted successfully' });
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
