const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API esta en funcionamiento");
  });

module.exports = app;
