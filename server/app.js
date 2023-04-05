const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api-routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", apiRouter);

module.exports = app;
