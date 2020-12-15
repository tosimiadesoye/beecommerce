const mongoose = require('mongoose');
mongoose.set('debug', true)
const Schema = mongoose.Schema;
const User = new Schema({
    username: String,
    email: String,
    password: String,
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role" //referencee data model
    }]
})
const user = mongoose.model("User", User);
module.exports = user;
