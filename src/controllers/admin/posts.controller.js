exports.index = async (req, res) => {
    res.render("admin/posts");
};

exports.show = async (req, res) => {
    res.render("admin/posts/show");
};

exports.edit = async (req, res) => {
    res.render("admin/posts/edit");
};

exports.create = async (req, res) => {
    res.render("admin/posts/create");
};
