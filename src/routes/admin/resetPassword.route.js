const express = require("express");
const resetPasswordController = require("@/controllers/admin/auth/resetForm.controller");
const router = express.Router();

router.get("/", resetPasswordController.show);
module.exports = router;
