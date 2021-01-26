const router = require("express").Router();
const controller = require("../app/controllers/app");
// const multer = require('../app/image/index')
router.get("/api/product", controller.getProduct);
router.get("/api/product/layout/:pId/product_type", controller.getHomeProductsType);
router.get("/api/product/:pId/product_type", controller.getSimilarProductForType);//'http://localhost:5000/api/product/10/product_type?keyword=mascara'
// router.post("/api/product", multer.upload.single('photos'), controller.createNewProduct);
router.post("/api/product", controller.createNewProduct);
router.get("/api/product/:id", controller.productById);//
router.delete("/api/product/:id", controller.getProductByIdAndDelete);
router.patch("/api/product/:id", controller.getProductByIdAndUpdate);
router.put("/api/product", controller.updateManyProducts);
router.delete("/api/product", controller.deleteManyProducts);
router.get("/api/product_type", controller.getProductType);//e.g http://localhost:5000/api/product_type?keyword=bronzer
router.get("/api/description", controller.getDescription); //`http://localhost:5000/api/description?keyword=${value}



module.exports = router;