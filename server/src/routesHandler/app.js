const route = require('../routes/app')
const auth = require('../routes/authRoutes');
const user = require('../routes/userRoutes');
const cartRoutes = require('../routes/cart')

module.exports = app => {
    app.use("/", route)
    app.use("/", auth)
    app.use("/", user)
    app.use("/cart", cartRoutes); 
}