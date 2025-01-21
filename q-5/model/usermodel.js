const db = require('../database.js');

// Get all users
const findAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error fetching users:', err.message);
        reject(err); 
      }else{
        resolve(results); 
      }
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
        reject(err); 
      }else{
        resolve(results); 
      }
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
        reject(err); 
      }else{
        resolve(results); 
      }
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
        reject(err); 
      }else{
        resolve(results);
      }
    });
  });
};

module.exports = {
  findAll,
  create,
  update,
  deleteUser
};

