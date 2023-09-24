const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/forms";

mongoose.connect(url,  {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("open", () => {
  console.log("connection");
});
db.on("error", () => {
  console.log("Error");
});

module.exports = db;
