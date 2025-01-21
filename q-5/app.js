const express = require('express');
const userRouter = require('./router/userrouter.js'); // Import user routes

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Use the userRouter for any route starting with /users
app.use('/users', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
