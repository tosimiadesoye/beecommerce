const {DB_PASSWORD, DB_USERNAME}=require('../config')
module.exports = {
    dbUrl: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.vn17y.mongodb.net/Products?retryWrites=true&w=majority`
}
// module.exports = {
//   dbUrl: "mongodb://localhost:27017/Products",
// };
