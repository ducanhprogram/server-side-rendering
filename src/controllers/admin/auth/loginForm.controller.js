exports.show = (req, res) => {
    res.render("admin/layouts/auth/login", {
        title: "Login | Admin Dashboard",
    });
};
