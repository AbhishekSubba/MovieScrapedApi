const express = require("express");
const app = new express();
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbconn = require("./model/mongooseDbConnection");
//const MongoClient = require("./model/MongodbClientConnection");
const MovieListAll = mongoose.model("tblMovieListAll");
const CriticsRating = mongoose.model("tblCriticsRating");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/GetMoviesList", async (req, res) => {
  try {
    const get = await MovieListAll.find();
    res.json(get);
  } catch (err) {
    res.json({ message: err });
  }
});
app.get("/GetCriticsRating", async (req, res) => {
  try {
    var MovieName = req.query.MovieName;
    const get = await CriticsRating.find({ MovieName: MovieName }).select(
      "MovieName CriticName ActualRating TotalRating WebsiteName SourceUrl"
    );
    res.json(get);
  } catch (err) {
    res.json({ message: err.message });
  }
});
app.listen("2500", () => {
  console.log("server started");
});
