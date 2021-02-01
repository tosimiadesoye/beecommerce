const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
// const path = require('path')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = {
  origin: "http://localhost:5000",
  optionSuccessStatus: 200,
  // header
};

const port = process.env.PORT || 80;
const app = express();

//passing the middleware before the routes to avoid getting undefined
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors(corsOptions.origin));
app.use(cookieParser());
//importing product routes
require("./src/routesHandler/app")(app);
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to product application authentication" });
});

//importing mongo db connection from config
require("./config/mongodb");
//I'm gonna delete this one if it works
// app.use(express.static(path.join(__dirname, "client", "build")));
// app.use("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(port, () => {
  console.log("Port running on localhost " + port);
});

//importing the counts of documents, not sure why it's not working
const server = require("./src/authentication/server");
server.initial;
