const express = require("express");
const userRouter = require('./routes/users.js');
const app = express();

app.get('/', (req, res) => {
  console.log("Hello");
  res.send("Hi");
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
