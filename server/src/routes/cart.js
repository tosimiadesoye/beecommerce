const router = require("express").Router(); 
const cartController = require("../cart/controllers/controller"); 
router.post("/", cartController.addToCart); 
router.get("/", cartController.getCart); 
router.delete("/", cartController.emptyCart); 
module.exports = router;
