const express = require("express");
const registerController = require("@/controllers/admin/auth/registerForm.controller");
const router = express.Router();

router.get("/", registerController.show);
module.exports = router;
