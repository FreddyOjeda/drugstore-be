const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'API SALUD VIDA M.I.A',
    });
});

module.exports = router;