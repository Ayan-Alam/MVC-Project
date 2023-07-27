const path = require('path');

const express = require('express');

const processcontroller = require('../controllers/Projects');

const router = express.Router();

router.get('/',processcontroller.getshop);

module.exports = router ;
