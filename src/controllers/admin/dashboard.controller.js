exports.index = async (req, res) => {
    res.render("admin/dashboard", { title: "Dashboard | Admin Dashboard" });
};
