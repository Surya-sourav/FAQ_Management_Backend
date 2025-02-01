const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cache');
const { getFaqs, createFaq } = require('../controllers/faqController');


router.get('/', cacheMiddleware(900), getFaqs);

router.post('/', createFaq);

module.exports = router;