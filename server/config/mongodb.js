const mongoose = require("mongoose");
require("dotenv").config();
//use this to connect to compass
const config = require("./config").dbUrl;

const server = require("../src/authentication/server");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo database");

  server.initial();
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error: ")
);
