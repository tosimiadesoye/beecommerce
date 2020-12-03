const mongoose = require('mongoose');
const config = require('./app');

const server = require('../src/authentication/server')
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    //  useMongoClient: true
});
// mongoose.set("useCreateIndex", true);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
   //need to know why this is outputting undefined
    server.initial()
});

mongoose.connection.on('error', console.error.bind(console, 'connection error: '));

