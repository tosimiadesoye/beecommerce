const router = require("express").Router();
const controller = require('../order/controllers');

router.post('/api/product/order', controller.createOrderedItem)
router.get('/api/product/order', controller.getOrder);

module.exports =router