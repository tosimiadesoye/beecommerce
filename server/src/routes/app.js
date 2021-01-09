const router = require("express").Router();
const controller = require("../app/controllers/app");
// const multer = require('../app/image/index')
router.get("/api/product", controller.getProduct);
router.get("/api/product/:pId", controller.getLayoutProducts);
router.get("/api/product/:pId/product_type", controller.getLayoutProductForType);
// router.post("/api/product", multer.upload.single('photos'), controller.createNewProduct);
router.post("/api/product", controller.createNewProduct);
router.get("/api/product/:id", controller.productById);//
router.delete("/api/product/:id", controller.getProductByIdAndDelete);
router.patch("/api/product/:id", controller.getProductByIdAndUpdate);
router.put("/api/product", controller.updateManyProducts);
router.put("/api/product/query", controller.getProductBrand);
router.delete("/api/product", controller.deleteManyProducts);
router.get("/api/product_type", controller.getProductType);//e.g http://localhost:5000/api/product_type?keyword=bronzer
router.get("/api/category", controller.getDescription)



module.exports = router;