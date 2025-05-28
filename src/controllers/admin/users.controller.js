//tầng điều khiển
const userService = require("@/services/user.service");
const response = require("@/utils/response");
const throw404 = require("@/utils/throw404");

exports.index = async (req, res) => {
    const page = req.query.page ?? 1;
    const limit = req.query.limit ?? 10;
    const { items, total } = await userService.getAll(page, limit);

    res.render("admin/users/index", {
        title: "Users | Admin Dashboard",
        users: items,
        total,
    });
};

exports.show = async (req, res) => {
    const user = await userService.getById(+req.params.id);
    res.render("admin/users/show", {
        title: "Users | Admin Dashboard",
        user,
    });
};

exports.edit = async (req, res) => {
    const user = await userService.getById(+req.params.id);
    res.render("admin/users/edit", {
        title: "Users | Admin Dashboard",
        errors: {},
        old: {},
        user,
    });
};

exports.create = async (req, res) => {
    res.render("admin/users/create", {
        title: "Users | Admin Dashboard",
        errors: {},
        old: {},
    });
};

exports.store = async (req, res) => {
    const { confirm_password, ...body } = req.body;
    const user = await userService.create(body);

    res.redirect("/admin/users"); // phương thức redirect  => get
};
