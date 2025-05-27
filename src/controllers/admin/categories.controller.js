exports.index = async (req, res) => {
    res.render("admin/categories", { title: "Categories | Admin Dashboard" });
};
