
const express = require("express");

const app = express();
const ExpressError = require("./expressError")

app.use(express.json());

const liRoutes = require("./routes/list");


app.use("/list", liRoutes);



/** 404 handler */

app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
  });
  
  /** general error handler */
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err.message,
    });
  });
  
  module.exports = app;