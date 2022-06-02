const router = require('express').Router();
const Controller = require('../controllers/contact-controller');

router.get('/contact/domain-list', Controller.getDomainsList);

module.exports = router;
