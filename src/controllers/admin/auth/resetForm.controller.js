exports.show = (req, res) => {
    res.render("admin/layouts/auth/resetPassword", {
        title: "Reset Password | Admin Dashboard",
    });
};
