const express = require('express');
const User=require('../controller/user');
//const Change=require('../controller/student');

const router= express.Router();

router.post('/authenticate',User.authenticate);
router.post('/create',User.create);

module.exports = router;