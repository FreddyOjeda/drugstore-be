const {validationResult} = require('express-validator');

const validate_result = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({
            status: false,
            errors: errors.array()
        });
    }

    next();
};

module.exports = {validate_result};