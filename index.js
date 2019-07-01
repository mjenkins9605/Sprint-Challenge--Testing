require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5678;

server.listen(port, () => {
  console.log("Server Running on local host ${port}.");
});