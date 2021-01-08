const routeUtil = require("../routes");


module.exports = (app) => {
  app.use("/", routeUtil.app);
  app.use("/", routeUtil.auth);
  app.use("/", routeUtil.user);
  app.use("/", routeUtil.contact);
  app.use('/', routeUtil.order)
};
