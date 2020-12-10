const router = require("express").Router(); 
const cartController = require("../cart/controllers/controller"); 
router.post("/", cartController.addToCart); 
console.log(cartController.addToCart)
router.get("/", cartController.getCart); 
router.delete("/empty", cartController.emptyCart); 
module.exports = router;
