const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html"); 
});

app.get("/login.html", (req, res) => {
  res.sendFile(__dirname + "/views/login.html"); 
});

app.get("/registro.html", (req, res) => {
  res.sendFile(__dirname + "/views/registro.html"); 
});


app.listen(3000., function () {
  console.log("Servidor corriendo");
});


