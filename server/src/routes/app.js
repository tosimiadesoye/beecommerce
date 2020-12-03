const router = require("express").Router();
const multer = require("multer");
const controller = require("../app/controllers/app");
const imageUploadMulter = require('../app/image/app');

router.post("/", controller.createNewProduct);
//upload a single image
//router.post("/", imageUploadMulter.upload.single('upload'), controller.createNewProduct);
router.get("/", controller.getProduct);//
router.get("/:id", controller.productById);//
router.delete("/:id", controller.getProductByIdAndDelete);
router.put("/:id", controller.getProductByIdAndUpdate);
router.put("/", controller.updateManyProducts);
router.delete("/", controller.deleteManyProducts);


module.exports = router;