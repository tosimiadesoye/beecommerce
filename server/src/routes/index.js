const app = require("./app");
const auth = require("./authRoutes");
const user = require("./userRoutes");
const contact = require("./contact");
const order = require('./order');

module.exports={
    app,
    auth,
    user,
    contact,
    order
}