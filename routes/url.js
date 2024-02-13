const express = require('express');
const { handleGenerateNewShortUrl, handleRedirect } = require('../controllers/url');
const router = express.Router();

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleRedirect);
module.exports = router;
