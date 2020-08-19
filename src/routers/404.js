const express = require('express');
const router = new express.Router();


router.get('*', (req, res) => {
    return res.status(404).send({ code: 404, error: 'Nothing here, Check /api/lang'});
});

module.exports = router;