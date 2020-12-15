const mongoose = require('mongoose');
mongoose.set('debug', true)
mongoose.Promise = global.Promise; //represents the completion of an asynchronous operation;

const db = {};

db.mongoose = mongoose;

db.user = require('./user'); //db.user is the import user
db.role = require('./role'); //db.role is the import role
db.ROLES = ['user', 'admin', 'moderator']; //db.ROLES is this array of 'user', 'admin', 'moderator'

module.exports = db;
