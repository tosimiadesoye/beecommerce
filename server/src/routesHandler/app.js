const route = require('../routes/app')

module.exports = app => {
    app.use("/product", route)
}