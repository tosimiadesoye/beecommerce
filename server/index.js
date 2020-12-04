const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: 'http://localhost:5000',
    optionSuccessStatus: 200
    // header
}

//setting up the cors config
const port = process.env.PORT || 5000;
const app = express();


//the file directory that the images goes to
app.use('/public/upload', express.static("public/upload"));

dotenv.config();

//passing the middleware before the routes to avoid getting undefined
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions.origin))
app.use(cookieParser())
//importing product routes
require('./src/routesHandler/app')(app)


app.get('/', (req, res) => {
    res.json({message: 'Welcome to product application authentication'})
})

//importing mongo db connection from config
require('./config/mongodb');

//importing auth routes
 require('./src/routesHandler/auth')(app)


app.listen(port, () => {
    console.log('Port running on localhost ' + port)
})

//importing the counts of documents, not sure why it's not working
const server = require('./src/authentication/server')
server.initial;