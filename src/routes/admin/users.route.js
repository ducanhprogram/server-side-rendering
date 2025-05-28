const express = require("express");
const usersController = require("@/controllers/admin/users.controller");
const usersValidators = require("@/validators/admin/users.validator");
const router = express.Router();

router.get("/", usersController.index);
router.post("/", usersValidators.createUser, usersController.store);
router.get("/create", usersController.create);
router.get("/:id", usersController.show);
router.get("/:id/edit", usersController.edit);

module.exports = router;
