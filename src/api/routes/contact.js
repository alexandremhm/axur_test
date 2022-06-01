const router = require('express').Router();
const Controller = require('../controllers/contact-controller');

router.post('/contact/create-list', Controller.updateContactList);

module.exports = router;
