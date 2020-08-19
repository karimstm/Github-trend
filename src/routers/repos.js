const express = require("express");
const router = new express.Router();
const { getLanguages } = require('../controller/repo-controller');

router.get("/api/lang/", getLanguages );

module.exports = router;