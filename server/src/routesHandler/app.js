const route = require("../routes/app");
const auth = require("../routes/authRoutes");
const user = require("../routes/userRoutes");
const contact = require("../routes/contact");

module.exports = (app) => {
  app.use("/", route);
  app.use("/", auth);
  app.use("/", user);
  app.use("/", contact);
};
