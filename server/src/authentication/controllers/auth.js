const config = require('../../../config/secret.js')
const db = require('../models/app')
const User = db.user;
const Role = db.role;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    //new Schema
    try {
        const salt = bcrypt.genSaltSync(8);
        const password = await req.body.password;
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt) //generate a hash for the password - 8 is the salt
        });
       
        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (req.body.roles) {
                Role.find(
                    {
                        name: { $in: req.body.roles }
                    },
                    (err, roles) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }
                        user.roles = roles.map(role => role._id);
                        console.log(user.roles)
                        user.save(err => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;

                            }
                            res.send({ message: 'User was registered successfully!' })
                        })
                        
                    });
            } else {
                Role.findOne({ name: "user" }, (err, role) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    user.roles = [role._id];
                    
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }
                        res.send({ message: 'User was registered successfully!' });
                    });
                });
            }
        });
    } catch (err){
        res.send({
            status: false,
            error: err.message
        })
    }
};

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .populate("roles", "-__v") //Specifies paths which should be populated with other documents. 
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err })
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found" });
            }
            //to check a password
            const passwordIsValid = bcrypt.compareSync( //Synchronously tests a string against a hash
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                //401 authorized
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
        //jwt-sign Payload to sign, could be an literal, buffer or string secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
            
            const expiration = process.env.DB_ENV === 'testing'? 100: 604800000;
            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: process.env.DB_ENV === 'testing'? '1d' : '7d',
            });
             res.cookie('token', token, {
                expires: new Date(Date.now() + expiration),
                secure: false, // set to true if your using https
                httpOnly: true,
             })
           
              let authorities = [];
              for (let i = 0; i < user.roles.length; i++) {
                  authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
              }
            
             res.status(200).json({
                 id: user._id,
                 username: user.username,
                 email: user.email,
                 roles: authorities,
                 accessToken: token
            });
        });
};