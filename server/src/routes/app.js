const router = require("express").Router();
const controller = require("../app/controllers/app");


router.post("/api/product", controller.createNewProduct);
router.get("/api/product/:pId", controller.getProduct);//
router.get("/api/product/:id", controller.productById);//
router.delete("/api/product/:id", controller.getProductByIdAndDelete);
router.patch("/api/product/:id", controller.getProductByIdAndUpdate);
router.put("/api/product", controller.updateManyProducts);
router.delete("/api/product", controller.deleteManyProducts);


module.exports = router;