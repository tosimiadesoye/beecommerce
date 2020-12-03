const { authJwt } = require("../authentication/middleware/app");
const controller = require("../authentication/controllers/user");
const router = require('express').Router()



    router.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    router.get("/api/test/all", controller.allAccess);
//cannot get   
router.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

router.get("/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    router.get("/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
    )

    module.exports = router