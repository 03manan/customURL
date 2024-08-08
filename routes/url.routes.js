const express = require('express');
const {handleGenerateCustomtURL}= require('../controllers/url.controller');
const {redirectToOriginalURL} = require('../controllers/url.controller');
const router = express.Router();


router.post("/url", handleGenerateCustomtURL)
router.get("/:customURL",redirectToOriginalURL)

module.exports = router;