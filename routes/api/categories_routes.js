const express = require('express');
const router = express.Router();

const {validate_category} = require('../../app/http/requests/category_request');
const {index, show, store, update, destroy} = require('../../app/http/controllers/api/category_controller');

router.get('/', index);
router.get('/:id', show);
router.post('/', validate_category, store);
router.patch('/:id', validate_category, update);
router.delete('/:id', destroy);

module.exports = router;