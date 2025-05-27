const userService = require("@/services/user.service");
exports.getAll = async (req, res) => {
    const users = await userService.getAll();
};
exports.index = async (req, res) => {
    res.render("admin/products/index", {
        title: "Products | Admin Dashboard",
    });
};

exports.show = async (req, res) => {
    res.render("admin/products/show", { title: "Products | Admin Dashboard" });
};

exports.create = async (req, res) => {
    res.render("admin/products/create", {
        title: "Products | Admin Dashboard",
    });
};

exports.edit = async (req, res) => {
    res.render("admin/products/edit", { title: "Products | Admin Dashboard" });
};
