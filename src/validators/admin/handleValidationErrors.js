const response = require("@/utils/response");
const { validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return next();
    }
    const errors = result
        .array({ onlyFirstError: true })
        .reduce((errors, error) => {
            errors[error.path] = error.msg;
            return errors;
        }, {});

    console.log(errors);
    res.render(res.view, {
        title: "Users | Admin Dashboard",
        errors,
        old: req.body,
    });
    // response.error(res, 422, "Unprocessable entity", errors);
};

module.exports = handleValidationErrors;
