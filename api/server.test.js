const server = require("./server.js");
const request = require("supertest");

describe("GET Tests", () => {
  it("should return JSON", async () => {
    const res = await request(server).get("/games");
    expect(res.type).toBe("application/json");
  });

  it("should return a 200 status code", async () => {
    const res = await request(server).get("/games");
    expect(res.status).toBe(200);
  });

  it("should return an array", async () => {
    const res = await request(server).get("/games");
    const expected = [
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
    expect(res.body).toEqual(expected);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("POST Tests", () => {
  it("should return JSON", async () => {
    const addGame = {
      title: "GoldenEye 007",
      genre: "Shooter",
      releaseYear: 1997
    };
    const res = await request(server)
      .post("/games")
      .send(addGame);
    expect(res.type).toBe("application/json");
  });

  it("should return a 422 status code", async () => {
    const incompleteGame = {
      title: "Adventure",
      genre: "Action-Adventure"
    };
    const res = await request(server)
      .post("/games")
      .send(incompleteGame);
    expect(res.status).toBe(422);
  });

  it("should return a 201 status code", async () => {
    const body = {
      title: "Super Mario Kart",
      genre: "Driving",
      releaseYear: 1992
    };
    const res = await request(server)
      .post("/games")
      .send(body);
    expect(res.status).toBe(201);
  });
});
