const express = require('express');
const router = express.Router();

router.get('/', require('./api/system'));
router.use('/categories', require('./api/categories_routes'));
router.use('/products', require('./api/products_routes'));

module.exports = router;