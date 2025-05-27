const express = require("express");
const loginController = require("@/controllers/admin/auth/loginform.controller");
const router = express.Router();

router.get("/", loginController.show);
module.exports = router;
