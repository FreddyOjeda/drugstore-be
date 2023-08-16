const express = require('express')
const router = express.Router()

const {validate_product} = require("../../app/http/requests/product_request");
const {index, show, store, update, destroy} = require('../../app/http/controllers/api/product_controller')

router.get('/', index);
router.get('/:id', show);
router.post('/:category_id', validate_product, store);
router.patch('/:id/:category_id', validate_product, update);
router.delete('/:id', destroy);

module.exports = router