const express = require("express");
const server = express();

server.use(express.json());

server.get("/", async (res) => {
  res.status(200).json({ api: "Server Running" });
});

let games = [
  {
    title: "Pacman",
    genre: "Arcade",
    releaseYear: 1980
  },
  {
    title: "Adventure",
    genre: "Action-Adventure",
    releaseYear: 1980
  },
  {
    title: "The Legend of Zelda: A Link to the Past",
    genre: "Action-Adventure",
    releaseYear: 1991
  },
  {
    title: "Super Mario Kart",
    genre: "Driving",
    releaseYear: 1992
  }
];

server.get("/games", (req, res) => {
  res.status(200).json(games);
});

server.post("/games", (req, res) => {
  let { title, genre, releaseYear } = req.body;
  if (title && genre && releaseYear) {
    res.status(201).json(req.body);
  } else {
    res.status(422).json({ message: "Title and Genre are required" });
  }
});

module.exports = server;
