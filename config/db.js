const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Mognodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
