const MongoClient = require("mongodb").MongoClient,
  format = require("util").format;

MongoClient.connect("mongodb://127.0.0.1:27017/MovieReview", function (
  err,
  db
) {
  if (err) {
    throw err;
  } else {
    console.log("Connected");
  }
  db.collectionName(function (err, collections) {
    console.log(collections);
  });
  db.close();
});
