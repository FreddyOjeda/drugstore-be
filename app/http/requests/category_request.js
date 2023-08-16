const {check} = require('express-validator');
const {validate_result} = require('../exceptions/handler');

const validate_category = [
    check('name')
        .exists().withMessage('El nombre es requerido')
        .not().isEmpty().withMessage('El campo nombre no puede estar vacío'),

    check('description')
        .exists().withMessage('La descripción es requerida')
        .not().isEmpty().withMessage('El campo descripción no puede estar vacío'),

    validate_result
];

module.exports = {validate_category};