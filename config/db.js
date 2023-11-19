const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongodb+srv://Heal:8onX1VOZNwAIoXip@cluster0.hjewe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log("Something went wrong with Database connection");
    process.exit(1);
  }
};

module.exports = connectDB;
