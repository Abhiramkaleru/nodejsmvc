const db = require('../database.js'); // Ensure this is set to your database connection

// Get all users
const findAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error fetching users:', err.message);
        return reject(err); // Reject the promise with the error
      }
      resolve(results); // Resolve the promise with the results
    });
  });
};

// Create a new user
const create = (userData) => {
  const { username, gmail, password, role } = userData;
  const query = 'INSERT INTO users (username, gmail, password, role) VALUES (?, ?, ?, ?)';
  const values = [username, gmail, password, role];

  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error inserting user:', err.message);
        return reject(err); // Reject the promise with the error
      }
      resolve(results); // Resolve the promise with the results
    });
  });
};

// Update user information
const update = (id, userData) => {
  const { username, gmail, password, role } = userData;
  const query = 'UPDATE users SET username = ?, gmail = ?, password = ?, role = ? WHERE id = ?';
  const values = [username, gmail, password, role, id];

  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error updating user:', err.message);
        return reject(err); // Reject the promise with the error
      }
      resolve(results); // Resolve the promise with the results
    });
  });
};

// Delete a user by ID
const deleteUser = (id) => {
  const query = 'DELETE FROM users WHERE id = ?';

  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting user:', err.message);
        return reject(err); // Reject the promise with the error
      }
      resolve(results); // Resolve the promise with the results
    });
  });
};

module.exports = {
  findAll,
  create,
  update,
  deleteUser
};

