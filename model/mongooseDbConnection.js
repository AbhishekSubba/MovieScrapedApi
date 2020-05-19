const mongoose = require("mongoose");
const Config = require("config");
mongoose.connect(
  Config.get("MongoDB.ConnectionString"),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log("DB Connected");
    } else {
      console.log("Error connecting to database");
    }
  }
);

const Movieslist = require("./MoviesList");
const CriticsRating = require("./CriticsRating");
