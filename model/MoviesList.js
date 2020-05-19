const mongoose = require("mongoose");
const dateFormat = require("dateformat");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;
const MoviesData = new Schema({
  MovieName: {
    type: String,
    required: true,
  },
  MovieType: {
    type: Array,
  },
  ActorName: {
    type: Array,
  },
  DirectoreName: {
    type: Array,
  },
  ProducerName: {
    type: Array,
  },
  WriterName: {
    type: Array,
  },
  MusicDirectorName: {
    type: Array,
  },
  ChoreographerName: {
    type: Array,
  },
  SingerName: {
    type: Array,
  },
  LyricistName: {
    type: Array,
  },
  Releasedate: {
    type: Date,
    required: true,
  },
  RunTimeMinutes: {
    type: String,
  },
  FilmIndustryType: {
    type: String,
    required: true,
  },
  Language: {
    type: String,
  },
});
MoviesData.index(
  {
    MovieName: 1,
    Releasedate: 1,
    FilmIndustryType: 1,
  },
  {
    unique: true,
  }
);
module.exports = mongoose.model("tblMovieListAll", MoviesData);
