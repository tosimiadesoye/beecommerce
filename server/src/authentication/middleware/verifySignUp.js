const db = require('../models/app')

const ROLES = db.ROLES; //[ 'user', 'admin', 'moderator' ]

const User = db.user; //Model { User }



checkDuplicateUsernameOrEmail = (req, res, next) => {
//– check duplications for username
    User.findOne({ //find one document
        username: req.body.username
        //using exec to execute helper function, executes the query
    }).exec((err, user) => { //- when using mongoose, documents can be retrieved using helpers. Every model method that accepts query conditions can be executed by means of a callback or the exec method.
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: 'Failed! Username is already in use' });
            return;
        }
    });
    //– check duplications for email
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.status(400).send({ message: 'Failed! Email already in use' })
            return;
        }
    });
    next();
}

//– check if roles in the request is legal or not
checkRolesExisted = (req, res, next) => {
console.log(req.body.roles)
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) { //check if roles is not included in ROLES
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist`
                });
                return;
            };
        };
    };
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
  };
  
  module.exports = verifySignUp;
