const {check} = require('express-validator');
const {validate_result} = require('../exceptions/handler');

const validate_product = [
    check('name')
        .exists().withMessage('El campo nombre es requerido')
        .not().isEmpty().withMessage('El campo nombre no puede estar vacío'),

    check('description')
        .exists().withMessage('El campo descripción es requerido')
        .not().isEmpty().withMessage('El campo descripción no puede estar vacío'),

    check('laboratory')
        .exists().withMessage('El campo laboratorio es requerido')
        .not().isEmpty().withMessage('El campo laboratorio no puede estar vacío'),

    check('invima')
        .exists().withMessage('El campo invima es requerido')
        .not().isEmpty().withMessage('El campo invima no puede estar vacío'),

    check('batch')
        .exists().withMessage('El campo lote es requerido')
        .not().isEmpty().withMessage('El campo lote no puede estar vacío'),

    check('expiration_date')
        .exists().withMessage('El campo fecha de vencimiento es requerido')
        .not().isEmpty().withMessage('El campo fecha de vencimiento no puede estar vacío'),

    check('price')
        .exists().withMessage('El campo precio es requerido')
        .not().isEmpty().withMessage('El campo precio no puede estar vacío')
        .isNumeric().withMessage('El campo precio debe ser numérico'),

    validate_result
];

module.exports = {validate_product};