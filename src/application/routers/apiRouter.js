var express= require('express');
var router = express.Router();

var controller = require('../controllers/apiController');

router.get('/country', controller.getCountries);
router.get('/city', controller.getCity);

module.exports = router;