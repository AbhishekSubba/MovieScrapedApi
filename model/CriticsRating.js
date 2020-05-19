const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
const CriticsData = new Schema({
  MovieName: {
    type: String,
    required: true,
  },
  CriticName: {
    type: String,
  },
  ActualRating: {
    type: SchemaTypes.Decimal,
  },
  TotalRating: {
    type: Number,
  },
  WebsiteName: {
    type: String,
  },
  SourceUrl: {
    type: String,
  },
});
CriticsData.index(
  {
    MovieName: 1,
    WebsiteName: 1,
  },
  {
    unique: true,
  }
);
module.exports = mongoose.model("tblCriticsRating", CriticsData);
