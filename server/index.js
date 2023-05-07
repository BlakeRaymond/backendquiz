const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getName, getClique, getHomeland, createCharacter } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/name", getName)
app.get("/api/clique", getClique)
app.get("/api/homeland", getHomeland)
app.post("/api/character", createCharacter)


app.listen(4000, () => console.log("Server running on 4000"));
