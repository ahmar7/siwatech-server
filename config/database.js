const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(
      "mongodb+srv://ahmarjabbar7:xrgqvPNGA46MBOyZ@siwatech.irrcnwc.mongodb.net/Siwatech"
    )
    .then((data) => {
      console.log(`Db connected successfully with ${data.connection.host}`);
    });
};

module.exports = database;
