exports.show = (req, res) => {
    res.render("admin/layouts/auth/forgotPassword", {
        title: "Forgot password | Admin Dashboard",
    });
};
