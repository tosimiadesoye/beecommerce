const router = require("express").Router();
const controller = require("../contact/controller");
router.post("/api/contact", controller.createContactForm);
router.get("/api/contact", controller.getContactForm);
module.exports = router;
