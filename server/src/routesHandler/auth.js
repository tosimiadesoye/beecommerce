const auth = require('../routes/authRoutes');
const user = require('../routes/userRoutes')

module.exports = app => {
    app.use("/", auth)
    console.log('auth')
    app.use("/", user)
    console.log('user')
}