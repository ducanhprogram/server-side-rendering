const express = require("express");
const router = express.Router();
const usersRouter = require("./users.route");
const productsRouter = require("./products.route");
const dashboardRouter = require("./dashboard.route");
const categoriesRouter = require("./categories.route");
const resetPasswordRouter = require("./resetPassword.route");
const loginRouter = require("./login.route");
const registerRouter = require("./register.route");
const forgotPassowrdRouter = require("./forgotForm.route");

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/dashboard", dashboardRouter);
router.use("/categories", categoriesRouter);
router.use("/posts", categoriesRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/reset-password", resetPasswordRouter);
router.use("/forgot-password", forgotPassowrdRouter);

module.exports = router;
