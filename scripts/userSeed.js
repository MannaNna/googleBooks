const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/booskDB"
);

const userSeed = [
  {
    name: "monica lomeli",
    email: "monica.lomelim@gmail.com",
    picture: "https://lh3.googleusercontent.com/a-/AAuE7mBC32_dazs5MfUf7_ybjY-IthfqvqZgZ75WVDSL=s96-c",
    userID: "117101448545771959523"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });