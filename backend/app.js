const express = require("express");
const experienciasRouter = require("./routes/urls");
const app = express();
app.use(express.json());
app.use(experienciasRouter);

module.exports = app;
