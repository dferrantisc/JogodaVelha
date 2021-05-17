const express = require("express");
const app = express();

const app = require("https").createServer(app);
const io = require("socket.io")(server);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(express.static("view"));

io.on("connection", () => {
  console.log("User Conectado");
});

server.listen(3000);
