const path = require('path');

const express = require('express');

const processcontroller = require('../controllers/Projects');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',processcontroller.getaddproduct);

// /admin/add-product => POST
router.post('/add-product',processcontroller.postaddproduct);

module.exports = router ;

