const express = require("express");
const productsController = require("@/controllers/admin/products.controller");
const router = express.Router();

router.get("/", productsController.index);
router.get("/create", productsController.create);
router.get("/:id", productsController.show);
router.get("/:id/edit", productsController.edit);

module.exports = router;
