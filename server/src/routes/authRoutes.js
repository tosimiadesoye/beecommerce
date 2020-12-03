const {verifySignUp}  = require("../authentication/middleware/app");
const controller = require('../authentication/controllers/auth')
const router = require('express').Router();


router.use((req, res, next) => {
    // let _send = res.send;
    // let sent = false;
    // res.send = data => {
    //     if (sent) return;
    //     _send.bind(res)(data)
    //     sent = true
    // }

       res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

   router.post("/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
);
    
   router.post("/api/auth/signin", controller.signin);

   module.exports = router