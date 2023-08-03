const express = require("express");
const app = express();
const appConfig = require("./config/app.config");
const helmet = require("helmet");

// import utilities
const cors = require("cors");
const httpStatus = require("http-status");

// import routes
const routes = require("./routes");

// app.use(cors(appConfig.corsOptions));
app.use(cors());

// use helmet
app.use(helmet());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to galbry backend." });
});

// main routes
app.use("/api", routes);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).send({ message: "Not Found" });
});

module.exports = app;
