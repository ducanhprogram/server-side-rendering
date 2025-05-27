//tầng điều khiển
const userService = require("@/services/user.service");
const response = require("@/utils/response");
const throw404 = require("@/utils/throw404");

exports.getList = async (req, res) => {
    const result = await userService.getAll(req.page, req.limit); //{ items, total }
    //Gọi từ middleware handlePagination
    res.paginate(result);
};

exports.getOne = async (req, res) => {
    res.success(200, req.user);
};

exports.create = async (req, res) => {
    const data = req.body;
    const newUser = await userService.create(data);
    res.success(201, newUser);
};

exports.update = async (req, res) => {
    //Lấy id
    const id = +req.params.user;
    const data = req.body;
    const updateUser = await userService.update(id, data);
    if (!updateUser) {
        return throw404("User not found or no changes made");
    }
    res.success(200, updateUser);
};

exports.remove = async (req, res) => {
    console.log(req.user);
    await userService.remove(req.user.id);
    res.success(204);
};
