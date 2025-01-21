const db = require('../database.js');  // Import the db connection

// Get all users
const findAll = (callback) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err.message);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

// Create a new user
const create = (userData, callback) => {
  const { username, gmail, password,role } = userData;
  db.query(
    'INSERT INTO users (username, gmail, password , role) VALUES (?, ?, ?,?)',
    [username, gmail, password,role],
    (err, results) => {
      if (err) {
        console.error('Error inserting user:', err.message);
        return callback(err, null);
      }
      return callback(null, results);
    }
  );
};

// Update user information
const update = (id, userData, callback) => {
  const { username, gmail, password, role } = userData;
  db.query(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [username, gmail, password,role, id],
    (err, results) => {
      if (err) {
        console.error('Error updating user:', err.message);
        return callback(err, null);
      }
      return callback(null, results);
    }
  );
};

// Delete a user by ID
const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error deleting user:', err.message);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

module.exports = {
  findAll,
  create,
  update,
  deleteUser
};
