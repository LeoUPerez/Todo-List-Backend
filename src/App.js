const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors()); 
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API esta en funcionamiento");
});

app.use("/login", require("./Routes/RoutesLogin"));

module.exports = app;
