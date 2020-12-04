const jwt = require("jsonwebtoken");
const db = require('../models/app');
const config = require('../../../config/secret.js')
const User = db.user; //Model { User }
const Role = db.role; //Model { Role }

//- check if token is provided, legal or not

verifyToken = (req, res, next) => {
    //the token gets generated from x-access-token
    let token = req.headers['x-access-token'];
    console.log(token)
    //checking if token is provided
    if (!token) {
        //status 403 forbidden
        return res.status(403).send({ message: 'No token provided' });
    }
// verify a token symmetric
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        console.log(decoded)
        if (err) {
            //401 unauthorized
            return res.status(401).send({ message: 'Unauthorized' });
        }
        req.userId = decoded.id
        console.log(req.userId)
        next();
    });
};

//- check if roles of the user contains required roles or not
isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find({
            //  - $in selects the documents where the value of a field equals any value in the specified array
            _id: { $in: user.roles } //roles is Role
        }, (err, roles) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            };
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === 'admin') {
                    next();
                    return;
                };
            }; //403 forbidden
            res.status(403).send({ message: "Require Admin Role!" });
            return;
        });
    });
};

isModerator = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        Role.find({
            _id: {$in: user.roles}
        },
            (err,roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "moderator") {
                      next();
                      return;
                    }
                  }
          
                  res.status(403).send({ message: "Require Moderator Role!" });
                  return;
        })
    })
}

const authJwt = {
    verifyToken,
    isAdmin,
    isModerator
};

module.exports = authJwt;