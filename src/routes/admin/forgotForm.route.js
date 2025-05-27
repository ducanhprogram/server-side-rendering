const express = require("express");
const forgotPasswordController = require("@/controllers/admin/auth/forgotform.controller");
const router = express.Router();

router.get("/", forgotPasswordController.show);

module.exports = router;
