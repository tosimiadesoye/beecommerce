const auth = require('../routes/authRoutes');
const user = require('../routes/userRoutes');

module.exports = app => {
    app.use("/", auth)
    app.use("/", user)
   
}