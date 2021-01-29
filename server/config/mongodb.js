const mongoose = require('mongoose');
require('dotenv').config()
//use this for connecting to compass
 const config = require('./config').dbUrl;


const server = require('../src/authentication/server')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    //  useMongoClient: true
});


// mongoose.set("useCreateIndex", true);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
   
    server.initial()
});

mongoose.connection.on('error', console.error.bind(console, 'connection error: '));

