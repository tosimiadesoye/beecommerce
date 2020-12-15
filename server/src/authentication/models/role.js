const mongoose = require('mongoose');
mongoose.set('debug', true)
const Schema = mongoose.Schema;
const Role = new Schema({
    name: String
});

const role = mongoose.model("Role", Role);
module.exports = role; 