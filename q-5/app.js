const express = require("express");
const userRouter = require("./router/userrouter.js");

const app = express();
const port = process.env.PORT;

app.use(express.json()); // parse JSON body

app.use("/users", userRouter);

// server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
